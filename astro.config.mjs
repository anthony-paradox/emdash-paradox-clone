import { fileURLToPath } from "node:url";
import react from "@astrojs/react";
import auditLog from "@emdash-cms/plugin-audit-log";
import { defineConfig, fontProviders } from "astro/config";
import emdash from "emdash/astro";
import vercel from "@astrojs/vercel";
import { libsql, sqlite } from "emdash/db";

const tursoUrl = process.env.TURSO_DATABASE_URL?.replace(/^"|"$/g, "");
const tursoToken = process.env.TURSO_AUTH_TOKEN?.replace(/^"|"$/g, "");
const blobStorageEntry = fileURLToPath(
	new URL("./src/storage/vercel-blob.ts", import.meta.url),
).replaceAll("\\", "/");

export default defineConfig({
	output: "server",
	adapter: vercel(),
	image: {
		layout: "constrained",
		responsiveStyles: true,
	},
	integrations: [
		react(),
		emdash({
			database: tursoUrl
				? libsql({ url: tursoUrl, authToken: tursoToken })
				: sqlite({ url: "file:./data.db" }),
			storage: {
				entrypoint: blobStorageEntry,
				config: {},
			},
			plugins: [auditLog],
			mcp: {
			enabled: true,
			// Restrict AI access to specific user roles
			allowedRoles: ["administrator", "editor"], 
			},
		}),
	],
	fonts: [
		{
			provider: fontProviders.google(),
			name: "JetBrains Mono",
			cssVariable: "--font-mono",
			weights: [400, 500],
			fallbacks: ["monospace"],
		},
	],
	devToolbar: { enabled: false },
	redirects: {
		"/posts": "/blog",
		"/posts/[...slug]": "/blog/[...slug]",
		"/terms": "/terms-of-use",
		"/legal/privacy-policy": "/privacy-policy",
		"/legal/terms-of-use": "/terms-of-use",
		"/legal/terms": "/terms-of-use",
		"/legal/disclaimer": "/disclaimer",
		"/legal/eula": "/eula",
		"/pages/privacy-policy": "/privacy-policy",
		"/pages/terms-of-use": "/terms-of-use",
		"/pages/disclaimer": "/disclaimer",
		"/pages/eula": "/eula",
	},
});
