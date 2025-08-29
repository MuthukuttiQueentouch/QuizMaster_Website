document.addEventListener("DOMContentLoaded", () => {
  const pricingObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("pricing-show");
      } else {
        entry.target.classList.remove("pricing-show"); // reset if needed
      }
    });
  }, { threshold: 0.2 });

  // Section header
  const headerEls = document.querySelectorAll(".pricing-section .section-header h2, .pricing-section .section-header p");
  headerEls.forEach((el, i) => {
    el.classList.add("pricing-hidden");
    el.style.transitionDelay = `${i * 0.2}s`;
    pricingObserver.observe(el);
  });

  // Pricing cards
  const cards = document.querySelectorAll(".pricing-card");
  cards.forEach((card, i) => {
    card.classList.add("pricing-hidden");
    card.style.transitionDelay = `${0.3 + i * 0.2}s`; // stagger effect
    pricingObserver.observe(card);
  });
});
