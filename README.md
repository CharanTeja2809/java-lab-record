# Java Lab Record — V. Charan Teja

A responsive Java Lab Record website with an animated intro, an attractive dark violet/cyan background, your supplied profile photo, and an inline PDF viewer.

## Included in this ZIP
- `index.html` — page structure and student details.
- `style.css` — animated background, intro transition, layout and responsive styles.
- `script.js` — 11 week buttons, inline PDF viewer and download control.
- `assets/profile.jpeg` — the profile photo supplied for this website.
- `pdfs/week1.pdf` through `pdfs/week11.pdf` — weekly PDFs supplied for this project.

## How the week viewer works
Click a week on the left. Its PDF is loaded in an embedded viewer in the right-hand panel, so the user does not have to open another tab. The Download PDF button above the viewer downloads the currently selected week's PDF.

## Test locally
1. Extract this ZIP.
2. Keep the folders and filenames unchanged.
3. Open `index.html` in a current desktop browser.
4. Click **Explore My Record**.
5. Select Week 1 and Week 11 and check that the PDF appears in the right panel.
6. Click **Download PDF** to save the selected week.

Some browsers restrict embedded PDFs when opening `index.html` directly from the file system. If the PDF panel does not render locally, test the site after publishing to GitHub Pages; static hosting serves the PDFs over HTTP.

## Deploy to GitHub Pages
1. Sign in at https://github.com/.
2. Click **+ → New repository**.
3. Name it `java-lab-record`, choose **Public**, and create it.
4. In the repository, choose **Add file → Upload files**.
5. Extract this ZIP on your computer. Upload the contents of the `java-lab-record-final` folder, including `index.html`, `style.css`, `script.js`, `assets/`, and `pdfs/`. Make sure `index.html` is in the repository root.
6. Commit the uploaded files.
7. Open **Settings → Pages**.
8. Under **Build and deployment**, select **Deploy from a branch**.
9. Choose branch `main` and folder `/(root)`, then click **Save**.
10. Wait for GitHub Pages to publish. The URL will usually look like `https://YOUR-USERNAME.github.io/java-lab-record/`.
11. Open the published URL and test multiple week buttons and the download button.

Official guide: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

## Troubleshooting
- **Profile image missing:** confirm `assets/profile.jpeg` is uploaded with the same spelling and capitalization.
- **PDF 404:** check that `pdfs/week1.pdf` etc. exist in the repository and that folder/file capitalization matches.
- **PDF not visible in the panel:** test the published GitHub Pages URL, not just a local file. The browser must support PDF viewing.
- **Download behavior:** the Download PDF link targets the selected PDF and requests a download. Browser settings may affect whether the file downloads or opens.
