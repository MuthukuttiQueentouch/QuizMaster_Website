document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // phone
          if (entry.target.classList.contains("overview-phone")) {
            entry.target.classList.add("ovw-phone-show");
          } else {
            entry.target.classList.add("ovw-show");
          }
        } else {
          // Element exit aana podhum reset panna
          if (entry.target.classList.contains("overview-phone")) {
            entry.target.classList.remove("ovw-phone-show");
          } else {
            entry.target.classList.remove("ovw-show");
          }
        }
      });
    },
    { threshold: 0.2 }
  );

  // Phone animation
  const phone = document.querySelector(".overview-phone");
  if (phone) {
    phone.classList.add("ovw-phone-hidden");
    observer.observe(phone);
  }

  // Features animation (badges + text)
  const features = document.querySelectorAll(".overview-feature");
  features.forEach((el, i) => {
    el.classList.add("ovw-hidden");
    setTimeout(() => observer.observe(el), i * 200);
  });
});
