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
    const welcomeName = document.getElementById('welcomeName');
    const welcomeId = document.getElementById('welcomeId');

    if (estaLogueado) {
        loginForm?.style.setProperty('display', 'none');
        dashboard.style.display = 'flex';

        welcomeName.textContent = session.nombre;
        welcomeId.textContent = `memanejo ID: ${session.memanejoId}`;
    } else {
        dashboard.style.display = 'none';
        loginForm.style.display = 'block';
    }

    const pillStudent = document.querySelector('.pill-student');
    pillStudent?.classList.toggle('logueado', estaLogueado);

    aplicarControlDeContenido();
    actualizarEstadoUpsell();
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

function actualizarTextoPill(pill, texto) {
    const box = pill.querySelector('.tooltip-box');
    Array.from(pill.childNodes).forEach(nodo => {
        if (nodo !== box) pill.removeChild(nodo);
    });
    pill.insertBefore(document.createTextNode(texto + ' '), box);
}

function aplicarControlDeContenido() {
    document.querySelectorAll('[data-requiere]').forEach(el => {
        const clave = el.dataset.requiere;
        const acceso = tieneAcceso(clave);
        const esAgendable = el.dataset.tipo === 'agendar';

        const wrapper = el.closest('.icon-wrapper');
        const pill = wrapper?.querySelector('.icon-pill');

        if (pill && !pill.dataset.original) {
            pill.dataset.original = pill.textContent.trim();
        }

        if (acceso) {
            if (esAgendable) {
                el.setAttribute('href', el.dataset.hrefAgendar || '#');
                el.setAttribute('target', '_blank');
                el.removeAttribute('data-bs-toggle');
                el.removeAttribute('data-bs-target');
                if (pill) actualizarTextoPill(pill, el.dataset.pillDesbloqueado || 'Agendar');
            } else {
                el.setAttribute('href', el.dataset.hrefDesbloqueado || '#');
                el.removeAttribute('data-bs-toggle');
                el.removeAttribute('data-bs-target');
                if (pill) actualizarTextoPill(pill, el.dataset.pillDesbloqueado || 'Liberado');
            }
        } else {
            el.setAttribute('href', '#');
            el.setAttribute('data-bs-toggle', 'modal');
            el.setAttribute('data-bs-target', el.dataset.hrefBloqueado || '#modalStudentSubscription');
            if (pill && pill.dataset.original) actualizarTextoPill(pill, pill.dataset.original);
        }
    });
}

document.getElementById('btnCerrarSesion')
    ?.addEventListener('click', () => {
        clearSession();
    });

// =====================
// UPSELL memanejo+ (locked / pending / active)
// =====================
const WHATSAPP_ACTIVACION = "56946914558";
let intervaloVerificacion = null;

function actualizarEstadoUpsell() {
  const session = getSession();
  if (!session) return;

  const locked = document.getElementById('sdUpsellLocked');
  const pending = document.getElementById('sdUpsellPending');
  const active = document.getElementById('sdUpsellActive');
  if (!locked || !pending || !active) return;

  const yaActivo = session.desbloqueado?.full === true;
  const pendienteLocal = localStorage.getItem('memanejoPlusPending') === session.memanejoId;

  locked.style.display = 'none';
  pending.style.display = 'none';
  active.style.display = 'none';

  if (yaActivo) {
    active.style.display = 'block';
    localStorage.removeItem('memanejoPlusPending');
    detenerVerificacionAutomatica();
  } else if (pendienteLocal) {
    pending.style.display = 'block';
    iniciarVerificacionAutomatica();
  } else {
    locked.style.display = 'block';
  }
}

function iniciarVerificacionAutomatica() {
  if (intervaloVerificacion) return;
  intervaloVerificacion = setInterval(verificarActivacion, 30000);
}

function detenerVerificacionAutomatica() {
  if (intervaloVerificacion) {
    clearInterval(intervaloVerificacion);
    intervaloVerificacion = null;
  }
}

async function verificarActivacion() {
  const session = getSession();
  if (!session) return;

  try {
    const res = await fetch('/data/usuarios.json', { cache: 'no-store' });
    const usuarios = await res.json();
    const actualizado = usuarios.find(u => u.memanejoId === session.memanejoId);

    if (actualizado) {
      setSession({
        ...session,
        desbloqueado: actualizado.desbloqueado || {}
      });
    }
  } catch (err) {
    console.error("Error verificando activación:", err);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const btnActivar = document.getElementById('btnActivarMemanejoPlus');
  btnActivar?.addEventListener('click', () => {
    const session = getSession();
    if (!session) return;

    const mensaje = encodeURIComponent(
      `Hola, quiero activar memanejo+.\nMi correo es: ${session.email}\nMi código de acceso es: ${session.memanejoId}`
    );
    btnActivar.href = `https://wa.me/${WHATSAPP_ACTIVACION}?text=${mensaje}`;

    localStorage.setItem('memanejoPlusPending', session.memanejoId);
    actualizarEstadoUpsell();
  });

  document.getElementById('btnVerificarActivacion')?.addEventListener('click', verificarActivacion);
});

document.addEventListener('DOMContentLoaded', aplicarEstadoUsuario);