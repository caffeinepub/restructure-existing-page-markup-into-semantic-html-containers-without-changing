# Specification

## Summary
**Goal:** Refactor the existing page markup into a fully semantic HTML5 structure by wrapping current content in appropriate semantic containers, without changing any content, attributes, styling, or behavior.

**Planned changes:**
- Restructure the existing DOM to include at minimum `<header>`, `<main>`, and `<footer>` wrappers around the current content.
- Add additional semantic containers where appropriate (e.g., `<nav>`, `<section>`, `<article>`, `<aside>`) while preserving the exact content order.
- Preserve all existing text, attributes (id/class/data-/aria-), links/URLs, form fields, inline styles, scripts, and JS hooks so functionality remains identical.

**User-visible outcome:** The page looks and behaves exactly the same, but the underlying HTML is organized into semantic containers for improved structure and readability.
