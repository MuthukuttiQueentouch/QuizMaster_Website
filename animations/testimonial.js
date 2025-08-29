document.addEventListener("DOMContentLoaded", () => {
  const testimonialObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("testimonial-show");
      } else {
        entry.target.classList.remove("testimonial-show"); // optional reset
      }
    });
  }, { threshold: 0.2 });

  // Header (title + desc)
  const headerEls = document.querySelectorAll(".testimonials-section .section-header h2, .testimonials-section .section-header p");
  headerEls.forEach((el, i) => {
    el.classList.add("testimonial-hidden");
    el.style.transitionDelay = `${i * 0.2}s`; // smooth stagger
    testimonialObserver.observe(el);
  });

  // Testimonial cards (swiper slides inside)
  const cards = document.querySelectorAll(".testimonial-card");
  cards.forEach((card, i) => {
    card.classList.add("testimonial-hidden");
    card.style.transitionDelay = `${0.3 + i * 0.15}s`; // sequential animation
    testimonialObserver.observe(card);
  });
});
