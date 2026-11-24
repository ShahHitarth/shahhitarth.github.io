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
  function openDialog(d) { if (typeof d.showModal === 'function') d.showModal(); else d.setAttribute('open', ''); }

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

  /* ---------- Current focus (About) ---------- */
  (function renderFocus() {
    var el = $('#focusList'); if (!el) return;
    el.innerHTML = (D.focus || []).map(function (f) { return '<li>' + esc(f) + '</li>'; }).join('');
    if (!(D.focus || []).length) { var box = $('#focusBox'); if (box) box.hidden = true; }
  })();

  /* ---------- Skills ---------- */
  (function renderSkills() {
    var s = D.skills, el = $('#skillsGrid');
    function tag(i, soft) {
      if (typeof i === 'string') return '<span class="tag' + (soft ? ' soft' : '') + '">' + esc(i) + '</span>';
      return '<span class="tag' + (soft ? ' soft' : '') + '">' + esc(i.name) + (i.note ? '<em>' + esc(i.note) + '</em>' : '') + '</span>';
    }
    var tech = s.technical.map(function (g) {
      return '<div class="sk-group"><h4>' + esc(g.group) + '</h4><div class="tags">' +
        g.items.map(function (i) { return tag(i, g.soft); }).join('') + '</div></div>';
    }).join('');
    var soft = s.nontechnical.map(function (i) { return tag(i); }).join('');
    var creative = (s.creative || []).map(function (i) { return tag(i); }).join('');
    var langs = s.languages.map(function (l) {
      return '<li><strong>' + esc(l.name) + '</strong><span>' + esc(l.level) + '</span></li>';
    }).join('');
    el.innerHTML =
      '<article class="card skill-card s-tech reveal"><h3>Technical</h3><div class="sk-groups">' + tech + '</div></article>' +
      '<article class="card skill-card s-third reveal"><h3>Professional</h3><div class="tags">' + soft + '</div></article>' +
      '<article class="card skill-card s-third reveal"><h3>Creative</h3><div class="tags">' + creative + '</div></article>' +
      '<article class="card skill-card s-third reveal"><h3>Languages</h3><ul class="lang-list">' + langs + '</ul></article>';
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

  /* ---------- Generic filter helper (pill buttons) ---------- */
  function filterButtons(container, groups, onPick) {
    container.innerHTML = groups.map(function (g, i) {
      return '<button class="f-btn" type="button" data-id="' + esc(g.id) + '" aria-pressed="' + (i === 0) + '">' + esc(g.label) + '</button>';
    }).join('');
    container.addEventListener('click', function (e) {
      var b = e.target.closest('.f-btn'); if (!b) return;
      $$('.f-btn', container).forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
      onPick(b.getAttribute('data-id'));
    });
  }

  /* ---------- Projects ---------- */
  var PROJECTS = D.projects.filter(function (p) { return !p.hidden; });
  var catLabel = {}, catSoon = {};
  D.categories.forEach(function (c) { catLabel[c.id] = c.label; catSoon[c.id] = c.soon; });

  (function renderProjects() {
    $('#projectGrid').innerHTML = PROJECTS.map(function (p, idx) {
      var badge = p.badge ? '<span class="p-badge">' + esc(p.badge) + '</span>' : '';
      var media = p.images && p.images.length
        ? '<div class="p-media"><img src="assets/img/' + esc(p.images[0]) + '" alt="" loading="lazy" width="800" height="500">' + badge + '</div>'
        : '<div class="p-media ph"><span>' + esc(p.title.charAt(0)) + '</span>' + badge + '</div>';
      var hasVideo = p.videos && p.videos.length;
      return '<article class="card p-card reveal" data-cat="' + esc(p.category) + '">' + media +
        '<div class="p-body"><span class="p-cat">' + esc(catLabel[p.category] || p.category) + '</span>' +
        '<h3 class="p-title"><button class="p-open" type="button" data-idx="' + idx + '">' + esc(p.title) + '</button></h3>' +
        '<p class="p-sum">' + esc(p.summary) + '</p>' +
        '<div class="tags">' + p.stack.slice(0, 3).map(function (t) { return '<span class="tag soft">' + esc(t) + '</span>'; }).join('') + '</div>' +
        '<span class="p-more">' + (hasVideo ? 'Details &amp; demo video ' : 'View details ') + icon('arrow') + '</span></div></article>';
    }).join('');

    var grid = $('#projectGrid');
    var soon = document.createElement('div');
    soon.className = 'empty'; soon.hidden = true;
    grid.parentNode.insertBefore(soon, grid.nextSibling);

    filterButtons($('#projectFilters'), D.categories, function (cat) {
      var shown = 0;
      $$('.p-card', grid).forEach(function (c) {
        var on = (cat === 'all' || c.getAttribute('data-cat') === cat);
        c.hidden = !on; if (on) shown++;
      });
      if (shown === 0) {
        soon.innerHTML = '<strong>Coming soon</strong><p>' + esc(catSoon[cat] || 'More projects are on the way.') + '</p>';
        soon.hidden = false;
      } else { soon.hidden = true; }
    });
  })();

  /* ---------- Project modal ---------- */
  var modal = $('#projectModal'), pmBody = $('#pmBody'), lastFocus = null, currentProject = null;
  var linkIcon = { code: 'code', video: 'play', live: 'globe', download: 'download' };

  function ytId(id) { return /^[A-Za-z0-9_-]{6,20}$/.test(id) ? id : ''; }

  function playVideo(i) {
    var p = currentProject; if (!p || !p.videos || !p.videos[i]) return;
    var id = ytId(p.videos[i].id); if (!id) return;
    var box = $('.pm-video', pmBody); if (!box) return;
    var wrap = $('.pm-video-wrap', pmBody), yt = $('.pm-video-note a', pmBody);
    if (wrap) wrap.hidden = false;
    if (yt) yt.href = 'https://youtu.be/' + id;
    box.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1&rel=0" title="' + esc(p.title + ' — ' + p.videos[i].label) + '" allow="accelerometer; autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>';
    $$('.vid-btn', pmBody).forEach(function (b) { b.setAttribute('aria-pressed', String(+b.getAttribute('data-vid') === i)); });
    box.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }

  function openProject(i) {
    var p = PROJECTS[i]; if (!p) return;
    currentProject = p;
    lastFocus = document.activeElement;
    var videos = (p.videos || []).filter(function (v) { return ytId(v.id); });
    var gallery = (p.images || []).slice(0, 2).map(function (src) {
      return '<img src="assets/img/' + esc(src) + '" alt="' + esc(p.title) + ' photo" loading="lazy">';
    }).join('');
    var list = function (arr) { return '<ul>' + arr.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>'; };
    var vidBtns = videos.map(function (v, k) {
      return '<button class="btn btn-primary sm vid-btn" type="button" data-vid="' + k + '" aria-pressed="false">' + icon('play') + ' Watch ' + (videos.length > 1 ? esc(v.label.toLowerCase()) : 'demo') + '</button>';
    }).join('');
    var links = (p.links || []).filter(function (l) { return l.url; }).map(function (l) {
      var dl = (l.type === 'download' || l.type === 'code') && !isExternal(l.url) ? ' download' : '';
      return '<a class="btn btn-ghost sm" href="' + esc(l.url) + '"' + linkAttrs(l.url) + dl + '>' + icon(linkIcon[l.type] || 'arrow') + ' ' + esc(l.label) + '</a>';
    }).join('');
    var actions = vidBtns + links;

    pmBody.innerHTML =
      (videos.length ? '<div class="pm-video-wrap" hidden><div class="pm-video" aria-live="polite"></div><p class="pm-video-note">Video not loading? <a href="https://youtu.be/' + esc(videos[0].id) + '" target="_blank" rel="noopener">Open it on YouTube</a></p></div>' : '') +
      (gallery ? '<div class="pm-gallery">' + gallery + '</div>' : '') +
      '<div class="pm-content">' +
        '<span class="p-cat">' + esc(catLabel[p.category] || '') + (p.badge ? ' · ' + esc(p.badge) : '') + '</span>' +
        '<h3 id="pmTitle">' + esc(p.title) + '</h3>' +
        '<p class="pm-sub">' + esc(p.subtitle) + '</p>' +
        (actions ? '<div class="pm-links top">' + actions + '</div>' : '') +
        '<div class="pm-cols"><div>' +
          '<h5>Overview</h5><p class="pm-block">' + esc(p.overview) + '</p>' +
          (p.highlights && p.highlights.length ? '<h5>What it does</h5>' + list(p.highlights) : '') +
        '</div><div>' +
          '<h5>Stack</h5><div class="tags pm-block">' + p.stack.map(function (t) { return '<span class="tag">' + esc(t) + '</span>'; }).join('') + '</div>' +
          (p.learned && p.learned.length ? '<h5>What I learned</h5>' + list(p.learned) : '') +
        '</div></div>' +
      '</div>';

    openDialog(modal);
    modal.scrollTop = 0;
    document.body.classList.add('modal-open');
  }
  function closeDialog(d) { if (d.open) d.close(); }
  modal.addEventListener('close', function () {
    pmBody.innerHTML = '';            // also stops any playing video
    currentProject = null;
    document.body.classList.remove('modal-open');
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  });
  $('#pmClose').addEventListener('click', function () { closeDialog(modal); });
  modal.addEventListener('click', function (e) {
    if (e.target === modal) { closeDialog(modal); return; }
    var vb = e.target.closest('.vid-btn');
    if (vb) playVideo(+vb.getAttribute('data-vid'));
  });
  $('#projectGrid').addEventListener('click', function (e) {
    var b = e.target.closest('.p-open');
    var card = e.target.closest('.p-card');
    if (b) openProject(+b.getAttribute('data-idx'));
    else if (card) { var o = $('.p-open', card); if (o) openProject(+o.getAttribute('data-idx')); }
  });

  /* ---------- Image viewer (certificates, papers, patents) ---------- */
  var viewer = $('#viewer'), vBody = $('#viewerBody'), vLast = null;
  function openViewer(title, sub, srcs) {
    vLast = document.activeElement;
    vBody.innerHTML =
      '<div class="v-head"><h3 id="vTitle">' + esc(title) + '</h3>' + (sub ? '<p>' + esc(sub) + '</p>' : '') + '</div>' +
      '<div class="v-imgs">' + srcs.map(function (s) {
        return '<a href="' + esc(s) + '" target="_blank" rel="noopener" title="Open full size"><img src="' + esc(s) + '" alt="' + esc(title) + '"></a>';
      }).join('') + '</div>';
    openDialog(viewer);
    viewer.scrollTop = 0;
    document.body.classList.add('modal-open');
  }
  viewer.addEventListener('close', function () {
    vBody.innerHTML = '';
    document.body.classList.remove('modal-open');
    if (vLast && vLast.focus) vLast.focus();
  });
  $('#vClose').addEventListener('click', function () { closeDialog(viewer); });
  viewer.addEventListener('click', function (e) { if (e.target === viewer) closeDialog(viewer); });

  /* ---------- Certifications ---------- */
  (function renderCerts() {
    var el = $('#certGrid'), list = D.certifications || [], fbox = $('#certFilters');
    if (!list.length) {
      fbox.hidden = true;
      el.innerHTML = '<div class="empty reveal"><strong>Certificates coming soon</strong><p>Courses and credentials will be listed here as I add them.</p></div>';
      return;
    }
    el.innerHTML = list.map(function (c, i) {
      return '<article class="card cert reveal" data-group="' + esc(c.group) + '">' +
        '<button class="cert-thumb" type="button" data-i="' + i + '" aria-label="View certificate: ' + esc(c.title) + '">' +
          '<img src="assets/certs/' + esc(c.image) + '" alt="" loading="lazy">' +
          '<span class="cert-zoom">' + icon('arrow') + ' View</span></button>' +
        '<div class="cert-body"><span class="meta">' + esc(c.issuer) + (c.date ? ' · ' + esc(c.date) : '') + '</span>' +
        '<h3>' + esc(c.title) + '</h3>' + (c.description ? '<p>' + esc(c.description) + '</p>' : '') + '</div></article>';
    }).join('');
    filterButtons(fbox, D.certGroups, function (g) {
      $$('.cert', el).forEach(function (c) { c.hidden = !(g === 'all' || c.getAttribute('data-group') === g); });
    });
    el.addEventListener('click', function (e) {
      var b = e.target.closest('.cert-thumb'); if (!b) return;
      var c = list[+b.getAttribute('data-i')];
      openViewer(c.title, c.issuer + (c.date ? ' · ' + c.date : ''), ['assets/certs/' + c.image]);
    });
  })();

  /* ---------- Publications ---------- */
  (function renderPubs() {
    var el = $('#pubList'), list = D.publications || [];
    if (!list.length) {
      el.innerHTML = '<div class="empty reveal"><strong>Publications coming soon</strong></div>';
      return;
    }
    el.innerHTML = list.map(function (p, i) {
      var thumb = p.images && p.images.length
        ? '<button class="pub-thumb" type="button" data-i="' + i + '" aria-label="View images: ' + esc(p.title) + '"><img src="assets/docs/' + esc(p.images[0]) + '" alt="" loading="lazy"><span class="cert-zoom">' + icon('arrow') + ' View</span></button>'
        : '';
      var links = (p.links || []).filter(function (l) { return l.url; }).map(function (l) {
        return '<a class="btn btn-ghost sm" href="' + esc(l.url) + '"' + linkAttrs(l.url) + '>' + icon('download') + ' ' + esc(l.label) + '</a>';
      }).join('');
      return '<article class="card pub reveal' + (thumb ? '' : ' no-thumb') + '">' + thumb +
        '<div class="pub-main"><div class="pub-top"><span class="pub-type">' + esc(p.type) + '</span>' + (p.badge ? '<span class="p-badge inline">' + esc(p.badge) + '</span>' : '') + '</div>' +
        '<h3>' + esc(p.title) + '</h3>' + (p.native ? '<p class="native" lang="hi">' + esc(p.native) + '</p>' : '') +
        '<p>' + esc(p.venue) + '</p>' + (p.authors ? '<p class="by">' + esc(p.authors) + '</p>' : '') +
        (links ? '<div class="pm-links tight">' + links + '</div>' : '') + '</div></article>';
    }).join('');
    el.addEventListener('click', function (e) {
      var b = e.target.closest('.pub-thumb'); if (!b) return;
      var p = list[+b.getAttribute('data-i')];
      openViewer(p.title, p.type, p.images.map(function (s) { return 'assets/docs/' + s; }));
    });
  })();

  /* ---------- Blogs ---------- */
  (function renderBlogs() {
    var el = $('#blogGrid'), list = D.blogs || [];
    if (!list.length) {
      el.innerHTML = '<div class="empty reveal"><strong>First posts on the way</strong><p>Write-ups on VLSI, digital design and building hardware will live here.</p></div>';
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
