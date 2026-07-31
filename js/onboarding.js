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
  <div class="card-plus">
    <div class="title-wrapper portal-title">
      <div class="card-title card-plus-title"><strong>memanejo +</strong></div>
    </div>

    <div class="card-subblock portal-intro">
      <div class="card-text card-plus-text">
        Prepárate con <strong>quiz ilimitados</strong>, accede a tu progreso, mide tu rendimiento en ranking nacional y más.
      </div>
    </div>

    <div class="portal-form">
      <input type="text" id="portalNombre" class="card-input" placeholder="Nombre" />
      <input type="text" id="portalApellido" class="card-input" placeholder="Apellido" />
      <input type="email" id="portalEmail" class="card-input" placeholder="Correo electrónico" />

      <button id="portalIngresar" class="card-btn">
        <strong>Crear memanejo ID</strong>
      </button>

      <div class="card-sub-text">
        Recibirás tu <strong>memanejo ID</strong> para acceder a la plataforma directo en tu correo.
      </div>

      <div id="portalVolver" class="card-back" style="cursor:pointer;">
        <i class="fas fa-arrow-left"></i> Volver
      </div>
    </div>
  </div>
  `;

  document.getElementById('portalIngresar')?.addEventListener('click', () => {
    const nombre = document.getElementById('portalNombre')?.value.trim();
    const apellido = document.getElementById('portalApellido')?.value.trim();
    const email = document.getElementById('portalEmail')?.value.trim();

    if (!nombre || !apellido || !email) {
      showError("Completa todos los campos");
      return;
    }

    const memanejoId = generarMemanejoId(nombre, apellido);
    const nuevoUsuario = { email, id: memanejoId, nombre: `${nombre} ${apellido}` };

    // Guarda el nuevo usuario junto a los de prueba, para que el login lo reconozca
    const registrados = JSON.parse(localStorage.getItem('usuariosRegistrados') || '[]');
    registrados.push(nuevoUsuario);
    localStorage.setItem('usuariosRegistrados', JSON.stringify(registrados));
    window.testUsers.push(nuevoUsuario);

    enviarMemanejoIdPorCorreo(nombre, email, memanejoId);

loginCardGlass.innerHTML = `
  <div class="card-plus">
    <div class="card-title card-plus-title"><strong>¡Listo!</strong></div>
    <div class="card-text card-plus-text" style="margin-top:16px;">
      Enviamos tu <strong>memanejo ID</strong> a <strong>${email}</strong>.<br>
      Revisa tu correo (y la carpeta de spam) para obtenerlo.
    </div>

    <button id="btnYaTengoId" class="card-btn card-btn-wide" style="margin-top:20px;">
  Ya tengo mi <strong>memanejo ID</strong>
</button>
  </div>
`;

document.getElementById('btnYaTengoId')?.addEventListener('click', () => {
  cerrarOnboarding();

  const pillStudent = document.querySelector('.pill-student');
  pillStudent?.classList.add('visible');

  requestAnimationFrame(() => {
    openStudentMenu();
  });
});

document.getElementById('portalVolverFinal')?.addEventListener('click', restoreOnboarding);
  });

  document.getElementById('portalVolver')?.addEventListener('click', restoreOnboarding);
}

// ===== Generador de memanejo ID =====
function generarMemanejoId(nombre, apellido) {
  const inicialNombre = nombre.charAt(0).toUpperCase();
  const inicialApellido = apellido.charAt(0).toUpperCase();
  const numero = Math.floor(1000 + Math.random() * 9000); // 4 dígitos
  return `MM${inicialNombre}${inicialApellido}${numero}`;
}

// ===== Envío del ID por correo (EmailJS) =====
function enviarMemanejoIdPorCorreo(nombre, email, memanejoId) {
  emailjs.send("service_ijgm7ie", "template_s6jxj1h", {
    nombre: nombre,
    correo: email,
    memanejo_id: memanejoId
  }).then(() => {
    console.log("memanejo ID enviado correctamente");
  }).catch(err => {
    console.error("Error enviando memanejo ID:", err);
  });
}

// =====================
// NUEVO ESTUDIANTE
// =====================
function mostrarNuevoEstudiante() {
  loginCardGlass.innerHTML = `
    <div class="title-wrapper portal-title">
      <div class="card-title"><strong>¡Hola Visitante!</strong></div>
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
// Click fuera 
document.addEventListener('click', (e) => {
    const menu = document.querySelector('.student-menu');
    const boton = document.querySelector('.pill-student');

    if (!menu || !menu.classList.contains('show')) return;

    const clickDentroDelMenu = menu.contains(e.target);
    const clickEnElBoton = boton?.contains(e.target);

    if (!clickDentroDelMenu && !clickEnElBoton) {
        menu.classList.remove('show');
    }
});

// =====================
// INIT
// =====================
document.addEventListener('DOMContentLoaded', initOnboarding);
