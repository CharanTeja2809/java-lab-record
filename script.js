

document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("page-ready");

  const cards = document.querySelectorAll(".week-card");

  cards.forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      card.style.background = `
        radial-gradient(
          circle at ${x}px ${y}px,
          rgba(85, 217, 255, 0.09),
          rgba(19, 29, 52, 0.82) 65%
        )
      `;
    });

    card.addEventListener("pointerleave", () => {
      card.style.background = "";
    });
  });
});
