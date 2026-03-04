# Movie App Frontend

React + Vite frontend for browsing and searching movies from TMDB.

## Local setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Create a local env file:
   ```bash
   cp .env.example .env.local
   ```
3. Set your TMDB key in `.env.local`:
   ```env
   VITE_TMDB_API_KEY=your_tmdb_api_key_here
   ```
4. Start the dev server:
   ```bash
   npm run dev
   ```

## Deploy to Vercel

This repository is already configured for Vercel through the root [`vercel.json`](../vercel.json):
- install command: `npm --prefix frontend install`
- build command: `npm --prefix frontend run build`
- output directory: `frontend/dist`
- SPA fallback route for `react-router-dom` BrowserRouter

Before deploying, add this environment variable in your Vercel project settings:
- `VITE_TMDB_API_KEY`
