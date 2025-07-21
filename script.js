document.addEventListener('DOMContentLoaded', () => {
  // Toggle menu móvil
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('hidden');
  });

  // Dropdown sidebar
  document.querySelectorAll('.dropdown-group .dropdown-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const parent = btn.closest('.dropdown-group');
      parent.classList.toggle('open');
    });
  });

  // Carrusel
  const carousel = document.getElementById('featured-articles');
  document.querySelector('.carousel-prev').addEventListener('click', () => {
    carousel.scrollBy({ left: -300, behavior: 'smooth' });
  });
  document.querySelector('.carousel-next').addEventListener('click', () => {
    carousel.scrollBy({ left: 300, behavior: 'smooth' });
  });

  // Likes clickeables
  document.querySelectorAll('.like-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const span = btn.querySelector('.like-count');
      span.textContent = parseInt(span.textContent) + 1;
      btn.classList.add('liked');
    });
  });
});

