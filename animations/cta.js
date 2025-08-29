document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("cta-show");
      } else {
        entry.target.classList.remove("cta-show");
      }
    });
  }, { threshold: 0.3 });

  // CTA image animation
  const ctaImg = document.querySelector(".cta-image");
  if (ctaImg) {
    ctaImg.classList.add("cta-hidden");
    observer.observe(ctaImg);
  }

  // CTA text animation (optional)
  const ctaText = document.querySelectorAll(".cta-content h2, .cta-content p, .app-buttons");
  ctaText.forEach((el, i) => {
    el.classList.add("cta-hidden");
    el.style.transitionDelay = `${i * 0.2}s`; // stagger
    observer.observe(el);
  });
});
