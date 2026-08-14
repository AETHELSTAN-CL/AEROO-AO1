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

  if (estaLogueado) {
    loginForm?.querySelector('#studentEmail')?.closest('div')?.style.setProperty('display', 'none');
    dashboard.style.display = 'flex';
    document.getElementById('welcomeName').innerText = session.nombre;
    document.getElementById('welcomeId').innerText = `memanejo ID: ${session.memanejoId}`;
    iniciarSincronizacionAutomatica();
  } else {
    dashboard.style.display = 'none';
    loginForm.style.display = 'block';
    detenerSincronizacionAutomatica();
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
// SINCRONIZACIÓN DE PERMISOS — corre siempre mientras hay sesión
// =====================
const WHATSAPP_ACTIVACION = "56946914558";
let intervaloSincronizacion = null;
let sincronizacionEnCurso = false;
const INTERVALO_SINCRONIZACION = 10 * 1000; // cada 10 segundos

async function sincronizarPermisos() {
  const session = getSession();
  if (!session || sincronizacionEnCurso) return;

  sincronizacionEnCurso = true;

  try {
    // El ?t evita que navegador/CDN entregue una versión antigua del JSON.
    const res = await fetch(`/data/usuarios.json?t=${Date.now()}`, {
      cache: 'no-store'
    });

    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const usuarios = await res.json();
    const actualizado = usuarios.find(
      usuario => usuario.memanejoId === session.memanejoId
    );

    if (!actualizado) return;

    const nuevoDesbloqueado = actualizado.desbloqueado || {};
    const permisosCambiaron =
      JSON.stringify(nuevoDesbloqueado) !==
      JSON.stringify(session.desbloqueado || {});

    if (permisosCambiaron) {
      localStorage.setItem(SESSION_KEY, JSON.stringify({
        ...session,
        desbloqueado: nuevoDesbloqueado
      }));

      // Refresca contenido, tarjeta y estado del usuario inmediatamente.
      aplicarEstadoUsuario();
    }
  } catch (err) {
    console.error('Error sincronizando permisos:', err);
  } finally {
    sincronizacionEnCurso = false;
  }
}

function iniciarSincronizacionAutomatica() {
  if (intervaloSincronizacion) return;

  sincronizarPermisos(); // revisa inmediatamente al entrar
  intervaloSincronizacion = setInterval(
    sincronizarPermisos,
    INTERVALO_SINCRONIZACION
  );
}

function detenerSincronizacionAutomatica() {
  if (intervaloSincronizacion) {
    clearInterval(intervaloSincronizacion);
    intervaloSincronizacion = null;
  }
}

function iniciarSincronizacionAutomatica() {
  if (intervaloSincronizacion) return;
  intervaloSincronizacion = setInterval(sincronizarPermisos, 30000);
}

function detenerSincronizacionAutomatica() {
  if (intervaloSincronizacion) {
    clearInterval(intervaloSincronizacion);
    intervaloSincronizacion = null;
  }
}

// =====================
// CARD memanejo+ — solo decide qué mostrar, ya NO controla el polling
// =====================
function actualizarEstadoUpsell() {
  const session = getSession();
  if (!session) return;

  const locked = document.getElementById('sdUpsellLocked');
  const pending = document.getElementById('sdUpsellPending');
  const active = document.getElementById('sdUpsellActive');
  if (!locked || !pending || !active) return;

  const permisos = session.desbloqueado || {};

  const nombresPlanes = {
    quiz180: 'Quiz 180',
    quiz500: 'Quiz 500',
    quiz800: 'Quiz 800',
    clasesEnVivo: 'Clases en vivo',
    resumenes: 'Resúmenes'
  };

  const planesActivos = Object.entries(permisos)
    .filter(([clave, activo]) => clave !== 'full' && activo === true)
    .map(([clave]) => nombresPlanes[clave] || clave);

  const tieneAccesoCompleto = permisos.full === true;
  const tieneAlgunPlan = tieneAccesoCompleto || planesActivos.length > 0;

  const pendienteLocal =
    localStorage.getItem('memanejoPlusPending') === session.memanejoId;

  locked.style.display = 'none';
  pending.style.display = 'none';
  active.style.display = 'none';

  if (tieneAlgunPlan) {
    active.style.display = 'block';
    localStorage.removeItem('memanejoPlusPending');

    const badge = active.querySelector('.sd-upsell-badge');
    const texto = active.querySelector('.sd-upsell-text');

    if (tieneAccesoCompleto) {
      if (badge) {
        badge.innerHTML =
          '<i class="fas fa-check-circle"></i> memanejo+ activo';
      }
      if (texto) {
        texto.textContent =
          'Tienes acceso a todo el contenido';
      }
    } else {
      if (badge) {
        badge.innerHTML =
          '<i class="fas fa-check-circle"></i> memanejo+ activo';
      }

      if (texto) {
        texto.innerHTML =
          `<strong>${planesActivos.join(' + ')}</strong><br>Contenido incluido en tu plan.`;
      }
    }
  } else if (pendienteLocal) {
    pending.style.display = 'block';
  } else {
    locked.style.display = 'block';
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

  document.getElementById('btnVerificarActivacion')?.addEventListener('click', sincronizarPermisos);

});

document.addEventListener('DOMContentLoaded', aplicarEstadoUsuario);