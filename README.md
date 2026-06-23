# StackScope

Nuxt frontend and Nest backend managed with pnpm workspaces.

## Apps

- `apps/frontend`: Nuxt app on `http://localhost:3000`
- `apps/backend`: Nest API app on `http://localhost:3001`

## Setup

```sh
pnpm install
```

## Development

Run both apps:

```sh
pnpm dev
```

Run one app:

```sh
pnpm dev:frontend
pnpm dev:backend
```

Backend health check:

```sh
curl http://localhost:3001/api/health
```
