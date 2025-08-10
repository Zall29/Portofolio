document.addEventListener("click", function (e) {
  const isAccordionClick = e.target.closest(".accordion");
  if (!isAccordionClick) {
    document.querySelectorAll(".accordion-collapse.show").forEach(el => {
      new bootstrap.Collapse(el, { toggle: true });
    });
  }
});