# Agent Guidelines

These guidelines apply to all directories in this repository. Use Chinese by default when collaborating with the user. Write commit messages in English and follow the applicable contribution guidelines in `CONTRIBUTING.md`.

## Working Principles

- Follow **Less is More**: make the smallest changes that satisfy the request, and reuse existing components, tools, and dependencies. Do not include unrelated refactoring, bulk formatting, or dependency upgrades.
- Before making changes, inspect the relevant code, configuration, and `git status`, and follow the patterns in nearby files. Preserve the user's existing changes and staging state, and commit only changes related to the current task.
- At the end of each round of work, review the diff, run validation appropriate to the changes, and commit the changes made in that round. Do not create empty commits when there are no changes.
- Unless there is a significant risk, push the current branch to its upstream immediately after committing, without asking for confirmation again. If there are significant risks such as sensitive information, destructive migrations, unresolved validation failures, or branch conflicts, explain the specific problem and defer the push.
- Use a regular push. Do not force-push or rewrite existing history. If the push fails, keep the local commits and report the reason; do not reset or overwrite the remote without authorization.
- When finishing, briefly report the changes, validation results, commit and push status, and any unresolved issues.

## Technology Stack and Architecture

This is a personal multilingual blog based on `astro-theme-thought-lite`, using ESM.

- Astro 6 handles pages, content collections, and server-side Actions; Svelte 5 handles interactive components; TypeScript uses `astro/tsconfigs/strict`.
- Tailwind CSS 4 is integrated through Vite; Iconify provides icons; Swup handles page transitions.
- Markdown/MDX is rendered through remark, rehype, and Shiki, with extensions such as KaTeX. Refer to `astro.config.ts` for the actual behavior.
- Cloudflare Workers hosts the runtime, and D1 (SQLite) is accessed through Drizzle ORM. Wrangler handles previews, migrations, and deployment.
- Use pnpm with the version specified by `packageManager` in `package.json`. Deployment CI uses Node.js 24. Keep `pnpm-lock.yaml` and do not generate lockfiles for other package managers.

| Path | Responsibility |
| --- | --- |
| `site.config.ts`, `src/lib/config.ts` | Site configuration, types, and defaults |
| `astro.config.ts` | Astro integrations, internationalized routing, Markdown rendering, and fonts |
| `src/pages/` | File-based routes, article pages, feeds, OG images, and OAuth endpoints |
| `src/layouts/` | Page structure, headers, and footers |
| `src/components/` | Astro presentation components, Svelte interactive components, and comment UI |
| `src/content/`, `src/content.config.ts` | Content files and collection schemas: `note`, `jotting`, `preface`, and `information` |
| `src/i18n/` | YAML text in four languages and the `i18nit` translation utility |
| `src/actions/` | Server-side logic for comments, identity, push notifications, and email, exported through `index.ts` |
| `src/db/schema.ts`, `drizzle/` | Database schema and migration history |
| `src/lib/` | Shared utilities for configuration, time, authentication, content processing, email, and more |
| `src/styles/` | Global styles, theme colors, and Markdown styles |
| `src/graph/`, `src/fonts/` | OG image generation and font providers |
| `public/`, `src/assets/`, `src/icons/` | Static files, content assets, and SVG icons |
| `scripts/new.ts` | Interactive content creation script |
| `.github/workflows/` | Code quality checks and automatic Cloudflare deployment |

## Code and Content Style

- Follow `biome.json` and `.prettierrc`: tab indentation (width 4), double quotes, semicolons, and no trailing commas. Biome's standard line width is 150, and its HTML line width is 320.
- Format Astro/Svelte files with Prettier first, then run Biome. Process only modified files. Do not change unrelated code or reorder imports solely for stylistic consistency.
- Prefer path aliases already defined in `tsconfig.json`, such as `$config`, `$lib/*`, `$components/*`, `$layouts/*`, `$db/*`, and `$i18n`.
- Put Astro page logic in frontmatter and reuse Svelte components for interactions. Follow existing Svelte patterns such as `<script lang="ts">`, `$props`, `$state`, `$derived`, and `$effect`.
- Prefer existing Tailwind utility classes and semantic colors from `palette.css`, keeping light and dark themes consistent. For page initialization, follow the existing `astro:page-load` lifecycle and avoid registering events multiple times.
- Use `i18nit` and YAML for shared UI text. When adding or changing shared keys, update `en`, `zh-cn`, `zh-tw`, and `ja` together, keeping placeholders consistent. The default language is `en`, and default-language URLs have no language prefix. Prefer Astro i18n utilities for links.
- Store content by collection and language, and ensure frontmatter conforms to `src/content.config.ts`. `note` and `jotting` require `title` and `timestamp`; `preface` requires `timestamp`. Keep the existing date format with a timezone. Translated articles must retain the same relative content path; do not expand the task into full article translations unless requested.
- For database changes, update the schema and generate the corresponding migrations. Do not manually edit existing migration history. Follow existing server-side implementations for authentication, comment rate limiting, input validation, and similar behavior.
- Do not commit `.env`, local `wrangler.toml`, secrets, or generated directories. `worker-configuration.d.ts` is generated by Wrangler. Do not include `.astro/`, `.wrangler/`, `dist/`, or `node_modules/` in commits.

## Common Commands and Validation

| Command | Purpose |
| --- | --- |
| `pnpm install --frozen-lockfile` | Install dependencies according to the lockfile |
| `pnpm dev` | Run local development |
| `pnpm new` | Create an article, jotting, or preface |
| `pnpm check` | Run Astro and TypeScript checks |
| `pnpm lint` | Run Biome lint checks |
| `pnpm exec prettier --write <file>` | Format modified Astro/Svelte files |
| `pnpm exec biome check --write <file>` | Format and check specified files, applying fixes |
| `pnpm build` | Build the site |
| `pnpm preview` | Preview the build locally with Wrangler |
| `pnpm types` | Generate Cloudflare type declarations |
| `pnpm db:migration` | Generate Drizzle migrations |
| `pnpm db:migrate:local` | Apply migrations to local D1 |

- For documentation-only changes, review the content and run `git diff --check`. For code changes, run targeted lint checks and `pnpm check`. For changes to routing, content schemas, dependencies, or build configuration, also run `pnpm build`.
- For UI changes, check the relevant pages, mobile layouts, light and dark themes, and affected languages. For interaction changes, check behavior on initial load and after Swup page transitions.
- The repository currently has no dedicated test script. Do not introduce a test framework for small, low-risk changes. Report environment limitations or existing errors accurately, and do not describe checks that were not run as passing.
- Husky's pre-commit hook runs `lint-staged`, which runs Biome on staged JS/TS/JSON/CSS/Svelte/Astro files. Review the actual diff again after committing.

## Commits and Pushes

- Use **Conventional Commits**: `<type>(<scope>): <description>`, with an optional scope. Common types are `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, and `chore`.
- Write concise English descriptions of the changes, such as `docs: add agent guidelines` or `fix(i18n): preserve locale in article links`. Article content may use `docs(content): ...`.
- Review the staged diff before committing, and explicitly select files or hunks from the current task to avoid including the user's other changes.
- The current main branch is `master`, with `origin/master` as its upstream. `theme` is the theme's upstream remote; do not push routine work to `theme`.
- Pushing to `master` triggers `.github/workflows/deploy.yaml`: building, remote D1 migrations, and deployment to Cloudflare Workers. When assessing push risks, also inspect database, deployment, and runtime changes in the commits to be pushed. If there is no significant risk, push directly as described above.
- When submitting a PR to the upstream theme, follow `CONTRIBUTING.md` and the PR template, including a related Issue, an English description, and disclosure of AI use. Ordinary commits in this repository do not require an additional PR.
