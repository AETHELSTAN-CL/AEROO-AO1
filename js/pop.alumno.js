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


const items = document.querySelectorAll(".icon-item");

if (items.length > 0) {
  let selected = null;

  items.forEach(item => {
    item.addEventListener("click", () => {

      // quitar anterior
      if (selected) selected.classList.remove("selected");

      // activar nuevo
      item.classList.add("selected");
      selected = item;

      console.log("seleccionado:", item.dataset.role);
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
// ===== LÓGICA DE RESEÑA CON OPCIÓN ANÓNIMA =====
const reviewForm = document.getElementById('reviewForm');
const reviewResult = document.getElementById('reviewResult');
const submittedEmail = document.getElementById('submittedEmail');
const submittedText = document.getElementById('submittedText');

const anonCheck = document.getElementById('reviewAnon');
const nameGroup = document.getElementById('nameGroup');
const emailGroup = document.getElementById('emailGroup');

// Ocultar/mostrar inputs según modo anónimo
anonCheck.addEventListener('change', () => {
  if (anonCheck.checked) {
    nameGroup.style.display = "none";
    emailGroup.style.display = "none";
  } else {
    nameGroup.style.display = "block";
    emailGroup.style.display = "block";
  }
});

reviewForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const anon = anonCheck.checked;
  const email = document.getElementById('reviewEmail').value.trim();
  const name = document.getElementById('reviewName').value.trim();
  const text = document.getElementById('reviewText').value.trim();

  if (!text) {
    alert("Escribe tu comentario antes de enviar.");
    return;
  }

  if (!anon && !email) {
    alert("Ingresa tu correo o marca 'Enviar como anónimo'.");
    return;
  }

  const finalName = anon ? "Anónimo" : (name || email);

  submittedEmail.textContent = finalName;
  submittedText.textContent = text;
  reviewResult.style.display = "block";

  reviewForm.reset();
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

  // Alterna el actual y cierra los demás
  document.querySelectorAll('.curso-accordion').forEach(acc => {
    if (acc !== accordion) acc.classList.remove('active');
  });

  const isOpening = !accordion.classList.contains('active');
  accordion.classList.toggle('active');

  if (!isOpening) return; // si se está cerrando, no hacemos scroll

  // Esperamos a que termine la transición de max-height (0.4s en el CSS)
  setTimeout(() => {
    const rowRect = parentRow.getBoundingClientRect();
    const isMobile = window.innerWidth < 768;

    // Siempre alineamos arriba: el título/botón presionado queda en el top,
    // con un margen fijo para que no quede pegado al borde de la pantalla
    const targetScroll = window.scrollY + rowRect.top - (isMobile ? 50 : 130);

    window.scrollTo({ top: targetScroll, behavior: 'smooth' });
  }, 400); // debe calzar con transition: max-height 0.4s del CSS
});

// =====================
// TOOLTIP RESPONSIVO EN ICON-PILL
// =====================
document.querySelectorAll('.icon-pill').forEach(el => {
  // Hover en escritorio
  el.addEventListener('mouseenter', e => {
    if (!window.matchMedia('(hover: none)').matches && e.target === el) {
      el.classList.add('show-tooltip');
    }
  });
  el.addEventListener('mouseleave', e => {
    if (e.target === el) el.classList.remove('show-tooltip');
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

// =====================
// BLOQUEA CLIC EN EL PILL
// =====================
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

// =====================
// BASE DE CÓDIGOS → solo desbloquean su producto exacto
// =====================
const codigosValidos = {
  "MEMANEJOID001": "resumen1y2",
  "MEMANEJOID002": "resumen3y4",
  "MEMANEJOID003": "nivelacion30",
  "MEMANEJOID004": "clasesguiadas",
  "MEMANEJOID005": "intermedio35",
  "MEMANEJOID006": "intermedio105",
  "MEMANEJOID007": "resumen5y8",
  "MEMANEJOID008": "quiz_dificil",
  "MEMANEJOID009": "resumen5y8",
  "MEMANEJOID0010": "quiz_210"
};

let itemActual = null;

function norm(s) {
  return (s || "").toString().trim().toLowerCase();
}

// =====================
// ABRIR MODAL
// =====================
document.querySelectorAll(".open-modal").forEach(btn => {
  btn.addEventListener("click", e => {
    const wrapper = btn.closest(".icon-wrapper");
    const pill = wrapper.querySelector(".icon-pill");

    // Ya desbloqueado → NO abrir modal
    if (norm(pill.innerText) === "descargar" || wrapper.dataset.unlocked === "true") {
      return;
    }

    e.preventDefault();

    itemActual = norm(wrapper.getAttribute("data-item-id"));

    const textoContenido = wrapper.querySelector(".icon-text").innerText;
    document.getElementById("solicitarCodigo").href =
      `https://wa.me/56946914558?text=Hola, quiero solicitar el código para: ${encodeURIComponent(textoContenido)}`;

    document.getElementById("modalCodigo").style.display = "flex";
  });
});

// =====================
// VALIDAR CÓDIGO
// =====================
document.getElementById("btnValidarCodigo").addEventListener("click", () => {
  const input = document.getElementById("codigoInput").value.trim().toUpperCase();
  const msj = document.getElementById("mensajeEstado");

  const codigoValidoPara = codigosValidos[input];

  if (!codigoValidoPara) {
    msj.innerText = "Código incorrecto.";
    msj.style.color = "red";
    return;
  }

  // Debe coincidir EXACTO con el producto que está intentando desbloquear
  if (norm(codigoValidoPara) !== itemActual) {
    msj.innerText = "Este código no corresponde a este contenido.";
    msj.style.color = "orange";
    return;
  }

  // Si coincide...
  msj.innerText = "Código válido. Contenido desbloqueado.";
  msj.style.color = "#25D366";

  const wrapper = Array.from(document.querySelectorAll(".icon-wrapper"))
    .find(w => norm(w.getAttribute("data-item-id")) === itemActual);

  const pill = wrapper.querySelector(".icon-pill");
  const link = wrapper.querySelector(".icon-link");
  const actionType = wrapper.dataset.actionType || "download"; // fallback

  // Cambiar texto y tooltip según tipo
  if (actionType === "download") {
    pill.innerText = "Descargar";
    pill.setAttribute("data-tooltip", "¡Listo para descargar!");
  } else if (actionType === "quiz") {
    pill.innerText = "Realizar";
    pill.setAttribute("data-tooltip", "Haz clic para comenzar el quiz");
  }

  // Marcar desbloqueado
  wrapper.dataset.unlocked = "true";

  // Habilitar enlace
  link.href = wrapper.dataset.download || "#";
  link.target = "_blank";

  // cerrar modal
  setTimeout(() => {
    document.getElementById("modalCodigo").style.display = "none";
    document.getElementById("codigoInput").value = "";
    msj.innerText = "";
  }, 600);
});

// =====================
// CERRAR MODAL
// =====================
document.querySelector(".close-modal").addEventListener("click", () => {
  document.getElementById("modalCodigo").style.display = "none";
});

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
});