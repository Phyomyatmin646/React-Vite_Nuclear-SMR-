/**
 * SNPP Module - Myanmar Edition
 * Interactive SMR Site Selection Widget
 * 
 * Usage:
 * <div id="snpp-widget"></div>
 * <script src="snpp-widget-myanmar.js"></script>
 * <script>
 *   SNPPWidget.init('snpp-widget', {
 *     modules: ['siting', 'grid'],
 *     theme: 'light',
 *     height: '600px'
 *   });
 * </script>
 */

(function() {
  'use strict';

  window.SNPPWidget = window.SNPPWidget || {};

  // Myanmar geo data
  const geoData = {
    populationCenters: [
      { name: 'Yangon', coords: [16.8661, 96.1951], population: 5500000, radius: 80000 },
      { name: 'Mandalay', coords: [21.9588, 96.0891], population: 1500000, radius: 50000 },
      { name: 'Naypyidaw', coords: [19.7633, 96.0785], population: 1200000, radius: 40000 },
      { name: 'Mawlamyine', coords: [16.4905, 97.6255], population: 500000, radius: 30000 },
      { name: 'Bago', coords: [17.3366, 96.4811], population: 300000, radius: 25000 },
      { name: 'Pathein', coords: [16.7794, 94.7331], population: 280000, radius: 25000 },
      { name: 'Myitkyina', coords: [25.3867, 97.3936], population: 200000, radius: 20000 },
      { name: 'Taunggyi', coords: [20.7833, 97.0333], population: 180000, radius: 20000 },
    ],
    waterSources: [
      { name: 'Irrawaddy River', coords: [[25.5, 97.0], [24.0, 96.5], [22.0, 95.5], [19.5, 95.0], [17.0, 95.5], [16.0, 95.0]] },
      { name: 'Chindwin River', coords: [[26.0, 95.5], [24.5, 95.0], [23.0, 94.5], [22.0, 95.0]] },
      { name: 'Salween River', coords: [[20.0, 98.5], [18.0, 97.8], [16.5, 97.6]] },
      { name: 'Sittaung River', coords: [[19.5, 96.5], [18.0, 96.8], [17.0, 96.7]] },
    ],
    gridLines: [
      { name: 'North-South Main', coords: [[25.0, 96.5], [22.0, 96.0], [19.5, 96.0], [17.0, 96.2]] },
      { name: 'Yangon-Mandalay', coords: [[16.8, 96.2], [19.5, 96.0], [22.0, 96.1]] },
      { name: 'Western Grid', coords: [[20.0, 94.5], [18.0, 94.8], [16.5, 95.0]] },
      { name: 'Eastern Connection', coords: [[21.0, 97.0], [19.5, 97.5], [17.5, 97.5]] },
    ],
    seismicZones: [
      { name: 'Sagaing Fault Zone', risk: 'high', coords: [[26.0, 95.8], [26.0, 96.8], [22.0, 96.5], [19.0, 96.3], [16.0, 96.8], [16.0, 95.8], [19.0, 95.3], [22.0, 95.5]] },
      { name: 'Eastern Highland Zone', risk: 'medium', coords: [[24.0, 97.0], [24.0, 98.5], [20.0, 98.5], [20.0, 97.0]] },
      { name: 'Western Fold Belt', risk: 'medium', coords: [[21.0, 93.0], [21.0, 94.5], [18.0, 94.5], [18.0, 93.0]] }
    ]
  };

  // Styles
  const styles = `
    .snpp-w{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:#f9fafb;border-radius:12px;overflow:hidden;box-shadow:0 4px 6px -1px rgba(0,0,0,0.1)}
    .snpp-w *{box-sizing:border-box;margin:0;padding:0}
    .snpp-w.dark{background:#1f2937;color:#f3f4f6}
    .snpp-tabs{display:flex;background:#e5e7eb;padding:4px}
    .snpp-tab-btn{flex:1;padding:10px;border:none;background:transparent;cursor:pointer;font-size:13px;font-weight:500;color:#6b7280;border-radius:6px;transition:all 0.2s}
    .snpp-tab-btn:hover{color:#374151}
    .snpp-tab-btn.active{background:white;color:#111827;box-shadow:0 1px 2px rgba(0,0,0,0.1)}
    .snpp-content{display:flex;height:calc(100% - 46px)}
    .snpp-sidebar{width:280px;padding:12px;border-right:1px solid #e5e7eb;overflow-y:auto;flex-shrink:0;background:#f9fafb}
    .snpp-main{flex:1;position:relative}
    .snpp-map{width:100%;height:100%}
    .snpp-section{margin-bottom:14px}
    .snpp-section-title{font-size:10px;text-transform:uppercase;letter-spacing:0.05em;color:#6b7280;margin-bottom:8px;font-weight:600}
    .snpp-checkbox{display:flex;align-items:center;gap:6px;font-size:12px;margin-bottom:5px;cursor:pointer}
    .snpp-slider{margin-bottom:10px}
    .snpp-slider-label{display:flex;justify-content:space-between;font-size:11px;margin-bottom:3px}
    .snpp-slider input{width:100%}
    .snpp-instruction{position:absolute;top:12px;left:50%;transform:translateX(-50%);background:rgba(0,0,0,0.75);color:white;padding:8px 16px;border-radius:16px;font-size:12px;z-index:1000;pointer-events:none}
    .snpp-legend{padding:10px;background:white;border-radius:6px;margin-top:12px}
    .snpp-legend h4{font-size:10px;text-transform:uppercase;color:#6b7280;margin-bottom:6px}
    .snpp-legend-item{display:flex;align-items:center;gap:6px;font-size:11px;margin-bottom:3px}
    .snpp-legend-color{width:14px;height:14px;border-radius:3px}
    .snpp-sites-list{margin-top:12px}
    .snpp-site-item{display:flex;justify-content:space-between;align-items:center;padding:6px 8px;background:white;border:1px solid #e5e7eb;border-radius:5px;margin-bottom:4px;font-size:11px;cursor:pointer}
    .snpp-site-item:hover{border-color:#3b82f6}
    .snpp-site-item .score{font-weight:600}
    .snpp-site-item .remove{background:none;border:none;color:#9ca3af;cursor:pointer;padding:2px 4px}
    .snpp-site-item .remove:hover{color:#ef4444}
    .snpp-btn{width:100%;padding:8px;border:none;border-radius:5px;font-size:12px;font-weight:500;cursor:pointer;transition:all 0.2s;margin-top:8px}
    .snpp-btn-primary{background:#3b82f6;color:white}
    .snpp-btn-primary:hover{background:#2563eb}
    .snpp-btn-secondary{background:#e5e7eb;color:#374151}
    .snpp-source-cfg{background:white;padding:10px;border-radius:6px;margin-bottom:6px}
    .snpp-source-cfg h4{font-size:11px;margin-bottom:6px;display:flex;align-items:center;gap:5px}
    .snpp-source-dot{width:10px;height:10px;border-radius:50%}
    .snpp-metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;padding:12px}
    .snpp-metric{background:#f9fafb;padding:10px;border-radius:6px;text-align:center}
    .snpp-metric-label{font-size:9px;color:#6b7280;text-transform:uppercase}
    .snpp-metric-value{font-size:16px;font-weight:700;margin-top:2px}
    .snpp-chart{height:calc(100% - 100px);padding:12px}
    @media(max-width:640px){.snpp-content{flex-direction:column}.snpp-sidebar{width:100%;border-right:none;border-bottom:1px solid #e5e7eb}.snpp-metrics{grid-template-columns:repeat(2,1fr)}}
  `;

  function injectStyles() {
    if (document.getElementById('snpp-w-styles')) return;
    const s = document.createElement('style');
    s.id = 'snpp-w-styles';
    s.textContent = styles;
    document.head.appendChild(s);
  }

  function loadDeps(cb) {
    const deps = [
      { t: 'css', u: 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css' },
      { t: 'js', u: 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js' },
      { t: 'js', u: 'https://cdn.jsdelivr.net/npm/chart.js' }
    ];
    let loaded = 0;
    deps.forEach(d => {
      if (d.t === 'css') {
        const l = document.createElement('link');
        l.rel = 'stylesheet'; l.href = d.u;
        l.onload = () => { loaded++; if (loaded === deps.length) cb(); };
        document.head.appendChild(l);
      } else {
        const s = document.createElement('script');
        s.src = d.u;
        s.onload = () => { loaded++; if (loaded === deps.length) cb(); };
        document.body.appendChild(s);
      }
    });
  }

  SNPPWidget.init = function(containerId, options = {}) {
    const config = { modules: ['siting', 'grid'], theme: 'light', height: '550px', ...options };
    const container = document.getElementById(containerId);
    if (!container) { console.error('SNPP: Container not found'); return; }
    injectStyles();
    loadDeps(() => render(container, config));
  };

  function render(container, config) {
    const state = { activeTab: 'siting', map: null, chart: null, sites: [], layers: {} };
    
    container.innerHTML = '';
    container.className = `snpp-w ${config.theme}`;
    container.style.height = config.height;

    const tabsHtml = config.modules.map(m => {
      const labels = { siting: '📍 Site Selection', grid: '⚡ Grid Sim' };
      return `<button class="snpp-tab-btn ${m === 'siting' ? 'active' : ''}" data-tab="${m}">${labels[m]}</button>`;
    }).join('');

    container.innerHTML = `<div class="snpp-tabs">${tabsHtml}</div><div class="snpp-content" id="snpp-cnt-${container.id}"></div>`;

    container.querySelectorAll('.snpp-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        state.activeTab = btn.dataset.tab;
        container.querySelectorAll('.snpp-tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderContent(container, config, state);
      });
    });

    renderContent(container, config, state);
  }

  function renderContent(container, config, state) {
    const cnt = container.querySelector(`#snpp-cnt-${container.id}`);
    if (state.activeTab === 'siting') renderSiting(cnt, state, container);
    else if (state.activeTab === 'grid') renderGrid(cnt, state);
  }

  function renderSiting(cnt, state, container) {
    cnt.innerHTML = `
      <div class="snpp-sidebar">
        <div class="snpp-section">
          <div class="snpp-section-title">Data Layers</div>
          <label class="snpp-checkbox"><input type="checkbox" id="snpp-l-seismic" checked> 🟥 Seismic Risk</label>
          <label class="snpp-checkbox"><input type="checkbox" id="snpp-l-water" checked> 🟦 Water Sources</label>
          <label class="snpp-checkbox"><input type="checkbox" id="snpp-l-grid" checked> 🟪 Grid Lines</label>
          <label class="snpp-checkbox"><input type="checkbox" id="snpp-l-pop" checked> 🟧 Population</label>
        </div>
        <div class="snpp-section">
          <div class="snpp-section-title">Criteria Weights</div>
          <div class="snpp-slider"><div class="snpp-slider-label"><span>Seismic</span><span id="snpp-ws">25%</span></div><input type="range" min="0" max="100" value="25" id="snpp-w-seismic"></div>
          <div class="snpp-slider"><div class="snpp-slider-label"><span>Water</span><span id="snpp-ww">25%</span></div><input type="range" min="0" max="100" value="25" id="snpp-w-water"></div>
          <div class="snpp-slider"><div class="snpp-slider-label"><span>Grid</span><span id="snpp-wg">25%</span></div><input type="range" min="0" max="100" value="25" id="snpp-w-grid"></div>
          <div class="snpp-slider"><div class="snpp-slider-label"><span>Population</span><span id="snpp-wp">25%</span></div><input type="range" min="0" max="100" value="25" id="snpp-w-pop"></div>
        </div>
        <div class="snpp-legend">
          <h4>Score Legend</h4>
          <div class="snpp-legend-item"><div class="snpp-legend-color" style="background:#22c55e"></div>Excellent (80+)</div>
          <div class="snpp-legend-item"><div class="snpp-legend-color" style="background:#84cc16"></div>Good (60-79)</div>
          <div class="snpp-legend-item"><div class="snpp-legend-color" style="background:#eab308"></div>Moderate (40-59)</div>
          <div class="snpp-legend-item"><div class="snpp-legend-color" style="background:#ef4444"></div>Poor (<40)</div>
        </div>
        <div class="snpp-sites-list" id="snpp-sites" style="display:none">
          <div class="snpp-section-title">Placed Sites</div>
          <div id="snpp-sites-list"></div>
          <button class="snpp-btn snpp-btn-secondary" id="snpp-clear">Clear All</button>
        </div>
      </div>
      <div class="snpp-main">
        <div class="snpp-instruction" id="snpp-instr">👆 Click map to place SMR site</div>
        <div class="snpp-map" id="snpp-map"></div>
      </div>
    `;

    setTimeout(() => initMap(state, container), 50);

    // Weight sliders
    [['seismic','ws'],['water','ww'],['grid','wg'],['pop','wp']].forEach(([k,id]) => {
      const sl = document.getElementById(`snpp-w-${k}`);
      sl.addEventListener('input', () => {
        document.getElementById(`snpp-${id}`).textContent = sl.value + '%';
        updateAllSiteScores(state);
      });
    });

    document.getElementById('snpp-clear').addEventListener('click', () => clearSites(state));
  }

  function initMap(state, container) {
    if (state.map) state.map.remove();
    state.map = L.map('snpp-map').setView([19.5, 96.5], 6);
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png').addTo(state.map);

    state.layers = { seismic: L.layerGroup(), water: L.layerGroup(), grid: L.layerGroup(), pop: L.layerGroup() };

    // Seismic
    geoData.seismicZones.forEach(z => {
      const c = z.risk === 'high' ? '#ef4444' : '#f97316';
      L.polygon(z.coords, { color: c, fillColor: c, fillOpacity: 0.25, weight: 2 }).bindTooltip(z.name).addTo(state.layers.seismic);
    });

    // Water
    geoData.waterSources.forEach(r => {
      L.polyline(r.coords, { color: '#3b82f6', weight: 4, opacity: 0.7 }).bindTooltip(r.name).addTo(state.layers.water);
      r.coords.forEach(c => L.circle(c, { radius: 30000, color: '#3b82f6', fillOpacity: 0.1, weight: 0 }).addTo(state.layers.water));
    });

    // Grid
    geoData.gridLines.forEach(l => {
      L.polyline(l.coords, { color: '#8b5cf6', weight: 3, dashArray: '10,5', opacity: 0.8 }).bindTooltip(l.name).addTo(state.layers.grid);
    });

    // Population
    geoData.populationCenters.forEach(c => {
      L.circle(c.coords, { radius: c.radius, color: '#f97316', fillOpacity: 0.15, weight: 1, dashArray: '5,5' }).addTo(state.layers.pop);
      L.circleMarker(c.coords, { radius: 5, color: '#1f2937', fillColor: '#f97316', fillOpacity: 1, weight: 2 }).bindTooltip(c.name).addTo(state.layers.pop);
    });

    Object.values(state.layers).forEach(l => l.addTo(state.map));

    // Layer toggles
    [['seismic','seismic'],['water','water'],['grid','grid'],['pop','pop']].forEach(([id,key]) => {
      const cb = document.getElementById(`snpp-l-${id}`);
      cb.addEventListener('change', () => cb.checked ? state.layers[key].addTo(state.map) : state.map.removeLayer(state.layers[key]));
    });

    // Click to place
    state.map.on('click', e => placeSite(e.latlng, state, container));
  }

  function placeSite(latlng, state, container) {
    const id = 'site-' + Date.now();
    const scores = calcScores(latlng);
    const color = getColor(scores.overall);

    const icon = L.divIcon({
      className: '',
      html: `<div style="width:22px;height:22px;background:${color};border:2px solid white;border-radius:50%;box-shadow:0 2px 6px rgba(0,0,0,0.3);display:flex;align-items:center;justify-content:center;color:white;font-size:9px;font-weight:bold">${scores.overall}</div>`,
      iconSize: [22, 22], iconAnchor: [11, 11]
    });

    const marker = L.marker(latlng, { icon }).addTo(state.map);
    const popup = createPopup(latlng, scores, id, state, container);
    marker.bindPopup(popup, { maxWidth: 300 }).openPopup();

    state.sites.push({ id, latlng, scores, marker });
    updateSitesList(state, container);
    document.getElementById('snpp-instr').style.display = 'none';
  }

  function calcScores(latlng) {
    const w = {
      seismic: +document.getElementById('snpp-w-seismic').value,
      water: +document.getElementById('snpp-w-water').value,
      grid: +document.getElementById('snpp-w-grid').value,
      pop: +document.getElementById('snpp-w-pop').value
    };

    const seismic = calcSeismic(latlng);
    const water = calcWater(latlng);
    const grid = calcGrid(latlng);
    const pop = calcPop(latlng);

    const total = w.seismic + w.water + w.grid + w.pop;
    const overall = total > 0 ? Math.round((seismic.score * w.seismic + water.score * w.water + grid.score * w.grid + pop.score * w.pop) / total) : 0;

    return { overall, seismic, water, grid, pop };
  }

  function calcSeismic(ll) {
    for (const z of geoData.seismicZones) {
      if (inPoly(ll, z.coords)) {
        return z.risk === 'high' 
          ? { score: 25, detail: 'High seismic risk zone' }
          : { score: 60, detail: 'Moderate seismic risk' };
      }
    }
    return { score: 95, detail: 'Low seismic risk area' };
  }

  function calcWater(ll) {
    let minD = Infinity, nearest = '';
    geoData.waterSources.forEach(r => r.coords.forEach(c => {
      const d = dist(ll, c);
      if (d < minD) { minD = d; nearest = r.name; }
    }));
    const km = minD / 1000;
    if (km < 20) return { score: 95, detail: `${km.toFixed(0)}km from ${nearest}` };
    if (km < 50) return { score: 80, detail: `${km.toFixed(0)}km from water` };
    if (km < 100) return { score: 55, detail: `${km.toFixed(0)}km from water` };
    return { score: 25, detail: `${km.toFixed(0)}km - far from water` };
  }

  function calcGrid(ll) {
    let minD = Infinity;
    geoData.gridLines.forEach(l => {
      for (let i = 0; i < l.coords.length - 1; i++) {
        const d = ptLineDist(ll, l.coords[i], l.coords[i+1]);
        if (d < minD) minD = d;
      }
    });
    const km = minD / 1000;
    if (km < 15) return { score: 95, detail: `${km.toFixed(0)}km from grid` };
    if (km < 40) return { score: 75, detail: `${km.toFixed(0)}km from grid` };
    if (km < 80) return { score: 50, detail: `${km.toFixed(0)}km from grid` };
    return { score: 20, detail: `${km.toFixed(0)}km - far from grid` };
  }

  function calcPop(ll) {
    let minD = Infinity, nearest = '';
    for (const c of geoData.populationCenters) {
      const d = dist(ll, c.coords);
      if (d < c.radius) return { score: 10, detail: `Inside ${c.name} exclusion zone` };
      if (d < minD) { minD = d; nearest = c.name; }
    }
    const km = minD / 1000;
    if (km > 100) return { score: 95, detail: `${km.toFixed(0)}km from ${nearest}` };
    if (km > 50) return { score: 80, detail: `${km.toFixed(0)}km buffer` };
    if (km > 30) return { score: 60, detail: `${km.toFixed(0)}km buffer` };
    return { score: 35, detail: `Close to ${nearest}` };
  }

  function createPopup(ll, scores, id, state, container) {
    const c = getColor(scores.overall);
    const rec = getRec(scores.overall);
    return `
      <div style="min-width:260px">
        <div style="font-size:10px;color:#6b7280;font-family:monospace;margin-bottom:6px">📍 ${ll.lat.toFixed(4)}°N, ${ll.lng.toFixed(4)}°E</div>
        <div style="text-align:center;padding:12px;background:linear-gradient(135deg,${c},${getDarkColor(scores.overall)});border-radius:6px;margin-bottom:10px">
          <div style="font-size:9px;color:rgba(255,255,255,0.8);text-transform:uppercase">Overall Score</div>
          <div style="font-size:28px;font-weight:700;color:white">${scores.overall}</div>
          <div style="font-size:11px;color:rgba(255,255,255,0.9)">${getLabel(scores.overall)}</div>
        </div>
        ${scoreBar('Seismic', scores.seismic)}
        ${scoreBar('Water', scores.water)}
        ${scoreBar('Grid', scores.grid)}
        ${scoreBar('Population', scores.pop)}
        <div style="padding:8px;border-radius:5px;font-size:11px;margin-top:10px;background:${rec.bg};color:${rec.color};border:1px solid ${rec.border}">${rec.text}</div>
        <button onclick="SNPPWidget._remove('${id}')" style="width:100%;margin-top:8px;padding:6px;border:1px solid #e5e7eb;background:white;border-radius:5px;cursor:pointer;font-size:11px;color:#6b7280">Remove</button>
      </div>
    `;
  }

  function scoreBar(label, data) {
    const c = getColor(data.score);
    return `<div style="margin-bottom:8px">
      <div style="display:flex;justify-content:space-between;font-size:11px;margin-bottom:2px"><span>${label}</span><span style="font-weight:600;color:${c}">${data.score}</span></div>
      <div style="height:5px;background:#e5e7eb;border-radius:3px;overflow:hidden"><div style="height:100%;width:${data.score}%;background:${c}"></div></div>
      <div style="font-size:9px;color:#6b7280;margin-top:1px">${data.detail}</div>
    </div>`;
  }

  function updateSitesList(state, container) {
    const wrap = document.getElementById('snpp-sites');
    const list = document.getElementById('snpp-sites-list');
    if (!state.sites.length) { wrap.style.display = 'none'; return; }
    wrap.style.display = 'block';
    list.innerHTML = state.sites.map((s, i) => `
      <div class="snpp-site-item" onclick="SNPPWidget._focus('${s.id}')">
        <span>Site ${i+1}</span>
        <span><span class="score" style="color:${getColor(s.scores.overall)}">${s.scores.overall}</span>
        <button class="remove" onclick="event.stopPropagation();SNPPWidget._remove('${s.id}')">✕</button></span>
      </div>
    `).join('');
  }

  function updateAllSiteScores(state) {
    state.sites.forEach(s => {
      s.scores = calcScores(s.latlng);
      const c = getColor(s.scores.overall);
      s.marker.setIcon(L.divIcon({
        className: '',
        html: `<div style="width:22px;height:22px;background:${c};border:2px solid white;border-radius:50%;box-shadow:0 2px 6px rgba(0,0,0,0.3);display:flex;align-items:center;justify-content:center;color:white;font-size:9px;font-weight:bold">${s.scores.overall}</div>`,
        iconSize: [22, 22], iconAnchor: [11, 11]
      }));
    });
    const list = document.getElementById('snpp-sites-list');
    if (list) list.innerHTML = state.sites.map((s, i) => `
      <div class="snpp-site-item" onclick="SNPPWidget._focus('${s.id}')">
        <span>Site ${i+1}</span>
        <span><span class="score" style="color:${getColor(s.scores.overall)}">${s.scores.overall}</span>
        <button class="remove" onclick="event.stopPropagation();SNPPWidget._remove('${s.id}')">✕</button></span>
      </div>
    `).join('');
  }

  function clearSites(state) {
    state.sites.forEach(s => state.map.removeLayer(s.marker));
    state.sites = [];
    document.getElementById('snpp-sites').style.display = 'none';
    document.getElementById('snpp-instr').style.display = 'block';
  }

  // Expose for popup buttons
  let _state = null, _container = null;
  const origInit = SNPPWidget.init;
  SNPPWidget.init = function(cid, opts) {
    origInit(cid, opts);
    // Store refs (hacky but works for single widget)
    setTimeout(() => {
      const c = document.getElementById(cid);
      _container = c;
    }, 100);
  };
  SNPPWidget._remove = function(id) {
    // Find state from DOM
    const widgets = document.querySelectorAll('.snpp-w');
    widgets.forEach(w => {
      if (w._snppState) {
        const idx = w._snppState.sites.findIndex(s => s.id === id);
        if (idx > -1) {
          w._snppState.map.removeLayer(w._snppState.sites[idx].marker);
          w._snppState.sites.splice(idx, 1);
          updateSitesList(w._snppState, w);
        }
      }
    });
  };
  SNPPWidget._focus = function(id) {
    const widgets = document.querySelectorAll('.snpp-w');
    widgets.forEach(w => {
      if (w._snppState) {
        const s = w._snppState.sites.find(s => s.id === id);
        if (s) { w._snppState.map.setView(s.latlng, 8); s.marker.openPopup(); }
      }
    });
  };

  // Patch render to store state
  const origRender = render;
  function render(container, config) {
    const state = { activeTab: 'siting', map: null, chart: null, sites: [], layers: {} };
    container._snppState = state;
    
    container.innerHTML = '';
    container.className = `snpp-w ${config.theme}`;
    container.style.height = config.height;

    const tabsHtml = config.modules.map(m => {
      const labels = { siting: '📍 Site Selection', grid: '⚡ Grid Sim' };
      return `<button class="snpp-tab-btn ${m === 'siting' ? 'active' : ''}" data-tab="${m}">${labels[m]}</button>`;
    }).join('');

    container.innerHTML = `<div class="snpp-tabs">${tabsHtml}</div><div class="snpp-content" id="snpp-cnt-${container.id}"></div>`;

    container.querySelectorAll('.snpp-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        state.activeTab = btn.dataset.tab;
        container.querySelectorAll('.snpp-tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderContent(container, config, state);
      });
    });

    renderContent(container, config, state);
  }

  // Grid simulation
  function renderGrid(cnt, state) {
    cnt.innerHTML = `
      <div class="snpp-sidebar">
        <div class="snpp-section-title">Generation Sources</div>
        <div class="snpp-source-cfg"><h4><span class="snpp-source-dot" style="background:#22c55e"></span> SMR</h4><div class="snpp-slider"><div class="snpp-slider-label"><span>Capacity</span><span id="snpp-smr-v">300 MW</span></div><input type="range" min="0" max="500" value="300" id="snpp-smr"></div></div>
        <div class="snpp-source-cfg"><h4><span class="snpp-source-dot" style="background:#facc15"></span> Solar</h4><div class="snpp-slider"><div class="snpp-slider-label"><span>Capacity</span><span id="snpp-solar-v">200 MW</span></div><input type="range" min="0" max="500" value="200" id="snpp-solar"></div></div>
        <div class="snpp-source-cfg"><h4><span class="snpp-source-dot" style="background:#38bdf8"></span> Hydro</h4><div class="snpp-slider"><div class="snpp-slider-label"><span>Capacity</span><span id="snpp-hydro-v">250 MW</span></div><input type="range" min="0" max="500" value="250" id="snpp-hydro"></div></div>
        <div class="snpp-source-cfg"><h4><span class="snpp-source-dot" style="background:#f87171"></span> Gas</h4><div class="snpp-slider"><div class="snpp-slider-label"><span>Capacity</span><span id="snpp-gas-v">400 MW</span></div><input type="range" min="0" max="500" value="400" id="snpp-gas"></div></div>
        <button class="snpp-btn snpp-btn-primary" id="snpp-run">Run Simulation</button>
      </div>
      <div class="snpp-main" style="display:flex;flex-direction:column">
        <div class="snpp-metrics">
          <div class="snpp-metric"><div class="snpp-metric-label">Cost</div><div class="snpp-metric-value" id="snpp-m-cost">--</div></div>
          <div class="snpp-metric"><div class="snpp-metric-label">CO₂</div><div class="snpp-metric-value" id="snpp-m-co2">--</div></div>
          <div class="snpp-metric"><div class="snpp-metric-label">SMR %</div><div class="snpp-metric-value" id="snpp-m-smr">--</div></div>
          <div class="snpp-metric"><div class="snpp-metric-label">Unmet</div><div class="snpp-metric-value" id="snpp-m-unmet">--</div></div>
        </div>
        <div class="snpp-chart"><canvas id="snpp-chart"></canvas></div>
      </div>
    `;

    ['smr','solar','hydro','gas'].forEach(s => {
      const sl = document.getElementById(`snpp-${s}`);
      sl.addEventListener('input', () => document.getElementById(`snpp-${s}-v`).textContent = sl.value + ' MW');
    });

    const ctx = document.getElementById('snpp-chart').getContext('2d');
    state.chart = new Chart(ctx, {
      type: 'line',
      data: { labels: Array.from({length:24}, (_,i) => `${i}:00`), datasets: [] },
      options: { responsive: true, maintainAspectRatio: false, scales: { y: { stacked: true, beginAtZero: true } }, plugins: { legend: { position: 'bottom', labels: { boxWidth: 10, font: { size: 10 } } } } }
    });

    document.getElementById('snpp-run').addEventListener('click', () => runSim(state));
  }

  function runSim(state) {
    const cfg = { smr: +document.getElementById('snpp-smr').value, solar: +document.getElementById('snpp-solar').value, hydro: +document.getElementById('snpp-hydro').value, gas: +document.getElementById('snpp-gas').value };
    const hourly = [];
    let cost = 0, co2 = 0, smrT = 0, unmet = 0;

    for (let h = 0; h < 24; h++) {
      const demand = 350 + Math.exp(-Math.pow(h-9,2)/8)*180 + Math.exp(-Math.pow(h-20,2)/10)*250;
      const smrA = cfg.smr * 0.92;
      const solarA = cfg.solar * Math.max(0, Math.sin((h-5)*Math.PI/14)) * 0.75;
      const hydroA = cfg.hydro * 0.65;

      let rem = demand;
      const smr = Math.min(smrA, rem); rem -= smr;
      const hydro = Math.min(hydroA, rem); rem -= hydro;
      const solar = Math.min(solarA, rem); rem -= solar;
      const gas = Math.min(cfg.gas, rem); rem -= gas;

      cost += smr*35 + hydro*10 + gas*85;
      co2 += gas*0.45;
      smrT += smr;
      unmet += Math.max(0, rem);

      hourly.push({ h, demand, smr, hydro, solar, gas });
    }

    document.getElementById('snpp-m-cost').textContent = `$${(cost/1000).toFixed(1)}k`;
    document.getElementById('snpp-m-co2').textContent = `${co2.toFixed(0)} t`;
    document.getElementById('snpp-m-smr').textContent = cfg.smr ? `${(smrT/(cfg.smr*0.92*24)*100).toFixed(0)}%` : '--';
    document.getElementById('snpp-m-unmet').textContent = `${unmet.toFixed(0)}`;

    state.chart.data.datasets = [
      { label: 'SMR', data: hourly.map(h=>h.smr), backgroundColor: 'rgba(34,197,94,0.7)', fill: true },
      { label: 'Hydro', data: hourly.map(h=>h.hydro), backgroundColor: 'rgba(56,189,248,0.7)', fill: true },
      { label: 'Solar', data: hourly.map(h=>h.solar), backgroundColor: 'rgba(250,204,21,0.7)', fill: true },
      { label: 'Gas', data: hourly.map(h=>h.gas), backgroundColor: 'rgba(248,113,113,0.7)', fill: true },
      { label: 'Demand', data: hourly.map(h=>h.demand), borderColor: '#1f2937', borderWidth: 2, borderDash: [5,5], fill: false, pointRadius: 0 }
    ];
    state.chart.update();
  }

  // Helpers
  function getColor(s) { return s >= 80 ? '#22c55e' : s >= 60 ? '#84cc16' : s >= 40 ? '#eab308' : '#ef4444'; }
  function getDarkColor(s) { return s >= 80 ? '#16a34a' : s >= 60 ? '#65a30d' : s >= 40 ? '#ca8a04' : '#dc2626'; }
  function getLabel(s) { return s >= 80 ? 'Excellent' : s >= 60 ? 'Good' : s >= 40 ? 'Moderate' : 'Poor'; }
  function getRec(s) {
    if (s >= 80) return { text: '✅ Highly recommended', bg: '#dcfce7', color: '#166534', border: '#86efac' };
    if (s >= 60) return { text: '👍 Suitable with considerations', bg: '#ecfccb', color: '#3f6212', border: '#bef264' };
    if (s >= 40) return { text: '⚠️ Marginal suitability', bg: '#fef9c3', color: '#854d0e', border: '#fde047' };
    return { text: '❌ Not recommended', bg: '#fee2e2', color: '#991b1b', border: '#fca5a5' };
  }

  function dist(ll, c) {
    const lat1 = ll.lat || ll[0], lng1 = ll.lng || ll[1], lat2 = c[0], lng2 = c[1];
    const R = 6371000, dLat = (lat2-lat1)*Math.PI/180, dLng = (lng2-lng1)*Math.PI/180;
    const a = Math.sin(dLat/2)**2 + Math.cos(lat1*Math.PI/180)*Math.cos(lat2*Math.PI/180)*Math.sin(dLng/2)**2;
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  }

  function ptLineDist(pt, s, e) {
    const A = pt.lng - s[1], B = pt.lat - s[0], C = e[1] - s[1], D = e[0] - s[0];
    const dot = A*C + B*D, lenSq = C*C + D*D;
    let param = lenSq ? dot/lenSq : -1;
    const xx = param < 0 ? s[1] : param > 1 ? e[1] : s[1] + param*C;
    const yy = param < 0 ? s[0] : param > 1 ? e[0] : s[0] + param*D;
    return dist(pt, [yy, xx]);
  }

  function inPoly(pt, poly) {
    const x = pt.lng, y = pt.lat;
    let inside = false;
    for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
      const xi = poly[i][1], yi = poly[i][0], xj = poly[j][1], yj = poly[j][0];
      if (((yi > y) !== (yj > y)) && (x < (xj-xi)*(y-yi)/(yj-yi)+xi)) inside = !inside;
    }
    return inside;
  }

})();
