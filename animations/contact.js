document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("contact-show");
      } else {
        entry.target.classList.remove("contact-show");
      }
    });
  }, { threshold: 0.3 });

  // header
  const headerEls = document.querySelectorAll(".contact-section .section-header h2, .contact-section .section-header p");
  headerEls.forEach((el, i) => {
    el.classList.add("contact-hidden");
    el.style.transitionDelay = `${i * 0.2}s`; // stagger effect
    observer.observe(el);
  });

  // form elements
  const formEls = document.querySelectorAll(".contact-form input, .contact-form textarea, .btn-send");
  formEls.forEach((el, i) => {
    el.classList.add("contact-hidden");
    el.style.transitionDelay = `${0.3 + i * 0.15}s`; // smooth stagger
    observer.observe(el);
  });

  // map container
  const map = document.querySelector(".map-container");
  if (map) {
    map.classList.add("contact-hidden");
    observer.observe(map);
  }
});
