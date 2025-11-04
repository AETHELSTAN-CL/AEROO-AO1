// =====================
// MAIN JS UNIFICADO
// =====================
document.addEventListener('DOMContentLoaded', () => {
  // ===== AOS =====
  if (window.AOS) AOS.init();

  // ===== ELEMENTOS =====
  const card = document.getElementById('mobileOnboardingCard');
  const videoFondo = document.getElementById('videoFondo');
  const videosNormales = document.getElementById('videos');
  const pillNav = document.getElementById('pillNav');
  const pillItems = Array.from(document.querySelectorAll('.pill-item'));
  const originalCardContent = card?.innerHTML || '';
  const cursosSection = document.getElementById("cursos-section");
  const notificacion = document.getElementById("ios-notificacion");
  const btnEntendido = document.getElementById("btn-entendido");
if (!card) return;

let selectedRole = null;
let btnContinuar, iconItems, cardHandle;
let onboardingVisible = true;

// ===== FUNCIONES UTILITARIAS =====
const showError = msg => {
  clearError();
  const node = document.createElement('div');
  node.className = 'error-msg';
  node.textContent = msg;
  node.style.color = '#ff0000ff'; // rojo
  node.style.fontSize = '12px';
  node.style.textAlign = 'center';
  node.style.marginTop = '6px';
  card.querySelector('.card-icons')?.after(node);
};

const clearError = () => {
  const e = card.querySelector('.error-msg');
  if (e) e.remove();
};

const initCardNodes = () => {
  btnContinuar = card.querySelector('#btnContinuar');
  iconItems = Array.from(card.querySelectorAll('.icon-item'));
  cardHandle = card.querySelector('.card-handle');
  btnContinuar && (btnContinuar.disabled = false);
};

const closeCard = () => {
  card.style.transition = 'transform 0.36s ease, opacity 0.28s ease';
  card.style.transform = 'translateY(100%)';
  card.style.opacity = '0';
  setTimeout(() => {
    card.style.display = 'none';
    card.style.transform = '';
    card.style.opacity = '';
    document.body.style.overflow = 'auto';
    pillNav && (pillNav.style.display = 'flex');
    onboardingVisible = false;

    // ✅ Al cerrar la card, ocultar video fondo y mostrar los videos normales
    if (videoFondo) videoFondo.style.display = 'none';
    if (videosNormales) {
      videosNormales.style.display = 'flex';
      const primerVideo = videosNormales.querySelector('.video-wrapper.fullwidth:first-child video');
      if (primerVideo) {
        primerVideo.muted = true;
        primerVideo.play().catch(() => console.log('Autoplay bloqueado'));
      }
    }
  }, 0);
};

const mostrarVideos = () => {
  videoFondo && (videoFondo.style.display = 'none');
  card.style.display = 'none';
  videosNormales && (videosNormales.style.display = 'flex');

  const primerVideo = videosNormales?.querySelector('.video-wrapper.fullwidth:first-child video');
  if (primerVideo) {
    primerVideo.muted = true;
    primerVideo.play().catch(() => console.log('Autoplay bloqueado'));
  }
  document.body.style.overflow = 'auto';
  onboardingVisible = false;
};

const showAlumnoPortal = () => {
  pillNav && (pillNav.style.display = 'none');
  card.innerHTML = `
    <div class="card-handle"></div>
    <div class="card-content" style="text-align:center;">
      <h2 class="card-title">Portal Alumno</h2>
      <p class="card-text">Ingresa a tu cuenta o crea una nueva para continuar.</p>
      <button id="btnVolver" class="card-btn">Volver</button>
    </div>
  `;
  initCardNodes();
  attachCardListeners();

  const btnVolver = card.querySelector('#btnVolver');
  btnVolver?.addEventListener('click', () => {
    card.innerHTML = originalCardContent;
    initCardNodes();
    attachCardListeners();
    pillNav && (pillNav.style.display = 'none');
  });
};

// ===== ONBOARDING LISTENERS =====
function attachCardListeners() {
  initCardNodes();
  selectedRole = null;

  // ICONOS
  iconItems.forEach(icon => {
    icon.addEventListener('click', () => {
      selectedRole = icon.dataset.role;
      iconItems.forEach(i => i.querySelector('.pill')?.classList.remove('selected'));
      icon.querySelector('.pill')?.classList.add('selected');
      btnContinuar?.classList.add('active');
      clearError();
    });
  });

  // BOTON CONTINUAR
  btnContinuar?.addEventListener('click', e => {
    e.preventDefault();
    clearError();
    if (!selectedRole) return showError('Selecciona una opción antes de continuar');

    if (selectedRole === 'visitante') mostrarVideos();
    if (selectedRole === 'alumno') showAlumnoPortal();
  });

  // HANDLE DESLIZABLE
  if (cardHandle) {
    let startY = 0, currentY = 0, dragging = false;

    const onTouchStart = ev => {
      if (!ev.touches || !ev.touches[0]) return;
      ev.preventDefault();
      startY = ev.touches[0].clientY;
      dragging = true;
      card.style.transition = 'none';
      document.body.style.overflow = 'hidden';
    };
    const onTouchMove = ev => {
      if (!dragging) return;
      const delta = ev.touches[0].clientY - startY;
      if (delta > 0) {
        currentY = delta;
        card.style.transform = `translateY(${delta}px)`;
        ev.preventDefault();
      }
    };
    const onTouchEnd = () => {
      dragging = false;
      card.style.transition = 'transform 0.32s ease';
      if (currentY > 120) closeCard();
      else card.style.transform = '';
      currentY = 0;
    };

    const onMouseDown = ev => {
      ev.preventDefault();
      startY = ev.clientY;
      dragging = true;
      card.style.transition = 'none';
      document.body.style.overflow = 'hidden';
    };
    const onMouseMove = ev => {
      if (!dragging) return;
      const delta = ev.clientY - startY;
      if (delta > 0) card.style.transform = `translateY(${delta}px)`;
    };
    const onMouseUp = () => {
      if (!dragging) return;
      dragging = false;
      card.style.transition = 'transform 0.32s ease';
      const style = card.style.transform || '';
      const match = style.match(/translateY\(([-\d.]+)px\)/);
      const val = match ? parseFloat(match[1]) : 0;
      if (val > 120) closeCard();
      else card.style.transform = '';
      document.body.style.overflow = 'auto';
    };

    cardHandle.addEventListener('touchstart', onTouchStart, { passive: false });
    cardHandle.addEventListener('touchmove', onTouchMove, { passive: false });
    cardHandle.addEventListener('touchend', onTouchEnd, { passive: false });

    cardHandle.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  }
}
  // ===== PILL NAV =====
  function setupPillNav() {
    if (!pillNav) return;
    pillNav.style.display = 'none';

    pillItems.forEach(item => {
      item.addEventListener('click', ev => {
        ev.preventDefault();
        pillItems.forEach(i => i.querySelector('i')?.classList.remove('selected'));
        item.querySelector('i')?.classList.add('selected');
        setTimeout(() => item.querySelector('i')?.classList.remove('selected'), 2000);

        const href = item.getAttribute('href');
        if (href?.startsWith('#')) {
          const target = document.querySelector(href);
          target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  // ===== INICIALIZAR =====
  card.classList.add('show');
  card.style.display = 'flex';
  card.style.transform = 'translateY(0)';
  card.style.opacity = '1';
  document.body.style.overflow = 'hidden';
  attachCardListeners();
  setupPillNav();


const slider = document.querySelector(".feedback-slider");
const indicators = document.querySelector(".feedback-slider-indicators");

if (slider && indicators) {
  const items = Array.from(slider.querySelectorAll(".feedback-item"));
  const gap = 40;
  let index = 0;
  let dots = [];

  function getVisibleCount() {
    const width = window.innerWidth;
    if (width < 768) return 1;
    if (width < 1200) return 2;
    return 3;
  }

  function buildDots() {
    indicators.innerHTML = "";
    const visible = getVisibleCount();
    const totalDots = Math.max(items.length - visible + 1, 1);
    dots = [];

    for (let i = 0; i < totalDots; i++) {
      const dot = document.createElement("span");
      dot.classList.add("dot");
      if (i === 0) dot.classList.add("active");
      dot.addEventListener("click", () => {
        index = i;
        updateSlider();
      });
      indicators.appendChild(dot);
      dots.push(dot);
    }
  }

  function updateSlider() {
    const cardWidth = items[0].offsetWidth + gap;
    const visible = getVisibleCount();
    const maxIndex = items.length - visible;
    index = Math.max(0, Math.min(index, maxIndex));
    const scrollPosition = index * cardWidth;
    slider.scrollTo({ left: scrollPosition, behavior: "smooth" });
    updateDots();
  }

  function updateDots() {
    dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
  }

  function onScroll() {
    const cardWidth = items[0].offsetWidth + gap;
    const newIndex = Math.round(slider.scrollLeft / cardWidth);
    if (newIndex !== index) {
      index = newIndex;
      updateDots();
    }
  }

  slider.addEventListener("scroll", onScroll);
  window.addEventListener("resize", () => {
    const oldIndex = index;
    buildDots();
    index = Math.min(oldIndex, dots.length - 1);
    updateDots();
  });

  buildDots();
}

// ===== ACORDEÓN CURSOS (solo uno abierto a la vez) =====
document.addEventListener('click', e => {
  const btn = e.target.closest('.curso-btn');
  if (!btn) return;

  const accordion = btn.parentElement.nextElementSibling;
  const allAccordions = document.querySelectorAll('.curso-accordion');

  allAccordions.forEach(acc => {
    if (acc !== accordion) acc.classList.remove('active');
  });

  accordion?.classList.toggle('active');
});

// ===== TOOLTIP RESPONSIVO EN ICON-PILL =====
document.querySelectorAll('.icon-pill').forEach(el => {
  // Hover en escritorio
  el.addEventListener('mouseenter', () => {
    if (!window.matchMedia('(hover: none)').matches) {
      el.classList.add('show-tooltip');
    }
  });
  el.addEventListener('mouseleave', () => {
    el.classList.remove('show-tooltip');
  });

  // Click en móvil
  el.addEventListener('click', e => {
    e.stopPropagation();
    if (window.matchMedia('(hover: none)').matches) {
      // Cierra otros tooltips
      document.querySelectorAll('.icon-pill.show-tooltip').forEach(t => {
        if (t !== el) t.classList.remove('show-tooltip');
      });

      el.classList.toggle('show-tooltip');
      setTimeout(() => el.classList.remove('show-tooltip'), 2500);
    }
  });
});
// ===== BLOQUEA CLIC EN EL PILL =====
document.querySelectorAll('.icon-pill').forEach(pill => {
  pill.addEventListener('click', e => {
    e.stopPropagation();  // evita que el clic suba al .icon-link
    e.preventDefault();   // evita abrir modales o descargas

    // Muestra tooltip en mobile
    if (window.matchMedia('(hover: none)').matches && pill.dataset.tooltip) {
      pill.classList.add('active');
      setTimeout(() => pill.classList.remove('active'), 2000);
    }
  });
});

  // ===== NOTIFICACION IOS =====
  let visible = false;
  window.addEventListener("scroll", () => {
    if(!cursosSection) return;
    const rect = cursosSection.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight*0.4 && rect.bottom > window.innerHeight*0.2;
    if(isVisible && !visible){
      visible = true;
      notificacion?.classList.add("show");
      setTimeout(()=>notificacion?.classList.remove("show"),12000);
    }
    if(!isVisible) visible=false;
  });
  btnEntendido?.addEventListener('click',()=>notificacion?.classList.remove("show"));
});

// ===== HAMBURGER =====
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('header nav');
hamburger?.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  nav?.classList.toggle('show');
});

document.querySelectorAll('.heart-btn').forEach(btn => {
  let likes = 0;
  const icon = btn.querySelector('i');
  const count = btn.querySelector('.like-count');

  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    if (btn.classList.contains('active')) {
      likes++;
    } else {
      likes = Math.max(0, likes - 1);
    }
    count.textContent = `${likes} me gusta`;
  });
});