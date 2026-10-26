# Publish VANTA at TraderZ.github.io/vanta

Use **VANTA-GitHub-Pages.zip** for the easiest upload. It is the built website, not a Windows program.

1. **Extract the ZIP on your computer.** You should see `index.html`, `styles.css`, `manifest.webmanifest`, `sw.js`, `.nojekyll`, and the `assets` and `js` folders. Do not upload the unopened ZIP itself.
2. Sign in to **GitHub as TraderZ**. Create a **public repository named `vanta`**. GitHub Free supports Pages in public repositories. Do not add API keys, portfolio exports or personal financial records to the repository.
3. In the repository, choose **Add file → Upload files**. Drag the extracted website's **contents**, including both folders, into the upload area. Commit them to `main`. **`index.html` must be at the repository root**, not inside another VANTA folder.
4. Open **Settings → Pages** in the repository.
5. Under **Build and deployment**, choose **Deploy from a branch**. Select branch **`main`**, folder **`/ (root)`**, and **Save**.
6. Wait for GitHub's Pages deployment to finish. The expected address is **https://traderz.github.io/vanta/**. GitHub will show the actual published URL and deployment status; the package itself does not mean the site is already published.
7. Open that HTTPS address on desktop or iPhone. In Safari on iPhone, use **Share → Add to Home Screen** for the app-like layout.

If you see a 404, check the Pages deployment status and verify `index.html` is at the selected publishing root. If the layout loads without styles, check that `styles.css`, `assets` and `js` were uploaded without renaming them. File names and letter case matter.

## First use

- **Example workspace** is immediately interactive. Its holdings and prices are generated examples, clearly labeled as synthetic.
- Choose **Start my portfolio** to record your own holdings. The personal workspace starts empty.
- **Record a trade** records a transaction or existing holding; it never submits a stock order. For `$1,000 in AMZN`, choose dollars and enter your actual purchase price and date.
- Use **Markets → Set manual quote**, import daily OHLCV CSV, or connect your own **Twelve Data key** in Settings for portfolio price marks.
- **Markets → Public market chart** loads an independent TradingView chart without entering a market-data key. Its displayed prices are not extracted into your portfolio calculations.
- **Vanta Analyst** works locally for supported calculations. Optional language-model responses require your own compatible HTTPS AI endpoint configured in Settings.
- Export a JSON backup from Settings to move records from desktop to iPhone. Browser data does not automatically sync.

## Alternative: full source and GitHub Actions

**VANTA-Source.zip** includes source, Node tests, a build script and `.github/workflows/pages.yml`. If using this developer route, upload that project, select **GitHub Actions** as the Pages source, and let the workflow test/build/deploy `dist/`. Do not mix these instructions with the simpler built-site branch publishing route above.

## Official references

[GitHub Pages publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) · [GitHub Pages workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)
