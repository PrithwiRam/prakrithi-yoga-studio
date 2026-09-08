# Prakrithi Yoga Studio Visual Refresh

## Goal
Replace the repeated single-photo treatment with a richer, more complete yoga studio experience that follows the selected **Premium organic sanctuary** direction: earthy clay and olive tones, modern rounded typography, and an art-directed editorial layout.

## User-facing changes
- Build a layered first viewport with a dominant studio image, a secondary practice image, and a small botanical/detail image instead of one full-screen crop.
- Add a distinct image set for the philosophy, program cards, community collage, journal cards, and closing call-to-action; each section will use its own crop and subject.
- Give sparse sections more visual structure with stronger editorial chapter markers, supporting details, pull-quote or stat accents, and more intentional image-to-copy balance.
- Keep the existing breathing widget, navigation, program links, testimonials, FAQ, and enquiry form usable while improving their surrounding hierarchy.
- Preserve supplied placeholder business details exactly; no real contact information will be invented.
- Check mobile and desktop layouts, image loading, menu behavior, breathing mode/phase transitions, FAQ expansion, testimonial rotation, and form success state for regressions.

## Technical approach
- Add a cohesive set of locally generated/bundled yoga studio images and map them to typed content rather than reusing `yoga-studio-hero.jpg` everywhere.
- Update semantic design tokens to the selected clay/olive palette and load Sora plus Manrope in the root document head.
- Refine the shared page components and section composition in `src/components/prakrithi-site.tsx`; keep routes and shared chrome intact unless a route-specific adjustment is needed.
- Keep existing design-system controls for buttons and form fields, preserve reduced-motion handling, and use stable image dimensions with meaningful alt text and lazy loading below the first viewport.
- Re-check route metadata for the home, programs, and contact pages after the visual changes.

## Validation
- Run the project type check and lint checks.
- Use the live preview at desktop and mobile widths to confirm the refreshed sections render without blank areas, overflow, broken images, or console errors.
- Exercise the key interactive states and verify the three content routes still load correctly.
