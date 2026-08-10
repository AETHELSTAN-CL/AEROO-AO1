// =====================
// MAIN JS UNIFICADO
// =====================
document.addEventListener('DOMContentLoaded', () => {
  // ===== AOS =====
  if (window.AOS) AOS.init({ once: true });

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

  // ===== SELECCIÓN DE ROL (onboarding) =====
  const items = document.querySelectorAll(".icon-item");

  if (items.length > 0) {
    let selected = null;

    items.forEach(item => {
      item.addEventListener("click", () => {
        if (selected) selected.classList.remove("selected");
        item.classList.add("selected");
        selected = item;
      });
    });
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

  // === Icon select scale + blue + auto-reset ===
  pillItems.forEach(item => {
    item.addEventListener("click", () => {
      const icon = item.querySelector("i");
      if (!icon) return;

      pillItems.forEach(i =>
        i.querySelector("i")?.classList.remove("active-effect")
      );

      icon.classList.add("active-effect");

      setTimeout(() => {
        icon.classList.remove("active-effect");
      }, 1800);
    });
  });



  // =====================
  // CURSO-ACCORDION
  // =====================
  document.addEventListener('click', e => {
    let btn = e.target.closest('.curso-btn');
    if (!btn) return;

    let parentRow = btn.closest('.curso-row');
    if (!parentRow) return;

    let accordion = parentRow.nextElementSibling;
    while (accordion && !accordion.classList.contains('curso-accordion')) {
      accordion = accordion.nextElementSibling;
    }
    if (!accordion) return;

    document.querySelectorAll('.curso-accordion').forEach(acc => {
      if (acc !== accordion) {
        acc.classList.remove('active');
        const otroBtn = acc.previousElementSibling?.querySelector('.curso-btn');
        otroBtn?.querySelector('.curso-chevron')?.classList.remove('rotated');
      }
    });

    const isOpening = !accordion.classList.contains('active');
    accordion.classList.toggle('active');
    btn.querySelector('.curso-chevron')?.classList.toggle('rotated', isOpening);

    if (!isOpening) return;

    setTimeout(() => {
      const rowRect = parentRow.getBoundingClientRect();
      const isMobile = window.innerWidth < 768;
      const targetScroll = window.scrollY + rowRect.top - (isMobile ? 50 : 130);
      window.scrollTo({ top: targetScroll, behavior: 'smooth' });
    }, 400);
  });

  // =====================
  // TOOLTIPS
  // =====================
  document.querySelectorAll('.icon-pill').forEach(el => {
    const box = el.querySelector('.tooltip-box');
    if (!box) return;
    box.innerHTML = el.dataset.tooltip || '';

    function showTooltip() {
      const rect = el.getBoundingClientRect();
      box.style.top = `${rect.bottom + 8}px`;
      box.style.left = `${rect.left + rect.width / 2}px`;
      box.style.transform = 'translateX(-50%)';
      box.classList.add('show');
    }

    function hideTooltip() {
      box.classList.remove('show');
    }

    el.addEventListener('mouseenter', () => {
      if (!window.matchMedia('(hover: none)').matches) showTooltip();
    });
    el.addEventListener('mouseleave', hideTooltip);

    el.addEventListener('click', e => {
      e.stopPropagation();
      e.preventDefault();
      if (window.matchMedia('(hover: none)').matches) {
        showTooltip();
        setTimeout(hideTooltip, 1500);
      }
    });
  });

  // ===== HAMBURGER =====
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('header nav');
  hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav?.classList.toggle('show');
  });

  // ===== LIKE COUNT =====
  document.querySelectorAll('.heart-btn').forEach(btn => {
    let likes = 0;
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

  // =====================
  // CHEVRON / TRIÁNGULO: rota al abrir, vuelve al cerrar
  // =====================
  document.querySelectorAll('[data-bs-toggle="collapse"]').forEach(trigger => {
    const icon = trigger.querySelector('i.fa-chevron-down');
    const targetSelector = trigger.getAttribute('data-bs-target');
    const targetEl = targetSelector && document.querySelector(targetSelector);

    if (!icon || !targetEl) return;

    targetEl.addEventListener('show.bs.collapse', () => icon.classList.add('rotated'));
    targetEl.addEventListener('hide.bs.collapse', () => icon.classList.remove('rotated'));
  });

  // ===== NOTIFICACION IOS =====
  let visible = false;
  let tickingNotif = false;

  window.addEventListener("scroll", () => {
    if (tickingNotif) return;
    tickingNotif = true;

    requestAnimationFrame(() => {
      if (!cursosSection) { tickingNotif = false; return; }
      const rect = cursosSection.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight * 0.4 && rect.bottom > window.innerHeight * 0.2;
      if (isVisible && !visible) {
        visible = true;
        notificacion?.classList.add("show");
        setTimeout(() => notificacion?.classList.remove("show"), 7000);
      }
      if (!isVisible) visible = false;
      tickingNotif = false;
    });
  });

});
document.getElementById('btnReferidos')
?.addEventListener('click', () => {

  const session = getSession();

  if (!session) return;


  const nombre = session.nombre;

  const mensaje = encodeURIComponent(
`¡Hola memanejo!. Quiero activar mi código de referido para recomendar la plataforma.

Nombre: ${nombre}
memanejo ID: ${session.memanejoId}`
  );


  window.open(
    `https://wa.me/56946914558?text=${mensaje}`,
    '_blank'
  );

});
// ===== SWIPE UP PARA DESCARTAR NOTIFICACIÓN iOS =====
const notif = document.getElementById("ios-notificacion");

if (notif) {
  let startY = 0;
  let currentY = 0;
  let dragging = false;
  let tickingTouch = false;

  notif.addEventListener("touchstart", (e) => {
    dragging = true;
    startY = e.touches[0].clientY;
    notif.classList.add("swiping");
  });

  notif.addEventListener("touchmove", (e) => {
    if (!dragging) return;
    currentY = e.touches[0].clientY;

    if (tickingTouch) return;
    tickingTouch = true;

    requestAnimationFrame(() => {
      const deltaY = currentY - startY;
      if (deltaY < 0) {
        notif.style.top = `calc(25px + ${deltaY}px)`;
        notif.style.opacity = `${1 + deltaY / 120}`;
      }
      tickingTouch = false;
    });
  });

  notif.addEventListener("touchend", () => {
    if (!dragging) return;
    dragging = false;
    notif.classList.remove("swiping");

    const delta = currentY - startY;

    if (delta < -50) {
      notif.classList.add("hide");
      setTimeout(() => notif.classList.remove("show"), 300);
    } else {
      notif.style.top = "25px";
      notif.style.opacity = "1";
    }
  });
}

document.querySelectorAll('.whatsapp-sub').forEach(btn => {

  btn.addEventListener('click', function(e) {
    e.preventDefault();

    const plan = this.dataset.plan;

    const mensaje = `Hola memanejo, quiero suscribirme al plan ${plan}.`;

    const numero = "56946914558";

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");
  });

});
document.addEventListener('DOMContentLoaded', () => {
  const boton = document.getElementById('btnQuizGameProximamente');
  const modal = document.getElementById('quizGameModal');
  const cerrar = document.getElementById('cerrarQuizGameModal');

  boton?.addEventListener('click', (event) => {
    event.preventDefault();
    modal?.classList.add('abierto');
  });

  cerrar?.addEventListener('click', () => {
    modal?.classList.remove('abierto');
  });

  modal?.addEventListener('click', (event) => {
    if (event.target === modal) modal.classList.remove('abierto');
  });
});
document.querySelectorAll('.footer-toggle')
.forEach(btn => {

  btn.addEventListener('click',()=>{

    const item = btn.parentElement;
    const content = item.querySelector('.footer-content');

    item.classList.toggle('active');

    if(item.classList.contains('active')){
      content.style.maxHeight = content.scrollHeight + "px";
    }else{
      content.style.maxHeight = null;
    }

  });
  });
