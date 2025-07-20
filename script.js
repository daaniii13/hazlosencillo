// Carrusel
const track = document.querySelector('.carousel-track');
const prevButton = document.getElementById('prevBtn');
const nextButton = document.getElementById('nextBtn');
const cards = track ? Array.from(track.children) : [];
const cardWidth = cards.length > 0 ? cards[0].getBoundingClientRect().width + 16 : 0;

let currentIndex = 0;

function moveToSlide(index) {
  if (!track || cardWidth === 0) return;

  if (index < 0) {
    currentIndex = cards.length - 1;
  } else if (index >= cards.length) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

if (prevButton) prevButton.addEventListener('click', () => moveToSlide(currentIndex - 1));
if (nextButton) nextButton.addEventListener('click', () => moveToSlide(currentIndex + 1));

// Auto-play cada 5 segundos
if (cards.length > 0) {
  setInterval(() => {
    moveToSlide(currentIndex + 1);
  }, 5000);
}

// Barra de progreso scroll
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  const progressBar = document.getElementById('progress-bar');
  progressBar.style.height = scrollPercent + '%';
});

