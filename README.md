# Phase 3 Field Jobs — demo

Static demo of a field-jobs dashboard and map tool. All data is fictional sample
data defined in `data.js`.

- `index.html` — sign-in page (demo password: `demo`).
- `dashboard.html` — KPI tiles (including contract value), jobs-by-client and
  contract-value-by-client charts, overview map, and an All jobs table with
  per-column filters, % complete progress bars, and CSV export.
- `map.html` — geospatial tool: full-screen map with hover tooltips, fiber-run
  route lines, searchable jobs list (job #, bid #, customer, keyword,
  status/customer filters), and a details panel with the full job record
  (contract amounts, customer PM, prevailing wage, latest comment), % complete,
  notes, and job documents. Jobs sharing one address collapse into a numbered
  pin — hover to preview, click to pick a job. Selections update the URL, so
  `map.html?user=…&job=P3-26-002` links straight to a job ("Copy link" in the
  details panel).
- `data.js` — sample jobs (fields mirror the production jobs schema: job_number,
  bid_number, customer_pm, contract_amount, estimated_job_cost, pct_complete,
  prevailing_wage, latest_comment, optional route polyline), PM roster, color
  mappings, shared header.
- `styles.css` — shared theme.

Each PM's sign-in scopes every view to their own jobs; the Operations Manager
sees all jobs plus a PM filter.

## Demo limitations

Authentication is client-side for demonstration purposes. Document links and
uploads are placeholders, and notes are held in memory for the current browser
session.

https://stevenP3com.github.io/jobs-dashboard-demo/