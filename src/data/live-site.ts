export const LOGO = "https://paradoxmarketing.io/wp-content/uploads/2026/03/footer-logo.png";
export const ASSET = "https://paradoxmarketing.io/wp-content/uploads";

export const HUBSPOT = {
	portalId: "431748",
	formId: "286292ac-5334-41bf-a36a-a724aeadd305",
	region: "na1",
	meetingUrl: "https://hs.paradoxmarketing.io/meetings/paradoxmarketing/discovery-call",
	redirectBase: "https://hs.paradoxmarketing.io/discovery-call",
};

export type NavItem = {
	label: string;
	href: string;
	children?: NavItem[];
};

export const primaryNav: NavItem[] = [
	{
		label: "Capabilities",
		href: "/capabilities",
		children: [
			{ label: "Content Marketing", href: "/capabilities/content-marketing" },
			{ label: "CRM Strategy", href: "/capabilities/crm-strategy" },
			{ label: "Demand Generation", href: "/capabilities/demand-generation" },
			{ label: "Digital Brand Development", href: "/capabilities/digital-brand-development" },
			{ label: "HubSpot Experts", href: "/capabilities/hubspot-experts" },
			{ label: "Knowledge Management", href: "/capabilities/knowledge-management" },
			{ label: "Ontraport Experts", href: "/capabilities/ontraport-experts" },
			{ label: "Paid Advertising", href: "/capabilities/paid-advertising" },
			{ label: "Sales & Marketing Integration", href: "/capabilities/sales-marketing-integration" },
			{ label: "Search Engine Optimization", href: "/capabilities/search-engine-optimization" },
		],
	},
	{
		label: "Industries",
		href: "/industries",
		children: [
			{ label: "Real Estate", href: "/industries/real-estate" },
			{ label: "Information Technology", href: "/industries/information-technology" },
			{ label: "Healthcare", href: "/industries/healthcare" },
			{ label: "Legal", href: "/industries/legal" },
			{ label: "Compliance and Insurance", href: "/industries/compliance-and-insurance" },
			{ label: "Professional Services", href: "/industries/professional-services" },
			{ label: "Financial Services", href: "/industries/financial-services" },
			{ label: "Home Services", href: "/industries/home-services" },
			{ label: "Tourism", href: "/industries/tourism" },
			{ label: "Cryptocurrency", href: "/industries/cryptocurrency" },
		],
	},
	{
		label: "Insights",
		href: "/insights",
		children: [
			{ label: "All Insights", href: "/insights" },
			{ label: "Blog", href: "/blog" },
		],
	},
	{ label: "Our Team", href: "/our-team" },
	{ label: "Our Portfolio", href: "/our-portfolio" },
];

export const footerColumns = [
	{
		title: "About Us",
		links: [
			{ label: "Our Team", href: "/our-team" },
			{ label: "Careers", href: "/careers" },
			{ label: "Locations", href: "/locations" },
			{ label: "Contact", href: "/contact-us" },
		],
	},
	{
		title: "Capabilities",
		links: [
			{ label: "SEO", href: "/capabilities/search-engine-optimization" },
			{ label: "Paid Advertising", href: "/capabilities/paid-advertising" },
			{ label: "Content Marketing", href: "/capabilities/content-marketing" },
			{ label: "CRM Strategy", href: "/capabilities/crm-strategy" },
		],
	},
	{
		title: "More Capabilities",
		links: [
			{ label: "HubSpot", href: "/capabilities/hubspot-experts" },
			{ label: "Ontraport", href: "/capabilities/ontraport-experts" },
			{ label: "Demand Generation", href: "/capabilities/demand-generation" },
			{ label: "Brand Development", href: "/capabilities/digital-brand-development" },
		],
	},
	{
		title: "Industries",
		links: [
			{ label: "Healthcare", href: "/industries/healthcare" },
			{ label: "Legal", href: "/industries/legal" },
			{ label: "Financial Services", href: "/industries/financial-services" },
			{ label: "Case Studies", href: "/case-studies" },
		],
	},
];

export const legalLinks = [
	{ label: "Privacy Policy", href: "/privacy-policy" },
	{ label: "Terms of Service", href: "/terms-of-use" },
	{ label: "Disclaimer", href: "/disclaimer" },
	{ label: "EULA", href: "/eula" },
];

export const socials = [
	{ label: "Facebook", href: "https://www.facebook.com/paradoxmarketing", icon: "facebook" as const },
	{ label: "LinkedIn", href: "https://www.linkedin.com/company/paradox-marketing", icon: "linkedin" as const },
	{ label: "Email", href: "mailto:hello@paradoxmarketing.io", icon: "email" as const },
	{ label: "Phone", href: "tel:+18009677273", icon: "phone" as const },
];

export const homeLive = {
	heroHeadingHtml: "Everything Clicks When Your <span>Marketing Connects</span>",
	heroBody:
		"We don’t just sell services; we build the marketing infrastructure your business needs to scale. By connecting your digital presence into one cohesive system, we ensure no lead falls through the cracks and every marketing dollar works toward a specific objective. With a transparent, 1-month opt-out model, we put the burden of proof on our results, not a long-term contract.",
	heroCta: "Let's Talk",
	heroImage: `${ASSET}/2026/06/hero-triangle-2.webp`,
	heroPoster: `${ASSET}/2026/06/hero-bg-scaled.webp`,
	heroVideo: `${ASSET}/2026/06/pdx-video-compressed.mp4`,
	logoHeaderHtml: "Highly Trusted by <span>leading brands</span>",
	logos: [
		`${ASSET}/2026/06/hummingbird-networks-e1773798037595.webp`,
		`${ASSET}/2026/06/movebuddha.webp`,
		`${ASSET}/2026/03/cm-logo-2.svg`,
		`${ASSET}/2026/03/regenexx_las_vegas.svg`,
		`${ASSET}/2026/06/Centeno-Schultz-LOGO-300x300-2.webp`,
		`${ASSET}/2026/03/mopec-logo-400x128-1.webp`,
		`${ASSET}/2026/03/Bedrock-Communities.png`,
		`${ASSET}/2026/06/lgccdxlogo_teal.webp`,
		`${ASSET}/2026/03/sprintlaw-logo-lg-aug-2023.png`,
	],
	wwdHeadingHtml: "What <span>We Do</span>",
	wwdHtml: `<p>We don’t just <strong>sell services,</strong> we build <strong>complete marketing systems.</strong> By connecting your Website, Advertising, and CRM into a cohesive growth focused system, your marketing becomes measurable, predictable, and scalable.</p><p>We ensure your website is built to convert, your ads are targeting the right intent, and your CRM captures every data point, and feeds that intelligence back to your advertising. This creates a closed loop where we can see exactly which ad spend turned into a customer.</p>`,
	pillars: [
		{
			title: "Websites",
			href: "/capabilities/digital-brand-development",
			cta: "Learn More About Websites",
			points: [
				"High-conversion landing pages",
				"SEO & organic growth strategy",
				"Messaging & content alignment",
				"Mobile and performance optimisation",
				"Analytics & event tracking",
			],
		},
		{
			title: "Advertising",
			href: "/capabilities/paid-advertising",
			cta: "Learn More About Advertising",
			points: [
				"Google Ads & Performance Max",
				"Meta advertising campaigns",
				"Retargeting & audience testing",
				"Conversion tracking & attribution",
				"Budget optimisation & reporting",
			],
		},
		{
			title: "CRMs",
			href: "/capabilities/crm-strategy",
			cta: "Learn More About CRMs",
			points: [
				"Automated email & SMS follow-ups",
				"Pipeline visibility & forecasting",
				"Lead scoring & segmentation",
				"Deep-funnel conversion tracking",
				"Data hygiene & process automation",
			],
		},
	],
	problemsHeadingHtml: "These are the <span>common <br>problems we solve</span>",
	problems: [
		{ label: "Wasted Ad Spend", image: `${ASSET}/2026/04/spend-webp.webp` },
		{ label: "Poor Website Conversions", image: `${ASSET}/2026/04/conversion-webp.webp` },
		{ label: "Lost Leads", image: `${ASSET}/2026/04/leads-webp.webp` },
		{ label: "Lack of ROI Visibility", image: `${ASSET}/2026/04/visibility-webp.webp` },
		{ label: "Disconnected Software", image: `${ASSET}/2026/04/disconnected-webp.webp` },
	],
	records: [
		{
			title: "Our Website Metrics",
			stats: [
				{ value: "4 million+", label: "Organic Clicks Generated Annually" },
				{ value: "100+", label: "Websites Under Management" },
			],
		},
		{
			title: "Our Advertising Metrics",
			stats: [
				{ value: "6,000+", label: "Leads Generated Each Month" },
				{ value: "$400K", label: "Monthly Google Ad Spend" },
			],
		},
		{
			title: "Our CRM Metrics",
			stats: [
				{ value: "1000+", label: "Processes Automated" },
				{ value: "170+", label: "Sales Reps Supported" },
			],
		},
	],
	workWithUsLeftHtml: "What It Looks Like To <span>Work With Us</span>",
	workWithUsRightHtml: "Paradox starts with <span>understanding your current marketing systems.</span>",
	workWithUsBody:
		"We take a close look at your current systems, and map out exactly how everything connects, or how it doesn’t. From there, we set clear objectives, establish measurable outcomes, and make sure each stage of the process is structured and transparent so you always know what is happening and why.",
	who:
		"Paradox Marketing is a diverse, remote team of specialists with roots in digital strategy, technology, and real-world problem-solving. With talent spanning more than 12 countries and a people-first mindset, we’ve built a company that values trust, collaboration, and continuous learning.",
	whoSecondary:
		"We grew from early days of shared curiosity and a belief that marketing systems should work together rather than sit in silos. Today, we bring that same collaborative culture to every engagement, blending global perspectives with practical knowledge to support our clients and each other.",
	techCopyHtml:
		"<p>We’re <strong>tech agnostic</strong>. We don’t care which tools you use, as long as they work. We don’t force you into a specific platform just because it’s easier for us. Instead, we work within your existing tech stack to make it run better.</p><p>Most importantly: you own everything. If we parted ways tomorrow, you’d keep every line of code and every bit of data.</p>",
	tech: [
		{
			label: "Website",
			color: "#efb155",
			logos: ["wp-1.png", "woocommerce-1.png", "webflow-1.png", "shopify-1.png", "bigcommerce-1.png"].map(
				(file) => `${ASSET}/2026/03/${file}`,
			),
		},
		{
			label: "Advertising",
			color: "#80cbe2",
			logos: [
				`${ASSET}/2026/06/google-ads.webp`,
				`${ASSET}/2026/06/linked-in-ads-1.webp`,
				`${ASSET}/2026/06/bing-ads.webp`,
				`${ASSET}/2026/06/meta.webp`,
				`${ASSET}/2026/03/reddit-ads.png`,
			],
		},
		{
			label: "CRM",
			color: "#2f77b5",
			logos: [
				`${ASSET}/2026/06/HubSpot.webp`,
				`${ASSET}/2026/06/ontraport-logo.webp`,
				`${ASSET}/2026/03/salesforce.png`,
				`${ASSET}/2026/06/pipedrive.webp`,
				`${ASSET}/2026/06/Active-Campaign.webp`,
			],
		},
	],
};

export type LiveEntry = {
	slug: string;
	title: string;
	excerpt: string;
	image?: string;
	content?: string;
	href?: string;
	year?: string;
	services?: string;
	date?: string;
	position?: string;
	stars?: number;
	quote?: string;
	banner?: string;
	tags?: string[];
};

export const reviewsLive: LiveEntry[] = [
	{
		slug: "jared-seidenberg",
		title: "Jared Seidenberg",
		position: "COO & General Counsel, Pine Financial Group",
		excerpt:
			"Paradox Marketing’s work has helped the client establish a solid web presence, improving their positioning. Additionally, their development work has been fundamental for their operations.",
		stars: 5,
	},
	{
		slug: "harmony-healthcare",
		title: "Anonymous",
		position: "Executive Producer, Harmony Healthcare International, Inc.",
		excerpt:
			"Paradox Marketing has successfully transformed the client's idea into a fully realized product that has driven revenue for the company.",
		stars: 5,
	},
	{
		slug: "albert-brown",
		title: "Albert Brown",
		position: "SEO Specialist, Centeno-Schultz Clinic",
		excerpt:
			"Paradox Marketing has brought positive changes in organic traffic, bounce rate, and users' time on site. They have a fast and highly proficient workflow.",
		stars: 5,
	},
	{
		slug: "ally-escrow",
		title: "Anonymous",
		position: "President, Ally Escrow Management",
		excerpt:
			"Since collaborating with Paradox Marketing, the client has seen an increase in their website hits, allowing them to secure 15 customers monthly.",
		stars: 5,
	},
	{
		slug: "aaron-mandelbaum",
		title: "Aaron Mandelbaum",
		position: "Founder & CEO, SMB Advisors",
		excerpt:
			"Paradox Marketing has enabled the company to offer a range of services to end clients and boost their rate of retention.",
		stars: 5,
	},
	{
		slug: "andre-oentoro",
		title: "Andre Oentoro",
		position: "Founder, Video Production Company",
		excerpt:
			"Since partnering with Paradox Marketing, the client has tripled their site traffic, including a 20-point increase in domain rating.",
		stars: 5,
	},
	{
		slug: "pine-review-2",
		title: "Verified Client",
		position: "Director of Marketing",
		excerpt: "They connected our website, ads, and CRM so every lead has a next step and reporting finally makes sense.",
		stars: 5,
	},
	{
		slug: "healthcare-review",
		title: "Verified Client",
		position: "Practice Administrator",
		excerpt: "Organic traffic improved and the site now supports patient conversion instead of acting as a brochure.",
		stars: 5,
	},
	{
		slug: "services-review",
		title: "Verified Client",
		position: "Managing Partner",
		excerpt: "The one-month opt-out model kept the work honest. Results earned the next month.",
		stars: 5,
	},
];

export const workLive: LiveEntry[] = [
	{
		slug: "centeno-schultz-clinic",
		title: "Centeno-Schultz Clinic",
		year: "2021",
		services: "Web Design, SEO, Content",
		image: `${ASSET}/2023/03/centos-banner-image.jpg`,
		href: "/our-portfolio/centeno-schultz-clinic",
		excerpt: "Organic growth and a site built around patient conversion.",
	},
	{
		slug: "insurance-choice",
		title: "Insurance Choice",
		year: "2022",
		services: "Web design & Development",
		image: `${ASSET}/2023/01/Insurance-Choice-Banner-Image.webp`,
		href: "/our-portfolio/insurance-choice",
		excerpt: "A conversion-focused site for an insurance marketplace.",
	},
	{
		slug: "o2-employment-services",
		title: "O2 Employment Services",
		year: "2021",
		services: "Web Design, SEO",
		image: `${ASSET}/2023/03/o2-banner-image2.jpg`,
		href: "/our-portfolio/o2-employment-services",
		excerpt: "A recruiting site built to capture and qualify applicants.",
	},
	{
		slug: "j-r-martin-cpa",
		title: "J.R. Martin CPA -US",
		year: "2021",
		services: "SEO, Web Design, Google Ads",
		image: `${ASSET}/2023/03/jrmartin-banner-image.jpg`,
		href: "/our-portfolio/j-r-martin-cpa",
		excerpt: "SEO, site, and ads working as one acquisition system.",
	},
	{
		slug: "ally-escrow-management",
		title: "Ally Escrow Management",
		year: "2022",
		services: "Web Design, SEO",
		image: `${ASSET}/2023/01/Insurance-Choice-Banner-Image.webp`,
		href: "/our-portfolio/ally-escrow-management",
		excerpt: "A stronger web presence that turned site traffic into monthly customers.",
	},
	{
		slug: "brainspire",
		title: "Brainspire",
		year: "2022",
		services: "Web Design, Demand Generation",
		image: `${ASSET}/2023/03/centos-banner-image.jpg`,
		href: "/our-portfolio/brainspire",
		excerpt: "A technology brand site connected to a clearer demand pipeline.",
	},
	{
		slug: "24-hour-ar",
		title: "24:Hour AR",
		year: "2021",
		services: "Web Design, Paid Advertising",
		image: `${ASSET}/2023/03/o2-banner-image2.jpg`,
		href: "/our-portfolio/24-hour-ar",
		excerpt: "Paid media and a site built around accounts-receivable leads.",
	},
	{
		slug: "enamoree",
		title: "Enamoree",
		year: "2023",
		services: "Brand, Web Design",
		image: `${ASSET}/2023/03/jrmartin-banner-image.jpg`,
		href: "/our-portfolio/enamoree",
		excerpt: "Brand and website work for a consumer-facing product.",
	},
];

export const insightsLive: LiveEntry[] = [
	{
		slug: "what-social-media-marketing-really-takes-to-work",
		title: "What Social Media Marketing Really Takes to Work",
		date: "August 25, 2026",
		image: `${ASSET}/2026/08/Social-Media-Marketing@2x-1024x433.webp`,
		excerpt:
			"Social media presence anchors a modern inbound marketing strategy. Billions of global users engage with social platforms daily...",
		content:
			"Social media presence anchors a modern inbound marketing strategy. Billions of global users engage with social platforms daily, which means the channel only works when it is connected to your website, advertising, and CRM.\n\n## What actually has to connect\nA post is not a system. The work starts with a destination that can convert, tracking that can attribute, and follow-up that does not drop the lead.\n\n## Why tactics fail alone\nDisconnected social campaigns create traffic without a next step. The fix is a closed loop: content, ads, and CRM feeding the same record.",
		href: "/insights/what-social-media-marketing-really-takes-to-work",
	},
	{
		slug: "online-reputation-management-protecting-your-digital-brand",
		title: "Online Reputation Management: Protecting Your Digital Brand",
		date: "August 24, 2026",
		image: `${ASSET}/2026/08/Reputation-Management@2x-1024x433.webp`,
		excerpt:
			"Every buying decision starts with a search. Before a prospect picks up the phone or fills out a contact form, they have already formed...",
		content:
			"Every buying decision starts with a search. Before a prospect picks up the phone or fills out a contact form, they have already formed a first impression from reviews, search results, and your site.\n\n## Protect the first impression\nReputation work is not a side project. It belongs in the same system as SEO, content, and CRM so the story a buyer sees is the story your team can fulfill.",
		href: "/insights/online-reputation-management-protecting-your-digital-brand",
	},
	{
		slug: "what-professional-website-design-actually-involves",
		title: "What Professional Website Design Actually Involves",
		date: "August 24, 2026",
		image: `${ASSET}/2026/08/Website-Design-Development@2x-1024x433.webp`,
		excerpt:
			"A dynamic website anchors your inbound marketing strategy, serving as the core foundation for all online sales, marketing, and...",
		content:
			"A dynamic website anchors your inbound marketing strategy, serving as the core foundation for all online sales, marketing, and service conversations.\n\n## Design is infrastructure\nProfessional website design includes conversion paths, analytics, content structure, and a CRM handoff. The site is not a brochure; it is the system that receives paid and organic demand.",
		href: "/insights/what-professional-website-design-actually-involves",
	},
];

export const peopleLive: LiveEntry[] = [
	{
		slug: "joshua-ballard",
		title: "Joshua Ballard",
		position: "Chief Executive Officer",
		image: `${ASSET}/2025/03/Joshua-2x.webp`,
		excerpt: "Strategy, delivery, and client partnership.",
		content: "Joshua leads Paradox Marketing with a focus on connected marketing systems and a people-first remote culture.",
	},
	{
		slug: "aiden-pearce",
		title: "Aiden Pearce",
		position: "Chief Operations Officer",
		image: `${ASSET}/2025/03/Aiden-Pearce.webp`,
		excerpt: "Operations and delivery across a distributed team.",
		content: "Aiden runs day-to-day operations so website, advertising, and CRM work stay coordinated.",
	},
	{
		slug: "deepak-joseph",
		title: "Deepak Joseph",
		position: "Chief Technology Officer",
		image: `${ASSET}/2025/03/Deepak-2x.webp`,
		excerpt: "Technology, websites, and stack ownership.",
		content: "Deepak leads the technology practice so clients own their websites, ad accounts, and data.",
	},
];

export const capabilitiesLive: LiveEntry[] = primaryNav[0].children!.map((item) => ({
	slug: item.href.split("/").pop()!,
	title: item.label,
	excerpt: `${item.label} from Paradox Marketing — websites, advertising, and CRM connected as one system.`,
	content: `${item.label} is delivered as part of a connected marketing system. We do not treat this as a standalone tactic. The work is mapped to your website, advertising, and CRM so every lead has a next step and every dollar has a measurable outcome.`,
}));

export const industriesLive: LiveEntry[] = primaryNav[1].children!.map((item) => ({
	slug: item.href.split("/").pop()!,
	title: item.label,
	excerpt: `Marketing systems built for the ${item.label.toLowerCase()} industry.`,
	content: `Paradox builds connected marketing systems for ${item.label.toLowerCase()} organizations. We start by mapping the current website, advertising, and CRM, then close the gaps that waste spend, drop leads, or hide ROI.`,
}));

export const caseStudiesLive: LiveEntry[] = [
	{
		slug: "centeno-schultz",
		title: "Centeno-Schultz Clinic",
		excerpt: "Organic growth and a site built around patient conversion.",
		content: "The clinic needed a site and SEO program that supported patient conversion instead of acting as a brochure.",
	},
	{
		slug: "pine-financial",
		title: "Pine Financial Group",
		excerpt: "A stronger web presence and a more responsive delivery team.",
		content: "Pine Financial needed a clearer web presence and development work that supported operations.",
	},
];

export const careersLive: LiveEntry[] = [
	{
		slug: "remote-specialists",
		title: "Remote specialists",
		excerpt: "Remote specialists who like connected marketing systems.",
		content: "We hire remote specialists across SEO, paid media, CRM, and web. Results earn the next month.",
	},
];

export const locationsLive: LiveEntry[] = [
	{
		slug: "remote-first",
		title: "Remote-first",
		excerpt: "A distributed team serving clients worldwide.",
		content: "Paradox is remote-first, with talent spanning more than 12 countries.",
	},
];

export const legalPages: LiveEntry[] = [
	{
		slug: "privacy-policy",
		title: "Privacy Policy",
		excerpt: "How Paradox Marketing handles personal information.",
		content: "Paradox Marketing collects only the information needed to respond to inquiries and deliver marketing services. Contact hello@paradoxmarketing.io with privacy requests.",
	},
	{
		slug: "terms-of-use",
		title: "Terms of Service",
		excerpt: "Terms for using paradoxmarketing.io.",
		content: "Use of this site is subject to these terms. Content is provided for information and does not create a client relationship until a statement of work is signed.",
	},
	{
		slug: "disclaimer",
		title: "Disclaimer",
		excerpt: "Marketing results vary by business and existing systems.",
		content: "Case studies and metrics describe historical work. Results vary based on industry, offer, and the systems already in place.",
	},
	{
		slug: "eula",
		title: "EULA",
		excerpt: "End-user terms for Paradox digital properties.",
		content: "Software and digital properties delivered by Paradox remain owned by the client unless a contract says otherwise.",
	},
];

export const blogLive: LiveEntry[] = [
	{
		slug: "market-joust",
		title: "Market Joust",
		excerpt: "A note from the Paradox blog archive.",
		content: "A note from the Paradox blog archive on connecting marketing systems instead of stacking disconnected tactics.",
		date: "March 12, 2025",
	},
	{
		slug: "smb-advisors-merger",
		title: "SMB Advisors and Paradox Marketing",
		excerpt: "How two teams became one marketing department.",
		content: "SMB Advisors and Paradox Marketing combined to operate as one marketing department for clients who want website, ads, and CRM in one system.",
		date: "January 8, 2025",
	},
];

export const liveCollections: Record<string, LiveEntry[]> = {
	capabilities: capabilitiesLive,
	industries: industriesLive,
	insights: insightsLive,
	portfolio: workLive,
	"case-studies": caseStudiesLive,
	case_studies: caseStudiesLive,
	people: peopleLive,
	careers: careersLive,
	locations: locationsLive,
	posts: blogLive,
	pages: legalPages,
	clutch_reviews: reviewsLive,
};

export function findLiveEntry(collection: string, slug: string) {
	return liveCollections[collection]?.find((entry) => entry.slug === slug);
}
