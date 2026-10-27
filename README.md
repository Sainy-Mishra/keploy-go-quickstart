# Keploy + Go quickstart tutorial

A single-page tutorial that walks through Keploy's **Echo + PostgreSQL** Go quickstart: install the CLI, record real API calls as test cases, and replay them with the database mocked out.

Built with Next.js (App Router) and MDX.

**Live site:** <your-vercel-url>

## What's in here

| Path | What it is |
|---|---|
| `app/page.mdx` | The tutorial itself, written in MDX |
| `app/layout.tsx` | Page shell: header, theme provider, sticky table of contents |
| `components/Callout.tsx` | Info / tip / warning / note boxes used inside the MDX |
| `components/Steps.tsx` | Numbered step list |
| `components/FlowDiagram.tsx` | Diagram of what Keploy does in record and test mode |
| `components/CodeBlock.tsx` | Code block wrapper with a copy button |
| `components/TableOfContents.tsx` | "On this page" sidebar that tracks the heading in view |
| `components/ThemeToggle.tsx` | Dark / light toggle |
| `mdx-components.tsx` | Makes the components above available in every `.mdx` file |

Syntax highlighting comes from `rehype-pretty-code` (Shiki) with matching light and dark themes. Styling is Tailwind CSS v4.

## Run it locally

```bash
git clone https://github.com/Sainy-Mishra/keploy-go-quickstart.git
cd keploy-go-quickstart
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm start
```

The page is fully static.

## Deploy

Import the repo in Vercel. The defaults work, no environment variables are needed.

## Source for the tutorial

The commands follow Keploy's official docs:

- [Echo + Postgres quickstart](https://keploy.io/docs/quickstart/samples-echo/)
- [Installation guide](https://keploy.io/docs/server/installation/)
