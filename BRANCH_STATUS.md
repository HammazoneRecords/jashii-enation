# BRANCH_STATUS — Jahshii Official

**App path:** `active_apps/artise_sites/extracted.sites/jahshii-official/`
**Live domain:** `officialjahshiimusic.com` (owned, not yet deployed)
**VPS container:** pending
**VPS port:** pending (next available after port 3006)
**Repo:** pending — GitHub repo not yet created

---

## Current State

| Branch | Last Updated | Deployed? | Notes |
|---|---|---|---|
| master | 2026-05-02 | ⬜ Not deployed | Local only — awaiting GitHub repo |

## Last Action

**Date:** 2026-05-02
**Branch:** master
**Action:** Initial build — full site created from AI Studio export
**What changed:**
- Removed @google/genai / Gemini dependencies and SPDX headers
- Hero.tsx: wired real hero image from jahshii.dna/
- Tracks.tsx: new component — 10 real tracks, YouTube embed modal
- TheJourney.tsx: cleaned milestones (2000–2024)
- FirstNationEbikes.tsx: new section — 3 eBike models from brand_direction.md
- Nav.tsx: added Shop + 1st Nation links, no border-b
- Footer.tsx: real social links (Instagram, YouTube, Spotify, Apple Music)
- App.tsx: BrowserRouter + routes + Working Draft banner (clickable purchase → mindwaveja.com)
- main.tsx: ScrollToTop component
- Shop.tsx: /shop route with merch placeholder
- Dockerfile + nginx.conf added
- Jahshii nav border-b removed (mobile menu)
- favicon.svg: circular black + JAH (green) / SHII (yellow)
**Schema migration:** none

---

## Active Feature Branches

| Branch | Purpose | Created | Status |
|---|---|---|---|
| — | — | — | — |

## Pending Merges

- [ ] master → GitHub remote (waiting on: GitHub repo URL from Deego)
- [ ] GitHub → VPS deploy (waiting on: repo + domain DNS)

---

## History

| Date | Branch | Action | Notes |
|---|---|---|---|
| 2026-05-02 | master | Initial BRANCH_STATUS.md created | Site built, not yet deployed |
