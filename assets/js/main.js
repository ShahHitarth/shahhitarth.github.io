(function () {
  'use strict';

  var D = window.SITE_DATA;
  var root = document.documentElement;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  function esc(v) {
    return String(v == null ? '' : v).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function icon(name) { return '<svg class="i" aria-hidden="true"><use href="#i-' + name + '"/></svg>'; }
  function isExternal(u) { return /^https?:/i.test(u); }
  function linkAttrs(u) { return isExternal(u) ? ' target="_blank" rel="noopener"' : ''; }

  /* ---------- Theme ---------- */
  var meta = $('meta[name="theme-color"]');
  function applyTheme(t, save) {
    root.setAttribute('data-theme', t);
    if (meta) meta.setAttribute('content', t === 'light' ? '#f3efe7' : '#0b0c10');
    if (save) { try { localStorage.setItem('theme', t); } catch (e) {} }
  }
  applyTheme(root.getAttribute('data-theme') || 'dark', false);
  $('#themeToggle').addEventListener('click', function () {
    applyTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark', true);
  });
  if (window.matchMedia) {
    matchMedia('(prefers-color-scheme: light)').addEventListener('change', function (e) {
      var saved = null; try { saved = localStorage.getItem('theme'); } catch (err) {}
      if (!saved) applyTheme(e.matches ? 'light' : 'dark', false);
    });
  }

  /* ---------- Header / nav ---------- */
  var header = $('.site-header');
  function onScroll() { header.classList.toggle('scrolled', window.scrollY > 12); }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  var menuBtn = $('#menuBtn'), navLinks = $('#navLinks');
  function setMenu(open) {
    navLinks.classList.toggle('open', open);
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }
  menuBtn.addEventListener('click', function () { setMenu(menuBtn.getAttribute('aria-expanded') !== 'true'); });
  navLinks.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.nav')) setMenu(false);
  });

  /* ---------- Skills ---------- */
  (function renderSkills() {
    var s = D.skills, el = $('#skillsGrid');
    var tech = s.technical.map(function (g) {
      return '<div class="sk-group"><h4>' + esc(g.group) + '</h4><div class="tags">' +
        g.items.map(function (i) { return '<span class="tag' + (g.soft ? ' soft' : '') + '">' + esc(i) + '</span>'; }).join('') +
        '</div></div>';
    }).join('');
    var soft = s.nontechnical.map(function (i) { return '<span class="tag">' + esc(i) + '</span>'; }).join('');
    var langs = s.languages.map(function (l) {
      return '<li><strong>' + esc(l.name) + '</strong><span>' + esc(l.level) + '</span></li>';
    }).join('');
    el.innerHTML =
      '<article class="card skill-card s-tech reveal"><h3>Technical</h3><div class="sk-groups">' + tech + '</div></article>' +
      '<article class="card skill-card s-soft reveal"><h3>Non-technical</h3><div class="tags">' + soft + '</div></article>' +
      '<article class="card skill-card s-lang reveal"><h3>Languages</h3><ul class="lang-list">' + langs + '</ul></article>';
  })();

  /* ---------- Achievements ---------- */
  (function renderAchievements() {
    function col(title, list) {
      return '<div class="ach-col reveal"><h3>' + esc(title) + '</h3>' + list.map(function (a) {
        return '<article class="ach-item"><span class="ach-label">' + esc(a.label) + '</span><h4>' + esc(a.title) + '</h4><p>' + esc(a.text) + '</p></article>';
      }).join('') + '</div>';
    }
    $('#achGrid').innerHTML = col('Technical', D.achievements.technical) + col('Beyond the lab', D.achievements.nontechnical);
  })();

  /* ---------- Projects ---------- */
  var catLabel = {};
  D.categories.forEach(function (c) { catLabel[c.id] = c.label; });

  function renderProjects() {
    $('#projectFilters').innerHTML = D.categories.map(function (c, i) {
      return '<button class="f-btn" type="button" data-cat="' + esc(c.id) + '" aria-pressed="' + (i === 0) + '">' + esc(c.label) + '</button>';
    }).join('');

    $('#projectGrid').innerHTML = D.projects.map(function (p, idx) {
      var media = p.images && p.images.length
        ? '<div class="p-media"><img src="assets/img/' + esc(p.images[0]) + '" alt="" loading="lazy" width="800" height="500">' + (p.badge ? '<span class="p-badge">' + esc(p.badge) + '</span>' : '') + '</div>'
        : '<div class="p-media ph"><span>' + esc(p.title.charAt(0)) + '</span>' + (p.badge ? '<span class="p-badge" style="font-family:var(--font-body);font-size:.72rem;opacity:1">' + esc(p.badge) + '</span>' : '') + '</div>';
      return '<article class="card p-card reveal" data-cat="' + esc(p.category) + '">' + media +
        '<div class="p-body"><span class="p-cat">' + esc(catLabel[p.category] || p.category) + '</span>' +
        '<h3 class="p-title"><button class="p-open" type="button" data-idx="' + idx + '">' + esc(p.title) + '</button></h3>' +
        '<p class="p-sum">' + esc(p.summary) + '</p>' +
        '<div class="tags">' + p.stack.slice(0, 3).map(function (t) { return '<span class="tag soft">' + esc(t) + '</span>'; }).join('') + '</div>' +
        '<span class="p-more">View details ' + icon('arrow') + '</span></div></article>';
    }).join('');
  }
  renderProjects();

  $('#projectFilters').addEventListener('click', function (e) {
    var b = e.target.closest('.f-btn'); if (!b) return;
    var cat = b.getAttribute('data-cat');
    $$('.f-btn').forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
    $$('.p-card').forEach(function (c) {
      c.hidden = !(cat === 'all' || c.getAttribute('data-cat') === cat);
    });
  });

  /* ---------- Project modal ---------- */
  var modal = $('#projectModal'), pmBody = $('#pmBody'), lastFocus = null;
  var linkIcon = { code: 'code', video: 'play', live: 'globe', download: 'download' };

  function openProject(i) {
    var p = D.projects[i]; if (!p) return;
    lastFocus = document.activeElement;
    var gallery = (p.images || []).slice(0, 2).map(function (src) {
      return '<img src="assets/img/' + esc(src) + '" alt="' + esc(p.title) + ' photo" loading="lazy">';
    }).join('');
    var list = function (arr) { return '<ul>' + arr.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>'; };
    var links = (p.links || []).filter(function (l) { return l.url; }).map(function (l) {
      var dl = l.type === 'download' || l.type === 'code' ? ' download' : '';
      return '<a class="btn btn-ghost sm" href="' + esc(l.url) + '"' + linkAttrs(l.url) + (isExternal(l.url) ? '' : dl) + '>' + icon(linkIcon[l.type] || 'arrow') + ' ' + esc(l.label) + '</a>';
    }).join('');

    pmBody.innerHTML =
      (gallery ? '<div class="pm-gallery">' + gallery + '</div>' : '') +
      '<div class="pm-content">' +
        '<span class="p-cat">' + esc(catLabel[p.category] || '') + (p.badge ? ' · ' + esc(p.badge) : '') + '</span>' +
        '<h3 id="pmTitle">' + esc(p.title) + '</h3>' +
        '<p class="pm-sub">' + esc(p.subtitle) + '</p>' +
        '<div class="pm-cols"><div>' +
          '<h5>Overview</h5><p class="pm-block">' + esc(p.overview) + '</p>' +
          (p.highlights && p.highlights.length ? '<h5>What it does</h5>' + list(p.highlights) : '') +
        '</div><div>' +
          '<h5>Stack</h5><div class="tags pm-block">' + p.stack.map(function (t) { return '<span class="tag">' + esc(t) + '</span>'; }).join('') + '</div>' +
          (p.learned && p.learned.length ? '<h5>What I learned</h5>' + list(p.learned) : '') +
        '</div></div>' +
        (links ? '<div class="pm-links">' + links + '</div>' : '') +
      '</div>';

    if (typeof modal.showModal === 'function') modal.showModal(); else modal.setAttribute('open', '');
    modal.scrollTop = 0;
    document.body.classList.add('modal-open');
  }
  function closeProject() {
    if (modal.open) modal.close();
  }
  modal.addEventListener('close', function () {
    document.body.classList.remove('modal-open');
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  });
  $('#pmClose').addEventListener('click', closeProject);
  modal.addEventListener('click', function (e) { if (e.target === modal) closeProject(); });
  $('#projectGrid').addEventListener('click', function (e) {
    var b = e.target.closest('.p-open');
    var card = e.target.closest('.p-card');
    if (b) openProject(+b.getAttribute('data-idx'));
    else if (card) { var o = $('.p-open', card); if (o) openProject(+o.getAttribute('data-idx')); }
  });

  /* ---------- Certifications ---------- */
  (function renderCerts() {
    var el = $('#certGrid'), list = D.certifications || [];
    if (!list.length) {
      el.innerHTML = '<div class="empty reveal"><strong>Certificates coming soon</strong><p>Courses and credentials will be listed here as I add them.</p></div>';
      return;
    }
    el.innerHTML = list.map(function (c) {
      var tag = c.url ? 'a' : 'div';
      return '<' + tag + ' class="card cert reveal"' + (c.url ? ' href="' + esc(c.url) + '"' + linkAttrs(c.url) : '') + '>' +
        '<span class="meta">' + esc(c.issuer) + (c.date ? ' · ' + esc(c.date) : '') + '</span>' +
        '<h3>' + esc(c.title) + '</h3>' + (c.description ? '<p>' + esc(c.description) + '</p>' : '') +
        (c.url ? '<span class="go">View certificate ' + icon('arrow') + '</span>' : '') + '</' + tag + '>';
    }).join('');
  })();

  /* ---------- Publications ---------- */
  (function renderPubs() {
    var el = $('#pubList'), list = D.publications || [];
    if (!list.length) {
      el.innerHTML = '<div class="empty reveal"><strong>Publications coming soon</strong></div>';
      return;
    }
    el.innerHTML = list.map(function (p) {
      var tag = p.url ? 'a' : 'article';
      return '<' + tag + ' class="card pub reveal"' + (p.url ? ' href="' + esc(p.url) + '"' + linkAttrs(p.url) : '') + '>' +
        '<span class="pub-type">' + esc(p.type) + '</span>' +
        '<div><h3>' + esc(p.title) + '</h3><p>' + esc(p.venue) + '</p>' + (p.authors ? '<p class="by">' + esc(p.authors) + '</p>' : '') + '</div>' +
        (p.url ? icon('arrow') : '') + '</' + tag + '>';
    }).join('');
  })();

  /* ---------- Blogs ---------- */
  (function renderBlogs() {
    var el = $('#blogGrid'), list = D.blogs || [];
    if (!list.length) {
      el.innerHTML = '<div class="empty reveal"><strong>First posts on the way</strong><p>Write-ups on VLSI, physical design and building hardware will live here.</p></div>';
      return;
    }
    el.innerHTML = list.map(function (b) {
      var tag = b.url ? 'a' : 'article';
      return '<' + tag + ' class="card blog reveal"' + (b.url ? ' href="' + esc(b.url) + '"' + linkAttrs(b.url) : '') + '>' +
        '<span class="meta">' + esc(b.tag || 'Blog') + (b.date ? ' · ' + esc(b.date) : '') + '</span>' +
        '<h3>' + esc(b.title) + '</h3><p>' + esc(b.summary) + '</p>' +
        (b.url ? '<span class="go">Read post ' + icon('arrow') + '</span>' : '') + '</' + tag + '>';
    }).join('');
  })();

  /* ---------- Résumé button ---------- */
  var rb = $('#resumeBtn');
  if (D.config.resume) { rb.href = D.config.resume; rb.hidden = false; }

  /* ---------- Contact form ---------- */
  var form = $('#contactForm'), statusEl = $('#formStatus'), sendBtn = $('#sendBtn');
  function setStatus(msg, kind) { statusEl.textContent = msg; statusEl.className = 'form-status' + (kind ? ' ' + kind : ''); }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = form.name.value.trim(), email = form.email.value.trim(), message = form.message.value.trim();
    if (!name || !email || !message) { setStatus('Please fill in your name, email and message.', 'err'); return; }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) { setStatus('That email address doesn’t look right.', 'err'); return; }
    if (form.botcheck.checked) return; // honeypot

    var key = D.config.web3formsKey;
    if (!key || /^YOUR_/.test(key)) {
      // Fallback until a form key is set: open the visitor's mail app.
      var body = message + '\n\n— ' + name + ' (' + email + ')';
      window.location.href = 'mailto:' + D.config.contactEmail + '?subject=' + encodeURIComponent('Portfolio message from ' + name) + '&body=' + encodeURIComponent(body);
      setStatus('Opening your email app…', 'ok');
      return;
    }

    sendBtn.disabled = true; setStatus('Sending…');
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        access_key: key, name: name, email: email, message: message,
        subject: 'Portfolio message from ' + name, from_name: 'Portfolio website'
      })
    }).then(function (r) { return r.json(); }).then(function (res) {
      if (res && res.success) { form.reset(); setStatus('Thank you — your message has been sent. I’ll reply soon.', 'ok'); }
      else { setStatus('Something went wrong. Please email me directly at ' + D.config.contactEmail + '.', 'err'); }
    }).catch(function () {
      setStatus('Network error. Please email me directly at ' + D.config.contactEmail + '.', 'err');
    }).then(function () { sendBtn.disabled = false; });
  });

  /* ---------- Footer year ---------- */
  $('#year').textContent = new Date().getFullYear();

  /* ---------- Reveal on scroll ---------- */
  var reveals = $$('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function (el, i) { el.style.transitionDelay = ((i % 4) * 70) + 'ms'; io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---------- Active nav link ---------- */
  var links = $$('.nav-links a');
  var map = {};
  links.forEach(function (a) { map[a.getAttribute('href').slice(1)] = a; });
  if ('IntersectionObserver' in window) {
    var so = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          links.forEach(function (a) { a.classList.remove('active'); });
          var a = map[en.target.id]; if (a) a.classList.add('active');
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    $$('main section[id]').forEach(function (s) { so.observe(s); });
  }
})();
