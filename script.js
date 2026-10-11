const TOTAL_WEEKS = 11;
const weekList = document.getElementById("weekList");
const viewerTitle = document.getElementById("viewerTitle");
const viewerSubtitle = document.getElementById("viewerSubtitle");
const pdfStage = document.getElementById("pdfStage");
const downloadButton = document.getElementById("downloadButton");
const viewerFile = document.getElementById("viewerFile");
const intro = document.getElementById("intro");
const site = document.getElementById("site");

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("enterButton").addEventListener("click", () => {
  intro.classList.add("leaving");
  window.setTimeout(() => {
    intro.style.display = "none";
    site.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 720);
});

function showWeek(weekNumber, button) {
  document.querySelectorAll(".week-button").forEach((item) => {
    const active = item === button;
    item.classList.toggle("active", active);
    item.setAttribute("aria-pressed", active ? "true" : "false");
  });

  const fileName = `week${weekNumber}.pdf`;
  const pdfPath = `pdfs/${fileName}`;
  viewerTitle.textContent = `Week ${weekNumber} PDF`;
  viewerSubtitle.textContent = `Viewing your Week ${weekNumber} lab record inside this page.`;
  viewerFile.textContent = fileName;

  // The PDF is embedded in the page, beside the week list, rather than opened in a new tab.
  pdfStage.innerHTML = "";
  const frame = document.createElement("iframe");
  frame.className = "pdf-frame";
  frame.title = `Week ${weekNumber} Java lab record PDF`;
  frame.src = `${pdfPath}#toolbar=1&navpanes=0&view=FitH`;
  frame.setAttribute("loading", "lazy");
  pdfStage.appendChild(frame);

  downloadButton.href = pdfPath;
  downloadButton.download = `Java-Lab-Record-Week-${weekNumber}.pdf`;
  downloadButton.classList.remove("disabled");
  downloadButton.removeAttribute("aria-disabled");
  downloadButton.setAttribute("aria-label", `Download Week ${weekNumber} PDF`);
}

for (let week = 1; week <= TOTAL_WEEKS; week++) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "week-button";
  button.innerHTML = `<span class="week-label"><span class="week-index">${String(week).padStart(2, "0")}</span>Week ${week}</span><span class="week-action" aria-hidden="true">↗</span>`;
  button.setAttribute("aria-pressed", "false");
  button.addEventListener("click", () => showWeek(week, button));
  weekList.appendChild(button);
}
