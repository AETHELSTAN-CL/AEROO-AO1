document.addEventListener("DOMContentLoaded", () => {

const preguntasFacil = [
  {
    pregunta: "¿Cuál es la velocidad máxima permitida en zonas urbanas si no hay señalización?",
    respuestas: [
      { texto: "50 km/h", correcta: true },
      { texto: "60 km/h", correcta: false },
      { texto: "40 km/h", correcta: false },
      { texto: "70 km/h", correcta: false }
    ],
    puntos: 2
  },
  {
    pregunta: "¿Qué debe hacer si sufre un pinchazo en una curva?",
    respuestas: [
      { texto: "Frenar fuerte para detenerse", correcta: false },
      { texto: "Acelerar para salir rápido de la curva", correcta: false },
      { texto: "Sujetar firmemente el volante y reducir velocidad", correcta: true },
      { texto: "Encender luces altas", correcta: false }
    ],
    puntos: 2
  },
  {
    pregunta: "¿Cuál es la función principal del ABS?",
    respuestas: [
      { texto: "Evitar el bloqueo de frenos al frenar bruscamente", correcta: true },
      { texto: "Reducir el consumo de combustible", correcta: false },
      { texto: "Aumentar la potencia del motor", correcta: false },
      { texto: "Mejorar el sonido del escape", correcta: false }
    ],
    puntos: 2
  },
  {
    pregunta: "¿Cuál es la prioridad en un cruce sin señalización?",
    respuestas: [
      { texto: "El que viene por la derecha", correcta: true },
      { texto: "El más rápido", correcta: false },
      { texto: "El más grande", correcta: false },
      { texto: "El que toca la bocina", correcta: false }
    ],
    puntos: 2
  },
  {
    pregunta: "¿Cuándo se debe encender la luz de advertencia de freno de mano?",
    respuestas: [
      { texto: "Cuando está activado el freno de mano", correcta: true },
      { texto: "Cuando el freno de mano está desactivado", correcta: false },
      { texto: "Solo en subidas", correcta: false },
      { texto: "En viajes largos", correcta: false }
    ],
    puntos: 2
  },
  {
    pregunta: "¿Qué documento NO es obligatorio llevar al conducir?",
    respuestas: [
      { texto: "Cédula de identidad", correcta: false },
      { texto: "Licencia de conducir", correcta: false },
      { texto: "Certificado de revisión técnica", correcta: false },
      { texto: "Boleta del último mantención", correcta: true }
    ],
    puntos: 2
  },
  {
    pregunta: "¿En qué caso se deben encender las luces intermitentes de emergencia?",
    respuestas: [
      { texto: "Al frenar en un semáforo", correcta: false },
      { texto: "Al estacionar", correcta: false },
      { texto: "En situaciones de emergencia", correcta: true },
      { texto: "Al adelantar", correcta: false }
    ],
    puntos: 2
  },
  {
    pregunta: "¿Qué indica una línea continua en la calzada?",
    respuestas: [
      { texto: "Puede adelantar con precaución", correcta: false },
      { texto: "Debe cambiarse de pista", correcta: false },
      { texto: "Prohibido adelantar o cambiar de pista", correcta: true },
      { texto: "Zona escolar", correcta: false }
    ],
    puntos: 2
  },
  {
    pregunta: "¿Qué distancia mínima debe mantener respecto al vehículo delantero?",
    respuestas: [
      { texto: "10 metros", correcta: false },
      { texto: "La necesaria para evitar una colisión", correcta: true },
      { texto: "2 metros", correcta: false },
      { texto: "No importa si hay tráfico", correcta: false }
    ],
    puntos: 2
  },
  {
    pregunta: "¿Qué debe hacer ante una luz amarilla intermitente?",
    respuestas: [
      { texto: "Detenerse siempre", correcta: false },
      { texto: "Acelerar para pasar rápido", correcta: false },
      { texto: "Reducir la velocidad y tener precaución", correcta: true },
      { texto: "Ignorarla si no hay tránsito", correcta: false }
    ],
    puntos: 2
  },
  {
    pregunta: "¿Qué elemento reduce el riesgo de lesiones en un accidente?",
    respuestas: [
      { texto: "Apoyacabezas", correcta: false },
      { texto: "Sistema ABS", correcta: false },
      { texto: "Cinturón de seguridad", correcta: true },
      { texto: "Neumáticos anchos", correcta: false }
    ],
    puntos: 2
  },
  {
    pregunta: "¿Cuándo es obligatorio encender luces durante el día?",
    respuestas: [
      { texto: "Nunca", correcta: false },
      { texto: "En condiciones de baja visibilidad", correcta: true },
      { texto: "Cuando está lloviendo solamente", correcta: false },
      { texto: "En ciudad solamente", correcta: false }
    ],
    puntos: 2
  },
  {
    pregunta: "¿Qué indica una señal con un círculo rojo y una bicicleta en el centro?",
    respuestas: [
      { texto: "Estacionamiento exclusivo", correcta: false },
      { texto: "Ruta recomendada", correcta: false },
      { texto: "Prohibición para bicicletas", correcta: true },
      { texto: "Zona escolar", correcta: false }
    ],
    puntos: 2
  },
  {
    pregunta: "¿Qué hacer si el vehículo comienza a patinar?",
    respuestas: [
      { texto: "Frenar bruscamente", correcta: false },
      { texto: "Girar en sentido opuesto", correcta: false },
      { texto: "Girar suavemente en la misma dirección del patinaje", correcta: true },
      { texto: "Apagar el motor", correcta: false }
    ],
    puntos: 2
  },
  {
    pregunta: "¿Qué significa una señal triangular con borde rojo y un símbolo de ceda el paso?",
    respuestas: [
      { texto: "Obligación de detenerse", correcta: false },
      { texto: "Advertencia de curva peligrosa", correcta: false },
      { texto: "Debe ceder el paso", correcta: true },
      { texto: "Ruta exclusiva", correcta: false }
    ],
    puntos: 2
  },
  {
    pregunta: "¿Qué tipo de cruces se consideran más peligrosos?",
    respuestas: [
      { texto: "Rotondas", correcta: false },
      { texto: "Cruces en “T” sin señalización", correcta: true },
      { texto: "Cruces con semáforos", correcta: false },
      { texto: "Cruces con paso peatonal", correcta: false }
    ],
    puntos: 2
  },
  {
    pregunta: "¿Cuándo se permite usar la bocina del vehículo?",
    respuestas: [
      { texto: "Para saludar a amigos", correcta: false },
      { texto: "En situaciones de emergencia o advertencia", correcta: true },
      { texto: "Al adelantar", correcta: false },
      { texto: "En zonas escolares", correcta: false }
    ],
    puntos: 2
  },
  {
    pregunta: "¿Qué efecto tiene el alcohol en la conducción?",
    respuestas: [
      { texto: "Aumenta la concentración", correcta: false },
      { texto: "Mejora los reflejos", correcta: false },
      { texto: "Reduce la percepción y el tiempo de reacción", correcta: true },
      { texto: "No tiene efecto", correcta: false }
    ],
    puntos: 2
  },
  {
    pregunta: "¿Cuándo se considera que un conductor está bajo los efectos del alcohol en Chile?",
    respuestas: [
      { texto: "A partir de 0,3 g/L", correcta: true },
      { texto: "Desde 0,8 g/L", correcta: false },
      { texto: "Desde 1,5 g/L", correcta: false },
      { texto: "A cualquier nivel", correcta: false }
    ],
    puntos: 2
  },
  {
    pregunta: "¿Qué significa una señal azul con una flecha blanca hacia arriba?",
    respuestas: [
      { texto: "Curva obligatoria", correcta: false },
      { texto: "Siga de frente", correcta: true },
      { texto: "Giro a la derecha", correcta: false },
      { texto: "Desvío", correcta: false }
    ],
    puntos: 2
  }
];

  const preguntasAvanzado = [
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
      pregunta: "¿Cuál es el procedimiento correcto al detenerse en una cuesta?",
      respuestas: [
        { texto: "Usar solo el freno de pie", correcta: false },
        { texto: "Usar el freno de mano y embrague", correcta: true },
        { texto: "Apagar el motor", correcta: false },
        { texto: "Mantenerlo solo con el embrague", correcta: false }
      ],
      puntos: 3
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
      pregunta: "¿Qué documento debe portar obligatoriamente un conductor?",
      respuestas: [
        { texto: "Licencia de conducir", correcta: true },
        { texto: "Cédula de identidad", correcta: false },
        { texto: "Permiso de circulación del vehículo", correcta: false },
        { texto: "Seguro obligatorio", correcta: false }
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
      pregunta: "¿En qué situación puede usar el claxon en ciudad?",
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
      pregunta: "¿Cuál es la velocidad máxima en autopistas urbanas en Chile, salvo señalización?",
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
      pregunta: "¿Qué documentos debe portar obligatoriamente un conductor?",
      respuestas: [
        { texto: "Licencia de conducir y cédula de identidad", correcta: true },
        { texto: "Solo la licencia de conducir", correcta: false },
        { texto: "Seguro del vehículo únicamente", correcta: false },
        { texto: "No es obligatorio portar documentos", correcta: false }
      ],
      puntos: 3
    },
    {
      pregunta: "¿Qué debe hacer antes de iniciar un adelantamiento?",
      respuestas: [
        { texto: "Acelerar inmediatamente", correcta: false },
        { texto: "Señalizar, verificar retrovisores y ángulo muerto", correcta: true },
        { texto: "Solo mirar al frente", correcta: false },
        { texto: "Tocar claxon para avisar", correcta: false }
      ],
      puntos: 3
    },
    {
      pregunta: "¿En qué momento debe usar luces bajas en ciudad?",
      respuestas: [
        { texto: "Durante el día y en buena visibilidad", correcta: false },
        { texto: "Siempre que haya otros vehículos cerca o mala visibilidad", correcta: true },
        { texto: "Nunca", correcta: false },
        { texto: "Solo cuando llueve", correcta: false }
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
      pregunta: "¿Cuándo es obligatorio el uso de cadenas en caminos nevados?",
      respuestas: [
        { texto: "Solo si hay aviso policial", correcta: false },
        { texto: "Siempre que la autoridad indique o condiciones lo requieran", correcta: true },
        { texto: "Nunca, basta con conducir despacio", correcta: false },
        { texto: "Solo en autopistas", correcta: false }
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

  let preguntasActuales = [];
  let indice = 0;
  let score = 0;
  let tiempoRestante = 0;
  let timerInterval = null;

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
    quizContainer.style.minHeight = '100vh';
    quizContainer.style.overflow = 'hidden';

    indice = 0;
    score = 0;
    preguntasActuales = dificultad === 'facil' ? preguntasFacil : preguntasAvanzado;

    // Tiempo
    tiempoRestante = dificultad === 'facil' ? 35 * 60 : 45 * 60;
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
  if (correcta) score += preguntasActuales[indice].puntos;

  Array.from(respuestasElemento.children).forEach(btn => {
    btn.disabled = true;
    if (btn.dataset.correcta === "true") {
      btn.classList.add('correct');
    } else {
      btn.classList.add('wrong');
    }
  });

  // 👇 La respuesta elegida tendrá estilo “hover” permanente
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

  // Oculta quiz y elementos
  quizContainer.style.display = 'none';
  tiempoElemento.style.display = 'none';
  btnSiguiente.style.display = 'none';
  
  const puntajeTotal = calcularPuntajeTotal();
  textoPuntaje.innerText = `Obtuviste ${score} puntos de ${puntajeTotal} posibles.`;

  const porcentaje = (score / puntajeTotal) * 100;
  const aprobado = porcentaje >= 87;

  const mensaje = document.createElement('p');
  mensaje.style.fontWeight = 'bold';
  mensaje.style.marginTop = '15px';
  mensaje.innerText = aprobado ? "🎉 ¡Aprobaste el Quiz!" : "❌ No alcanzaste el puntaje mínimo para aprobar este Quiz.";
  textoPuntaje.parentNode.appendChild(mensaje);

  modal.classList.remove('oculto');

  const textoParaCompartir = encodeURIComponent(`Obtuve ${score} puntos (${porcentaje.toFixed(0)}%) en el quiz Clase B 🚗 en www.memanejo.cl`);
  btnCompartir.href = `https://twitter.com/intent/tweet?text=${textoParaCompartir}`;
}

  function calcularPuntajeTotal() {
    return preguntasActuales.reduce((acc, p) => acc + p.puntos, 0);
  }

  // Reintentar
  btnReintentar.addEventListener('click', () => {
    modal.classList.add('oculto');
    quizContainer.style.display = 'none';
    pantallaBienvenida.style.display = 'block';
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
  modal.classList.add('oculto');          // Oculta el modal final
  quizContainer.style.display = 'none';   // Oculta la sección del quiz
  pantallaBienvenida.style.display = 'flex'; // Muestra la pantalla inicial con el logo
});
});