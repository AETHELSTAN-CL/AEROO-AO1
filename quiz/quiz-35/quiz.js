document.addEventListener("DOMContentLoaded", () => {

  let preguntasActuales = [];
  let indice = 0;
  let score = 0;
  let correctasCount = 0;
  let erradasCount = 0;
  let tiempoRestante = 0;
  let tiempoTotalSeg = 0;
  let timerInterval = null;

  // ===== Sortea 35 preguntas del banco, garantizando 3 de doble puntaje =====
  function armarExamenMunicipal() {
    const especiales = bancoExamenMunicipal.filter(p =>
      ["alcohol", "cinturon", "retencion_infantil"].includes(p.categoria)
    );
    const generales = bancoExamenMunicipal.filter(p => p.categoria === "general");

    const especialesSorteadas = mezclarArray(especiales).slice(0, 3);
    const generalesSorteadas = mezclarArray(generales).slice(0, 32);

    const examen = mezclarArray([...especialesSorteadas, ...generalesSorteadas]);

    return examen.map(p => ({
      ...p,
      puntos: p.categoria !== "general" ? 2 : 1
    }));
  }

  function mezclarArray(array) {
    const copia = [...array];
    for (let i = copia.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copia[i], copia[j]] = [copia[j], copia[i]];
    }
    return copia;
  }

  // Elementos DOM
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
  const btnReintentar = document.getElementById('btn-reintentar');
  const btnVolver = document.getElementById('btn-volver');

  // Elementos del nuevo modal de resultado
  const scoreRing = document.getElementById('scoreRing');
  const scorePuntos = document.getElementById('scorePuntos');
  const badgeEstado = document.getElementById('badgeEstado');
  const badgeTexto = document.getElementById('badgeTexto');
  const statCorrectas = document.getElementById('statCorrectas');
  const statErradas = document.getElementById('statErradas');
  const statTiempo = document.getElementById('statTiempo');

  // Crear y mostrar contador de tiempo
  const tiempoElemento = document.createElement('div');
  tiempoElemento.id = 'tiempo-restante';
  tiempoElemento.style.marginBottom = '15px';
  tiempoElemento.style.fontWeight = 'bold';
  quizContainer.insertBefore(tiempoElemento, preguntaElemento);

  // Selección de dificultad
  document.getElementById('btn-facil').addEventListener('click', () => iniciarQuiz('facil'));
  document.getElementById('btn-avanzado').addEventListener('click', () => iniciarQuiz('avanzado'));

  function iniciarQuiz(dificultad) {
    pantallaBienvenida.style.display = 'none';
    quizContainer.style.display = 'flex';
    quizContainer.style.flexDirection = 'column';
    quizContainer.style.justifyContent = 'center';
    quizContainer.style.alignItems = 'center';
    quizContainer.style.minHeight = '100dvh';
    quizContainer.style.overflow = 'hidden';
    tiempoElemento.style.display = 'block';

    indice = 0;
    score = 0;
    correctasCount = 0;
    erradasCount = 0;
    preguntasActuales = dificultad === 'facil' ? preguntasFacil : armarExamenMunicipal();

    // Tiempo
    tiempoTotalSeg = dificultad === 'facil' ? 35 * 60 : 45 * 60;
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

  function actualizarTiempo() {
    const min = Math.floor(tiempoRestante / 60);
    const seg = tiempoRestante % 60;
    tiempoElemento.innerText = `Tiempo restante: ⏱ ${min.toString().padStart(2, '0')}:${seg.toString().padStart(2, '0')}`;
  }

  function mostrarPregunta() {
    resetearEstado();
    const q = preguntasActuales[indice];
    if (!q) return;

    preguntaElemento.innerText = q.pregunta;
    progresoElemento.innerText = `Pregunta ${indice + 1} de ${preguntasActuales.length}`;

    q.respuestas.forEach(r => {
      const btn = document.createElement('button');
      btn.innerText = r.texto;
      btn.classList.add('btn');
      btn.dataset.correcta = r.correcta ? "true" : "false";
      btn.addEventListener('click', seleccionarRespuesta);
      respuestasElemento.appendChild(btn);
    });
  }

  function resetearEstado() {
    btnSiguiente.style.display = 'none';
    respuestasElemento.style.display = 'flex';
    respuestasElemento.style.flexDirection = 'column';
    respuestasElemento.style.alignItems = 'center';
    respuestasElemento.style.gap = '10px';
    while (respuestasElemento.firstChild) {
      respuestasElemento.removeChild(respuestasElemento.firstChild);
    }
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
      if (btn.dataset.correcta === "true") {
        btn.classList.add('correct');
      } else {
        btn.classList.add('wrong');
      }
    });

    if (!correcta) {
      seleccion.classList.add('selected-wrong');
    }

    btnSiguiente.style.display = 'inline-block';
  }

  btnSiguiente.addEventListener('click', () => {
    indice++;
    if (indice < preguntasActuales.length) mostrarPregunta();
    else mostrarResultado();
  });

  function mostrarResultado() {
    clearInterval(timerInterval);

    quizContainer.style.display = 'none';

    const puntajeTotal = calcularPuntajeTotal();
    const porcentaje = puntajeTotal > 0 ? (score / puntajeTotal) * 100 : 0;
    const aprobado = preguntasActuales.length === 35 ? score >= 33 : porcentaje >= 87;

    // Anillo de progreso
    scorePuntos.innerText = `${score}/${puntajeTotal}`;
    scoreRing.style.setProperty('--progreso', `${Math.min(porcentaje, 100)}%`);

    // Badge aprobado/reprobado
    badgeEstado.classList.toggle('reprobado', !aprobado);
    badgeTexto.innerText = aprobado ? 'Aprobado' : 'Reprobado';
    badgeEstado.querySelector('i').className = aprobado ? 'fas fa-check' : 'fas fa-times';

    // Stats
    statCorrectas.innerText = correctasCount;
    statErradas.innerText = erradasCount;
    const tiempoUsado = tiempoTotalSeg - tiempoRestante;
    const min = Math.floor(tiempoUsado / 60);
    const seg = tiempoUsado % 60;
    statTiempo.innerText = `${min}:${seg.toString().padStart(2, '0')}`;

    // Mensaje principal
    textoPuntaje.innerText = aprobado
      ? "🎉 ¡Aprobaste el Quiz!"
      : "No alcanzaste el puntaje mínimo para aprobar.";

    modal.classList.remove('oculto');

    const textoParaCompartir = encodeURIComponent(`Obtuve ${score} puntos (${porcentaje.toFixed(0)}%) en el quiz Clase B 🚗 en www.memanejo.cl`);
    btnCompartir.href = `https://twitter.com/intent/tweet?text=${textoParaCompartir}`;
  }
  window.mostrarResultado = mostrarResultado;

  function calcularPuntajeTotal() {
    return preguntasActuales.reduce((acc, p) => acc + p.puntos, 0);
  }

  // Compartir en Twitter (fix: abre manualmente por si el navegador bloquea el <a>)
  btnCompartir.addEventListener('click', (e) => {
    e.preventDefault();
    window.open(btnCompartir.href, '_blank', 'noopener,noreferrer');
  });

  // Reintentar
  btnReintentar.addEventListener('click', () => {
    modal.classList.add('oculto');
    quizContainer.style.display = 'none';
    pantallaBienvenida.style.display = 'flex';
    correctasCount = 0;
    erradasCount = 0;
    resetearEstado();
  });

  // Descargar imagen
  btnDescargar.addEventListener('click', () => {
    const captura = document.getElementById('captura');
    const originalHeight = captura.style.height;
    const originalOverflow = captura.style.overflow;

    captura.style.height = 'auto';
    captura.style.overflow = 'visible';

    html2canvas(captura).then(canvas => {
      const link = document.createElement('a');
      link.download = 'resultado-quiz-memanejo.png';
      link.href = canvas.toDataURL();
      link.click();

      captura.style.height = originalHeight;
      captura.style.overflow = originalOverflow;
    });
  });

  btnVolver.addEventListener('click', () => {
    modal.classList.add('oculto');
    quizContainer.style.display = 'none';
    pantallaBienvenida.style.display = 'flex';
  });
});