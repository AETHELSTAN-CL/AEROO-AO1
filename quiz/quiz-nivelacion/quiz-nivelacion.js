document.addEventListener("DOMContentLoaded", () => {

  /* =========================
      VARIABLES
  ========================= */
  let preguntasActuales = [];
  let indice = 0;
  let score = 0;
  let correctasCount = 0;
  let erradasCount = 0;
  let tiempoRestante = 0;
  let tiempoTotalSeg = 0;
  let timerInterval = null;
  let errores = [];

  /* =========================
     SORTEO — usa bancoExamenMunicipal de preguntas.js
  ========================= */
  function mezclarArray(array) {
    const copia = [...array];
    for (let i = copia.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copia[i], copia[j]] = [copia[j], copia[i]];
    }
    return copia;
  }

  function armarQuizNivelacion() {
    const generales = bancoExamenMunicipal.filter(p => p.categoria === "general");
    return mezclarArray(generales).slice(0, 20).map(p => ({ ...p, puntos: 1 }));
  }

  /* =========================
     ELEMENTOS DOM
  ========================= */
  const pantallaBienvenida = document.getElementById('pantalla-bienvenida');
  const quizContainer = document.getElementById('quiz-container');
  const preguntaElemento = document.getElementById('question');
  const respuestasElemento = document.getElementById('answer-buttons');
  const btnSiguiente = document.getElementById('next-btn');
  const progresoElemento = document.getElementById('progress');
  const modal = document.getElementById('modal-memanejo');
  const textoPuntaje = document.getElementById('texto-puntaje');
  const btnDescargar = document.getElementById('btn-descargar-img');
  const btnCompartir = document.getElementById('btn-compartir');
  const btnInstagram = document.getElementById('btn-instagram');
  const btnReintentar = document.getElementById('btn-reintentar');
  const btnVolver = document.getElementById('btn-volver');
  const form = document.getElementById('form-usuario');

  const scoreRing = document.getElementById('scoreRing');
  const scorePuntos = document.getElementById('scorePuntos');
  const badgeEstado = document.getElementById('badgeEstado');
  const badgeTexto = document.getElementById('badgeTexto');
  const statCorrectas = document.getElementById('statCorrectas');
  const statErradas = document.getElementById('statErradas');
  const statTiempo = document.getElementById('statTiempo');

  /* =========================
     CONTADOR
  ========================= */
  const tiempoElemento = document.createElement('div');
  tiempoElemento.id = 'tiempo-restante';
  tiempoElemento.style.marginBottom = '20px';
  tiempoElemento.style.fontWeight = 'bold';
  quizContainer.insertBefore(tiempoElemento, preguntaElemento);

  /* =========================
     INICIAR QUIZ
  ========================= */
  function iniciarQuiz() {
    localStorage.setItem("nombre", document.getElementById("nombre")?.value || "Invitado");
    localStorage.setItem("correo", document.getElementById("correo")?.value || "sin_correo");
    localStorage.setItem("telefono", document.getElementById("telefono")?.value || "sin_telefono");

    pantallaBienvenida.style.display = 'none';
    quizContainer.style.display = 'flex';
    quizContainer.style.flexDirection = 'column';
    quizContainer.style.alignItems = 'center';
    tiempoElemento.style.display = 'block';

    preguntasActuales = armarQuizNivelacion();
    indice = 0;
    score = 0;
    correctasCount = 0;
    erradasCount = 0;
    errores = [];

    tiempoTotalSeg = 20 * 60;
    tiempoRestante = tiempoTotalSeg;

    actualizarTiempo();
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(() => {
      tiempoRestante--;
      if (tiempoRestante <= 0) {
        clearInterval(timerInterval);
        mostrarResultado();
      } else actualizarTiempo();
    }, 1000);

    mostrarPregunta();
  }
  window.iniciarQuiz = iniciarQuiz;

  function actualizarTiempo() {
    const min = Math.floor(tiempoRestante / 60);
    const seg = tiempoRestante % 60;
    tiempoElemento.innerText = `Tiempo restante: ⏱ ${min.toString().padStart(2, '0')}:${seg.toString().padStart(2, '0')}`;
  }

  /* =========================
     MOSTRAR PREGUNTA
  ========================= */
  function mostrarPregunta() {
    resetearEstado();
    const q = preguntasActuales[indice];
    if (!q) return;

    preguntaElemento.innerText = q.pregunta;
    progresoElemento.innerText = `Pregunta ${indice + 1} de ${preguntasActuales.length}`;

    q.respuestas.forEach(r => {
      const btn = document.createElement('button');
      btn.innerText = r.texto;
      btn.className = 'btn';
      btn.dataset.correcta = r.correcta ? "true" : "false";
      btn.addEventListener('click', seleccionarRespuesta);
      respuestasElemento.appendChild(btn);
    });
  }

  function resetearEstado() {
    btnSiguiente.style.display = 'none';
    respuestasElemento.innerHTML = '';
    respuestasElemento.style.display = 'flex';
    respuestasElemento.style.flexDirection = 'column';
    respuestasElemento.style.alignItems = 'center';
    respuestasElemento.style.gap = '10px';
  }

  function seleccionarRespuesta(e) {
    const seleccion = e.target;
    const correcta = seleccion.dataset.correcta === "true";

    if (correcta) {
      score += preguntasActuales[indice].puntos;
      correctasCount++;
    } else {
      erradasCount++;
    }

    Array.from(respuestasElemento.children).forEach(btn => {
      btn.disabled = true;
      if (btn.dataset.correcta === "true") btn.classList.add('correct');
      else btn.classList.add('wrong');
    });

    if (!correcta) {
      seleccion.classList.add('selected-wrong');
      const pregunta = preguntasActuales[indice].pregunta;
      const respuestaUsuario = seleccion.innerText;
      const correctaTexto = preguntasActuales[indice].respuestas.find(r => r.correcta).texto;
      errores.push(`Pregunta: ${pregunta}<br>Tu respuesta: ${respuestaUsuario}<br>Respuesta correcta: ${correctaTexto}`);
    }

    btnSiguiente.style.display = 'inline-block';
  }

  btnSiguiente.addEventListener('click', () => {
    indice++;
    if (indice < preguntasActuales.length) mostrarPregunta();
    else mostrarResultado();
  });

  /* =========================
     RESULTADO FINAL
  ========================= */
  function calcularPuntajeTotal() {
    return preguntasActuales.reduce((acc, p) => acc + p.puntos, 0);
  }

  function mostrarResultado() {
    clearInterval(timerInterval);
    quizContainer.style.display = 'none';

    const puntajeTotal = calcularPuntajeTotal() || 1;
    const porcentaje = (score / puntajeTotal) * 100;
    const aprobado = porcentaje >= 87;

    scorePuntos.innerText = `${score}/${puntajeTotal}`;
    scoreRing.style.setProperty('--progreso', `${Math.min(porcentaje, 100)}%`);

    badgeEstado.classList.toggle('reprobado', !aprobado);
    badgeTexto.innerText = aprobado ? 'Aprobado' : 'Reprobado';
    badgeEstado.querySelector('i').className = aprobado ? 'fas fa-check' : 'fas fa-times';

    statCorrectas.innerText = correctasCount;
    statErradas.innerText = erradasCount;
    const tiempoUsado = tiempoTotalSeg - tiempoRestante;
    const min = Math.floor(tiempoUsado / 60);
    const seg = tiempoUsado % 60;
    statTiempo.innerText = `${min}:${seg.toString().padStart(2, '0')}`;

    textoPuntaje.innerText = aprobado
      ? "¡Aprobaste el Quiz de Nivelación!"
      : "No alcanzaste el puntaje mínimo. Sigue practicando.";

    const incentivoAnterior = document.getElementById('bloque-incentivo');
    if (incentivoAnterior) incentivoAnterior.remove();

    if (!aprobado) {
      const incentivo = document.createElement('div');
      incentivo.id = 'bloque-incentivo';
      incentivo.style.textAlign = 'center';
      incentivo.style.marginTop = '20px';

      const mensajeWhatsapp = encodeURIComponent(
        `Hola, hice el quiz de nivelación en memanejo.cl y obtuve ${score}/${puntajeTotal} puntos. Quiero revisar mis errores.`
      );
      const numeroWhatsapp = "56946914558"; // 👈 reemplaza por tu número real

      incentivo.innerHTML = `
    <p style="font-size:14px; color:#ccc; margin-bottom:12px;">
      ¿Quieres saber en qué preguntas fallaste y por qué?
    </p>

    <a href="https://wa.me/${numeroWhatsapp}?text=${mensajeWhatsapp}" target="_blank"
  class="btn-incentivo">
  Revisa tus errores por solo
  <span class="btn-incentivo-precio">$1.990</span>
</a>

    <small class="acceso-text">
       Te contactaremos por <i class="fab fa-whatsapp"></i>WhatsApp
    </small>
  `;
      textoPuntaje.parentNode.appendChild(incentivo);
    }

emailjs.send("service_ujyq6hg", "template_o43bfnj", {
  nombre: localStorage.getItem("nombre") || "Invitado",
  correo: localStorage.getItem("correo") || "sin_correo",
  telefono: localStorage.getItem("telefono") || "sin_telefono",
  puntaje: score,
  total: puntajeTotal,
  porcentaje: porcentaje.toFixed(0),
  estado: aprobado ? "Aprobado" : "No aprobado",
  errores: errores.join('\n\n')
}).then(() => {
  console.log("Resultado enviado por correo correctamente");
}).catch(err => {
  console.error("Error enviando resultado:", err);
});

    // Modal

    modal.classList.remove('oculto');

    const textoParaCompartir = encodeURIComponent(
      `Obtuve ${score} puntos (${porcentaje.toFixed(0)}%) en el quiz de Nivelación 🚗 en www.memanejo.cl`
    );
    btnCompartir.href = `https://twitter.com/intent/tweet?text=${textoParaCompartir}`;
  }
  window.mostrarResultado = mostrarResultado;

  btnCompartir.addEventListener('click', (e) => {
    e.preventDefault();
    window.open(btnCompartir.href, '_blank', 'noopener,noreferrer');
  });

if (btnInstagram) {
  btnInstagram.addEventListener('click', async (e) => {
    e.preventDefault();

    const captura = document.getElementById('captura');
    const texto = `Obtuve ${score}/${calcularPuntajeTotal()} puntos en el quiz de memanejo.cl 🚗`;

    try {
      // Genera la imagen del resultado
      const canvas = await html2canvas(captura, { backgroundColor: '#121212' });
      const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
      const archivo = new File([blob], 'resultado-quiz-memanejo.png', { type: 'image/png' });

      // Si el navegador soporta compartir archivos (mayoría de celulares)
      if (navigator.canShare && navigator.canShare({ files: [archivo] })) {
        await navigator.share({
          files: [archivo],
          title: 'Mi resultado en memanejo.cl',
          text: texto
        });
        return;
      }

      // Si soporta compartir pero no archivos (algunos navegadores)
      if (navigator.share) {
        await navigator.share({
          title: 'Mi resultado en memanejo.cl',
          text: texto
        });
        return;
      }

    } catch (err) {
      // El usuario canceló el share, o hubo un error real
      if (err.name !== 'AbortError') {
        console.error("Error al compartir:", err);
      }
    }
  });
}
// Al final de tu DOMContentLoaded, junto a las otras inicializaciones
if (btnInstagram && !navigator.share) {
  btnInstagram.style.display = 'none';
}

  btnReintentar.addEventListener('click', () => {
    modal.classList.add('oculto');
    quizContainer.style.display = 'none';
    pantallaBienvenida.style.display = 'flex';
    correctasCount = 0;
    erradasCount = 0;
    resetearEstado();
  });

  btnDescargar.addEventListener('click', () => {
    const captura = document.getElementById('captura');
    html2canvas(captura, { backgroundColor: '#121212' }).then(canvas => {
      const link = document.createElement('a');
      link.download = 'resultado-quiz-nivelacion-memanejo.png';
      link.href = canvas.toDataURL();
      link.click();
    });
  });

  btnVolver.addEventListener('click', () => {
    modal.classList.add('oculto');
    quizContainer.style.display = 'none';
    pantallaBienvenida.style.display = 'flex';
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    iniciarQuiz();
  });
});