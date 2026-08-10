# Phase 3 Field Jobs — static demo (dashboard + map tool + login concept)

A static mockup for GitHub Pages in the Phase 3 red/black/white theme. All data is
fictional and lives in `data.js`.

- `index.html` — demo login. Pick a person, password is `demo`.
- `dashboard.html` — KPI tiles, jobs-by-client chart, overview map, and an All jobs
  table with **per-column filter boxes**.
- `map.html` — the geospatial tool: full-screen map with hover tooltips, a left
  panel with search (job #, customer, keyword) + status/customer filters + recent
  jobs list, and a right panel with full job details, a notes box, and placeholder
  document links (bids, invoices, as-builts, photos) plus an add-document button.
  Documents and uploads are intentionally non-functional in this demo.
  Jobs sharing one address collapse into a numbered pin — hover to preview,
  click to pick a job (the sample data includes three such sites).
- `data.js` — jobs, PM roster, client color mapping, shared header (logo + big
  Dashboard/Map tabs).
- `styles.css` — shared Phase 3 theme.

PM permissions apply on both tabs: PMs see only their own jobs; the Operations
Manager (Sam) sees everything plus a PM filter on the dashboard.

Notes typed in the map tool live only in browser memory and reset on reload — a
real version would save them to a database.

`https://stevenP3com.github.io/<repo>/`.
