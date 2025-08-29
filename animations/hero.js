document.addEventListener("DOMContentLoaded", () => {
  const heroContent = document.querySelector(".hero-content");
  const heroPhones = document.querySelector(".hero-phones");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        heroContent.classList.add("animate");
        heroPhones.classList.add("animate");
      } else {
        // Section veliya poita na animation reset pannidala
        heroContent.classList.remove("animate");
        heroPhones.classList.remove("animate");
      }
    });
  }, { threshold: 0.3 });

  observer.observe(heroContent);
});
