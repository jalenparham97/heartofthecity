This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

Use Bun and Node.js 24 or newer. Install dependencies, then start the development server through Portless:

```bash
bun install
bun dev
```

Open the URL printed by Portless, normally [https://heartofthecity.localhost](https://heartofthecity.localhost). Portless assigns the app a free port and proxies this stable hostname to it. Linked Git worktrees automatically get a branch-prefixed hostname.

On this machine, port 443 is occupied, so the proxy is configured on port 1355: [https://heartofthecity.localhost:1355](https://heartofthecity.localhost:1355). Portless remembers and reuses the proxy configuration. To configure the same unprivileged proxy port on another machine:

```bash
bun run portless proxy start -p 1355
```

Check local routing and HTTPS with `bun run portless doctor`. To run Next.js directly without the proxy, use `PORTLESS=0 bun dev`.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
