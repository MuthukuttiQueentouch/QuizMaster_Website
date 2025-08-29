document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // 👉 Animate feature-text children stagger
          if (entry.target.classList.contains("feature-text")) {
            const children = entry.target.querySelectorAll("h2, p, a");
            children.forEach((child, index) => {
              setTimeout(() => {
                child.classList.add("animate-show");
              }, index * 200);
            });
          } 
          // 👉 Animate feature-image
          else if (entry.target.classList.contains("feature-image-wrapper")) {
            entry.target.classList.add("scale-show");
          }
        } else {
          // 👉 Reset when out of view (so animation can replay)
          if (entry.target.classList.contains("feature-text")) {
            const children = entry.target.querySelectorAll("h2, p, a");
            children.forEach((child) => {
              child.classList.remove("animate-show");
            });
          } else if (entry.target.classList.contains("feature-image-wrapper")) {
            entry.target.classList.remove("scale-show");
          }
        }
      });
    },
    { threshold: 0.3 }
  );

  // Select elements
  const texts = document.querySelectorAll(".feature-text");
  const images = document.querySelectorAll(".feature-image-wrapper");

  // Initial hidden state
  texts.forEach((el) => {
    const children = el.querySelectorAll("h2, p, a");
    children.forEach((child) => child.classList.add("animate-hidden"));
    observer.observe(el);
  });

  images.forEach((el) => {
    el.classList.add("scale-hidden");
    observer.observe(el);
  });
});
