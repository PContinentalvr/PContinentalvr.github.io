const json = (body, status, origin) => new Response(JSON.stringify(body), {
  status,
  headers: {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
    "Cache-Control": "public, max-age=60",
    "Content-Type": "application/json; charset=utf-8",
    "Vary": "Origin",
    "X-Content-Type-Options": "nosniff",
  },
});

export default {
  async fetch(request, env) {
    const allowedOrigin = env.SITE_ORIGIN;
    const requestOrigin = request.headers.get("Origin");
    if (!allowedOrigin || requestOrigin !== allowedOrigin) {
      return new Response("Forbidden", { status: 403 });
    }
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: {
          "Access-Control-Allow-Origin": allowedOrigin,
          "Access-Control-Allow-Methods": "GET, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Max-Age": "86400",
          "Vary": "Origin",
        },
      });
    }
    if (request.method !== "GET") {
      return json({ error: "Method not allowed." }, 405, allowedOrigin);
    }
    if (!env.DISCORD_BOT_TOKEN || !env.DISCORD_CHANNEL_ID) {
      return json({ error: "The notice feed is not configured." }, 503, allowedOrigin);
    }

    const discordResponse = await fetch(
      `https://discord.com/api/v10/channels/${encodeURIComponent(env.DISCORD_CHANNEL_ID)}/messages?limit=10`,
      { headers: { Authorization: `Bot ${env.DISCORD_BOT_TOKEN}` } },
    );
    if (!discordResponse.ok) {
      console.error("Discord notice request failed with status", discordResponse.status);
      return json({ error: "Discord notices are temporarily unavailable." }, 502, allowedOrigin);
    }

    const messages = await discordResponse.json();
    if (!Array.isArray(messages)) {
      console.error("Discord returned an unexpected notice response.");
      return json({ error: "Discord returned an invalid notice response." }, 502, allowedOrigin);
    }
    const notices = messages
      .filter((message) => typeof message.content === "string" && message.content.trim())
      .map((message) => {
        const content = message.content.trim().slice(0, 2000);
        return {
          title: content.split(/\r?\n/, 1)[0].slice(0, 160) || "House notice",
          body: content,
          author: typeof message.author?.global_name === "string"
            ? message.author.global_name
            : typeof message.author?.username === "string" ? message.author.username : "Community member",
          createdAt: message.timestamp,
        };
      });
    return json(notices, 200, allowedOrigin);
  },
};
