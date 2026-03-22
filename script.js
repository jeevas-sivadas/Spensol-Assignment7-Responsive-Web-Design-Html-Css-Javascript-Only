const hamburger = document.querySelector(".fa-bars");
const navLinks = document.querySelector(".navLinks");
const hero = document.querySelector(".hero");

hamburger.addEventListener("click", function () {
  navLinks.classList.toggle("show");
});

const images = [
  "images/Hero-section1.png",
  "images/Hero-section2.jpg",
  "images/Hero-section3.jpg",
  "images/Hero-section4.jpg",
];

let index = 0;

function changeBackground() {
  hero.style.backgroundImage = `url(${images[index]})`;
  index++;

  if (index === images.length) {
    index = 0;
  }
}

setInterval(changeBackground, 5000);

const slider = document.getElementById("vehicles-slider");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const cards = document.querySelectorAll(".vehicles__card");
let currentIndex = 0;
const totalCards = cards.length;

function updateSlider() {
  const cardWidth = cards[0].offsetWidth + 20; // + gap
  slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % totalCards;
  updateSlider();
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + totalCards) % totalCards;
  updateSlider();
});

// Touch/swipe support
let startX = 0;
let currentX = 0;

slider.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

slider.addEventListener("touchmove", (e) => {
  currentX = e.touches[0].clientX;
});

slider.addEventListener("touchend", () => {
  if (startX - currentX > 50) {
    // Swipe left
    currentIndex = (currentIndex + 1) % totalCards;
  } else if (currentX - startX > 50) {
    // Swipe right
    currentIndex = (currentIndex - 1 + totalCards) % totalCards;
  }
  updateSlider();
});
