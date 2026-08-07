# Field Jobs Dashboard — static demo with login concept

A three-file static mockup for GitHub Pages. All data is fictional and lives in
`data.js`.

- `index.html` — demo login page. Pick a person, password is `demo`.
- `dashboard.html` — the dashboard. PMs see only their own jobs; the Operations
  Manager sees everything plus a PM filter.
- `data.js` — jobs, PM roster, and the fixed client color mapping.

## Dashboard features

- KPI tiles, jobs-by-client row chart (clients with < 5 jobs grouped into "Other"),
  and a table view — all scoped by the shared filter row (date range, status,
  client toggle chips; PM filter for the manager).
- Map: pin **fill color = client** (the four largest clients get their own color,
  the rest share gray — a fifth hue fails colorblind-separation checks), pin
  **border color = status** (amber = in progress, green = completed, gray =
  scheduled). Quiet CARTO Voyager basemap — colored, but without POI icons and
  park/airport clutter.
- Dark mode follows the OS setting.

https://stevenP3com.github.io/jobs-dashboard-demo/
