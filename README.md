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

The current release is **V7.0.6**, following V7.0.5. Versions use `V<stable-build>.<major-line>.<minor-patch>`:

- Increase the final number for a minor patch; it may advance through 20.
- After minor patch 20, advance the middle number and reset the final number to 0.
- The middle number may advance through 9. After major line 9, advance the stable-build number, reset the other numbers to 0, and mark the new build as **Preview** until it is accepted as stable.
- Advance the first number for each new stable build.

When a release changes the site's HTML, CSS, or JavaScript, set the stylesheet and script `v` query to that release version in all four HTML pages together. This prevents browsers from combining a newly deployed page with cached older assets.

## Noticeboard feed

The noticeboard reads `assets/notices.json` by default. Feed values are rendered as text, not HTML. The browser requests the JSON without using a stale cached copy.

### Run the Discord notice updater

`bot/update-notices.js` is a one-shot local updater; it does not host a service or stay online. Run it when you want to refresh the latest notices:

1. **Revoke and rotate the bot token shared in chat before use.** Never put the token in site JavaScript/HTML, commit it, or share it again.
2. Install Node.js 20.6 or newer. In PowerShell, from the repository root, copy the example configuration: `Copy-Item bot\.env.example bot\.env`.
3. Edit `bot/.env` locally and set `DISCORD_BOT_TOKEN` to the rotated token. The channel and author IDs are already set to the configured channel and account; adjust them if needed. The `.env` file is ignored by Git.
4. In the Discord Developer Portal, enable **Message Content Intent**. The bot needs only View Channel and Read Message History for the configured channel.
5. Run `npm --prefix bot run update-notices`. The script fetches up to the latest 100 channel messages, selects non-empty text messages from the configured author or a channel webhook, writes the newest 10 into `assets/notices.json`, and exits. It does not change that file if Discord returns an error.
6. Review `assets/notices.json`, then commit and push it. GitHub Pages will publish the update with the site. Run the command again whenever you want to refresh it.

This is a local updater, not a continuously running bot or hosted API. The bot token stays on your machine; the exported notice text becomes public when `assets/notices.json` is published. The Discord public key and application ID are not needed for this read-only REST request. A Discord webhook is write-only and cannot retrieve channel history.

Gatherings usually happen past midnight in GMT−3, but there is no fixed schedule. The displayed gold coins are a real community perk for active members, not cash, an investment, or a promise of financial value.

The site is an unofficial fan community and is not affiliated with The Continental, Lionsgate, or John Wick.