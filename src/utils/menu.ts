import { primaryNav, type NavItem } from "../data/live-site";

type EmDashItem = {
	label: string;
	url?: string | null;
	customUrl?: string | null;
	parentId?: string | null;
	id?: string;
	children?: EmDashItem[];
	items?: EmDashItem[];
};

function hrefOf(item: EmDashItem) {
	return item.url || item.customUrl || "#";
}

function nest(items: EmDashItem[]): NavItem[] {
	if (items.some((item) => item.children?.length || item.items?.length)) {
		return items.map((item) => ({
			label: item.label,
			href: hrefOf(item),
			children: nest(item.children ?? item.items ?? []),
		}));
	}
	const byParent = new Map<string | null, EmDashItem[]>();
	for (const item of items) {
		const parent = item.parentId ?? null;
		byParent.set(parent, [...(byParent.get(parent) ?? []), item]);
	}
	const walk = (parentId: string | null): NavItem[] =>
		(byParent.get(parentId) ?? []).map((item) => ({
			label: item.label,
			href: hrefOf(item),
			children: walk(item.id ?? null),
		}));
	const top = walk(null);
	return top.length ? top : items.map((item) => ({ label: item.label, href: hrefOf(item) }));
}

export function resolvePrimaryNav(menu?: { items?: EmDashItem[] } | null): NavItem[] {
	const items = menu?.items ?? [];
	if (!items.length) return primaryNav;
	const nested = nest(items).filter((item) => item.label && item.href);
	return nested.length ? nested : primaryNav;
}
