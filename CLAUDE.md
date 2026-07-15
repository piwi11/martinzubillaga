# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

Static site source that powers martinzubillaga.com. No build system, no
package manager, no dependencies — plain HTML/CSS/JS served directly. The
site currently lives under `docs/www/`, with room for future subdomains as
sibling folders under `docs/`.

## Development

There is no build, lint, or test tooling in this repo. To preview changes,
just open the HTML files directly in a browser or serve `docs/www/` with
any static file server (e.g. `python3 -m http.server` from `docs/www/`).

## Architecture

- `docs/www/index.html` — home page. Loads `styles/reset.css` then
  `styles/style.css`, and `scripts/script.js`.
- `docs/www/more-info.html` — secondary page, loads `scripts/more-info.js`.
- `docs/www/404/` — self-contained 404 page with its own `style.css`
  (not shared with the rest of the site).
- `docs/www/styles/style.css` — main visual theme for the site (dark
  "aurora" background with animated gradient blobs via `@keyframes`, plus
  layout for the home/more-info pages). `styles/fonts.css` defines Lato
  weight/style utility classes; `styles/reset.css` is a standard CSS reset.
  Both `index.html` and `more-info.html` share this single stylesheet.
- `docs/www/scripts/script.js` — on `index.html`, fetches a public GitHub
  Gist (hardcoded `gistId`) and renders its content into `#doc-content`
  using a character-by-character typewriter effect.
- `docs/www/scripts/more-info.js` — same typewriter effect, but with a
  hardcoded local string instead of fetching remote content, rendered into
  `#construction-text`.
- Both pages share a `.bg-decor` block (fixed-position animated gradient
  blobs + dot pattern + veil) that must stay in sync between `index.html`
  and `more-info.html` when the background is changed — it's duplicated
  markup, not a shared partial.

## Content changes

The "speaking" text on the home page is *not* edited in this repo — it's
pulled live from an external GitHub Gist referenced by `gistId` in
`scripts/script.js`.
