# Field Jobs Dashboard — static demo

A single-file, self-contained dashboard mockup for testing an online version of a
company jobs dashboard: KPI tiles, a jobs-by-client row chart (small clients grouped
into "Other"), a 2D Leaflet map of job locations, and a table view. All data is
fictional and lives in the `JOBS` array at the top of the `<script>` block in
`index.html` — edit it to try your own numbers.

**This is a public webpage once deployed. Do not put real client names, addresses,
or job data in it.**

## Put it on GitHub Pages

1. Sign in at github.com → click **+** (top right) → **New repository**.
2. Name it (e.g. `jobs-dashboard-demo`), set it to **Public** (required for Pages
   on the free plan), leave everything else default → **Create repository**.
3. On the new repo page, click **uploading an existing file**, drag in
   `index.html` and `README.md` → **Commit changes**.
4. Go to **Settings → Pages** (left sidebar). Under *Build and deployment*, set
   **Source: Deploy from a branch**, **Branch: `main`**, folder **`/ (root)`** → **Save**.
5. Wait ~1–2 minutes, refresh the Pages settings page, and your site is live at
   `https://<your-username>.github.io/jobs-dashboard-demo/`.

Any later edit to `index.html` (via the pencil icon on GitHub, or a git push)
republishes automatically in about a minute.

## Notes

- Charts are hand-rolled HTML/CSS (no chart library); the map is
  [Leaflet](https://leafletjs.com) + OpenStreetMap tiles from CDNs, so an
  internet connection is required to see the map.
- Dark mode follows your OS setting automatically.
- The date-range and status filters scope the tiles, chart, map, and table together.
- This mockup has no authentication — it demos visuals only, not the per-user
  permissions a real BI tool (e.g., Metabase) would provide.
