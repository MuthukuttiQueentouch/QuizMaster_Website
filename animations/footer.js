document.addEventListener("DOMContentLoaded", () => {
  const footerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("footer-show");
      } else {
        entry.target.classList.remove("footer-show"); // optional reset
      }
    });
  }, { threshold: 0.2 });

  // footer cols + newsletter + bottom
  const footerEls = document.querySelectorAll(".footer-col, .newsletter-form, .footer-bottom p");
  footerEls.forEach((el, i) => {
    el.classList.add("footer-hidden");
    el.style.transitionDelay = `${i * 0.2}s`; // smooth stagger
    footerObserver.observe(el);
  });
});
