const TOTAL_WEEKS = 11;
const weekList = document.getElementById("weekList");
const viewerTitle = document.getElementById("viewerTitle");
const viewerSubtitle = document.getElementById("viewerSubtitle");
const viewerBody = document.getElementById("viewerBody");
const intro = document.getElementById("intro");
const site = document.getElementById("site");

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("enterButton").addEventListener("click", () => {
  intro.classList.add("leaving");
  window.setTimeout(() => {
    intro.style.display = "none";
    site.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 650);
});

function showWeek(weekNumber, button) {
  document.querySelectorAll(".week-button").forEach((item) => {
    item.classList.toggle("active", item === button);
    item.setAttribute("aria-pressed", item === button ? "true" : "false");
  });

  const fileName = `week${weekNumber}.pdf`;
  const pdfPath = `pdfs/${fileName}`;
  viewerTitle.textContent = `Week ${weekNumber} PDF`;
  viewerSubtitle.textContent = `Open or download the original PDF for Week ${weekNumber}.`;

  viewerBody.innerHTML = `
    <div class="selected-week">
      <div class="doc-art">PDF</div>
      <h3>Week ${weekNumber} Lab Record</h3>
      <p>Use <strong>Open PDF</strong> to view the document in a new browser tab, or choose <strong>Download PDF</strong> to save it to your device.</p>
      <div class="doc-actions">
        <a class="action-button primary" href="${pdfPath}" target="_blank" rel="noopener" aria-label="Open Week ${weekNumber} PDF">↗ Open PDF</a>
        <a class="action-button" href="${pdfPath}" download="Java-Lab-Record-Week-${weekNumber}.pdf" aria-label="Download Week ${weekNumber} PDF">↓ Download PDF</a>
      </div>
      <p class="file-reminder">File location: <code>${pdfPath}</code></p>
    </div>`;
}

for (let week = 1; week <= TOTAL_WEEKS; week++) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "week-button";
  button.innerHTML = `<span class="week-label">Week ${week}</span><span class="week-action" aria-hidden="true">↗</span>`;
  button.setAttribute("aria-pressed", "false");
  button.addEventListener("click", () => showWeek(week, button));
  weekList.appendChild(button);
}
