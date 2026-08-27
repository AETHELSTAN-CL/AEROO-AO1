// =====================================================
// PREGUNTAS.JS — Banco de preguntas memanejo
// =====================================================

// ===== QUIZ BÁSICO (GRATIS) — 20 preguntas fijas =====
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
      { texto: "Sujetar firme el volante y reducir velocidad", correcta: true },
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
      { texto: "Boleta de la última mantención", correcta: true }
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
      { texto: "Dirección obligatoria", correcta: true },
      { texto: "Giro a la derecha", correcta: false },
      { texto: "Desvío", correcta: false }
    ],
    puntos: 2
  }
];

// =====================================================
// BANCO EXAMEN MUNICIPAL (PAGO) — simula el examen real
// 35 preguntas por intento: 32 valen 1 punto, 3 valen 2 puntos
// Máximo 38 puntos, aprueba con 33 puntos (según Decreto 170 MTT)
// =====================================================
const bancoExamenMunicipal = [

  // ===== CATEGORÍA: ALCOHOL (elegibles para doble puntaje) =====
  {
    pregunta: "¿Cuál es el nivel máximo de alcohol permitido en sangre para conductores profesionales en Chile?",
    categoria: "alcohol",
    respuestas: [
      { texto: "0,3 g/L", correcta: false },
      { texto: "0,0 g/L", correcta: true },
      { texto: "0,4 g/L", correcta: false },
      { texto: "0,8 g/L", correcta: false }
    ]
  },
  {
    pregunta: "¿A partir de qué nivel de alcohol en la sangre se considera al conductor en estado de ebriedad en Chile?",
    categoria: "alcohol",
    respuestas: [
      { texto: "0,8 g/L", correcta: true },
      { texto: "0,3 g/L", correcta: false },
      { texto: "1,2 g/L", correcta: false },
      { texto: "0,5 g/L", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué efecto tiene el consumo de alcohol sobre el campo visual del conductor?",
    categoria: "alcohol",
    respuestas: [
      { texto: "Lo amplía", correcta: false },
      { texto: "Lo reduce (visión en túnel)", correcta: true },
      { texto: "No tiene efecto", correcta: false },
      { texto: "Mejora la percepción nocturna", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué debe hacer si le ofrecen manejar después de haber bebido alcohol?",
    categoria: "alcohol",
    respuestas: [
      { texto: "Aceptar si el trayecto es corto", correcta: false },
      { texto: "Negarse y buscar otra alternativa de transporte", correcta: true },
      { texto: "Manejar más lento de lo normal", correcta: false },
      { texto: "Tomar café antes de manejar", correcta: false }
    ]
  },

  // ===== CATEGORÍA: CASCO PROTECTOR (elegibles para doble puntaje) =====
  {
    pregunta: "¿Quiénes están obligados a usar casco protector homologado en la vía pública?",
    categoria: "casco",
    respuestas: [
      { texto: "Solo motociclistas", correcta: false },
      { texto: "Motociclistas y ciclistas", correcta: true },
      { texto: "Solo ciclistas menores de edad", correcta: false },
      { texto: "Nadie está obligado", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué característica debe cumplir un casco para motociclista según la normativa chilena?",
    categoria: "casco",
    respuestas: [
      { texto: "Ser de cualquier material resistente", correcta: false },
      { texto: "Estar homologado y certificado", correcta: true },
      { texto: "Ser de color claro obligatoriamente", correcta: false },
      { texto: "No tiene requisitos específicos", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué riesgo aumenta significativamente al conducir una motocicleta sin casco?",
    categoria: "casco",
    respuestas: [
      { texto: "Lesiones graves o fatales en la cabeza", correcta: true },
      { texto: "Multas de tránsito solamente", correcta: false },
      { texto: "Pérdida de puntos en la licencia únicamente", correcta: false },
      { texto: "Ninguno, es solo una formalidad", correcta: false }
    ]
  },

  // ===== CATEGORÍA: CINTURÓN DE SEGURIDAD (elegibles para doble puntaje) =====
  {
    pregunta: "¿Quiénes deben usar cinturón de seguridad dentro de un vehículo en movimiento?",
    categoria: "cinturon",
    respuestas: [
      { texto: "Solo el conductor", correcta: false },
      { texto: "Conductor y todos los pasajeros, en todos los asientos", correcta: true },
      { texto: "Solo los pasajeros delanteros", correcta: false },
      { texto: "Solo en carretera", correcta: false }
    ]
  },
  {
    pregunta: "¿Cuál es la función principal del cinturón de seguridad en caso de colisión?",
    categoria: "cinturon",
    respuestas: [
      { texto: "Evitar multas", correcta: false },
      { texto: "Retener al ocupante y reducir el riesgo de lesiones graves", correcta: true },
      { texto: "Mejorar la postura al conducir", correcta: false },
      { texto: "No tiene función real", correcta: false }
    ]
  },
  {
    pregunta: "¿Es obligatorio el uso de cinturón de seguridad en asientos traseros en Chile?",
    categoria: "cinturon",
    respuestas: [
      { texto: "No, solo en asientos delanteros", correcta: false },
      { texto: "Sí, es obligatorio en todos los asientos", correcta: true },
      { texto: "Solo en viajes interurbanos", correcta: false },
      { texto: "Solo para menores de edad", correcta: false }
    ]
  },

  // ===== CATEGORÍA: SISTEMAS DE RETENCIÓN INFANTIL (elegibles para doble puntaje) =====
  {
    pregunta: "¿Qué establece la ley respecto al transporte de niños pequeños en vehículos?",
    categoria: "retencion_infantil",
    respuestas: [
      { texto: "Pueden viajar en brazos de un adulto", correcta: false },
      { texto: "Deben usar sistema de retención infantil homologado según su edad y talla", correcta: true },
      { texto: "No existe regulación específica", correcta: false },
      { texto: "Solo aplica en viajes largos", correcta: false }
    ]
  },
  {
    pregunta: "¿Dónde deben ubicarse los sistemas de retención infantil para bebés (silla contramarcha)?",
    categoria: "retencion_infantil",
    respuestas: [
      { texto: "En el asiento delantero, mirando hacia adelante", correcta: false },
      { texto: "De preferencia en el asiento trasero, mirando hacia atrás", correcta: true },
      { texto: "En cualquier asiento, sin restricciones", correcta: false },
      { texto: "En el maletero si el vehículo lo permite", correcta: false }
    ]
  },
  {
    pregunta: "¿Hasta qué edad aproximada se recomienda el uso de alzador (booster) para niños en el vehículo?",
    categoria: "retencion_infantil",
    respuestas: [
      { texto: "Hasta que el cinturón de seguridad ajuste correctamente en su cuerpo (aprox. 12 años o 1,45 m)", correcta: true },
      { texto: "Hasta los 4 años solamente", correcta: false },
      { texto: "No es necesario en Chile", correcta: false },
      { texto: "Solo hasta el primer año de vida", correcta: false }
    ]
  },

  // ===== CATEGORÍA: GENERAL (1 punto) =====
  {
    pregunta: "¿En qué situación debe utilizarse la luz de retroceso?",
    categoria: "general",
    respuestas: [
      { texto: "Solo cuando retrocede y hay peatones cerca", correcta: false },
      { texto: "Cada vez que retrocede", correcta: true },
      { texto: "Solo en la noche", correcta: false },
      { texto: "Cuando el vehículo está detenido", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué sanción corresponde a conducir sin haber obtenido licencia?",
    categoria: "general",
    respuestas: [
      { texto: "Multa leve", correcta: false },
      { texto: "Multa grave y retención del vehículo", correcta: true },
      { texto: "Solo una advertencia", correcta: false },
      { texto: "Arresto inmediato", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué medida reduce la posibilidad de que el vehículo derrape en una curva?",
    categoria: "general",
    respuestas: [
      { texto: "Frenar dentro de la curva", correcta: false },
      { texto: "Acelerar a fondo", correcta: false },
      { texto: "Reducir velocidad antes de la curva", correcta: true },
      { texto: "Tomarla por el interior", correcta: false }
    ]
  },
  {
    pregunta: "¿Cuándo debe utilizar cadenas en los neumáticos?",
    categoria: "general",
    respuestas: [
      { texto: "En caminos con barro", correcta: false },
      { texto: "En caminos con nieve o hielo", correcta: true },
      { texto: "En caminos urbanos", correcta: false },
      { texto: "En autopistas", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué debe hacer si un semáforo está apagado?",
    categoria: "general",
    respuestas: [
      { texto: "Ignorarlo", correcta: false },
      { texto: "Cruzar sin mirar", correcta: false },
      { texto: "Tratar el cruce como no regulado y ceder el paso", correcta: true },
      { texto: "Esperar una patrulla", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué indica una señal con una X roja sobre un semáforo de pista?",
    categoria: "general",
    respuestas: [
      { texto: "Gire a la izquierda", correcta: false },
      { texto: "Carril cerrado", correcta: true },
      { texto: "Carril exclusivo", correcta: false },
      { texto: "Baje la velocidad", correcta: false }
    ]
  },
  {
    pregunta: "¿En qué momento debe realizarse la primera mantención a un auto nuevo?",
    categoria: "general",
    respuestas: [
      { texto: "A los 20.000 km", correcta: false },
      { texto: "A los 10.000 km", correcta: false },
      { texto: "Según lo que indique el fabricante", correcta: true },
      { texto: "Nunca, si es nuevo", correcta: false }
    ]
  },
  {
    pregunta: "¿Cuál es el procedimiento correcto al detenerse en una cuesta?",
    categoria: "general",
    respuestas: [
      { texto: "Usar solo el freno de pie", correcta: false },
      { texto: "Usar el freno de mano y embrague", correcta: true },
      { texto: "Apagar el motor", correcta: false },
      { texto: "Mantenerlo solo con el embrague", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué indica una señal amarilla con una cruz negra?",
    categoria: "general",
    respuestas: [
      { texto: "Cruce ferroviario", correcta: true },
      { texto: "Cruce peatonal", correcta: false },
      { texto: "Paso bajo nivel", correcta: false },
      { texto: "Cruce peligroso", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué distancia mínima de seguridad se debe mantener con el vehículo de adelante en carretera?",
    categoria: "general",
    respuestas: [
      { texto: "1 segundo de distancia", correcta: false },
      { texto: "2 segundos de distancia", correcta: true },
      { texto: "3 metros", correcta: false },
      { texto: "No hay distancia mínima", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué significa una luz intermitente amarilla en un semáforo?",
    categoria: "general",
    respuestas: [
      { texto: "Detenerse completamente", correcta: false },
      { texto: "Proceder con precaución", correcta: true },
      { texto: "Prioridad de paso al peatón", correcta: false },
      { texto: "Avanzar sin mirar", correcta: false }
    ]
  },
  {
    pregunta: "¿Cuál es la velocidad máxima en autopista urbana en Chile?",
    categoria: "general",
    respuestas: [
      { texto: "80 km/h", correcta: false },
      { texto: "100 km/h", correcta: true },
      { texto: "120 km/h", correcta: false },
      { texto: "60 km/h", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué indica una línea amarilla discontinua en el pavimento?",
    categoria: "general",
    respuestas: [
      { texto: "No se puede adelantar", correcta: false },
      { texto: "Se puede adelantar con precaución", correcta: true },
      { texto: "Zona peatonal", correcta: false },
      { texto: "Carril exclusivo", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué acción se debe tomar ante un peatón cruzando fuera de la cebra?",
    categoria: "general",
    respuestas: [
      { texto: "Ignorarlo", correcta: false },
      { texto: "Reducir velocidad y ceder el paso", correcta: true },
      { texto: "Solo tocar bocina", correcta: false },
      { texto: "Acelerar para pasar antes", correcta: false }
    ]
  },
  {
    pregunta: "¿Cuál es la sanción por exceso de velocidad en zona urbana?",
    categoria: "general",
    respuestas: [
      { texto: "Multa leve", correcta: false },
      { texto: "Multa grave", correcta: true },
      { texto: "Solo advertencia", correcta: false },
      { texto: "Arresto", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué documento debe portar obligatoriamente un conductor?",
    categoria: "general",
    respuestas: [
      { texto: "Licencia de conducir", correcta: true },
      { texto: "Cédula de identidad", correcta: false },
      { texto: "Permiso de circulación del vehículo", correcta: false },
      { texto: "Seguro obligatorio", correcta: false }
    ]
  },
  {
    pregunta: "¿Cuál es la distancia mínima que se debe mantener al adelantar una bicicleta?",
    categoria: "general",
    respuestas: [
      { texto: "1 metro", correcta: false },
      { texto: "1,5 metros", correcta: true },
      { texto: "2 metros", correcta: false },
      { texto: "50 cm", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué indica una señal de tránsito triangular con borde rojo y fondo blanco?",
    categoria: "general",
    respuestas: [
      { texto: "Prohibición", correcta: false },
      { texto: "Advertencia de peligro", correcta: true },
      { texto: "Información general", correcta: false },
      { texto: "Zona de velocidad mínima", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué debe hacer si su vehículo comienza a derrapar sobre hielo?",
    categoria: "general",
    respuestas: [
      { texto: "Frenar bruscamente", correcta: false },
      { texto: "Girar el volante en dirección del derrape", correcta: true },
      { texto: "Acelerar", correcta: false },
      { texto: "Apagar el motor", correcta: false }
    ]
  },
  {
    pregunta: "¿En qué situación puede usar la bocina en ciudad?",
    categoria: "general",
    respuestas: [
      { texto: "Para saludar a un amigo", correcta: false },
      { texto: "Para advertir peligro inmediato", correcta: true },
      { texto: "Siempre que quiera", correcta: false },
      { texto: "Al estacionar", correcta: false }
    ]
  },
  {
    pregunta: "¿Cuál es la prioridad en un cruce con semáforo apagado?",
    categoria: "general",
    respuestas: [
      { texto: "Vehículos a la derecha tienen prioridad", correcta: true },
      { texto: "Vehículos más grandes tienen prioridad", correcta: false },
      { texto: "Peatones siempre deben ceder", correcta: false },
      { texto: "No existe prioridad", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué debe hacer si ve una señal de ceda el paso?",
    categoria: "general",
    respuestas: [
      { texto: "Detenerse siempre", correcta: false },
      { texto: "Reducir velocidad y ceder el paso si hay tránsito", correcta: true },
      { texto: "Acelerar para pasar primero", correcta: false },
      { texto: "Ignorarla", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué indica una línea amarilla continua al lado derecho del carril?",
    categoria: "general",
    respuestas: [
      { texto: "Zona de adelantamiento permitido", correcta: false },
      { texto: "Prohibición de adelantar", correcta: true },
      { texto: "Carril exclusivo para bicicletas", correcta: false },
      { texto: "Zona de estacionamiento", correcta: false }
    ]
  },
  {
    pregunta: "¿Cuál es la velocidad máxima en autopistas urbanas en Chile, salvo señalización?",
    categoria: "general",
    respuestas: [
      { texto: "100 km/h", correcta: false },
      { texto: "120 km/h", correcta: true },
      { texto: "80 km/h", correcta: false },
      { texto: "110 km/h", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué indica una luz verde intermitente de semáforo?",
    categoria: "general",
    respuestas: [
      { texto: "Prepararse para detener", correcta: false },
      { texto: "Precaución, el semáforo cambiará pronto a rojo", correcta: true },
      { texto: "Vehículos pueden cruzar sin precaución", correcta: false },
      { texto: "Semáforo fuera de servicio", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué debe hacer antes de iniciar un adelantamiento?",
    categoria: "general",
    respuestas: [
      { texto: "Acelerar inmediatamente", correcta: false },
      { texto: "Señalizar, verificar retrovisores y ángulo muerto", correcta: true },
      { texto: "Solo mirar al frente", correcta: false },
      { texto: "Tocar claxon para avisar", correcta: false }
    ]
  },
  {
    pregunta: "¿En qué momento debe usar luces bajas en ciudad?",
    categoria: "general",
    respuestas: [
      { texto: "Durante el día y en buena visibilidad", correcta: false },
      { texto: "Siempre que haya otros vehículos cerca o mala visibilidad", correcta: true },
      { texto: "Nunca", correcta: false },
      { texto: "Solo cuando llueve", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué indica una señal de tránsito azul con símbolo blanco?",
    categoria: "general",
    respuestas: [
      { texto: "Prohibición", correcta: false },
      { texto: "Información o servicios disponibles", correcta: true },
      { texto: "Advertencia de peligro", correcta: false },
      { texto: "Zona de estacionamiento exclusivo", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué sanción corresponde a estacionar en zona prohibida?",
    categoria: "general",
    respuestas: [
      { texto: "Multa leve", correcta: false },
      { texto: "Multa y retiro del vehículo si aplica", correcta: true },
      { texto: "Solo advertencia verbal", correcta: false },
      { texto: "Arresto inmediato", correcta: false }
    ]
  },
  {
    pregunta: "¿Cuál es la forma correcta de pasar por un cruce peatonal?",
    categoria: "general",
    respuestas: [
      { texto: "Acelerar para no detenerse", correcta: false },
      { texto: "Reducir velocidad y ceder el paso a peatones", correcta: true },
      { texto: "Ignorar si hay semáforo verde para el vehículo", correcta: false },
      { texto: "Solo parar si hay policía", correcta: false }
    ]
  },
  {
    pregunta: "¿Cuándo es obligatorio el uso de cadenas en caminos nevados?",
    categoria: "general",
    respuestas: [
      { texto: "Solo si hay aviso policial", correcta: false },
      { texto: "Siempre que la autoridad indique o condiciones lo requieran", correcta: true },
      { texto: "Nunca, basta con conducir despacio", correcta: false },
      { texto: "Solo en autopistas", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué indica un triángulo invertido rojo en la vía?",
    categoria: "general",
    respuestas: [
      { texto: "Pare total", correcta: false },
      { texto: "Ceda el paso", correcta: true },
      { texto: "Prohibición de adelantar", correcta: false },
      { texto: "Zona de cruce escolar", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué significa una señal de PARE?",
    categoria: "general",
    respuestas: [
      { texto: "Detenerse completamente", correcta: true },
      { texto: "Reducir la velocidad", correcta: false },
      { texto: "Ceder el paso", correcta: false },
      { texto: "Mirar antes de avanzar sin detenerse", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué se recomienda antes de emprender un viaje largo en carretera?",
    categoria: "general",
    respuestas: [
      { texto: "Revisar neumáticos, frenos, luces y niveles del vehículo", correcta: true },
      { texto: "Solo cargar combustible", correcta: false },
      { texto: "No es necesaria ninguna revisión", correcta: false },
      { texto: "Revisar solo el aceite", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué se debe hacer si aparece niebla densa mientras conduce?",
    categoria: "general",
    respuestas: [
      { texto: "Encender luces altas y acelerar para salir rápido", correcta: false },
      { texto: "Reducir velocidad, usar luces bajas o antiniebla y aumentar distancia", correcta: true },
      { texto: "Detenerse en plena vía sin señalizar", correcta: false },
      { texto: "Apagar todas las luces", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué significa una señal circular azul con una flecha curva blanca?",
    categoria: "general",
    respuestas: [
      { texto: "Sentido obligatorio de circulación", correcta: true },
      { texto: "Prohibido girar", correcta: false },
      { texto: "Rotonda cerrada", correcta: false },
      { texto: "Desvío temporal", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué debe hacer un conductor al acercarse a un vehículo de emergencia con sirena encendida?",
    categoria: "general",
    respuestas: [
      { texto: "Ignorarlo si va con prisa", correcta: false },
      { texto: "Ceder el paso, orillándose si es necesario", correcta: true },
      { texto: "Acelerar para adelantarlo", correcta: false },
      { texto: "Detenerse en medio de la calzada", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué indica una señal de tránsito con el símbolo de una escuela?",
    categoria: "general",
    respuestas: [
      { texto: "Zona de estacionamiento", correcta: false },
      { texto: "Zona escolar, reducir velocidad y precaución con menores", correcta: true },
      { texto: "Zona de carga y descarga", correcta: false },
      { texto: "Ciclovía", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué acción es incorrecta al conducir bajo lluvia intensa?",
    categoria: "general",
    respuestas: [
      { texto: "Reducir la velocidad", correcta: false },
      { texto: "Aumentar la distancia de seguridad", correcta: false },
      { texto: "Frenar bruscamente ante cualquier eventualidad", correcta: true },
      { texto: "Encender las luces bajas", correcta: false }
    ]
  },
  {
    pregunta: "¿Cuál es el efecto del cansancio o somnolencia al conducir?",
    categoria: "general",
    respuestas: [
      { texto: "Aumenta el tiempo de reacción y reduce la atención", correcta: true },
      { texto: "No afecta si el trayecto es corto", correcta: false },
      { texto: "Mejora la concentración", correcta: false },
      { texto: "Solo afecta en la noche", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué se debe hacer si el vehículo se queda detenido por una falla mecánica en la calzada?",
    categoria: "general",
    respuestas: [
      { texto: "Dejarlo ahí y avisar después", correcta: false },
      { texto: "Señalizar con triángulos y encender luces de emergencia", correcta: true },
      { texto: "Empujarlo sin señalizar", correcta: false },
      { texto: "Esperar dentro del vehículo sin señalizar", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué indica el uso de las luces altas en carretera de noche?",
    categoria: "general",
    respuestas: [
      { texto: "Se pueden usar siempre sin restricción", correcta: false },
      { texto: "Deben bajarse al cruzarse con otro vehículo para no encandilar", correcta: true },
      { texto: "Solo se usan en ciudad", correcta: false },
      { texto: "No tienen relación con la seguridad", correcta: false }
    ]
  }  ,
  {
    pregunta: "¿Qué documento acredita que un vehículo cuenta con seguro obligatorio de accidentes personales?",
    categoria: "general",
    respuestas: [
      { texto: "SOAP", correcta: true },
      { texto: "Permiso de circulación", correcta: false },
      { texto: "Padrón del vehículo", correcta: false },
      { texto: "Certificado de homologación", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué cubre principalmente el Seguro Obligatorio de Accidentes Personales (SOAP)?",
    categoria: "general",
    respuestas: [
      { texto: "Daños materiales al vehículo propio", correcta: false },
      { texto: "Lesiones o muerte de personas por accidentes de tránsito", correcta: true },
      { texto: "Robo del vehículo", correcta: false },
      { texto: "Multas de tránsito", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué se debe hacer al circular por una ciclovía segregada siendo conductor de un vehículo motorizado?",
    categoria: "general",
    respuestas: [
      { texto: "Se puede usar si no hay ciclistas", correcta: false },
      { texto: "Está prohibido circular u obstruir la ciclovía", correcta: true },
      { texto: "Solo se puede detener brevemente", correcta: false },
      { texto: "Se permite para adelantar", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué se recomienda hacer al aproximarse a un bus escolar detenido con luces intermitentes activas?",
    categoria: "general",
    respuestas: [
      { texto: "Adelantarlo rápidamente", correcta: false },
      { texto: "Reducir la velocidad y extremar precaución por posibles menores cruzando", correcta: true },
      { texto: "Tocar la bocina para advertir al conductor del bus", correcta: false },
      { texto: "Ignorar la señal si no hay niños visibles", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué acción es obligatoria al circular de noche por un camino rural sin iluminación?",
    categoria: "general",
    respuestas: [
      { texto: "Usar las luces bajas o altas según corresponda", correcta: true },
      { texto: "Apagar las luces para ahorrar batería", correcta: false },
      { texto: "Usar solo las luces de posición", correcta: false },
      { texto: "No es obligatorio usar luces si hay luna llena", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué se debe hacer si los frenos del vehículo fallan mientras se conduce?",
    categoria: "general",
    respuestas: [
      { texto: "Apagar el motor de inmediato", correcta: false },
      { texto: "Reducir marchas progresivamente y usar el freno de mano con cuidado", correcta: true },
      { texto: "Girar bruscamente hacia la berma", correcta: false },
      { texto: "Acelerar para buscar una vía de escape", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué indica una señal de tránsito con la figura de un ciervo o animal silvestre?",
    categoria: "general",
    respuestas: [
      { texto: "Zona de caza permitida", correcta: false },
      { texto: "Posible cruce de animales silvestres", correcta: true },
      { texto: "Zoológico cercano", correcta: false },
      { texto: "Prohibido el paso de animales", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué se debe verificar antes de remolcar otro vehículo?",
    categoria: "general",
    respuestas: [
      { texto: "Que el cable o barra de remolque esté en buen estado y bien sujeto", correcta: true },
      { texto: "Solo que ambos vehículos tengan combustible", correcta: false },
      { texto: "No requiere ninguna verificación previa", correcta: false },
      { texto: "Que el vehículo remolcado tenga más potencia", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué velocidad se recomienda mantener al circular por una zona de obras en la vía?",
    categoria: "general",
    respuestas: [
      { texto: "La misma velocidad habitual", correcta: false },
      { texto: "Reducida, respetando la señalización transitoria", correcta: true },
      { texto: "Aumentada para salir rápido de la zona", correcta: false },
      { texto: "No hay diferencia respecto al resto del camino", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué debe hacer un conductor si su vehículo entra en contacto con un cable eléctrico caído?",
    categoria: "general",
    respuestas: [
      { texto: "Bajar de inmediato del vehículo", correcta: false },
      { texto: "Permanecer dentro del vehículo y pedir ayuda hasta que se corte la energía", correcta: true },
      { texto: "Tocar la carrocería para verificar si tiene corriente", correcta: false },
      { texto: "Salir y alejar el cable con las manos", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué señal se utiliza para advertir la proximidad de un semáforo no visible a la distancia habitual?",
    categoria: "general",
    respuestas: [
      { texto: "Señal preventiva de \"Semáforo adelante\"", correcta: true },
      { texto: "Señal de \"Pare\"", correcta: false },
      { texto: "Señal de \"Ceda el paso\"", correcta: false },
      { texto: "No existe una señal para eso", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué implica conducir con neumáticos con banda de rodadura por debajo del mínimo legal?",
    categoria: "general",
    respuestas: [
      { texto: "No tiene consecuencias si el auto es nuevo", correcta: false },
      { texto: "Es una infracción y aumenta el riesgo de pérdida de adherencia", correcta: true },
      { texto: "Solo se sanciona en carretera", correcta: false },
      { texto: "Se permite en ciudad si se conduce despacio", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué acción corresponde si se debe estacionar en una pendiente pronunciada?",
    categoria: "general",
    respuestas: [
      { texto: "Dejar el vehículo en neutro solamente", correcta: false },
      { texto: "Girar las ruedas hacia la berma o cordón y usar el freno de mano", correcta: true },
      { texto: "No es necesario tomar precauciones adicionales", correcta: false },
      { texto: "Apoyar el vehículo en un objeto fijo", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué se debe hacer al detectar un olor a combustible dentro del vehículo en movimiento?",
    categoria: "general",
    respuestas: [
      { texto: "Ignorarlo si el motor funciona bien", correcta: false },
      { texto: "Detenerse en un lugar seguro y revisar el vehículo", correcta: true },
      { texto: "Abrir las ventanas y continuar el viaje", correcta: false },
      { texto: "Acelerar para llegar rápido al destino", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué señal indica el fin de una zona de adelantamiento prohibido?",
    categoria: "general",
    respuestas: [
      { texto: "Una línea continua que se convierte en discontinua o la señal de \"Fin de prohibición\"", correcta: true },
      { texto: "Una señal de \"Pare\"", correcta: false },
      { texto: "El cambio de color del pavimento únicamente", correcta: false },
      { texto: "No existe una señal específica", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué se debe hacer al aproximarse a una rotonda (glorieta)?",
    categoria: "general",
    respuestas: [
      { texto: "Ceder el paso a los vehículos que ya circulan dentro de la rotonda", correcta: true },
      { texto: "Tener siempre prioridad sobre los vehículos dentro de la rotonda", correcta: false },
      { texto: "Detenerse completamente antes de entrar", correcta: false },
      { texto: "Ingresar por el lado izquierdo de la vía", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué elemento de un vehículo se debe revisar periódicamente para asegurar una correcta frenada?",
    categoria: "general",
    respuestas: [
      { texto: "El nivel de líquido de frenos y el estado de las pastillas", correcta: true },
      { texto: "El color de la carrocería", correcta: false },
      { texto: "La tapicería de los asientos", correcta: false },
      { texto: "El sistema de audio", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué se debe hacer si un peatón con discapacidad visual utiliza bastón blanco para cruzar la calle?",
    categoria: "general",
    respuestas: [
      { texto: "Detenerse y darle prioridad de paso", correcta: true },
      { texto: "Tocar la bocina para advertirle", correcta: false },
      { texto: "Continuar la marcha si va despacio", correcta: false },
      { texto: "Adelantarlo por el costado sin detenerse", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué significa una señal con la figura de un vehículo dentro de un círculo rojo con una línea diagonal?",
    categoria: "general",
    respuestas: [
      { texto: "Velocidad mínima obligatoria", correcta: false },
      { texto: "Prohibido el ingreso de vehículos motorizados", correcta: true },
      { texto: "Zona de carga y descarga", correcta: false },
      { texto: "Estacionamiento exclusivo para vehículos", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué se debe hacer si se conduce y comienza a sentir fatiga visual o pesadez en los párpados?",
    categoria: "general",
    respuestas: [
      { texto: "Subir el volumen de la música y continuar", correcta: false },
      { texto: "Detenerse en un lugar seguro a descansar", correcta: true },
      { texto: "Abrir la ventana y seguir manejando", correcta: false },
      { texto: "Aumentar la velocidad para llegar antes", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué se debe hacer al circular detrás de una bicicleta en una calle angosta donde no se puede respetar la distancia de adelantamiento?",
    categoria: "general",
    respuestas: [
      { texto: "Adelantar de todas formas reduciendo un poco la distancia", correcta: false },
      { texto: "Esperar a un tramo donde se pueda adelantar con la distancia segura", correcta: true },
      { texto: "Tocar bocina hasta que el ciclista se aparte", correcta: false },
      { texto: "Adelantar por la berma contraria sin visibilidad", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué acción corresponde si un semáforo peatonal está en rojo pero no hay vehículos a la vista?",
    categoria: "general",
    respuestas: [
      { texto: "El peatón puede cruzar libremente sin restricciones", correcta: false },
      { texto: "El conductor debe estar atento igualmente por posibles peatones que crucen", correcta: true },
      { texto: "El conductor puede acelerar sin precaución", correcta: false },
      { texto: "No aplica ninguna norma en ese caso", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué se debe hacer si el vehículo se sobrecalienta (indicador de temperatura en rojo) durante la marcha?",
    categoria: "general",
    respuestas: [
      { texto: "Detenerse en un lugar seguro y apagar el motor", correcta: true },
      { texto: "Acelerar para enfriarlo con el viento", correcta: false },
      { texto: "Abrir el capó de inmediato mientras el motor sigue encendido", correcta: false },
      { texto: "Continuar el viaje sin detenerse", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué se debe hacer al aproximarse a un paso de nivel (cruce ferroviario) con barreras bajando?",
    categoria: "general",
    respuestas: [
      { texto: "Acelerar para cruzar antes de que bajen completamente", correcta: false },
      { texto: "Detenerse y esperar a que las barreras se levanten", correcta: true },
      { texto: "Rodear la barrera si no hay tren a la vista", correcta: false },
      { texto: "Tocar la bocina para que el tren se detenga", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué indica una línea de pare pintada en el pavimento junto a una señal de PARE?",
    categoria: "general",
    respuestas: [
      { texto: "El lugar exacto donde debe detenerse el vehículo", correcta: true },
      { texto: "El inicio de una zona de adelantamiento", correcta: false },
      { texto: "Una recomendación sin carácter obligatorio", correcta: false },
      { texto: "El límite de una zona de estacionamiento", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué se debe hacer al ver una señal de \"Doble vía\" en un tramo que antes era de una sola pista por sentido?",
    categoria: "general",
    respuestas: [
      { texto: "Mantenerse atento a la posibilidad de tránsito en sentido contrario", correcta: true },
      { texto: "Ignorarla si no hay vehículos visibles", correcta: false },
      { texto: "Aumentar la velocidad porque hay más espacio", correcta: false },
      { texto: "Cambiarse siempre al carril izquierdo", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué se debe hacer si se conduce y se percibe una fuerte lluvia que reduce la visibilidad considerablemente?",
    categoria: "general",
    respuestas: [
      { texto: "Encender las luces de emergencia y seguir a velocidad normal", correcta: false },
      { texto: "Reducir la velocidad, encender luces bajas y aumentar la distancia de seguridad", correcta: true },
      { texto: "Detenerse en medio de la calzada sin señalizar", correcta: false },
      { texto: "Aumentar la velocidad para salir de la zona de lluvia", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué se debe hacer si el limpiaparabrisas deja de funcionar durante un viaje con lluvia?",
    categoria: "general",
    respuestas: [
      { texto: "Continuar el viaje a la misma velocidad", correcta: false },
      { texto: "Reducir la velocidad y buscar un lugar seguro para detenerse", correcta: true },
      { texto: "Sacar la cabeza por la ventana para ver mejor", correcta: false },
      { texto: "Aumentar la velocidad para llegar antes de que empeore", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué se entiende por \"punto ciego\" o ángulo muerto de un vehículo?",
    categoria: "general",
    respuestas: [
      { texto: "La zona que no se alcanza a ver ni por los espejos ni directamente", correcta: true },
      { texto: "El lugar donde se ubica el estacionamiento", correcta: false },
      { texto: "Una falla mecánica del vehículo", correcta: false },
      { texto: "El área del parabrisas empañado", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué se debe hacer antes de cambiar de pista en una autopista?",
    categoria: "general",
    respuestas: [
      { texto: "Cambiar directamente si el carril se ve despejado por el espejo", correcta: false },
      { texto: "Señalizar, revisar espejos y el ángulo muerto antes de cambiar", correcta: true },
      { texto: "Tocar bocina para advertir el cambio", correcta: false },
      { texto: "Reducir la velocidad drásticamente antes de cambiar", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué se debe hacer si se transporta carga que sobresale de las dimensiones del vehículo?",
    categoria: "general",
    respuestas: [
      { texto: "No requiere señalización adicional", correcta: false },
      { texto: "Señalizar la carga con elementos reflectantes o banderines según lo exigido", correcta: true },
      { texto: "Solo se debe conducir de noche", correcta: false },
      { texto: "Se puede transportar sin límite de tamaño", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué se debe hacer si el vehículo queda varado por falta de combustible en la calzada?",
    categoria: "general",
    respuestas: [
      { texto: "Dejarlo donde está sin señalización", correcta: false },
      { texto: "Encender luces de emergencia y señalizar con triángulos si es posible", correcta: true },
      { texto: "Empujarlo hasta la próxima estación sin señalización", correcta: false },
      { texto: "Bajar del vehículo y caminar sin dejar aviso", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué se debe considerar al conducir un vehículo con acoplado o remolque?",
    categoria: "general",
    respuestas: [
      { texto: "La distancia de frenado es la misma que sin remolque", correcta: false },
      { texto: "Se requiere mayor distancia de frenado y precaución en curvas", correcta: true },
      { texto: "Se puede circular a la misma velocidad máxima que sin remolque en cualquier vía", correcta: false },
      { texto: "No afecta la maniobrabilidad del vehículo", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué se debe hacer si un ciclista circula por la calzada sin ciclovía disponible?",
    categoria: "general",
    respuestas: [
      { texto: "Obligarlo a circular por la vereda", correcta: false },
      { texto: "Respetar su derecho a circular por la calzada manteniendo distancia segura", correcta: true },
      { texto: "Tocar bocina hasta que se retire de la vía", correcta: false },
      { texto: "Adelantarlo sin dejar espacio lateral", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué indica una señal de tránsito con la figura de una carretilla o pala junto a conos?",
    categoria: "general",
    respuestas: [
      { texto: "Zona de picnic", correcta: false },
      { texto: "Trabajos en la vía", correcta: true },
      { texto: "Feria libre cercana", correcta: false },
      { texto: "Zona de descanso", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué se debe hacer al circular por un puente angosto de una sola vía?",
    categoria: "general",
    respuestas: [
      { texto: "Acelerar para cruzar antes que el vehículo contrario", correcta: false },
      { texto: "Ceder el paso según la señalización o prioridad establecida", correcta: true },
      { texto: "Cruzar sin verificar si viene otro vehículo", correcta: false },
      { texto: "Detenerse en la mitad del puente", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué se debe hacer si las luces de freno de un vehículo no funcionan correctamente?",
    categoria: "general",
    respuestas: [
      { texto: "Se puede seguir circulando sin problema", correcta: false },
      { texto: "Repararlas antes de continuar circulando, ya que es una falla de seguridad", correcta: true },
      { texto: "Solo es obligatorio revisarlas en la revisión técnica anual", correcta: false },
      { texto: "Se puede reemplazar por señas manuales exclusivamente", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué se debe hacer si se detecta que un pasajero menor de edad no lleva el cinturón de seguridad correctamente ajustado?",
    categoria: "general",
    respuestas: [
      { texto: "No es responsabilidad del conductor", correcta: false },
      { texto: "El conductor debe asegurarse de que todos los pasajeros usen el cinturón correctamente", correcta: true },
      { texto: "Solo aplica si el menor va en el asiento delantero", correcta: false },
      { texto: "Se puede omitir en trayectos cortos", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué se debe hacer al aproximarse a una intersección con mal tiempo y semáforo dañado?",
    categoria: "general",
    respuestas: [
      { texto: "Cruzar sin detenerse si no hay vehículos visibles", correcta: false },
      { texto: "Tratarla como un cruce sin regulación y actuar con extrema precaución", correcta: true },
      { texto: "Acelerar para cruzar antes que otros vehículos", correcta: false },
      { texto: "Esperar indefinidamente sin avanzar", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué se debe hacer si un vehículo de carga pesada realiza un giro amplio en una esquina?",
    categoria: "general",
    respuestas: [
      { texto: "Adelantarlo por el costado durante el giro", correcta: false },
      { texto: "Mantener distancia y esperar a que complete la maniobra", correcta: true },
      { texto: "Tocar bocina para que gire más rápido", correcta: false },
      { texto: "Ubicarse en su ángulo muerto para adelantar", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué se debe hacer si se conduce y se percibe somnolencia repentina en una carretera larga?",
    categoria: "general",
    respuestas: [
      { texto: "Aumentar la velocidad para llegar más rápido al destino", correcta: false },
      { texto: "Detenerse en un lugar seguro y descansar antes de continuar", correcta: true },
      { texto: "Abrir todas las ventanas y seguir sin parar", correcta: false },
      { texto: "Ignorarlo si falta poco para llegar", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué indica una señal de tránsito de color naranja en una zona de trabajos viales?",
    categoria: "general",
    respuestas: [
      { texto: "Es una señal informativa permanente", correcta: false },
      { texto: "Corresponde a señalización transitoria por obras o desvíos", correcta: true },
      { texto: "Indica un límite de velocidad definitivo", correcta: false },
      { texto: "Señala una zona de estacionamiento exclusivo", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué se debe hacer si un vehículo se aproxima por detrás a alta velocidad mientras se circula por el carril izquierdo?",
    categoria: "general",
    respuestas: [
      { texto: "Acelerar para mantenerse adelante", correcta: false },
      { texto: "Ceder el paso cambiándose al carril derecho cuando sea seguro", correcta: true },
      { texto: "Frenar bruscamente para advertirle", correcta: false },
      { texto: "Permanecer en el carril izquierdo sin importar la situación", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué se debe hacer al conducir por una vía con hielo o escarcha en las primeras horas de la mañana?",
    categoria: "general",
    respuestas: [
      { texto: "Conducir a velocidad normal si el auto tiene tracción integral", correcta: false },
      { texto: "Reducir la velocidad y evitar frenadas o giros bruscos", correcta: true },
      { texto: "Acelerar para evitar que las ruedas se congelen", correcta: false },
      { texto: "No es necesario tomar precauciones especiales", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué se debe hacer si un vehículo de emergencia se aproxima en sentido contrario por una vía de doble sentido?",
    categoria: "general",
    respuestas: [
      { texto: "Ignorarlo ya que va en sentido contrario", correcta: false },
      { texto: "Facilitar su paso orillándose si la vía lo permite", correcta: true },
      { texto: "Acelerar para cruzarse antes", correcta: false },
      { texto: "Detenerse en medio de la vía", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué se debe hacer si se pierde el control momentáneo del vehículo al pasar por un charco grande de agua?",
    categoria: "general",
    respuestas: [
      { texto: "Frenar bruscamente de inmediato", correcta: false },
      { texto: "Sujetar el volante con firmeza y soltar el acelerador gradualmente", correcta: true },
      { texto: "Acelerar para salir rápido del charco", correcta: false },
      { texto: "Girar el volante bruscamente hacia un lado", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué se debe hacer si se conduce por una calle con niños jugando cerca de la calzada, aunque no haya señalización escolar?",
    categoria: "general",
    respuestas: [
      { texto: "Mantener la velocidad habitual", correcta: false },
      { texto: "Reducir la velocidad y extremar la precaución", correcta: true },
      { texto: "Tocar bocina para que se alejen", correcta: false },
      { texto: "Acelerar para pasar rápido por la zona", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué se debe hacer si el aire acondicionado o la calefacción provocan empañamiento en los vidrios?",
    categoria: "general",
    respuestas: [
      { texto: "Continuar conduciendo aunque la visibilidad sea baja", correcta: false },
      { texto: "Usar el desempañador y detenerse si es necesario hasta recuperar visibilidad", correcta: true },
      { texto: "Limpiar el vidrio con la mano mientras se conduce", correcta: false },
      { texto: "Abrir todas las ventanas de inmediato sin reducir velocidad", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué se debe hacer si se transporta una mascota dentro del vehículo?",
    categoria: "general",
    respuestas: [
      { texto: "Dejarla suelta para que se acomode libremente", correcta: false },
      { texto: "Asegurarla con un elemento de sujeción adecuado para evitar distracciones o lesiones", correcta: true },
      { texto: "Ubicarla en el asiento del conductor", correcta: false },
      { texto: "No existe ninguna recomendación al respecto", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué se debe hacer si se conduce y el vehículo de adelante frena repentinamente sin motivo aparente?",
    categoria: "general",
    respuestas: [
      { texto: "Tocar bocina y adelantarlo de inmediato", correcta: false },
      { texto: "Frenar manteniendo el control y la distancia de seguridad", correcta: true },
      { texto: "Girar bruscamente hacia el otro carril sin verificar", correcta: false },
      { texto: "Acelerar para pasarlo antes de que se detenga por completo", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué se debe hacer respecto al volumen de la música al conducir?",
    categoria: "general",
    respuestas: [
      { texto: "Mantenerlo lo suficientemente bajo para escuchar sirenas, bocinas u otras alertas", correcta: true },
      { texto: "No tiene relación con la seguridad vial", correcta: false },
      { texto: "Se puede mantener al máximo volumen sin problema", correcta: false },
      { texto: "Solo se debe bajar en zonas urbanas", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué se debe hacer si el vehículo debe circular por una zona inundada?",
    categoria: "general",
    respuestas: [
      { texto: "Cruzar a alta velocidad para no detenerse en el agua", correcta: false },
      { texto: "Evaluar la profundidad y evitar cruzar si el nivel del agua es alto", correcta: true },
      { texto: "Cruzar siempre, sin importar la profundidad", correcta: false },
      { texto: "Apagar el motor a mitad de camino", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué se debe hacer si se detecta una fuga de aceite bajo el vehículo antes de iniciar un viaje?",
    categoria: "general",
    respuestas: [
      { texto: "Iniciar el viaje igualmente si el motor enciende bien", correcta: false },
      { texto: "Revisar y reparar la fuga antes de conducir", correcta: true },
      { texto: "Agregar más aceite y continuar sin revisar la causa", correcta: false },
      { texto: "Ignorarlo si el viaje es corto", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué se debe hacer si un vehículo estacionado obstruye parcialmente la visibilidad en una esquina?",
    categoria: "general",
    respuestas: [
      { texto: "Acelerar para cruzar rápido", correcta: false },
      { texto: "Reducir la velocidad y avanzar con extrema precaución", correcta: true },
      { texto: "Ignorar la obstrucción si se conoce bien la zona", correcta: false },
      { texto: "Tocar bocina en lugar de reducir la velocidad", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué se debe hacer si el vehículo pierde tracción al subir una pendiente con lluvia?",
    categoria: "general",
    respuestas: [
      { texto: "Acelerar bruscamente para forzar el ascenso", correcta: false },
      { texto: "Mantener una velocidad constante y evitar movimientos bruscos del volante", correcta: true },
      { texto: "Frenar completamente en plena pendiente", correcta: false },
      { texto: "Girar el volante de un lado a otro para ganar tracción", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué se debe hacer si se conduce y aparece una alerta en el tablero indicando baja presión de neumáticos?",
    categoria: "general",
    respuestas: [
      { texto: "Ignorarla si el vehículo se siente estable", correcta: false },
      { texto: "Revisar la presión de los neumáticos en cuanto sea posible", correcta: true },
      { texto: "Aumentar la velocidad para verificar si desaparece la alerta", correcta: false },
      { texto: "Solo revisar al llegar a destino, sin importar la distancia", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué se debe hacer si se transportan objetos sueltos dentro del habitáculo del vehículo?",
    categoria: "general",
    respuestas: [
      { texto: "Dejarlos sin asegurar, ya que no afecta la conducción", correcta: false },
      { texto: "Asegurarlos para evitar que se desplacen y se conviertan en un riesgo", correcta: true },
      { texto: "Ubicarlos siempre en el asiento del conductor", correcta: false },
      { texto: "Solo asegurarlos en viajes largos", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué se debe hacer si se detecta que el líquido de la batería del vehículo está bajo?",
    categoria: "general",
    respuestas: [
      { texto: "Rellenarlo con el líquido adecuado según recomendación del fabricante", correcta: true },
      { texto: "Ignorarlo mientras el motor encienda", correcta: false },
      { texto: "Rellenarlo con cualquier líquido disponible", correcta: false },
      { texto: "Cambiar la batería inmediatamente sin revisar", correcta: false }
    ]
  }  ,
  {
    pregunta: "¿Qué distancia lateral mínima debe respetar un conductor al adelantar a un ciclista?",
    categoria: "general",
    respuestas: [
      { texto: "1 metro", correcta: false },
      { texto: "1,5 metros", correcta: true },
      { texto: "3 metros", correcta: false },
      { texto: "No existe una distancia definida", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué se debe hacer al aproximarse a un paso de peatones con personas cruzando?",
    categoria: "general",
    respuestas: [
      { texto: "Mantener la velocidad si el semáforo está en verde para el vehículo", correcta: false },
      { texto: "Detenerse y ceder el paso a los peatones", correcta: true },
      { texto: "Tocar la bocina para que se apuren", correcta: false },
      { texto: "Adelantarlos por el costado sin reducir velocidad", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué establece la ley respecto al uso del teléfono celular mientras se conduce?",
    categoria: "general",
    respuestas: [
      { texto: "Está permitido si se sostiene con una mano", correcta: false },
      { texto: "Está prohibido usarlo sin un sistema de manos libres", correcta: true },
      { texto: "Solo está prohibido de noche", correcta: false },
      { texto: "No existe regulación al respecto", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué antigüedad máxima puede tener la revisión técnica para circular de manera legal?",
    categoria: "general",
    respuestas: [
      { texto: "La vigencia indicada en el certificado, según lo fije la Revisión Técnica", correcta: true },
      { texto: "No tiene vigencia una vez aprobada", correcta: false },
      { texto: "Un mes desde su emisión", correcta: false },
      { texto: "Solo es válida en la región donde se realizó", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué acción corresponde si Carabineros solicita detener el vehículo?",
    categoria: "general",
    respuestas: [
      { texto: "Detenerse y colaborar con el procedimiento", correcta: true },
      { texto: "Acelerar si no se ha cometido infracción", correcta: false },
      { texto: "Detenerse solo si hay testigos presentes", correcta: false },
      { texto: "Ignorar si el vehículo está en buen estado", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué elemento de seguridad es obligatorio portar en el vehículo según la normativa vigente?",
    categoria: "general",
    respuestas: [
      { texto: "Triángulos o balizas reflectantes", correcta: true },
      { texto: "Botiquín de primeros auxilios", correcta: false },
      { texto: "Extintor de incendios", correcta: false },
      { texto: "Neumático de repuesto obligatoriamente inflado al 100%", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué se debe hacer si un vehículo de mayor tamaño (camión o bus) enciende su luz direccional para cambiarse de pista?",
    categoria: "general",
    respuestas: [
      { texto: "Acelerar para no dejarlo pasar", correcta: false },
      { texto: "Facilitar el cambio de pista reduciendo velocidad si es necesario", correcta: true },
      { texto: "Tocar la bocina en señal de molestia", correcta: false },
      { texto: "Mantenerse en el ángulo muerto del vehículo", correcta: false }
    ]
  },
  {
    pregunta: "¿Está permitido circular con las luces de emergencia encendidas mientras el vehículo está en movimiento sin causa justificada?",
    categoria: "general",
    respuestas: [
      { texto: "Sí, siempre que llueva", correcta: false },
      { texto: "No, su uso en movimiento corresponde solo a situaciones de riesgo real", correcta: true },
      { texto: "Sí, es obligatorio en avenidas", correcta: false },
      { texto: "No tiene relación con la seguridad vial", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué se debe hacer antes de abrir la puerta del vehículo estando estacionado junto a la vereda?",
    categoria: "general",
    respuestas: [
      { texto: "Abrir rápido para no obstaculizar el tránsito", correcta: false },
      { texto: "Verificar que no vengan ciclistas o vehículos antes de abrir", correcta: true },
      { texto: "No es necesario verificar si el vehículo está detenido", correcta: false },
      { texto: "Solo revisar por el espejo interior", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué sucede con la licencia de conducir si se acumulan las infracciones gravísimas establecidas por la ley?",
    categoria: "general",
    respuestas: [
      { texto: "No tiene ninguna consecuencia", correcta: false },
      { texto: "Puede derivar en la suspensión o cancelación de la licencia", correcta: true },
      { texto: "Solo se aplica una multa simbólica", correcta: false },
      { texto: "Se traspasa la sanción al vehículo, no al conductor", correcta: false }
    ]
  }  ,
  {
    pregunta: "¿Qué examen es obligatorio rendir para obtener por primera vez una licencia de conducir clase B en Chile?",
    categoria: "general",
    respuestas: [
      { texto: "Examen teórico y examen práctico de manejo", correcta: true },
      { texto: "Solo examen teórico", correcta: false },
      { texto: "Solo examen práctico", correcta: false },
      { texto: "No se requiere ningún examen", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué examen adicional se exige para obtener una licencia profesional (clase A)?",
    categoria: "general",
    respuestas: [
      { texto: "Examen psicotécnico y de conocimientos específicos según la subclase", correcta: true },
      { texto: "Solo una entrevista personal", correcta: false },
      { texto: "No existen requisitos adicionales", correcta: false },
      { texto: "Solo se exige mayoría de edad", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué ocurre si un conductor acumula infracciones gravísimas de manera reiterada?",
    categoria: "general",
    respuestas: [
      { texto: "No tiene ninguna consecuencia adicional", correcta: false },
      { texto: "Puede arriesgar la suspensión o cancelación de su licencia de conducir", correcta: true },
      { texto: "Solo se le aplica una multa menor", correcta: false },
      { texto: "Se le exige cambiar de vehículo", correcta: false }
    ]
  },
  {
    pregunta: "¿Cómo se clasifican las infracciones de tránsito según la Ley 18.290?",
    categoria: "general",
    respuestas: [
      { texto: "Leves, menos graves, graves y gravísimas", correcta: true },
      { texto: "Solo leves y graves", correcta: false },
      { texto: "No existe clasificación", correcta: false },
      { texto: "Se clasifican solo por el monto de la multa", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué se debe hacer si la licencia de conducir fue extraviada?",
    categoria: "general",
    respuestas: [
      { texto: "Conducir sin documento hasta encontrarla", correcta: false },
      { texto: "Solicitar un duplicado en el Registro Civil", correcta: true },
      { texto: "No es necesario portar ningún documento", correcta: false },
      { texto: "Usar la cédula de identidad como reemplazo permanente", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué se debe hacer si la licencia de conducir indica el uso obligatorio de lentes ópticos?",
    categoria: "general",
    respuestas: [
      { texto: "Usarlos siempre que se conduzca", correcta: true },
      { texto: "Usarlos solo de noche", correcta: false },
      { texto: "No es obligatorio si el conductor ve bien de cerca", correcta: false },
      { texto: "Solo se exige en exámenes de renovación", correcta: false }
    ]
  },
  {
    pregunta: "¿Está permitido adelantar por la derecha en una vía urbana con más de un carril por sentido?",
    categoria: "general",
    respuestas: [
      { texto: "Nunca está permitido bajo ninguna circunstancia", correcta: false },
      { texto: "Puede realizarse cuando el tránsito y las condiciones de la vía lo permitan de forma segura", correcta: true },
      { texto: "Solo está permitido en autopistas rurales", correcta: false },
      { texto: "Solo lo pueden hacer los vehículos de emergencia", correcta: false }
    ]
  },
  {
    pregunta: "¿Está permitido adelantar en una curva sin visibilidad suficiente?",
    categoria: "general",
    respuestas: [
      { texto: "Sí, si el vehículo tiene buena aceleración", correcta: false },
      { texto: "No, está prohibido por el riesgo de colisión frontal", correcta: true },
      { texto: "Solo de día", correcta: false },
      { texto: "Solo si no hay línea continua", correcta: false }
    ]
  },
  {
    pregunta: "¿Está permitido adelantar sobre un puente estrecho?",
    categoria: "general",
    respuestas: [
      { texto: "Sí, siempre que se toque la bocina", correcta: false },
      { texto: "No, generalmente está prohibido por la falta de espacio y visibilidad", correcta: true },
      { texto: "Solo de noche", correcta: false },
      { texto: "Solo vehículos livianos pueden hacerlo", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué significa una señal de tránsito con dos flechas opuestas y la palabra “NO” tachada sobre un auto adelantando a otro?",
    categoria: "general",
    respuestas: [
      { texto: "Adelantamiento permitido con precaución", correcta: false },
      { texto: "Prohibido adelantar en ese tramo", correcta: true },
      { texto: "Zona de dos vías", correcta: false },
      { texto: "Fin de la doble vía", correcta: false }
    ]
  },
  {
    pregunta: "¿Es obligatorio el uso de luces encendidas durante el día para motocicletas?",
    categoria: "general",
    respuestas: [
      { texto: "No, es opcional", correcta: false },
      { texto: "Sí, para aumentar su visibilidad ante otros conductores", correcta: true },
      { texto: "Solo en carretera", correcta: false },
      { texto: "Solo si el motociclista lo desea", correcta: false }
    ]
  },
  {
    pregunta: "¿Está permitido que un motociclista circule entre filas de vehículos detenidos en un taco?",
    categoria: "general",
    respuestas: [
      { texto: "Está expresamente permitido en toda circunstancia", correcta: false },
      { texto: "No está permitido y se considera una maniobra riesgosa e infraccional", correcta: true },
      { texto: "Solo está permitido en autopistas", correcta: false },
      { texto: "Solo lo pueden hacer motos de alta cilindrada", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué protección adicional, además del casco, se recomienda para conducir una motocicleta?",
    categoria: "general",
    respuestas: [
      { texto: "Chaqueta, guantes y calzado adecuado de protección", correcta: true },
      { texto: "No se recomienda usar ropa adicional", correcta: false },
      { texto: "Solo lentes de sol", correcta: false },
      { texto: "Un poncho de agua en cualquier clima", correcta: false }
    ]
  },
  {
    pregunta: "¿Está permitido transportar pasajeros en la parte trasera descubierta de una camioneta (pickup)?",
    categoria: "general",
    respuestas: [
      { texto: "Sí, sin ninguna restricción", correcta: false },
      { texto: "Está prohibido o sujeto a restricciones estrictas de seguridad", correcta: true },
      { texto: "Solo si son menos de 3 personas", correcta: false },
      { texto: "Solo de noche", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué determina el número máximo de pasajeros permitidos en un vehículo?",
    categoria: "general",
    respuestas: [
      { texto: "El criterio del conductor", correcta: false },
      { texto: "La capacidad indicada por el fabricante según el número de asientos con cinturón", correcta: true },
      { texto: "El tamaño de los pasajeros", correcta: false },
      { texto: "No existe un límite legal", correcta: false }
    ]
  },
  {
    pregunta: "¿Es obligatorio el uso de cinturón de seguridad para conductores de aplicaciones de transporte (por ejemplo, viajes compartidos)?",
    categoria: "general",
    respuestas: [
      { texto: "No, están exentos por ser un servicio", correcta: false },
      { texto: "Sí, la obligación aplica igual que a cualquier conductor y pasajero", correcta: true },
      { texto: "Solo en viajes largos", correcta: false },
      { texto: "Solo si el pasajero lo solicita", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué es un espacio de estacionamiento reservado para personas con discapacidad?",
    categoria: "general",
    respuestas: [
      { texto: "Un lugar de uso exclusivo señalizado, para vehículos con la credencial correspondiente", correcta: true },
      { texto: "Un espacio de uso libre para cualquier conductor", correcta: false },
      { texto: "Un lugar solo para motocicletas", correcta: false },
      { texto: "Un espacio temporal sin regulación", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué ocurre si un conductor sin la credencial correspondiente estaciona en un espacio para personas con discapacidad?",
    categoria: "general",
    respuestas: [
      { texto: "No tiene ninguna sanción", correcta: false },
      { texto: "Incurre en una infracción y puede ser multado", correcta: true },
      { texto: "Solo recibe una advertencia verbal", correcta: false },
      { texto: "Se le exige donar a una institución benéfica", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué se debe hacer si se estaciona en doble fila, obstruyendo la circulación?",
    categoria: "general",
    respuestas: [
      { texto: "Es una práctica permitida si es por poco tiempo", correcta: false },
      { texto: "Se debe evitar, ya que constituye una infracción de tránsito", correcta: true },
      { texto: "Solo se sanciona si hay un peatón cerca", correcta: false },
      { texto: "Solo aplica a vehículos de carga", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué indica una señal de \"zona de carga y descarga\"?",
    categoria: "general",
    respuestas: [
      { texto: "Estacionamiento libre para cualquier vehículo particular", correcta: false },
      { texto: "Espacio destinado a la carga y descarga de mercadería en horarios determinados", correcta: true },
      { texto: "Zona de estacionamiento nocturno", correcta: false },
      { texto: "Área exclusiva para taxis", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué se recomienda al transportar combustible en bidones dentro de un vehículo particular?",
    categoria: "general",
    respuestas: [
      { texto: "Transportarlo sin restricciones en el asiento trasero", correcta: false },
      { texto: "Transportarlo en envases homologados, bien asegurados y ventilados", correcta: true },
      { texto: "No existe ninguna precaución necesaria", correcta: false },
      { texto: "Se puede transportar junto a una fuente de calor", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué indica que un vehículo emita humo negro excesivo por el escape?",
    categoria: "general",
    respuestas: [
      { texto: "Un funcionamiento normal del motor", correcta: false },
      { texto: "Una posible falla mecánica o exceso de emisión contaminante", correcta: true },
      { texto: "Que el vehículo tiene mayor potencia", correcta: false },
      { texto: "Que el combustible es de mejor calidad", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué evalúa la revisión de emisiones o control de gases dentro de la revisión técnica?",
    categoria: "general",
    respuestas: [
      { texto: "El nivel de contaminantes que expulsa el vehículo", correcta: true },
      { texto: "El color de la pintura del vehículo", correcta: false },
      { texto: "El estado de la tapicería interior", correcta: false },
      { texto: "El nivel de combustible en el estanque", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué tolerancia de alcohol en la sangre se aplica a conductores de transporte escolar o de pasajeros?",
    categoria: "general",
    respuestas: [
      { texto: "La misma tolerancia que a cualquier conductor particular", correcta: false },
      { texto: "Una exigencia más estricta, dada la responsabilidad sobre los pasajeros", correcta: true },
      { texto: "No existe ninguna restricción especial", correcta: false },
      { texto: "Solo se controla en horario nocturno", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué se entiende por conducción temeraria o negligente?",
    categoria: "general",
    respuestas: [
      { texto: "Conducir respetando todas las normas de tránsito", correcta: false },
      { texto: "Conducir de forma imprudente, poniendo en riesgo a terceros", correcta: true },
      { texto: "Conducir a baja velocidad en zona urbana", correcta: false },
      { texto: "Conducir con el vehículo en buen estado técnico", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué se debe hacer inmediatamente después de verse involucrado en un choque, aunque sea menor?",
    categoria: "general",
    respuestas: [
      { texto: "Retirarse del lugar de inmediato para evitar problemas", correcta: false },
      { texto: "Detenerse, resguardar el lugar y dar aviso a Carabineros si corresponde", correcta: true },
      { texto: "Discutir con la otra parte antes de tomar cualquier acción", correcta: false },
      { texto: "Mover los vehículos de inmediato sin dejar registro", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué obligación tiene un conductor tras causar un accidente con daños o lesiones?",
    categoria: "general",
    respuestas: [
      { texto: "Ninguna, si el otro conductor no reclama", correcta: false },
      { texto: "Detenerse y prestar ayuda o cooperación según lo que exige la ley", correcta: true },
      { texto: "Retirarse si no hay testigos", correcta: false },
      { texto: "Solo debe reportarlo a su aseguradora", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué distancia aproximada se recomienda para colocar los triángulos de seguridad en carretera?",
    categoria: "general",
    respuestas: [
      { texto: "Justo al lado del vehículo detenido", correcta: false },
      { texto: "A una distancia suficiente que permita advertir a otros conductores con anticipación", correcta: true },
      { texto: "Detrás del vehículo, pegados al parachoques", correcta: false },
      { texto: "No es necesario usarlos si es de día", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué se debe hacer con niños o mascotas al estacionar y dejar el vehículo, aunque sea por poco tiempo?",
    categoria: "general",
    respuestas: [
      { texto: "Se pueden dejar solos si el vehículo queda a la sombra", correcta: false },
      { texto: "Nunca dejarlos solos dentro del vehículo, por el riesgo de golpe de calor u otros peligros", correcta: true },
      { texto: "Dejar una ventana abierta es suficiente en cualquier caso", correcta: false },
      { texto: "No representa ningún riesgo si el vehículo está apagado", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué indica una señal de tránsito que muestra una vía angosta que se estrecha?",
    categoria: "general",
    respuestas: [
      { texto: "Aumento del ancho de la calzada más adelante", correcta: false },
      { texto: "Reducción del ancho de la vía, se debe extremar precaución", correcta: true },
      { texto: "Zona de adelantamiento habilitada", correcta: false },
      { texto: "Fin de la carretera", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué prioridad tiene un tranvía o tren ligero que circula en superficie compartiendo la vía con vehículos?",
    categoria: "general",
    respuestas: [
      { texto: "Ninguna, tiene la misma prioridad que cualquier vehículo", correcta: false },
      { texto: "Generalmente cuenta con prioridad de paso sobre los vehículos particulares", correcta: true },
      { texto: "Debe ceder el paso siempre a los vehículos particulares", correcta: false },
      { texto: "Solo tiene prioridad de noche", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué se debe hacer al cruzar una línea férrea sin barreras automáticas?",
    categoria: "general",
    respuestas: [
      { texto: "Cruzar rápidamente sin detenerse", correcta: false },
      { texto: "Detenerse, mirar y escuchar antes de cruzar con precaución", correcta: true },
      { texto: "Tocar bocina en lugar de detenerse", correcta: false },
      { texto: "No es necesario reducir la velocidad", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué indica una flecha verde exclusiva en un semáforo, junto a la luz roja general?",
    categoria: "general",
    respuestas: [
      { texto: "Solo los vehículos que giran en la dirección de la flecha pueden avanzar", correcta: true },
      { texto: "Todos los vehículos pueden avanzar libremente", correcta: false },
      { texto: "El semáforo está averiado", correcta: false },
      { texto: "Solo los peatones pueden cruzar", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué se entiende por una \"vía preferencial\"?",
    categoria: "general",
    respuestas: [
      { texto: "Una vía cuya circulación tiene prioridad sobre las vías que la interceptan", correcta: true },
      { texto: "Una vía exclusiva para transporte público", correcta: false },
      { texto: "Una vía solo habilitada de noche", correcta: false },
      { texto: "Una vía sin ningún tipo de regulación", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué es una \"vía expresa\" o autopista urbana de alta velocidad?",
    categoria: "general",
    respuestas: [
      { texto: "Una vía de acceso controlado, generalmente sin cruces a nivel, destinada a tránsito rápido", correcta: true },
      { texto: "Una calle residencial con velocidad reducida", correcta: false },
      { texto: "Una vía exclusiva para bicicletas", correcta: false },
      { texto: "Una vía peatonal", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué se recomienda hacer al estacionar un vehículo en pendiente, además de usar el freno de mano?",
    categoria: "general",
    respuestas: [
      { texto: "Dejar una marcha puesta (o \"park\" en automáticos) y girar las ruedas hacia el cordón", correcta: true },
      { texto: "Dejar el vehículo en neutro sin ninguna otra medida", correcta: false },
      { texto: "No es necesario tomar precauciones adicionales", correcta: false },
      { texto: "Retirar la llave sin aplicar el freno de mano", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué se debe hacer al usar las luces intermitentes antes de estacionar en la vía pública?",
    categoria: "general",
    respuestas: [
      { texto: "No es necesario señalizar si el espacio está libre", correcta: false },
      { texto: "Activar la luz direccional correspondiente para advertir la maniobra", correcta: true },
      { texto: "Usar las luces de emergencia en todo momento al estacionar", correcta: false },
      { texto: "Tocar la bocina en lugar de señalizar", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué se entiende por \"vía arterial\" dentro de la clasificación de vías urbanas?",
    categoria: "general",
    respuestas: [
      { texto: "Una vía de alto flujo que conecta distintos sectores de la ciudad", correcta: true },
      { texto: "Una calle sin salida", correcta: false },
      { texto: "Un pasaje residencial de bajo tránsito", correcta: false },
      { texto: "Una vía exclusiva para peatones", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué se recomienda a un conductor que reincide en infracciones graves respecto a su formación vial?",
    categoria: "general",
    respuestas: [
      { texto: "No existe ninguna medida formativa aplicable", correcta: false },
      { texto: "Puede ser derivado a cursos de sensibilización o capacitación en conducción segura", correcta: true },
      { texto: "Se le retira el vehículo de forma permanente", correcta: false },
      { texto: "Se le exige cambiar de domicilio", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué se debe hacer si se cambia de domicilio después de haber obtenido la licencia de conducir?",
    categoria: "general",
    respuestas: [
      { texto: "No es necesario informar el cambio", correcta: false },
      { texto: "Se recomienda actualizar los datos en el Registro Civil", correcta: true },
      { texto: "Se debe tramitar una licencia completamente nueva", correcta: false },
      { texto: "Se pierde la validez de la licencia automáticamente", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué se debe hacer si el vehículo circula con vidrios polarizados que no cumplen con la normativa de transparencia?",
    categoria: "general",
    respuestas: [
      { texto: "No representa ninguna infracción", correcta: false },
      { texto: "Puede constituir una infracción de tránsito", correcta: true },
      { texto: "Solo se sanciona en vehículos de carga", correcta: false },
      { texto: "Se permite sin límite si el vehículo es propio", correcta: false }
    ]
  },
  {
    pregunta: "¿Está permitido el uso de luces antiniebla en condiciones de buena visibilidad?",
    categoria: "general",
    respuestas: [
      { texto: "Sí, se recomienda usarlas siempre", correcta: false },
      { texto: "No, su uso innecesario puede encandilar a otros conductores", correcta: true },
      { texto: "Solo de noche sin importar la visibilidad", correcta: false },
      { texto: "Es obligatorio mantenerlas siempre encendidas", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué se debe hacer si se conduce por una zona con niebla espesa y baja visibilidad?",
    categoria: "general",
    respuestas: [
      { texto: "Usar luces altas para iluminar más lejos", correcta: false },
      { texto: "Usar luces bajas o antiniebla y reducir la velocidad", correcta: true },
      { texto: "Detenerse en plena calzada sin señalizar", correcta: false },
      { texto: "Aumentar la velocidad para salir rápido de la niebla", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué factores afectan la distancia de frenado de un vehículo?",
    categoria: "general",
    respuestas: [
      { texto: "Solo el estado de las pastillas de freno", correcta: false },
      { texto: "La velocidad, el estado de los neumáticos, el peso y las condiciones del camino", correcta: true },
      { texto: "Únicamente el color del vehículo", correcta: false },
      { texto: "El tipo de música que se escucha al conducir", correcta: false }
    ]
  },
  {
    pregunta: "¿Con qué frecuencia se recomienda revisar el estado de los espejos retrovisores de un vehículo?",
    categoria: "general",
    respuestas: [
      { texto: "Solo una vez al año", correcta: false },
      { texto: "De forma periódica, asegurándose de que estén bien ajustados y sin daños", correcta: true },
      { texto: "No requieren revisión si el vehículo es nuevo", correcta: false },
      { texto: "Solo antes de un viaje largo", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué se debe hacer si se transporta una carga considerada peligrosa (por ejemplo, sustancias inflamables) en un vehículo comercial?",
    categoria: "general",
    respuestas: [
      { texto: "No requiere ninguna medida especial", correcta: false },
      { texto: "Cumplir con la señalización, capacitación y normativa específica para el transporte de sustancias peligrosas", correcta: true },
      { texto: "Solo se debe avisar a los pasajeros", correcta: false },
      { texto: "Basta con conducir despacio", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué se recomienda para un conductor novato en sus primeros meses con licencia?",
    categoria: "general",
    respuestas: [
      { texto: "Conducir de manera similar a un conductor experimentado, sin ninguna precaución adicional", correcta: false },
      { texto: "Extremar la precaución, evitar situaciones de riesgo y ganar experiencia progresivamente", correcta: true },
      { texto: "Evitar conducir en cualquier circunstancia durante el primer año", correcta: false },
      { texto: "Conducir siempre a la velocidad máxima permitida para ganar confianza", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué se debe hacer si un vehículo estacionado tiene las ruedas volteadas hacia la calzada en una pendiente descendente hacia la vía?",
    categoria: "general",
    respuestas: [
      { texto: "Es la forma correcta en cualquier situación", correcta: false },
      { texto: "Se recomienda orientarlas hacia el cordón para evitar que ruede hacia la calzada en caso de falla del freno", correcta: true },
      { texto: "No influye en la seguridad del estacionamiento", correcta: false },
      { texto: "Solo aplica a vehículos de carga pesada", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué se debe hacer si se detecta un ruido extraño y persistente en el motor durante la conducción?",
    categoria: "general",
    respuestas: [
      { texto: "Ignorarlo mientras el vehículo siga avanzando", correcta: false },
      { texto: "Revisarlo en un taller lo antes posible para evitar una falla mayor", correcta: true },
      { texto: "Aumentar la velocidad para identificar el origen del ruido", correcta: false },
      { texto: "Subir el volumen de la radio para no escucharlo", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué se debe hacer si se circula por una vía con reductores de velocidad (\"lomos de toro\") no señalizados con anticipación?",
    categoria: "general",
    respuestas: [
      { texto: "Mantener la velocidad habitual sin reducir", correcta: false },
      { texto: "Reducir la velocidad de forma preventiva al aproximarse a zonas donde puedan existir", correcta: true },
      { texto: "Acelerar para minimizar el impacto", correcta: false },
      { texto: "No representa ningún riesgo para el vehículo", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué se debe hacer si el conductor debe tomar una llamada telefónica urgente durante la conducción?",
    categoria: "general",
    respuestas: [
      { texto: "Contestar sosteniendo el teléfono con una mano mientras conduce", correcta: false },
      { texto: "Detenerse en un lugar seguro para contestar o usar un sistema de manos libres", correcta: true },
      { texto: "Reducir la velocidad y contestar sin detenerse", correcta: false },
      { texto: "Pedirle a un pasajero que sostenga el volante", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué se debe hacer respecto a la temperatura del habitáculo antes de dejar a un menor en el vehículo, aunque sea brevemente?",
    categoria: "general",
    respuestas: [
      { texto: "No dejar nunca a un menor solo dentro del vehículo, sin importar la temperatura", correcta: true },
      { texto: "Es seguro si el vehículo queda con el motor encendido", correcta: false },
      { texto: "Es seguro por menos de 5 minutos", correcta: false },
      { texto: "Solo representa riesgo en días de mucho calor", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué se debe hacer si se circula por una calle con estacionamiento permitido en ambos costados y el espacio es reducido?",
    categoria: "general",
    respuestas: [
      { texto: "Aumentar la velocidad para cruzar rápido", correcta: false },
      { texto: "Reducir la velocidad y estar atento a puertas que se abran o peatones", correcta: true },
      { texto: "Tocar la bocina de forma constante", correcta: false },
      { texto: "Circular por la vereda si es necesario", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué se debe hacer si el vehículo delantero circula con las luces de freno encendidas de forma constante sin razón aparente?",
    categoria: "general",
    respuestas: [
      { texto: "Adelantarlo inmediatamente sin precaución", correcta: false },
      { texto: "Mantener distancia prudente, ya que podría indicar una falla en el sistema de frenos", correcta: true },
      { texto: "Tocar la bocina de forma insistente", correcta: false },
      { texto: "Ignorarlo por completo", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué se debe hacer si un vehículo pesado no puede detenerse a tiempo por exceso de carga?",
    categoria: "general",
    respuestas: [
      { texto: "No representa un riesgo si el conductor es experimentado", correcta: false },
      { texto: "Se debe evitar el exceso de carga, ya que aumenta la distancia de frenado", correcta: true },
      { texto: "Solo influye si el vehículo es nuevo", correcta: false },
      { texto: "El peso de la carga no afecta el frenado", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué se debe hacer si se conduce y las condiciones climáticas cambian repentinamente de soleado a lluvia intensa?",
    categoria: "general",
    respuestas: [
      { texto: "Mantener la misma velocidad hasta adaptarse", correcta: false },
      { texto: "Reducir gradualmente la velocidad y aumentar la distancia de seguridad", correcta: true },
      { texto: "Detenerse abruptamente en el lugar donde comienza la lluvia", correcta: false },
      { texto: "Encender las luces de emergencia y continuar a la misma velocidad", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué se debe hacer si se detecta que un neumático está perdiendo aire lentamente antes de un viaje largo?",
    categoria: "general",
    respuestas: [
      { texto: "Iniciar el viaje y revisar al llegar al destino", correcta: false },
      { texto: "Revisar la causa y repararlo o reemplazarlo antes de iniciar el viaje", correcta: true },
      { texto: "Inflar el neumático por encima de lo recomendado para compensar", correcta: false },
      { texto: "Ignorarlo si el viaje es en carretera pavimentada", correcta: false }
    ]
  }
];