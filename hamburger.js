const mobileToggle = document.querySelector(".mobile-nav-toggle");
const mainNav = document.querySelector(".main-nav");

mobileToggle.addEventListener("click", () => {
  mobileToggle.classList.toggle("open");
  mainNav.classList.toggle("active");
});

// Close menu when link tapped
document.querySelectorAll(".main-nav a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("active");
    mobileToggle.classList.remove("open");
  });
});
