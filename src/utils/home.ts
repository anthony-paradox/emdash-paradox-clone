import { getEmDashCollection } from "emdash";
import { homeLive, insightsLive, reviewsLive, workLive } from "../data/live-site";
import { loadEntries } from "./entries";

function pick<T>(cms: T | undefined | null, fallback: T): T {
	return cms == null || (typeof cms === "string" && cms.trim() === "") ? fallback : cms;
}

export async function loadHome() {
	let cms: Record<string, unknown> = {};
	try {
		const result = await getEmDashCollection("home" as "posts", { limit: 1 });
		cms = (result.entries?.[0]?.data as unknown as Record<string, unknown>) ?? {};
	} catch (error) {
		console.warn("EmDash home collection failed", error);
	}

	const [reviews, insights, portfolio] = await Promise.all([
		loadEntries("clutch_reviews"),
		loadEntries("insights"),
		loadEntries("portfolio"),
	]);

	const what = (cms.what_we_do as Record<string, string> | undefined) ?? {};
	const workWith = (cms.work_with_us as Record<string, string> | undefined) ?? {};
	const who = (cms.who_we_are as Record<string, string> | undefined) ?? {};
	const tech = (cms.technology as { description?: string; groups?: typeof homeLive.tech } | undefined) ?? {};
	const heroMedia = (cms.hero_media as Record<string, string> | undefined) ?? {};
	const logos = Array.isArray(cms.brand_logos)
		? (cms.brand_logos as { src?: string }[]).map((item) => item.src).filter(Boolean) as string[]
		: homeLive.logos;
	const pillars = Array.isArray(cms.service_pillars)
		? (cms.service_pillars as typeof homeLive.pillars).map((pillar, index) => ({
			...homeLive.pillars[index],
			...pillar,
			cta: homeLive.pillars[index]?.cta ?? `Learn More About ${pillar.title}`,
		}))
		: homeLive.pillars;
	const problems = Array.isArray(cms.problems) ? (cms.problems as typeof homeLive.problems) : homeLive.problems;
	const records = Array.isArray(cms.metrics) ? (cms.metrics as typeof homeLive.records) : homeLive.records;

	const orderedSlugs = (cms.portfolio_order as string[] | undefined) ?? workLive.map((item) => item.slug);
	const work = orderedSlugs
		.map((slug) => {
			const normalized = slug.replace(/jr-martin/, "j-r-martin");
			return (
				portfolio.find((item) => item.slug === slug || item.slug === normalized) ??
				workLive.find((item) => item.slug === slug || item.slug === normalized)
			);
		})
		.filter((item): item is NonNullable<typeof item> => Boolean(item));

	return {
		...homeLive,
		heroHeadingHtml: pick(cms.hero_heading as string, homeLive.heroHeadingHtml),
		heroBody: pick(cms.hero_body as string, homeLive.heroBody),
		heroImage: pick(heroMedia.graphic, homeLive.heroImage),
		heroPoster: pick(heroMedia.poster, homeLive.heroPoster),
		heroVideo: pick(heroMedia.video, homeLive.heroVideo),
		logoHeaderHtml: pick(what.eyebrow, homeLive.logoHeaderHtml),
		wwdHeadingHtml: pick(what.heading, homeLive.wwdHeadingHtml),
		wwdHtml: pick(what.description, homeLive.wwdHtml),
		logos: logos.length ? logos : homeLive.logos,
		pillars,
		problems,
		records,
		workWithUsLeftHtml: pick(workWith.heading, homeLive.workWithUsLeftHtml),
		workWithUsRightHtml: pick(workWith.subheading, homeLive.workWithUsRightHtml),
		workWithUsBody: pick(workWith.body, homeLive.workWithUsBody),
		who: pick(who.body?.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim(), homeLive.who),
		techCopyHtml: pick(tech.description, homeLive.techCopyHtml),
		tech: tech.groups?.length ? tech.groups : homeLive.tech,
		reviews: (reviews.length ? reviews : reviewsLive).slice(0, 9),
		insights: (insights.length ? insights : insightsLive).slice(0, 3),
		work: (work.length ? work : workLive).slice(0, 8),
	};
}
