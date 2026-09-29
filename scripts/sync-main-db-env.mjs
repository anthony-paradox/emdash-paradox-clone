import { spawnSync } from "node:child_process";

// Copies the main Turso database credentials from .env into production-only
// EMDASH_DATABASE_* variables, which the Turso integration does not override.
// Run with: node --env-file=.env scripts/sync-main-db-env.mjs
const strip = (value) => value?.replace(/^"|"$/g, "");
const vars = {
	EMDASH_DATABASE_URL: strip(process.env.TURSO_DATABASE_URL),
	EMDASH_DATABASE_AUTH_TOKEN: strip(process.env.TURSO_AUTH_TOKEN),
};

for (const [name, value] of Object.entries(vars)) {
	if (!value) {
		console.error(`${name}: source value missing from .env`);
		process.exit(1);
	}
	const result = spawnSync(`vercel env add ${name} production --sensitive --force --yes`, {
		input: value,
		encoding: "utf8",
		shell: true,
	});
	const output = `${result.stdout}\n${result.stderr}`.split(value).join("[redacted]");
	const status = output.match(/(Added|Overrode|Updated)[^\n]*/)?.[0] ?? output.trim().split("\n").at(-1);
	console.log(`${name}: exit ${result.status} ${status}`);
}
