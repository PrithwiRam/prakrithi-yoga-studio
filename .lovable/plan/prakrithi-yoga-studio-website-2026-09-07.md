# Prakrithi Yoga Studio Website

## Goal
Replace the starter placeholder with a calm, editorial yoga studio website for Prakrithi Yoga Studio. The home page will be one long scroll experience, supported by dedicated `/programs` and `/contact` pages.

## User-facing experience
- Cream/linen foundation with sage accents, charcoal contrast sections, Cormorant Garamond headings, and Inter labels/body copy.
- Sticky navigation with the Prakrithi wordmark, home/programs/contact links, and a “Join a Class” CTA. On smaller screens, use a full-screen menu overlay.
- Home page sections, in order:
  1. Hero with “It all begins with breath.” and an interactive CALM/FOCUS breathing widget.
  2. “Find Your Practice” numbered program list.
  3. Dark philosophy/gallery section: “Your Body Leads. Your Mind Follows.”
  4. Featured programs image grid with video play affordance for Studio Tour.
  5. “What Happens When You Walk In?” experience steps.
  6. Community section with image collage and workshops, retreats, and online classes.
  7. Dark auto-rotating testimonial slider with accessible dot controls.
  8. Prakrithi Journal three-card grid.
  9. FAQ accordion.
  10. Dark closing CTA and footer.
- Add a fixed WhatsApp action button using the provided placeholder number and make the contact form usable with browser validation plus an in-page success state.
- Use supplied schema copy and placeholder business details exactly as provided; do not invent real-world contact information.

## Interaction and motion
- Use IntersectionObserver-based reveal states for headings, images, lists, and journal cards.
- Add subtle navbar state change after scrolling, arrow/card hover movement, FAQ expand/collapse, testimonial cross-fade/rotation, and a breathing phase timer for INHALE/HOLD/EXHALE.
- Respect reduced-motion preferences and keep all controls keyboard-accessible with visible focus states.

## Route structure
- Update `src/routes/index.tsx` as the full home experience with route-specific metadata.
- Add `src/routes/programs.tsx` for the complete programs listing and route-specific metadata.
- Add `src/routes/contact.tsx` for contact details, hours, enquiry form, WhatsApp/call/email links, and route-specific metadata.
- Keep shared site chrome in `src/routes/__root.tsx`; do not add a second app layout.

## Technical details
- Replace starter design tokens in `src/styles.css` with semantic cream, linen, sage, charcoal, warm-gray, text, and border tokens in both light/dark-safe form; register typography and motion utilities there.
- Load Google Fonts through the root document head rather than a CSS remote import.
- Use existing Lucide icons and existing design-system Button/Input/Textarea/Select primitives for interactive controls.
- Keep content in typed constants near the feature/page code unless a data layer is specifically needed; no backend is required for this presentation-only build.
- Use stable image treatment with locally generated or bundled assets rather than hotlinked external images. Provide meaningful alt text and lazy loading for below-fold imagery.
- Ensure semantic landmarks, one H1 per route, responsive layouts from mobile through wide desktop, and unique title/description/Open Graph/Twitter metadata for every content route.

## Validation
- Verify the home, programs, and contact routes render without the starter placeholder.
- Check breathing mode/phase transitions, menu open/close, FAQ state, testimonial rotation, form validation/success state, and external contact links.
- Check the layout at mobile, tablet, and desktop widths and confirm no console errors or route-tree mismatches.
