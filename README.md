# Heart of the City Development Center

The redesigned homepage for [Heart of the City Development Center](https://www.heartofthecity989.com), a day program in Saginaw, Michigan, for adults with intellectual and developmental disabilities. Other pages still link to the live Squarespace site.

## Stack

- [Next.js 16](https://nextjs.org) with the App Router and React Compiler
- React 19
- [Tailwind CSS v4](https://tailwindcss.com) with CSS-first theme tokens in `src/app/globals.css`
- [shadcn/ui](https://ui.shadcn.com) components on Base UI (`src/components/ui`)
- [Hugeicons](https://hugeicons.com) for all icons
- [Atkinson Hyperlegible Next](https://www.brailleinstitute.org/freefont/), chosen for readability, loaded with `next/font`
- [hls.js](https://github.com/video-dev/hls.js) for the event videos
- [oxlint](https://oxc.rs/docs/guide/usage/linter) and [oxfmt](https://oxc.rs) for linting and formatting
- [Bun](https://bun.sh) as the package manager

## Getting started

Use Bun and Node.js 24 or newer:

```bash
bun install
bun dev
```

Open the URL Portless prints, normally [https://heartofthecity.localhost](https://heartofthecity.localhost). If port 443 is taken, run `bun run portless proxy start -p 1355` once and use [https://heartofthecity.localhost:1355](https://heartofthecity.localhost:1355). To skip the proxy, use `PORTLESS=0 bun dev`.

Lint and format with `bun run lint` and `bun run format`.

## Where things live

- `src/app/page.tsx`: the homepage, built from one component per section in `src/components/home`
- `src/app/globals.css`: brand color tokens and shared styles
- `public/images`: logo and program photos, each with a `.json` note on its source

The hero and quote photos come from Unsplash (credited in the footer), and the event videos stream from the live site's Squarespace hosting.

## Open items

- The newsletter form isn't connected to a mailing service yet.
- The footer address (804 S. Hamilton Street) differs from the flyer (4790 Gratiot Rd). Confirm which is current.
- The event videos have no captions.
