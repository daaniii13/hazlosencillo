// Animaciones sutiles para hacer la lectura más atractiva
// - Revelado de secciones al hacer scroll
// - Efecto de 'teclado' en el título al cargar
// - Microinteracciones en enlaces

document.addEventListener('DOMContentLoaded', function(){
  // Nav toggle (hamburger)
  const navToggle = document.querySelector('.nav-toggle');
  const primaryNav = document.getElementById('primary-navigation');
  if(navToggle && primaryNav){
    navToggle.addEventListener('click', ()=>{
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      primaryNav.style.display = expanded ? '' : 'flex';
    });
    // ensure responsive behavior on resize
    window.addEventListener('resize', ()=>{
      if(window.innerWidth > 900){
        primaryNav.style.display = '';
        navToggle.setAttribute('aria-expanded', 'false');
      } else {
        primaryNav.style.display = 'none';
      }
    });
    // initial state for small screens
    if(window.innerWidth <= 900) primaryNav.style.display = 'none';
  }

  // Efecto de escritura rápida en el título
  const title = document.querySelector('.site-hero h1');
  if(title){
    const text = title.textContent;
    title.textContent = '';
    let i = 0;
    const speed = 25;
    const typer = setInterval(()=>{
      title.textContent += text[i++] || '';
      if(i > text.length){
        clearInterval(typer);
      }
    }, speed);
  }

  // Scroll reveal usando IntersectionObserver
  const revealElements = document.querySelectorAll('.reveal, section, .aside-card');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
        // para que no vuelva a activarse repetidamente
        io.unobserve(entry.target);
      }
    });
  }, {threshold:0.12});

  revealElements.forEach(el=> io.observe(el));

  // Efectos en enlaces de la navegación superior
  const navLinks = document.querySelectorAll('.topnav .nav-links a');
  navLinks.forEach(a=>{
    a.addEventListener('mouseenter', ()=> a.animate([
      {transform:'translateY(0) scale(1)', opacity:1},
      {transform:'translateY(-6px) scale(1.02)', opacity:1}
    ], {duration:220, fill:'forwards', easing:'cubic-bezier(.2,.9,.2,1)'}));
  });

  // Smooth scrolling for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });

});
