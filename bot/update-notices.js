"use strict";

const { rename, rm, writeFile } = require("node:fs/promises");
const { resolve } = require("node:path");

const repositoryDirectory = resolve(__dirname, "..");
const outputFile = resolve(repositoryDirectory, "assets", "notices.json");
const channelId = process.env.DISCORD_CHANNEL_ID || "1560781623920820325";
const authorId = process.env.DISCORD_AUTHOR_ID || "832410987385585705";
const token = process.env.DISCORD_BOT_TOKEN;

function validateConfiguration() {
  if (!token) {
    throw new Error("DISCORD_BOT_TOKEN is missing. Add a rotated bot token to bot/.env.");
  }
  if (!/^\d{17,20}$/.test(channelId) || !/^\d{17,20}$/.test(authorId)) {
    throw new Error("DISCORD_CHANNEL_ID and DISCORD_AUTHOR_ID must be Discord snowflake IDs.");
  }
}

function toNotice(message) {
  const body = message.content.trim().slice(0, 2000);
  const createdAt = new Date(message.timestamp);
  if (Number.isNaN(createdAt.getTime())) {
    return null;
  }

  return {
    title: body.split(/\r?\n/, 1)[0].slice(0, 160) || "House notice",
    body,
    author: typeof message.author?.global_name === "string"
      ? message.author.global_name
      : typeof message.author?.username === "string" ? message.author.username : "Community member",
    createdAt: createdAt.toISOString(),
  };
}

async function fetchNotices() {
  const response = await fetch(
    `https://discord.com/api/v10/channels/${channelId}/messages?limit=100`,
    {
      headers: { Authorization: `Bot ${token}`, Accept: "application/json" },
      signal: AbortSignal.timeout(15_000),
    },
  );
  if (!response.ok) {
    throw new Error(`Discord returned HTTP ${response.status}; the notices file was not changed.`);
  }

  const messages = await response.json();
  if (!Array.isArray(messages)) {
    throw new TypeError("Discord returned an invalid message list; the notices file was not changed.");
  }

  return messages
    .filter((message) => (
      message
      && (message.author?.id === authorId || typeof message.webhook_id === "string")
      && typeof message.content === "string"
      && message.content.trim().length > 0
    ))
    .map(toNotice)
    .filter(Boolean)
    .sort((left, right) => Date.parse(right.createdAt) - Date.parse(left.createdAt))
    .slice(0, 10);
}

async function writeNotices(notices) {
  const temporaryFile = `${outputFile}.tmp`;
  const contents = `${JSON.stringify(notices, null, 2)}\n`;
  try {
    await writeFile(temporaryFile, contents, { encoding: "utf8", flag: "w" });
    await rename(temporaryFile, outputFile);
  } catch (error) {
    await rm(temporaryFile, { force: true }).catch((cleanupError) => {
      console.error("Could not remove the temporary notices file.", cleanupError);
    });
    throw new Error(`Could not update assets/notices.json: ${error.message}`, { cause: error });
  }
}

async function main() {
  validateConfiguration();
  const notices = await fetchNotices();
  await writeNotices(notices);
  console.info(`Updated assets/notices.json with ${notices.length} notice${notices.length === 1 ? "" : "s"}.`);
  console.info("Review the file, then commit and push it to publish the noticeboard update.");
}

main().catch((error) => {
  console.error(`Notice update failed: ${error.message}`);
  process.exitCode = 1;
});
