# Hitarth Shah — Portfolio

A static, dependency-free portfolio (HTML + CSS + JS). No server, no build step, free to host.

```
index.html            page structure (hero, about, contact form)
assets/css/style.css  light + dark theme colours are the two blocks at the top
assets/js/data.js     ALL your content: skills, achievements, projects, certificates, publications, blogs
assets/js/main.js     behaviour (theme switch, project pop-ups, filters, contact form)
assets/img/           optimised photos (WebP)
assets/code/          downloadable project code (credentials removed)
```

## Adding content (no coding needed)

Open `assets/js/data.js`. Each list is plain text — copy an existing block, paste it, edit the words.

- **Certificates** — fill `certifications: []` using the example in the comment above it.
- **Blogs** — fill `blogs: []` the same way. Link `url` to Medium / LinkedIn / Dev.to / a page on this site.
- **Publications** — edit/add entries in `publications`. Replace the SATYA paper title with the exact one.
- **Projects** — copy any project object. Put photos in `assets/img/` (convert to `.webp`, ≤1400 px wide).
- **Résumé** — drop a PDF in `assets/` and set `config.resume` to its path; the button appears automatically.

## Contact form (free, no server)

1. Go to https://web3forms.com, enter your email, and copy the access key they send.
2. Paste it into `config.web3formsKey` in `assets/js/data.js`.
3. Done — messages arrive in your inbox. (Free tier: 250 messages/month.)

Until a key is set, the form opens the visitor's email app instead, so it never fails silently.

## Putting it online for free (GitHub Pages)

1. For the cleanest address, name the repository `shahhitarth.github.io` (the repo name must be `<your-username>.github.io`). If you keep the name `Portfolio`, the site lives at `shahhitarth.github.io/Portfolio/` — it works either way.
2. Replace the repo's old files with the contents of this folder (old `*.html`, `proxy.js`, `package.json` are no longer needed). On github.com: *Add file → Upload files*, drag everything in, commit.
3. *Settings → Pages → Build and deployment → Deploy from a branch → `main` / `(root)` → Save.* The site is live in about a minute.

## Getting found on Google (free)

1. Open https://search.google.com/search-console and add your site as a *URL prefix* property.
2. Verify with the HTML-tag method (paste the `<meta>` tag into the `<head>` of `index.html`).
3. *Sitemaps* → submit `sitemap.xml`; then *URL inspection* → *Request indexing*.
4. Link to the site from your LinkedIn, GitHub profile and résumé — that speeds up discovery.

If your final address isn't `https://shahhitarth.github.io/`, update it in `index.html` (canonical + social tags), `sitemap.xml` and `robots.txt`.
