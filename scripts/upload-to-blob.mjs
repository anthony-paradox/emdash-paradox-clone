import { readdir, readFile } from "node:fs/promises";
import { extname, join } from "node:path";
import { list, put } from "@vercel/blob";

const CONTENT_TYPES = {
	".jpg": "image/jpeg",
	".jpeg": "image/jpeg",
	".png": "image/png",
	".gif": "image/gif",
	".webp": "image/webp",
	".avif": "image/avif",
	".svg": "image/svg+xml",
	".pdf": "application/pdf",
};

if (!process.env.BLOB_READ_WRITE_TOKEN && !process.env.BLOB_STORE_ID) {
	console.error("Set BLOB_READ_WRITE_TOKEN (or BLOB_STORE_ID with VERCEL_OIDC_TOKEN)");
	process.exit(1);
}

const directory = "uploads";
const existing = new Set((await list({ limit: 1000 })).blobs.map((blob) => blob.pathname));
console.log(`blob_before ${existing.size}`);

for (const name of await readdir(directory)) {
	const body = await readFile(join(directory, name));
	const contentType = CONTENT_TYPES[extname(name).toLowerCase()] ?? "application/octet-stream";
	await put(name, body, {
		access: "public",
		contentType,
		addRandomSuffix: false,
		allowOverwrite: true,
		cacheControlMaxAge: 60 * 60 * 24 * 30,
	});
	console.log(`${existing.has(name) ? "replaced" : "uploaded"} ${name} ${body.byteLength}`);
}

console.log(`blob_after ${(await list({ limit: 1000 })).blobs.length}`);
