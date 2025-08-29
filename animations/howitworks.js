document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("hiw-show");
      } else {
        entry.target.classList.remove("hiw-show"); // hide when out of view
      }
    });
  }, { threshold: 0.3 });

  // header text animation (h2 + p)
  const headerEls = document.querySelectorAll(".section-header h2, .section-header p");
  headerEls.forEach((el, i) => {
    el.classList.add("hiw-hidden"); // starting hidden state
    setTimeout(() => observer.observe(el), i * 200); // delay for stagger effect
  });

  // steps animation
  const steps = document.querySelectorAll(".step");
  steps.forEach((step, i) => {
    step.classList.add("hiw-hidden");
    setTimeout(() => observer.observe(step), i * 200);
  });
});
