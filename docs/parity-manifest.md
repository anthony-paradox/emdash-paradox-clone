# Paradox clone parity manifest

Source of truth: `https://paradoxmarketing.io/`, WordPress page 21552 and the active `websitefactory` child theme.

## Preserve

- Astro 7 + EmDash server/database/storage integration and MCP endpoint.
- EmDash page context, SEO extension hooks, authentication detection, Portable Text, media, bylines, taxonomies, comments, widgets, search, RSS, category, and tag behavior.
- SF Pro Display files, the extracted world map, current homepage section ordering, and the existing Paradox color/type foundation.
- Existing live-oriented EmDash collections, menus, and site settings; extend them in place.
- Downloaded WordPress CSS as reference material only.

## Refine

- Header: fixed 90px chrome, home transparency, corrected logo sizing, and burger trigger exist; menu data, nested mmenu behavior, focus handling, and live panel content differ.
- Footer: visual shell exists; option-driven columns, exact links/icons/copyright, and functional HubSpot modal differ.
- Homepage: hero, brand marquee, problem cards, metrics, reviews, technology, work, team map, and insight card shells exist; ACF wiring, triangle/service block, exact ordered content, carousel controls, and local media differ.
- Blog/post/page routes: full EmDash rendering exists under `/posts` and `/pages`; visual templates and canonical Paradox paths differ.

## Add or replace

- Typed EmDash loaders for complete content, media, SEO, metadata, and edit attributes; remove silent fixture fallback.
- `clutch_reviews` content model and complete ACF-equivalent fields for homepage and marketing CPTs.
- Live WordPress published content, menu hierarchy, footer options, taxonomies, metadata, and local media.
- Capability, industry, insight, portfolio, case-study, people, career, location, blog, and used page template families.
- Canonical `/blog/{slug}` behavior, `/insights/{slug}` TOC/sidebar behavior, route redirects, and functional HubSpot form/meeting flows.

## Exclude unless referenced by a live template

- Draft Home 2023 content and legacy “Have Our Team Become YOUR Team” starter content.
- Public routes for helper CPTs such as certifications/accomplishments that are only related data.
- Wholesale imports of inactive `style.css` or `custom-style.css`, Elementor selectors, Bootstrap, and WordPress mmenu rules.

## Completion gate

No route is considered matched while it uses fixture copy, a generic shell in place of a live template family, a source-site media hotlink, an unresolved local link, or a placeholder form.
