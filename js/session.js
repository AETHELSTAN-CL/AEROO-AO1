// =====================================================
// SESSION.JS — Fuente única del login
// =====================================================

const SESSION_KEY = 'memanejoSession';

function getSession() {
    const raw = localStorage.getItem(SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
}

function setSession(data) {
    localStorage.setItem(SESSION_KEY, JSON.stringify(data));
    aplicarEstadoUsuario();
}

function clearSession() {
    localStorage.removeItem(SESSION_KEY);
    aplicarEstadoUsuario();
}

function aplicarEstadoUsuario() {
    const session = getSession();
    const estaLogueado = !!session;

    document.body.classList.toggle('usuario-activo', estaLogueado);

    const loginForm = document.querySelector('.student-login');
    const dashboard = document.querySelector('.student-dashboard');
    const welcome = document.getElementById('studentWelcome');

    if (estaLogueado) {
        loginForm?.querySelector('#studentEmail')?.closest('div')?.style.setProperty('display', 'none');
        dashboard.style.display = 'flex';
        welcome.style.display = 'block';
        document.getElementById('welcomeName').innerText = session.nombre;
        document.getElementById('welcomeId').innerText = `memanejo ID: ${session.memanejoId}`;
    } else {
        dashboard.style.display = 'none';
        welcome.style.display = 'none';
        loginForm.style.display = 'block';
    }

    const pillStudent = document.querySelector('.pill-student');
    pillStudent?.classList.toggle('logueado', estaLogueado);

    aplicarControlDeContenido();
}

// =====================
// CONTROL DE ACCESO A CONTENIDO — sistema único, cubre TODOS los íconos
// =====================
function tieneAcceso(clave) {
    const session = getSession();
    if (!session) return false;
    if (clave === '_sesion') return true; // solo pregunta si hay sesión, sin importar el plan
    return !!(session.desbloqueado?.full || session.desbloqueado?.[clave]);
}

function aplicarControlDeContenido() {
    document.querySelectorAll('[data-requiere]').forEach(el => {
        const clave = el.dataset.requiere;
        const acceso = tieneAcceso(clave);
        const esAgendable = el.dataset.tipo === 'agendar';

        const wrapper = el.closest('.icon-wrapper');
        const pill = wrapper?.querySelector('.icon-pill');

        if (pill && !pill.dataset.original) {
            pill.dataset.original = pill.innerHTML;
        }

        if (acceso) {
            if (esAgendable) {
                // Ya tiene el plan, pero igual debe agendar con un humano
                el.setAttribute('href', el.dataset.hrefAgendar || '#');
                el.setAttribute('target', '_blank');
                el.removeAttribute('data-bs-toggle');
                el.removeAttribute('data-bs-target');
                if (pill) pill.innerHTML = `${el.dataset.pillDesbloqueado || 'Agendar'} <span class="tooltip-box"></span>`;
            } else {
                el.setAttribute('href', el.dataset.hrefDesbloqueado || '#');
                el.removeAttribute('data-bs-toggle');
                el.removeAttribute('data-bs-target');
                if (pill) pill.innerHTML = `${el.dataset.pillDesbloqueado || 'Liberado'} <span class="tooltip-box"></span>`;
            }
        } else {
            el.setAttribute('href', '#');
            el.setAttribute('data-bs-toggle', 'modal');
            el.setAttribute('data-bs-target', el.dataset.hrefBloqueado || '#modalStudentSubscription');
            if (pill && pill.dataset.original) pill.innerHTML = pill.dataset.original;
        }
    });
}

document.getElementById('btnCerrarSesion')
    ?.addEventListener('click', () => {
        clearSession();
    });

document.addEventListener('DOMContentLoaded', aplicarEstadoUsuario);