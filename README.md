#  Prakrithi Yoga Studio

## 🎯 Project Overview

Build a **premium, single-page scrolling website** for **Prakrithi Yoga Studio** — a yoga and wellness business. The design must mirror the editorial luxury aesthetic seen in the reference video: soft cream/linen backgrounds, sage green accents, dark charcoal contrast sections, serif typography, and smooth scroll animations. The site must feel calm, breathable, and premium — not cluttered.

---

## 🎨 Design System

### Color Palette
```css
:root {
  --color-cream:       #f5f2ee;   /* Primary background */
  --color-linen:       #ede9e3;   /* Secondary background / cards */
  --color-sage:        #7a9b76;   /* Accent green (logo, italic headings, tags) */
  --color-sage-dark:   #4a6b46;   /* Dark sage (hover states) */
  --color-charcoal:    #1c1c1c;   /* Dark section backgrounds */
  --color-charcoal-2:  #2a2a2a;   /* Footer background */
  --color-warm-gray:   #9a9490;   /* Body text, muted labels */
  --color-text-dark:   #1a1a1a;   /* Primary heading text */
  --color-white:       #ffffff;
  --color-border:      #e0dbd4;   /* Divider lines */
}
```

### Typography
```css
/* Import from Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Inter:wght@300;400;500&display=swap');

:root {
  --font-serif:      'Cormorant Garamond', Georgia, serif;  /* All headings */
  --font-sans:       'Inter', system-ui, sans-serif;         /* Body, nav, labels */

  --text-hero:       clamp(3rem, 6vw, 5.5rem);    /* Hero headlines */
  --text-section:    clamp(2.5rem, 5vw, 4.5rem);  /* Section headings */
  --text-card-title: clamp(1.5rem, 2.5vw, 2rem);  /* Card headings */
  --text-body:       1rem;                          /* 16px body */
  --text-label:      0.75rem;                       /* 12px uppercase labels */
  --text-nav:        0.85rem;                       /* Nav links */
}
```

### Spacing & Layout
```css
:root {
  --container-max:   1280px;
  --section-padding: clamp(5rem, 10vw, 10rem) 0;
  --gutter:          clamp(1.5rem, 5vw, 5rem);
  --radius-sm:       8px;
  --radius-md:       16px;
  --radius-pill:     100px;
}
```

### Animation Defaults
```css
:root {
  --ease-out:       cubic-bezier(0.16, 1, 0.3, 1);
  --transition-std: 0.35s var(--ease-out);
  --reveal-delay:   0.1s; /* stagger multiplier */
}
```

---

## 📐 Site Architecture

```
/                    ← Home (single long scroll page)
/programs            ← All programs listing page
/contact             ← Contact & enquiry form page
```

---

## 🗄️ Data Schemas

### 1. Business Info Schema
```json
{
  "business": {
    "name": "Prakrithi Yoga Studio",
    "tagline": "BREATHE. MOVE. BECOME.",
    "logo": {
      "icon": "assets/images/logo-icon.svg",
      "wordmark": "PRAKRITHI"
    },
    "contact": {
      "email": "hello@prakrithiyoga.com",
      "phone": "+91 XXXXX XXXXX",
      "whatsapp": "+91 XXXXX XXXXX"
    },
    "address": {
      "line1": "123 Wellness Avenue",
      "city": "Your City",
      "state": "Kerala",
      "pincode": "000000"
    },
    "openingHours": [
      { "days": "Mon – Fri", "time": "6:00 AM – 9:00 PM" },
      { "days": "Sat – Sun", "time": "7:00 AM – 6:00 PM" }
    ],
    "social": {
      "instagram": "https://instagram.com/prakrithiyoga",
      "facebook":  "https://facebook.com/prakrithiyoga",
      "youtube":   "https://youtube.com/@prakrithiyoga",
      "whatsapp":  "https://wa.me/91XXXXXXXXXX"
    }
  }
}
```

---

### 2. Navigation Schema
```json
{
  "navigation": {
    "links": [
      { "label": "Home",     "href": "#hero",      "isActive": true  },
      { "label": "Programs", "href": "/programs",   "isActive": false },
      { "label": "Contact",  "href": "/contact",    "isActive": false }
    ],
    "cta": {
      "label": "Join a Class →",
      "href":  "/contact",
      "style": "pill-outline"
    }
  }
}
```

---

### 3. Hero / Breathe Section Schema
```json
{
  "heroSection": {
    "id": "hero",
    "headline": "It all begins with breath.",
    "subtext": "Before we move, before we stretch, we find stillness. Take a moment to sync with the rhythm below.",
    "breatheWidget": {
      "enabled": true,
      "phases": [
        { "label": "INHALE", "durationMs": 4000 },
        { "label": "HOLD",   "durationMs": 2000 },
        { "label": "EXHALE", "durationMs": 6000 }
      ],
      "modes": [
        { "id": "calm",  "label": "CALM",  "cycleDuration": 12 },
        { "id": "focus", "label": "FOCUS", "cycleDuration": 8  }
      ],
      "defaultMode": "calm"
    }
  }
}
```

---

### 4. Programs Schema
```json
{
  "programs": [
    {
      "id": "beginners-yoga",
      "index": "01",
      "category": "YOGA",
      "title": "Beginners Yoga",
      "slug": "beginners-yoga",
      "shortDescription": "Build confidence, mobility, and foundational strength.",
      "longDescription": "A welcoming space for those new to yoga. Learn the fundamentals of alignment, breathing, and mindful movement at your own pace.",
      "thumbnail": "assets/images/programs/beginners-yoga.jpg",
      "duration": "60 min",
      "level": "Beginner",
      "schedule": "Mon, Wed, Fri — 7:00 AM",
      "featured": true
    },
    {
      "id": "morning-flow",
      "index": "02",
      "category": "YOGA FLOW",
      "title": "Morning Flow",
      "slug": "morning-flow",
      "shortDescription": "Energise your body and awaken your mind with flowing sequences.",
      "longDescription": "Start your day with intention. This dynamic vinyasa-inspired class links breath to movement to set a positive tone for the day.",
      "thumbnail": "assets/images/programs/morning-flow.jpg",
      "duration": "75 min",
      "level": "All Levels",
      "schedule": "Daily — 6:00 AM",
      "featured": true
    },
    {
      "id": "breathwork-basics",
      "index": "03",
      "category": "BREATHING",
      "title": "Breathwork Basics",
      "slug": "breathwork-basics",
      "shortDescription": "Unlock the power of your breath for calm and focus.",
      "longDescription": "Pranayama and breathwork techniques to manage stress, improve focus, and deepen your yoga practice. No prior experience needed.",
      "thumbnail": "assets/images/programs/breathwork.jpg",
      "duration": "45 min",
      "level": "Beginner",
      "schedule": "Tue, Thu — 8:00 AM",
      "featured": true
    },
    {
      "id": "finding-stillness",
      "index": "04",
      "category": "MEDITATION",
      "title": "Finding Stillness",
      "slug": "finding-stillness",
      "shortDescription": "A guided meditation practice to quiet the mind.",
      "longDescription": "Seated and walking meditation techniques drawn from traditional Indian practices. Ideal for stress relief, emotional balance, and mental clarity.",
      "thumbnail": "assets/images/programs/meditation.jpg",
      "duration": "30 min",
      "level": "All Levels",
      "schedule": "Daily — 7:00 PM",
      "featured": true
    },
    {
      "id": "studio-tour",
      "index": "05",
      "category": "STUDIO",
      "title": "Studio Tour",
      "slug": "studio-tour",
      "shortDescription": "Take a look inside Prakrithi Yoga Studio.",
      "longDescription": "A guided video walkthrough of our peaceful studio space — our mats, our natural lighting, and the energy you'll feel the moment you walk in.",
      "thumbnail": "assets/images/programs/studio-tour.jpg",
      "videoUrl": "https://youtube.com/watch?v=XXXXXX",
      "isVideo": true,
      "featured": true
    }
  ]
}
```

---

### 5. Experience Steps Schema — "What Happens When You Walk In?"
```json
{
  "experienceSteps": {
    "sectionTitle": "What Happens When You Walk In?",
    "steps": [
      {
        "number": "01",
        "title": "Arrive.",
        "description": "Leave the outside world at the door. Our space is designed to immediately slow you down."
      },
      {
        "number": "02",
        "title": "Breathe.",
        "description": "Before anything else, we breathe together. It's where every session begins."
      },
      {
        "number": "03",
        "title": "Move.",
        "description": "Flow through sequences built for your body, your level, your pace."
      },
      {
        "number": "04",
        "title": "Reset.",
        "description": "Leave feeling renewed, lighter, and more present than when you arrived."
      }
    ]
  }
}
```

---

### 6. Gallery / Philosophy Section Schema
```json
{
  "philosophySection": {
    "id": "philosophy",
    "darkBackground": true,
    "headline": "Your Body Leads.",
    "headlineAccent": "Your Mind Follows.",
    "images": [
      {
        "id": "gallery-1",
        "src": "assets/images/gallery/group-yoga-beach.jpg",
        "alt": "Group yoga class on the beach",
        "caption": "Movement",
        "aspectRatio": "portrait"
      },
      {
        "id": "gallery-2",
        "src": "assets/images/gallery/meditation-lake.jpg",
        "alt": "Person meditating by a lake",
        "caption": "Stillness",
        "aspectRatio": "landscape"
      }
    ]
  }
}
```

---

### 7. Community Section Schema
```json
{
  "communitySection": {
    "id": "community",
    "headline": "Practice Together.",
    "subtext": "Because wellness feels different when shared. Join a supportive community dedicated to growth and mindfulness.",
    "features": [
      {
        "title": "Workshops & Special Sessions",
        "description": "Monthly themed workshops covering advanced topics in yoga, breathwork, Ayurveda, and sound healing."
      },
      {
        "title": "Retreats",
        "description": "Seasonal day-retreats and weekend getaways in nature — a full reset for body and mind."
      },
      {
        "title": "Online Classes",
        "description": "Join live-streamed sessions or access our growing library of recorded classes from anywhere."
      }
    ],
    "images": [
      "assets/images/community/yoga-silhouette-sunset.jpg",
      "assets/images/community/singing-bowl.jpg",
      "assets/images/community/group-class.jpg",
      "assets/images/community/instructor-closeup.jpg"
    ]
  }
}
```

---

### 8. Testimonials Schema
```json
{
  "testimonials": {
    "sectionTitle": "Stories From the Mat.",
    "darkBackground": true,
    "items": [
      {
        "id": "t1",
        "quote": "More than just a place to workout. It's a sanctuary where you learn to be present in your own life again.",
        "author": "Priya R.",
        "rating": 5,
        "program": "Morning Flow"
      },
      {
        "id": "t2",
        "quote": "Prakrithi changed my relationship with stress. The breathwork sessions alone are worth it.",
        "author": "Arun M.",
        "rating": 5,
        "program": "Breathwork Basics"
      },
      {
        "id": "t3",
        "quote": "I came in a complete beginner and left every class feeling like I'd known yoga my whole life. The instructors are exceptional.",
        "author": "Lakshmi V.",
        "rating": 5,
        "program": "Beginners Yoga"
      }
    ]
  }
}
```

---

### 9. Blog / Journal Schema
```json
{
  "journal": {
    "sectionTitle": "From the Prakrithi Journal.",
    "posts": [
      {
        "id": "post-1",
        "category": "MINDFULNESS",
        "readTime": "5 min read",
        "title": "5 Minutes to Start Your Morning",
        "excerpt": "A short, powerful routine you can do before your feet hit the floor.",
        "thumbnail": "assets/images/blog/morning-routine.jpg",
        "href": "/journal/5-minutes-morning",
        "date": "2026-08-15"
      },
      {
        "id": "post-2",
        "category": "PRACTICE",
        "readTime": "5 min read",
        "title": "How Breath Shapes Your Movement",
        "excerpt": "The often-overlooked connection between pranayama and physical yoga.",
        "thumbnail": "assets/images/blog/breath-movement.jpg",
        "href": "/journal/breath-shapes-movement",
        "date": "2026-08-10",
        "featured": true
      },
      {
        "id": "post-3",
        "category": "LIFESTYLE",
        "readTime": "4 min read",
        "title": "Creating a Mindful Evening Routine",
        "excerpt": "How to wind down with intention and wake up restored.",
        "thumbnail": "assets/images/blog/evening-routine.jpg",
        "href": "/journal/mindful-evening-routine",
        "date": "2026-08-05"
      }
    ]
  }
}
```

---

### 10. FAQ Schema
```json
{
  "faq": {
    "sectionTitle": "Frequently Asked Questions",
    "items": [
      {
        "id": "faq-1",
        "question": "Do I need prior yoga experience?",
        "answer": "Absolutely not! We welcome complete beginners. Our Beginners Yoga class is specifically designed for those starting from scratch."
      },
      {
        "id": "faq-2",
        "question": "Do you offer trial classes?",
        "answer": "Yes! We offer a free first class for new students. Simply fill in the contact form or message us on WhatsApp to book your spot."
      },
      {
        "id": "faq-3",
        "question": "How do I join?",
        "answer": "You can join by filling out the enquiry form on our Contact page, calling us, or messaging us on WhatsApp. We'll get back to you within 24 hours."
      },
      {
        "id": "faq-4",
        "question": "What should I bring to class?",
        "answer": "Wear comfortable, stretchy clothing. We provide yoga mats, but you're welcome to bring your own. Bring a water bottle and an open mind!"
      },
      {
        "id": "faq-5",
        "question": "Do you offer online classes?",
        "answer": "Yes, we offer both live-streamed and on-demand recorded classes. Ask us about our online membership packages."
      }
    ]
  }
}
```

---

### 11. Contact / Enquiry Form Schema
```json
{
  "contactPage": {
    "headline": "We'd Love to Welcome You.",
    "subtext": "Whether you're starting your journey or deepening your practice, our doors are open.",
    "form": {
      "id": "enquiry-form",
      "title": "Send an Enquiry",
      "fields": [
        {
          "id": "name",
          "type": "text",
          "label": "Your Name",
          "placeholder": "Your Name",
          "required": true
        },
        {
          "id": "email",
          "type": "email",
          "label": "Email Address",
          "placeholder": "Email Address",
          "required": true
        },
        {
          "id": "phone",
          "type": "tel",
          "label": "Phone Number",
          "placeholder": "Phone Number",
          "required": false
        },
        {
          "id": "program",
          "type": "select",
          "label": "Interested Program (Optional)",
          "placeholder": "Select a Program",
          "required": false,
          "options": [
            "Beginners Yoga",
            "Morning Flow",
            "Breathwork Basics",
            "Finding Stillness",
            "Studio Tour / General Enquiry"
          ]
        },
        {
          "id": "message",
          "type": "textarea",
          "label": "Your Message",
          "placeholder": "Your Message",
          "required": false,
          "rows": 4
        }
      ],
      "submitLabel": "SEND MESSAGE",
      "successMessage": "Thank you! We'll be in touch within 24 hours. 🙏"
    }
  }
}
```

---

### 12. Footer Schema
```json
{
  "footer": {
    "logo": "assets/images/logo-white.svg",
    "tagline": "BREATHE. MOVE. BECOME.",
    "navigationColumns": [
      {
        "heading": "NAVIGATION",
        "links": [
          { "label": "Home",        "href": "/"           },
          { "label": "About",       "href": "/#about"     },
          { "label": "Programs",    "href": "/programs"   },
          { "label": "Instructors", "href": "/#team"      },
          { "label": "Journal",     "href": "/#journal"   },
          { "label": "Contact",     "href": "/contact"    }
        ]
      },
      {
        "heading": "SOCIAL",
        "links": [
          { "label": "Instagram", "href": "https://instagram.com/prakrithiyoga" },
          { "label": "Facebook",  "href": "https://facebook.com/prakrithiyoga"  },
          { "label": "YouTube",   "href": "https://youtube.com/@prakrithiyoga"  },
          { "label": "WhatsApp",  "href": "https://wa.me/91XXXXXXXXXX"          }
        ]
      }
    ],
    "copyright": "© 2026 Prakrithi Yoga Studio. All rights reserved.",
    "legalLinks": [
      { "label": "Privacy Policy", "href": "/privacy" },
      { "label": "Terms",          "href": "/terms"   }
    ]
  }
}
```

---

## 🧩 Component Build Specifications

### `<Navbar>`
- Fixed/sticky, 70px height
- White/cream background with subtle bottom border on scroll (box-shadow)
- Logo left, nav links center-right, CTA pill button far right
- Mobile: hamburger menu → full-screen overlay nav with slide animation

---

### `<BreatheWidget>`
- Animated pulsing circle — CSS `scale` keyframe animation
- Text inside switches between INHALE → HOLD → EXHALE on timer
- Two toggle pill buttons below: **CALM** (dark active) / **FOCUS**
- Floating right-side **BREATHE** button that opens/closes the widget overlay
- Use `requestAnimationFrame` or CSS custom property `--phase-duration` for timing

---

### `<ProgramCard>` (for grid)
- Full-bleed image background (dark overlay on hover)
- Category tag badge (top-left, sage background, white text, uppercase, 0.65rem)
- Title text bottom-left in white, serif font
- If `isVideo: true` → show circular PLAY button overlay on hover

---

### `<ProgramListItem>` (for "Find Your Practice" section)
- Row layout: large index number (faded, decorative) | thumbnail | title + description | arrow →
- Hover: row background subtly darkens, arrow slides right

---

### `<ExperienceStep>`
- Large faded number right-aligned (decorative)
- Bold serif title + body text on the left
- Separated by a horizontal `<hr>` divider

---

### `<TestimonialSlider>`
- Dark background section
- Centered large serif quote text
- 5 star icons (★★★★★)
- Author name below
- Auto-rotate every 5s with fade transition
- Dot indicators below

---

### `<BlogCard>`
- Rectangular image top
- Category badge + read-time row
- Title (serif, clickable green on hover for featured)
- "READ ARTICLE" text link with underline animation

---

### `<FAQAccordion>`
- Each item: question text + `+` icon right
- On click: icon rotates to `×`, answer slides down with CSS `max-height` transition
- Separated by thin `<hr>` borders

---

### `<ContactForm>`
- Left column: address/contact/hours info
- Right column: form card (beige background, rounded corners)
- Input fields: bottom-border only style (no full border box)
- Submit: full-width dark rounded button

---

### `<WhatsAppFAB>`
- Fixed bottom-right circular green button
- WhatsApp icon SVG
- Opens `https://wa.me/91XXXXXXXXXX` in new tab

---

## 🎬 Animation Specifications

| Element | Animation | Trigger |
|---------|-----------|---------|
| Section headings | Fade up + slight Y translate | `IntersectionObserver` (threshold: 0.2) |
| Image cards | Fade in + scale from 0.97 | On scroll enter |
| Navbar | Background opacity + shadow | On scroll past 80px |
| Blog cards | Stagger reveal (0.1s delay each) | On scroll enter |
| Program cards | Stagger from left | On scroll enter |
| Testimonials | Cross-fade | Auto-rotate timer |
| Hero breathe circle | CSS pulse scale loop | Always active |
| CTA banner text | Parallax Y offset | `scroll` event listener |

---

## 🌗 Dark Section Specification

For sections with `"darkBackground": true`:
- Background: `var(--color-charcoal)` (`#1c1c1c`)
- All text: `var(--color-white)`
- Sage accent headings use `var(--color-sage)` italic
- Images with subtle dark overlay or cropped border-radius corners
- Transition gradient from cream to charcoal at top/bottom of section

---

## 📱 Responsive Breakpoints

```css
/* Mobile first */
--bp-sm:  480px;   /* Large mobile */
--bp-md:  768px;   /* Tablet */
--bp-lg:  1024px;  /* Laptop */
--bp-xl:  1280px;  /* Desktop */
--bp-2xl: 1536px;  /* Large desktop */
```

### Responsive Rules
- **Navbar:** Hamburger below `md`, horizontal above
- **Hero:** Full viewport height on all screens; breathe widget scales down on mobile
- **Programs grid:** 1 col mobile → 2 col tablet → 4 col desktop
- **Philosophy split:** Stack vertically on mobile
- **Blog grid:** 1 col → 2 col → 3 col
- **Contact:** Stack vertically on mobile (form below info)
- **Footer:** Single column mobile → 3 column desktop

---

## 📁 Recommended File Structure

```
prakrithi-yoga-studio/
├── index.html
├── programs.html
├── contact.html
├── assets/
│   ├── css/
│   │   ├── main.css
│   │   ├── variables.css
│   │   ├── components/
│   │   │   ├── navbar.css
│   │   │   ├── breathe-widget.css
│   │   │   ├── cards.css
│   │   │   ├── forms.css
│   │   │   └── footer.css
│   │   └── sections/
│   │       ├── hero.css
│   │       ├── programs.css
│   │       ├── philosophy.css
│   │       ├── community.css
│   │       ├── testimonials.css
│   │       ├── journal.css
│   │       ├── faq.css
│   │       └── cta-banner.css
│   ├── js/
│   │   ├── main.js
│   │   ├── breathe-widget.js
│   │   ├── testimonials.js
│   │   ├── faq-accordion.js
│   │   └── scroll-animations.js
│   ├── images/
│   │   ├── logo-icon.svg
│   │   ├── logo-white.svg
│   │   ├── programs/
│   │   ├── gallery/
│   │   ├── community/
│   │   └── blog/
│   └── fonts/           ← (optional, if self-hosting)
└── data/
    ├── business.json
    ├── programs.json
    ├── testimonials.json
    ├── faq.json
    └── blog.json
```

---

## ✅ Build Checklist

- [ ] Sticky responsive navbar with mobile hamburger overlay
- [ ] Hero section with animated breathing circle widget
- [ ] CALM / FOCUS mode toggle for breathing widget
- [ ] Floating BREATHE button (right side)
- [ ] "Find Your Practice" numbered program list
- [ ] Dark philosophy/gallery split section
- [ ] 4-card programs grid (sage green background)
- [ ] "What Happens When You Walk In?" step section
- [ ] Breathing interactive mode section (CALM/FOCUS)
- [ ] "Practice Together" community section with image grid
- [ ] Testimonials dark section with auto-rotating slider
- [ ] 3-column blog/journal grid
- [ ] FAQ accordion section
- [ ] Dark CTA banner with yoga silhouette parallax
- [ ] Contact page with info + enquiry form
- [ ] Footer with logo, nav, social links
- [ ] WhatsApp floating action button
- [ ] Scroll-triggered reveal animations (IntersectionObserver)
- [ ] Fully responsive (mobile-first)
- [ ] Semantic HTML5 + accessible (aria labels, focus states)
- [ ] Form validation (HTML5 + JS)
- [ ] Meta tags (OG, Twitter Card, description)

---

## 🚀 Build Instructions for AI Agent

1. **Start with `variables.css`** — define all CSS custom properties above
2. **Build `index.html`** top to bottom, section by section
3. **Style each section in order** — use the color/spacing variables throughout
4. **Add `scroll-animations.js`** using `IntersectionObserver` for all `.reveal` elements
5. **Build `breathe-widget.js`** — handle phase cycling, mode switching, circle animation
6. **Build `faq-accordion.js`** — toggle open/close with CSS transition
7. **Build `testimonials.js`** — auto-rotate with fade transition
8. **Add WhatsApp FAB** — fixed position, always visible
9. **Test all breakpoints** from 320px → 1536px
10. **Validate HTML** and check WCAG 2.1 AA contrast ratios

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://prakrithi-yoga-studio.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/7fdc7d32-1280-400e-b382-acc9970f8a68).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
