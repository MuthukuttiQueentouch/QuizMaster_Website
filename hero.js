document.addEventListener("DOMContentLoaded", () => {
  const heroContent = document.querySelector(".hero-content");
  const heroPhones = document.querySelector(".hero-phones");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        heroContent.classList.add("animate");
        heroPhones.classList.add("animate");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  observer.observe(heroContent);
});
