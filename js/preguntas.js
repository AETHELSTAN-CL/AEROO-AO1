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
    pregunta: "¿En qué situación puede usar el claxon en ciudad?",
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
  }
];