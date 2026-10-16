# The Continental — VR Social House

A responsive, bilingual (English / Portuguese) VRChat community site with a filterable activity feed, original CSS illustrations, a continuous marquee, a working London / GMT−3 pocket watch, and an optional background soundtrack. Scroll reveals respect reduced-motion settings. The site is plain HTML, CSS, and JavaScript; there is no build step or package installation.

## Publish with GitHub Pages

In the repository settings, open **Pages**, choose the `main` branch and `/ (root)` as the publishing source, then save. GitHub Pages will publish `index.html` from the repository root.

## Customize the community

Update the `vrchat` and `discord` destinations in `COMMUNITY_LINKS` in `script.js` with the group's VRChat page and Discord invite URL.

Feed cards and event details are in `index.html`. The UI translations live in the `translations` object in `script.js`; add matching strings in both `en` and `pt` when adding new translatable text.

The background audio file is `assets/backgroundost.mp3`. Browsers may block sound autoplay until someone interacts with the page; the music button in the header lets visitors start or pause the track.

The browser-enforced Content Security Policy only allows the site's own scripts, styles, and audio, plus Google Fonts for type. Review that policy if you add an external embed, script, image, or media source.

When updating the site's HTML, CSS, or JavaScript, bump the `v` query on the stylesheet and script in `index.html` together. This prevents browsers from combining a newly deployed page with cached older assets.

Gatherings are described as happening past midnight in GMT−3; check Discord for the latest plans. The displayed house-coin design is a decorative nod, not a payment or reward system.

The site is an unofficial fan community and is not affiliated with The Continental, Lionsgate, or John Wick.