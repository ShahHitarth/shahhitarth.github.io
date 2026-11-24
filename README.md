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

Open `assets/js/data.js`. Each list is plain text: copy an existing block, paste it, edit the words.

- **Projects** — copy any project object. Photos go in `assets/img/` (convert to `.webp`, 1400 px wide or less). Add `videos: [{ label: "Demo", id: "YOUTUBE_ID" }]` to show a player in the pop-up (the ID is the part after `youtu.be/`, without `?si=...`). Projects marked `hidden: true` (Verilog, Fractal Antenna, CareLink) stay in the file but are off the site: set `hidden` to `false` once their details are ready.
- **Certificates** — add an object to `certifications`. Put the image in `assets/certs/` as `.webp` (a PDF certificate can be converted by screenshotting it). Use `group: "tech"` or `"beyond"`.
- **Publications & patents** — edit/add entries in `publications`; images go in `assets/docs/`, PDFs too.
- **Blogs** — fill `blogs: []` using the example in the comment above it. Link `url` to Medium / LinkedIn / Dev.to / a page on this site.
- **Current focus** — the three lines in `focus` appear on the About section; change them whenever your focus changes.
- **Résumé** — replace `assets/Hitarth-Shah-Resume.pdf` with the new file (keep the name).

## Contact form (free, no server)

Already wired to Web3Forms with your access key in `data.js` (`config.web3formsKey`). Messages arrive in your inbox (free tier: 250 a month). The first time you test it, Web3Forms may ask you to confirm your email address.

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
