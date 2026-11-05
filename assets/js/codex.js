// The Codex, used: any Codex string drawn as its seal, and a writer that builds a string
// phase by phase. The seal is the sigil's wheel with the domains the work used filled in
// and the rest left open; its ring gives the end mark. Ink and paper only.
(function () {
  var NS = 'http://www.w3.org/2000/svg';

  // The wheel, as Part IV sets it out: glyph, domain, angle from the top, clockwise
  var DOMAINS = [
    { g: '▲', name: 'Systems', a: 0, shape: 'up' },
    { g: '◆', name: 'Craft', a: 45, shape: 'diamond' },
    { g: '▶', name: 'Illustration', a: 90, shape: 'right' },
    { g: '⬢', name: 'Code', a: 135, shape: 'hex' },
    { g: '▼', name: 'Narrative', a: 180, shape: 'down' },
    { g: '⬟', name: 'Photography', a: 225, shape: 'pent' },
    { g: '◀', name: 'Intuition', a: 270, shape: 'left' },
    { g: '■', name: 'Design', a: 315, shape: 'square' }
  ];
  var ENDS = { '⟩⟩': 'Finished and released', '⟩': 'Finished, not released', '~': 'Ongoing', '×': 'Abandoned' };

  // Glyph outlines on a unit of 1, centred on 0,0
  function points(shape) {
    var p = [], i, n, r = 0.5;
    switch (shape) {
      case 'up': return [[0, -0.5], [0.5, 0.42], [-0.5, 0.42]];
      case 'down': return [[0, 0.5], [0.5, -0.42], [-0.5, -0.42]];
      case 'right': return [[0.5, 0], [-0.42, 0.5], [-0.42, -0.5]];
      case 'left': return [[-0.5, 0], [0.42, 0.5], [0.42, -0.5]];
      case 'square': return [[-0.4, -0.4], [0.4, -0.4], [0.4, 0.4], [-0.4, 0.4]];
      case 'diamond': return [[0, -0.52], [0.52, 0], [0, 0.52], [-0.52, 0]];
      case 'pent': n = 5; break;
      case 'hex': n = 6; break;
    }
    for (i = 0; i < n; i++) {
      var t = -Math.PI / 2 + i * 2 * Math.PI / n;
      p.push([r * Math.cos(t), r * Math.sin(t)]);
    }
    return p;
  }

  function el(name, attrs) {
    var e = document.createElementNS(NS, name);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    return e;
  }

  // Read a Codex string: its phases, the domains it used, its end mark and its name
  function parse(s) {
    s = (s || '').trim();
    var m = s.match(/^\/Æ\/#(.*?)(⟩⟩|⟩|~|×)(?:\[([^\]]*)\])?\/$/);
    if (!m) return null;
    var phases = m[1].split(/\|+/).filter(function (x) { return x.length; });
    var used = {}, study = false;
    phases.forEach(function (ph) {
      Array.from(ph).forEach(function (c) {
        if (c === '●') study = true;
        DOMAINS.forEach(function (d) { if (d.g === c) used[c] = (used[c] || 0) + 1; });
      });
    });
    return { phases: phases.length, used: used, study: study, end: m[2], name: m[3] || '' };
  }

  // Draw the seal for a parsed Codex
  function seal(c, size) {
    var svg = el('svg', { viewBox: '0 0 200 200', width: size || 200, height: size || 200, role: 'img', class: 'seal-svg' });
    var title = el('title', {});
    var names = DOMAINS.filter(function (d) { return c.used[d.g]; }).map(function (d) { return d.name; });
    title.textContent = 'Seal' + (c.name ? ' of ' + c.name : '') + ': ' + (names.length ? names.join(', ') : 'no domains') + (c.study ? ', with study' : '') + '. ' + ENDS[c.end] + '.';
    svg.appendChild(title);
    var ink = '#0b0b0b';
    // The ring: single when finished, double when released, open at the top while ongoing
    if (c.end === '~') {
      svg.appendChild(el('path', { d: 'M 112 11 A 89 89 0 1 1 88 11', fill: 'none', stroke: ink, 'stroke-width': 5 }));
    } else {
      svg.appendChild(el('circle', { cx: 100, cy: 100, r: 89, fill: 'none', stroke: ink, 'stroke-width': 5 }));
      if (c.end === '⟩⟩') svg.appendChild(el('circle', { cx: 100, cy: 100, r: 79, fill: 'none', stroke: ink, 'stroke-width': 2 }));
    }
    DOMAINS.forEach(function (d) {
      var t = d.a * Math.PI / 180, x = 100 + 56 * Math.sin(t), y = 100 - 56 * Math.cos(t), s = 30;
      var on = !!c.used[d.g];
      var pts = points(d.shape).map(function (p) { return (x + p[0] * s).toFixed(1) + ',' + (y + p[1] * s).toFixed(1); }).join(' ');
      svg.appendChild(el('polygon', on ? { points: pts, fill: ink } : { points: pts, fill: 'none', stroke: ink, 'stroke-width': 1.5 }));
    });
    // Study at the centre
    svg.appendChild(el('circle', c.study ? { cx: 100, cy: 100, r: 13, fill: ink } : { cx: 100, cy: 100, r: 13, fill: 'none', stroke: ink, 'stroke-width': 1.5 }));
    // Abandoned work is struck through, like a cancelled stamp
    if (c.end === '×') svg.appendChild(el('line', { x1: 22, y1: 178, x2: 178, y2: 22, stroke: ink, 'stroke-width': 7 }));
    return svg;
  }

  // Seals beside the examples on the page
  document.querySelectorAll('[data-codex]').forEach(function (fig) {
    var c = parse(fig.getAttribute('data-codex'));
    if (c) fig.appendChild(seal(c, 120));
  });

  // The writer
  var w = document.getElementById('codex-writer');
  if (!w) return;
  var phasesEl = w.querySelector('.cw-phases'), out = w.querySelector('.cw-string'), sealEl = w.querySelector('.cw-seal');
  var nameIn = w.querySelector('.cw-name'), state = [[]];

  function phaseRow(i) {
    var row = document.createElement('fieldset');
    row.className = 'cw-phase';
    var lg = document.createElement('legend');
    lg.textContent = 'Phase ' + (i + 1);
    row.appendChild(lg);
    var all = [{ g: '●', name: 'Study' }].concat(DOMAINS);
    all.forEach(function (d) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'cw-glyph';
      b.textContent = d.g;
      b.title = d.name;
      b.setAttribute('aria-label', d.name);
      b.setAttribute('aria-pressed', state[i].indexOf(d.g) > -1 ? 'true' : 'false');
      b.addEventListener('click', function () {
        var k = state[i].indexOf(d.g);
        if (k > -1) state[i].splice(k, 1); else state[i].push(d.g);   // order of selection = order the domains became active
        render();
      });
      row.appendChild(b);
    });
    if (state.length > 1) {
      var x = document.createElement('button');
      x.type = 'button';
      x.className = 'cw-remove';
      x.textContent = 'Remove';
      x.setAttribute('aria-label', 'Remove phase ' + (i + 1));
      x.addEventListener('click', function () { state.splice(i, 1); render(); });
      row.appendChild(x);
    }
    return row;
  }

  function codexString() {
    var body = state.map(function (ph, i) {
      var g = ph.slice();
      var k = g.indexOf('●');
      if (k > 0) { g.splice(k, 1); g.unshift('●'); }   // study comes before the domains (rule 4)
      return new Array(i + 2).join('|') + (g.length ? g.join('') : '∅');
    }).join('');
    var end = w.querySelector('input[name="cw-end"]:checked').value;
    var name = nameIn.value.trim().toLowerCase().replace(/\s+/g, '.').replace(/[^a-z0-9._-]/g, '');
    return '/Æ/#' + body + end + (name ? '[' + name + ']' : '') + '/';
  }

  function render() {
    phasesEl.innerHTML = '';
    state.forEach(function (_, i) { phasesEl.appendChild(phaseRow(i)); });
    var s = codexString();
    out.textContent = s;
    sealEl.innerHTML = '';
    var c = parse(s);
    if (c) sealEl.appendChild(seal(c, 200));
  }

  w.querySelector('.cw-add').addEventListener('click', function () { state.push([]); render(); });
  w.querySelectorAll('input[name="cw-end"]').forEach(function (r) { r.addEventListener('change', render); });
  nameIn.addEventListener('input', render);
  w.querySelector('.cw-copy').addEventListener('click', function (e) {
    var b = e.currentTarget;
    navigator.clipboard.writeText(out.textContent).then(function () { b.textContent = 'Copied'; setTimeout(function () { b.textContent = 'Copy the Codex'; }, 1500); });
  });
  w.querySelector('.cw-save').addEventListener('click', function () {
    var svg = sealEl.querySelector('svg');
    if (!svg) return;
    var blob = new Blob(['<?xml version="1.0" encoding="UTF-8"?>\n' + new XMLSerializer().serializeToString(svg)], { type: 'image/svg+xml' });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = (parse(out.textContent).name || 'codex') + '.seal.svg';
    a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
  });
  w.hidden = false;
  render();
})();
