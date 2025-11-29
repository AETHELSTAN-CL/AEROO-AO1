// =====================
// MAIN JS UNIFICADO
// =====================
document.addEventListener('DOMContentLoaded', () => {
  // ===== AOS =====
  if (window.AOS) AOS.init();

  // ===== ELEMENTOS =====

  const videosNormales = document.getElementById('videos');
  const pillNav = document.getElementById('pillNav');
  const pillItems = Array.from(document.querySelectorAll('.pill-item'));
  const onboardVideoBg = document.querySelector('.onboard-video-bg');
  const onboardBlur = document.querySelector('.onboard-blur-full');
  const onboardContent = document.querySelector('.onboard-content');
  const iconItems = Array.from(document.querySelectorAll('.icon-item'));
  const btnContinuar = document.getElementById('btnContinuar');
  const cursosSection = document.getElementById("cursos-section");
  const notificacion = document.getElementById("ios-notificacion");
  const btnEntendido = document.getElementById("btn-entendido");
  

  if (onboardContent && btnContinuar) {
    const originalOnboardHTML = onboardContent.innerHTML;
    let selectedRole = null;

    function markSelected(iconEl) {
      iconItems.forEach(it => it.querySelector('.pill')?.classList.remove('selected'));
      iconEl.querySelector('.pill')?.classList.add('selected');
    }

    iconItems.forEach(icon => {
      icon.addEventListener('click', () => {
        selectedRole = icon.dataset.role;
        markSelected(icon);
      });
    });

    function entrarComoVisitante() {
      onboardVideoBg && (onboardVideoBg.style.display = 'none');
      onboardBlur && (onboardBlur.style.display = 'none');
      onboardContent && (onboardContent.style.display = 'none');
      pillNav && (pillNav.style.display = 'flex');
      if (videosSection) {
        videosSection.style.display = 'flex';
        videosSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        document.body.style.overflow = 'auto';
        const primerVideo = videosSection.querySelector('video');
        primerVideo && (primerVideo.muted = true, primerVideo.play().catch(() => { }));
      }
    }

function mostrarPortalAlumno() {
  // Oculta el blur general del onboarding
  onboardBlur && (onboardBlur.style.display = 'none');

  // Contenedor con overlay tipo linear-gradient
  onboardContent.innerHTML = `
    <div class="portal-overlay-aula">
      <div class="title-wrapper-aula">
        <div class="card-title-aula fw-bold">Aula Estudiante</div>
      </div>
      <div class="card-subblock-aula portal-intro-aula">
        <div class="card-text">Accede al contenido completo. Ingresa a tu cuenta Estudiante ID </div>
      </div>
      <div class="portal-form">
        <input type="email" id="portalEmail" class="card-input" placeholder="Ingresa tu correo de acceso" />
        <input type="text" id="portalId" class="card-input" placeholder="Código memanejo ID" />
        <button id="portalIngresar" class="card-btn">Ingresar</button>
        <div id="portalVolver" class="card-back" style="cursor:pointer;">
          <i class="fas fa-arrow-left"></i> Volver
        </div>
      </div>
    </div>
  `;

  const portalIngresar = document.getElementById('portalIngresar');
  const portalVolver = document.getElementById('portalVolver');

  portalIngresar?.addEventListener('click', () => {
    const email = document.getElementById('portalEmail')?.value.trim();
    const id = document.getElementById('portalId')?.value.trim();
    if (!email || !id) {
      const e = document.createElement('div');
      e.className = 'error-msg';
      e.textContent = 'Primero, ingresa a tu Aula Virtual con memanejo ID';
      e.style.color = 'red';
      e.style.marginBottom = '8px';
      const prev = onboardContent.querySelector('.error-msg');
      if (prev) prev.remove();
      onboardContent.querySelector('.portal-form')?.appendChild(e);
      return;
    }
    entrarComoVisitante();
  });

  portalVolver?.addEventListener('click', () => {
    onboardContent.innerHTML = originalOnboardHTML;
    reattachOnboardHandlers();
    onboardBlur && (onboardBlur.style.display = ''); // Restablece blur al volver
  });
}

    function ejecutarContinuar() {
      if (!selectedRole) {
        const prev = onboardContent.querySelector('.error-msg'); if (prev) prev.remove();
        const msg = document.createElement('div'); msg.className = 'error-msg';
        msg.textContent = 'memanejo ID para desbloquear todo el contenido o selecciona Visitante';
        msg.style.color = '#e7e7e7ff'; msg.style.marginTop = '8px';
        onboardContent.querySelector('.card-icons')?.after(msg);
        setTimeout(() => msg.remove(), 3000);
        return;
      }
      selectedRole === 'visitante' ? entrarComoVisitante() : mostrarPortalAlumno();
    }

    btnContinuar.addEventListener('click', ejecutarContinuar);

    function reattachOnboardHandlers() {
      const newIconItems = Array.from(document.querySelectorAll('.icon-item'));
      const newBtn = document.getElementById('btnContinuar');
      selectedRole = null;
      newIconItems.forEach(icon => {
        icon.addEventListener('click', () => {
          selectedRole = icon.dataset.role;
          document.querySelectorAll('.pill').forEach(p => p.classList.remove('selected'));
          icon.querySelector('.pill')?.classList.add('selected');
        });
      });
      if (newBtn) newBtn.addEventListener('click', ejecutarContinuar);
    }
  }


// === SHOW PILL NAV ON SCROLL (MOBILE ONLY) ===
document.addEventListener("scroll", () => {
  const pill = document.getElementById("pillNav");

  if (!pill) return;

  if (window.innerWidth > 768) {
    pill.classList.remove("visible");
    return;
  }

  if (window.scrollY > 50) {
    pill.classList.add("visible");
  } else {
    pill.classList.remove("visible");
  }
});


// === ICON TAP EFFECT (scale + blue + auto-reset) ===
const pillitems = document.querySelectorAll("#pillNav .pill-item");

pillItems.forEach(item => {
  item.addEventListener("click", ev => {
    const icon = item.querySelector("i");
    if (!icon) return;

    // limpiar efectos previos
    pillItems.forEach(i =>
      i.querySelector("i")?.classList.remove("active-effect")
    );

    // aplicar efecto
    icon.classList.add("active-effect");

    // remover efecto después de 1.8s
    setTimeout(() => {
      icon.classList.remove("active-effect");
    }, 1800);
  });
});
// === SHOW STUDENT ICON ON SCROLL (MOBILE ONLY) ===
document.addEventListener("scroll", () => {
  const student = document.querySelector(".pill-student");

  // solo mobile
  if (window.innerWidth > 768) {
    student.classList.remove("visible");
    return;
  }
  // solo intermedias
  if (window.innerWidth > 968) {
    student.classList.remove("visible");
    return;
  }

  if (window.scrollY > 50) {
    student.classList.add("visible");
  } else {
    student.classList.remove("visible");
  }
});



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
document.addEventListener('click', e => {
  const btn = e.target.closest('.curso-btn');
  if (!btn) return;

  const parentRow = btn.closest('.curso-row');
  if (!parentRow) return;

  // Encuentra el siguiente .curso-accordion
  let accordion = parentRow.nextElementSibling;
  while (accordion && !accordion.classList.contains('curso-accordion')) {
    accordion = accordion.nextElementSibling;
  }
  if (!accordion) return;

  // Cierra los demás
  document.querySelectorAll('.curso-accordion').forEach(acc => {
    if (acc !== accordion) acc.classList.remove('active');
  });

  // Alterna el actual
  accordion.classList.toggle('active');

  // Scroll suave
  if (accordion.classList.contains('active')) {
    setTimeout(() => {
      const rect = accordion.getBoundingClientRect();
      const offset = window.scrollY + rect.top - (window.innerWidth < 768 ? 120 : 220);
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }, 200);
  }
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
        setTimeout(() => el.classList.remove('show-tooltip'), 500);
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
        setTimeout(() => pill.classList.remove('active'), 500);
      }
    });
  });

  // ===== NOTIFICACION IOS =====
  let visible = false;
  window.addEventListener("scroll", () => {
    if (!cursosSection) return;
    const rect = cursosSection.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight * 0.4 && rect.bottom > window.innerHeight * 0.2;
    if (isVisible && !visible) {
      visible = true;
      notificacion?.classList.add("show");
      setTimeout(() => notificacion?.classList.remove("show"), 12000);
    }
    if (!isVisible) visible = false;
  });
  btnEntendido?.addEventListener('click', () => notificacion?.classList.remove("show"));
});
// ===== SWIPE UP PARA DESCARTAR NOTIFICACIÓN iOS =====
const notif = document.getElementById("ios-notificacion");

if (notif) {
  let startY = 0;
  let currentY = 0;
  let dragging = false;

  notif.addEventListener("touchstart", (e) => {
    dragging = true;
    startY = e.touches[0].clientY;
    notif.classList.add("swiping");
  });

  notif.addEventListener("touchmove", (e) => {
    if (!dragging) return;

    currentY = e.touches[0].clientY;
    const deltaY = currentY - startY;

    // Solo mover si arrastra hacia arriba
    if (deltaY < 0) {
      notif.style.top = `calc(25px + ${deltaY}px)`;
      notif.style.opacity = `${1 + deltaY / 120}`;
    }
  });

  notif.addEventListener("touchend", () => {
    if (!dragging) return;
    dragging = false;
    notif.classList.remove("swiping");

    const delta = currentY - startY;

    // si arrastró más de -50px → se descarta
    if (delta < -50) {
      notif.classList.add("hide");
      setTimeout(() => notif.classList.remove("show"), 300);
    } else {
      // vuelve suave a su posición original
      notif.style.top = "25px";
      notif.style.opacity = "1";
    }
  });
}

// ===== HAMBURGER =====
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('header nav');
hamburger?.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  nav?.classList.toggle('show');
});
// ===== like count =====
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