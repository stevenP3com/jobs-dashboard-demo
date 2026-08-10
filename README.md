# Phase 3 Field Jobs — static demo (dashboard + map tool + login concept)

A static mockup for GitHub Pages in the Phase 3 red/black/white theme. All data is
fictional and lives in `data.js` — edit it to try your own.

- `index.html` — demo login. Pick a person, password is `demo`.
- `dashboard.html` — KPI tiles, jobs-by-client chart, overview map, and an All jobs
  table with **per-column filter boxes**.
- `map.html` — the geospatial tool: full-screen map with hover tooltips, a left
  panel with search (job #, customer, keyword) + status/customer filters + recent
  jobs list, and a right panel with full job details, a notes box, and placeholder
  document links (bids, invoices, as-builts, photos) plus an add-document button.
  Documents and uploads are intentionally non-functional in this demo.
- `data.js` — jobs, PM roster, client color mapping, shared header (logo + big
  Dashboard/Map tabs).
- `styles.css` — shared Phase 3 theme.

PM permissions apply on both tabs: PMs see only their own jobs; the Operations
Manager (Sam) sees everything plus a PM filter on the dashboard.

**The "login" is a front-end concept only — NOT security.** All data ships to every
visitor's browser and the URL can be edited by hand. Real per-user security comes
from a BI tool's server-side permissions (e.g., Metabase sandboxing). Never put
real client names, addresses, or job data in this repo.

Notes typed in the map tool live only in browser memory and reset on reload — a
real version would save them to a database.

## Put it on GitHub Pages

1. github.com → **+** → **New repository** → name it, set **Public**, create.
2. Upload `index.html`, `dashboard.html`, `map.html`, `data.js`, `styles.css`,
   `README.md` → **Commit changes**.
3. **Settings → Pages** → Source: **Deploy from a branch** → `main`, `/ (root)` → **Save**.
4. After ~1–2 minutes: `https://<your-username>.github.io/<repo>/`.

The logo is a recreated placeholder mark ("P3") — swap in the real logo file and
update `P3_LOGO_SVG` in `data.js` when ready.
