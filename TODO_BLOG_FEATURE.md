# 📝 Hidden Features — Reminder

> **Last updated:** 2026-04-04

---

## 1. Blog / Insights Section

> **Status:** Hidden (not yet implemented)

### What Was Hidden

The **Blog / Insights** section was temporarily removed from the portfolio landing page.
It previously displayed a "Coming Soon" state with the heading:

- **Section Label:** "Thoughts & Insights"
- **Title:** "Blog / Insights"
- **Subtitle:** "Notes on data, machine learning, and the craft of problem solving."

### Files Involved

| File | Purpose |
|------|---------|
| `components/sections/Blog.tsx` | The Blog section component (fully built, ready to use) |
| `data/portfolio.ts` | Contains `blogPosts` array with 3 placeholder posts |
| `app/page.tsx` | Blog import & usage **commented out** — uncomment to re-enable |

### How to Re-Enable

1. Open `app/page.tsx`
2. Uncomment the import:
   ```tsx
   import { Blog } from '@/components/sections/Blog'
   ```
3. Uncomment the component in the JSX (add it back between `<Contact />` and `</main>`):
   ```tsx
   <Blog />
   ```
4. Update `data/portfolio.ts` — replace the placeholder `blogPosts` entries with real content:
   - Replace placeholder images with actual blog thumbnails
   - Update titles, excerpts, dates, and tags

### Content Checklist

- [ ] Write at least 2–3 real blog posts
- [ ] Create or source blog thumbnail images
- [ ] Update `blogPosts` array in `data/portfolio.ts`
- [ ] Uncomment Blog in `app/page.tsx`
- [ ] Test the section renders correctly

---

## 2. Contact Form (Name / Email / Message / Send)

> **Status:** Hidden (no backend connected)

### What Was Hidden

The **contact form** on the right side of the Contact section was removed. It included:

- **Name** input field (placeholder: "Your name")
- **Email** input field (placeholder: "you@company.com")
- **Message** textarea (placeholder: "Tell me about your project...")
- **Send Message** button with arrow icon

The left side (heading, description, social links) was kept.

### Files Involved

| File | Purpose |
|------|---------|
| `components/sections/Contact.tsx` | Form JSX was removed — the original code used `useState` + `framer-motion` |

### How to Re-Enable

1. Open `components/sections/Contact.tsx`
2. Add back the `useState` imports and form state:
   ```tsx
   import { useState } from 'react'
   import { motion } from 'framer-motion'
   import { ArrowRight } from 'lucide-react'
   ```
3. Restore the two-column grid layout (`grid lg:grid-cols-2 gap-24`)
4. Add the form panel back as the right column
5. **Important:** Connect the form to an actual backend (e.g., Formspree, EmailJS, or a custom API route) so submissions are actually sent

### Content Checklist

- [ ] Choose a form backend (Formspree / EmailJS / Next.js API route)
- [ ] Implement form submission logic
- [ ] Restore the form UI in `Contact.tsx`
- [ ] Add form validation & error handling
- [ ] Test end-to-end submission flow

---

> 🗑️ **Delete this file** once all features above are implemented and live.
