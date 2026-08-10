/* Sample data for the Phase 3 Field Jobs demo. All entries are fictional.
   Field names mirror the production jobs schema: job_number, client,
   customer_pm, pm (Phase 3 PM id), bid_number, description, status, date,
   contract_amount, estimated_job_cost, pct_complete, prevailing_wage,
   latest_comment, and optional route (fiber run polyline). */
"use strict";

const PMS = {
  avery:  { name: "Avery Soto",  role: "Project Manager", manager: false },
  dana:   { name: "Dana Kim",    role: "Project Manager", manager: false },
  marcus: { name: "Marcus Webb", role: "Project Manager", manager: false },
  priya:  { name: "Priya Shah",  role: "Project Manager", manager: false },
  sam:    { name: "Sam Ortiz",   role: "Operations Manager", manager: true }
};
const DEMO_PASSWORD = "demo";

/* Fixed client → color mapping. The four largest clients carry a dedicated,
   accessibility-checked hue; remaining clients use the neutral gray. */
const CLIENT_COLORS = {
  "Harborlink Networks":     { light: "#2a78d6", dark: "#3987e5" },  // blue
  "CityGrid Transit":        { light: "#1baf7a", dark: "#199e70" },  // aqua
  "Pacific Crest Utilities": { light: "#4a3aa7", dark: "#9085e9" },  // violet
  "Bayline Communications":  { light: "#eb6834", dark: "#d95926" }   // orange
};
const OTHER_COLOR = { light: "#898781", dark: "#898781" };

/* Map pin border color by job status. */
const STATUS_BORDER = {
  "In Progress": "#c98500",
  "Completed":   "#0ca30c",
  "Scheduled":   "#898781"
};

const JOBS = [
  {job_number:"P3-25-001", client:"Harborlink Networks",    pm:"avery",  customer_pm:"T. Nguyen",   bid_number:"B-24-041", description:"Backbone splice & test — 48ct",    status:"Completed",   date:"2025-02-10", city:"San Francisco", lat:37.7936, lng:-122.3966, contract_amount:184500, estimated_job_cost:141200, pct_complete:100, prevailing_wage:false, latest_comment:"Final acceptance signed off.",
   route:[[37.7936,-122.3966],[37.7907,-122.4010],[37.7867,-122.4060]]},
  {job_number:"P3-25-002", client:"Harborlink Networks",    pm:"avery",  customer_pm:"T. Nguyen",   bid_number:"B-24-058", description:"OTDR characterization, ring A",    status:"Completed",   date:"2025-03-04", city:"Oakland",       lat:37.8049, lng:-122.2712, contract_amount:42800,  estimated_job_cost:29900,  pct_complete:100, prevailing_wage:false, latest_comment:"Report delivered to customer."},
  {job_number:"P3-25-003", client:"Harborlink Networks",    pm:"avery",  customer_pm:"T. Nguyen",   bid_number:"B-25-004", description:"Emergency restoration, MH 14",     status:"Completed",   date:"2025-05-19", city:"Daly City",     lat:37.6879, lng:-122.4702, contract_amount:null,   estimated_job_cost:18400,  pct_complete:100, prevailing_wage:false, latest_comment:"T&M — invoice pending final hours."},
  {job_number:"P3-25-004", client:"Harborlink Networks",    pm:"avery",  customer_pm:"T. Nguyen",   bid_number:"B-25-019", description:"New lateral build — 2,400 ft",     status:"Completed",   date:"2025-08-22", city:"San Mateo",     lat:37.5629, lng:-122.3255, contract_amount:96700,  estimated_job_cost:78300,  pct_complete:100, prevailing_wage:false, latest_comment:null},
  {job_number:"P3-25-005", client:"Harborlink Networks",    pm:"avery",  customer_pm:"T. Nguyen",   bid_number:"B-25-033", description:"Node cutover & acceptance",        status:"Completed",   date:"2025-11-13", city:"Hayward",       lat:37.6688, lng:-122.0810, contract_amount:38200,  estimated_job_cost:27600,  pct_complete:100, prevailing_wage:false, latest_comment:null},
  {job_number:"P3-26-001", client:"Harborlink Networks",    pm:"avery",  customer_pm:"T. Nguyen",   bid_number:"B-25-061", description:"Ring B bidirectional testing",     status:"Completed",   date:"2026-02-06", city:"Fremont",       lat:37.5483, lng:-121.9886, contract_amount:51400,  estimated_job_cost:36100,  pct_complete:100, prevailing_wage:false, latest_comment:"Docs uploaded to customer portal."},
  {job_number:"P3-26-002", client:"Harborlink Networks",    pm:"avery",  customer_pm:"T. Nguyen",   bid_number:"B-25-074", description:"FTTx drop rehab, phase 1",         status:"In Progress", date:"2026-06-15", city:"San Jose",      lat:37.3352, lng:-121.8931, contract_amount:212300, estimated_job_cost:167800, pct_complete:65,  prevailing_wage:false, latest_comment:"Crew 3 ahead of schedule.",
   route:[[37.3352,-121.8931],[37.3311,-121.8867],[37.3268,-121.8829]]},
  {job_number:"P3-26-003", client:"Harborlink Networks",    pm:"avery",  customer_pm:"T. Nguyen",   bid_number:"B-25-074", description:"FTTx drop rehab, phase 2",         status:"In Progress", date:"2026-07-06", city:"San Jose",      lat:37.3352, lng:-121.8931, contract_amount:198400, estimated_job_cost:159200, pct_complete:20,  prevailing_wage:false, latest_comment:"Waiting on encroachment permit for two blocks.",
   route:[[37.3352,-121.8931],[37.3401,-121.8992],[37.3438,-121.9046]]},
  {job_number:"P3-26-004", client:"Harborlink Networks",    pm:"avery",  customer_pm:"T. Nguyen",   bid_number:"B-26-012", description:"Ring C characterization",          status:"Scheduled",   date:"2026-08-17", city:"Berkeley",      lat:37.8715, lng:-122.2730, contract_amount:47900,  estimated_job_cost:33500,  pct_complete:null, prevailing_wage:false, latest_comment:"Access badges requested."},

  {job_number:"P3-25-006", client:"CityGrid Transit",       pm:"dana",   customer_pm:"R. Alvarez",  bid_number:"B-24-052", description:"Station fiber survey — Line 1",    status:"Completed",   date:"2025-01-27", city:"San Francisco", lat:37.7793, lng:-122.4139, contract_amount:64200,  estimated_job_cost:48800,  pct_complete:100, prevailing_wage:true,  latest_comment:null},
  {job_number:"P3-25-007", client:"CityGrid Transit",       pm:"dana",   customer_pm:"R. Alvarez",  bid_number:"B-24-052", description:"Tunnel segment splice, seg 4",     status:"Completed",   date:"2025-04-14", city:"San Francisco", lat:37.7648, lng:-122.4194, contract_amount:157600, estimated_job_cost:121500, pct_complete:100, prevailing_wage:true,  latest_comment:"Night-window work completed without incident.",
   route:[[37.7648,-122.4194],[37.7599,-122.4148],[37.7561,-122.4109]]},
  {job_number:"P3-25-008", client:"CityGrid Transit",       pm:"dana",   customer_pm:"R. Alvarez",  bid_number:"B-25-008", description:"Platform CCTV backhaul",           status:"Completed",   date:"2025-07-08", city:"Oakland",       lat:37.8027, lng:-122.2645, contract_amount:88900,  estimated_job_cost:70100,  pct_complete:100, prevailing_wage:true,  latest_comment:null},
  {job_number:"P3-25-009", client:"CityGrid Transit",       pm:"dana",   customer_pm:"R. Alvarez",  bid_number:"B-25-021", description:"Wayside cabinet re-termination",   status:"Completed",   date:"2025-10-02", city:"Daly City",     lat:37.7061, lng:-122.4692, contract_amount:29800,  estimated_job_cost:22400,  pct_complete:100, prevailing_wage:true,  latest_comment:null},
  {job_number:"P3-26-005", client:"CityGrid Transit",       pm:"dana",   customer_pm:"R. Alvarez",  bid_number:"B-25-055", description:"Line 2 acceptance testing",        status:"Completed",   date:"2026-01-21", city:"Richmond",      lat:37.9364, lng:-122.3477, contract_amount:73400,  estimated_job_cost:55700,  pct_complete:100, prevailing_wage:true,  latest_comment:"Punch list closed."},
  {job_number:"P3-26-006", client:"CityGrid Transit",       pm:"dana",   customer_pm:"R. Alvarez",  bid_number:"B-25-069", description:"Interlocking comms upgrade",       status:"In Progress", date:"2026-05-26", city:"Concord",       lat:37.9779, lng:-122.0311, contract_amount:243700, estimated_job_cost:196400, pct_complete:45,  prevailing_wage:true,  latest_comment:"Cutover window moved to Aug 22."},
  {job_number:"P3-26-007", client:"CityGrid Transit",       pm:"dana",   customer_pm:"R. Alvarez",  bid_number:"B-26-003", description:"Yard LAN fiber extension",         status:"In Progress", date:"2026-06-29", city:"Hayward",       lat:37.6560, lng:-122.0937, contract_amount:66100,  estimated_job_cost:51900,  pct_complete:70,  prevailing_wage:true,  latest_comment:null},
  {job_number:"P3-26-008", client:"CityGrid Transit",       pm:"dana",   customer_pm:"R. Alvarez",  bid_number:"B-26-017", description:"Line 3 tunnel characterization",   status:"Scheduled",   date:"2026-09-08", city:"Walnut Creek",  lat:37.9063, lng:-122.0653, contract_amount:112800, estimated_job_cost:87200,  pct_complete:null, prevailing_wage:true,  latest_comment:"Track access request submitted."},

  {job_number:"P3-25-010", client:"Pacific Crest Utilities",pm:"marcus", customer_pm:"J. Whitfield",bid_number:"B-24-060", description:"Substation OPGW test",             status:"Completed",   date:"2025-03-31", city:"Vallejo",       lat:38.1041, lng:-122.2566, contract_amount:44600,  estimated_job_cost:32800,  pct_complete:100, prevailing_wage:true,  latest_comment:null},
  {job_number:"P3-25-011", client:"Pacific Crest Utilities",pm:"marcus", customer_pm:"J. Whitfield",bid_number:"B-25-011", description:"Distribution ADSS build",          status:"Completed",   date:"2025-06-24", city:"Concord",       lat:37.9722, lng:-122.0016, contract_amount:321500, estimated_job_cost:262300, pct_complete:100, prevailing_wage:true,  latest_comment:"As-builts delivered.",
   route:[[37.9722,-122.0016],[37.9663,-121.9925],[37.9601,-121.9830],[37.9558,-121.9714]]},
  {job_number:"P3-25-012", client:"Pacific Crest Utilities",pm:"marcus", customer_pm:"J. Whitfield",bid_number:"B-25-027", description:"SCADA fiber loop closure",         status:"Completed",   date:"2025-09-16", city:"Antioch",       lat:38.0049, lng:-121.8058, contract_amount:138200, estimated_job_cost:109700, pct_complete:100, prevailing_wage:true,  latest_comment:null},
  {job_number:"P3-26-009", client:"Pacific Crest Utilities",pm:"marcus", customer_pm:"J. Whitfield",bid_number:"B-25-071", description:"Storm damage restoration",         status:"Completed",   date:"2026-01-05", city:"Santa Rosa",    lat:38.4404, lng:-122.7141, contract_amount:null,   estimated_job_cost:64500,  pct_complete:100, prevailing_wage:true,  latest_comment:"T&M — final invoice in review."},
  {job_number:"P3-26-010", client:"Pacific Crest Utilities",pm:"marcus", customer_pm:"J. Whitfield",bid_number:"B-26-006", description:"Microwave-to-fiber migration",     status:"In Progress", date:"2026-06-08", city:"Napa",          lat:38.2975, lng:-122.2869, contract_amount:187900, estimated_job_cost:149800, pct_complete:35,  prevailing_wage:true,  latest_comment:"Tower crew scheduled for site 4."},
  {job_number:"P3-26-011", client:"Pacific Crest Utilities",pm:"marcus", customer_pm:"J. Whitfield",bid_number:"B-26-020", description:"Substation ring extension",        status:"Scheduled",   date:"2026-08-24", city:"Fairfield",     lat:38.2494, lng:-122.0400, contract_amount:264300, estimated_job_cost:214100, pct_complete:null, prevailing_wage:true,  latest_comment:null},

  {job_number:"P3-25-013", client:"Bayline Communications", pm:"marcus", customer_pm:"S. Patel",    bid_number:"B-25-002", description:"Campus backbone install",          status:"Completed",   date:"2025-05-06", city:"Palo Alto",     lat:37.4419, lng:-122.1630, contract_amount:176800, estimated_job_cost:139400, pct_complete:100, prevailing_wage:false, latest_comment:null},
  {job_number:"P3-25-014", client:"Bayline Communications", pm:"marcus", customer_pm:"S. Patel",    bid_number:"B-25-018", description:"Dark fiber audit — 96ct",          status:"Completed",   date:"2025-08-11", city:"Redwood City",  lat:37.4852, lng:-122.2364, contract_amount:58600,  estimated_job_cost:41200,  pct_complete:100, prevailing_wage:false, latest_comment:null},
  {job_number:"P3-25-015", client:"Bayline Communications", pm:"marcus", customer_pm:"S. Patel",    bid_number:"B-25-039", description:"Colo cross-connect buildout",      status:"Completed",   date:"2025-12-09", city:"Santa Clara",   lat:37.3688, lng:-121.9614, contract_amount:92400,  estimated_job_cost:74800,  pct_complete:100, prevailing_wage:false, latest_comment:"Customer added 12 pairs mid-job — change order CO-2."},
  {job_number:"P3-26-012", client:"Bayline Communications", pm:"marcus", customer_pm:"S. Patel",    bid_number:"B-26-001", description:"Metro ring splice & test",         status:"In Progress", date:"2026-07-01", city:"San Jose",      lat:37.3639, lng:-121.9289, contract_amount:228600, estimated_job_cost:183900, pct_complete:55,  prevailing_wage:false, latest_comment:"Segment 2 of 4 spliced.",
   route:[[37.3639,-121.9289],[37.3577,-121.9192],[37.3521,-121.9268],[37.3584,-121.9366],[37.3639,-121.9289]]},
  {job_number:"P3-26-013", client:"Bayline Communications", pm:"marcus", customer_pm:"S. Patel",    bid_number:"B-26-015", description:"Lateral to new MTU",               status:"Scheduled",   date:"2026-09-21", city:"Mountain View", lat:37.3861, lng:-122.0839, contract_amount:84100,  estimated_job_cost:66300,  pct_complete:null, prevailing_wage:false, latest_comment:null},

  {job_number:"P3-25-016", client:"Summit Datacenters",     pm:"priya",  customer_pm:"K. O’Brien",  bid_number:"B-24-063", description:"Meet-me room fiber plant",         status:"Completed",   date:"2025-04-29", city:"Santa Clara",   lat:37.3803, lng:-121.9731, contract_amount:143700, estimated_job_cost:112900, pct_complete:100, prevailing_wage:false, latest_comment:null},
  {job_number:"P3-25-017", client:"Summit Datacenters",     pm:"priya",  customer_pm:"K. O’Brien",  bid_number:"B-25-024", description:"Inter-building duct bank",         status:"Completed",   date:"2025-10-27", city:"San Jose",      lat:37.3639, lng:-121.9289, contract_amount:395200, estimated_job_cost:331600, pct_complete:100, prevailing_wage:false, latest_comment:"Restoration paving complete.",
   route:[[37.3639,-121.9289],[37.3671,-121.9337],[37.3705,-121.9381]]},
  {job_number:"P3-26-014", client:"Summit Datacenters",     pm:"priya",  customer_pm:"K. O’Brien",  bid_number:"B-25-066", description:"Campus ring OTDR baseline",        status:"Completed",   date:"2026-03-09", city:"Fremont",       lat:37.5107, lng:-121.9790, contract_amount:36900,  estimated_job_cost:25700,  pct_complete:100, prevailing_wage:false, latest_comment:null},
  {job_number:"P3-26-015", client:"Summit Datacenters",     pm:"priya",  customer_pm:"K. O’Brien",  bid_number:"B-26-008", description:"Phase 3 hall fiber trunk",         status:"In Progress", date:"2026-06-22", city:"Santa Clara",   lat:37.3752, lng:-121.9500, contract_amount:167300, estimated_job_cost:134500, pct_complete:80,  prevailing_wage:false, latest_comment:"Testing starts Monday."},
  {job_number:"P3-26-016", client:"Summit Datacenters",     pm:"priya",  customer_pm:"K. O’Brien",  bid_number:"B-26-019", description:"DR site diverse-path build",       status:"Scheduled",   date:"2026-10-05", city:"Sacramento",    lat:38.5816, lng:-121.4944, contract_amount:441800, estimated_job_cost:362700, pct_complete:null, prevailing_wage:false, latest_comment:"Route study approved by customer."},

  {job_number:"P3-25-018", client:"Redwood Medical Group",  pm:"priya",  customer_pm:"M. Ross",     bid_number:"B-25-009", description:"Clinic WAN fiber upgrade",         status:"Completed",   date:"2025-06-03", city:"San Rafael",    lat:37.9735, lng:-122.5311, contract_amount:47300,  estimated_job_cost:35600,  pct_complete:100, prevailing_wage:false, latest_comment:null},
  {job_number:"P3-25-019", client:"Redwood Medical Group",  pm:"priya",  customer_pm:"M. Ross",     bid_number:"B-25-036", description:"Hospital campus redundancy",       status:"Completed",   date:"2025-11-24", city:"Oakland",       lat:37.8136, lng:-122.2470, contract_amount:129800, estimated_job_cost:104200, pct_complete:100, prevailing_wage:false, latest_comment:null},
  {job_number:"P3-26-017", client:"Redwood Medical Group",  pm:"priya",  customer_pm:"M. Ross",     bid_number:"B-26-009", description:"Imaging center dark fiber",        status:"In Progress", date:"2026-07-13", city:"Berkeley",      lat:37.8632, lng:-122.2586, contract_amount:71600,  estimated_job_cost:56800,  pct_complete:30,  prevailing_wage:false, latest_comment:"Conduit proofing done; pulling next week."},
  {job_number:"P3-26-018", client:"Redwood Medical Group",  pm:"priya",  customer_pm:"M. Ross",     bid_number:"B-26-022", description:"New clinic lateral",               status:"Scheduled",   date:"2026-08-31", city:"Alameda",       lat:37.7652, lng:-122.2416, contract_amount:39400,  estimated_job_cost:30100,  pct_complete:null, prevailing_wage:false, latest_comment:null},

  {job_number:"P3-25-020", client:"Foglight Media",         pm:"avery",  customer_pm:"L. Zhang",    bid_number:"B-25-015", description:"Studio-to-colo dark fiber",        status:"Completed",   date:"2025-07-22", city:"San Francisco", lat:37.7702, lng:-122.4032, contract_amount:83700,  estimated_job_cost:64900,  pct_complete:100, prevailing_wage:false, latest_comment:null},
  {job_number:"P3-26-019", client:"Foglight Media",         pm:"avery",  customer_pm:"L. Zhang",    bid_number:"B-25-078", description:"Broadcast van fiber tie-ins",      status:"Completed",   date:"2026-02-17", city:"San Francisco", lat:37.7785, lng:-122.3892, contract_amount:24600,  estimated_job_cost:17800,  pct_complete:100, prevailing_wage:false, latest_comment:null},
  {job_number:"P3-26-020", client:"Foglight Media",         pm:"avery",  customer_pm:"L. Zhang",    bid_number:"B-26-014", description:"Event venue temporary fiber",      status:"In Progress", date:"2026-07-08", city:"San Francisco", lat:37.7841, lng:-122.4077, contract_amount:null,   estimated_job_cost:12300,  pct_complete:50,  prevailing_wage:false, latest_comment:"T&M — event runs through Aug 30."},

  {job_number:"P3-25-021", client:"Eastshore Logistics",    pm:"dana",   customer_pm:"D. Okafor",   bid_number:"B-25-029", description:"Warehouse yard fiber loop",        status:"Completed",   date:"2025-09-09", city:"Richmond",      lat:37.9158, lng:-122.3108, contract_amount:76200,  estimated_job_cost:59700,  pct_complete:100, prevailing_wage:false, latest_comment:null,
   route:[[37.9158,-122.3108],[37.9187,-122.3061],[37.9152,-122.3021],[37.9124,-122.3072],[37.9158,-122.3108]]},
  {job_number:"P3-26-021", client:"Eastshore Logistics",    pm:"dana",   customer_pm:"D. Okafor",   bid_number:"B-26-005", description:"Gate automation comms",            status:"In Progress", date:"2026-06-01", city:"Oakland",       lat:37.7957, lng:-122.2792, contract_amount:54800,  estimated_job_cost:43600,  pct_complete:60,  prevailing_wage:false, latest_comment:null},

  {job_number:"P3-25-022", client:"Marina Point HOA",       pm:"dana",   customer_pm:"C. Bianchi",  bid_number:"B-25-031", description:"Community FTTH phase 1",           status:"Completed",   date:"2025-12-15", city:"Alameda",       lat:37.7726, lng:-122.2833, contract_amount:118600, estimated_job_cost:96100,  pct_complete:100, prevailing_wage:false, latest_comment:"Phase 2 pending HOA board vote.",
   route:[[37.7726,-122.2833],[37.7748,-122.2801],[37.7769,-122.2842]]},
  {job_number:"P3-26-022", client:"Marina Point HOA",       pm:"dana",   customer_pm:"C. Bianchi",  bid_number:"B-26-011", description:"Community FTTH phase 2",           status:"Scheduled",   date:"2026-09-14", city:"Alameda",       lat:37.7726, lng:-122.2833, contract_amount:124900, estimated_job_cost:101800, pct_complete:null, prevailing_wage:false, latest_comment:"Board approved 6–1."},

  {job_number:"P3-26-023", client:"Delta Charter Schools",  pm:"dana",   customer_pm:"A. Foster",   bid_number:"B-25-080", description:"School district WAN links",        status:"Completed",   date:"2026-04-13", city:"Antioch",       lat:37.9857, lng:-121.7960, contract_amount:97200,  estimated_job_cost:79500,  pct_complete:100, prevailing_wage:true,  latest_comment:"E-Rate documentation submitted."},

  {job_number:"P3-26-024", client:"Ironside Manufacturing", pm:"priya",  customer_pm:"G. Kowalski", bid_number:"B-26-016", description:"Plant floor fiber backbone",       status:"In Progress", date:"2026-07-15", city:"Hayward",       lat:37.6305, lng:-122.1072, contract_amount:61900,  estimated_job_cost:49200,  pct_complete:40,  prevailing_wage:false, latest_comment:null}
];

/* ---------- Formatting helpers ---------- */
function fmtMoney(n) {
  return n == null ? "—" : "$" + n.toLocaleString("en-US");
}
function fmtMoneyCompact(n) {
  if (n == null) return "—";
  if (n >= 1e6) return "$" + (n / 1e6).toFixed(2).replace(/\.?0+$/, "") + "M";
  if (n >= 1e3) return "$" + Math.round(n / 1e3) + "K";
  return "$" + n;
}

/* ---------- Shared chrome helpers ---------- */
const P3_LOGO_SVG =
  '<svg width="30" height="30" viewBox="0 0 32 32" aria-hidden="true">' +
  '<rect width="32" height="32" rx="7" fill="#c8102e"/>' +
  '<text x="16" y="21.5" text-anchor="middle" font-family="system-ui,-apple-system,sans-serif" ' +
  'font-weight="800" font-size="13.5" fill="#ffffff">P3</text></svg>';

/* Injects the black header (logo, Dashboard/Map tabs, signed-in user).
   activeTab: "dashboard" | "map". Returns the resolved user object or null. */
function renderP3Header(activeTab) {
  const userId = new URLSearchParams(location.search).get("user");
  const user = PMS[userId] || null;
  const header = document.createElement("header");
  header.className = "p3-header";

  const brand = document.createElement("div");
  brand.className = "p3-brand";
  brand.innerHTML = P3_LOGO_SVG;                       // static markup, no user data
  const wm = document.createElement("div");
  wm.className = "p3-wordmark";
  const l1 = document.createElement("div"); l1.className = "l1";
  l1.append(document.createTextNode("PHASE 3 "));
  const tag = document.createElement("span"); tag.className = "demo-tag"; tag.textContent = "DEMO";
  l1.appendChild(tag);
  const l2 = document.createElement("div"); l2.className = "l2"; l2.textContent = "COMMUNICATIONS";
  wm.append(l1, l2);
  brand.appendChild(wm);
  header.appendChild(brand);

  const q = userId ? "?user=" + encodeURIComponent(userId) : "";
  const tabs = document.createElement("nav");
  tabs.className = "p3-tabs";
  [["dashboard", "Dashboard", "dashboard.html"], ["map", "Map", "map.html"]].forEach(([key, label, href]) => {
    const a = document.createElement("a");
    a.className = "p3-tab" + (key === activeTab ? " active" : "");
    a.href = href + q;
    a.textContent = label;
    tabs.appendChild(a);
  });
  header.appendChild(tabs);

  const u = document.createElement("div");
  u.className = "p3-user";
  if (user) {
    const who = document.createElement("span");
    who.className = "p3-user-name";
    who.textContent = user.name + " · " + user.role + " — ";
    const out = document.createElement("a");
    out.href = "index.html"; out.textContent = "sign out";
    u.append(who, out);
  }
  header.appendChild(u);
  document.body.prepend(header);
  return user;
}

/* Group jobs that share the same coordinates (multiple jobs at one address). */
function groupByLocation(jobs) {
  const m = new Map();
  jobs.forEach(j => {
    const k = j.lat.toFixed(5) + "," + j.lng.toFixed(5);
    if (!m.has(k)) m.set(k, { key: k, lat: j.lat, lng: j.lng, jobs: [] });
    m.get(k).jobs.push(j);
  });
  return [...m.values()];
}

/* Placeholder document list for a job. */
function docsFor(j) {
  const n = j.job_number;
  const docs = [
    { label: "Bid_" + j.bid_number + ".pdf", kind: "Bid" },
    { label: "SOW_" + n + ".docx", kind: "Scope" }
  ];
  if (j.status === "Completed") {
    docs.push({ label: "Invoice_" + n + ".pdf", kind: "Invoice" },
              { label: "AsBuilt_" + n + ".dwg", kind: "As-built" },
              { label: "TestResults_" + n + ".xlsx", kind: "Testing" },
              { label: "Site photos (12)", kind: "Photos" });
  } else if (j.status === "In Progress") {
    docs.push({ label: "Permit_" + n + ".pdf", kind: "Permit" },
              { label: "Site photos (5)", kind: "Photos" });
  } else {
    docs.push({ label: "PermitApplication_" + n + ".pdf", kind: "Permit" });
  }
  return docs;
}
