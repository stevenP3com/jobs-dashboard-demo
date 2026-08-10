/* Sample data for the Phase 3 Field Jobs demo. All entries are fictional.
   Each job carries a pm id; "sam" is the operations manager role. */
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
  {id:"J-1001", client:"Harborlink Networks",    pm:"avery",  desc:"Backbone splice & test — 48ct",    status:"Completed",   date:"2025-02-10", city:"San Francisco", lat:37.7936, lng:-122.3966},
  {id:"J-1002", client:"Harborlink Networks",    pm:"avery",  desc:"OTDR characterization, ring A",    status:"Completed",   date:"2025-03-04", city:"Oakland",       lat:37.8049, lng:-122.2712},
  {id:"J-1003", client:"Harborlink Networks",    pm:"avery",  desc:"Emergency restoration, MH 14",     status:"Completed",   date:"2025-05-19", city:"Daly City",     lat:37.6879, lng:-122.4702},
  {id:"J-1004", client:"Harborlink Networks",    pm:"avery",  desc:"New lateral build — 2,400 ft",     status:"Completed",   date:"2025-08-22", city:"San Mateo",     lat:37.5629, lng:-122.3255},
  {id:"J-1005", client:"Harborlink Networks",    pm:"avery",  desc:"Node cutover & acceptance",        status:"Completed",   date:"2025-11-13", city:"Hayward",       lat:37.6688, lng:-122.0810},
  {id:"J-1006", client:"Harborlink Networks",    pm:"avery",  desc:"Ring B bidirectional testing",     status:"Completed",   date:"2026-02-06", city:"Fremont",       lat:37.5483, lng:-121.9886},
  {id:"J-1007", client:"Harborlink Networks",    pm:"avery",  desc:"FTTx drop rehab, phase 1",         status:"In Progress", date:"2026-06-15", city:"San Jose",      lat:37.3352, lng:-121.8931},
  {id:"J-1008", client:"Harborlink Networks",    pm:"avery",  desc:"FTTx drop rehab, phase 2",         status:"In Progress", date:"2026-07-06", city:"San Jose",      lat:37.3352, lng:-121.8931},
  {id:"J-1009", client:"Harborlink Networks",    pm:"avery",  desc:"Ring C characterization",          status:"Scheduled",   date:"2026-08-17", city:"Berkeley",      lat:37.8715, lng:-122.2730},

  {id:"J-1010", client:"CityGrid Transit",       pm:"dana",   desc:"Station fiber survey — Line 1",    status:"Completed",   date:"2025-01-27", city:"San Francisco", lat:37.7793, lng:-122.4139},
  {id:"J-1011", client:"CityGrid Transit",       pm:"dana",   desc:"Tunnel segment splice, seg 4",     status:"Completed",   date:"2025-04-14", city:"San Francisco", lat:37.7648, lng:-122.4194},
  {id:"J-1012", client:"CityGrid Transit",       pm:"dana",   desc:"Platform CCTV backhaul",           status:"Completed",   date:"2025-07-08", city:"Oakland",       lat:37.8027, lng:-122.2645},
  {id:"J-1013", client:"CityGrid Transit",       pm:"dana",   desc:"Wayside cabinet re-termination",   status:"Completed",   date:"2025-10-02", city:"Daly City",     lat:37.7061, lng:-122.4692},
  {id:"J-1014", client:"CityGrid Transit",       pm:"dana",   desc:"Line 2 acceptance testing",        status:"Completed",   date:"2026-01-21", city:"Richmond",      lat:37.9364, lng:-122.3477},
  {id:"J-1015", client:"CityGrid Transit",       pm:"dana",   desc:"Interlocking comms upgrade",       status:"In Progress", date:"2026-05-26", city:"Concord",       lat:37.9779, lng:-122.0311},
  {id:"J-1016", client:"CityGrid Transit",       pm:"dana",   desc:"Yard LAN fiber extension",         status:"In Progress", date:"2026-06-29", city:"Hayward",       lat:37.6560, lng:-122.0937},
  {id:"J-1017", client:"CityGrid Transit",       pm:"dana",   desc:"Line 3 tunnel characterization",   status:"Scheduled",   date:"2026-09-08", city:"Walnut Creek",  lat:37.9063, lng:-122.0653},

  {id:"J-1018", client:"Pacific Crest Utilities",pm:"marcus", desc:"Substation OPGW test",             status:"Completed",   date:"2025-03-31", city:"Vallejo",       lat:38.1041, lng:-122.2566},
  {id:"J-1019", client:"Pacific Crest Utilities",pm:"marcus", desc:"Distribution ADSS build",          status:"Completed",   date:"2025-06-24", city:"Concord",       lat:37.9722, lng:-122.0016},
  {id:"J-1020", client:"Pacific Crest Utilities",pm:"marcus", desc:"SCADA fiber loop closure",         status:"Completed",   date:"2025-09-16", city:"Antioch",       lat:38.0049, lng:-121.8058},
  {id:"J-1021", client:"Pacific Crest Utilities",pm:"marcus", desc:"Storm damage restoration",         status:"Completed",   date:"2026-01-05", city:"Santa Rosa",    lat:38.4404, lng:-122.7141},
  {id:"J-1022", client:"Pacific Crest Utilities",pm:"marcus", desc:"Microwave-to-fiber migration",     status:"In Progress", date:"2026-06-08", city:"Napa",          lat:38.2975, lng:-122.2869},
  {id:"J-1023", client:"Pacific Crest Utilities",pm:"marcus", desc:"Substation ring extension",        status:"Scheduled",   date:"2026-08-24", city:"Fairfield",     lat:38.2494, lng:-122.0400},

  {id:"J-1024", client:"Bayline Communications", pm:"marcus", desc:"Campus backbone install",          status:"Completed",   date:"2025-05-06", city:"Palo Alto",     lat:37.4419, lng:-122.1630},
  {id:"J-1025", client:"Bayline Communications", pm:"marcus", desc:"Dark fiber audit — 96ct",          status:"Completed",   date:"2025-08-11", city:"Redwood City",  lat:37.4852, lng:-122.2364},
  {id:"J-1026", client:"Bayline Communications", pm:"marcus", desc:"Colo cross-connect buildout",      status:"Completed",   date:"2025-12-09", city:"Santa Clara",   lat:37.3688, lng:-121.9614},
  {id:"J-1027", client:"Bayline Communications", pm:"marcus", desc:"Metro ring splice & test",         status:"In Progress", date:"2026-07-01", city:"San Jose",      lat:37.3639, lng:-121.9289},
  {id:"J-1028", client:"Bayline Communications", pm:"marcus", desc:"Lateral to new MTU",               status:"Scheduled",   date:"2026-09-21", city:"Mountain View", lat:37.3861, lng:-122.0839},

  {id:"J-1029", client:"Summit Datacenters",     pm:"priya",  desc:"Meet-me room fiber plant",         status:"Completed",   date:"2025-04-29", city:"Santa Clara",   lat:37.3803, lng:-121.9731},
  {id:"J-1030", client:"Summit Datacenters",     pm:"priya",  desc:"Inter-building duct bank",         status:"Completed",   date:"2025-10-27", city:"San Jose",      lat:37.3639, lng:-121.9289},
  {id:"J-1031", client:"Summit Datacenters",     pm:"priya",  desc:"Campus ring OTDR baseline",        status:"Completed",   date:"2026-03-09", city:"Fremont",       lat:37.5107, lng:-121.9790},
  {id:"J-1032", client:"Summit Datacenters",     pm:"priya",  desc:"Phase 3 hall fiber trunk",         status:"In Progress", date:"2026-06-22", city:"Santa Clara",   lat:37.3752, lng:-121.9500},
  {id:"J-1033", client:"Summit Datacenters",     pm:"priya",  desc:"DR site diverse-path build",       status:"Scheduled",   date:"2026-10-05", city:"Sacramento",    lat:38.5816, lng:-121.4944},

  {id:"J-1034", client:"Redwood Medical Group",  pm:"priya",  desc:"Clinic WAN fiber upgrade",         status:"Completed",   date:"2025-06-03", city:"San Rafael",    lat:37.9735, lng:-122.5311},
  {id:"J-1035", client:"Redwood Medical Group",  pm:"priya",  desc:"Hospital campus redundancy",       status:"Completed",   date:"2025-11-24", city:"Oakland",       lat:37.8136, lng:-122.2470},
  {id:"J-1036", client:"Redwood Medical Group",  pm:"priya",  desc:"Imaging center dark fiber",        status:"In Progress", date:"2026-07-13", city:"Berkeley",      lat:37.8632, lng:-122.2586},
  {id:"J-1037", client:"Redwood Medical Group",  pm:"priya",  desc:"New clinic lateral",               status:"Scheduled",   date:"2026-08-31", city:"Alameda",       lat:37.7652, lng:-122.2416},

  {id:"J-1038", client:"Foglight Media",         pm:"avery",  desc:"Studio-to-colo dark fiber",        status:"Completed",   date:"2025-07-22", city:"San Francisco", lat:37.7702, lng:-122.4032},
  {id:"J-1039", client:"Foglight Media",         pm:"avery",  desc:"Broadcast van fiber tie-ins",      status:"Completed",   date:"2026-02-17", city:"San Francisco", lat:37.7785, lng:-122.3892},
  {id:"J-1040", client:"Foglight Media",         pm:"avery",  desc:"Event venue temporary fiber",      status:"In Progress", date:"2026-07-08", city:"San Francisco", lat:37.7841, lng:-122.4077},

  {id:"J-1041", client:"Eastshore Logistics",    pm:"dana",   desc:"Warehouse yard fiber loop",        status:"Completed",   date:"2025-09-09", city:"Richmond",      lat:37.9158, lng:-122.3108},
  {id:"J-1042", client:"Eastshore Logistics",    pm:"dana",   desc:"Gate automation comms",            status:"In Progress", date:"2026-06-01", city:"Oakland",       lat:37.7957, lng:-122.2792},

  {id:"J-1043", client:"Marina Point HOA",       pm:"dana",   desc:"Community FTTH phase 1",           status:"Completed",   date:"2025-12-15", city:"Alameda",       lat:37.7726, lng:-122.2833},
  {id:"J-1044", client:"Marina Point HOA",       pm:"dana",   desc:"Community FTTH phase 2",           status:"Scheduled",   date:"2026-09-14", city:"Alameda",       lat:37.7726, lng:-122.2833},

  {id:"J-1045", client:"Delta Charter Schools",  pm:"dana",   desc:"School district WAN links",        status:"Completed",   date:"2026-04-13", city:"Antioch",       lat:37.9857, lng:-121.7960},

  {id:"J-1046", client:"Ironside Manufacturing", pm:"priya",  desc:"Plant floor fiber backbone",       status:"In Progress", date:"2026-07-15", city:"Hayward",       lat:37.6305, lng:-122.1072}
];

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
  const n = j.id.replace("J-", "");
  const docs = [
    { label: "Bid_" + n + ".pdf", kind: "Bid" },
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
