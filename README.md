# RDUtilities Website

This is a static showcase site for RDUtilities, designed to be easy to host for free and easy to maintain as more apps, screenshots, videos, and release links are added.

## Best free hosting choice

GitHub Pages is the strongest fit for this project because:

- it is free
- it works naturally with GitHub releases
- this site is already a static HTML/CSS/JS site
- it is easy to update over time without fighting a page builder

WordPress.com can still be useful later if you want a blog-heavy workflow, but for the current product-showcase goal, GitHub Pages is the cleaner launch path.

## Files you will update most often

- `app-data.js`
  Add GitHub release links, update app descriptions, and replace placeholder actions.
- `index.html`
  Update the main page structure if you want new sections.
- `styles.css`
  Adjust branding, spacing, and layout.

## Before publishing

Replace each placeholder `"#"` link in `app-data.js` with the correct GitHub release URL for that app.

Examples:

- Windows app release: `https://github.com/<owner>/<repo>/releases/latest`
- macOS app release: `https://github.com/<owner>/<repo>/releases/latest`
- Web app: direct live URL

## Easy next upgrades

- add screenshots for each product card
- add demo video links
- split products into separate detail pages
- add a contact form or email CTA
- add a custom domain later if you want `rdutilities.com`
