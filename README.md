# E-commerce Backend

> Minimal instructions for running the backend locally or with Docker.

**Repository layout (important files):**
- [src/index.ts](src/index.ts) — application entry
- [prisma/schema.prisma](prisma/schema.prisma) — Prisma schema
- docker-compose.yaml — optional Docker setup

## Requirements
- Node.js 18+ (or the version your team uses)
- npm or yarn
- A supported database (e.g. PostgreSQL, MySQL, SQLite) configured via `DATABASE_URL`
- Docker & Docker Compose (optional)

## Setup (local)
1. Clone the repo and change into it:

```bash
git clone <repo_url>
cd e-commerce
```

2. Install dependencies:

```bash
npm install
# or: yarn
```

3. Create a `.env` file in the project root and set required variables. Example values:

```
DATABASE_URL="postgresql://user:password@localhost:5432/ecommerce?schema=public"
PORT=3000
NODE_ENV=development
JWT_SECRET=replace_with_a_secure_value

# Mail (adjust if not used)
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=you@example.com
SMTP_PASS=supersecret

# File uploads (if using a cloud provider like Cloudinary)
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

Adjust or add any environment variables your team code expects (check `src/` files such as mail config, JWT helpers, and multer config).

4. Generate Prisma client and run migrations (development):

```bash
npx prisma generate
npx prisma migrate dev --name init
```

For production, prefer `npx prisma migrate deploy` and `npx prisma generate`.

5. Create `uploads/` directories if the app expects local storage:

```bash
# macOS / Linux
mkdir -p uploads/products uploads/profile
# Windows (PowerShell)
New-Item -ItemType Directory -Force uploads\products, uploads\profile
```

6. Start the app (options):

- Development (recommended - uses `nodemon` + `tsx`):

```bash
# starts the watcher and runs TypeScript directly
npm run dev
```

- Build & run (if `package.json` has build/start scripts):

```bash
npm run build
npm start
```

The project already includes `dev`, `dev:docker`, `build`, and `start` scripts. Use `npm run dev` for local development and:

```bash
npm run build
npm start
```
for production.

## Run with Docker
The repository includes `docker-compose.yaml`. To build and run containers:

```bash
docker-compose up --build
```

Adjust `docker-compose.yaml` and environment values as needed before launching (for `DATABASE_URL`, SMTP, file mounts, etc.).

## Helpful commands & troubleshooting
- Check Prisma migration status: `npx prisma migrate status`
- Open Prisma Studio: `npx prisma studio`
- Regenerate client if schema changes: `npx prisma generate`
- View logs: check the console output where the server is running

## What you may need to change
- `DATABASE_URL` — point to your local or hosted DB.
- `JWT_SECRET` — use a secure secret for auth tokens.
- SMTP variables — for sending emails.
- Cloud/file storage credentials — if using Cloudinary or other providers.
- Ports and host settings in `src/index.ts` if you want a different listen address.

If you modify `prisma/schema.prisma` update migrations and run `npx prisma generate`.

## Where to look in the code
- App entry: [src/index.ts](src/index.ts)
- Prisma schema: [prisma/schema.prisma](prisma/schema.prisma)
- Uploads folder: `uploads/` (project root)

---
