const items = document.querySelectorAll(".screenshot-item");
const prevBtn = document.querySelector(".slider-nav.prev");
const nextBtn = document.querySelector(".slider-nav.next");

let current = 0;

function updateUI() {
  items.forEach((item, index) => {
    item.classList.remove("center", "left", "right");
    item.style.display = "none";
  });

  // indexes
  const left = (current - 1 + items.length) % items.length;
  const center = current;
  const right = (current + 1) % items.length;

  // show 3
  items[left].style.display = "block";
  items[center].style.display = "block";
  items[right].style.display = "block";

  // add classes for styling/animation
  items[left].classList.add("left");
  items[center].classList.add("center");
  items[right].classList.add("right");
}

// navigation
nextBtn.addEventListener("click", () => {
  current = (current + 1) % items.length;
  updateUI();
});

prevBtn.addEventListener("click", () => {
  current = (current - 1 + items.length) % items.length;
  updateUI();
});

// swipe support
let startX = 0;
document.querySelector(".screenshots-slider").addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});
document.querySelector(".screenshots-slider").addEventListener("touchend", e => {
  let endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) {
    current = (current + 1) % items.length;
    updateUI();
  } else if (endX - startX > 50) {
    current = (current - 1 + items.length) % items.length;
    updateUI();
  }
});

// init
updateUI();
