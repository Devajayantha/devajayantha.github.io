# Gallery Page Finish Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Finish the Nuxt gallery page so it matches the richer static gallery design and content while keeping filter and lightbox behavior intact.

**Architecture:** Update the existing `pages/gallery.vue` page in place. Keep the page-level data-driven filter and lightbox logic, but switch the card markup and styling to the richer version with visible metadata and descriptions, plus an explicit image trigger for the lightbox.

**Tech Stack:** Nuxt 3, Vue 3 `<script setup>`, scoped CSS, `vue-easy-lightbox`

---

### Task 1: Refresh the gallery page structure and data

**Files:**
- Modify: `pages/gallery.vue`
- Verify: `npm run build`

- [ ] **Step 1: Update the gallery data model and template**

Replace the current item interface and card template in `pages/gallery.vue` with fields for description text and a visible body section beneath each image. Keep the existing filter model and `filteredItems` computed state.

- [ ] **Step 2: Keep lightbox behavior attached to the image trigger**

Use a button or clickable image wrapper inside each card so the full card remains readable while the image still opens the lightbox for the currently filtered list.

- [ ] **Step 3: Update scoped styles**

Replace the hover-overlay-only presentation with card, image wrapper, body, title, meta, and description styles that match the richer gallery layout already drafted in the static page.

- [ ] **Step 4: Run build verification**

Run: `npm run build`

Expected: Nuxt build exits with code `0`.
