// =====================
// ELEMENTOS GLOBALES
// =====================
window.currentStudent = null;
window.testUsers = window.testUsers || [];
const videosNormales = document.getElementById('videos');
const pillNav = document.getElementById('pillNav');

const onboardVideoBg = document.querySelector('.onboard-video-bg');
const onboardDim = document.querySelector('.onboard-dim-overlay');
const onboardContent = document.querySelector('.onboard-content');
const loginCardGlass = document.querySelector('.login-card-glass');
const btnContinuar = document.getElementById('btnContinuar');
const studentMenu = document.querySelector('.student-menu');
const reviewForm = document.getElementById('reviewForm');
const reviewResult = document.getElementById('reviewResult');
const submittedEmail = document.getElementById('submittedEmail');
const submittedText = document.getElementById('submittedText');
const anonCheck = document.getElementById('reviewAnon');
const nameGroup = document.getElementById('nameGroup');
const emailGroup = document.getElementById('emailGroup');

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
// PRIMER ACCESO (Crear memanejo ID)
// =====================
function mostrarPortalAlumno() {

  loginCardGlass.innerHTML = `
  <div class="card-plus">

    <div class="title-wrapper portal-title">
      <div class="card-title card-plus-title">
        <strong>¡Nos encanta conocerte!</strong>
      </div>
    </div>


    <div class="card-subblock portal-intro">
      <div class="card-text card-plus-text">

        Obtén tu <strong>memanejo ID</strong> para ingresar a la plataforma.
        <Br>Accederás a material de estudio gratis, quiz de nivelación y recibir futuras novedades.

      </div>
    </div>


    <div class="portal-form">


      <input 
      type="text" 
      id="portalNombre" 
      class="card-input" 
      placeholder="Nombre">


      <input 
      type="text" 
      id="portalApellido" 
      class="card-input" 
      placeholder="Apellido">


      <input 
      type="email" 
      id="portalEmail" 
      class="card-input" 
      placeholder="Correo electrónico">


      <button 
      id="portalIngresar" 
      class="card-btn">

        <strong>Crear memanejo ID</strong>

      </button>


      <div class="card-sub-text">

        Recibirás un correo de bienvenida con tu código personal de acceso.

      </div>


      <div 
      id="portalVolver" 
      class="card-back" 
      style="cursor:pointer;">

        <i class="fas fa-arrow-left"></i> Volver

      </div>


    </div>

  </div>
  `;



  document
    .getElementById('portalIngresar')
    ?.addEventListener('click', () => {


      const nombre =
        document
          .getElementById('portalNombre')
          ?.value.trim();



      const apellido =
        document
          .getElementById('portalApellido')
          ?.value.trim();



      const email =
        document
          .getElementById('portalEmail')
          ?.value.trim();



      if (!nombre || !email) {

        showError("Completa todos los campos");
        return;

      }



      const emailValido =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;



      if (!emailValido.test(email)) {

        showError("Ingresa un correo válido");
        return;

      }



      // Genera código único
      const memanejoId =
        generarMemanejoId(nombre, apellido);



      const nuevoUsuario = {


        memanejoId,


        nombre:
          `${nombre} ${apellido || ""}`
            .trim(),


        email,


        desbloqueado: {

          quiz180: false,

          quiz500: false,

          quiz800: false,

          clasesEnVivo: false,

          resumenes: false,

          full: false

        },


        referidoPor: null,


        fechaRegistro:
          new Date()
            .toISOString()
            .split('T')[0]

      };



      // Guarda usuario MVP local
      const registrados =
        JSON.parse(
          localStorage.getItem('usuariosRegistrados') || '[]'
        );



      registrados.push(nuevoUsuario);



      localStorage.setItem(
        'usuariosRegistrados',
        JSON.stringify(registrados)
      );



      // Login automático
      setSession({

        nombre: nuevoUsuario.nombre,

        email: nuevoUsuario.email,

        memanejoId: nuevoUsuario.memanejoId,

        desbloqueado: nuevoUsuario.desbloqueado

      });



      // Envía correo bienvenida
      enviarMemanejoIdPorCorreo(
        nombre,
        email,
        memanejoId
      );

      const correoAcceso = "estudiante@memanejo.cl";

      loginCardGlass.innerHTML = `

    <div class="card-plus">


      <div class="card-title card-plus-title">

        <strong>¡Bienvenido a memanejo!</strong>

      </div>



      <div class="card-text card-plus-text" style="margin-top:14px;">

        Tu acceso fue creado correctamente.

        <br><br>

        Enviamos tu <strong>memanejo ID</strong> a:

        <br>

        <strong>${correoAcceso}</strong>


        <br><br>

        Guarda este código para ingresar nuevamente a la plataforma.

      </div>

      <button 
      id="btnEntrarPlataforma"
      class="card-btn card-btn-wide"
      style="margin-top:16px;">

       Ingresar

      </button>


    </div>

    `;



      document
        .getElementById('btnEntrarPlataforma')
        ?.addEventListener('click', () => {


          cerrarOnboarding();



          const pillStudent =
            document.querySelector('.pill-student');


          pillStudent
            ?.classList.add('visible');



          requestAnimationFrame(() => {

            openStudentMenu();

          });


        });



    });



  document
    .getElementById('portalVolver')
    ?.addEventListener(
      'click',
      restoreOnboarding
    );


}

/* ===== Generador de memanejo ID =====
function generarMemanejoId(nombre, apellido) {
  const inicialNombre = nombre.charAt(0).toUpperCase();
  const inicialApellido = apellido.charAt(0).toUpperCase();
  const numero = Math.floor(1000 + Math.random() * 9000); // 4 dígitos
  return `MM${inicialNombre}${inicialApellido}${numero}`;
} */
function generarMemanejoId() {
  return "2026";
}
function enviarMemanejoIdPorCorreo(nombre, email, memanejoId) {
  emailjs.send("service_ujyq6hg", "template_s6jxj1h", {
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
// LOGIN MEMANEJO +
// =====================
function mostrarNuevoEstudiante() {

  loginCardGlass.innerHTML = `
  <div class="card-plus">

    <div class="title-wrapper portal-title">
      <div class="card-title-visitante">
        <strong>memanejo +</strong>
      </div>
    </div>

    <div class="card-subblock portal-intro">
      <div class="card-text">
        Ingresa con tu correo y tu <strong>memanejo ID</strong>.
      </div>
    </div>

    <div class="portal-form">

      <input 
      type="email" 
      id="loginEmail" 
      class="card-input" 
      placeholder="Correo electrónico">


      <input 
      type="text" 
      id="loginId" 
      class="card-input" 
      placeholder="memanejo ID: 2026">


      <button id="loginIngresar" class="card-btn">
        <strong>Ingresar</strong>
      </button>


      <div id="loginVolver" class="card-back" style="cursor:pointer;">
        <i class="fas fa-arrow-left"></i> Volver
      </div>

    </div>

  </div>
  `;


  document.getElementById('loginIngresar')
    ?.addEventListener('click', async () => {


      const email = document
        .getElementById('loginEmail')
        ?.value.trim();


      const id = document
        .getElementById('loginId')
        ?.value.trim();



      if (!email || !id) {
        showError("Completa todos los campos");
        return;
      }



      // carga JSON si aún no existe
      if (usuariosDB.length === 0) {
        await cargarUsuarios();
      }



      const usuariosLocal =
        JSON.parse(
          localStorage.getItem('usuariosRegistrados') || '[]'
        );



      const todosLosUsuarios = [
        ...usuariosDB,
        ...usuariosLocal
      ];



      const usuario =
        todosLosUsuarios.find(
          u =>
            u.email === email &&
            String(u.memanejoId) === String(id)
        );



      if (!usuario) {

        showError("Correo o código incorrecto");
        return;

      }



      setSession({

        nombre: usuario.nombre,

        email: usuario.email,

        memanejoId: usuario.memanejoId,

        desbloqueado: usuario.desbloqueado || {}

      });



      cerrarOnboarding();



      const pillStudent =
        document.querySelector('.pill-student');


      pillStudent?.classList.add('visible');



      requestAnimationFrame(() => {
        openStudentMenu();
      });


    });



  document.getElementById('loginVolver')
    ?.addEventListener(
      'click',
      restoreOnboarding
    );

}

reviewForm?.addEventListener('submit', (e) => {
  e.preventDefault();

  const anon = reviewAnonRadio.checked;
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

  emailjs.send("service_ujyq6hg", "template_s6jxj1h", {
    nombre: finalName,
    correo: email || "sin correo (anónimo)",
    mensaje_soporte: text
  }).catch(err => console.error("Error enviando soporte:", err));

  submittedEmail.textContent = finalName;
  reviewResult.style.display = "block";
  reviewForm.reset();
  actualizarModoReview();
});
const reviewNormalRadio = document.getElementById('reviewNormal');
const reviewAnonRadio = document.getElementById('reviewAnon');

function actualizarModoReview() {
  const esAnonimo = reviewAnonRadio.checked;
  nameGroup.style.display = esAnonimo ? "none" : "block";
  emailGroup.style.display = esAnonimo ? "none" : "block";
}

reviewNormalRadio?.addEventListener('change', actualizarModoReview);
reviewAnonRadio?.addEventListener('change', actualizarModoReview);
actualizarModoReview();
// =====================
// CONTINUAR
// =====================
function ejecutarContinuar() {

  if (!selectedRole) {
    showError("Selecciona una opción");
    return;
  }


  // memanejo +
  // Ya tengo código → iniciar sesión
  if (selectedRole === 'alumno') {
    mostrarNuevoEstudiante();
    return;
  }


  // Primer acceso
  // Crear cuenta → recibir código
  if (selectedRole === 'new') {
    mostrarPortalAlumno();
    return;
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
