# The Continental — VR Social House

A responsive, bilingual (English / Portuguese) VRChat community site with separate Lobby, Dispatch, Gatherings, and People pages, a local-time pocket watch, an optional soundtrack, and a live-ready noticeboard. The site is plain HTML, CSS, and JavaScript; there is no build step or package installation.

## Publish with GitHub Pages

In the repository settings, open **Pages**, choose the `main` branch and `/ (root)` as the publishing source, then save. GitHub Pages will publish `index.html` from the repository root.

## Customize the community

Update the `vrchat` and `discord` destinations in `COMMUNITY_LINKS` in `script.js` with the group's VRChat page and Discord invite URL.

The landing page is `index.html`; the other pages are `dispatch.html`, `gatherings.html`, and `people.html`. UI translations live in the `translations` object in `script.js`; add matching strings in both `en` and `pt` when adding translatable text.

The background audio file is `assets/backgroundost.mp3`. Browsers may block sound autoplay until someone interacts with the page; the music button in the header lets visitors start or pause the track.

The browser-enforced Content Security Policy only allows the site's own scripts, styles, and audio, plus Google Fonts for type. Review that policy if you add an external embed, script, image, or media source.

## Release numbering

The current release is **V7.0.4**, following V7.0.3. Versions use `V<stable-build>.<major-line>.<minor-patch>`:

- Increase the final number for a minor patch; it may advance through 20.
- After minor patch 20, advance the middle number and reset the final number to 0.
- The middle number may advance through 9. After major line 9, advance the stable-build number, reset the other numbers to 0, and mark the new build as **Preview** until it is accepted as stable.
- Advance the first number for each new stable build.

When a release changes the site's HTML, CSS, or JavaScript, set the stylesheet and script `v` query to that release version in all four HTML pages together. This prevents browsers from combining a newly deployed page with cached older assets.

## Noticeboard feed

The noticeboard reads `assets/notices.json` by default. It remains a static fallback until a bot API URL is configured in `DEFAULT_NOTICE_FEED` in `script.js`. Feed values are rendered as text, not HTML.

### Discord bot

`bot/` contains a small Node.js bot and read-only HTTPS-feed service. GitHub Pages cannot run a persistent bot, so deploy this service to an always-on host you control and put it behind HTTPS. The bot fetches recent messages from the configured channel, then keeps its in-memory notice cache current; it publishes only non-empty text messages from the configured author or a webhook in that channel.

1. **Rotate the bot token shared in chat before use.** Store the replacement as the `DISCORD_BOT_TOKEN` environment secret on the host, or in `bot/.env` for local development. Never commit `.env`, paste the token into site JavaScript/HTML, or expose it through logs. The Discord public key and application ID are not needed for this read-only Gateway bot.
2. Copy `bot/.env.example` to `bot/.env` and configure the new token, the channel and author IDs, the site's exact origin (`https://pcontinentalvr.github.io`), and the host's port. IDs are identifiers, not credentials.
3. Enable the **Message Content Intent** in the Discord Developer Portal. The bot needs only View Channel and Read Message History for the configured channel.
4. From `bot/`, run `npm install` and `npm start`. The service exposes `GET /api/notices`; the hosting provider must keep it running and provide HTTPS. The API permits browser requests only from the configured site origin. The notices themselves are public; CORS is not authentication.
5. Once the HTTPS endpoint is deployed, set `DEFAULT_NOTICE_FEED` in `script.js` to its `/api/notices` URL and add that endpoint's origin to `connect-src` in the CSP on all four HTML pages. Until then, the website continues to use the local JSON fallback.

Do not deploy a bot token to GitHub Pages or use the token previously shared in chat; reset it first. Keep any Discord webhook secret out of the bot and repository as well.

Gatherings usually happen past midnight in GMT−3, but there is no fixed schedule. The displayed gold coins are a real community perk for active members, not cash, an investment, or a promise of financial value.

The site is an unofficial fan community and is not affiliated with The Continental, Lionsgate, or John Wick.