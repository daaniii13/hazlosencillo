// Animaciones sutiles para hacer la lectura más atractiva
// - Revelado de secciones al hacer scroll
// - Efecto de 'teclado' en el título al cargar
// - Microinteracciones en enlaces

document.addEventListener('DOMContentLoaded', function(){
  // Nav toggle (hamburger)
  const navToggle = document.querySelector('.nav-toggle');
  const primaryNav = document.getElementById('primary-navigation');
  if(navToggle && primaryNav){
    // Use classes to toggle visibility so CSS handles layout
    navToggle.addEventListener('click', ()=>{
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      primaryNav.classList.toggle('open');
      navToggle.classList.toggle('open');
      // aria-hidden for assistive tech
      primaryNav.setAttribute('aria-hidden', String(expanded));
    });

    // ensure responsive behavior on resize but preserve user's choice when possible
    let lastWidth = window.innerWidth;
    window.addEventListener('resize', ()=>{
      // if we cross the 900px threshold, reset mobile nav state so desktop shows inline navigation
      if(lastWidth <= 900 && window.innerWidth > 900){
        primaryNav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        primaryNav.removeAttribute('aria-hidden');
      }
      // when going to small screens, keep it closed by default (user can open)
      if(lastWidth > 900 && window.innerWidth <= 900){
        primaryNav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        primaryNav.setAttribute('aria-hidden', 'true');
      }
      lastWidth = window.innerWidth;
    });

    // initial state for small screens
    if(window.innerWidth <= 900){
      primaryNav.classList.remove('open');
      primaryNav.setAttribute('aria-hidden', 'true');
    }
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
