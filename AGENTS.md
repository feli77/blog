# Agent 约定

适用于本仓库所有目录。与用户协作时默认使用中文；提交信息使用英文，并遵守 `CONTRIBUTING.md` 中适用的贡献约定。

## 工作原则

- 遵循 **Less is More**：尽量做满足需求的最小更改，复用已有组件、工具和依赖；不顺带重构、批量格式化或升级依赖。
- 修改前检查相关代码、配置及 `git status`，遵循邻近文件的实现方式。保留用户已有的修改及暂存状态，只提交本轮任务涉及的改动。
- 每轮工作完成后检查差异、执行与改动相称的验证，并提交本轮修改；没有修改时不创建空提交。
- 若无重大风险，提交后直接推送当前分支到其上游，无需重复确认。遇到敏感信息、破坏性迁移、未解决的验证失败或分支冲突等重大风险时，说明具体问题，暂缓推送。
- 使用普通推送，不强制推送、不改写已有历史。推送失败时保留本地提交并报告原因，不擅自重置或覆盖远端。
- 结束时简要说明改动、验证结果、提交与推送状态，以及尚未解决的问题。

## 技术栈与架构

这是基于 `astro-theme-thought-lite` 的个人多语言博客，采用 ESM。

- Astro 6 负责页面、内容集合和服务端 Actions；Svelte 5 负责交互组件；TypeScript 使用 `astro/tsconfigs/strict`。
- Tailwind CSS 4 通过 Vite 集成；Iconify 提供图标；Swup 负责页面切换。
- Markdown/MDX 通过 remark、rehype 和 Shiki 渲染，支持 KaTeX 等扩展；具体行为以 `astro.config.ts` 为准。
- Cloudflare Workers 承载运行时，D1（SQLite）通过 Drizzle ORM 访问；Wrangler 负责预览、迁移和部署。
- 使用 pnpm；版本以 `package.json` 的 `packageManager` 为准，部署 CI 使用 Node.js 24。保留 `pnpm-lock.yaml`，不生成其他包管理器的锁文件。

| 路径 | 职责 |
| --- | --- |
| `site.config.ts`、`src/lib/config.ts` | 站点配置及其类型、默认值 |
| `astro.config.ts` | Astro 集成、国际化路由、Markdown 渲染与字体 |
| `src/pages/` | 文件路由、文章页面、Feed、OG 图片及 OAuth 端点 |
| `src/layouts/` | 页面框架、页头与页脚 |
| `src/components/` | Astro 展示组件、Svelte 交互组件与评论界面 |
| `src/content/`、`src/content.config.ts` | 内容文件及集合 schema：`note`、`jotting`、`preface`、`information` |
| `src/i18n/` | 四种语言的 YAML 文案与 `i18nit` 翻译工具 |
| `src/actions/` | 评论、身份、推送和邮件服务端逻辑；由 `index.ts` 导出 |
| `src/db/schema.ts`、`drizzle/` | 数据库结构与迁移记录 |
| `src/lib/` | 配置、时间、鉴权、内容处理、邮件等公共工具 |
| `src/styles/` | 全局样式、主题配色与 Markdown 样式 |
| `src/graph/`、`src/fonts/` | OG 图片生成与字体提供器 |
| `public/`、`src/assets/`、`src/icons/` | 静态文件、内容资源与 SVG 图标 |
| `scripts/new.ts` | 交互式内容创建脚本 |
| `.github/workflows/` | 代码质量检查与 Cloudflare 自动部署 |

## 代码与内容风格

- 以 `biome.json` 和 `.prettierrc` 为准：Tab 缩进（宽度 4）、双引号、分号、不使用尾逗号；Biome 常规行宽 150，HTML 行宽 320。
- Astro/Svelte 文件先使用 Prettier 格式化，再运行 Biome；仅处理修改的文件。不要为统一风格修改无关代码或重排导入。
- 优先使用 `tsconfig.json` 已定义的路径别名，例如 `$config`、`$lib/*`、`$components/*`、`$layouts/*`、`$db/*`、`$i18n`。
- Astro 页面逻辑放在 frontmatter，交互复用 Svelte 组件；Svelte 沿用现有 `<script lang="ts">`、`$props`、`$state`、`$derived`、`$effect` 等写法。
- 优先复用 Tailwind 工具类与 `palette.css` 的语义颜色，保持明暗主题一致。涉及页面初始化时遵循现有 `astro:page-load` 生命周期，并避免重复注册事件。
- 公共 UI 文案使用 `i18nit` 和 YAML，新增或修改公共键时同步 `en`、`zh-cn`、`zh-tw`、`ja`，保留占位符一致。默认语言为 `en`，默认语言 URL 不加语言前缀；链接优先使用 Astro i18n 工具。
- 内容按集合与语言存放，frontmatter 必须符合 `src/content.config.ts`。`note`、`jotting` 需要 `title` 和 `timestamp`，`preface` 需要 `timestamp`；日期沿用带时区写法。翻译文章保留相同的相对内容路径，未要求时不自动扩展为全文翻译。
- 数据库变更修改 schema 并生成对应迁移，不手改既有迁移历史。鉴权、评论限流、输入校验等行为应沿用已有服务端实现。
- 不提交 `.env`、本地 `wrangler.toml`、密钥或生成目录。`worker-configuration.d.ts` 由 Wrangler 生成，`.astro/`、`.wrangler/`、`dist/`、`node_modules/` 不纳入提交。

## 常用命令与验证

| 命令 | 用途 |
| --- | --- |
| `pnpm install --frozen-lockfile` | 按锁文件安装依赖 |
| `pnpm dev` | 本地开发 |
| `pnpm new` | 创建文章、短记或前言 |
| `pnpm check` | Astro 与 TypeScript 检查 |
| `pnpm lint` | Biome lint 检查 |
| `pnpm exec prettier --write <文件>` | 格式化修改的 Astro/Svelte 文件 |
| `pnpm exec biome check --write <文件>` | 对指定文件格式化并检查（会写入修复） |
| `pnpm build` | 构建站点 |
| `pnpm preview` | 使用 Wrangler 本地预览构建产物 |
| `pnpm types` | 生成 Cloudflare 类型声明 |
| `pnpm db:migration` | 生成 Drizzle 迁移 |
| `pnpm db:migrate:local` | 对本地 D1 应用迁移 |

- 纯文档修改检查内容及 `git diff --check` 即可；代码修改执行针对性 lint 和 `pnpm check`；路由、内容 schema、依赖或构建配置修改再执行 `pnpm build`。
- 界面改动检查相关页面、移动端、明暗主题和受影响语言；交互改动检查首次加载及 Swup 页面切换后的行为。
- 仓库目前没有专用测试脚本；不为低风险的小修改引入测试框架。遇到环境限制或已有错误时如实报告，避免将未运行的检查描述为通过。
- Husky 的 pre-commit 会执行 `lint-staged`，对暂存的 JS/TS/JSON/CSS/Svelte/Astro 文件运行 Biome；提交后复查实际差异。

## 提交与推送

- 使用 **Conventional Commits**：`<type>(<scope>): <description>`，scope 可省略；常用 type 为 `feat`、`fix`、`docs`、`style`、`refactor`、`perf`、`test`、`build`、`ci`、`chore`。
- 英文描述简洁说明变化，例如 `docs: add agent guidelines`、`fix(i18n): preserve locale in article links`。文章内容可使用 `docs(content): ...`。
- 提交前检查暂存差异，显式选择本轮文件或 hunk，避免将用户其他修改纳入提交。
- 当前主分支是 `master`，上游为 `origin/master`；`theme` 是主题上游 remote，日常工作不要推送到 `theme`。
- 向 `master` 推送会触发 `.github/workflows/deploy.yaml`：构建、远程 D1 迁移、部署 Cloudflare Workers。评估推送风险时同时检查待推送提交中的数据库、部署和运行时变更；无重大风险时按上述约定直接推送。
- 向主题上游提交 PR 时，遵守 `CONTRIBUTING.md` 与 PR 模板，包括相关 Issue、英文说明和 AI 使用披露；普通本仓库提交不必额外创建 PR。
