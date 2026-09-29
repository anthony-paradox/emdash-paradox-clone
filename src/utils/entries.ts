import { getEmDashCollection, getEmDashEntry } from "emdash";
import { findLiveEntry, liveCollections, type LiveEntry } from "../data/live-site";
import { contentSlug, isStarterSlug, resolveSlug } from "../data/routes";

const fixtureKey: Record<string, string> = {
	case_studies: "case-studies",
};

export type Entry = LiveEntry & {
	id?: string;
	publishedAt?: string;
	edit?: Record<string, unknown>;
	data?: Record<string, unknown>;
	tags?: string[];
	accent?: string;
	linkedin?: string;
	mantra?: string;
	locationLabel?: string;
};

function asText(value: unknown): string {
	if (typeof value === "string") return value;
	if (Array.isArray(value)) {
		return value
			.map((block) => {
				if (!block || typeof block !== "object") return "";
				const children = (block as { children?: { text?: string }[] }).children;
				return children?.map((child) => child.text ?? "").join("") ?? "";
			})
			.filter(Boolean)
			.join("\n\n");
	}
	return "";
}

function imageUrl(value: unknown): string | undefined {
	if (!value) return undefined;
	if (typeof value === "string") return value;
	if (typeof value === "object") {
		const image = value as Record<string, unknown>;
		if (typeof image.url === "string") return image.url;
		if (typeof image.src === "string") return image.src;
		const meta = image.meta as Record<string, unknown> | undefined;
		const key = (typeof meta?.storageKey === "string" && meta.storageKey) || (typeof image.id === "string" && image.id);
		if (key) return `/_emdash/api/media/file/${key}`;
	}
	return undefined;
}

function mapEntry(collection: string, entry: {
	id?: string;
	slug?: string | null;
	publishedAt?: string | null;
	edit?: Record<string, unknown>;
	data: Record<string, unknown>;
}): Entry {
	const slug = String(entry.slug ?? entry.id ?? "");
	const live = findLiveEntry(collection, slug) ?? findLiveEntry(fixtureKey[collection] ?? collection, slug);
	const content = asText(entry.data.content) || live?.content || "";
	const excerpt =
		asText(entry.data.excerpt) ||
		asText(entry.data.feedback_summary) ||
		(content ? `${content.split(/\s+/).slice(0, 25).join(" ")}...` : live?.excerpt || "");
	return {
		id: entry.id,
		slug,
		title: String(entry.data.title ?? live?.title ?? "Untitled"),
		excerpt,
		content,
		image: imageUrl(entry.data.featured_image) || imageUrl(entry.data.banner_image) || imageUrl(entry.data.profile_image) || live?.image,
		href: live?.href,
		year: entry.data.year_started != null ? String(entry.data.year_started) : live?.year,
		services: typeof entry.data.services === "string" ? entry.data.services : live?.services,
		date: entry.publishedAt ? new Date(entry.publishedAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }) : live?.date,
		position: typeof entry.data.position === "string" ? entry.data.position : live?.position,
		stars: typeof entry.data.stars === "number" ? entry.data.stars : live?.stars,
		quote: asText(entry.data.feedback_summary) || live?.quote || excerpt,
		banner: imageUrl(entry.data.banner_image) || live?.banner || live?.image,
		publishedAt: entry.publishedAt ?? undefined,
		edit: entry.edit,
		data: entry.data,
		tags: Array.isArray(entry.data.service_tags)
			? (entry.data.service_tags as unknown[]).map(String)
			: live?.tags,
		accent: typeof entry.data.accent_color === "string" ? entry.data.accent_color : undefined,
		linkedin:
			typeof (entry.data.profile_details as { linkedin?: string } | undefined)?.linkedin === "string"
				? (entry.data.profile_details as { linkedin: string }).linkedin
				: undefined,
		mantra:
			typeof (entry.data.profile_details as { mantra?: string } | undefined)?.mantra === "string"
				? (entry.data.profile_details as { mantra: string }).mantra
				: undefined,
		locationLabel:
			typeof (entry.data.location_details as { banner_sub_heading?: string } | undefined)?.banner_sub_heading ===
			"string"
				? (entry.data.location_details as { banner_sub_heading: string }).banner_sub_heading
				: undefined,
	};
}

export async function loadEntries(collection: string): Promise<Entry[]> {
	const key = fixtureKey[collection] ?? collection;
	try {
		const result = await getEmDashCollection(collection as "posts", { limit: 100 });
		if (result.entries?.length) {
			return result.entries
				.filter((entry) => collection !== "posts" || !isStarterSlug(contentSlug(entry)))
				.map((entry) => mapEntry(key, entry as never));
		}
	} catch (error) {
		console.warn(`EmDash collection "${collection}" failed`, error);
	}
	return (liveCollections[key] ?? liveCollections[collection] ?? []).map((entry) => ({ ...entry }));
}

export async function loadEntry(collection: string, slug: string): Promise<Entry | undefined> {
	const key = fixtureKey[collection] ?? collection;
	const resolvedSlug = resolveSlug(key, slug);
	try {
		const result = await getEmDashEntry(collection as "posts", resolvedSlug);
		const resolved = (
			result as unknown as {
				entry?: {
					id?: string;
					slug?: string | null;
					publishedAt?: string | null;
					edit?: Record<string, unknown>;
					data: Record<string, unknown>;
				};
			}
		).entry;
		if (resolved?.data) return mapEntry(key, resolved);
	} catch (error) {
		console.warn(`EmDash entry "${collection}/${slug}" failed`, error);
	}
	return findLiveEntry(key, resolvedSlug) ?? findLiveEntry(key, slug) ?? findLiveEntry(collection, slug);
}

export function excerptFromBody(value: string, words = 25) {
	const clean = value.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
	const parts = clean.split(" ");
	return parts.length > words ? `${parts.slice(0, words).join(" ")}...` : clean;
}
