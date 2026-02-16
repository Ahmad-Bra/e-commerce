# E-commerce Backend — Explanation

## Project Overview

- Purpose: Backend REST API for an e‑commerce application written in TypeScript.
- Tech stack: Node.js, TypeScript, Prisma ORM, Multer for file uploads, mailing, OAuth (Google), Docker support.
- Repo structure highlights: `src/` (controllers, routes, middleware, services, utils), `prisma/` (schema and migrations), `generated/prisma/` (Prisma client), `uploads/` (products, profile).

## Features

- Products: listing, details, create/update/delete operations (`src/controlers/products.ts`).
- Categories & Brands: CRUD operations (`src/controlers/category.ts`, `src/controlers/brands.controller.ts`).
- Authentication: local + OAuth strategies (see `src/stratgies/`), JWT utilities in `src/utils/JwtServices.ts`.
- User Profile: profile endpoints and avatar handling (`src/controlers/profile.controller.ts`, `uploads/profile/`).
- Cart & Wishlist: cart management and wishlist endpoints (`src/controlers/cart.ts`, `src/controlers/wishlist.ts`).
- Orders & Checkout: checkout flow, orders management and payment hooks (`src/controlers/checkout.controller.ts`, `src/controlers/order.controller.ts`, `src/controlers/payments.ts`).
- Addresses: user address management (`src/controlers/address.controller.ts`, `src/routes/address.route.ts`).
- Comments/Reviews: product comments and related routes (`src/controlers/comments.ts`).
- Image handling: upload, processing and serving images (`src/controlers/images.controller.ts`, `src/services/image.service.ts`, `src/utils/multer.config.ts`).
- Mailing: transactional mail support (`src/mail/mail.config.ts`, `src/controlers/mail.controller.ts`).
- Validation & Error Handling: validation helpers and centralized error service in `src/services/ErrorsValidation.ts`.
- Caching & Middleware: caching middleware under `src/middleware/cache/`.

## Routes (top-level)

- `src/routes/products.route.ts` — products endpoints (GET/POST/PUT/DELETE patterns).
- `src/routes/categories.route.ts` — categories.
- `src/routes/brands.route.ts` — brands.
- `src/routes/cart.route.ts` — cart operations.
- `src/routes/wishlist.route.ts` — wishlist.
- `src/routes/checkout.route.ts` — checkout and payment initiation.
- `src/routes/orders.route.ts` — order lifecycle and fetching.
- `src/routes/payments.route.ts` — payment webhooks/actions.
- `src/routes/profile.route.ts` — profile management.
- `src/routes/comments.route.ts` — comments CRUD.
- `src/routes/images.route.ts` — image uploads/serving.
- `src/routes/address.route.ts` — address CRUD.
- `src/routes/auth/*` — auth endpoints (login, register, OAuth callbacks).

Note: open each route file for exact HTTP verbs and middleware usage.

## Data Layer

- Prisma ORM with `prisma/schema.prisma` and migrations in `prisma/migrations/`.
- Generated Prisma client included at `generated/prisma/` — used directly by services/controllers.

## Authentication & Security

- JWT tokens via `src/utils/JwtServices.ts`.
- Google OAuth strategy in `src/stratgies/google.ts`.
- Route protection under `src/middleware/auth/` — review role checks and token validation.

## Uploads & Assets

- Multer configured in `src/utils/multer.config.ts`.
- Local storage directories: `uploads/products/` and `uploads/profile/`.
- Image processing and serving centralized in `src/services/image.service.ts`.

## Mail & Payments

- Mail transport configured in `src/mail/mail.config.ts` and used by `mail.controller`.
- Payments and checkout controllers exist; verify provider-specific configuration and webhook signature verification.

## Docker & Deployment

- `Dockerfile` and `docker-compose.yaml` present for containerized deployment.
- Application relies on environment variables for DB, JWT, mail, OAuth and payment keys.

## How to run (recommended)

1. Install deps and prepare Prisma:

```bash
npm install
npx prisma generate
npx prisma migrate deploy   # use `migrate dev` for local development
```

2. Run locally:

```bash
npm run build   # if project builds to JS
npm run start   # or `npm run dev` for dev mode
```

3. Or with Docker:

```bash
docker-compose up --build
```

## Typical required environment variables

- `DATABASE_URL`
- `JWT_SECRET`
- `SMTP_HOST`, `SMTP_USER`, `SMTP_PASS` (or equivalent)
- `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET` (if using Google OAuth)
- `PAYMENT_PROVIDER_*` (Stripe or other keys)

Search the codebase for exact env variable names (e.g., usage sites in `src/*`).

## Immediate code cleanliness & improvement suggestions

- Fix folder typos: rename `src/controlers/` → `src/controllers/` and `src/stratgies/` → `src/strategies/`; update imports accordingly.
- Centralize configuration into a single `src/config` module to avoid scattered `process.env` usage.
- Enforce TypeScript `strict` options and add explicit types for controller inputs/outputs.
- Add request validation middleware (Joi/Zod) for all route inputs.
- Consolidate image handling into `image.service.ts` and remove duplicated file-handling logic.
- Replace `console.log` with a structured logger (winston or pino).
- Add global error-handling middleware to unify responses and status codes.
- Add ESLint + Prettier and a `prettier`/`lint` script in `package.json`.

## Security & reliability checklist

- Confirm webhook signature verification in payment controllers.
- Validate and sanitize all file upload paths and user inputs.
- Add rate limiting and `helmet` for HTTP hardening.
- Ensure passwords are stored hashed and salted (bcrypt/argon2) and not logged.

## Hotspots to review immediately

- `src/controlers/payments.ts` and `src/controlers/checkout.controller.ts` for payment flow and signature verification.
- `src/utils/multer.config.ts` for upload validation and path safety.
- `generated/prisma/` contents — ensure no secrets or large build artifacts accidentally committed.


