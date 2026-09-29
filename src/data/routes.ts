/** Live marketing URLs and how the clone treats them. */
export type RouteDisposition = "matched" | "redirected" | "excluded";

export const starterPostSlugs = [
	"notes-on-simplicity",
	"a-weekend-with-a-side-project",
	"designing-with-constraints",
	"small-tools-big-impact",
	"learning-in-public",
	"the-case-for-static",
	"building-for-the-long-term",
	"work-in-progress",
];

export const legalCanonical: Record<string, string> = {
	"privacy-policy": "/privacy-policy",
	"terms-of-use": "/terms-of-use",
	terms: "/terms-of-use",
	disclaimer: "/disclaimer",
	eula: "/eula",
};

export const slugAliases: Record<string, Record<string, string>> = {
	people: {
		joshua: "joshua-ballard",
		aiden: "aiden-pearce",
		deepak: "deepak-joseph",
	},
	portfolio: {
		"centeno-schultz": "centeno-schultz-clinic",
		"j-r-martin": "jr-martin-cpa",
		"ally-escrow": "ally-escrow-management",
	},
};

export const routeInventory: {
	path: string;
	disposition: RouteDisposition;
	evidence: string;
}[] = [
	{ path: "/", disposition: "matched", evidence: "Homepage uses EmDash home JSON + live section order." },
	{ path: "/capabilities", disposition: "matched", evidence: "Capability archive family (template-capability)." },
	{ path: "/capabilities/[slug]", disposition: "matched", evidence: "Capability single family with body, related, CTA." },
	{ path: "/industries", disposition: "matched", evidence: "Industry archive family (single-template-industries)." },
	{ path: "/industries/[slug]", disposition: "matched", evidence: "Industry single family with body and related." },
	{ path: "/insights", disposition: "matched", evidence: "Insights archive family (page-insights)." },
	{ path: "/insights/[slug]", disposition: "matched", evidence: "Insight single with TOC, tags, recent sidebar." },
	{ path: "/our-portfolio", disposition: "matched", evidence: "Portfolio archive family (page-portfolios)." },
	{ path: "/our-portfolio/[slug]", disposition: "matched", evidence: "Portfolio single family (single-template-portfolio)." },
	{ path: "/case-studies", disposition: "matched", evidence: "Legacy case-study CPT archive, distinct from portfolio." },
	{ path: "/case-studies/[slug]", disposition: "matched", evidence: "Legacy case-study single." },
	{ path: "/our-team", disposition: "matched", evidence: "People archive (template-members)." },
	{ path: "/our-team/[slug]", disposition: "matched", evidence: "People single (single-template-people)." },
	{ path: "/careers", disposition: "matched", evidence: "Careers archive (archive-careers)." },
	{ path: "/careers/[slug]", disposition: "matched", evidence: "Careers single (single-careers)." },
	{ path: "/locations", disposition: "matched", evidence: "Locations archive (archive-locations)." },
	{ path: "/locations/[slug]", disposition: "matched", evidence: "Location singles with location_details." },
	{ path: "/blog", disposition: "matched", evidence: "Live canonical blog archive (home.php)." },
	{ path: "/blog/[slug]", disposition: "matched", evidence: "EmDash Portable Text single-post at /blog." },
	{ path: "/posts", disposition: "redirected", evidence: "308 to /blog." },
	{ path: "/posts/[slug]", disposition: "redirected", evidence: "308 to /blog/[slug]." },
	{ path: "/privacy-policy", disposition: "matched", evidence: "Live legal canonical." },
	{ path: "/terms-of-use", disposition: "matched", evidence: "Live legal canonical." },
	{ path: "/terms", disposition: "redirected", evidence: "308 to /terms-of-use." },
	{ path: "/disclaimer", disposition: "matched", evidence: "Live legal canonical." },
	{ path: "/eula", disposition: "matched", evidence: "Live legal canonical." },
	{ path: "/legal/[slug]", disposition: "redirected", evidence: "308 to live legal canonicals." },
	{ path: "/pages/[slug]", disposition: "redirected", evidence: "Legal slugs 308 to canonicals; other pages use marketing template." },
	{ path: "/contact-us", disposition: "matched", evidence: "HubSpot form portal 431748." },
	{ path: "/discovery-call", disposition: "matched", evidence: "HubSpot meeting embed." },
	{ path: "/search", disposition: "matched", evidence: "Preserved EmDash search." },
	{ path: "/category/[slug]", disposition: "matched", evidence: "Preserved EmDash taxonomy archive." },
	{ path: "/tag/[slug]", disposition: "matched", evidence: "Preserved EmDash taxonomy archive." },
	{ path: "/rss.xml", disposition: "matched", evidence: "Preserved EmDash RSS." },
	{ path: "/clutch_review", disposition: "excluded", evidence: "Helper CPT; reviews render on homepage, no live archive route." },
];

export function isStarterSlug(slug: string) {
	return starterPostSlugs.includes(slug);
}

export function resolveSlug(collection: string, slug: string) {
	return slugAliases[collection]?.[slug] ?? slug;
}

export function contentSlug(entry: object) {
	const record = entry as { id?: string; slug?: string | null; data?: { slug?: string | null; id?: string } };
	return record.slug ?? record.data?.slug ?? record.id ?? "";
}
