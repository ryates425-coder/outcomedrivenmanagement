# Outcome-Driven Management Website

A responsive static website for presenting Outcome-Driven Management (ODM), Learning-Centered Organizations, Outcome-Driven Engineering, and the Decision Center.

## Local preview

No build step is required.

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080`.

## Repository structure

```text
.
├── .github/
│   ├── ISSUE_TEMPLATE/
│   ├── workflows/deploy-pages.yml
│   ├── CODEOWNERS
│   └── pull_request_template.md
├── assets/
├── docs/
├── index.html
├── styles.css
├── script.js
├── CONTRIBUTING.md
├── LICENSE
├── SECURITY.md
└── CNAME.example
```

## GitHub Pages

1. Create a GitHub repository.
2. Upload this package or push it with Git.
3. In repository settings, open **Pages**.
4. Select **GitHub Actions** as the source.
5. The included workflow publishes the static site after changes land on `main`.

## Squarespace workflow

GitHub can remain the canonical source for copy, custom CSS, JavaScript, and diagrams. The production Squarespace site can be assembled with native Fluid Engine sections and Code Blocks. See `docs/SQUARESPACE.md`.

## Required launch changes

- Replace `hello@example.com` in `index.html`.
- Source-vet public historical claims about Taylor, Agile, and AI-era management.
- Add final legal, privacy, accessibility, analytics, and cookie requirements.
- If using a custom domain with GitHub Pages, rename `CNAME.example` to `CNAME` and place the exact domain in that file.

## License

MIT. Replace the copyright holder if needed.
