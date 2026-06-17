# F1 Rookie Guide

An interactive beginner-friendly Formula 1 guide for the 2026 season.

## Features

- 2026 F1 teams
- Detailed driver profiles with background, family/upbringing, team moves, records, driving style, and reverse timelines
- Team-themed pages
- Race calendar
- Results / podium page with live API fallback
- Driver and constructor standings with live API fallback
- Beginner F1 glossary

## Tech Stack

- React
- Vite
- TypeScript
- Tailwind CSS v4
- Framer Motion
- React Router
- Recharts
- Jolpica F1 API for live standings/results
- GitHub Pages

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy

Before deploying, update `homepage`, `base` in `vite.config.ts`, and the production `basename` in `src/App.tsx` if your GitHub repo name is not `f1-rookie-guide`.

```bash
npm run deploy
```

## Live Data

The `Standings` and `Results` pages try to load data from the Jolpica F1 API:

- Driver standings: `/ergast/f1/2026/driverstandings.json`
- Constructor standings: `/ergast/f1/2026/constructorstandings.json`
- Race results: `/ergast/f1/2026/results.json`

If the API fails, the app falls back to the local snapshot files inside `src/data`.

## Data Notes

Driver biographies are written as beginner-friendly summaries based on widely known public career information. Some 2026 lineup and season data should be verified against official Formula 1/FIA/team sources before publishing.

## Disclaimer

This is an unofficial fan-made educational project. Formula 1, team names, driver names, and related marks belong to their respective owners. Avoid using official F1/team logos or copyrighted photography unless you have permission.
