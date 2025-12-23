# Cal.com Quickstart

Get Cal.com running locally in minutes.

## Prerequisites

- Node.js >= 18.x
- PostgreSQL >= 13.x
- Yarn
- Docker (optional, for quickest setup)

## Quickest: Docker Setup

```bash
git clone https://github.com/calcom/cal.com.git
cd cal.com
cp .env.example .env
yarn dx
```

This starts a local Postgres instance and the dev server. Test user credentials will be logged to the console.

## Manual Setup

1. **Clone and install**

   ```bash
   git clone https://github.com/calcom/cal.com.git
   cd cal.com
   yarn
   ```

2. **Configure environment**

   ```bash
   cp .env.example .env
   ```

   Generate secrets:

   ```bash
   openssl rand -base64 32  # Add to NEXTAUTH_SECRET
   openssl rand -base64 32  # Add to CALENDSO_ENCRYPTION_KEY
   ```

3. **Set up the database**

   Update `DATABASE_URL` in `.env`:

   ```
   DATABASE_URL='postgresql://<user>:<pass>@<host>:<port>/<db>'
   ```

   Run migrations:

   ```bash
   yarn workspace @calcom/prisma db-migrate
   ```

4. **Start the dev server**

   ```bash
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000).

## Creating Your First User

**Option A: Prisma Studio**

```bash
yarn db-studio
```

Add a user with `email`, `username`, and BCrypt-hashed `password`. Set `metadata` to `{}`.

**Option B: Seed the database**

```bash
cd packages/prisma
yarn db-seed
```

## Common Commands

| Command | Description |
| --- | --- |
| `yarn dev` | Start dev server |
| `yarn dx` | Dev server with Docker database |
| `yarn build` | Build all packages |
| `yarn lint:fix` | Lint and fix all files |
| `yarn type-check` | Type check all packages |
| `yarn test` | Run unit tests |
| `yarn e2e` | Run E2E tests |
| `yarn db-studio` | Open Prisma Studio |

## Troubleshooting

**Node memory issues**: Increase memory limit before running commands:

```bash
export NODE_OPTIONS="--max-old-space-size=16384"
```

**E2E browsers not installed**:

```bash
npx playwright install
```

## Next Steps

- See [README.md](./README.md) for deployment options and integrations
- See [CONTRIBUTING.md](./CONTRIBUTING.md) for contribution guidelines
- See [AGENTS.md](./AGENTS.md) for AI agent development guidelines
