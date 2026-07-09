document.addEventListener("DOMContentLoaded", () => {

  const preguntasNivelacion = [
    {
      pregunta: "¿Cuál es el nivel máximo de alcohol permitido en sangre para conductores profesionales en Chile?",
      respuestas: [
        { texto: "0,3 g/L", correcta: false },
        { texto: "0,0 g/L", correcta: true },
        { texto: "0,4 g/L", correcta: false },
        { texto: "0,8 g/L", correcta: false }
      ],
      puntos: 3
    },
    {
      pregunta: "¿En qué situación debe utilizarse la luz de retroceso?",
      respuestas: [
        { texto: "Solo cuando retrocede y hay peatones cerca", correcta: false },
        { texto: "Cada vez que retrocede", correcta: true },
        { texto: "Solo en la noche", correcta: false },
        { texto: "Cuando el vehículo está detenido", correcta: false }
      ],
      puntos: 3
    },
    {
      pregunta: "¿Qué sanción corresponde a conducir sin haber obtenido licencia?",
      respuestas: [
        { texto: "Multa leve", correcta: false },
        { texto: "Multa grave y retención del vehículo", correcta: true },
        { texto: "Solo una advertencia", correcta: false },
        { texto: "Arresto inmediato", correcta: false }
      ],
      puntos: 3
    },
    {
      pregunta: "¿Qué medida reduce la posibilidad de que el vehículo derrape en una curva?",
      respuestas: [
        { texto: "Frenar dentro de la curva", correcta: false },
        { texto: "Acelerar a fondo", correcta: false },
        { texto: "Reducir velocidad antes de la curva", correcta: true },
        { texto: "Tomarla por el interior", correcta: false }
      ],
      puntos: 3
    },
    {
      pregunta: "¿Cuándo debe utilizar cadenas en los neumáticos?",
      respuestas: [
        { texto: "En caminos con barro", correcta: false },
        { texto: "En caminos con nieve o hielo", correcta: true },
        { texto: "En caminos urbanos", correcta: false },
        { texto: "En autopistas", correcta: false }
      ],
      puntos: 3
    },
    {
      pregunta: "¿Qué debe hacer si un semáforo está apagado?",
      respuestas: [
        { texto: "Ignorarlo", correcta: false },
        { texto: "Cruzar sin mirar", correcta: false },
        { texto: "Tratar el cruce como no regulado y ceder el paso", correcta: true },
        { texto: "Esperar una patrulla", correcta: false }
      ],
      puntos: 3
    },
    {
      pregunta: "¿Qué indica una señal con una X roja sobre un semáforo de pista?",
      respuestas: [
        { texto: "Gire a la izquierda", correcta: false },
        { texto: "Carril cerrado", correcta: true },
        { texto: "Carril exclusivo", correcta: false },
        { texto: "Baje la velocidad", correcta: false }
      ],
      puntos: 3
    },
    {
      pregunta: "¿En qué momento debe realizarse la primera mantención a un auto nuevo?",
      respuestas: [
        { texto: "A los 20.000 km", correcta: false },
        { texto: "A los 10.000 km", correcta: false },
        { texto: "Según lo que indique el fabricante", correcta: true },
        { texto: "Nunca, si es nuevo", correcta: false }
      ],
      puntos: 3
    },
    {
      pregunta: "¿Qué distancia mínima de seguridad se debe mantener con el vehículo de adelante en carretera?",
      respuestas: [
        { texto: "1 segundo de distancia", correcta: false },
        { texto: "Al menos 3 segundos de distancia", correcta: true },
        { texto: "2 metros", correcta: false },
        { texto: "No hay distancia mínima", correcta: false }
      ],
      puntos: 2
    },
    {
      pregunta: "¿Qué indica una señal amarilla con una cruz negra?",
      respuestas: [
        { texto: "Cruce ferroviario", correcta: true },
        { texto: "Cruce peatonal", correcta: false },
        { texto: "Paso bajo nivel", correcta: false },
        { texto: "Cruce peligroso", correcta: false }
      ],
      puntos: 3
    },
    {
      pregunta: "¿Qué distancia mínima de seguridad se debe mantener con el vehículo de adelante en carretera?",
      respuestas: [
        { texto: "1 segundo de distancia", correcta: false },
        { texto: "2 segundos de distancia", correcta: true },
        { texto: "3 metros", correcta: false },
        { texto: "No hay distancia mínima", correcta: false }
      ],
      puntos: 2
    },
    {
      pregunta: "¿Qué significa una luz intermitente amarilla en un semáforo?",
      respuestas: [
        { texto: "Detenerse completamente", correcta: false },
        { texto: "Proceder con precaución", correcta: true },
        { texto: "Prioridad de paso al peatón", correcta: false },
        { texto: "Avanzar sin mirar", correcta: false }
      ],
      puntos: 2
    },
    {
      pregunta: "¿Cuál es la velocidad máxima en autopista urbana en Chile?",
      respuestas: [
        { texto: "80 km/h", correcta: false },
        { texto: "100 km/h", correcta: true },
        { texto: "120 km/h", correcta: false },
        { texto: "60 km/h", correcta: false }
      ],
      puntos: 2
    },
    {
      pregunta: "¿Qué indica una línea amarilla discontinua en el pavimento?",
      respuestas: [
        { texto: "No se puede adelantar", correcta: false },
        { texto: "Se puede adelantar con precaución", correcta: true },
        { texto: "Zona peatonal", correcta: false },
        { texto: "Carril exclusivo", correcta: false }
      ],
      puntos: 2
    },
    {
      pregunta: "¿Qué acción se debe tomar ante un peatón cruzando fuera de la cebra?",
      respuestas: [
        { texto: "Ignorarlo", correcta: false },
        { texto: "Reducir velocidad y ceder el paso", correcta: true },
        { texto: "Solo tocar bocina", correcta: false },
        { texto: "Acelerar para pasar antes", correcta: false }
      ],
      puntos: 3
    },
    {
      pregunta: "¿Cuál es la sanción por exceso de velocidad en zona urbana?",
      respuestas: [
        { texto: "Multa leve", correcta: false },
        { texto: "Multa grave", correcta: true },
        { texto: "Solo advertencia", correcta: false },
        { texto: "Arresto", correcta: false }
      ],
      puntos: 3
    },
    {
      pregunta: "Según la Ley de Tránsito N°18.290, ¿qué ocurre si un conductor acumula 20 puntos en infracciones en un período de 12 meses?",
      respuestas: [
        { texto: "Pierde su licencia de conducir de forma indefinida.", correcta: false },
        { texto: "Debe rendir nuevamente los exámenes teórico y práctico.", correcta: true },
        { texto: "Solo recibe una multa adicional.", correcta: false },
        { texto: "Debe asistir a una charla de educación vial.", correcta: false }
      ],
      puntos: 2
    },
    {
      pregunta: "¿Cuál es la distancia mínima que se debe mantener al adelantar una bicicleta?",
      respuestas: [
        { texto: "1 metro", correcta: false },
        { texto: "1,5 metros", correcta: true },
        { texto: "2 metros", correcta: false },
        { texto: "50 cm", correcta: false }
      ],
      puntos: 3
    },
    {
      pregunta: "¿Qué indica una señal de tránsito triangular con borde rojo y fondo blanco?",
      respuestas: [
        { texto: "Prohibición", correcta: false },
        { texto: "Advertencia de peligro", correcta: true },
        { texto: "Información general", correcta: false },
        { texto: "Zona de velocidad mínima", correcta: false }
      ],
      puntos: 3
    },
    {
      pregunta: "¿Qué debe hacer si su vehículo comienza a derrapar sobre hielo?",
      respuestas: [
        { texto: "Frenar bruscamente", correcta: false },
        { texto: "Girar el volante en dirección del derrape", correcta: true },
        { texto: "Acelerar", correcta: false },
        { texto: "Apagar el motor", correcta: false }
      ],
      puntos: 3
    },
    {
      pregunta: "¿En qué situación puede usar el bocina en ciudad?",
      respuestas: [
        { texto: "Para saludar a un amigo", correcta: false },
        { texto: "Para advertir peligro inmediato", correcta: true },
        { texto: "Siempre que quiera", correcta: false },
        { texto: "Al estacionar", correcta: false }
      ],
      puntos: 3
    },
    {
      pregunta: "¿Cuál es la prioridad en un cruce con semáforo apagado?",
      respuestas: [
        { texto: "Vehículos a la derecha tienen prioridad", correcta: true },
        { texto: "Vehículos más grandes tienen prioridad", correcta: false },
        { texto: "Peatones siempre deben ceder", correcta: false },
        { texto: "No existe prioridad", correcta: false }
      ],
      puntos: 3
    },
    {
      pregunta: "¿Qué debe hacer si ve una señal de ceda el paso?",
      respuestas: [
        { texto: "Detenerse siempre", correcta: false },
        { texto: "Reducir velocidad y ceder el paso si hay tránsito", correcta: true },
        { texto: "Acelerar para pasar primero", correcta: false },
        { texto: "Ignorarla", correcta: false }
      ],
      puntos: 3
    },
    {
      pregunta: "¿Qué indica una línea amarilla continua al lado derecho del carril?",
      respuestas: [
        { texto: "Zona de adelantamiento permitido", correcta: false },
        { texto: "Prohibición de adelantar", correcta: true },
        { texto: "Carril exclusivo para bicicletas", correcta: false },
        { texto: "Zona de estacionamiento", correcta: false }
      ],
      puntos: 3
    },
    {
      pregunta: "¿Cuál es la velocidad máxima en autopistas interurbanas en Chile, salvo señalización?",
      respuestas: [
        { texto: "100 km/h", correcta: false },
        { texto: "120 km/h", correcta: true },
        { texto: "80 km/h", correcta: false },
        { texto: "110 km/h", correcta: false }
      ],
      puntos: 3
    },
    {
      pregunta: "¿Qué indica una luz verde intermitente de semáforo?",
      respuestas: [
        { texto: "Prepararse para detener", correcta: false },
        { texto: "Precaución, el semáforo cambiará pronto a rojo", correcta: true },
        { texto: "Vehículos pueden cruzar sin precaución", correcta: false },
        { texto: "Semáforo fuera de servicio", correcta: false }
      ],
      puntos: 3
    },
    {
      pregunta: "¿Qué documentos debe portar obligatoriamente el conductor al circular?",
      respuestas: [
        { texto: "Licencia de conducir, cédula de identidad, permiso de circulación, SOAP y revisión técnica vigente.", correcta: true },
        { texto: "Solo la licencia de conducir.", correcta: false },
        { texto: "Solo el SOAP y la revisión técnica.", correcta: false },
        { texto: "Ningún documento si el vehículo está en buen estado.", correcta: false }
      ],
      puntos: 3
    },
    {
      pregunta: "¿Qué debe hacer antes de iniciar un adelantamiento?",
      respuestas: [
        { texto: "Acelerar inmediatamente", correcta: false },
        { texto: "Señalizar, verificar retrovisores y ángulo muerto", correcta: true },
        { texto: "Solo mirar al frente", correcta: false },
        { texto: "Tocar bovina para avisar", correcta: false }
      ],
      puntos: 3
    },
    {
      pregunta: "¿Cuándo debe usar luces bajas al conducir?",
      respuestas: [
        { texto: "Durante la noche o cuando haya poca visibilidad.", correcta: true },
        { texto: "Solo cuando llueve.", correcta: false },
        { texto: "Nunca dentro de la ciudad.", correcta: false },
        { texto: "Solo en autopistas.", correcta: false }
      ],
      puntos: 3
    },
    {
      pregunta: "¿Qué indica una señal de tránsito azul con símbolo blanco?",
      respuestas: [
        { texto: "Prohibición", correcta: false },
        { texto: "Información o servicios disponibles", correcta: true },
        { texto: "Advertencia de peligro", correcta: false },
        { texto: "Zona de estacionamiento exclusivo", correcta: false }
      ],
      puntos: 3
    },
    {
      pregunta: "¿Cuál es la función de los cinturones de seguridad?",
      respuestas: [
        { texto: "Solo evitar multas", correcta: false },
        { texto: "Reducir lesiones en caso de accidente", correcta: true },
        { texto: "No son obligatorios", correcta: false },
        { texto: "Solo para adultos", correcta: false }
      ],
      puntos: 3
    },
    {
      pregunta: "¿Qué sanción corresponde a estacionar en zona prohibida?",
      respuestas: [
        { texto: "Multa leve", correcta: false },
        { texto: "Multa y retiro del vehículo si aplica", correcta: true },
        { texto: "Solo advertencia verbal", correcta: false },
        { texto: "Arresto inmediato", correcta: false }
      ],
      puntos: 3
    },
    {
      pregunta: "¿Cuál es la forma correcta de pasar por un cruce peatonal?",
      respuestas: [
        { texto: "Acelerar para no detenerse", correcta: false },
        { texto: "Reducir velocidad y ceder el paso a peatones", correcta: true },
        { texto: "Ignorar si hay semáforo verde para el vehículo", correcta: false },
        { texto: "Solo parar si hay policía", correcta: false }
      ],
      puntos: 3
    },
    {
      pregunta: "¿Cuándo es obligatorio el uso de cadenas en caminos con nieve o hielo?",
      respuestas: [
        { texto: "Siempre que las condiciones lo requieran o la autoridad lo indique.", correcta: true },
        { texto: "Solo si hay aviso policial.", correcta: false },
        { texto: "Nunca, basta con conducir despacio.", correcta: false },
        { texto: "Solo en autopistas.", correcta: false }
      ],
      puntos: 3
    },
    {
      pregunta: "¿Qué indica un triángulo invertido rojo en la vía?",
      respuestas: [
        { texto: "Pare total", correcta: false },
        { texto: "Ceda el paso", correcta: true },
        { texto: "Prohibición de adelantar", correcta: false },
        { texto: "Zona de cruce escolar", correcta: false }
      ],
      puntos: 3
    }
  ];
/* =========================
    VARIABLES
========================= */
let preguntasActuales = [];
let indice = 0;
let score = 0;
let tiempoRestante = 0;
let timerInterval = null;
let errores = [];

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
const btnReintentar = document.getElementById('btn-reintentar');
const btnVolver = document.getElementById('btn-volver');
const form = document.getElementById('form-usuario');

/* =========================
   CONTADOR
========================= */
const tiempoElemento = document.createElement('div');
tiempoElemento.id = 'tiempo-restante';
tiempoElemento.style.marginBottom = '65px';
tiempoElemento.style.fontWeight = 'bold';
quizContainer.insertBefore(tiempoElemento, preguntaElemento);

/* =========================
   INICIAR QUIZ
========================= */
function iniciarQuiz() {
  localStorage.setItem("nombre", document.getElementById("nombre").value);
  localStorage.setItem("correo", document.getElementById("correo").value);
  localStorage.setItem("telefono", document.getElementById("telefono").value);

  pantallaBienvenida.style.display = 'none';
  quizContainer.style.display = 'flex';
  quizContainer.style.flexDirection = 'column';
  quizContainer.style.alignItems = 'center';

  preguntasActuales = [...preguntasNivelacion];
  indice = 0;
  score = 0;
  tiempoRestante = 45 * 60;

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
  tiempoElemento.innerText = `Tiempo restante: ⏱ ${min.toString().padStart(2,'0')}:${seg.toString().padStart(2,'0')}`;
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
  if (correcta) score += 1;

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
  return preguntasActuales.length;
}

function mostrarResultado() {
  clearInterval(timerInterval);
  quizContainer.style.display = 'none';
  tiempoElemento.style.display = 'none';
  btnSiguiente.style.display = 'none';

  const puntajeTotal = calcularPuntajeTotal();
  const porcentaje = (score / puntajeTotal) * 100;
  const aprobado = porcentaje >= 87;

  textoPuntaje.innerText = `Obtuviste ${score} puntos de ${puntajeTotal} posibles.`;
  const mensaje = document.createElement('p');
  mensaje.style.fontWeight = 'bold';
  mensaje.style.marginTop = '12px';
  mensaje.innerText = aprobado
    ? "🎉 ¡Aprobaste el Quiz!"
    : "❌ No alcanzaste el puntaje mínimo para aprobar.";
  textoPuntaje.parentNode.appendChild(mensaje);

  // ⚡️ INCENTIVO DE PAGO
  if (!aprobado) {
    const incentivo = document.createElement('div');
    incentivo.style.textAlign = 'center';
    incentivo.innerHTML = `
      <button id="btn-ver-errores" class="btn" style="background-color:#00a759; border-radius:30px; margin-top:10px;">
        Ver mis errores ($1.990)
      </button>
      <p style="font-size:12px; color:#888; margin-top:6px; line-height:1.3;">
        ¿Quieres ver en qué preguntas te equivocaste y aprender por qué?<br>
        Al presionar el botón podrás acceder al análisis completo de tus respuestas.
      </p>
    `;
    textoPuntaje.parentNode.appendChild(incentivo);

    document.getElementById('btn-ver-errores').addEventListener('click', () => {
      window.location.href = "https://www.memanejo.cl/pagos/errores";
    });
  }

  // 📤 Enviar resultados por correo
fetch("/php/enviar_resultado.php", {
  method: "POST",
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
  body: new URLSearchParams({
    nombre: localStorage.getItem("nombre") || "Invitado",
    correo: localStorage.getItem("correo") || "sin_correo",
    telefono: localStorage.getItem("telefono") || "sin_telefono",
    puntaje: score,
    total: puntajeTotal,
    porcentaje: porcentaje.toFixed(0),
    estado: aprobado ? "🎉 Aprobado" : "❌ No aprobado",
    errores: errores.join('<br><br>')  // <- Aquí mandas todos los errores
  })
})

  modal.classList.remove('oculto');

  const textoParaCompartir = encodeURIComponent(
    `Obtuve ${score} puntos (${porcentaje.toFixed(0)}%) en el quiz Clase B 🚗 en www.memanejo.cl`
  );
  btnCompartir.href = `https://twitter.com/intent/tweet?text=${textoParaCompartir}`;
}

/* =========================
   BOTONES FINALES
========================= */
btnReintentar.addEventListener('click', () => {
  modal.classList.add('oculto');
  quizContainer.style.display = 'none';
  pantallaBienvenida.style.display = 'block';
});

btnDescargar.addEventListener('click', () => {
  const captura = document.getElementById('captura');
  html2canvas(captura, { backgroundColor: '#121212' }).then(canvas => {
    const link = document.createElement('a');
    link.download = 'resultado-quiz-memanejo.png';
    link.href = canvas.toDataURL();
    link.click();
  });
});

btnVolver.addEventListener('click', () => {
  modal.classList.add('oculto');
  quizContainer.style.display = 'none';
  pantallaBienvenida.style.display = 'block';
});

/* =========================
   FORMULARIO SUBMIT
========================= */
form.addEventListener('submit', (e) => {
  e.preventDefault();
  iniciarQuiz();
});
});
