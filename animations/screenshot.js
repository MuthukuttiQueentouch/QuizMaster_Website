const items = document.querySelectorAll(".screenshot-item");
let current = 0;

function updateScreenshots() {
  items.forEach((item, index) => {
    item.classList.remove("center", "left", "right", "hidden");
    item.classList.add("hidden");
  });

  const left = (current - 1 + items.length) % items.length;
  const center = current;
  const right = (current + 1) % items.length;

  items[left].classList.remove("hidden");
  items[left].classList.add("left");

  items[center].classList.remove("hidden");
  items[center].classList.add("center");

  items[right].classList.remove("hidden");
  items[right].classList.add("right");
}

// Buttons
document.querySelector(".slider-nav.next").addEventListener("click", () => {
  current = (current + 1) % items.length;
  updateScreenshots();
});
document.querySelector(".slider-nav.prev").addEventListener("click", () => {
  current = (current - 1 + items.length) % items.length;
  updateScreenshots();
});

// init
updateScreenshots();
