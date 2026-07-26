// =====================
// ELEMENTOS GLOBALES
// =====================
window.currentStudent = null;
const videosNormales = document.getElementById('videos');
const pillNav = document.getElementById('pillNav');

const onboardVideoBg = document.querySelector('.onboard-video-bg');
const onboardDim = document.querySelector('.onboard-dim-overlay');
const onboardContent = document.querySelector('.onboard-content');
const loginCardGlass = document.querySelector('.login-card-glass');
const btnContinuar = document.getElementById('btnContinuar');
const studentMenu = document.querySelector('.student-menu');

function getIconItems() {
  return Array.from(document.querySelectorAll('.icon-item'));
}

// =====================
// CONTROL MENÚ ESTUDIANTE (solo UI)
// =====================
function openStudentMenu() {
  studentMenu?.classList.add('show');
}

function closeStudentMenu() {
  studentMenu?.classList.remove('show');
}

// =====================
// ESTADO ONBOARDING
// =====================
let selectedRole = null;
let originalCardHTML = null;

// =====================
// INIT ONBOARDING
// =====================
function initOnboarding() {
  // ⚠️ BYPASS DE DESARROLLO
  if (localStorage.getItem('skipOnboarding') === 'true') {
    cerrarOnboarding();
    return;
  }

  if (!loginCardGlass || !btnContinuar) return;

  originalCardHTML = loginCardGlass.innerHTML;
  document.body.classList.add('onboarding-activo');

  bindOnboardingEvents();
}

// =====================
// SELECCIÓN DE ROL
// =====================
function bindOnboardingEvents() {
  getIconItems().forEach(icon => {
    icon.onclick = () => {
      selectedRole = icon.dataset.role;
      markSelected(icon);
    };
  });

  const btn = document.getElementById('btnContinuar');
  if (btn) btn.onclick = ejecutarContinuar;
}

function markSelected(iconEl) {
  getIconItems().forEach(it =>
    it.querySelector('.pill')?.classList.remove('selected')
  );
  iconEl.querySelector('.pill')?.classList.add('selected');
}

function restoreOnboarding() {
  loginCardGlass.innerHTML = originalCardHTML;
  selectedRole = null;
  bindOnboardingEvents();
}

// =====================
// SALIR DEL ONBOARDING (usado por todos los flujos que terminan)
// =====================
function cerrarOnboarding() {
  document.body.classList.remove('onboarding-activo');
  onboardVideoBg?.style.setProperty('display', 'none');
  onboardDim?.style.setProperty('display', 'none');
  onboardContent?.style.setProperty('display', 'none');
}

// =====================
// FLUJO: VISITANTE
// =====================
function entrarComoVisitante() {
  cerrarOnboarding();
  pillNav?.style.setProperty('display', 'flex');

  if (videosNormales) {
    videosNormales.style.display = 'flex';
    videosNormales.scrollIntoView({ behavior: 'smooth', block: 'start' });
    const video = videosNormales.querySelector('video');
    video && (video.muted = true);
    video?.play().catch(() => { });
  }
}

// =====================
// PORTAL ALUMNO (memanejo ID)
// =====================
function mostrarPortalAlumno() {
  loginCardGlass.innerHTML = `
    <div class="title-wrapper portal-title">
      <div class="card-title"><strong>Aula Virtual</strong></div>
    </div>
    <div class="card-subblock portal-intro">
      <div class="card-text">Inicia sesión con <strong>memanejo ID</strong> para revisar tu progreso, tareas y contenido del curso.</div>
    </div>
    <div class="portal-form">
      <input type="email" id="portalEmail" class="card-input" placeholder="Correo electrónico" />
      <input type="text" id="portalId" class="card-input" placeholder="memanejo ID" />
      <button id="portalIngresar" class="card-btn">Ingresar</button>
      <div id="portalVolver" class="card-back" style="cursor:pointer;">
        <i class="fas fa-arrow-left"></i> Volver
      </div>
    </div>
  `;

  document.getElementById('portalIngresar')?.addEventListener('click', () => {
    const email = document.getElementById('portalEmail')?.value.trim();
    const id = document.getElementById('portalId')?.value.trim();

    if (!email || !id) {
      showError("Completa los datos");
      return;
    }

    const validUser = window.testUsers?.find(u => u.email === email && u.id === id);

    if (!validUser) {
      showError("Datos incorrectos");
      return;
    }

    window.currentStudent = validUser;

setSession({
  nombre: validUser.nombre || "Alumno",
  memanejoId: validUser.id,
  email: validUser.email
});

cerrarOnboarding();

requestAnimationFrame(() => {
  initStudentProgressCircles?.();
  openStudentMenu();
});
});

  document.getElementById('portalVolver')?.addEventListener('click', restoreOnboarding);
}

// =====================
// NUEVO ESTUDIANTE
// =====================
function mostrarNuevoEstudiante() {
  loginCardGlass.innerHTML = `
    <div class="title-wrapper portal-title">
      <div class="card-title"><strong>Crea tu memanejo ID</strong></div>
    </div>
    <div class="card-subblock portal-intro">
      <div class="card-text">Completa tus datos para acceder a contenido gratuito y conocer nuestros cursos.</div>
    </div>
    <div class="portal-form">
      <input type="text" id="nuevoNombre" class="card-input" placeholder="Nombre y Apellido" />
      <input type="email" id="nuevoEmail" class="card-input" placeholder="Correo electrónico" />
      <button id="nuevoCrear" class="card-btn">Comenzar</button>
      <div id="nuevoVolver" class="card-back" style="cursor:pointer;">
        <i class="fas fa-arrow-left"></i> Volver
      </div>
    </div>
  `;

  document.getElementById('nuevoCrear')?.addEventListener('click', () => {
    const nombre = document.getElementById('nuevoNombre')?.value.trim();
    const email = document.getElementById('nuevoEmail')?.value.trim();

    if (!nombre || !email) {
      showError("Completa todos los campos");
      return;
    }

    entrarComoVisitante();
  });

  document.getElementById('nuevoVolver')?.addEventListener('click', restoreOnboarding);
}

// =====================
// CONTINUAR
// =====================
function ejecutarContinuar() {
  if (!selectedRole) {
    showError("Selecciona una opción");
    return;
  }

  if (selectedRole === 'new') {
    mostrarNuevoEstudiante();
  }

  if (selectedRole === 'alumno') {
    mostrarPortalAlumno();
  }
}

// =====================
// UTILIDADES
// =====================
function showError(msg) {
  const old = loginCardGlass.querySelector('.error-msg');
  if (old) old.remove();

  const div = document.createElement('div');
  div.className = 'error-msg';
  div.textContent = msg;
  div.style.color = '#ffb4b4';
  div.style.marginTop = '8px';

  const portalForm = loginCardGlass.querySelector('.portal-form');

  if (portalForm) {
    const inputs = portalForm.querySelectorAll('.card-input');
    const lastInput = inputs[inputs.length - 1];

    if (lastInput) {
      lastInput.insertAdjacentElement('afterend', div);
    } else {
      portalForm.appendChild(div);
    }
  } else {
    loginCardGlass.querySelector('.card-icons')?.after(div);
  }

  setTimeout(() => div.remove(), 4000);
}

// =====================
// INIT
// =====================
document.addEventListener('DOMContentLoaded', initOnboarding);
