// ==== Carrusel ====
const track = document.querySelector('.carousel-track');
const prevButton = document.getElementById('prevBtn');
const nextButton = document.getElementById('nextBtn');
const cards = track ? Array.from(track.children) : [];
let currentIndex = 0;

// Calcula el ancho de una tarjeta después de que las imágenes carguen
function getCardWidth() {
  if (cards.length === 0) return 0;
  return cards[0].getBoundingClientRect().width + 16; // + gap
}

function moveToSlide(index) {
  const cardWidth = getCardWidth();
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

// Botones de navegación
if (prevButton) prevButton.addEventListener('click', () => moveToSlide(currentIndex - 1));
if (nextButton) nextButton.addEventListener('click', () => moveToSlide(currentIndex + 1));

// Autoplay cada 5 segundos
if (cards.length > 0) {
  setInterval(() => moveToSlide(currentIndex + 1), 5000);
}

// ==== Barra de progreso de scroll ====
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  const progressBar = document.getElementById('progress-bar');
  if (progressBar) {
    progressBar.style.width = `${scrollPercent}%`;
  }
});
