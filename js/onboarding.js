// =====================
// ELEMENTOS GLOBALES
// =====================
window.currentStudent = null;
const videosNormales = document.getElementById('videos');
const pillNav = document.getElementById('pillNav');

const onboardVideoBg = document.querySelector('.onboard-video-bg');
const onboardBlur = document.querySelector('.onboard-blur-full');
const onboardContent = document.querySelector('.onboard-content');
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
let originalOnboardHTML = null;


// =====================
// INIT ONBOARDING
// =====================
function initOnboarding() {
    if (!onboardContent || !btnContinuar) return;

    originalOnboardHTML = onboardContent.innerHTML;

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

    const btnContinuar = document.getElementById('btnContinuar');

    btnContinuar.onclick = ejecutarContinuar;
}

function restoreOnboarding() {

    onboardContent.innerHTML = originalOnboardHTML;

    onboardContent.style.display = '';
    onboardBlur.style.display = '';
    onboardVideoBg.style.display = '';

    selectedRole = null;

    bindOnboardingEvents();
}

function markSelected(iconEl) {

    getIconItems().forEach(it =>
        it.querySelector('.pill')?.classList.remove('selected')
    );

    iconEl.querySelector('.pill')?.classList.add('selected');
}


// =====================
// FLUJO: VISITANTE
// =====================
function entrarComoVisitante() {
    onboardVideoBg?.style.setProperty('display', 'none');
    onboardBlur?.style.setProperty('display', 'none');
    onboardContent?.style.setProperty('display', 'none');

    pillNav?.style.setProperty('display', 'flex');

    if (videosNormales) {
        videosNormales.style.display = 'flex';
        videosNormales.scrollIntoView({ behavior: 'smooth', block: 'start' });

        document.body.style.overflow = 'auto';

        const video = videosNormales.querySelector('video');
        video?.play().catch(() => {});
        video && (video.muted = true);
    }
}


// =====================
// PORTAL ALUMNO
// =====================
function mostrarPortalAlumno() {
    onboardBlur?.style.setProperty('display', 'none');

    onboardContent.innerHTML = `
        <div class="portal-overlay-aula">
            <div class="title-wrapper-aula">
                <div class="card-title-aula fw-bold">Aula Virtual</div>
            </div>

            <div class="card-subblock-aula portal-intro-aula">
                <div class="card-text">Ingresa a tu cuenta memanejo ID</div>
            </div>

            <div class="portal-form">
                <input type="email" id="portalEmail" class="card-input" placeholder="Correo" />
                <input type="text" id="portalId" class="card-input" placeholder="memanejo ID" />

                <button id="portalIngresar" class="card-btn">Ingresar</button>

                <div id="portalVolver" class="card-back" style="cursor:pointer;">
                    ← Volver
                </div>
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

    // 👇 buscar usuario
    const validUser = window.testUsers?.find(u => u.email === email && u.id === id);

    if (!validUser) {
        showError("Datos incorrectos");
        return;
    }

    // 👇 guardar estado global (demo)
    window.currentStudent = validUser;

    // 👇 cerrar onboarding completo
    onboardVideoBg?.style.setProperty('display', 'none');
    onboardBlur?.style.setProperty('display', 'none');
    onboardContent?.style.setProperty('display', 'none');

    // 👇 entrar directo al dashboard alumno
    initStudentProgressCircles();
    openStudentMenu();
});
document.getElementById('portalVolver')?.addEventListener('click', () => {
    restoreOnboarding();
});
}

// =====================
// NUEVO ESTUDIANTE
// =====================
function mostrarNuevoEstudiante() {
    onboardBlur?.style.setProperty('display', 'none');

    onboardContent.innerHTML = `
        <div class="portal-overlay-aula">
            <div class="title-wrapper-aula">
                <div class="card-title-aula fw-bold">Nuevo Estudiante</div>
            </div>

            <div class="portal-form">
                <input type="text" id="nuevoNombre" class="card-input" placeholder="Nombre" />
                <input type="email" id="nuevoEmail" class="card-input" placeholder="Email" />

                <button id="nuevoCrear" class="card-btn">Crear</button>

                <div id="nuevoVolver" class="card-back">← Volver</div>
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

    document.getElementById('nuevoVolver')?.addEventListener('click', () => {
        restoreOnboarding();
    });
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
    const old = onboardContent.querySelector('.error-msg');
    if (old) old.remove();

    const div = document.createElement('div');
    div.className = 'error-msg';
    div.textContent = msg;
    div.style.color = '#fff';

    onboardContent.querySelector('.portal-form')?.appendChild(div);

    setTimeout(() => div.remove(), 4000);
}

function restoreOnboarding() {

    onboardContent.innerHTML = originalOnboardHTML;

    onboardContent.style.display = '';
    onboardBlur.style.display = '';
    onboardVideoBg.style.display = '';

    selectedRole = null;

    // 🔥 IMPORTANTE: limpiar eventos antes de rebinder
    const btn = document.getElementById('btnContinuar');
    const newBtn = btn?.cloneNode(true);
    btn?.parentNode?.replaceChild(newBtn, btn);

    bindOnboardingEvents();
}

// =====================
// INIT
// =====================
document.addEventListener('DOMContentLoaded', initOnboarding);