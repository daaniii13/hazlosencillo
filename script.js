// Script para mover carrusel

const track = document.querySelector('.carousel-track');
const prevButton = document.getElementById('prevBtn');
const nextButton = document.getElementById('nextBtn');
const cards = Array.from(track.children);
const cardWidth = cards[0].getBoundingClientRect().width + 16; // ancho + gap 1rem=16px

let currentIndex = 0;

function moveToSlide(index) {
  if (index < 0) {
    currentIndex = cards.length - 1;
  } else if (index >= cards.length) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }
  track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

prevButton.addEventListener('click', () => {
  moveToSlide(currentIndex - 1);
});

nextButton.addEventListener('click', () => {
  moveToSlide(currentIndex + 1);
});

// Auto-play cada 5 segundos
setInterval(() => {
  moveToSlide(currentIndex + 1);
}, 5000);
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  const progressBar = document.getElementById('progress-bar');
  progressBar.style.width = scrollPercent + '%';
});
