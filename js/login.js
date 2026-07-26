// =====================
// USUARIOS DE PRUEBA
// =====================
const testUsers = [
  { email: "alumno@memanejo.cl", id: "memanejo", nombre: "Alumno de Prueba" },
  { email: "alumnoprueba@memanejo.cl", id: "memanejo", nombre: "Alumno de Prueba 2" },
  { email: "hola", id: "hola", nombre: "Hola" }
];

// Recupera usuarios registrados anteriormente (persistente en este navegador)
const registrados = JSON.parse(localStorage.getItem('usuariosRegistrados') || '[]');
window.testUsers = [...testUsers, ...registrados];

// =====================
// LOGIN DESDE EL MENÚ FLOTANTE (.pill-student)
// =====================
const studentIngresar = document.getElementById('studentIngresar');

studentIngresar?.addEventListener('click', () => {
  const email = document.getElementById('studentEmail')?.value.trim();
  const id = document.getElementById('studentID')?.value.trim();

  if (!email || !id) {
    alert("Ingresa tu correo y código memanejo ID");
    return;
  }

  const validUser = window.testUsers.find(u => u.email === email && u.id === id);

  if (!validUser) {
    alert("Correo o ID incorrecto");
    return;
  }

  window.currentStudent = validUser;

  setSession({
    nombre: validUser.nombre,
    memanejoId: validUser.id,
    email: validUser.email
  });

  requestAnimationFrame(() => {
    initStudentProgressCircles?.();
  });
});