# Nourin Shahin — AI Engineer Portfolio

This is a build-free GitHub Pages website. It uses only HTML, CSS, and JavaScript.
There is no npm installation, terminal command, framework, or build step required.

## Fastest way to publish at `your-username.github.io`

1. Sign in to GitHub.
2. Create a **public** repository named exactly `YOUR-GITHUB-USERNAME.github.io`.
3. Upload everything inside this folder. `index.html` must be at the repository root.
4. Open the repository's **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select the `main` branch and `/ (root)`, then click **Save**.
7. GitHub will publish the site at `https://YOUR-GITHUB-USERNAME.github.io`.

You can also use any repository name. In that case, the default address will be:
`https://YOUR-GITHUB-USERNAME.github.io/REPOSITORY-NAME/`.

## How to edit the website

### Change text, jobs, projects, publications, links, or contact details

Open `content.js`. Almost every visible piece of content is collected there and
organized under clear headings such as `home`, `experience`, `projects`, and
`testimonials`.

Keep quotation marks and commas in place when changing text.

The résumé does not state a bachelor's GPA, so the Home section contains the
placeholder `ADD GPA`. Replace that text in `content.js` with the correct
number before publishing.

### Add real testimonials

Find this line in `content.js`:

```js
testimonials: [],
```

Replace it with:

```js
testimonials: [
  {
    quote: "The exact recommendation goes here.",
    name: "Person Name",
    role: "Job Title · Company",
  },
],
```

### Add real project or demo links

Each project in `content.js` contains:

```js
liveUrl: "",
githubUrl: "",
```

Paste the full links between the quotation marks. A **Live** or **Code** button
will appear automatically.

### Change colors

Open `styles.css` and edit the color values at the very top under `:root`.

### Replace the résumé

Replace `assets/Nourin-Shahin-Resume.pdf` with the updated PDF. Keep the same
filename so every résumé button continues to work.

### Change the home-page AI lifecycle

Open `content.js` and edit `aiLifecycle.stages` or `aiLifecycle.qualityChecks`.
The diagram updates automatically.

## Preview before publishing

You can double-click `index.html` to open it locally. For the most accurate
preview, open a terminal inside this folder and run:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Files

- `index.html` — page structure and metadata
- `content.js` — the easy-to-edit content source
- `styles.css` — layout, colors, and responsive design
- `script.js` — tabs, rendering, demos, and interactions
- `assets/` — résumé and favicon
- `.nojekyll` — tells GitHub Pages to serve the files directly
