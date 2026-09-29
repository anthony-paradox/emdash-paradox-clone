import node from "@astrojs/node";
import react from "@astrojs/react";
import auditLog from "@emdash-cms/plugin-audit-log";
import { defineConfig, fontProviders } from "astro/config";
import emdash, { local } from "emdash/astro";
import { sqlite } from "emdash/db";

export default defineConfig({
	output: "server",
	adapter: node({
		mode: "standalone",
	}),
	image: {
		layout: "constrained",
		responsiveStyles: true,
	},
	integrations: [
		react(),
		emdash({
			database: sqlite({ url: "file:./data.db" }),
			storage: local({
				directory: "./uploads",
				baseUrl: "/_emdash/api/media/file",
			}),
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
