// =====================================================
// SESSION.JS — Fuente única de verdad del login
// =====================================================

const SESSION_KEY = 'memanejoSession';

function getSession() {
    const raw = localStorage.getItem(SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
}

function setSession(data) {
    // data = { nombre, memanejoId, email }
    localStorage.setItem(SESSION_KEY, JSON.stringify(data));
    aplicarEstadoUsuario();
}

function clearSession() {
    localStorage.removeItem(SESSION_KEY);
    aplicarEstadoUsuario();
}

// ===== Esta función decide qué se ve en la página =====
function aplicarEstadoUsuario() {
    const session = getSession();
    const estaLogueado = !!session;

    document.body.classList.toggle('usuario-activo', estaLogueado);

    // 1) Dashboard vs formulario de login en el menú flotante
    const loginForm = document.querySelector('.student-login');
    const dashboard = document.querySelector('.student-dashboard');
    const welcome = document.getElementById('studentWelcome');

    if (estaLogueado) {
        loginForm?.querySelector('#studentEmail')?.closest('div')?.style.setProperty('display', 'none');
        dashboard.style.display = 'flex';
        welcome.style.display = 'block';
        document.getElementById('welcomeName').innerText = session.nombre;
        document.getElementById('welcomeId').innerText = `MEMANEJO ID: ${session.memanejoId}`;
    } else {
        dashboard.style.display = 'none';
        welcome.style.display = 'none';
        loginForm.style.display = 'block';
    }

    // 2) Precios → "Disponible" en TODOS los icon-pill de suscripción
    document.querySelectorAll('.icon-pill[data-tooltip]').forEach(pill => {
        const texto = pill.textContent.trim();
        if (texto.includes('Suscríbete')) {
            document.querySelectorAll('.icon-pill').forEach(pill => {
                const esPillDeSuscripcion = pill.dataset.original || pill.textContent.includes('Suscríbete');

                if (!esPillDeSuscripcion) return;

                if (estaLogueado) {
                    if (!pill.dataset.original) {
                        pill.dataset.original = pill.innerHTML;
                    }
                    pill.innerHTML = 'Disponible <span class="tooltip-box"></span>';
                } else if (pill.dataset.original) {
                    pill.innerHTML = pill.dataset.original;
                }
            });
        }
    });

    // 3) Ícono del botón flotante refleja el estado (opcional: punto verde)
    const pillStudent = document.querySelector('.pill-student');
    pillStudent?.classList.toggle('logueado', estaLogueado);
}
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btnCerrarSesion')?.addEventListener('click', clearSession);
});
// Ejecutar al cargar cualquier página
document.addEventListener('DOMContentLoaded', aplicarEstadoUsuario);