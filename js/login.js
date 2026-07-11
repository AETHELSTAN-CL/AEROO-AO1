const testUsers = [
  { email: "alumno@memanejo.cl", id: "memanejo" },
  { email: "alumnoprueba@memanejo.cl", id: "memanejo" },
  { email: "hola", id: "hola" }
];

window.testUsers = testUsers; // IMPORTANTE GLOBAL

const studentIngresar = document.getElementById('studentIngresar');

studentIngresar?.addEventListener('click', () => {

  const email = document.getElementById('studentEmail')?.value.trim();
  const id = document.getElementById('studentID')?.value.trim();

  if (!email || !id) {
    alert("Ingresa datos");
    return;
  }

  const validUser = testUsers.find(u => u.email === email && u.id === id);

  if (!validUser) {
    alert("Error login");
    return;
  }

  window.currentStudent = validUser;

  document.querySelector('.student-login').style.display = 'none';
  document.querySelector('.student-dashboard').style.display = 'flex';

  requestAnimationFrame(() => {
    initStudentProgressCircles();
    openStudentMenu();
  });
});