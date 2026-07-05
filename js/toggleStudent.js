document.addEventListener('DOMContentLoaded', () => {

  // Toggle menú flotante
  function initStudentMenuToggle() {
    const studentBtn = document.querySelector('.pill-student');
    const studentMenu = document.querySelector('.student-menu');

    if (!studentBtn || !studentMenu) return;

    studentBtn.addEventListener('click', (e) => {
      e.preventDefault();
      studentMenu.classList.toggle('show');
    });
  }

  initStudentMenuToggle(); // 👈 ESTO FALTABA

});

  // === SHOW STUDENT ICON ON SCROLL (MOBILE ONLY) ===
  document.addEventListener("scroll", () => {
    const student = document.querySelector(".pill-student");

    // solo mobile
    if (window.innerWidth > 768) {
      student.classList.remove("visible");
      return;
    }
    // solo intermedias
    if (window.innerWidth > 968) {
      student.classList.remove("visible");
      return;
    }

    if (window.scrollY > 50) {
      student.classList.add("visible");
    } else {
      student.classList.remove("visible");
    }
  });
  studentIngresar.addEventListener('click', () => {
    const email = document.getElementById('studentEmail').value.trim();
    const id = document.getElementById('studentID').value.trim();

    if (!email || !id) {
      alert("Ingresa tu correo y código memanejo ID");
      return;
    }

    const validUser = testUsers.find(u => u.email === email && u.id === id);
    if (!validUser) {
      alert("Correo o ID incorrecto");
      return;
    }

    studentLogin.style.display = 'none';
    studentDashboard.style.display = 'flex';

    // Este es el fix real
    requestAnimationFrame(() => {
      initStudentProgressCircles();
    });
  });
  // === progreso estudiante ===
function initStudentProgressCircles() {
  document.querySelectorAll(".sd-circle").forEach(circle => {
    const bar = circle.querySelector(".bar");
    if (!bar) return;

    const percent = Number(circle.dataset.progress || 0);

    const radius = parseFloat(bar.getAttribute("r")) || 45;
    const circumference = 2 * Math.PI * radius;

    bar.style.strokeDasharray = circumference;
    bar.style.strokeDashoffset = circumference;

    requestAnimationFrame(() => {
      const offset = circumference - (percent / 100) * circumference;
      bar.style.strokeDashoffset = offset;
    });

    const label = circle.querySelector(".percent");
    if (label) label.textContent = percent + "%";
  });
}
