document.addEventListener("DOMContentLoaded", () => {
  let preguntasActuales = [];
  let indice = 0;
  let score = 0;
  let correctasCount = 0;
  let erradasCount = 0;
  let errores = [];

  let tiempoRestante = 0;
  let tiempoTotalSeg = 0;
  let timerInterval = null;

  let resultadoEnviado = false;

  let datosUsuario = {
    nombre: "",
    correo: "",
    telefono: ""
  };

  // ===== Elementos HTML =====
  const pantallaBienvenida = document.getElementById("pantalla-bienvenida");
  const quizContainer = document.getElementById("quiz-container");
  const formulario = document.getElementById("form-usuario");

  const preguntaElemento = document.getElementById("question");
  const respuestasElemento = document.getElementById("answer-buttons");
  const btnSiguiente = document.getElementById("next-btn");
  const progresoElemento = document.getElementById("progress");
  const tiempoElemento = document.getElementById("tiempo-restante");

  const modal = document.getElementById("modal-memanejo");
  const textoPuntaje = document.getElementById("texto-puntaje");
  const btnDescargar = document.getElementById("btn-descargar-img");
  const btnCompartir = document.getElementById("btn-compartir");
  const btnInstagram = document.getElementById("btn-instagram");
  const btnReintentar = document.getElementById("btn-reintentar");
  const btnVolver = document.getElementById("btn-volver");
  // ===== Toggle de estilos (Oficial / memanejo) =====
  const temaToggle = document.getElementById("temaToggle");
  const temaLabelOff = document.getElementById("temaLabelOff");
  const temaLabelOn = document.getElementById("temaLabelOn");



  const scoreRing = document.getElementById("scoreRing");
  const scorePuntos = document.getElementById("scorePuntos");
  const badgeEstado = document.getElementById("badgeEstado");
  const badgeTexto = document.getElementById("badgeTexto");
  const statCorrectas = document.getElementById("statCorrectas");
  const statErradas = document.getElementById("statErradas");
  const statTiempo = document.getElementById("statTiempo");

  // ===== Sortea 35 preguntas: 3 especiales y 32 generales =====
  function armarExamenMunicipal() {
    const especiales = bancoExamenMunicipal.filter((pregunta) =>
      ["alcohol", "cinturon", "retencion_infantil"].includes(
        pregunta.categoria
      )
    );

    const generales = bancoExamenMunicipal.filter(
      (pregunta) => pregunta.categoria === "general"
    );

    const especialesSorteadas = mezclarArray(especiales).slice(0, 3);
    const generalesSorteadas = mezclarArray(generales).slice(0, 32);

    const examen = mezclarArray([
      ...especialesSorteadas,
      ...generalesSorteadas
    ]);

    return examen.map((pregunta) => ({
      ...pregunta,
      respuestas: mezclarArray(pregunta.respuestas),
      puntos: pregunta.categoria !== "general" ? 2 : 1
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


  // ===== Carga de usuarios desde JSON =====
  let usuariosDB = [];

  async function cargarUsuarios() {
    try {
      const res = await fetch("/data/usuarios.json");
      usuariosDB = await res.json();
    } catch (err) {
      console.error("Error cargando usuarios:", err);
      usuariosDB = [];
    }
  }

  cargarUsuarios();

  function mostrarErrorLogin(mensaje) {
    const errorElemento = document.getElementById("login-error-msg");
    if (!errorElemento) return;

    errorElemento.textContent = mensaje;
    errorElemento.style.display = "block";

    setTimeout(() => {
      errorElemento.style.display = "none";
    }, 4000);
  }
  function aplicarModo(modo) {
    document.body.classList.toggle("modo-activado", modo === "activado");
    temaToggle?.setAttribute("aria-pressed", modo === "activado" ? "true" : "false");
    temaLabelOff?.classList.toggle("activo", modo !== "activado");
    temaLabelOn?.classList.toggle("activo", modo === "activado");
    localStorage.setItem("memanejoModo", modo);
  }

  // Carga la preferencia guardada (por defecto: Estilo Oficial)
  aplicarModo(localStorage.getItem("memanejoModo") || "oficial");

  temaToggle?.addEventListener("click", () => {
    const nuevoModo = document.body.classList.contains("modo-activado")
      ? "oficial"
      : "activado";
    aplicarModo(nuevoModo);
  });
  // ===== Inicio desde el formulario (con login) =====
  formulario.addEventListener("submit", async (e) => {
    e.preventDefault();

    const correo = document.getElementById("correo").value.trim();
    const memanejoId = document.getElementById("memanejoId").value.trim();

    // Por si el fetch inicial aún no terminó
    if (usuariosDB.length === 0) {
      await cargarUsuarios();
    }

    const usuarioValido = usuariosDB.find(
      (u) => u.email === correo && u.memanejoId === memanejoId
    );

    if (!usuarioValido) {
      mostrarErrorLogin("Correo o memanejo ID incorrecto.");
      return;
    }

    datosUsuario = {
      nombre: usuarioValido.nombre,
      correo: usuarioValido.email,
      telefono: usuarioValido.telefono || ""
    };

    iniciarQuiz();
  });

  function iniciarQuiz() {
    pantallaBienvenida.style.display = "none";
    document.getElementById("tiempo-restante").classList.add("visible");
    quizContainer.style.display = "flex";
    quizContainer.style.flexDirection = "column";
    quizContainer.style.justifyContent = "center";
    quizContainer.style.alignItems = "center";
    quizContainer.style.minHeight = "100dvh";

    modal.classList.add("oculto");

    indice = 0;
    score = 0;
    correctasCount = 0;
    erradasCount = 0;
    errores = [];
    resultadoEnviado = false;

    preguntasActuales = armarExamenMunicipal();

    // 45 minutos para las 35 preguntas.
    tiempoTotalSeg = 45 * 60;
    tiempoRestante = tiempoTotalSeg;

    actualizarTiempo();

    if (timerInterval) {
      clearInterval(timerInterval);
    }

    timerInterval = setInterval(() => {
      tiempoRestante--;

      if (tiempoRestante <= 0) {
        tiempoRestante = 0;
        actualizarTiempo();
        clearInterval(timerInterval);
        mostrarResultado();
        return;
      }

      actualizarTiempo();
    }, 1000);

    mostrarPregunta();
  }

  function actualizarTiempo() {
    const min = Math.floor(tiempoRestante / 60);
    const seg = tiempoRestante % 60;

    tiempoElemento.innerText =
      `Tiempo restante: ⏱ ${min.toString().padStart(2, "0")}:` +
      `${seg.toString().padStart(2, "0")}`;
  }

  function mostrarPregunta() {
    resetearEstado();

    const preguntaActual = preguntasActuales[indice];

    if (!preguntaActual) {
      mostrarResultado();
      return;
    }

    preguntaElemento.innerText = preguntaActual.pregunta;
    progresoElemento.innerText =
      `Pregunta ${indice + 1} de ${preguntasActuales.length}`;

    preguntaActual.respuestas.forEach((respuesta) => {
      const botonRespuesta = document.createElement("button");

      botonRespuesta.type = "button";
      botonRespuesta.innerText = respuesta.texto;
      botonRespuesta.classList.add("btn");
      botonRespuesta.dataset.correcta = respuesta.correcta ? "true" : "false";

      botonRespuesta.addEventListener("click", seleccionarRespuesta);

      respuestasElemento.appendChild(botonRespuesta);
    });
  }

  function resetearEstado() {
    btnSiguiente.style.display = "none";

    respuestasElemento.style.display = "flex";
    respuestasElemento.style.flexDirection = "column";
    respuestasElemento.style.alignItems = "center";
    respuestasElemento.style.gap = "10px";

    while (respuestasElemento.firstChild) {
      respuestasElemento.removeChild(respuestasElemento.firstChild);
    }
  }

  function seleccionarRespuesta(e) {
    const seleccion = e.currentTarget;
    const preguntaActual = preguntasActuales[indice];
    const esCorrecta = seleccion.dataset.correcta === "true";

    // Evita seleccionar más de una respuesta
    if (seleccion.disabled) return;

    // Deshabilitar todas las respuestas
    const botones = Array.from(respuestasElemento.children);

    botones.forEach((boton) => {
      boton.disabled = true;
    });

    if (esCorrecta) {
      // =========================
      // RESPUESTA CORRECTA
      // =========================
      score += preguntaActual.puntos;
      correctasCount++;

      seleccion.classList.add("correct");

    } else {
      // =========================
      // RESPUESTA INCORRECTA
      // =========================
      erradasCount++;

      seleccion.classList.add("selected-wrong");

      const respuestaCorrecta = preguntaActual.respuestas.find(
        (respuesta) => respuesta.correcta
      );

      errores.push(
        `Pregunta ${indice + 1}: ${preguntaActual.pregunta}\n` +
        `Tu respuesta: ${seleccion.innerText}\n` +
        `Respuesta correcta: ${respuestaCorrecta?.texto || "No disponible"}`
      );

      // Buscar y marcar la respuesta correcta
      const botonCorrecto = botones.find(
        (boton) => boton.dataset.correcta === "true"
      );

      if (botonCorrecto) {
        botonCorrecto.classList.add("correct");
      }
    }

    // ========================================
    // OCULTAR LAS OTRAS RESPUESTAS INCORRECTAS
    // ========================================

    botones.forEach((boton) => {
      const esSeleccionada = boton === seleccion;
      const esRespuestaCorrecta = boton.dataset.correcta === "true";

      if (!esSeleccionada && !esRespuestaCorrecta) {
        boton.classList.add("respuesta-oculta");
      }
    });

    // Mostrar botón siguiente
    btnSiguiente.style.display = "inline-block";

    // ========================================
    // DESPUÉS DE 6 SEGUNDOS
    // ========================================

    setTimeout(() => {
      // Oscurecer/tapar el texto de la respuesta seleccionada
      // y de la respuesta correcta.
      seleccion.classList.add("feedback-final");

      const botonCorrecto = botones.find(
        (boton) => boton.dataset.correcta === "true"
      );

      if (botonCorrecto) {
        botonCorrecto.classList.add("feedback-final");
      }

    }, 6000);
  }


  btnSiguiente.addEventListener("click", () => {
    indice++;

    if (indice < preguntasActuales.length) {
      mostrarPregunta();
    } else {
      mostrarResultado();
    }
  });


  function calcularPuntajeTotal() {
    return preguntasActuales.reduce(
      (total, pregunta) => total + pregunta.puntos,
      0
    );
  }

  // ===== Resultado, incentivo y EmailJS =====
  function mostrarResultado() {
    // Evita que se envíen dos correos por el mismo intento.
    if (resultadoEnviado) {
      return;
    }

    resultadoEnviado = true;
    clearInterval(timerInterval);

    quizContainer.style.display = "none";

    const puntajeTotal = calcularPuntajeTotal();
    const porcentaje = puntajeTotal > 0 ? (score / puntajeTotal) * 100 : 0;

    // Para el examen municipal de 35 preguntas.
    const aprobado = preguntasActuales.length === 35
      ? score >= 33
      : porcentaje >= 87;

    const tiempoUsado = tiempoTotalSeg - tiempoRestante;
    const min = Math.floor(tiempoUsado / 60);
    const seg = tiempoUsado % 60;
    const tiempoUsadoTexto = `${min}:${seg.toString().padStart(2, "0")}`;

    // Modal de resultado.
    scorePuntos.innerText = `${score}/${puntajeTotal}`;

    scoreRing.style.setProperty(
      "--progreso",
      `${Math.min(porcentaje, 100)}%`
    );

    badgeEstado.classList.toggle("reprobado", !aprobado);
    badgeTexto.innerText = aprobado ? "Aprobado" : "Reprobado";

    badgeEstado.querySelector("i").className = aprobado
      ? "fas fa-check"
      : "fas fa-times";

    statCorrectas.innerText = correctasCount;
    statErradas.innerText = erradasCount;
    statTiempo.innerText = tiempoUsadoTexto;

    textoPuntaje.innerText = aprobado
      ? "¡Aprobaste el Quiz!"
      : "No alcanzaste el puntaje mínimo para aprobar.";

    // Elimina un incentivo anterior, antes de crear uno nuevo.
    const incentivoAnterior = document.getElementById("bloque-incentivo");

    if (incentivoAnterior) {
      incentivoAnterior.remove();
    }

    // Incentivo solo para quien no aprueba.
    if (!aprobado) {
      const incentivo = document.createElement("div");

      incentivo.id = "bloque-incentivo";
      incentivo.style.textAlign = "center";
      incentivo.style.marginTop = "20px";

      const mensajeWhatsapp = encodeURIComponent(
        `Hola, hice el quiz en memanejo.cl y obtuve ${score}/${puntajeTotal} puntos. Quiero revisar mis errores.`
      );

      const numeroWhatsapp = "56946914558";

      incentivo.innerHTML = `
  <p class="texto-incentivo">
    ¿Quieres saber en qué preguntas fallaste y por qué?
  </p>


        <a
          href="https://wa.me/${numeroWhatsapp}?text=${mensajeWhatsapp}"
          target="_blank"
          rel="noopener"
          class="btn-incentivo">
          Revisa tus errores por solo
          <span class="btn-incentivo-precio">$1.990</span>
        </a>

        <small class="acceso-text">
  Te contactaremos por
  <i class="fab fa-whatsapp" style="color:#25D366;"></i> WhatsApp
</small>

      `;

      textoPuntaje.parentNode.appendChild(incentivo);
    }

    modal.classList.remove("oculto");
    tiempoElemento.classList.remove("visible");


    // Correo para el administrador mediante EmailJS.
    emailjs.send("service_ujyq6hg", "template_o43bfnj", {
      nombre: datosUsuario.nombre,
      correo: datosUsuario.correo,
      telefono: datosUsuario.telefono,
      puntaje: score,
      total: puntajeTotal,
      porcentaje: porcentaje.toFixed(0),
      estado: aprobado ? "Aprobado" : "No aprobado",
      correctas: correctasCount,
      erradas: erradasCount,
      tiempo: tiempoUsadoTexto,
      errores: errores.length
        ? errores.join("\n\n")
        : "El usuario no registró respuestas incorrectas."
    })
      .then(() => {
        console.log("Resultado enviado por correo correctamente.");
      })
      .catch((error) => {
        console.error("Error enviando resultado:", error);
      });

    const textoParaCompartir = encodeURIComponent(
      `Obtuve ${score} puntos (${porcentaje.toFixed(0)}%) ` +
      "en el quiz Clase B 🚗 en www.memanejo.cl"
    );

    btnCompartir.href =
      `https://twitter.com/intent/tweet?text=${textoParaCompartir}`;
  }

  window.mostrarResultado = mostrarResultado;

  // ===== Botones del resultado =====
  btnCompartir.addEventListener("click", (e) => {
    e.preventDefault();
    window.open(btnCompartir.href, "_blank", "noopener,noreferrer");
  });

  btnInstagram.addEventListener("click", async (e) => {
    e.preventDefault();

    const captura = document.getElementById("captura");
    const texto = `Obtuve ${score}/${calcularPuntajeTotal()} puntos en el quiz Clase B 🚗 en memanejo.cl`;

    try {
      const canvas = await html2canvas(captura, {
        scale: 2
      });

      const blob = await new Promise((resolve) => {
        canvas.toBlob(resolve, "image/png");
      });

      const imagen = new File(
        [blob],
        "resultado-quiz-memanejo.png",
        { type: "image/png" }
      );

      // En celular: abre el menú para seleccionar Instagram.
      if (navigator.canShare && navigator.canShare({ files: [imagen] })) {
        await navigator.share({
          title: "Mi resultado en memanejo.cl",
          text: texto,
          files: [imagen]
        });
        return;
      }

      // En computador: descarga la imagen.
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "resultado-quiz-manejo.png";
      link.click();

      URL.revokeObjectURL(link.href);

      alert("La imagen fue descargada. Ahora puedes subirla a Instagram.");
    } catch (error) {
      // No muestra error si el usuario cerró el menú de compartir.
      if (error.name !== "AbortError") {
        console.error("No se pudo compartir la imagen:", error);
      }
    }
  });

  btnReintentar.addEventListener("click", () => {
    clearInterval(timerInterval);
    document.getElementById("tiempo-restante").classList.remove("visible");

    modal.classList.add("oculto");
    quizContainer.style.display = "none";
    pantallaBienvenida.style.display = "flex";

    formulario.reset();
    resetearEstado();
  });

  btnDescargar.addEventListener("click", () => {
    const captura = document.getElementById("captura");
    const alturaOriginal = captura.style.height;
    const overflowOriginal = captura.style.overflow;

    captura.style.height = "auto";
    captura.style.overflow = "visible";

    html2canvas(captura).then((canvas) => {
      const link = document.createElement("a");

      link.download = "resultado-quiz-memanejo.png";
      link.href = canvas.toDataURL("image/png");
      link.click();

      captura.style.height = alturaOriginal;
      captura.style.overflow = overflowOriginal;
    });
  });

  btnVolver.addEventListener("click", () => {
    clearInterval(timerInterval);
    document.getElementById("tiempo-restante").classList.remove("visible");

    quizContainer.style.display = "none";
    modal.classList.add("oculto");
    pantallaBienvenida.style.display = "flex";

    formulario.reset();
    resetearEstado();
  });
  window.testResultado = function () {
    score = 33;
    correctasCount = 30;
    erradasCount = 5;
    mostrarResultado();
  };

});