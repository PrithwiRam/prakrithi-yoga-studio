# Prakrithi Logo and Olive–Brown Theme Update

## Goal
Use the uploaded full Prakrithi logo exactly as supplied and make olive green with warm brown the website’s dominant visual palette.

## User-facing changes
- Add the complete uploaded logo to the main navigation and footer while keeping its original wording and artwork intact.
- Size and crop the logo carefully so it remains readable without making the navigation excessively tall; provide an adapted mobile treatment using the same full image.
- Replace the current clay-heavy accents with a balanced olive-and-brown palette across backgrounds, headings, buttons, links, borders, form states, and dark sections.
- Keep warm cream and linen as supporting neutrals so the olive and brown remain calm, premium, and legible.
- Update the favicon from the uploaded brand artwork so browser branding matches the site.
- Preserve the existing page content, imagery, routes, and interactions.

## Technical details
- Store the uploaded logo through the project asset flow and reference that single asset in shared navigation and footer elements.
- Create a small optimized favicon derived from the uploaded logo while preserving its proportions.
- Update semantic color tokens in the global style system rather than adding isolated hardcoded colors.
- Remove the temporary letter-mark treatment wherever the uploaded logo replaces it.
- Keep accessible contrast and meaningful logo alt text across light and dark surfaces.

## Validation
- Check the logo’s clarity and proportions on desktop and mobile.
- Verify the home, programs, and contact pages use the new palette consistently.
- Confirm navigation, mobile menu, links, forms, breathing controls, FAQ, and testimonial controls remain usable.
- Run type and lint checks, then inspect the live pages for overflow, missing assets, and console errors.
