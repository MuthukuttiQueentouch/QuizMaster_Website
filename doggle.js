const navToggle = document.querySelector(".mobile-nav-toggle");
const mainNav = document.querySelector(".main-nav");

navToggle.addEventListener("click", () => {
  mainNav.classList.toggle("active");
  navToggle.classList.toggle("open");
});
