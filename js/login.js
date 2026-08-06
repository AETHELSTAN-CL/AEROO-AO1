// =====================
// CARGA DE USUARIOS DESDE JSON (reemplaza testUsers hardcodeado)
// =====================
let usuariosDB = [];

async function cargarUsuarios() {
  try {
    const res = await fetch('/data/usuarios.json');
    usuariosDB = await res.json();
    window.usuariosDB = usuariosDB;
  } catch (err) {
    console.error("Error cargando usuarios:", err);
    usuariosDB = [];
  }
}

// Carga apenas arranca la página
cargarUsuarios();

// =====================
// LOGIN DESDE EL MENÚ FLOTANTE (.pill-student)
// =====================
const studentIngresar = document.getElementById('studentIngresar');
function showLoginError(msg) {
  const old = document.querySelector('.login-error-msg');
  if (old) old.remove();

  const div = document.createElement('div');
  div.className = 'login-error-msg';
  div.textContent = msg;

  studentIngresar.insertAdjacentElement('beforebegin', div);

  setTimeout(() => {
    div.remove();
  }, 4000);
}
studentIngresar?.addEventListener('click', async () => {
  const email = document.getElementById('studentEmail')?.value.trim();
  const id = document.getElementById('studentID')?.value.trim();

  if (!email || !id) {
    showLoginError("Debes ingresar tu correo y código memanejo ID");
    return;
  }

  // Por si el fetch aún no terminó, esperamos a que cargue
  if (usuariosDB.length === 0) {
    await cargarUsuarios();
  }

  const validUser = usuariosDB.find(u => u.email === email && u.memanejoId === id);

  if (!validUser) {
    showLoginError("Correo o ID incorrecto");
    return;
  }

  window.currentStudent = validUser;

  setSession({
    nombre: validUser.nombre,
    memanejoId: validUser.memanejoId,
    email: validUser.email,
    desbloqueado: validUser.desbloqueado || {}
  });

  requestAnimationFrame(() => {
    initStudentProgressCircles?.();
  });
});