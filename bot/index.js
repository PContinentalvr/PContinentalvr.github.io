"use strict";

require("dotenv").config();

const http = require("node:http");
const { Client, Events, GatewayIntentBits } = require("discord.js");

const requiredEnvironment = [
  "DISCORD_BOT_TOKEN",
  "DISCORD_CHANNEL_ID",
  "DISCORD_AUTHOR_ID",
  "SITE_ORIGIN",
];
for (const name of requiredEnvironment) {
  if (!process.env[name]) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
}

const siteOriginUrl = new URL(process.env.SITE_ORIGIN);
if (siteOriginUrl.origin !== process.env.SITE_ORIGIN || siteOriginUrl.protocol !== "https:") {
  throw new Error("SITE_ORIGIN must be the exact HTTPS origin of the published site.");
}

const port = Number(process.env.PORT || 3000);
if (!Number.isInteger(port) || port < 1 || port > 65535) {
  throw new Error("PORT must be a valid TCP port.");
}

const { DISCORD_BOT_TOKEN: token, DISCORD_CHANNEL_ID: channelId, DISCORD_AUTHOR_ID: authorId } = process.env;
const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});

let notices = [];
let noticesReady = false;

function isNotice(message) {
  return message.channelId === channelId
    && (message.author?.id === authorId || typeof message.webhookId === "string")
    && typeof message.content === "string"
    && message.content.trim().length > 0;
}

function toNotice(message) {
  const body = message.content.trim().slice(0, 2000);
  return {
    title: body.split(/\r?\n/, 1)[0].slice(0, 160) || "House notice",
    body,
    author: message.author?.globalName || message.author?.username || "Community member",
    createdAt: new Date(message.createdTimestamp).toISOString(),
  };
}

function rememberMessage(message) {
  notices = notices.filter((notice) => notice.id !== message.id);
  if (isNotice(message)) {
    notices.push({ id: message.id, ...toNotice(message) });
  }
  notices.sort((left, right) => Date.parse(right.createdAt) - Date.parse(left.createdAt));
  notices = notices.slice(0, 10);
}

async function refreshNotices() {
  const channel = await client.channels.fetch(channelId);
  if (!channel?.isTextBased() || !channel.messages) {
    throw new Error("The configured Discord channel is unavailable or is not a text channel.");
  }

  const history = await channel.messages.fetch({ limit: 100 });
  notices = history
    .filter(isNotice)
    .map((message) => ({ id: message.id, ...toNotice(message) }))
    .sort((left, right) => Date.parse(right.createdAt) - Date.parse(left.createdAt))
    .slice(0, 10);
  noticesReady = true;
}

function sendJson(response, status, body, origin) {
  response.writeHead(status, {
    "Cache-Control": "public, max-age=30",
    "Content-Type": "application/json; charset=utf-8",
    "Vary": "Origin",
    "X-Content-Type-Options": "nosniff",
    ...(origin ? { "Access-Control-Allow-Origin": origin } : {}),
  });
  response.end(JSON.stringify(body));
}

const server = http.createServer((request, response) => {
  const origin = request.headers.origin;
  if (origin && origin !== siteOriginUrl.origin) {
    sendJson(response, 403, { error: "Origin not allowed." });
    return;
  }
  const allowedOrigin = origin === siteOriginUrl.origin ? siteOriginUrl.origin : undefined;
  const url = new URL(request.url || "/", "http://localhost");

  if (url.pathname !== "/api/notices") {
    sendJson(response, 404, { error: "Not found." }, allowedOrigin);
    return;
  }
  if (request.method === "OPTIONS") {
    response.writeHead(204, {
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Max-Age": "86400",
      "Vary": "Origin",
      ...(allowedOrigin ? { "Access-Control-Allow-Origin": allowedOrigin } : {}),
    });
    response.end();
    return;
  }
  if (request.method !== "GET") {
    response.setHeader("Allow", "GET, OPTIONS");
    sendJson(response, 405, { error: "Method not allowed." }, allowedOrigin);
    return;
  }
  if (!noticesReady) {
    sendJson(response, 503, { error: "The notice feed is starting up." }, allowedOrigin);
    return;
  }

  sendJson(response, 200, notices.map(({ id, ...notice }) => notice), allowedOrigin);
});

client.on(Events.MessageCreate, rememberMessage);
client.on(Events.MessageUpdate, (_oldMessage, newMessage) => {
  if (newMessage.channelId !== channelId) {
    return;
  }
  if (newMessage.partial) {
    return;
  }
  rememberMessage(newMessage);
});
client.on(Events.MessageDelete, (message) => {
  notices = notices.filter((notice) => notice.id !== message.id);
});
client.on(Events.Error, (error) => console.error("Discord client error.", error));
client.on(Events.ClientReady, async (readyClient) => {
  console.info(`Notice bot connected as ${readyClient.user.tag}.`);
  try {
    await refreshNotices();
  } catch (error) {
    console.error("Could not load the initial Discord notice history.", error);
  }
  const refreshInterval = setInterval(() => {
    void refreshNotices().catch((error) => console.error("Could not refresh Discord notices.", error));
  }, 60_000);
  refreshInterval.unref();
});

server.listen(port, "0.0.0.0", () => {
  console.info(`Notice API listening on port ${port}.`);
});

client.login(token).catch((error) => {
  console.error("Discord bot login failed.", error);
  server.close(() => process.exit(1));
});
