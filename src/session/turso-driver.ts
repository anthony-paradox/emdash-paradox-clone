import { type Client, createClient } from "@libsql/client";
import type { SessionDriver } from "astro";

const strip = (value: string | undefined) => value?.replace(/^"|"$/g, "");

let client: Client | undefined;
let ready: Promise<unknown> | undefined;

// Credentials are read at runtime so they are not inlined into the build.
async function database(): Promise<Client> {
	if (!client) {
		const url =
			strip(process.env.EMDASH_DATABASE_URL ?? process.env.TURSO_DATABASE_URL) ??
			"file:./data.db";
		const authToken = strip(
			process.env.EMDASH_DATABASE_AUTH_TOKEN ?? process.env.TURSO_AUTH_TOKEN,
		);
		client = createClient({ url, authToken });
		ready = client.execute(
			"CREATE TABLE IF NOT EXISTS _astro_sessions (id TEXT PRIMARY KEY, value TEXT NOT NULL, updated_at INTEGER NOT NULL)",
		);
	}
	await ready;
	return client;
}

/**
 * Astro session driver backed by the site's Turso database.
 * Vercel has no persistent filesystem, so the default fs driver cannot keep logins.
 */
export default function tursoSessionDriver(): SessionDriver {
	return {
		async getItem(key) {
			const db = await database();
			const result = await db.execute({
				sql: "SELECT value FROM _astro_sessions WHERE id = ?",
				args: [key],
			});
			return result.rows[0]?.value ?? null;
		},
		async setItem(key, value) {
			const db = await database();
			await db.execute({
				sql: "INSERT INTO _astro_sessions (id, value, updated_at) VALUES (?, ?, ?) ON CONFLICT(id) DO UPDATE SET value = excluded.value, updated_at = excluded.updated_at",
				args: [key, typeof value === "string" ? value : JSON.stringify(value), Date.now()],
			});
		},
		async removeItem(key) {
			const db = await database();
			await db.execute({ sql: "DELETE FROM _astro_sessions WHERE id = ?", args: [key] });
		},
	};
}
