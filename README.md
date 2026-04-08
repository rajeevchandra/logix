# Logix Platform Monorepo

A modern educational platform inspired by a Figma design, built as a pnpm monorepo using TypeScript, React, Vite, PostgreSQL, Drizzle ORM, and more. This repository contains all backend, frontend, API, and database code, organized as workspaces.

---

## Table of Contents
- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Scripts & Usage](#scripts--usage)
- [API Codegen](#api-codegen)
- [Database](#database)
- [Development Notes](#development-notes)

---

## Project Structure

```
lib/
  api-client-react/   # React Query API client (generated)
  api-spec/           # OpenAPI spec + Orval config
  api-zod/            # Zod schemas/types (generated)
  db/                 # Drizzle ORM models & config
scripts/              # Utility scripts (TypeScript)
```

## Tech Stack
- **Monorepo Tool:** pnpm workspaces
- **Node.js:** v24
- **TypeScript:** v5.9
- **Frontend:** React, Vite, Tailwind CSS

- **Database:** PostgreSQL, Drizzle ORM, drizzle-zod
- 


## Running the Frontend Only (MathMatrix)

If you only want to run the frontend (no backend required), follow these steps:

1. **Install dependencies** (already done):
  ```sh
  pnpm install
  ```

2. **Set required environment variables:**
  - Create a `.env` file in `artifacts/mathmatrix/` with:
    ```env
    PORT=5173
    BASE_PATH=/
    ```
    (You can change `PORT` if needed.)

3. **Start the frontend development server:**
  ```sh
  pnpm --filter @workspace/mathmatrix run dev
  ```
  - Open your browser to `http://localhost:5173` (or your chosen port).

---

## Getting Started

### Prerequisites
- **Node.js v24** (https://nodejs.org/)
- **pnpm** (https://pnpm.io/)
- **PostgreSQL** (local or remote)

### 1. Clone the repository
```sh
git clone <your-repo-url>
cd logix
```

### 2. Install dependencies
```sh
pnpm install
```

### 3. Set up environment variables
Create a `.env` file at the root or in relevant packages (e.g., `lib/db`) with:
```
DATABASE_URL=postgres://<user>:<password>@<host>:<port>/<db>
```

### 4. Database Migration (Drizzle ORM)
From the `lib/db` directory:
```sh
pnpm run push      # Push schema to database
# or
pnpm run push-force
```

### 5. Build all packages
```sh
pnpm build
```

### 6. Run scripts
Example (from root):
```sh
pnpm --filter @workspace/scripts run hello
```

---

## Scripts & Usage
- **Install:** `pnpm install` (root)
- **Build:** `pnpm build` (root)
- **Typecheck:** `pnpm run typecheck` (root)
- **Database migration:** `pnpm --filter @workspace/db run push`
- **API codegen:** `pnpm --filter @workspace/api-spec run codegen`
- **Run script:** `pnpm --filter @workspace/scripts run hello`

---

## API Codegen
- **OpenAPI Spec:** `lib/api-spec/openapi.yaml`
- **Orval Config:** `lib/api-spec/orval.config.ts`
- **Generate clients/schemas:**
  ```sh
  pnpm --filter @workspace/api-spec run codegen
  ```
  This will update generated API clients in `lib/api-client-react` and Zod schemas in `lib/api-zod`.

---

## Database
- **ORM:** Drizzle ORM
- **Config:** `lib/db/drizzle.config.ts`
- **Models:** `lib/db/src/schema/`
- **Env:** Requires `DATABASE_URL` (see above)

---

## Development Notes
- All packages are TypeScript-first and use strict settings.
- Use **pnpm** for all package management. Other package managers are blocked.
- Each package manages its own dependencies and build output.
- For frontend, see the `artifacts/` directory (if present) for the main app.
- For custom API endpoints, update the OpenAPI spec and regenerate clients.
- For new database models, add to `lib/db/src/schema/` and run migration.

---

## License
MIT
