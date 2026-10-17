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

The current release is **V7.0.3**, following V7.0.2. Versions use `V<stable-build>.<major-line>.<minor-patch>`:

- Increase the final number for a minor patch; it may advance through 20.
- After minor patch 20, advance the middle number and reset the final number to 0.
- The middle number may advance through 9. After major line 9, advance the stable-build number, reset the other numbers to 0, and mark the new build as **Preview** until it is accepted as stable.
- Advance the first number for each new stable build.

When a release changes the site's HTML, CSS, or JavaScript, set the stylesheet and script `v` query to that release version in all four HTML pages together. This prevents browsers from combining a newly deployed page with cached older assets.

## Noticeboard feed

The noticeboard reads a public JSON array from `assets/notices.json` by default. It is empty until notices are added, and the page links visitors to Discord in the meantime. Each item can contain string fields `title` and `body`, plus optional `author` and ISO `createdAt`. Content is inserted as text, not HTML.

For automatic Discord announcements, deploy `assets/discord-notices-worker.js` as a Cloudflare Worker. Set the Worker secret `DISCORD_BOT_TOKEN` and a `SITE_ORIGIN` variable to the exact public site origin (for example, `https://pcontinentalvr.github.io`). The channel and owner IDs supplied for this setup are non-secret defaults in the Worker; override them with `DISCORD_CHANNEL_ID` and `DISCORD_AUTHOR_ID` variables if needed. The Worker publishes only recent text posts by that owner or posts sent by a webhook in the configured channel. Give the bot only View Channel and Read Message History permissions for that channel; enable the Message Content intent if Discord requires it for your bot. Set `data-feed-url` on `#notice-feed` in `gatherings.html` and `#notice-preview-message` in `index.html` to the deployed Worker URL, and allow that Worker origin in the `connect-src` directive in all four pages. Never put a bot token or webhook URL in this repository or browser code. A Discord webhook is write-only and cannot retrieve channel history. Any bot token or webhook credential shared in chat should be treated as compromised: rotate the token and revoke/replace the webhook before deployment.

Gatherings usually happen past midnight in GMT−3, but there is no fixed schedule. The displayed gold coins are a real community perk for active members, not cash, an investment, or a promise of financial value.

The site is an unofficial fan community and is not affiliated with The Continental, Lionsgate, or John Wick.