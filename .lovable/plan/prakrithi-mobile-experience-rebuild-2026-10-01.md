# Prakrithi Mobile Experience Rebuild

## Goal
Rebuild the mobile presentation into a polished brand experience while preserving the existing desktop content, olive-and-brown identity, programs, and contact details.

## What will change
- Present the supplied green logo as a clean circular badge in the header, menu, footer, and browser icon.
- Replace the current full-screen mobile menu with a compact branded panel: clear navigation, visible contact details, social links, WhatsApp, and a prominent “Book a Session” action.
- Rework every home section for small screens with readable headings, tighter spacing, stable controls, and fewer heavy animations.
- Show each program poster in its original portrait ratio with the entire image visible; keep titles, descriptions, duration, and level outside the image.
- Make each program action explicit: “View details” opens the full program information, while “Enquire on WhatsApp” opens a prewritten message for that class.
- Add a clearly visible enquiry area with both a form link and a direct WhatsApp option; carry the selected class into the contact page.
- Use distinct imagery in philosophy, community, and journal sections instead of repeating the hero image.
- Make journal actions work by opening readable article details on the same page rather than linking to Programs.
- Fix mobile overflow, tap target, image loading, menu state, and unnecessary animation work across Home, Programs, and Contact.

## Technical details
- Use responsive layouts and semantic color tokens already defined in the project.
- Use the existing uploaded class posters with `object-contain`, fixed portrait ratios, and no overlay text.
- Add URL search parameters for selected programs and validate them against the known program list before pre-filling enquiries.
- Keep animations lightweight and respect reduced-motion preferences.
- Preserve all current business information and social/WhatsApp links.

## Validation
- Check 394px mobile, tablet, and desktop layouts on Home, Programs, and Contact.
- Test menu open/close, every program action, preselected enquiry, WhatsApp links, journal details, FAQ, testimonial controls, and form validation.
- Confirm no clipped posters, overlapping text, horizontal scrolling, broken links, console errors, or build errors.
