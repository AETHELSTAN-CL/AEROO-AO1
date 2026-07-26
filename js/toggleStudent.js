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

  initStudentMenuToggle();

  // === SHOW STUDENT ICON ON SCROLL (MOBILE ONLY) ===
  document.addEventListener("scroll", () => {
    const student = document.querySelector(".pill-student");
    if (!student) return;

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

});

// === Progreso estudiante (círculos SVG) ===
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
