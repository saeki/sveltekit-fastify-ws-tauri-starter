# sveltekit-fastify-ws-tauri-starter

This is a starter template for [Tauri](https://tauri.app) apps built with [SvelteKit](https://kit.svelte.dev) and [Fastify](https://www.fastify.dev/).

Before you start, the official guide is a **must-read**: [https://tauri.app/v1/guides/getting-started/setup-sveltekit](https://tauri.app/v1/guides/getting-started/setup-sveltekit).

> **NOTE**
> This guide is for Tauri v1, but this template uses Tauri v2 alpha. The guide for Tauri v2 is not ready yet.

If something goes wrong with this template, try the official template first.

Key points of this template:

- The client app is built with SvelteKit. (SSR is not supported.)
- The backend app is built with Fastify.
- The client app communicates with the backend app via WebSocket.
- The client app is built as static files with `@sveltejs/adapter-static`.
- The client app is bundled with both the Tauri app and the Fastify app.

You can develop the client app and the backend api routes with the same workflow as a normal SvelteKit app and a normal Fastify app without Tauri.

And then, you can build the client app as a Tauri app without any changes to the code.

Users can use both the web app and the desktop app, and the data is shared between them. Like Notion, Slack, for example. 👍

Limitations:

**SSR is not supported**. (It's a limitation of Tauri.)

If you want to use SSR, it's maybe possible with more complex setup. But this template doesn't support it to keep it simple. 😎

## Getting started

### 1. Clone this repository

```bash
git clone
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Copy .env.example to .env

```bash
cp ./frontend/.env.example ./frontend/.env
```

### 4. Run the frontend app and the backend app in development mode

```bash
pnpm dev
```

fontend app: http://localhost:5173/
backend app: http://localhost:3000/

HMR is enabled for both apps.

Try to edit `frontend/src/routes/+page.svelte` and `backend/src/plugins/ws.ts` and see the changes.

### 5. Build the frontend app as a static site and the backend app that bundles that static site

```bash
pnpm build
```

### 6. Run the backend app in production mode

```bash
pnpm start
```

then, the backend app will be launched at http://localhost:3000/

### 7. Build the Tauri app

```bash
pnpm tauri:build
```

then, the Tauri app will be built.

If you want to cross-compile, see the official guide.

That's all. Happy coding! 🎉

## More examples

- [sveltekit-tauri-starter](https://github.com/saeki/sveltekit-tauri-starter)