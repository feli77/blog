import siteConfig, { providers } from "./src/lib/config";

// @ts-expect-error
const env = import.meta.env ?? {};

const config = siteConfig({
	title: "Feli77's Blog",
	prologue: "The time is gone, the song is over\nThought I'd something more to say.",
	author: {
		name: "Felix",
		email: "me@feli77.com",
		link: "https://feli77.com"
	},
	description: "A campsite to share knowledge and thoughts.",
	copyright: {
		type: "CC BY-NC-ND 4.0",
		year: "2026"
	},
	timezone: "UTC",
	i18n: {
		locales: ["en", "zh-cn", "zh-tw", "ja"],
		defaultLocale: "zh-cn"
	},
	pagination: {
		note: 10,
		jotting: 24
	},
	heatmap: {
		unit: "day",
		weeks: 20
	},
	feed: {
		section: "*",
		limit: 20
	},
	comment: {
		"max-length": 500,
		"hide-deleted": true,
		history: true
	},
	latest: "*"
});

const monolocale = Number(config.i18n.locales.length) === 1;

const turnstile = env.CLOUDFLARE_TURNSTILE_SECRET_KEY ? env.CLOUDFLARE_TURNSTILE_SITE_KEY : undefined;

const push = env.VAPID_PRIVATE_KEY ? env.VAPID_PUBLIC_KEY : undefined;

const email = Boolean(env.EMAIL_FROM);

const oauth = providers([
	{ name: "GitHub", logo: "simple-icons--github", clientID: env.GITHUB_CLIENT_ID, clientSecret: env.GITHUB_CLIENT_SECRET },
	{ name: "Google", logo: "simple-icons--google", clientID: env.GOOGLE_CLIENT_ID, clientSecret: env.GOOGLE_CLIENT_SECRET }
]);

export { turnstile, oauth, monolocale, push, email };

export default config;
