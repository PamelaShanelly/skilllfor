import type { Course } from '../types/index.ts';

export const COURSES: Course[] = [
  {
    id: 'secretaria',
    title: 'Secretaria Recepcionista y Servicio al Cliente',
    category: 'Oficina',
    description: 'Aprende a gestionar la oficina moderna y brindar un servicio de excelencia.',
    longDescription: 'Este curso técnico te prepara para ser la cara visible de cualquier organización, dominando la comunicación, gestión de documentos y atención al cliente.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
    competencies: ['Gestión de agenda', 'Protocolo empresarial', 'Atención telefónica', 'Redacción técnica'],
    subjects: [
      { name: 'Redacción y Ortografía', credits: 4 },
      { name: 'Relaciones Humanas', credits: 3 },
      { name: 'Manejo de Central Telefónica', credits: 5 }
    ],
    lessons: [
      {
        id: 'l1',
        title: 'Módulo 1: La Secretaria Moderna',
        parts: [
          { 
            id: 'l1p1', 
            title: 'Parte 1: Imagen y Ética', 
            type: 'document', 
            content: 'La imagen profesional es fundamental en la oficina.',
            topics: [
              {
                title: 'Vestimenta Profesional',
                description: `**Introducción:** La imagen de una secretaria es la primera impresión que los clientes y visitantes tienen de la empresa. No se trata solo de moda, sino de comunicar profesionalismo, respeto y confiabilidad desde el primer contacto visual.

**Explicación Detallada:** El código de vestimenta corporativa varía según la industria, pero generalmente se inclina hacia lo "Business Formal" o "Business Casual". Una vestimenta adecuada establece una atmósfera de seriedad y proyecta que estás preparada para manejar responsabilidades importantes. Las telas deben ser de buena calidad y preferiblemente en colores que no distraigan.

**Resumen:** Tu apariencia debe ser el reflejo de la organización y eficiencia que aplicas en tu trabajo diario.

**Puntos Clave:**
*   Usa colores neutros como azul marino, gris, negro o beige.
*   Asegúrate de que la ropa esté siempre limpia y perfectamente planchada.
*   El calzado debe ser cerrado, preferiblemente de tacón medio o bajo para mayor comodidad.
*   Evita accesorios excesivamente grandes o ruidosos.`,
                whatIsItFor: `**Objetivo de Aprendizaje:** Comprender el impacto de la imagen personal en la percepción de los clientes y aprender a seleccionar un guardarropa funcional y profesional.

**Situación Real:** Imagina que un inversionista importante llega a la oficina. Si te ve con ropa deportiva, su primera impresión podría ser de falta de seriedad. Si te ve con un blazer impecable, su confianza en la empresa comienza desde la recepción.`,
                howToDoIt: `**Instrucciones Paso a Paso:**
1.  **Analiza tu entorno:** Observa cómo visten los líderes de tu empresa.
2.  **Prepara tu semana:** Elige tus conjuntos el domingo para evitar improvisaciones.
3.  **Higiene Personal:** Complementa tu ropa con un peinado pulcro y maquillaje natural.

**Tips:** Ten siempre un blazer oscuro en tu oficina; puede transformar un atuendo casual en formal en segundos.

**Errores Comunes:** Usar ropa demasiado ajustada, escotes profundos o colores neón que pueden resultar informales en un entorno de oficina.`,
                image: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&q=80&w=400'
              },
              {
                title: 'Lenguaje Corporal',
                description: `**Introducción:** Sabías que más del 70% de nuestra comunicación es no verbal? En una recepción, tus gestos hablan antes que tu boca. El lenguaje corporal es tu herramienta secreta para hacer que la gente se sienta bienvenida o, por el contrario, rechazada.

**Explicación Detallada:** La postura, el contacto visual y la sonrisa son los pilares. Mantenerse erguida proyecta confianza. El contacto visual demuestra que estás prestando atención y respetas al interlocutor. Una sonrisa moderada rompe el hielo y suaviza situaciones tensas.

**Resumen:** Tu cuerpo debe decir "estoy aquí para ayudarte" incluso antes de que digas "buenos días".

**Puntos Clave:**
*   **Postura Erguida:** Evita encorvarte sobre el escritorio.
*   **Contacto Visual:** Mantén la mirada por 3-5 segundos para mostrar interés.
*   **Gestos Abiertos:** No cruces los brazos, ya que esto crea una barrera defensiva.`,
                whatIsItFor: `**Objetivo de Aprendizaje:** Aprender a utilizar el lenguaje no verbal para transmitir hospitalidad, eficiencia y seguridad de manera instantánea.

**Analogía:** Tu lenguaje corporal es como la música de fondo en una película; si es la correcta, la experiencia es fluida; si es la incorrecta, todo se siente fuera de lugar.`,
                howToDoIt: `**Mini Ejercicio Práctico:**
Frente a un espejo, practica saludar a un "cliente imaginario". Nota la diferencia entre saludar con los hombros caídos vs. saludar con la espalda recta y una sonrisa leve.

**Tips:** Si estás sentada mucho tiempo, asegúrate de que tus pies toquen el suelo para mantener una postura estable y alerta.

**Errores Comunes:** Mirar constantemente el reloj o el celular mientras hablas con alguien; esto comunica que tienes prisa por terminar la conversación.`,
                image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400'
              },
              {
                title: 'Ética y Discreción',
                description: `**Introducción:** En el mundo administrativo, la información es poder, y el manejo ético de esa información es lo que define a una secretaria de alto nivel. La discreción no es solo guardar secretos, es la base de la confianza organizacional.

**Explicación Detallada:** Como secretaria, tendrás acceso a salarios, decisiones de despidos, planes estratégicos y datos personales de clientes. Tu responsabilidad es ser un "cofre blindado". La ética empresarial exige que la información solo fluya por los canales autorizados y con los fines pertinentes. Un desliz de información puede costar contratos millonarios o dañar la reputación de personas.

**Resumen:** La discreción es tu activo profesional más valioso después de tu eficiencia.

**Puntos Clave:**
*   **Confidencialidad:** Lo que se habla en la oficina, se queda en la oficina.
*   **Imparcialidad:** No tomes partido en chismes o conflictos internos.
*   **Integridad:** Haz lo correcto incluso cuando nadie te esté mirando.`,
                whatIsItFor: `**Objetivo de Aprendizaje:** Comprender la importancia vital de la confidencialidad y desarrollar el hábito de la discreción como pilar de la carrera profesional.

**Situación Real:** Escuchas a tu jefe hablar sobre una posible fusión con otra empresa. Si le comentas esto a un compañero en la cafetería, podrías provocar pánico innecesario o incluso problemas legales para la empresa.`,
                howToDoIt: `**Instrucciones Paso a Paso:**
1.  **Identifica datos sensibles:** Todo documento con sellos de "Privado" o conversaciones de puerta cerrada son confidenciales.
2.  **Cierra sesiones:** Nunca dejes tu computadora encendida con correos abiertos si te levantas de tu lugar.
3.  **Técnica de respuesta:** Si alguien te pregunta algo que no debes decir, usa frases diplomáticas como: "Esa es información que aún no estamos autorizados para divulgar".

**Errores Comunes:** Dejar documentos confidenciales sobre el escritorio cuando te vas a almorzar.`,
                image: 'https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&q=80&w=400'
              },
              {
                title: 'Organización del Espacio',
                description: `**Introducción:** Tu escritorio es tu centro de mando. Un espacio caótico proyecta una mente caótica, mientras que un área de trabajo ordenada facilita el flujo de tareas y reduce el estrés.

**Explicación Detallada:** La organización del espacio físico sigue la regla de "un lugar para cada cosa y cada cosa en su lugar". Esto minimiza el tiempo perdido buscando clips, sellos o expedientes importantes. Además, un escritorio limpio da un mensaje de control y profesionalismo a cualquier visitante que se acerque a tu puesto.

**Resumen:** Organizar tu espacio es el primer paso para organizar tu tiempo.

**Puntos Clave:**
*   **Zonificación:** Divide tu escritorio en zonas (Entrada, Acción, Archivo).
*   **Minimización:** Quédate solo con lo que usas a diario.
*   **Digitalización:** Si no necesitas el papel físico, escanéalo y archívalo digitalmente.`,
                whatIsItFor: `**Objetivo de Aprendizaje:** Aprender técnicas de organización física para maximizar la productividad y mejorar la estética del entorno laboral.

**Analogía:** Un escritorio desordenado es como un semáforo con todas las luces encendidas al mismo tiempo; no sabes hacia dónde avanzar.`,
                howToDoIt: `**Instrucciones Paso a Paso:**
1.  **Limpieza Profunda:** Al final de cada día, dedica 5 minutos a despejar tu escritorio.
2.  **Uso de Organizadores:** Utiliza bandejas para separar la correspondencia "Pendiente" de la "Procesada".
3.  **Higiene:** Limpia tu teclado y pantalla semanalmente; son imanes de polvo y bacterias.

**Tips:** Ten siempre un bloc de notas físico cerca del teléfono para apuntar mensajes rápidos sin tener que buscar archivos en la PC.`,
                image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=400'
              },
              {
                title: 'Puntualidad Extrema',
                description: 'Llegar antes para preparar la jornada.',
                whatIsItFor: 'Evitar retrasos en el inicio de la atención.',
                howToDoIt: 'Llegar 15 minutos antes de la hora oficial.',
                image: 'https://images.unsplash.com/photo-1508921234172-b68ed335b3e6?auto=format&fit=crop&q=80&w=400'
              },
              {
                title: 'Trato de Excelencia',
                description: 'Amabilidad constante incluso bajo presión.',
                whatIsItFor: 'Fidelizar al cliente y mejorar el clima laboral.',
                howToDoIt: 'Uso de palabras mágicas: por favor, gracias, con gusto.',
                image: 'https://images.unsplash.com/photo-1556740734-754f161828f0?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'l1p2',
            title: 'Parte 2: Comunicación Efectiva',
            type: 'document',
            content: `**Introducción:** La comunicación es el puente que conecta a la secretaria con el resto de la organización. No se trata solo de hablar, sino de asegurar que el mensaje sea recibido y comprendido exactamente como se planeó.

**Explicación Detallada:** En la oficina, la comunicación fluye en múltiples direcciones: ascendente (hacia los jefes), descendente (hacia los subordinados) y horizontal (entre colegas). Ser efectiva implica dominar la escucha activa, la asertividad y la empatía. Debes ser capaz de transmitir noticias difíciles con diplomacia y de dar instrucciones claras sin ambigüedades.

**Resumen:** Tu éxito profesional depende en un 20% de tus habilidades técnicas y un 80% de tus habilidades de comunicación.

**Puntos Clave:**
*   **Escucha Activa:** No interrumpas; asiente y toma notas para demostrar interés.
*   **Asertividad:** Di lo que piensas de forma honesta pero sin herir sensibilidades.
*   **Claridad:** Usa palabras sencillas y evita tecnicismos innecesarios.`,
            topics: [
              {
                title: 'Atención Telefónica',
                description: `**El Arte de la Voz:** Al teléfono, tu voz es la única herramienta para transmitir profesionalismo. Sin el apoyo del lenguaje corporal, el tono, la modulación y la velocidad cobran una importancia vital.

**Explicación:** Una buena atención telefónica comienza con un saludo estandarizado. Debes sonreír mientras hablas (sí, la sonrisa se "escucha") y tener siempre a mano papel y lápiz para evitar pedirle al interlocutor que repita la información.`,
                whatIsItFor: `**Objetivo de Aprendizaje:** Desarrollar un protocolo de atención telefónica que proyecte eficiencia y calidez desde el primer timbrazo.

**Situación Real:** Un cliente llama muy molesto por un retraso. Si contestas con un tono defensivo, el conflicto escalará. Si contestas con calma: "Comprendo su malestar, permítame investigar qué sucedió", el cliente se sentirá escuchado.`,
                howToDoIt: `**Instrucciones Paso a Paso:**
1.  **Responde rápido:** No dejes que el teléfono suene más de 3 veces.
2.  **Identificación:** "Buenos días, [Empresa], le habla [Tu Nombre], ¿en qué puedo ayudarle?".
3.  **Toma de Mensajes:** Anota nombre, empresa, motivo de la llamada y número de contacto.
4.  **Transferencia:** Antes de pasar la llamada, informa al destinatario quién llama y por qué.`,
                image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&q=80&w=400'
              },
              {
                title: 'Redacción de Correos',
                description: `**La Huella Digital:** Un correo electrónico bien redactado es un documento legal y profesional que permanece en el tiempo. La estructura debe ser impecable para evitar malentendidos.

**Explicación:** Todo correo debe tener un "Asunto" (Subject) que resuma el contenido en 5 palabras. El saludo debe ser acorde a la relación con el destinatario. El cuerpo debe ir al grano, usando párrafos cortos o listas si hay múltiples puntos que tratar.`,
                whatIsItFor: `**Objetivo de Aprendizaje:** Aprender a redactar correos electrónicos ejecutivos que sean claros, concisos y profesionales.`,
                howToDoIt: `**Tips de Redacción:**
*   Revisa la ortografía dos veces antes de enviar.
*   No uses mayúsculas sostenidas (se interpreta como gritar).
*   Si el mensaje es muy largo, considera una llamada en su lugar.

**Errores Comunes:** Olvidar adjuntar los archivos mencionados o enviar el correo sin un asunto claro.`,
                image: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'l1p3',
            title: 'Parte 3: Gestión Documental',
            type: 'document',
            content: `**Introducción:** Una secretaria es la guardiana de la memoria de la empresa. La gestión documental es el sistema que permite que la información vital fluya de manera segura y ordenada.

**Explicación Detallada:** Gestionar documentos no es solo guardar papeles en carpetas. Es un proceso que incluye la recepción, clasificación, registro, archivo y, eventualmente, la eliminación o transferencia histórica de documentos. En la era digital, esto se extiende a la gestión de archivos en la nube, correos electrónicos y bases de datos, manteniendo siempre la integridad y seguridad de la información.

**Resumen:** Un buen sistema de archivo es aquel que permite encontrar cualquier documento en menos de 1 minuto.

**Puntos Clave:**
*   **Clasificación:** Usa criterios lógicos (Alfabético, Cronológico o Temático).
*   **Etiquetado:** Todo folder y archivo digital debe tener un nombre claro y estandarizado.
*   **Seguridad:** Controla quién tiene acceso a la información sensible.`,
            topics: [
              {
                title: 'Archivística Profesional',
                description: `**Orden y Método:** El archivo es el corazón de la oficina. Se divide en Archivo de Gestión (lo que usas hoy), Archivo Central (lo que usas poco) y Archivo Histórico (leyes o estatutos).`,
                whatIsItFor: `**Objetivo de Aprendizaje:** Dominar las técnicas de archivo físico y digital para optimizar el tiempo de respuesta ante requerimientos de información.

**Analogía:** Un archivo desordenado es como un cementerio de papeles; sabes que algo está ahí, pero no tienes idea de dónde buscarlo ni cómo revivirlo cuando lo necesitas.`,
                howToDoIt: `**Instrucciones Paso a Paso:**
1.  **Purga:** Elimina duplicados y borradores innecesarios.
2.  **Codificación:** Asigna un código o color a cada departamento o tipo de documento.
3.  **Digitalización:** Escanea documentos críticos y guárdalos con el formato: AAAA-MM-DD_NombreDocumento.
4.  **Mantenimiento:** Dedica 15 minutos al final del viernes para archivar lo que quedó suelto durante la semana.

**Tips:** Nunca archives el original de un documento sin tener una copia digital de respaldo.`,
                image: 'https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'l1p4',
            title: 'Parte 4: Relaciones Humanas',
            type: 'document',
            content: `**Introducción:** Detrás de cada cliente, proveedor o directivo, hay un ser humano. Las relaciones humanas son el "aceite" que hace que el motor de la empresa funcione sin fricciones.

**Explicación Detallada:** Como secretaria, eres el nexo entre personas. Cultivar buenas relaciones implica tratar a todos con el mismo respeto, desde el personal de limpieza hasta el Director General. La inteligencia emocional es clave aquí: reconocer tus propias emociones y las de los demás para gestionar las interacciones de manera positiva y productiva.

**Resumen:** En el mundo de los negocios, la gente hace negocios con gente que le agrada y en quien confía.

**Puntos Clave:**
*   **Empatía:** Trata de entender el punto de vista del otro antes de juzgar.
*   **Cordialidad:** Un saludo genuino cambia el clima de cualquier oficina.
*   **Resolución de Conflictos:** Busca soluciones "ganar-ganar" en lugar de buscar culpables.`,
            topics: [
              {
                title: 'Trabajo en Equipo y Servicio',
                description: `**Sinergia Organizacional:** No eres una isla. Tu trabajo depende del de otros y viceversa. Ser una jugadora de equipo significa estar dispuesta a ayudar cuando alguien está saturado y pedir ayuda antes de que un error ocurra.`,
                whatIsItFor: `**Objetivo de Aprendizaje:** Desarrollar habilidades interpersonales para fomentar un ambiente laboral positivo y de alta colaboración.

**Situación Real:** Tienes mucho trabajo, pero ves que el mensajero está confundido con una dirección nueva. Si le dedicas 1 minuto a explicarle, evitas que él pierda tiempo y que el cliente reciba tarde su paquete.`,
                howToDoIt: `**Instrucciones de Mejora Personal:**
1.  **Conoce a tu equipo:** Aprende los nombres y funciones de tus compañeros.
2.  **Feedback Positivo:** Reconoce el buen trabajo de los demás públicamente.
3.  **Comunicación Abierta:** Si algo te molesta, háblalo en privado y con respeto.

**Errores Comunes:** Participar en chismes de oficina ("radio pasillo"), lo cual destruye la confianza y tu reputación profesional.`,
                image: 'https://images.unsplash.com/photo-1522071823991-b9671f302420?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'l1p5',
            title: 'Parte 5: Gestión de Agenda y Tiempo',
            type: 'document',
            content: `**Introducción:** El tiempo es el único recurso que no se puede recuperar. Una secretaria que domina su agenda y la de su jefe es el motor de productividad de la empresa.

**Explicación Detallada:** La gestión de agenda implica priorizar tareas usando la **Matriz de Eisenhower** (Urgente vs. Importante). Debes aprender a decir "no" con diplomacia, a evitar las "reuniones que pudieron ser un correo" y a agrupar tareas similares para mantener el flujo de trabajo (técnica de lotes). El uso de herramientas digitales como Google Calendar o Outlook es obligatorio, permitiendo sincronizar citas, recordatorios y zonas horarias de manera automática.

**Resumen:** Gestionar el tiempo no es hacer mucho en poco tiempo, sino hacer lo que realmente importa.

**Puntos Clave:**
*   **Buffer Time:** Deja siempre 15 minutos entre reuniones.
*   **Priorización:** Resuelve lo difícil primero cuando tu energía es alta.
*   **Seguimiento:** Revisa la agenda del día siguiente antes de irte a casa.`,
            topics: [
              {
                title: 'Planificación de Citas',
                description: `**Logística de Agenda:** Confirmar citas 24 horas antes, preparar los materiales necesarios para cada reunión y asegurar que no haya solapamientos de horario.`,
                whatIsItFor: `**Objetivo de Aprendizaje:** Aprender a organizar flujos de trabajo eficientes y gestionar calendarios corporativos de alta complejidad.`,
                howToDoIt: `**Técnica de Bloques:**
1.  **Revisión:** Inicia el día revisando los pendientes.
2.  **Bloqueo:** Reserva espacios para tareas que requieran concentración total (Deep Work).
3.  **Confirmación:** Llama o escribe para asegurar la asistencia de los participantes.`,
                image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'l1t1',
            title: 'Actividad Práctica: Simulación de Recepción',
            type: 'task',
            content: `**Objetivo:** Aplicar los conocimientos de imagen, lenguaje corporal y atención telefónica en un escenario real.

**Instrucciones de la Actividad:**
1.  **Preparación del Escenario:** Busca un escritorio o mesa limpia. Coloca un teléfono (puede ser tu celular), una libreta y un lapicero. Asegúrate de tener una postura erguida.
2.  **Vestimenta:** Utiliza una prenda profesional (blazer o camisa formal) para realizar la práctica.
3.  **La Simulación:**
    *   **Paso 1:** Saluda a un cliente imaginario que entra por la puerta. Usa contacto visual y una sonrisa. 
        *   *Guion sugerido:* "Buenos días, bienvenido a Corporativo Global, mi nombre es [Tu Nombre], ¿en qué puedo asistirle hoy?"
    *   **Paso 2:** Mientras atiendes al cliente, simula que suena el teléfono. Pide disculpas al cliente presencial: "Deme un segundo, por favor".
    *   **Paso 3:** Contesta el teléfono profesionalmente: "Buenas tardes, Corporativo Global, le habla [Tu Nombre], ¿con quién tengo el placer de hablar?"
    *   **Paso 4:** Toma nota de un mensaje rápido en tu libreta y despídete: "Con gusto le paso el mensaje al Lic. Pérez. Que tenga una excelente tarde".
4.  **Entrega:** Escribe un breve reporte sobre cómo te sentiste realizando la simulación y qué parte del protocolo te resultó más natural o difícil.`,
            topics: []
          }
        ],
        lessonExam: [
          { id: 'l1q1', type: 'multiple', question: '¿Cuál es el pilar de la ética secretarial?', options: ['Velocidad', 'Discreción', 'Fuerza', 'Belleza'], correctAnswer: 1 },
          { id: 'l1q2', type: 'multiple', question: '¿Cómo debe ser la imagen profesional?', options: ['Informal', 'Llamativa', 'Pulcra y adecuada al entorno', 'Deportiva'], correctAnswer: 2 },
          { id: 'l1q3', type: 'multiple', question: '¿Qué es la comunicación asertiva?', options: ['Gritar fuerte', 'Expresar ideas de forma clara y respetuosa', 'No hablar', 'Estar siempre de acuerdo'], correctAnswer: 1 },
          { id: 'l1q4', type: 'multiple', question: '¿Para qué sirve la agenda?', options: ['Para dibujar', 'Organizar el tiempo y compromisos', 'Para notas personales', 'No es necesaria'], correctAnswer: 1 },
          { id: 'l1q5', type: 'multiple', question: '¿Cómo se contesta un teléfono empresarial?', options: ['¿Aló?', 'Nombre de la empresa, saludo y nombre del secretario', '¿Dígame?', 'Silencio'], correctAnswer: 1 },
          { id: 'l1q6', type: 'multiple', question: '¿Qué es el protocolo?', options: ['Un virus', 'Conjunto de reglas de cortesía y formalidad', 'Una medicina', 'Un tipo de papel'], correctAnswer: 1 },
          { id: 'l1q7', type: 'multiple', question: '¿Para qué sirve el archivo?', options: ['Guardar basura', 'Localizar documentos con rapidez y orden', 'Para que no se vea', 'Para reciclar'], correctAnswer: 1 },
          { id: 'l1q8', type: 'multiple', question: '¿Qué es la redacción técnica?', options: ['Escribir poesía', 'Escritura formal con fines profesionales', 'Escribir mensajes de texto', 'Copiar y pegar'], correctAnswer: 1 },
          { id: 'l1q9', type: 'multiple', question: '¿Cuál es la regla de oro del servicio al cliente?', options: ['El cliente nunca tiene la razón', 'Tratar a los demás como te gustaría ser tratado', 'Cobrar rápido', 'Hacerlos esperar'], correctAnswer: 1 },
          { id: 'l1q10', type: 'multiple', question: 'La secretaria moderna debe ser:', options: ['Rápida solamente', 'Proactiva, organizada y comunicativa', 'Silenciosa', 'Solo digital'], correctAnswer: 1 }
        ]
      },
      {
        id: 'l2',
        title: 'Módulo 2: Gestión de Oficina y Tecnología',
        parts: [
          {
            id: 'l2p1',
            title: 'Manejo de Tecnología',
            type: 'video',
            content: 'Uso de herramientas digitales en la oficina.',
            topics: [
              { title: 'Software de Gestión', description: 'Uso de CRM y software de oficina.', whatIsItFor: 'Optimizar el seguimiento de clientes.', howToDoIt: 'Ingresar datos de forma precisa y constante.', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400' }
            ]
          },
          {
            id: 'l2p2',
            title: 'Organización de Eventos',
            type: 'document',
            content: 'Planificación de reuniones y eventos corporativos.',
            topics: [
              { title: 'Logística de Reuniones', description: 'Preparación de salas y materiales.', whatIsItFor: 'Asegurar el éxito de los encuentros empresariales.', howToDoIt: 'Verificar equipos y Coffee Break con antelación.', image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=400' }
            ]
          }
        ],
        lessonExam: [
          { id: 'l2q1', type: 'multiple', question: '¿Qué es un CRM?', options: ['Una marca de café', 'Gestor de relaciones con clientes', 'Un tipo de silla', 'Un antivirus'], correctAnswer: 1 },
          { id: 'l2q2', type: 'multiple', question: '¿Qué se debe verificar antes de una reunión?', options: ['El clima solamente', 'Equipos audiovisuales y materiales', 'La televisión de la casa', 'Nada'], correctAnswer: 1 },
          { id: 'l2q3', type: 'multiple', question: '¿Qué es la minuta de una reunión?', options: ['Un postre', 'Registro escrito de lo tratado y acordado', 'Un descanso corto', 'Un tipo de reloj'], correctAnswer: 1 },
          { id: 'l2q4', type: 'multiple', question: '¿Cuál es el software más común para hojas de cálculo?', options: ['Word', 'Excel', 'PowerPoint', 'Photoshop'], correctAnswer: 1 },
          { id: 'l2q5', type: 'multiple', question: '¿Qué significa "proactivo" en la oficina?', options: ['Esperar órdenes', 'Tomar la iniciativa para resolver problemas', 'Hablar mucho', 'Llegar tarde'], correctAnswer: 1 },
          { id: 'l2q6', type: 'multiple', question: '¿Para qué sirve el correo electrónico institucional?', options: ['Uso personal', 'Comunicación oficial de la empresa', 'Jugar', 'No se usa'], correctAnswer: 1 },
          { id: 'l2q7', type: 'multiple', question: '¿Qué es la organización bento en la agenda?', options: ['Un tipo de comida', 'Bloques de tiempo específicos para tareas', 'No existe', 'Una marca de reloj'], correctAnswer: 1 },
          { id: 'l2q8', type: 'multiple', question: '¿Qué herramienta se usa para presentaciones visuales?', options: ['Excel', 'PowerPoint / Slides', 'Calculator', 'Paint'], correctAnswer: 1 },
          { id: 'l2q9', type: 'multiple', question: '¿Cómo se deben guardar las contraseñas?', options: ['En un post-it', 'En un gestor de contraseñas seguro', 'En el escritorio', 'Decírselas a todos'], correctAnswer: 1 },
          { id: 'l2q10', type: 'multiple', question: '¿Qué es el respaldo de información (Backup)?', options: ['Borrar todo', 'Copia de seguridad de archivos importantes', 'Un tipo de silla', 'Un deporte'], correctAnswer: 1 }
        ]
      },
      {
        id: 'l3',
        title: 'Módulo 3: Archivo y Correspondencia',
        parts: [
          {
            id: 'l3p1',
            title: 'Sistemas de Archivo',
            type: 'document',
            content: 'Métodos para organizar grandes volúmenes de información.',
            topics: [
              { title: 'Archivo Digital', description: 'Organización en la nube y servidores.', whatIsItFor: 'Seguridad y acceso rápido a los datos.', howToDoIt: 'Uso de nomenclatura estándar para archivos.', image: 'https://images.unsplash.com/photo-1544391682-171efec2374b?auto=format&fit=crop&q=80&w=400' }
            ]
          }
        ],
        lessonExam: [
          { id: 'l3q1', type: 'multiple', question: '¿Qué es un sistema de archivo alfabético?', options: ['Por fecha', 'Por nombre de persona o empresa', 'Por color', 'Por peso'], correctAnswer: 1 },
          { id: 'l3q2', type: 'multiple', question: '¿Qué es un sistema de archivo numérico?', options: ['Por letras', 'Por códigos o números asignados', 'No usa números', 'Por tamaño'], correctAnswer: 1 },
          { id: 'l3q3', type: 'multiple', question: '¿Qué significa archivar?', options: ['Tirar papeles', 'Guardar documentos de forma ordenada y sistemática', 'Esconder cosas', 'Vender papel'], correctAnswer: 1 },
          { id: 'l3q4', type: 'multiple', question: '¿Qué es la correspondencia externa?', options: ['Cartas entre departamentos', 'Cartas recibidas de fuera de la empresa', 'Correos personales', 'Revistas de moda'], correctAnswer: 1 },
          { id: 'l3q5', type: 'multiple', question: '¿Qué es una guía en un archivo físico?', options: ['Un mapa', 'Cartón que separa secciones del archivo', 'Una persona', 'Un libro de cocina'], correctAnswer: 1 },
          { id: 'l3q6', type: 'multiple', question: '¿Cuál es el primer paso al recibir correspondencia?', options: ['Leerla toda', 'Registrarla en el libro de entrada', 'Tirarla', 'Abrirla sin permiso'], correctAnswer: 1 },
          { id: 'l3q7', type: 'multiple', question: '¿Qué es el expurgo de documentos?', options: ['Limpiar el polvo', 'Eliminar documentos que ya no son útiles ni obligatorios', 'Comprar más papel', 'Cambiar el color del archivo'], correctAnswer: 1 },
          { id: 'l3q8', type: 'multiple', question: '¿Qué es el ciclo vital de un documento?', options: ['Que tiene vida propia', 'Etapas desde su creación hasta su eliminación o archivo histórico', 'Un tipo de planta', 'Que nunca se tira'], correctAnswer: 1 },
          { id: 'l3q9', type: 'multiple', question: '¿Para qué sirve el sello de recibido?', options: ['Para decorar', 'Constancia de fecha y hora de recepción', 'Para jugar', 'No sirve de nada'], correctAnswer: 1 },
          { id: 'l3q10', type: 'multiple', question: '¿Qué es la confidencialidad?', options: ['Hablar mucho', 'Protección de datos sensibles contra accesos no autorizados', 'Publicar todo', 'Un tipo de letra'], correctAnswer: 1 }
        ]
      },
      {
        id: 'l4',
        title: 'Módulo 4: Protocolo y Etiqueta',
        parts: [
          {
            id: 'l4p1',
            title: 'Protocolo en Eventos',
            type: 'video',
            content: 'Reglas de cortesía en eventos corporativos de alto nivel.',
            topics: [
              { title: 'La Precedencia', description: 'Orden de jerarquía en actos oficiales.', whatIsItFor: 'Respetar el cargo y la autoridad.', howToDoIt: 'Ubicar a los invitados según su rango.', image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=400' }
            ]
          }
        ],
        lessonExam: [
          { id: 'l4q1', type: 'multiple', question: '¿Qué es la etiqueta?', options: ['Un precio', 'Normas de comportamiento en sociedad', 'Un tipo de zapato', 'Una marca'], correctAnswer: 1 },
          { id: 'l4q2', type: 'multiple', question: '¿Qué es la precedencia?', options: ['Llegar tarde', 'Orden jerárquico en actos oficiales', 'Un tipo de comida', 'La velocidad'], correctAnswer: 1 },
          { id: 'l4q3', type: 'multiple', question: '¿Cómo se debe saludar en el entorno empresarial?', options: ['Un beso en la mejilla siempre', 'Apretón de manos firme y contacto visual', 'Ignorar a las personas', 'Gritar'], correctAnswer: 1 },
          { id: 'l4q4', type: 'multiple', question: '¿Qué es el "dress code"?', options: ['Código de programación', 'Código de vestimenta requerido para un evento o empresa', 'Un tipo de perfume', 'Una marca de ropa'], correctAnswer: 1 },
          { id: 'l4q5', type: 'multiple', question: '¿Cuál es la puntualidad en el protocolo?', options: ['Llegar tarde es elegante', 'Estar presente 5-10 minutos antes de la hora', 'Llegar 2 horas antes', 'No ir'], correctAnswer: 1 },
          { id: 'l4q6', type: 'multiple', question: '¿Qué es el protocolo de mesa?', options: ['Comer con las manos', 'Reglas para el uso de cubiertos y comportamiento en comidas oficiales', 'Un tipo de madera', 'Poner los pies en la mesa'], correctAnswer: 1 },
          { id: 'l4q7', type: 'multiple', question: '¿Para qué sirve la tarjeta de presentación?', options: ['Para jugar cartas', 'Para intercambiar datos de contacto profesionalmente', 'Para anotar la lista de compras', 'No se usa'], correctAnswer: 1 },
          { id: 'l4q8', type: 'multiple', question: '¿Qué es la cortesía telefónica?', options: ['Colgar rápido', 'Tono amable, escucha activa y agradecimiento', 'Poner música fuerte', 'Gritar al cliente'], correctAnswer: 1 },
          { id: 'l4q9', type: 'multiple', question: '¿Cómo se maneja a una persona VIP?', options: ['Como a cualquiera', 'Con especial atención al protocolo y seguridad', 'Ignorarla', 'Pedirle autógrafo'], correctAnswer: 1 },
          { id: 'l4q10', type: 'multiple', question: 'El lenguaje no verbal incluye:', options: ['Solo las palabras', 'Gestos, postura y tono de voz', 'Solo correos', 'Nada'], correctAnswer: 1 }
        ]
      },
      {
        id: 'l5',
        title: 'Módulo 5: Finanzas y Contabilidad Básica',
        parts: [
          {
            id: 'l5p1',
            title: 'Manejo de Caja Chica',
            type: 'document',
            content: 'Registro y control de gastos menores en la oficina.',
            topics: [
              { title: 'El Libro de Caja', description: 'Registro de entradas y salidas de dinero.', whatIsItFor: 'Mantener la transparencia financiera.', howToDoIt: 'Anotar cada gasto con su respectivo comprobante.', image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=400' }
            ]
          }
        ],
        lessonExam: [
          { id: 'l5q1', type: 'multiple', question: '¿Para qué sirve la caja chica?', options: ['Para pagar sueldos', 'Para gastos menores e imprevistos', 'Para guardar joyas', 'No tiene utilidad'], correctAnswer: 1 },
          { id: 'l5q2', type: 'multiple', question: '¿Qué es un recibo?', options: ['Un tipo de papel', 'Documento que comprueba un pago o entrega', 'Una carta de amor', 'Un dibujo'], correctAnswer: 1 },
          { id: 'l5q3', type: 'multiple', question: '¿Qué significa egreso?', options: ['Dinero que entra', 'Dinero que sale', 'Un tipo de flor', 'Un examen'], correctAnswer: 1 },
          { id: 'l5q4', type: 'multiple', question: '¿Qué es la conciliación bancaria?', options: ['Pelearse con el banco', 'Comparar los registros propios con el estado de cuenta bancario', 'Un tipo de préstamo', 'No existe'], correctAnswer: 1 },
          { id: 'l5q5', type: 'multiple', question: '¿Qué es el IVA?', options: ['Un tipo de planta', 'Impuesto al Valor Agregado', 'Una marca de agua', 'Un viaje'], correctAnswer: 1 },
          { id: 'l5q6', type: 'multiple', question: '¿Para qué sirve el presupuesto?', options: ['Para gastar sin control', 'Para planificar y controlar los gastos futuros', 'Para hacer dibujos', 'Para nada'], correctAnswer: 1 },
          { id: 'l5q7', type: 'multiple', question: '¿Qué es un activo?', options: ['Alguien que corre mucho', 'Bienes y derechos que posee la empresa', 'Una deuda', 'Un tipo de empleado'], correctAnswer: 1 },
          { id: 'l5q8', type: 'multiple', question: '¿Qué es un pasivo?', options: ['Alguien que duerme', 'Deudas y obligaciones de la empresa', 'Un tipo de mueble', 'Un regalo'], correctAnswer: 1 },
          { id: 'l5q9', type: 'multiple', question: '¿Qué es el patrimonio?', options: ['Pueblo natal', 'Activos menos pasivos de una entidad', 'Un tipo de padre', 'Casas viejas'], correctAnswer: 1 },
          { id: 'l5q10', type: 'multiple', question: '¿Cuál es la importancia de la transparencia contable?', options: ['Para que se vea bonito', 'Para evitar fraudes y conocer la realidad financiera', 'Para gastar más', 'No es importante'], correctAnswer: 1 }
        ]
      }
    ],
    finalExam: [
      { id: 'fq1', type: 'multiple', question: '¿Qué es la netiqueta?', options: ['Una marca de ropa', 'Normas de cortesía en internet', 'Un software', 'Un virus'], correctAnswer: 1 },
      { id: 'fq2', type: 'multiple', question: '¿Qué es un memorándum?', options: ['Un libro', 'Comunicación interna breve y formal', 'Un correo personal', 'Un dibujo'], correctAnswer: 1 },
      { id: 'fq3', type: 'multiple', question: '¿Para qué sirve el organigrama?', options: ['Para decorar', 'Representar la estructura de la empresa', 'Para ver fotos', 'Para las ventas'], correctAnswer: 1 },
      { id: 'fq4', type: 'multiple', question: '¿Qué es el trabajo bajo presión?', options: ['Estar estresado siempre', 'Mantener la eficiencia en situaciones críticas', 'No trabajar', 'Quejarse'], correctAnswer: 1 },
      { id: 'fq5', type: 'multiple', question: '¿Cuál es una herramienta de gestión?', options: ['TikTok', 'Microsoft Outlook', 'Instagram', 'Netflix'], correctAnswer: 1 },
      { id: 'fq6', type: 'multiple', question: '¿Qué es la confidencialidad?', options: ['Contar todo', 'Guardar información sensible del negocio', 'No hablar con nadie', 'Mentir'], correctAnswer: 1 },
      { id: 'fq7', type: 'multiple', question: 'Propósito de una reunión:', options: ['Perder tiempo', 'Tomar decisiones y coordinar tareas', 'Comer', 'Pelear'], correctAnswer: 1 },
      { id: 'fq8', type: 'multiple', question: '¿Qué es el feedback?', options: ['Un ruido', 'Retroalimentación sobre el desempeño', 'Un tipo de café', 'Comprar algo'], correctAnswer: 1 },
      { id: 'fq9', type: 'multiple', question: 'Habilidad blanda esencial:', options: ['Saber programar', 'Empatía y escucha activa', 'Fuerza física', 'Velocidad de escritura'], correctAnswer: 1 },
      { id: 'fq10', type: 'multiple', question: 'Meta final del secretario:', options: ['Irse temprano', 'Facilitar la gestión administrativa con excelencia', 'Que no lo llamen', 'Solo usar la PC'], correctAnswer: 1 }
    ]
  },
  {
    id: 'una-as',
    title: 'Uñas Acrílicas',
    category: 'Belleza',
    description: 'Domina las técnicas más avanzadas de diseño y aplicación de uñas.',
    longDescription: 'Conviértete en una profesional del arte en uñas con técnicas de vanguardia de aplicación de acrílico y diseño.',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=800',
    competencies: ['Aplicación de acrílico', 'Diseño de mano alzada', 'Higiene y bioseguridad'],
    subjects: [
      { name: 'Bioseguridad', credits: 3 },
      { name: 'Estructura de la Uña', credits: 4 },
      { name: 'Técnicas de Aplicación', credits: 5 }
    ],
    lessons: [
      {
        id: 'l1',
        title: 'Lección 1: Fundamentos y Bioseguridad',
        parts: [
          { 
            id: 'l1p1', 
            title: 'Anatomía de la Uña: La Base del Conocimiento', 
            type: 'document', 
            content: `**Introducción:** La uña no es simplemente una superficie para decorar; es un apéndice de la piel con una estructura biológica compleja. Para un técnico profesional, conocer la anatomía es vital para garantizar un servicio seguro y duradero.

**Explicación Detallada:** La uña (lámina ungueal) está compuesta principalmente por queratina dura. Reposa sobre el lecho ungueal, una zona rica en vasos sanguíneos y terminaciones nerviosas. Las partes principales incluyen la Matriz (donde nace), la Cutícula (barrera protectora), el Hiponiquio (debajo del borde libre) y el Eponiquio. Cada parte cumple una función protectora o de crecimiento.

**Resumen:** Una aplicación de acrílico exitosa comienza con el respeto y cuidado de la anatomía natural de la uña.

**Puntos Clave:**
*   **Lámina Ungueal:** Es el cuerpo visible de la uña.
*   **Lecho Ungueal:** Sostiene la lámina y le da su color rosado.
*   **Lúnula:** La media luna blanca, parte visible de la matriz.
*   **Borde Libre:** La extensión que sobresale del dedo.`,
            topics: [
              {
                title: 'La Matriz y el Crecimiento',
                description: `**La Fábrica de la Uña:** La matriz es la zona donde se generan las células de la uña. Es extremadamente sensible; cualquier presión excesiva o trauma en esta área puede causar deformidades permanentes en la placa ungueal.`,
                whatIsItFor: `**Objetivo de Aprendizaje:** Comprender la fragilidad de la matriz para realizar preparaciones de uña seguras que no afecten el crecimiento natural.`,
                howToDoIt: `**Instrucciones de Trabajo:**
1.  **Limado Suave:** Nunca uses limas de grano grueso cerca de la zona de la lúnula.
2.  **Preparación Química:** Asegúrate de que el deshidratador no cause irritación en la piel circundante.
3.  **Higiene:** Esteriliza siempre tus empujadores de cutícula para evitar infecciones en la raíz.`,
                image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'l1p2',
            title: 'Bioseguridad: Protocolos de Salud',
            type: 'document',
            content: `**Introducción:** La bioseguridad en el salón de uñas no es una opción, es una responsabilidad legal y ética. Protege tanto a la técnica como a la clienta de infecciones cruzadas y enfermedades.

**Explicación Detallada:** El protocolo implica tres niveles: Limpieza (lavado con agua y jabón), Desinfección (uso de alcohol al 70% o químicos específicos) y Esterilización (uso de autoclave o soluciones químicas de alto nivel para herramientas metálicas). El uso de equipo de protección personal (EPP) como guantes de nitrilo y mascarilla es indispensable para evitar el contacto con químicos y el polvo de limado.

**Resumen:** Tu estación de trabajo debe ser un entorno estéril y seguro.`,
            topics: [
              {
                title: 'Esterilización del Instrumental',
                description: `**Eliminación de Microorganismos:** Todas las herramientas de metal deben pasar por un proceso de inmersión en desinfectante de grado quirúrgico antes de ser usadas en una nueva clienta.`,
                whatIsItFor: `**Objetivo:** Prevenir la transmisión de bacterias, hongos y virus (como la hepatitis) entre servicios.`,
                howToDoIt: `**Checklist de Bioseguridad:**
1.  **Lavado:** Cepilla las herramientas con agua jabonosa.
2.  **Inmersión:** Sumerge en glutaraldehído o similar por el tiempo indicado.
3.  **Secado:** Seca con toallas descartables y guarda en bolsas estériles.

**Tips:** Cambia el sanitizante de manos frente a la clienta para generar confianza.`,
                image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'l1p3',
            title: 'Materiales y Herramientas: Tu Kit Profesional',
            type: 'document',
            content: `**Introducción:** El éxito de una aplicación reside en un 50% en tu técnica y un 50% en la calidad de tus materiales. Conocer cada componente de tu kit te permitirá solucionar problemas sobre la marcha.

**Explicación Detallada:** El sistema de acrílico se compone de dos partes: el Monómero (líquido) y el Polímero (polvo). Al mezclarse, inician una reacción química de polimerización. Otras herramientas vitales incluyen el pincel Kolinsky (pelo natural), limas de diferentes grosores (80, 100, 150, 180), y productos de preparación como el PH Bond (deshidratador) y el Primer (adherente).

**Resumen:** No ahorres en calidad; los materiales premium evitan levantamientos y alergias.`,
            topics: [
              {
                title: 'El Pincel Kolinsky',
                description: `**La Extensión de tu Mano:** El pincel de pelo de Marta Kolinsky es el estándar de oro. Sus cerdas naturales retienen la cantidad justa de monómero y permiten manipular la perla de acrílico con suavidad.`,
                whatIsItFor: `**Objetivo:** Aprender el cuidado y mantenimiento del pincel para prolongar su vida útil y mejorar la precisión del esculpido.`,
                howToDoIt: `**Mantenimiento:** Nunca limpies tu pincel con acetona; usa siempre monómero limpio y guárdalo siempre horizontalmente o con la punta hacia abajo.`,
                image: 'https://images.unsplash.com/photo-1616165415172-f7035ce62464?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'l1p4',
            title: 'Preparación de la Uña Natural',
            type: 'document',
            content: `**Introducción:** El paso más importante para evitar el "lifting" (levantamiento prematuro) es una preparación química y mecánica impecable de la uña natural.

**Explicación Detallada:** La preparación consiste en tres etapas: 1) Remoción de cutícula y tejido muerto de la placa. 2) Apertura de canales de adherencia (despulido) con una lima de grano suave (180/240). 3) Deshidratación y aplicación de adherentes. Si estos pasos se saltan, el acrílico no podrá "anclarse" a la queratina y se despegará en pocos días.

**Resumen:** Una uña bien preparada es la garantía de que el servicio durará 21 días.`,
            topics: [
              {
                title: 'Canales de Adherencia',
                description: `**Microporosidad:** Al limar suavemente la superficie, creamos poros diminutos donde el acrílico se "sujeta". No se trata de desgastar la uña, solo de quitar el brillo natural (aceite).`,
                whatIsItFor: `**Objetivo de Aprendizaje:** Lograr la porosidad necesaria sin dañar las capas superficiales de la uña natural.`,
                howToDoIt: `**Instrucciones:** Lima siempre en una sola dirección, de arriba hacia abajo, evitando movimientos de vaivén que generen calor.`,
                image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'l1p5',
            title: 'Química del Acrílico: Polimerización',
            type: 'document',
            content: `**Introducción:** Entender por qué el acrílico se endurece te permitirá manejar mejor los tiempos de aplicación según la temperatura y humedad del ambiente.

**Explicación Detallada:** Cuando el monómero toca el polímero, se activan los iniciadores que crean cadenas moleculares largas. Este proceso genera una ligera sensación de calor (reacción exotérmica). El tiempo de secado depende de la marca, pero generalmente tienes entre 60 y 120 segundos para moldear antes de que el material sea demasiado rígido para limar.

**Resumen:** Eres una química aplicada. El control de la perla es control sobre la materia.`,
            topics: [
              {
                title: 'Consistencia de la Perla',
                description: `**La Mezcla Perfecta:** Una perla muy húmeda (mucho monómero) se escurre y causa quemaduras químicas; una muy seca (mucho polvo) se cuartea y no se adhiere.`,
                whatIsItFor: `**Objetivo:** Dominar el "balance de perla" para una aplicación limpia que requiera poco limado final.`,
                howToDoIt: `**Ejercicio:** Practica tomar perlas pequeñas, medianas y grandes en una hoja de práctica hasta que logres una superficie lisa y brillante instantáneamente.`,
                image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=400'
              }
            ]
          }
        ],
        lessonExam: [
          { id: 'l1q1', type: 'multiple', question: '¿Dónde nace la uña?', options: ['Lúnula', 'Matriz', 'Hiponiquio', 'Eponiquio'], correctAnswer: 1 },
          { id: 'l1q2', type: 'multiple', question: '¿Cuál es la función de la cutícula?', options: ['De adorno', 'Proteger la matriz de infecciones', 'Hacer la uña más larga', 'Nada'], correctAnswer: 1 },
          { id: 'l1q3', type: 'multiple', question: '¿Qué es el eponiquio?', options: ['Borde libre', 'Tejido vivo que rodea la placa ungueal', 'Un hongo', 'La lúnula'], correctAnswer: 1 },
          { id: 'l1q4', type: 'multiple', question: '¿Para qué sirve el deshidratador?', options: ['Dar brillo', 'Eliminar grasa y humedad para mejorar adherencia', 'Limpiar manchas', 'Ablandar cutícula'], correctAnswer: 1 },
          { id: 'l1q5', type: 'multiple', question: '¿Cómo se esteriliza la herramienta metálica?', options: ['Con agua', 'Autoclave o glutaraldehído al 2%', 'Con papel', 'No se esteriliza'], correctAnswer: 1 },
          { id: 'l1q6', type: 'multiple', question: '¿Qué es una onicofagia?', options: ['Uña sana', 'Hábito de comerse las uñas', 'Hongo en la uña', 'Uña encarnada'], correctAnswer: 1 },
          { id: 'l1q7', type: 'multiple', question: '¿Para qué sirve el Primer?', options: ['Dar color', 'Sustancia que prepara la uña para el acrílico', 'Para quitar el esmalte', 'Para dar masaje'], correctAnswer: 1 },
          { id: 'l1q8', type: 'multiple', question: 'Principal síntoma de hongo:', options: ['Uña rosa', 'Cambio de color y engrosamiento', 'Uña muy brillante', 'Poca cutícula'], correctAnswer: 1 },
          { id: 'l1q9', type: 'multiple', question: '¿Cuál es la zona de tensión?', options: ['La punta', 'Punto donde se une el tip con la uña natural', 'La cutícula', 'Toda la uña'], correctAnswer: 1 },
          { id: 'l1q10', type: 'multiple', question: '¿Qué evita el levantamiento prematuro?', options: ['Poner mucho producto', 'Correcta preparación de la uña natural', 'Usar tips muy grandes', 'No limar'], correctAnswer: 1 }
        ]
      },
      {
        id: 'l2',
        title: 'Lección 2: Técnicas de Aplicación y Estructura',
        parts: [
          {
            id: 'l2p1',
            title: 'Técnicas de Esculpido',
            type: 'video',
            content: 'Diferentes formas de esculpir la uña.',
            topics: [
              { title: 'Forma Coffin', description: 'Técnica de limado para forma de ataúd.', whatIsItFor: 'Ofrecer variedad de diseños.', howToDoIt: 'Limar los laterales en ángulo hacia el centro.', image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&q=80&w=400' }
            ]
          }
        ],
        lessonExam: [
          { id: 'l2q1', type: 'multiple', question: '¿Qué es el limado direccional?', options: ['Limar hacia todos lados', 'Limar en un solo sentido para no astillar', 'No usar lima', 'Limar solo la piel'], correctAnswer: 1 },
          { id: 'l2q2', type: 'multiple', question: '¿Para qué sirve el molde (forma)?', options: ['Para medir el dedo', 'Para esculpir la uña sin tips', 'Para pintar', 'Para quitar el acrílico'], correctAnswer: 1 },
          { id: 'l2q3', type: 'multiple', question: '¿Cuál es la diferencia entre Tip y Molde?', options: ['Ninguna', 'Tip es una extensión plástica, el Molde sirve para esculpir desde cero', 'El tip es más caro', 'El molde es solo para gel'], correctAnswer: 1 },
          { id: 'l2q4', type: 'multiple', question: '¿Qué es el "C-Curve"?', options: ['Una marca de esmalte', 'Curvatura estructural para mayor resistencia de la uña', 'Una enfermedad', 'Un tipo de lima'], correctAnswer: 1 },
          { id: 'l2q5', type: 'multiple', question: '¿Para qué sirve la pinza de curvatura?', options: ['Para sacar cejas', 'Para marcar la estructura C mientras el acrílico polimeriza', 'Para cortar tips', 'Para decoración'], correctAnswer: 1 },
          { id: 'l2q6', type: 'multiple', question: '¿Qué es la "zona de estrés"?', options: ['Donde te duele la cabeza', 'El punto donde la uña tiene más probabilidad de romperse', 'La cutícula', 'El borde libre'], correctAnswer: 1 },
          { id: 'l2q7', type: 'multiple', question: '¿Qué grosor debe tener una uña técnica?', options: ['Como una moneda', 'Delgado en cutícula y punta, fuerte en el ápice', 'Muy gruesa siempre', 'Como un papel'], correctAnswer: 1 },
          { id: 'l2q8', type: 'multiple', question: '¿Cómo se limpia el pincel tras el uso?', options: ['Con agua', 'Con monómero limpio y sin frotar bruscamente', 'Con alcohol', 'No se limpia'], correctAnswer: 1 },
          { id: 'l2q9', type: 'multiple', question: '¿Qué es el "lifting"?', options: ['Maquillaje', 'Levantamiento prematuro del acrílico de la uña natural', 'Un tipo de lima', 'Un diseño artístico'], correctAnswer: 1 },
          { id: 'l2q10', type: 'multiple', question: '¿Cuál es la función del grano 180 en la lima?', options: ['Para pies', 'Preparación de uña natural y limado suave', 'Para rebajar acrílico rápido', 'Para dar brillo'], correctAnswer: 1 }
        ]
      },
      {
        id: 'l3',
        title: 'Lección 3: Arte y Decoración (Nail Art)',
        parts: [
          {
            id: 'l3p1',
            title: 'Diseño a Mano Alzada',
            type: 'video',
            content: 'Técnicas de dibujo sobre la uña.',
            topics: [
              { title: 'Técnica de One Stroke', description: 'Uso de dos colores en un pincel.', whatIsItFor: 'Crear flores y degradados realistas.', howToDoIt: 'Cargar el pincel con dos tonos y matizar.', image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80&w=400' }
            ]
          }
        ],
        lessonExam: [
          { id: 'l3q1', type: 'multiple', question: '¿Qué es el "Dotting tool"?', options: ['Una lima', 'Puntero para hacer puntos y diseños', 'Un tipo de acrílico', 'Una lámpara'], correctAnswer: 1 },
          { id: 'l3q2', type: 'multiple', question: '¿Qué es el efecto Ombré?', options: ['Un tipo de hongo', 'Degradado suave entre dos o más colores', 'Pintar una uña de cada color', 'No tiene nombre'], correctAnswer: 1 },
          { id: 'l3q3', type: 'multiple', question: '¿Qué es el encapsulado?', options: ['Poner las uñas en una caja', 'Colocar elementos decorativos dentro de capas de acrílico cristal', 'Pintar por fuera', 'Quitar la cutícula'], correctAnswer: 1 },
          { id: 'l3q4', type: 'multiple', question: '¿Cómo se usa el "sticker" en uñas?', options: ['Para jugar', 'Pegado decorativo cubierto con gel finish', 'Como base', 'No se usa'], correctAnswer: 1 },
          { id: 'l3q5', type: 'multiple', question: '¿Qué pincel se usa para 3D en uñas?', options: ['Un pincel de brocha gorda', 'Pincel Kolinsky pequeño de punta fina para relieve', 'Un cepillo de dientes', 'Un lápiz'], correctAnswer: 1 },
          { id: 'l3q6', type: 'multiple', question: '¿Qué es el "Top Coat"?', options: ['Una base', 'Capa final que da brillo o mate y protege el diseño', 'Un quitaesmalte', 'Un tipo de lámpara'], correctAnswer: 1 },
          { id: 'l3q7', type: 'multiple', question: '¿Para qué sirve el Spider Gel?', options: ['Para dar miedo', 'Hacer líneas geométricas muy finas y elásticas', 'Para pegar cristales', 'Para las arañas'], correctAnswer: 1 },
          { id: 'l3q8', type: 'multiple', question: '¿Cuál es el uso de los cristales Swarovski en uñas?', options: ['Para limar', 'Decoración de lujo fijada con resina o gel de construcción', 'Como base', 'No se deben usar'], correctAnswer: 1 },
          { id: 'l3q9', type: 'multiple', question: '¿Qué es el efecto espejo (Chrome)?', options: ['Mirarse en la uña', 'Pigmento frotado sobre gel que da un acabado metálico', 'Una pintura normal', 'Un tipo de lima'], correctAnswer: 1 },
          { id: 'l3q10', type: 'multiple', question: '¿Cómo se protegen los diseños hechos con pintura acrílica?', options: ['Con agua', 'Sellando con Top Gel y curando en lámpara', 'No se protegen', 'Con laca para el cabello'], correctAnswer: 1 }
        ]
      },
      {
        id: 'l4',
        title: 'Lección 4: Sistemas de Gel y Polygel',
        parts: [
          {
            id: 'l4p1',
            title: 'Aplicación de Gel de Construcción',
            type: 'video',
            content: 'Nuevos materiales en el mercado.',
            topics: [
              { title: 'Ventajas del Gel', description: 'Flexibilidad y poco olor.', whatIsItFor: 'Clientes sensibles al acrílico.', howToDoIt: 'Aplicar y curar en lámpara LED/UV.', image: 'https://images.unsplash.com/photo-1632345686004-9ba0508544cc?auto=format&fit=crop&q=80&w=400' }
            ]
          }
        ],
        lessonExam: [
          { id: 'l4q1', type: 'multiple', question: '¿Cómo seca el gel corporativo?', options: ['Al aire', 'En lámpara UV/LED', 'Con secador de pelo', 'Con agua'], correctAnswer: 1 },
          { id: 'l4q2', type: 'multiple', question: '¿Qué es el Polygel?', options: ['Un tipo de jabón', 'Sistema híbrido entre acrílico y gel', 'Un esmalte común', 'No se sabe'], correctAnswer: 1 },
          { id: 'l4q3', type: 'multiple', question: '¿Para qué sirve el "Base Gel"?', options: ['Para dar color', 'Capa de unión entre la uña y el gel de color o construcción', 'Dar brillo final', 'Como aceite'], correctAnswer: 1 },
          { id: 'l4q4', type: 'multiple', question: '¿Qué diferencia al Gelish de un esmalte tradicional?', options: ['El precio', 'Requiere curado en lámpara y dura mucho más', 'El envase', 'El olor'], correctAnswer: 1 },
          { id: 'l4q5', type: 'multiple', question: '¿Por qué se siente calor en la lámpara?', options: ['Es normal, por la reacción de polimerización del gel', 'La lámpara está rota', 'Es por el aire', 'La uña está quemada'], correctAnswer: 0 },
          { id: 'l4q6', type: 'multiple', question: '¿Qué es la "capa de inhibición"?', options: ['Capa de suciedad', 'Residuo pegajoso del gel tras curar que debe limpiarse o usarse para unión', 'Una capa de hongo', 'Capa final de brillo'], correctAnswer: 1 },
          { id: 'l4q7', type: 'multiple', question: '¿Cómo se limpia la capa de inhibición?', options: ['Con agua', 'Con Cleaner o Alcohol isopropílico', 'Con acetona', 'No se limpia'], correctAnswer: 1 },
          { id: 'l4q8', type: 'multiple', question: '¿Qué es un sistema "Soak off"?', options: ['Geles que se retiran solo con lima', 'Geles que pueden removerse con acetona', 'Uñas postizas', 'Un tipo de crema'], correctAnswer: 1 },
          { id: 'l4q9', type: 'multiple', question: 'Ventaja del gel sobre el acrílico:', options: ['Es más barato', 'No tiene olor fuerte y es más flexible', 'Es más duro', 'No necesita lámpara'], correctAnswer: 1 },
          { id: 'l4q10', type: 'multiple', question: '¿Qué pasa si el gel toca la cutícula?', options: ['Se ve mejor', 'Se levanta el producto prematuramente', 'No pasa nada', 'Ayuda al crecimiento'], correctAnswer: 1 }
        ]
      },
      {
        id: 'l5',
        title: 'Lección 5: Retiro Seguro y Ética Profesional',
        parts: [
          {
            id: 'l5p1',
            title: 'Retiro con Torno',
            type: 'video',
            content: 'Uso del e-file para retirar producto.',
            topics: [
              { title: 'Broca de Seguridad', description: 'Uso de brocas que no dañan la piel.', whatIsItFor: 'Retirar acrílico rápido y seguro.', howToDoIt: 'Mantener el torno en movimiento constante.', image: 'https://images.unsplash.com/photo-1616165415172-f7035ce62464?auto=format&fit=crop&q=80&w=400' }
            ]
          }
        ],
        lessonExam: [
          { id: 'l5q1', type: 'multiple', question: '¿Qué pasa si arrancas la uña acrílica?', options: ['Crece más rápido', 'Dañas las capas naturales de la uña (onicosquizia)', 'Se quita el hongo', 'Nada'], correctAnswer: 1 },
          { id: 'l5q2', type: 'multiple', question: '¿Cuál es el uso correcto del torno (E-file)?', options: ['Presionar fuerte', 'Toques ligeros y movimiento constante sin parar en un solo punto', 'Usarlo a máxima potencia siempre', 'Para limar la piel'], correctAnswer: 1 },
          { id: 'l5q3', type: 'multiple', question: '¿Cómo se retira el acrílico de forma segura?', options: ['Con los dientes', 'Remojo en acetona pura por 15-20 minutos', 'Con un cuchillo', 'Limando hasta llegar a la carne'], correctAnswer: 1 },
          { id: 'l5q4', type: 'multiple', question: '¿Qué es el "Refill" o Relleno?', options: ['Poner uñas nuevas', 'Mantenimiento del crecimiento cada 15-21 días', 'Cambiar solo el color', 'Un tipo de adorno'], correctAnswer: 1 },
          { id: 'l5q5', type: 'multiple', question: 'Ética profesional implica:', options: ['Atender de mala gana', 'Higiene máxima, uso de materiales de calidad y honestidad con el cliente', 'Cobrar lo que sea', 'Hacer lo que el cliente diga aunque dañe su uña'], correctAnswer: 1 },
          { id: 'l5q6', type: 'multiple', question: '¿Para qué sirve el antiséptico?', options: ['Dar olor', 'Desinfectar manos de la técnica y clienta antes de empezar', 'Limpiar el piso', 'Para el esmalte'], correctAnswer: 1 },
          { id: 'l5q7', type: 'multiple', question: '¿Cuándo NO se debe trabajar en una uña?', options: ['Si el cliente tiene prisa', 'Si hay signos visibles de infección, hongo o uña muy lastimada', 'Si no tiene dinero', 'Si la uña es pequeña'], correctAnswer: 1 },
          { id: 'l5q8', type: 'multiple', question: '¿Qué es la ficha técnica del cliente?', options: ['Un dibujo', 'Registro con datos de contacto, tipo de uña y servicios realizados', 'La factura', 'No existe'], correctAnswer: 1 },
          { id: 'l5q9', type: 'multiple', question: 'Importancia del guante de nitrilo:', options: ['Por estética', 'Protección contra químicos y prevención de contacto directo', 'Para no ensuciarse', 'No se usa'], correctAnswer: 1 },
          { id: 'l5q10', type: 'multiple', question: 'Cómo tratar una uña con hongo leve tras retirar:', options: ['Taparla de nuevo', 'Remitir al médico y no aplicar producto hasta que sane', 'Ponerle mucho pegamento', 'Limarla mucho'], correctAnswer: 1 }
        ]
      }
    ],
    finalExam: [
      { id: 'fq1', type: 'multiple', question: '¿Qué es el monómero?', options: ['Líquido', 'Polvo', 'Gel', 'Tipe'], correctAnswer: 0 },
      { id: 'fq2', type: 'multiple', question: '¿Qué es el polímero?', options: ['Líquido', 'Polvo acrílico', 'Lámpara', 'Pegamento'], correctAnswer: 1 },
      { id: 'fq3', type: 'multiple', question: '¿Para qué sirve el pincel Kolinsky?', options: ['Para pintar cuadros', 'Pelo natural que retiene monómero correctamente', 'Para barrer polvo', 'Para aplicar gel'], correctAnswer: 1 },
      { id: 'fq4', type: 'multiple', question: '¿Qué es el balance de la perla?', options: ['El precio', 'Relación perfecta entre líquido y polvo', 'El tamaño del pincel', 'La marca'], correctAnswer: 1 },
      { id: 'fq5', type: 'multiple', question: '¿Para qué usamos el Dril (torno)?', options: ['Para secar', 'Limado y retiro eficiente de producto', 'Cortar tips', 'Hacer dibujos'], correctAnswer: 1 },
      { id: 'fq6', type: 'multiple', question: '¿Qué es el sellado de cutícula?', options: ['Poner pegamento', 'Difuminar el acrílico cerca de la piel sin tocarla', 'Pintar la piel', 'Usar mucha agua'], correctAnswer: 1 },
      { id: 'fq7', type: 'multiple', question: '¿Para qué sirve el aceite de cutícula?', options: ['Para el acrílico', 'Hidratar la piel tras el servicio', 'Para pegar', 'Para brillar la uña'], correctAnswer: 1 },
      { id: 'fq8', type: 'multiple', question: '¿Cómo retiramos el acrílico?', options: ['Arrancándolo', 'Remojo en acetona pura', 'Con tijeras', 'No se retira'], correctAnswer: 1 },
      { id: 'fq9', type: 'multiple', question: '¿Qué es el ápice de la uña?', options: ['El borde libre', 'Punto más alto y fuerte de la estructura', 'La base', 'El lateral'], correctAnswer: 1 },
      { id: 'fq10', type: 'multiple', question: 'Importancia del mantenimiento:', options: ['Para gastar más', 'Rellenar el crecimiento y evitar filtraciones/hongos', 'Cambiar de color', 'No es importante'], correctAnswer: 1 }
    ]
  },
  {
    id: 'enfermeria',
    title: 'Auxiliar de Enfermería',
    category: 'Salud',
    description: 'Capacitación integral para el cuidado y asistencia de pacientes.',
    longDescription: 'Formamos técnicos con alto sentido humano para apoyar en el sector salud en el cuidado de pacientes.',
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=800',
    competencies: ['Signos vitales', 'Primeros auxilios', 'Higiene del paciente'],
    subjects: [
      { name: 'Ética Profesional', credits: 2 },
      { name: 'Anatomía Básica', credits: 4 },
      { name: 'Primeros Auxilios', credits: 6 }
    ],
    lessons: [
      {
        id: 'l1',
        title: 'Módulo 1: Fundamentos de Enfermería y Soporte Vital',
        parts: [
          { 
            id: 'l1p1', 
            title: 'Signos Vitales: La Presión Arterial', 
            type: 'document', 
            content: `**Introducción:** La presión arterial es uno de los indicadores más cruciales de la salud cardiovascular. Como Auxiliar de Enfermería, tu precisión al tomarla puede salvar vidas, ya que permite detectar a tiempo condiciones silenciosas como la hipertensión.

**Explicación Detallada:** La presión arterial mide la fuerza que ejerce la sangre contra las paredes de las arterias. Se compone de dos valores: la Presión Sistólica (cuando el corazón late) y la Presión Diastólica (cuando el corazón descansa). Una medición correcta requiere que el paciente esté en reposo, en un ambiente tranquilo y con el equipo (esfigmomanómetro y estetoscopio) en perfectas condiciones.

**Resumen:** Medir la presión no es solo leer números; es evaluar la integridad del sistema circulatorio del paciente.

**Puntos Clave:**
*   **Posición:** El brazo debe estar a la altura del corazón.
*   **Silencio:** No se debe hablar durante la toma.
*   **Equipo:** El brazalete debe ser del tamaño adecuado para el brazo del paciente.`,
            topics: [
              {
                title: 'Técnica de Auscultación',
                description: `**Escuchando la Vida:** El método auscultatorio utiliza los sonidos de Korotkoff para determinar los niveles de presión. Requiere entrenamiento auditivo para identificar el primer golpe (Sistólica) y el último (Diastólica).`,
                whatIsItFor: `**Objetivo de Aprendizaje:** Dominar la técnica auscultatoria para obtener valores exactos de presión arterial y reconocer las desviaciones de la normalidad.`,
                howToDoIt: `**Instrucciones Paso a Paso:**
1.  **Localización:** Ubica el pulso braquial.
2.  **Colocación:** Ajusta el manguito 2.5 cm arriba del codo.
3.  **Insuflación:** Bombea hasta 180-200 mmHg.
4.  **Auscultación:** Abre la válvula lentamente y registra los sonidos.

**Tips:** Asegúrate de que el paciente no tenga las piernas cruzadas durante la toma.`,
                image: 'https://images.unsplash.com/photo-1628178144541-23300fbc8925?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'l1p2',
            title: 'Pulso y Frecuencia Respiratoria',
            type: 'document',
            content: `**Introducción:** El pulso y la respiración son signos vitales que reflejan la actividad del corazón y los pulmones de manera inmediata.

**Explicación Detallada:** El pulso arterial es la onda pulsátil de la sangre, originada en la contracción del ventrículo izquierdo del corazón. Se evalúa frecuencia, ritmo y amplitud. La frecuencia respiratoria es el número de ciclos respiratorios (inspiración y espiración) por minuto. Es vital evaluar ambos sin que el paciente sea consciente de la medición respiratoria para evitar que altere su ritmo voluntariamente.

**Resumen:** Son los centinelas que nos avisan sobre el estado de oxigenación y hemodinamia del paciente.`,
            topics: [
              {
                title: 'Puntos de Pulso',
                description: `**Localización:** Los puntos más comunes son el radial (muñeca), carotídeo (cuello) y pedio (pie). En emergencias, el pulso carotídeo es el más confiable.`,
                whatIsItFor: `**Objetivo:** Aprender a localizar y contabilizar correctamente las pulsaciones y respiraciones en reposo.`,
                howToDoIt: `**Técnica:** Usa los dedos índice y medio (nunca el pulgar). Cuenta durante 60 segundos completos para mayor precisión si el ritmo es irregular.`,
                image: 'https://images.unsplash.com/photo-1576091160550-2173599211d0?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'l1p3',
            title: 'RCP: Reanimación Cardiopulmonar',
            type: 'document',
            content: `**Introducción:** La Reanimación Cardiopulmonar (RCP) es una maniobra de emergencia vital que se realiza cuando el corazón deja de latir. Actuar con rapidez en los primeros minutos aumenta drásticamente las posibilidades de supervivencia.

**Explicación Detallada:** El objetivo de la RCP es mantener el flujo de sangre oxigenada hacia el cerebro y el corazón mediante compresiones torácicas rítmicas. Las compresiones actúan como una "bomba externa" que suple la función del corazón hasta que llegue ayuda profesional o se utilice un desfibrilador (DEA).

**Resumen:** En RCP, la calidad y frecuencia de las compresiones son determinantes para la vida.`,
            topics: [
              {
                title: 'Compresiones de Alta Calidad',
                description: `**Fuerza y Ritmo:** Se deben realizar entre 100 y 120 compresiones por minuto, permitiendo que el pecho se expanda totalmente entre cada una.`,
                whatIsItFor: `**Objetivo de Aprendizaje:** Aprender la secuencia de soporte vital básico (SVB) para intervenir eficazmente en casos de paro cardiorrespiratorio.`,
                howToDoIt: `**Paso a Paso:**
1.  **Seguridad:** Verifica el entorno.
2.  **Respuesta:** Estimula al paciente.
3.  **Ayuda:** Llama a emergencias.
4.  **Acción:** Inicia compresiones fuertes y rápidas en el centro del pecho.`,
                image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'l1p4',
            title: 'Obstrucción de Vía Aérea: Maniobra de Heimlich',
            type: 'document',
            content: `**Introducción:** El atragantamiento es una causa común de muerte accidental que puede resolverse rápidamente con la técnica adecuada.

**Explicación Detallada:** La obstrucción puede ser parcial (el paciente tose o emite sonidos) o total (el paciente no puede respirar, toser ni hablar, y suele llevarse las manos al cuello). La maniobra de Heimlich utiliza la presión subdiafragmática para expulsar el aire de los pulmones y, con él, el objeto extraño.

**Resumen:** Una acción rápida y decidida desobstruye la vía aérea en segundos.`,
            topics: [
              {
                title: 'Técnica de Compresión Abdominal',
                description: `**Presión hacia Arriba:** Se abraza al paciente por detrás y se realiza una presión fuerte "hacia adentro y hacia arriba" justo debajo de las costillas.`,
                whatIsItFor: `**Objetivo:** Dominar el protocolo de actuación ante una obstrucción de vía aérea por cuerpo extraño (OVACE).`,
                howToDoIt: `**Instrucciones:** Coloca tu puño sobre el ombligo del paciente, sujeta el puño con la otra mano y presiona con fuerza. Repite hasta que el objeto salga o el paciente pierda el conocimiento.`,
                image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'l1p5',
            title: 'Bioseguridad y Lavado de Manos',
            type: 'document',
            content: `**Introducción:** El lavado de manos es la medida individual más importante para prevenir la transmisión de infecciones en el ámbito hospitalario.

**Explicación Detallada:** La bioseguridad protege al personal de salud y a los pacientes de microorganismos patógenos. El lavado de manos clínico debe realizarse en "5 momentos" clave. El uso de guantes no reemplaza el lavado de manos. Además, se deben conocer los tipos de aislamiento y el uso correcto del equipo de protección personal (mascarillas, gafas, batas).

**Resumen:** Manos limpias salvan vidas.`,
            topics: [
              {
                title: 'Técnica de Lavado Clínico',
                description: `**Los 5 Momentos:** 1. Antes del contacto con el paciente. 2. Antes de tarea aséptica. 3. Después de riesgo de exposición a líquidos. 4. Después del contacto con el paciente. 5. Después del contacto con el entorno.`,
                whatIsItFor: `**Objetivo:** Implementar los protocolos de higiene para reducir las infecciones asociadas a la atención de salud (IAAS).`,
                howToDoIt: `**Protocolo:** Mójese las manos, aplique jabón, frote palmas, dorsos, entre los dedos y uñas por al menos 40-60 segundos. Enjuague y seque con toalla de papel.`,
                image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400'
              }
            ]
          }
        ],
        lessonExam: [
          { id: 'len-q1', type: 'multiple', question: '¿Cuál es el valor normal de la presión arterial?', options: ['180/100', '120/80 mmHg', '80/50', '200/120'], correctAnswer: 1 },
          { id: 'len-q2', type: 'multiple', question: '¿Dónde se toma el pulso radial?', options: ['En el cuello', 'En la muñeca', 'En el pie', 'En el pecho'], correctAnswer: 1 },
          { id: 'len-q3', type: 'multiple', question: '¿Cuántas compresiones de RCP por minuto?', options: ['50', '100-120', '200', '10'], correctAnswer: 1 },
          { id: 'len-q4', type: 'multiple', question: '¿Qué es la ética en enfermería?', options: ['Ser rápido', 'Respeto a la dignidad y vida del paciente', 'Cobrar bien', 'Pelear con doctores'], correctAnswer: 1 },
          { id: 'len-q5', type: 'multiple', question: '¿Para qué sirve el lavado de manos?', options: ['Por estética', 'Prevenir infecciones nosocomiales', 'Para tener olor rico', 'No sirve'], correctAnswer: 1 },
          { id: 'len-q6', type: 'multiple', question: '¿Qué es una temperatura febril?', options: ['36°C', '38°C o más', '35°C', '37°C'], correctAnswer: 1 },
          { id: 'len-q7', type: 'multiple', question: '¿Para qué sirve el estetoscopio?', options: ['Medir azúcar', 'Escuchar sonidos internos del cuerpo', 'Ver el oído', 'Medir altura'], correctAnswer: 1 },
          { id: 'len-q8', type: 'multiple', question: '¿Qué es el triage?', options: ['Un tipo de suero', 'Clasificación de pacientes por gravedad', 'Un instrumento médico', 'Un reporte'], correctAnswer: 1 },
          { id: 'len-q9', type: 'multiple', question: '¿Qué hacer ante una hemorragia?', options: ['Poner alcohol', 'Hacer presión directa sobre la herida', 'No tocar', 'Esperar'], correctAnswer: 1 },
          { id: 'len-q10', type: 'multiple', question: 'Diferencia entre signo y síntoma:', options: ['Son iguales', 'El signo es medible (objetivo), el síntoma lo describe el paciente (subjetivo)', 'El síntoma se mide', 'No hay diferencia'], correctAnswer: 1 }
        ]
      },
      {
        id: 'l2',
        title: 'Módulo 2: Cuidado Directo del Paciente',
        parts: [
          {
            id: 'l2p1',
            title: 'Higiene y Confort',
            type: 'document',
            content: 'Técnicas de aseo y comodidad para pacientes encamados.',
            topics: [
              { title: 'Baño en Cama', description: 'Cómo asear a un paciente que no puede moverse.', whatIsItFor: 'Mantener la higiene y prevenir escaras.', howToDoIt: 'Usar esponjas, agua tibia y respetar la intimidad.', image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=400' }
            ]
          }
        ],
        lessonExam: [
          { id: 'l2q1', type: 'multiple', question: '¿Qué es la mecánica corporal?', options: ['Arreglar camillas', 'Uso eficiente del cuerpo para mover pacientes sin lesionarse', 'Un tipo de ejercicio', 'No usar las manos'], correctAnswer: 1 },
          { id: 'l2q2', type: 'multiple', question: '¿Para qué se usan las barandillas de la cama?', options: ['Para colgar ropa', 'Prevenir caídas del paciente', 'Para que no se escape', 'Para hacer ejercicio'], correctAnswer: 1 },
          { id: 'l2q3', type: 'multiple', question: '¿Qué es la posición Decúbito Supino?', options: ['Boca abajo', 'Boca arriba', 'De lado', 'Sentado'], correctAnswer: 1 },
          { id: 'l2q4', type: 'multiple', question: '¿Qué es la posición de Fowler?', options: ['Acostado plano', 'Sentado o semi-sentado (45°-90°)', 'Cabeza más baja que los pies', 'En cuclillas'], correctAnswer: 1 },
          { id: 'l2q5', type: 'multiple', question: '¿Para qué sirve el cambio de posición cada 2 horas?', options: ['Para que el paciente no se aburra', 'Prevenir úlceras por presión (escaras)', 'Para que el paciente haga ejercicio', 'No tiene utilidad'], correctAnswer: 1 },
          { id: 'l2q6', type: 'multiple', question: '¿Cómo se debe realizar el aseo genital?', options: ['De atrás hacia adelante', 'De adelante hacia atrás (para evitar contaminación)', 'Con cualquier jabón fuerte', 'No se realiza'], correctAnswer: 1 },
          { id: 'l2q7', type: 'multiple', question: '¿Qué es un paciente "dependiente"?', options: ['Que tiene mucho dinero', 'Aquel que necesita ayuda para sus actividades básicas', 'Que no habla', 'Que camina solo'], correctAnswer: 1 },
          { id: 'l2q8', type: 'multiple', question: '¿Cuál es la importancia de la sábana tirante?', options: ['Por estética', 'Evitar arrugas que dañen la piel del paciente', 'Para que la cama dure más', 'Para que no se mueva'], correctAnswer: 1 },
          { id: 'l2q9', type: 'multiple', question: '¿Qué se evalúa en el estado de la piel?', options: ['Solo el color', 'Integridad, temperatura, color y humedad', 'Si tiene tatuajes', 'Nada'], correctAnswer: 1 },
          { id: 'l2q10', type: 'multiple', question: '¿Qué es la "humanización de la asistencia"?', options: ['Usar robots', 'Tratar al paciente como una persona digna y no solo como una enfermedad', 'Hacer todo rápido', 'Cobrar más'], correctAnswer: 1 }
        ]
      },
      {
        id: 'l3',
        title: 'Módulo 3: Farmacología Básica y Administración',
        parts: [
          {
            id: 'l3p1',
            title: 'Los 10 Correctos',
            type: 'document',
            content: 'Reglas de oro para la administración de fármacos.',
            topics: [
              { title: 'Vía Oral vs Sublingual', description: 'Diferencias de absorción.', whatIsItFor: 'Asegurar el efecto deseado.', howToDoIt: 'Verificar dosis, hora y paciente correcto.', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=400' }
            ]
          }
        ],
        lessonExam: [
          { id: 'l3q1', type: 'multiple', question: '¿Cuál es un "correcto" en administración?', options: ['Color correcto', 'Precio correcto', 'Dosis correcta', 'Día de la semana'], correctAnswer: 2 },
          { id: 'l3q2', type: 'multiple', question: '¿Qué significa vía parenteral?', options: ['Por la boca', 'A través de una inyección (venosa, muscular, etc.)', 'Por el oído', 'Por la piel solamente'], correctAnswer: 1 },
          { id: 'l3q3', type: 'multiple', question: '¿Qué es un efecto adverso?', options: ['Un efecto deseado', 'Reacción no deseada y perjudicial de un fármaco', 'Que el medicamento es caro', 'Que no hace nada'], correctAnswer: 1 },
          { id: 'l3q4', type: 'multiple', question: '¿Para qué sirve el "Paciente Correcto"?', options: ['Evitar errores de identidad y medicación', 'Ver si el paciente es guapo', 'Cobrarle a quien es', 'Para la foto'], correctAnswer: 0 },
          { id: 'l3q5', type: 'multiple', question: '¿Qué es la caducidad de un fármaco?', options: ['Su precio', 'Fecha límite para su uso seguro y efectivo', 'Su nombre científico', 'Su color'], correctAnswer: 1 },
          { id: 'l3q6', type: 'multiple', question: '¿Qué es una vía de administración tópica?', options: ['Inyectada', 'Aplicada sobre la piel o mucosas (cremas, colirios)', 'Tragada', 'Inspirada'], correctAnswer: 1 },
          { id: 'l3q7', type: 'multiple', question: '¿Qué es el "lavado de manos clínico"?', options: ['Mojarse las manos', 'Procedimiento para eliminar la suciedad y flora transitoria', 'Usar solo alcohol', 'No es necesario'], correctAnswer: 1 },
          { id: 'l3q8', type: 'multiple', question: '¿Qué indica una vía "sublingual"?', options: ['Debajo de la lengua', 'En el ojo', 'En la oreja', 'En el brazo'], correctAnswer: 0 },
          { id: 'l3q9', type: 'multiple', question: '¿Por qué no se debe triturar una pastilla de liberación prolongada?', options: ['Porque sabe mal', 'Porque se altera la dosis y velocidad de absorción', 'Porque es muy duro', 'Se puede hacer siempre'], correctAnswer: 1 },
          { id: 'l3q10', type: 'multiple', question: '¿Qué debe hacer si el paciente rechaza el medicamento?', options: ['Obligarlo', 'Informar al enfermero/médico y registrar el rechazo', 'Tirarlo a la basura', 'Dárselo a otro paciente'], correctAnswer: 1 }
        ]
      },
      {
        id: 'l4',
        title: 'Módulo 4: Nutrición y Dietética Hospitalaria',
        parts: [
          {
            id: 'l4p1',
            title: 'Tipos de Dietas',
            type: 'document',
            content: 'Alimentación según la patología del paciente.',
            topics: [
              { title: 'Dieta Líquida', description: 'Indicada para post-operatorios inmediatos.', whatIsItFor: 'Fácil digestión y reposo gástrico.', howToDoIt: 'Suministrar caldos, jugos colados y gelatinas.', image: 'https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&q=80&w=400' }
            ]
          }
        ],
        lessonExam: [
          { id: 'l4q1', type: 'multiple', question: '¿Para qué sirve la dieta hiposódica?', options: ['Para subir de peso', 'Pacientes con hipertensión (baja en sal)', 'Para la diabetes', 'Para el pelo'], correctAnswer: 1 },
          { id: 'l4q2', type: 'multiple', question: '¿Qué es una dieta hipocalórica?', options: ['Baja en grasas', 'Baja en calorías para perder peso', 'Rica en azúcares', 'Solo líquidos'], correctAnswer: 1 },
          { id: 'l4q3', type: 'multiple', question: '¿Qué es la nutrición enteral?', options: ['Comer normalmente', 'Administración de nutrientes por sonda al aparato digestivo', 'Por vía venosa', 'Inyecciones'], correctAnswer: 1 },
          { id: 'l4q4', type: 'multiple', question: '¿Quién prescribe la dieta del paciente?', options: ['La secretaria', 'El médico o nutricionista', 'El paciente mismo', 'El auxiliar'], correctAnswer: 1 },
          { id: 'l4q5', type: 'multiple', question: '¿Qué es una dieta blanda?', options: ['Que se puede aplastar con la mano', 'Fácil de digerir y con poco residuo', 'Comida triturada siempre', 'Solo gelatina'], correctAnswer: 1 },
          { id: 'l4q6', type: 'multiple', question: '¿Cuál es el nutriente principal de la carne?', options: ['Vitminas', 'Proteínas', 'Grasas saturadas solamente', 'Agua'], correctAnswer: 1 },
          { id: 'l4q7', type: 'multiple', question: '¿Para qué sirve la fibra?', options: ['Para el corazón', 'Mejorar el tránsito intestinal', 'Para los músculos', 'Para la vista'], correctAnswer: 1 },
          { id: 'l4q8', type: 'multiple', question: '¿Qué es la deshidratación?', options: ['Mucha agua en el cuerpo', 'Pérdida excesiva de líquidos y electrolitos', 'Tener frío', 'Hambre extrema'], correctAnswer: 1 },
          { id: 'l4q9', type: 'multiple', question: '¿Qué se debe verificar antes de dar la comida al paciente?', options: ['Si tiene hambre', 'Identidad del paciente y tipo de dieta asignada', 'La temperatura de la sala', 'Nada'], correctAnswer: 1 },
          { id: 'l4q10', type: 'multiple', question: '¿Qué es la disfagia?', options: ['Dolor de cabeza', 'Dificultad para tragar alimentos o líquidos', 'Mala digestión', 'Alergia alimentaria'], correctAnswer: 1 }
        ]
      },
      {
        id: 'l5',
        title: 'Módulo 5: Ética, Deontología y Salud Pública',
        parts: [
          {
            id: 'l5p1',
            title: 'Secreto Profesional',
            type: 'document',
            content: 'La confidencialidad del paciente.',
            topics: [
              { title: 'Relación Paciente-Auxiliar', description: 'Empatía sin perder el profesionalismo.', whatIsItFor: 'Generar un ambiente de confianza y seguridad.', howToDoIt: 'Mantener los datos clínicos bajo estricta reserva.', image: 'https://images.unsplash.com/photo-1576091160550-2173599211d0?auto=format&fit=crop&q=80&w=400' }
            ]
          }
        ],
        lessonExam: [
          { id: 'l5q1', type: 'multiple', question: '¿Qué es la eutanasia?', options: ['Un tipo de vacuna', 'Provocar la muerte para evitar sufrimiento', 'Un examen de sangre', 'Una cirugía'], correctAnswer: 1 },
          { id: 'l5q2', type: 'multiple', question: '¿Qué es la deontología?', options: ['Estudio de los dientes', 'Ciencia que trata de los deberes de una profesión', 'Un tipo de cirugía', 'Estudio de los huesos'], correctAnswer: 1 },
          { id: 'l5q3', type: 'multiple', question: '¿Qué significa el secreto profesional?', options: ['No decir el sueldo', 'Derecho y deber de no revelar información del paciente', 'Mentir al jefe', 'Hablar solo con la familia'], correctAnswer: 1 },
          { id: 'l5q4', type: 'multiple', question: '¿Qué es la negligencia médica?', options: ['Hacer las cosas bien', 'Falta de cuidado o descuido en el cumplimiento de una obligación', 'Un tipo de medicina', 'Un error perdonable siempre'], correctAnswer: 1 },
          { id: 'l5q5', type: 'multiple', question: '¿Cuál es el objetivo principal de la salud pública?', options: ['Curar a una persona', 'Proteger y mejorar la salud de toda la población', 'Vender medicinas', 'Hacer hospitales caros'], correctAnswer: 1 },
          { id: 'l5q6', type: 'multiple', question: '¿Qué es una enfermedad endémica?', options: ['Que afecta a todo el mundo', 'Presente de forma constante en una región específica', 'Que no tiene cura', 'Que se contagia por el aire solamente'], correctAnswer: 1 },
          { id: 'l5q7', type: 'multiple', question: '¿Qué es la prevención primaria?', options: ['Curar la enfermedad', 'Evitar que la enfermedad aparezca (vacunas, educación)', 'Rehabilitar al paciente', 'Hacer autopsias'], correctAnswer: 1 },
          { id: 'l5q8', type: 'multiple', question: '¿Para qué sirven los registros de enfermería?', options: ['Para gastar papel', 'Documento legal de las acciones realizadas al paciente', 'Para que el jefe no se enoje', 'No son necesarios'], correctAnswer: 1 },
          { id: 'l5q9', type: 'multiple', question: '¿Qué es la empatía?', options: ['Ser simpático siempre', 'Capacidad de comprender y compartir los sentimientos del paciente', 'Regalar cosas', 'No sentir nada'], correctAnswer: 1 },
          { id: 'l5q10', type: 'multiple', question: '¿Qué es la bioética?', options: ['Estética biológica', 'Estudio de la conducta humana en el área de ciencias de la vida y salud', 'Un tipo de energía', 'Solo para doctores'], correctAnswer: 1 }
        ]
      }
    ],
    finalExam: [
      { id: 'fen-f1', type: 'multiple', question: '¿Qué es la bioseguridad?', options: ['Seguridad de vida', 'Medidas para prevenir riesgos biológicos', 'Un seguro médico', 'Uso de armas'], correctAnswer: 1 },
      { id: 'fen-f2', type: 'multiple', question: '¿Para qué sirve el tensiómetro?', options: ['Medir glucosa', 'Medir la presión arterial', 'Medir temperatura', 'Medir peso'], correctAnswer: 1 },
      { id: 'fen-f3', type: 'multiple', question: '¿Qué es una úlcera por presión?', options: ['Un grano', 'Lesión en piel por presión prolongada (postrados)', 'Una cortada con cuchillo', 'Una quemadura'], correctAnswer: 1 },
      { id: 'fen-f4', type: 'multiple', question: '¿Cuál es la función del auxiliar?', options: ['Operar al paciente', 'Asistir al enfermero y cuidado básico del paciente', 'Recetar remedios', 'Director de hospital'], correctAnswer: 1 },
      { id: 'fen-f5', type: 'multiple', question: '¿Cómo se desechan las agujas?', options: ['En la basura común', 'En el contenedor rojo de punzocortantes', 'Se guardan', 'Se lavan y usan'], correctAnswer: 1 },
      { id: 'fen-f6', type: 'multiple', question: '¿Qué es la asepsia?', options: ['Presencia de bacterias', 'Ausencia de microorganismos patógenos', 'Un tipo de gasa', 'Un dolor'], correctAnswer: 1 },
      { id: 'fen-f7', type: 'multiple', question: '¿Para qué sirve la hidratación?', options: ['Para nada', 'Mantener el equilibrio de líquidos en el cuerpo', 'Para engordar', 'Para dormir'], correctAnswer: 1 },
      { id: 'fen-f8', type: 'multiple', question: '¿Qué es el consentimiento informado?', options: ['Un aviso de pago', 'Permiso consciente del paciente para un tratamiento', 'Una receta', 'Un examen'], correctAnswer: 1 },
      { id: 'fen-f9', type: 'multiple', question: 'Urgencia vital primaria:', options: ['Dolor de oído', 'Paro respiratorio', 'Rasguño', 'Hipo'], correctAnswer: 1 },
      { id: 'fen-f10', type: 'multiple', question: 'Atención humanizada significa:', options: ['Ser serio siempre', 'Trato digno, empático y respetuoso', 'Hacer todo rápido', 'Usar máquinas solamente'], correctAnswer: 1 }
    ]
  },
  {
    id: 'facial-maquillaje',
    title: 'Facial y Maquillaje',
    category: 'Belleza',
    description: 'Especialízate en el cuidado de la piel y técnicas de maquillaje profesional.',
    longDescription: 'Aprende desde limpiezas faciales profundas hasta maquillajes de gala y editorial.',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800',
    competencies: ['Limpieza facial', 'Maquillaje social', 'Contorneo', 'Skin Care'],
    subjects: [
      { name: 'Higiene Facial', credits: 4 },
      { name: 'Tipos de Rostro', credits: 3 },
      { name: 'Color en Maquillaje', credits: 5 }
    ],
    lessons: [
      {
        id: 'l1',
        title: 'Lección 1: Preparación de la Piel',
        parts: [
          { 
            id: 'l1p1', 
            title: 'Tipos de Piel', 
            type: 'document', 
            content: 'Identificar el tipo de piel es el primer paso.',
            topics: [
              {
                title: 'Piel Grasa',
                description: 'Exceso de sebo y poros dilatados.',
                whatIsItFor: 'Saber qué productos usar para matificar.',
                howToDoIt: 'Usar productos a base de agua.',
                image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=400'
              }
            ]
          }
        ],
        lessonExam: [
          { id: 'lfa-q1', type: 'multiple', question: '¿Qué tipo de piel tiene poros cerrados y textura suave?', options: ['Grasa', 'Seca', 'Mixta', 'Acnéica'], correctAnswer: 1 },
          { id: 'lfa-q2', type: 'multiple', question: '¿Para qué sirve el tónico?', options: ['Limpiar', 'Restablecer el pH de la piel', 'Maquillar', 'Exfoliar'], correctAnswer: 1 },
          { id: 'lfa-q3', type: 'multiple', question: '¿Qué es la exfoliación?', options: ['Poner color', 'Retiro de células muertas', 'Hidratación profunda', 'Un masaje fuerte'], correctAnswer: 1 },
          { id: 'lfa-q4', type: 'multiple', question: '¿Para qué usamos el protector solar?', options: ['Para brillar', 'Prevenir envejecimiento y daño por radiación UV', 'Maquillar', 'No es necesario'], correctAnswer: 1 },
          { id: 'lfa-q5', type: 'multiple', question: '¿Qué es un comedón?', options: ['Un tipo de crema', 'Un punto negro o espinilla (poro obstruido)', 'Un masaje', 'Una pestaña'], correctAnswer: 1 },
          { id: 'lfa-q6', type: 'multiple', question: '¿Cómo se aplica la crema hidratante?', options: ['Hacia abajo', 'Con movimientos ascendentes y circulares', 'Solo frotando fuerte', 'Con algodón'], correctAnswer: 1 },
          { id: 'lfa-q7', type: 'multiple', question: '¿Para qué sirve la leche de limpieza?', options: ['Para beber', 'Remover impurezas y maquillaje suavemente', 'Para exfoliar', 'Para dar color'], correctAnswer: 1 },
          { id: 'lfa-q8', type: 'multiple', question: '¿Qué es el visagismo en maquillaje?', options: ['Estudio del color', 'Estudio del rostro para corregir y resaltar facciones', 'Poner pestañas', 'Limpiar pinceles'], correctAnswer: 1 },
          { id: 'lfa-q9', type: 'multiple', question: '¿Cuándo se aplica el "Primer" facial?', options: ['Al final', 'Antes de la base de maquillaje', 'Encima del labial', 'No se usa'], correctAnswer: 1 },
          { id: 'lfa-q10', type: 'multiple', question: '¿Qué hacer si el cliente tiene una herida abierta?', options: ['Maquillar igual', 'No realizar el servicio en esa zona y derivar', 'Poner corrector', 'Lavar con jabón'], correctAnswer: 1 }
        ]
      },
      {
        id: 'l2',
        title: 'Lección 2: Colorimetría y Maquillaje Social',
        parts: [
          {
            id: 'l2p1',
            title: 'Círculo Cromático y Armonía',
            type: 'document',
            content: `**Introducción:** El color es la herramienta principal del maquillador para neutralizar imperfecciones y resaltar la belleza natural.

**Explicación Detallada:** El uso del círculo cromático nos permite encontrar colores complementarios (que se anulan entre sí, como el verde para la rojez) y colores análogos (que crean armonía suave). Entender la teoría del color es vital para elegir la base correcta (subtonos fríos, cálidos o neutros) y sombras que hagan resaltar el color del iris del cliente.

**Resumen:** La colorimetría evita que el maquillaje se vea grisáceo o artificial.

**Puntos Clave:**
*   **Colores Complementarios:** Para cancelar ojeras moradas, usamos corrector naranja/salmón.
*   **Subtono de Piel:** Identificar si la piel es rosada (fría) o amarillenta (cálida).
*   **Contraste:** Usar colores que resalten las facciones según la estación de la persona.`,
            topics: [
              {
                title: 'Teoría del Color Aplicada',
                description: `Aprender a mezclar pigmentos para crear tonos de base personalizados.`,
                whatIsItFor: `**Objetivo:** Lograr una integración perfecta del maquillaje con el tono natural de la piel.`,
                howToDoIt: `**Práctica:** Observa las venas de tu muñeca; si son verdes, tu subtono es cálido; si son azules, es frío.`,
                image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'l2p2',
            title: 'Preparación de la Piel (Skin Prep)',
            type: 'document',
            content: `**Introducción:** Un buen maquillaje empieza con una piel impecable. La preparación es el 50% del resultado final.

**Explicación Detallada:** Debemos limpiar, tonificar e hidratar según el tipo de piel (grasa, seca o mixta). El uso de "Primers" ayuda a disimular poros, controlar el brillo o dar luminosidad. Una piel deshidratada absorberá la base, haciendo que el maquillaje se cuartee en pocos minutos.

**Resumen:** La preparación crea el lienzo liso necesario para que los productos se deslicen y duren.

**Puntos Clave:**
*   **Limpieza:** Eliminar cualquier rastro de suciedad o aceites naturales.
*   **Hidratación:** Esencial incluso en pieles grasas (usando geles en lugar de cremas).
*   **Protección:** El uso de brumas fijadoras antes de la base mejora la adherencia.`,
            topics: [
              {
                title: 'Rutina de Preparación',
                description: `Paso a paso para preparar diferentes biotipos cutáneos antes del maquillaje social.`,
                whatIsItFor: `**Objetivo:** Garantizar la durabilidad y el acabado sedoso del maquillaje.`,
                howToDoIt: `**Instrucción:** Aplica la crema hidratante con masajes ascendentes y deja que la piel la absorba antes de poner la base.`,
                image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'l2p3',
            title: 'Maquillaje Social de Día',
            type: 'document',
            content: `**Introducción:** El maquillaje de día debe ser sutil, fresco y realzar la belleza sin verse sobrecargado bajo la luz del sol.

**Explicación Detallada:** Se prefieren texturas ligeras como las BB Creams o bases de cobertura media. Los colores tierra, rosas claros y acabados mate son los protagonistas. El contorneo debe ser casi imperceptible, buscando solo definir suavemente las sombras naturales del rostro.

**Resumen:** Menos es más en el maquillaje de día; se busca un aspecto de "piel saludable".

**Puntos Clave:**
*   **Luz:** Siempre maquillar con luz natural o blanca frontal.
*   **Sombras:** Usar tonos neutros que den profundidad al ojo sin endurecer la mirada.
*   **Labios:** Tonos nude o gloss para dar frescura.`,
            topics: [
              {
                title: 'Look "No Makeup" Maquillaje',
                description: `Técnica para lucir maquillada pero de forma extremadamente natural.`,
                whatIsItFor: `**Objetivo:** Crear un maquillaje versátil para el día a día o eventos informales.`,
                howToDoIt: `**Tarea:** Aplica corrector solo en las zonas necesarias y difumina muy bien los bordes.`,
                image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'l2p4',
            title: 'Maquillaje de Noche y Gala',
            type: 'document',
            content: `**Introducción:** La noche permite mayor intensidad, dramatismo y el uso de texturas brillantes.

**Explicación Detallada:** Las luces artificiales "comen" el color, por lo que debemos aplicar productos con mayor pigmentación. Se pueden usar técnicas como el contorneo marcado, labios rojos o potentes, y sombras metálicas. La base suele ser de mayor cobertura para un acabado de "piel de porcelana".

**Resumen:** El maquillaje de noche está diseñado para destacar bajo luces cálidas o intensas de eventos.

**Puntos Clave:**
*   **Pigmentación:** Mayor carga de color en ojos y mejillas.
*   **Brillo:** Uso de iluminadores (Highlighters) en los puntos altos del rostro.
*   **Duración:** El sellado con polvos traslúcidos es obligatorio.`,
            topics: [
              {
                title: 'Glamour Nocturno',
                description: `Aprender a manejar la intensidad del color para eventos de gala.`,
                whatIsItFor: `**Objetivo:** Crear looks impactantes que se mantengan perfectos bajo luces de fiesta.`,
                howToDoIt: `**Logro:** Realiza un degradado de sombras desde un tono dorado en el lagrimal hasta un café oscuro en la V externa.`,
                image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'l2p5',
            title: 'Uso de Correctores y Precisión',
            type: 'document',
            content: `**Introducción:** Corregir no es solo tapar; es equilibrar volúmenes y colores en el rostro.

**Explicación Detallada:** Existen correctores de colores específicos: verde para rojeces, amarillo para ojeras moradas y naranja para manchas oscuras. La aplicación debe ser puntual y difuminada solo en el borde para no quitar la cobertura donde se necesita. Es la técnica maestra para lograr una piel perfecta antes de la base.

**Resumen:** La corrección previa garantiza que la base se vea homogénea y sin manchas de color debajo.

**Puntos Clave:**
*   **Texturas:** Líquidos para ojeras (zona sensible), cremosos para manchas difíciles.
*   **Esponjas:** Usarlas húmedas para un difuminado natural.
*   **Sellado:** Siempre sellar con polvo fino para que el corrector no se meta en las líneas de expresión.`,
            topics: [
              {
                title: 'Neutralización de Imperfecciones',
                description: `Técnicas avanzadas para cubrir acné, manchas de sol u ojeras profundas.`,
                whatIsItFor: `**Objetivo:** Lograr una base de piel perfecta y visualmente lisa.`,
                howToDoIt: `**Ejercicio:** Aplica una mínima cantidad de corrector verde sobre una zona roja y observa cómo el color se neutraliza antes de poner la base.`,
                image: 'https://images.unsplash.com/photo-1596462502278-27bfad450526?auto=format&fit=crop&q=80&w=400'
              }
            ]
          }
        ],
        lessonExam: [
          { id: 'l2q1', type: 'multiple', question: '¿Qué color neutraliza las ojeras moradas?', options: ['Verde', 'Amarillo/Naranja', 'Azul', 'Rojo'], correctAnswer: 1 },
          { id: 'l2q2', type: 'multiple', question: '¿Cuál es el orden correcto de aplicación?', options: ['Polvo antes de la base', 'Base antes del polvo', 'Finalizado antes del primer', 'Sombra después del spray'], correctAnswer: 1 },
          { id: 'l2q3', type: 'multiple', question: '¿Qué es un color complementario?', options: ['El mismo color', 'El opuesto en el círculo cromático', 'Un color más claro', 'Un color pastel'], correctAnswer: 1 },
          { id: 'l2q4', type: 'multiple', question: '¿Para qué sirve el corrector verde?', options: ['Tapar ojeras', 'Neutralizar rojeces o acné', 'Dar luz', 'Maquillar labios'], correctAnswer: 1 },
          { id: 'l2q5', type: 'multiple', question: '¿Qué es el subtono cálido?', options: ['Piel con matices azulados', 'Piel con matices amarillos/dorados', 'Piel muy blanca', 'Piel muy oscura'], correctAnswer: 1 },
          { id: 'l2q6', type: 'multiple', question: '¿Cuál es la función de la base de maquillaje?', options: ['Dar volumen', 'Emparejar el tono de la piel', 'Limpiar el rostro', 'Para que no se vea la nariz'], correctAnswer: 1 },
          { id: 'l2q7', type: 'multiple', question: '¿Qué tipo de base se recomienda para piel grasa?', options: ['Oleosa', 'Matificante libre de aceites', 'En crema hidratante', 'Líquida con mucho brillo'], correctAnswer: 1 },
          { id: 'l2q8', type: 'multiple', question: '¿Cómo se elige el tono de la base?', options: ['Probando en la mano', 'Probando en la mandíbula o cuello', 'Mirando el frasco', 'Por el nombre'], correctAnswer: 1 },
          { id: 'l2q9', type: 'multiple', question: '¿Para qué sirve el rubor (Blush)?', options: ['Para los ojos', 'Dar un aspecto saludable y color a las mejillas', 'Tapar manchas', 'Maquillar la frente'], correctAnswer: 1 },
          { id: 'l2q10', type: 'multiple', question: '¿Qué es un maquillaje monocromático?', options: ['Usar negro solamente', 'Usar tonos de una misma familia de color', 'No usar color', 'Usar todos los colores a la vez'], correctAnswer: 1 }
        ]
      },
      {
        id: 'l3',
        title: 'Lección 3: Maquillaje de Ojos y Pestañas',
        parts: [
          {
            id: 'l3p1',
            title: 'Difuminado Perfecto (Blending)',
            type: 'document',
            content: `**Introducción:** El difuminado es lo que separa a un principiante de un profesional. Un buen maquillaje de ojos no tiene cortes bruscos de color.

**Explicación Detallada:** Se utilizan brochas de pelo suave y suelto (blending brushes). El secreto es el movimiento circular o de "parabrisas" con muy poca presión. Debemos crear una transición suave entre el color de profundidad, el color de transición y el tono de iluminación bajo la ceja.

**Resumen:** El secreto de un maquillaje de ojos impactante no está en los colores que usas, sino en cómo los difuminas.

**Puntos Clave:**
*   **Presión:** Sujeta la brocha desde el extremo del mango para ejercer menos fuerza.
*   **Capas:** Es mejor añadir poco color muchas veces que mucho color de una vez.
*   **Limpieza:** Usa una brocha limpia para difuminar los bordes finales.`,
            topics: [
              {
                title: 'Técnicas de Transición',
                description: `Aprender a crear degradados suaves entre dos o más colores.`,
                whatIsItFor: `**Objetivo:** Lograr un acabado profesional y armonioso en las sombras de ojos.`,
                howToDoIt: `**Instrucción:** Usa un tono café claro como transición antes de aplicar el color oscuro en la cuenca.`,
                image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'l3p2',
            title: 'Eyeliner y Delineados',
            type: 'document',
            content: `**Introducción:** El delineado define la forma del ojo y puede cambiar completamente la expresión de la mirada.

**Explicación Detallada:** Existen delineados líquidos, en gel y en lápiz. El "Cat Eye" (ojo de gato) es el más solicitado y requiere mucha práctica. La clave está en seguir la línea de las pestañas inferiores hacia arriba para marcar la "colita" del delineado. También aprenderemos el delineado esfumado para un look más suave y moderno.

**Resumen:** El delineado es precisión y pulso; dominarlo eleva la calidad de cualquier maquillaje.

**Puntos Clave:**
*   **Simetría:** El reto más grande es que ambos ojos queden iguales.
*   **Pulso:** Apoya el codo en una superficie firme para mayor estabilidad.
*   **Producto:** El gel es más fácil de manejar para principiantes que el líquido.`,
            topics: [
              {
                title: 'Delineado de Precisión',
                description: `Técnicas para realizar líneas finas y colas de delineado perfectas.`,
                whatIsItFor: `**Objetivo:** Definir y estilizar la forma de los ojos del cliente.`,
                howToDoIt: `**Logro:** Realiza un delineado fino que termine en punta limpia usando un pincel de detalle.`,
                image: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'l3p3',
            title: 'Pestañas Postizas y Máscara',
            type: 'document',
            content: `**Introducción:** Las pestañas son el marco final. Pueden abrir el ojo o dar un aspecto seductor.

**Explicación Detallada:** Aprenderemos a aplicar pestañas en tira y pestañas individuales. El pegamento debe secarse unos segundos (estar "mordiente") antes de aplicarlo. Debemos medir la pestaña y cortarla si es necesario para que no moleste el lagrimal. La máscara de pestañas une la natural con la postiza para un acabado integrado.

**Resumen:** Unas pestañas bien puestas transforman el look de "bonito" a "espectacular".

**Puntos Clave:**
*   **Medición:** Cortar siempre desde el extremo externo de la pestaña.
*   **Pegamento:** Usar pegamentos libres de látex para evitar alergias.
*   **Higiene:** Nunca usar la misma pestaña en dos clientes diferentes sin desinfectar profundamente.`,
            topics: [
              {
                title: 'Aplicación de Pestañas en Tira',
                description: `Paso a paso para una colocación segura y cómoda.`,
                whatIsItFor: `**Objetivo:** Potenciar la mirada con volumen y longitud extra.`,
                howToDoIt: `**Instrucción:** Usa una pinza para colocar la pestaña lo más cerca posible de la línea natural.`,
                image: 'https://images.unsplash.com/photo-1583243049093-f06c1df7fbc7?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'l3p4',
            title: 'Diseño de Cejas con Maquillaje',
            type: 'document',
            content: `**Introducción:** Las cejas son el marco del rostro. Unas cejas mal maquilladas pueden arruinar todo el look.

**Explicación Detallada:** El diseño se basa en 3 puntos: inicio (aleta de la nariz), arco (diagonal por la pupila) y final (diagonal por el rabillo del ojo). Usamos pomadas, polvos o lápices para rellenar huecos. El inicio de la ceja debe ser más claro y difuminado para que no se vea una expresión de enojo o artificial.

**Resumen:** Las cejas deben verse definidas pero con un aspecto natural de vello real.

**Puntos Clave:**
*   **Simetría:** Buscar equilibrio respetando la forma natural de la ceja del cliente.
*   **Color:** Usar un tono ligeramente más claro que el cabello natural.
*   **Limpieza:** Usar corrector debajo del arco para dar un efecto de "lifting".`,
            topics: [
              {
                title: 'Visagismo de Cejas',
                description: `Aprender a medir y diseñar las cejas según la forma del rostro.`,
                whatIsItFor: `**Objetivo:** Estructurar el rostro y dar equilibrio a las facciones.`,
                howToDoIt: `**Tarea:** Dibuja pelitos finos en el inicio de la ceja para un efecto de microblading con maquillaje.`,
                image: 'https://images.unsplash.com/photo-1544161515-4af67f54044a?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'l3p5',
            title: 'Smokey Eye y Cut Crease',
            type: 'document',
            content: `**Introducción:** Estas son las técnicas reinas del maquillaje social de fiesta.

**Explicación Detallada:** El **Smokey Eye** (Ojo Ahumado) es un degradado de oscuro a claro sin cortes. El **Cut Crease** implica "cortar" la cuenca con corrector para crear un borde definido y dramático. Ambas requieren paciencia, pinceles limpios y una buena base de sombras (primer de ojos) para que los colores no se mezclen de forma sucia.

**Resumen:** Son técnicas avanzadas que demuestran la destreza del maquillador con el pincel y el color.

**Puntos Clave:**
*   **Base en Crema:** Usar un lápiz negro o sombra en crema como base para el Smokey aumenta la intensidad.
*   **Limpieza:** El Cut Crease requiere un pulso muy firme para trazar la línea del corrector.
*   **Acabado:** Limpiar posibles caídas de sombra bajo el ojo con una toallita al final.`,
            topics: [
              {
                title: 'Técnicas de Impacto',
                description: `Diferencias y ejecución de maquillajes cargados y definidos.`,
                whatIsItFor: `**Objetivo:** Especializarse en maquillajes de alta gama para fotografía y eventos nocturnos.`,
                howToDoIt: `**Ejercicio:** Practica el corte de cuenca con una brocha plana sintética humedecida en corrector.`,
                image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=400'
              }
            ]
          }
        ],
        lessonExam: [
          { id: 'l3q1', type: 'multiple', question: '¿Qué es un Cut Crease?', options: ['Un tipo de labial', 'Corte de cuenca marcado con corrector', 'Limpieza facial', 'Un masaje'], correctAnswer: 1 },
          { id: 'l3q2', type: 'multiple', question: '¿Cuál es la función del rizador de pestañas?', options: ['Pintarlas', 'Curvar las pestañas naturales', 'Alargarlas', 'Quitarlas'], correctAnswer: 1 },
          { id: 'l3q3', type: 'multiple', question: '¿Cómo se debe aplicar la máscara de pestañas?', options: ['Solo en las puntas', 'Desde la raíz en zigzag hasta las puntas', 'Haciendo círculos', 'Con los dedos'], correctAnswer: 1 },
          { id: 'l3q4', type: 'multiple', question: '¿Qué es el "Eyeliner"?', options: ['Una sombra', 'Delineado para definir la línea de las pestañas', 'Un labial', 'Un corrector'], correctAnswer: 1 },
          { id: 'l3q5', type: 'multiple', question: '¿Para qué sirve la sombra de transición?', options: ['Dar color fuerte', 'Ayudar a degradar el color principal con el tono de piel', 'Limpiar el ojo', 'Como base'], correctAnswer: 1 },
          { id: 'l3q6', type: 'multiple', question: '¿Qué es el "lagrimal" en maquillaje?', options: ['Donde se llora', 'Punto de luz en la esquina interna del ojo', 'Párpado móvil', 'Arco de la ceja'], correctAnswer: 1 },
          { id: 'l3q7', type: 'multiple', question: '¿Cuál es el mejor pincel para difuminar?', options: ['Pincel plano rígido', 'Pincel suelto (blending brush)', 'Esponja de labios', 'Un peine'], correctAnswer: 1 },
          { id: 'l3q8', type: 'multiple', question: '¿Qué es una pestaña "pelo a pelo"?', options: ['Pestañas postizas de tira', 'Extensiones aplicadas individualmente sobre la pestaña natural', 'Pestañas magnéticas', 'Mucha máscara'], correctAnswer: 1 },
          { id: 'l3q9', type: 'multiple', question: '¿Para qué sirve el lápiz beige en la línea de agua?', options: ['Cerrar el ojo', 'Abrir la mirada y dar luz', 'Hacerlo ver oscuro', 'Para la nariz'], correctAnswer: 1 },
          { id: 'l3q10', type: 'multiple', question: 'Cómo evitar que la sombra se cuartee:', options: ['Usar agua', 'Aplicar un primer de ojos o corrector antes de la sombra', 'Poner mucha sombra', 'Cerrar los ojos fuerte'], correctAnswer: 1 }
        ]
      },
      {
        id: 'l4',
        title: 'Lección 4: Maquillaje de Novias y Gala',
        parts: [
          {
            id: 'l4p1',
            title: 'Maquillaje de Novias de Larga Duración',
            type: 'document',
            content: `**Introducción:** El maquillaje para novias es uno de los servicios más exigentes. El maquillaje debe sobrevivir a lágrimas de felicidad, abrazos constantes, sudor por el baile y el flash de la fotografía profesional durante más de 12 horas.

**Explicación Detallada:** Se utilizan productos de larga duración y técnicas de capas. El "Sandwich de Fijación" consiste en usar fijador en spray entre cada paso importante. La base debe ser HD para que no tenga "flashback" (que la cara se vea blanca en las fotos). Los tonos suelen ser románticos: duraznos, rosas y champán con un acabado elegante.

**Resumen:** Un maquillaje de novia exitoso es aquel que se ve igual de fresco al inicio de la ceremonia que al final de la fiesta.

**Puntos Clave:**
*   **Hidratación:** Una piel bien hidratada absorbe menos el maquillaje, evitando que se cuartee.
*   **Prueba:** Realizar siempre una prueba 15 días antes.
*   **Kit de Retoque:** Entregar a la novia un pequeño kit con labial y papelitos de brillo.`,
            topics: [
              {
                title: 'Técnicas de Fijación Extrema',
                description: `Aprender el uso de primers, polvos de sellado y fijadores profesionales.`,
                whatIsItFor: `**Objetivo:** Garantizar la durabilidad del maquillaje en eventos sociales de alto impacto.`,
                howToDoIt: `**Instrucción:** Sella la base con polvos traslúcidos mediante toques, nunca barriendo el producto.`,
                image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'l4p2',
            title: 'Visagismo y Contorneo (Contouring)',
            type: 'document',
            content: `**Introducción:** El contorneo usa las luces y sombras para modificar visualmente la estructura del rostro.

**Explicación Detallada:** Aplicamos sombras oscuras en las zonas que queremos "hundir" (pómulos, frente alta, laterales de la nariz) y tonos claros en las que queremos "resaltar". Debemos conocer los tipos de rostro (ovalado, redondo, cuadrado, corazón) para saber dónde aplicar cada tono. Un buen contorneo debe verse como una sombra natural, no como una mancha café.

**Resumen:** El visagismo es la arquitectura del rostro a través del maquillaje.

**Puntos Clave:**
*   **Productos:** Pueden ser en crema (más intenso) o en polvo (más natural).
*   **Difuminado:** Fundamental para que no se vean líneas divisorias.
*   **Nariz:** El contorneo de nariz debe ser milimétrico para no deformarla visualmente.`,
            topics: [
              {
                title: 'Corrección de Facciones',
                description: `Estudio de las proporciones del rostro para crear armonía visual.`,
                whatIsItFor: `**Objetivo:** Disimular imperfecciones estructurales y resaltar los puntos fuertes.`,
                howToDoIt: `**Logro:** Aplica el tono oscuro justo debajo del hueso del pómulo y difumina hacia arriba.`,
                image: 'https://images.unsplash.com/photo-1596462502278-27bfad450526?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'l4p3',
            title: 'Técnica de Iluminación (Strobing)',
            type: 'document',
            content: `**Introducción:** El Strobing es la técnica opuesta al Contouring; se enfoca en resaltar mediante la luz.

**Explicación Detallada:** Consiste en aplicar iluminador en los puntos que captan la luz de forma natural: arco de cupido, puente de la nariz, arco de la ceja y parte alta de los pómulos. Da un aspecto de piel jugosa ("Glowy Skin") que está muy de moda en revistas y redes sociales. No es apto para pieles con mucha textura o acné activo, ya que el brillo resalta los relieves.

**Resumen:** Proporciona un acabado radiante y juvenil a cualquier maquillaje social.

**Puntos Clave:**
*   **Tonos:** Dorado o bronce para pieles cálidas, perlado o rosado para pieles frías.
*   **Textura:** Líquidos para pieles secas, polvos para pieles grasas.
*   **Naturalidad:** El exceso puede hacer que la piel parezca grasosa en lugar de iluminada.`,
            topics: [
              {
                title: 'Piel Jugosa y Radiante',
                description: `Aprender a manejar los diferentes tipos de iluminadores del mercado.`,
                whatIsItFor: `**Objetivo:** Lograr una piel que se vea saludable y llena de vida.`,
                howToDoIt: `**Instrucción:** Usa un pincel de abanico para aplicar el iluminador en polvo de forma ligera.`,
                image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'l4p4',
            title: 'Protocolo y Entrevista con la Novia',
            type: 'document',
            content: `**Introducción:** Ser el maquillador de una novia requiere psicología y orden.

**Explicación Detallada:** La primera reunión debe servir para conocer el estilo del vestido, las flores, el peinado y, sobre todo, la personalidad de la novia. Debemos concretar horarios, lugar del servicio y si habrá otras personas para maquillar. La puntualidad y la calma que transmitas son tan importantes como tu técnica de pincel.

**Resumen:** La gestión de expectativas asegura una novia feliz y un trabajo fluido el día del evento.

**Puntos Clave:**
*   **Contrato:** Siempre firmar un documento con los detalles del servicio.
*   **Prueba de Alergia:** Indispensable al usar productos de larga duración.
*   **Asesoramiento:** Recomendar rutinas de cuidado facial semanas antes del evento.`,
            topics: [
              {
                title: 'Gestión de Servicios de Novia',
                description: `Paso a paso desde la cotización hasta el día de la boda.`,
                whatIsItFor: `**Objetivo:** Profesionalizar el servicio de maquillaje para bodas de alto nivel.`,
                howToDoIt: `**Tarea:** Diseña un cuestionario para novias que incluya tipo de piel, colores preferidos y horario de la ceremonia.`,
                image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'l4p5',
            title: 'Fotografía para Maquilladores',
            type: 'document',
            content: `**Introducción:** Un buen maquillaje debe quedar bien en persona y en foto.

**Explicación Detallada:** Los maquilladores debemos entender cómo afecta la luz a nuestro trabajo. La fotografía digital de alta resolución resalta cada poro. Debemos evitar productos con SPF (protector solar) alto para las fotos con flash, ya que rebotan la luz. Aprenderemos a usar aros de luz y luz natural para capturar nuestro trabajo para el portafolio de Instagram.

**Resumen:** Saber fotografiar tu trabajo es lo que te conseguirá el siguiente cliente en redes sociales.

**Puntos Clave:**
*   **Ángulos:** Buscar el lado que más favorezca al maquillaje.
*   **Iluminación:** Luz blanca frontal para ver los colores reales.
*   **Edición:** Solo para corregir luces, nunca para alterar el maquillaje real.`,
            topics: [
              {
                title: 'Marketing Visual',
                description: `Aprender a capturar la esencia de tus maquillajes con el celular.`,
                whatIsItFor: `**Objetivo:** Crear contenido de calidad para redes sociales que atraiga nuevos clientes.`,
                howToDoIt: `**Logro:** Toma una fotografía macro de un delineado para mostrar la precisión de tu pulso.`,
                image: 'https://images.unsplash.com/photo-1497339100210-9e87df79c218?auto=format&fit=crop&q=80&w=400'
              }
            ]
          }
        ],
        lessonExam: [
          { id: 'l4q1', type: 'multiple', question: '¿Qué es el maquillaje HD?', options: ['Maquillaje de alta definición para cámaras', 'Maquillaje barato', 'Maquillaje de casa', 'No existe'], correctAnswer: 0 },
          { id: 'l4q2', type: 'multiple', question: '¿Cuál es la prioridad en un maquillaje de novia?', options: ['Que sea muy oscuro', 'Que sea elegante, duradero y fotogénico', 'Que sea rápido', 'Usar mucha purpurina'], correctAnswer: 1 },
          { id: 'l4q3', type: 'multiple', question: '¿Qué producto es indispensable para que el labial no se corra?', options: ['Glos', 'Delineador de labios', 'Agua', 'Aceite'], correctAnswer: 1 },
          { id: 'l4q4', type: 'multiple', question: '¿Qué es el "Strobing"?', options: ['Usar muchas sombras oscuras', 'Maquillaje basado en iluminar los puntos de luz únicamente', 'Limpiar el rostro', 'Un tipo de peinado'], correctAnswer: 1 },
          { id: 'l4q5', type: 'multiple', question: '¿Para qué sirve el fijador en spray?', options: ['Lavar el rostro', 'Sellar el maquillaje y evitar que se mueva con el tiempo', 'Dar color', 'Para la ropa'], correctAnswer: 1 },
          { id: 'l4q6', type: 'multiple', question: '¿Cómo se debe ver un maquillaje de ceremonia bajo la luz del sol?', options: ['Con muchas manchas', 'Natural pero bien definido y sin excesos de polvo pesados', 'Como una máscara gruesa', 'No se puede usar'], correctAnswer: 1 },
          { id: 'l4q7', type: 'multiple', question: 'Importancia de la prueba de maquillaje de novia:', options: ['Para cobrar más', 'Asegurar que el look sea el deseado por la clienta y probar alergias', 'No es importante', 'Para pasar el rato'], correctAnswer: 1 },
          { id: 'l4q8', type: 'multiple', question: '¿Qué técnica se usa para ojos caídos?', options: ['Delineado descendente', 'Delineado ascendente (foxy eyes o cat eye)', 'No maquillar', 'Poner mucha sombra negra'], correctAnswer: 1 },
          { id: 'l4q9', type: 'multiple', question: '¿Cuál es el mejor labial para un evento de larga duración?', options: ['Gloss brillante', 'Labial líquido mate de larga duración', 'Vaselina', 'Lápiz de ojos'], correctAnswer: 1 },
          { id: 'l4q10', type: 'multiple', question: 'En un maquillaje de gala, se busca:', options: ['Solo naturalidad', 'Sofisticación, durabilidad y resaltar facciones con técnicas avanzadas', 'Hacer reír', 'Poner colores neón'], correctAnswer: 1 }
        ]
      },
      {
        id: 'l5',
        title: 'Lección 5: Marketing y Emprendimiento',
        parts: [
          {
            id: 'l5p1',
            title: 'Portafolio y Marca Personal',
            type: 'document',
            content: `**Introducción:** Tu portafolio es tu currículum. Nadie te contratará si no puede ver lo que eres capaz de hacer.

**Explicación Detallada:** Debes tener fotos de alta calidad de tus trabajos (antes y después). Diversifica tu portafolio: maquillaje social, editorial, novias, artístico. Define tu estilo propio: ¿eres la reina de los difuminados naturales o del color vibrante? Tu marca personal incluye tu logo, tus colores corporativos y la forma en que te comunicas con tus clientes.

**Resumen:** Un portafolio sólido y una marca coherente te permiten cobrar lo que realmente vale tu trabajo.

**Puntos Clave:**
*   **Calidad sobre Cantidad:** Mejor 5 fotos espectaculares que 20 mediocres.
*   **Diversidad:** Muestra trabajos en diferentes tipos de rostro y edades.
*   **Actualización:** Sube contenido nuevo al menos una vez por semana.`,
            topics: [
              {
                title: 'Construcción de Imagen',
                description: `Cómo presentar tu trabajo de forma que atraiga al cliente ideal.`,
                whatIsItFor: `**Objetivo:** Posicionarte como un profesional serio y capacitado en el mercado.`,
                howToDoIt: `**Instrucción:** Elige tus 3 mejores trabajos y crea una publicación destacada en tu perfil.`,
                image: 'https://images.unsplash.com/photo-1497339100210-9e87df79c218?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'l5p2',
            title: 'Higiene y Desinfección del Kit',
            type: 'document',
            content: `**Introducción:** La salud de tu cliente está en tus manos. La falta de higiene puede causar infecciones graves.

**Explicación Detallada:** Nunca uses el aplicador del labial directamente, usa una paleta de mezcla. Desinfecta tus brochas con sprays de secado rápido entre clientes y lávalas profundamente al final del día. Usa espátulas para sacar productos en crema. El orden en tu maletín da una imagen de profesionalismo y evita contaminaciones cruzadas.

**Resumen:** Un maquillador limpio es un maquillador confiable y recomendado.

**Puntos Clave:**
*   **Alcohol Isopropílico:** Imprescindible para desinfectar sombras y polvos.
*   **Desechables:** Usa cepillos de pestañas (goupillons) desechables.
*   **Manos:** Lavarlas o usar alcohol gel frente al cliente antes de empezar.`,
            topics: [
              {
                title: 'Protocolo de Seguridad Sanitaria',
                description: `Higiene del kit de maquillaje para prevenir enfermedades.`,
                whatIsItFor: `**Objetivo:** Garantizar un servicio seguro que cumpla con las normas de bioseguridad.`,
                howToDoIt: `**Tarea:** Organiza tu maletín por categorías y limpia cada estuche con una toallita desinfectante.`,
                image: 'https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'l5p3',
            title: 'Manejo de Redes Sociales (Instagram/TikTok)',
            type: 'document',
            content: `**Introducción:** Hoy en día, tu Instagram es tu vitrina principal. Debes saber usarla a tu favor.

**Explicación Detallada:** Aprende a usar los Reels para mostrar procesos rápidos de maquillaje. Los tutoriales cortos generan autoridad y confianza. Responde a todos los comentarios y mensajes privados de forma amable y rápida. Usa hashtags locales (#MaquillajeBogota, #MakeupMexico) para que te encuentren clientes cercanos.

**Resumen:** Las redes sociales son herramientas de venta poderosas si se usan con estrategia y constancia.

**Puntos Clave:**
*   **Interacción:** Crea encuestas en tus historias (¿Qué look prefieres?).
*   **Contenido Educativo:** Comparte tips de cuidado de brochas o piel.
*   **Llamado a la Acción:** "Agenda tu cita por DM".`,
            topics: [
              {
                title: 'Estrategia Digital',
                description: `Cómo convertir seguidores en clientes reales de maquillaje.`,
                whatIsItFor: `**Objetivo:** Aumentar tu visibilidad y flujo de trabajo mediante el marketing digital.`,
                howToDoIt: `**Logro:** Graba un video corto limpiando tus brochas y súbelo como un tip de higiene para tus seguidoras.`,
                image: 'https://images.unsplash.com/photo-1497339100210-9e87df79c218?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'l5p4',
            title: 'Presupuestos, Cobros y Finanzas',
            type: 'document',
            content: `**Introducción:** Si no sabes cuánto gastas, no sabes cuánto ganas. El maquillaje es un negocio.

**Explicación Detallada:** Debes calcular el costo de tus materiales por servicio (base, sombras, desechables), tu tiempo, tus traslados y tus capacitaciones. No regales tu trabajo; investiga los precios de mercado y posiciónate según tu experiencia. Aprende a cobrar un anticipo para asegurar la fecha de las citas importantes.

**Resumen:** Una buena gestión financiera te permitirá reinvertir en mejores productos y crecer como profesional.

**Puntos Clave:**
*   **Lista de Precios:** Tenla clara y visible para tus clientes potenciales.
*   **Gastos Hormiga:** Controla lo que gastas en "un labial más" que no necesitas.
*   **Ahorro:** Separa un porcentaje de cada maquillaje para comprar reposiciones.`,
            topics: [
              {
                title: 'Administración del Negocio Beauty',
                description: `Cómo poner precio a tus servicios de forma justa y rentable.`,
                whatIsItFor: `**Objetivo:** Crear un negocio sustentable y económicamente exitoso.`,
                howToDoIt: `**Instrucción:** Crea una hoja de Excel donde anotes todos tus ingresos y egresos del mes.`,
                image: 'https://images.unsplash.com/photo-1497339100210-9e87df79c218?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'l5p5',
            title: 'Servicio VIP y Atención al Cliente',
            type: 'document',
            content: `**Introducción:** Un cliente bien atendido vuelve y te recomienda con 10 personas más.

**Explicación Detallada:** El servicio inicia desde el primer mensaje. Sé puntual, amable y escucha lo que el cliente quiere realmente (a veces piden un look cargado pero en realidad quieren algo natural). Ten detalles VIP: una luz adecuada, una silla cómoda, o un pequeño masaje facial antes de empezar. El post-servicio es clave: pregunta cómo le fue en su evento.

**Resumen:** La excelencia en el trato es lo que garantiza la fidelidad de tu clientela a largo plazo.

**Puntos Clave:**
*   **Escucha Activa:** Entender las inseguridades del cliente para corregirlas con maquillaje.
*   **Puntualidad:** Tu tiempo y el del cliente son sagrados.
*   **Sorpresa:** Un detalle inesperado (ej: muestra de perfume o hidratante) marca la diferencia.`,
            topics: [
              {
                title: 'Fidelización de Clientes',
                description: `Técnicas para que el cliente siempre elija tu pincel sobre otros.`,
                whatIsItFor: `**Objetivo:** Crear una base de datos sólida de clientes recurrentes.`,
                howToDoIt: `**Logro:** Al finalizar el maquillaje, pídele permiso al cliente para tomar una foto y etiquetarlo en tus redes.`,
                image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=400'
              }
            ]
          }
        ],
        lessonExam: [
          { id: 'l5q1', type: 'multiple', question: '¿Para qué sirve el portafolio?', options: ['Para guardar maquillaje', 'Muestra visual de tu trabajo para conseguir clientes', 'Para leer', 'Para dibujar'], correctAnswer: 1 },
          { id: 'l5q2', type: 'multiple', question: '¿Por qué es importante tener redes sociales activas?', options: ['Para perder tiempo', 'Es tu vitrina al mundo para mostrar tu talento y atraer clientes', 'Para jugar', 'No es necesario'], correctAnswer: 1 },
          { id: 'l5q3', type: 'multiple', question: '¿Qué es una marca personal?', options: ['Un tatuaje', 'Tu identidad, estilo y reputación como profesional', 'Un nombre de fantasía', 'El logo solamente'], correctAnswer: 1 },
          { id: 'l5q4', type: 'multiple', question: '¿Cómo se calcula el precio de un servicio?', options: ['A ojo', 'Considerando materiales, tiempo, formación y gastos fijos', 'Mirando lo que cobra el más barato', 'Lo que el cliente quiera pagar'], correctAnswer: 1 },
          { id: 'l5q5', type: 'multiple', question: '¿Qué es el "Kit de higiene"?', options: ['Un jabón', 'Materiales desechables y limpiadores para trabajar de forma segura', 'Un estuche bonito', 'Maquillaje viejo'], correctAnswer: 1 },
          { id: 'l5q6', type: 'multiple', question: 'Importancia de la puntualidad con el cliente:', options: ['No importa', 'Demuestra profesionalismo y respeto por el tiempo ajeno', 'Para que el cliente espere', 'Llegar 30 min tarde es normal'], correctAnswer: 1 },
          { id: 'l5q7', type: 'multiple', question: '¿Qué es un "Workshop" de maquillaje?', options: ['Un taller práctico de aprendizaje', 'Una tienda', 'Un tipo de brocha', 'Una fiesta'], correctAnswer: 0 },
          { id: 'l5q8', type: 'multiple', question: 'La atención al cliente de excelencia ayuda a:', options: ['Nada', 'Fidelizar y que te recomienden', 'Cobrar menos', 'Que no vuelvan'], correctAnswer: 1 },
          { id: 'l5q9', type: 'multiple', question: '¿Cómo debe ser la iluminación para maquillar?', options: ['Luz amarilla de casa', 'Luz blanca potente (similar a luz de día)', 'Luz de velas', 'A oscuras'], correctAnswer: 1 },
          { id: 'l5q10', type: 'multiple', question: 'Ética del maquillador:', options: ['Criticar a otros colegas', 'Mantener honestidad, discreción y alta calidad en el servicio', 'Usar productos vencidos', 'Llegar tarde'], correctAnswer: 1 }
        ]
      }
    ],
    finalExam: [
      { id: 'ffa-f1', type: 'multiple', question: '¿Qué técnica es el "Contouring"?', options: ['Limpieza', 'Uso de luces y sombras para definir el rostro', 'Maquillaje de ojos', 'Poner rubor'], correctAnswer: 1 },
      { id: 'ffa-f2', type: 'multiple', question: '¿Para qué sirve el corrector naranja?', options: ['Para ojeras azulosas', 'Para granitos rojos', 'Para iluminar', 'Para labios'], correctAnswer: 0 },
      { id: 'ffa-f3', type: 'multiple', question: '¿Qué es el "Baking" en maquillaje?', options: ['Cocinar', 'Sellar con polvo translúcido gran cantidad para un acabado liso', 'Usar calor', 'Limpieza profunda'], correctAnswer: 1 },
      { id: 'ffa-f4', type: 'multiple', question: '¿Cuál es la función del sellador en spray?', options: ['Lavar', 'Prolongar la duración del maquillaje', 'Dar color', 'Abrir los poros'], correctAnswer: 1 },
      { id: 'ffa-f5', type: 'multiple', question: '¿Qué es la armonía cromática?', options: ['Uso de cualquier color', 'Combinación equilibrada de colores', 'Maquillaje de noche', 'Uso de pinceles'], correctAnswer: 1 },
      { id: 'ffa-f6', type: 'multiple', question: '¿Para qué sirve el iluminador?', options: ['Tapar manchas', 'Resaltar los puntos altos del rostro', 'Poner sombra', 'Quitar el brillo'], correctAnswer: 1 },
      { id: 'ffa-f7', type: 'multiple', question: '¿Qué es el maquillaje social?', options: ['Maquillaje de teatro', 'Apropiado para eventos de día o noche comunes', 'De payaso', 'De terror'], correctAnswer: 1 },
      { id: 'ffa-f8', type: 'multiple', question: '¿Cómo limpiamos las brochas?', options: ['Nunca se limpian', 'Con agua y jabón neutro o limpiadores específicos', 'Solo sacudiendo', 'Con alcohol puro siempre'], correctAnswer: 1 },
      { id: 'ffa-f9', type: 'multiple', question: '¿Qué es el subtono de piel?', options: ['El color de ojos', 'Color subyacente (frío, cálido o neutro)', 'El color del pelo', 'No existe'], correctAnswer: 1 },
      { id: 'ffa-f10', type: 'multiple', question: 'Importancia del desmaquillado nocturno:', options: ['Para no manchar la almohada', 'Permitir la regeneración celular y evitar obstrucción de poros', 'Por costumbre', 'No es importante'], correctAnswer: 1 }
    ]
  },
  {
    id: 'estilista-belleza',
    title: 'Estilista en Belleza',
    category: 'Belleza',
    description: 'Curso completo de peluquería, colormetría y peinados.',
    longDescription: 'Domina los cortes de tendencia, aplicación de tintes y peinados para toda ocasión.',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800',
    competencies: ['Colorimetría', 'Corte de dama', 'Diseño de peinados', 'Tratamientos capilares'],
    subjects: [
      { name: 'Corte y Estilo', credits: 5 },
      { name: 'Colorimetría', credits: 6 },
      { name: 'Peinados', credits: 4 }
    ],
    lessons: [
      {
        id: 'est-l1',
        title: 'Módulo 1: Colorimetría Avanzada',
        parts: [
          {
            id: 'est-l1p1',
            title: 'El Círculo Cromático',
            type: 'document',
            content: 'Entender el color es vital para cualquier estilista.',
            topics: [
              { title: 'Colores Primarios', description: 'Rojo, Azul y Amarillo.', whatIsItFor: 'Base de toda la mezcla de color.', howToDoIt: 'No se pueden crear, se usan tal cual.', image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=400' },
              { title: 'Colores Complementarios', description: 'Colores opuestos en el círculo.', whatIsItFor: 'Para neutralizar reflejos no deseados.', howToDoIt: 'Usar azul para neutralizar naranja.', image: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&q=80&w=400' }
            ]
          }
        ],
        lessonExam: [
          { id: 'est-q1', type: 'multiple', question: '¿Cuál es el complementario del amarillo?', options: ['Azul', 'Rojo', 'Violeta', 'Verde'], correctAnswer: 2 },
          { id: 'est-q2', type: 'multiple', question: '¿Qué neutraliza el color verde?', options: ['Azul', 'Rojo', 'Amarillo', 'Violeta'], correctAnswer: 1 },
          { id: 'est-q3', type: 'multiple', question: '¿Qué es el pH del cabello?', options: ['Nivel de acidez o alcalinidad', 'La temperatura', 'El grosor', 'El color'], correctAnswer: 0 },
          { id: 'est-q4', type: 'multiple', question: '¿Qué hace un decolorante?', options: ['Añade color', 'Extrae los pigmentos naturales', 'Alisa el pelo', 'Da brillo'], correctAnswer: 1 },
          { id: 'est-q5', type: 'multiple', question: '¿Para qué sirve el peróxido de 20 volúmenes?', options: ['Solo para teñir canas', 'Aclarar 1 a 2 niveles y depósito de color', 'Para lavar', 'Para cortar'], correctAnswer: 1 },
          { id: 'est-q6', type: 'multiple', question: '¿Qué es la porocidad?', options: ['La cantidad de pelo', 'Capacidad del pelo para absorber humedad', 'El color natural', 'La forma del rizo'], correctAnswer: 1 },
          { id: 'est-q7', type: 'multiple', question: '¿Cuál es el color de cabello Nivel 1?', options: ['Rubio', 'Negro', 'Castaño', 'Pelirrojo'], correctAnswer: 1 },
          { id: 'est-q8', type: 'multiple', question: '¿Qué es un matizante?', options: ['Un champú de color', 'Tinte suave para corregir reflejos', 'Un decolorante fuerte', 'Un spray fijador'], correctAnswer: 1 },
          { id: 'est-q9', type: 'multiple', question: '¿Para qué sirve el champú neutro?', options: ['Para rulos', 'Limpiar profundamente sin alterar el pH', 'Dar color', 'Hacer trenzas'], correctAnswer: 1 },
          { id: 'est-q10', type: 'multiple', question: '¿Qué es la cutícula?', options: ['Raíz del pelo', 'Capa externa protectora del cabello', 'El cuero cabelludo', 'La médula'], correctAnswer: 1 }
        ]
      },
      {
        id: 'l2',
        title: 'Módulo 2: Técnicas de Corte y Estilo',
        parts: [
          {
            id: 'l2p1',
            title: 'Cortes Básicos',
            type: 'video',
            content: 'Cortes de cabello para diferentes longitudes.',
            topics: [
              { title: 'Corte Recto', description: 'Técnica de corte a un solo nivel.', whatIsItFor: 'Base para diversos estilos.', howToDoIt: 'Mantener la tensión del cabello y cortar a 0 grados.', image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=400' }
            ]
          }
        ],
        lessonExam: [
          { id: 'l2q1', type: 'multiple', question: '¿Qué es un corte a 90 grados?', options: ['Un corte recto', 'Capa de longitud media', 'Rapado total', 'Solo flequillo'], correctAnswer: 1 },
          { id: 'l2q2', type: 'multiple', question: '¿Para qué sirven las tijeras de entresacar?', options: ['Para cortar el largo', 'Quitar volumen sin perder longitud', 'Para afeitar', 'Para peinar'], correctAnswer: 1 },
          { id: 'l2q3', type: 'multiple', question: '¿Qué es el corte "Solid Form" o recto?', options: ['Pelo muy corto', 'Corte con caída natural a un solo nivel', 'Corte en capas largas', 'Un peinado'], correctAnswer: 1 },
          { id: 'l2q4', type: 'multiple', question: '¿Qué es el ángulo de proyección?', options: ['El brillo del pelo', 'El ángulo en el que se sostiene el cabello para cortar', 'El color de la tijera', 'El calor del secador'], correctAnswer: 1 },
          { id: 'l2q5', type: 'multiple', question: '¿Para qué sirve el corte a navaja?', options: ['Para cortar más rápido', 'Crear texturas suaves y movimiento en las puntas', 'Cortar el cuero cabelludo', 'Solo para hombres'], correctAnswer: 1 },
          { id: 'l2q6', type: 'multiple', question: '¿Qué es la sección "coronilla"?', options: ['La nuca', 'Parte superior y trasera de la cabeza', 'Los laterales', 'El flequillo'], correctAnswer: 1 },
          { id: 'l2q7', type: 'multiple', question: '¿Cómo se debe sostener la tijera?', options: ['Con toda la mano', 'Dedo anular en el ojo fijo y pulgar en el móvil', 'Como un cuchillo', 'Con dos manos'], correctAnswer: 1 },
          { id: 'l2q8', type: 'multiple', question: '¿Qué es un corte "Degrade"?', options: ['Pelo de un solo largo', 'Transición gradual de corto a largo', 'Solo para rulos', 'Corte desprolijo'], correctAnswer: 1 },
          { id: 'l2q9', type: 'multiple', question: '¿Para qué sirve el secado "Blowing"?', options: ['Para mojar el pelo', 'Dar forma, volumen y brillo usando secador y cepillo redondo', 'Para quemar el pelo', 'Para rulos apretados'], correctAnswer: 1 },
          { id: 'l2q10', type: 'multiple', question: '¿Qué es la línea de diseño?', options: ['La marca de la tijera', 'Línea guía que determina el largo del corte', 'Un dibujo en el pelo', 'La raya al medio'], correctAnswer: 1 }
        ]
      },
      {
        id: 'l3',
        title: 'Módulo 3: Peinados y Estilo Gala',
        parts: [
          {
            id: 'l3p1',
            title: 'Recogidos y Moños',
            type: 'video',
            content: 'Peinados para novias y quinceañeras.',
            topics: [
              { title: 'Cardado', description: 'Técnica para dar volumen.', whatIsItFor: 'Estructura interna del peinado.', howToDoIt: 'Peinar en sentido contrario a la raíz.', image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=400' }
            ]
          }
        ],
        lessonExam: [
          { id: 'l3q1', type: 'multiple', question: '¿Para qué sirve la laca?', options: ['Para lavar', 'Fijar el peinado', 'Dar color', 'Cortar'], correctAnswer: 1 },
          { id: 'l3q2', type: 'multiple', question: '¿Qué es un recogido "Italiano" o Twist?', options: ['Una trenza', 'Moño elegante vertical enrollado sobre sí mismo', 'Pelo suelto', 'Un corte'], correctAnswer: 1 },
          { id: 'l3q3', type: 'multiple', question: '¿Qué es una trenza de 3 cabos invertida (Boxer)?', options: ['Trenza normal', 'Trenza que queda por encima (relieve)', 'Una trenza de 2 hilos', 'No es una trenza'], correctAnswer: 1 },
          { id: 'l3q4', type: 'multiple', question: '¿Para qué sirve el champú en seco?', options: ['Para lavar profundamente', 'Refrescar el pelo y dar volumen sin agua', 'Para peinar rulos', 'Para teñir'], correctAnswer: 1 },
          { id: 'l3q5', type: 'multiple', question: '¿Qué es un "Updo"?', options: ['Un corte corto', 'Peinado recogido total o parcial alto', 'Pelo liso hacia abajo', 'Maquillaje'], correctAnswer: 1 },
          { id: 'l3q6', type: 'multiple', question: '¿Cómo se usan los pasadores (horquillas)?', options: ['Para decorar', 'Fijar estructuras internas del peinado sin que se vean', 'Para cortar', 'Para rulos'], correctAnswer: 1 },
          { id: 'l3q7', type: 'multiple', question: '¿Qué es el efecto Wet?', options: ['Pelo seco con frizz', 'Peinado con apariencia de cabello mojado y pulido', 'Cabello rubio', 'Un tipo de corte'], correctAnswer: 1 },
          { id: 'l3q8', type: 'multiple', question: '¿Para qué sirve la cera capilar?', options: ['Para lavar', 'Dar textura, definición y fijación flexible', 'Para rulos suaves', 'Para el cuero cabelludo'], correctAnswer: 1 },
          { id: 'l3q9', type: 'multiple', question: '¿Qué es una onda tipo "Hollywood"?', options: ['Pelo muy rizado', 'Ondas al agua elegantes y marcadas todas al mismo sentido', 'Peinado afro', 'Rastas'], correctAnswer: 1 },
          { id: 'l3q10', type: 'multiple', question: 'Importancia del análisis facial para el peinado:', options: ['Para nada', 'Elegir el estilo que más favorezca las facciones y tipo de evento', 'Para cobrar más', 'Solo por gusto'], correctAnswer: 1 }
        ]
      },
      {
        id: 'l4',
        title: 'Módulo 4: Tratamientos Químicos y Alisados',
        parts: [
          {
            id: 'l4p1',
            title: 'Cirugía Capilar',
            type: 'document',
            content: 'Restauración profunda del cabello.',
            topics: [
              { title: 'Aplicación de Brillo de Seda', description: 'Hidratación con sellado térmico.', whatIsItFor: 'Eliminar el frizz y dar brillo.', howToDoIt: 'Secado y planchado a temperatura controlada.', image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=80&w=400' }
            ]
          }
        ],
        lessonExam: [
          { id: 'l4q1', type: 'multiple', question: '¿Qué precaución tener con la plancha?', options: ['Usarla mojada', 'Controlar la temperatura según el tipo de pelo', 'No usarla', 'Usarla con aceite'], correctAnswer: 1 },
          { id: 'l4q2', type: 'multiple', question: '¿Qué es el Alisado con Formol?', options: ['Tratamiento orgánico', 'Tratamiento químico fuerte que debe usarse con ventilación (altamente regulado)', 'Un baño de crema', 'Un champú'], correctAnswer: 1 },
          { id: 'l4q3', type: 'multiple', question: '¿Para qué sirve un tratamiento de Reconstrucción?', options: ['Dar color', 'Devolver proteínas y fuerza a cabellos muy dañados', 'Para que crezca rápido', 'Para los rulos'], correctAnswer: 1 },
          { id: 'l4q4', type: 'multiple', question: '¿Qué es la neutralización tras un alisado químico?', options: ['No hacer nada', 'Paso que detiene la acción química y fija la nueva forma', 'Lavado con agua', 'Cortar las puntas'], correctAnswer: 1 },
          { id: 'l4q5', type: 'multiple', question: '¿Qué es el Botox Capilar?', options: ['Inyección en la piel', 'Tratamiento intensivo de hidratación y relleno de la fibra capilar', 'Para las arrugas de la frente', 'Tinte sin amoníaco'], correctAnswer: 1 },
          { id: 'l4q6', type: 'multiple', question: '¿Cómo se aplica una ampolla hidratante?', options: ['Como champú', 'Capa por capa tras el lavado, dejar actuar y enjuagar (según producto)', 'En el cuero cabelludo solamente', 'Se bebe'], correctAnswer: 1 },
          { id: 'l4q7', type: 'multiple', question: '¿Qué es un protector térmico?', options: ['Una manta', 'Producto que crea una barrera contra el calor de secadores y planchas', 'Un gorro', 'No sirve'], correctAnswer: 1 },
          { id: 'l4q8', type: 'multiple', question: '¿Por qué se debe lavar el pelo con champú anti-residuos antes de un alisado?', options: ['Para que huela bien', 'Abrir la cutícula y limpiar impurezas para que el producto penetre mejor', 'Para que no se caiga', 'Porque sí'], correctAnswer: 1 },
          { id: 'l4q9', type: 'multiple', question: '¿Qué es el cauterizado?', options: ['Cortar con calor', 'Sellar con calor el tratamiento hidratante dentro de la fibra', 'Pintar las puntas', 'Afeitar'], correctAnswer: 1 },
          { id: 'l4q10', type: 'multiple', question: 'Importancia del diagnóstico capilar:', options: ['Para perder tiempo', 'Evaluar resistencia y salud del pelo antes de aplicar químicos', 'No es necesario', 'Solo con mirar basta'], correctAnswer: 1 }
        ]
      },
      {
        id: 'l5',
        title: 'Módulo 5: Administración de Salón',
        parts: [
          {
            id: 'l5p1',
            title: 'Gestión de Citas',
            type: 'document',
            content: 'Organización del tiempo en la peluquería.',
            topics: [
              { title: 'Costeo de Servicios', description: 'Cómo poner precio a tu trabajo.', whatIsItFor: 'Asegurar la rentabilidad del negocio.', howToDoIt: 'Sumar insumos, tiempo y costos fijos.', image: 'https://images.unsplash.com/photo-1454165833222-d1d4aa8ba2e0?auto=format&fit=crop&q=80&w=400' }
            ]
          }
        ],
        lessonExam: [
          { id: 'l5q1', type: 'multiple', question: '¿Qué es el inventario en salón?', options: ['Control de productos y herramientas', 'Música ambiental', 'Decoración', 'Un tipo de peine'], correctAnswer: 0 },
          { id: 'l5q2', type: 'multiple', question: '¿Cómo se maneja una agenda de citas eficiente?', options: ['Anotar donde sea', 'Organizar tiempos según el servicio y evitar huecos muertos', 'No usar agenda', 'Atender solo por orden de llegada'], correctAnswer: 1 },
          { id: 'l5q3', type: 'multiple', question: '¿Qué es el marketing de referidos?', options: ['Pagar publicidad en TV', 'Clientes que te recomiendan a otros por su buena experiencia', 'No existe', 'Vender champú'], correctAnswer: 1 },
          { id: 'l5q4', type: 'multiple', question: '¿Por qué es vital la higiene del local?', options: ['Para que brille', 'Salud, bioseguridad y buena impresión al cliente', 'Para que el jefe no grite', 'No es importante'], correctAnswer: 1 },
          { id: 'l5q5', type: 'multiple', question: '¿Cuál es el margen de ganancia ideal?', options: ['1%', 'Entre el 20% y 50% tras cubrir todos los gastos', '1000%', 'No importa'], correctAnswer: 1 },
          { id: 'l5q6', type: 'multiple', question: '¿Qué es el "Retail" en el salón?', options: ['Limpiar', 'Venta de productos (champú, geles) a los clientes para uso en casa', 'Hacer rulos', 'Cortar pelo'], correctAnswer: 1 },
          { id: 'l5q7', type: 'multiple', question: '¿Cómo atender una queja de un cliente?', options: ['Ignorarlo', 'Escuchar, pedir disculpas y ofrecer una solución compensatoria', 'Discutir con él', 'Echarlo del local'], correctAnswer: 1 },
          { id: 'l5q8', type: 'multiple', question: '¿Para qué sirven las redes sociales en estética?', options: ['Para chatear', 'Mostrar trabajos (antes y después) y atraer nuevos clientes', 'No sirven', 'Poner fotos de comida'], correctAnswer: 1 },
          { id: 'l5q9', type: 'multiple', question: '¿Importancia de la formación continua?', options: ['Ninguna', 'Actualizarse en nuevas tendencias y técnicas para no quedar obsoleto', 'Para colgar títulos', 'Perder tiempo'], correctAnswer: 1 },
          { id: 'l5q10', type: 'multiple', question: 'Ética del estilista:', options: ['No decir la verdad sobre el daño capilar', 'Integridad, buen consejo al cliente y uso de productos certificados', 'Cobrar más de lo acordado', 'Llegar tarde siempre'], correctAnswer: 1 }
        ]
      }
    ],
    finalExam: [
      { id: 'est-f1', type: 'multiple', question: '¿Qué técnica es el "Balayage"?', options: ['Rapado', 'Barrido de color a mano alzada', 'Tinte total', 'Peinado con moño'], correctAnswer: 1 },
      { id: 'est-f2', type: 'multiple', question: '¿Para qué sirve la Queratina?', options: ['Para teñir', 'Tratamiento de hidratación y alisado progresivo', 'Para cortar', 'Para rulos'], correctAnswer: 1 },
      { id: 'est-f3', type: 'multiple', question: '¿Qué es un corte "Bob"?', options: ['Largo a la cintura', 'Corte a la altura de la mandíbula o cuello', 'Trenzas', 'Calvo'], correctAnswer: 1 },
      { id: 'est-f4', type: 'multiple', question: '¿Cómo sellamos la cutícula tras un químico?', options: ['Con agua caliente', 'Con productos ácidos y agua fría', 'Con calor directo', 'No se sella'], correctAnswer: 1 },
      { id: 'est-f5', type: 'multiple', question: '¿Para qué sirve el difusor?', options: ['Para alisar', 'Para secado de cabellos rizados sin desarmar el rulo', 'Para teñir', 'Para cortar'], correctAnswer: 1 },
      { id: 'est-f6', type: 'multiple', question: '¿Qué es la Elasticidad?', options: ['Capacidad del pelo de estirarse y volver a su forma', 'El color', 'La suciedad', 'El largo'], correctAnswer: 0 },
      { id: 'est-f7', type: 'multiple', question: '¿Cómo tratamos una cana rebelde?', options: ['Con agua oxigenada sola de 20 vol (Pre-suavización)', 'Arrancándola', 'Poniendo más agua', 'Sin teñir'], correctAnswer: 0 },
      { id: 'est-f8', type: 'multiple', question: '¿Qué es la Tricología?', options: ['Ciencia que estudia el cabello', 'Estudio de los pies', 'Maquillaje', 'Diseño de modas'], correctAnswer: 0 },
      { id: 'est-f9', type: 'multiple', question: '¿Para qué sirve el spray fijador?', options: ['Lavar', 'Mantener el peinado en su lugar', 'Dar color', 'Cortar'], correctAnswer: 1 },
      { id: 'est-f10', type: 'multiple', question: '¿Qué es un reflejo cálido?', options: ['Azul', 'Dorado o Cobrizo', 'Ceniza', 'Blanco'], correctAnswer: 1 }
    ]
  },
  {
    id: 'farmacia',
    title: 'Auxiliar en Farmacia',
    category: 'Salud',
    description: 'Gestión de medicamentos y atención en farmacia.',
    longDescription: 'Aprende la clasificación de medicamentos, manejo de inventarios y ética farmacéutica.',
    image: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&q=80&w=800',
    youtubeId: 'pQ_15-fN-G0',
    competencies: ['Clasificación farmacológica', 'Inventario', 'Atención al paciente farmacéutico'],
    subjects: [
      { name: 'Farmacología', credits: 6 },
      { name: 'Atención al Cliente', credits: 3 },
      { name: 'Legislación', credits: 2 }
    ],
    lessons: [
      {
        id: 'far-l1',
        title: 'Módulo 1: Fundamentos de Farmacia',
        parts: [
          {
            id: 'far-l1p1',
            title: 'Clasificación de Medicamentos',
            type: 'document',
            content: 'Entender las familias de fármacos es esencial para el despacho.',
            topics: [
              { title: 'Analgésicos y Antibióticos', description: 'Medicamentos para el dolor e infecciones.', whatIsItFor: 'Aliviar síntomas y combatir bacterias.', howToDoIt: 'Verificar receta médica siempre.', image: 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&q=80&w=400' },
              { title: 'Almacenamiento', description: 'Cadena de frío y control de humedad.', whatIsItFor: 'Mantener la eficacia y seguridad del fármaco.', howToDoIt: 'Seguir las indicaciones del fabricante.', image: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&q=80&w=400' }
            ]
          }
        ],
        lessonExam: [
          { id: 'far-q1', type: 'multiple', question: '¿Qué es un fármaco genérico?', options: ['Uno de mala calidad', 'Mismo principio activo con nombre común', 'Un veneno', 'Un dulce'], correctAnswer: 1 },
          { id: 'far-q2', type: 'multiple', question: '¿Para qué sirve un antibiótico?', options: ['Para virus', 'Para bacterias', 'Para hongos', 'Para dolores'], correctAnswer: 1 },
          { id: 'far-q3', type: 'multiple', question: '¿Qué es el POS?', options: ['Un tipo de medicamento', 'Punto de venta y gestión de inventario', 'Plan de salud', 'Un estante'], correctAnswer: 1 },
          { id: 'far-q4', type: 'multiple', question: '¿Cómo se deben organizar los estantes?', options: ['Por color', 'Por orden alfabético o categoría terapéutica (FIFO)', 'Al azar', 'Los más bonitos adelante'], correctAnswer: 1 },
          { id: 'far-q5', type: 'multiple', question: '¿Qué significa farmacovigilancia?', options: ['Vigilar que no roben', 'Detección de efectos adversos en medicamentos', 'Mirar la fecha', 'Limpiar'], correctAnswer: 1 },
          { id: 'far-q6', type: 'multiple', question: '¿Qué es la dosis?', options: ['El precio', 'Cantidad de medicamento que se administra', 'El tamaño de la caja', 'La marca'], correctAnswer: 1 },
          { id: 'far-q7', type: 'multiple', question: '¿Para qué sirve el prospecto?', options: ['Para envolver', 'Información detallada para el usuario sobre el uso', 'Para publicidad', 'No sirve'], correctAnswer: 1 },
          { id: 'far-q8', type: 'multiple', question: '¿Qué es una receta médica?', options: ['Un consejo', 'Documento legal para adquirir fármacos controlados', 'Una factura', 'Un dibujo'], correctAnswer: 1 },
          { id: 'far-q9', type: 'multiple', question: '¿Qué evitamos con la cadena de frío?', options: ['Calor en el local', 'Degradación de medicamentos sensibles (insulina, vacunas)', 'Que se mojen', 'Mal olor'], correctAnswer: 1 },
          { id: 'far-q10', type: 'multiple', question: 'Ética del auxiliar:', options: ['Recetar medicamentos', 'No prescribir, solo despachar y orientar', 'Cambiar dosis', 'Atender mal'], correctAnswer: 1 }
        ]
      },
      {
        id: 'l2',
        title: 'Módulo 2: Gestión y Dispensación',
        parts: [
          {
            id: 'l2p1',
            title: 'Atención al Público',
            type: 'document',
            content: 'Técnicas de comunicación en la farmacia.',
            topics: [
              { title: 'Escucha Activa', description: 'Entender las necesidades del cliente.', whatIsItFor: 'Brindar el medicamento correcto y consejos de uso.', howToDoIt: 'Mantener contacto visual y no interrumpir.', image: 'https://images.unsplash.com/photo-1576091160550-2173599211d0?auto=format&fit=crop&q=80&w=400' }
            ]
          }
        ],
        lessonExam: [
          { id: 'l2q1', type: 'multiple', question: '¿Qué es la trazabilidad?', options: ['Seguimiento del fármaco desde origen a destino', 'Un error de sistema', 'El color de la caja', 'Un tipo de pastilla'], correctAnswer: 0 },
          { id: 'l2q2', type: 'multiple', question: '¿Qué hacer si un cliente pide una dosis mayor a la prescrita?', options: ['Dársela si paga', 'Negar el despacho y explicar el riesgo', 'Dársela solo si firma', 'Llamar a la policía'], correctAnswer: 1 },
          { id: 'l3q3', type: 'multiple', question: '¿Qué es la dispensación informada?', options: ['Vender y ya', 'Entregar el fármaco explicando dosis, horario y conservación', 'Dar un papel solamente', 'No hablar con el cliente'], correctAnswer: 1 },
          { id: 'l3q4', type: 'multiple', question: '¿Para qué sirve el sistema FIFO (First In, First Out)?', options: ['Vender lo más nuevo primero', 'Vender lo primero en caducar (lo más viejo) para evitar pérdidas', 'No tiene utilidad', 'Para el orden alfabético'], correctAnswer: 1 },
          { id: 'l3q5', type: 'multiple', question: '¿Qué es una reacción alérgica grave?', options: ['Un estornudo', 'Shock anafiláctico (emergencia médica)', 'Ganas de dormir', 'Hambre'], correctAnswer: 1 },
          { id: 'l3q6', type: 'multiple', question: '¿Cómo se debe tratar la información del paciente?', options: ['Contarla a amigos', 'Con absoluta confidencialidad (secreto profesional)', 'Publicarla en redes', 'Ignorarla'], correctAnswer: 1 },
          { id: 'l3q7', type: 'multiple', question: '¿Qué es la adherencia al tratamiento?', options: ['Pegar pastillas', 'Cumplimiento estricto de las indicaciones médicas por parte del paciente', 'Dejar de tomar el fármaco', 'Cambiar de fármaco'], correctAnswer: 1 },
          { id: 'l3q8', type: 'multiple', question: '¿Qué es un error de medicación?', options: ['Un acierto', 'Acontecimiento evitable que puede causar daño por uso inapropiado', 'El precio alto', 'La falta de stock'], correctAnswer: 1 },
          { id: 'l3q9', type: 'multiple', question: '¿Por qué preguntar por otros medicamentos que toma el cliente?', options: ['Por curiosidad', 'Para evitar interacciones medicamentosas peligrosas', 'Para vender más', 'No es necesario'], correctAnswer: 1 },
          { id: 'l3q10', type: 'multiple', question: '¿Qué es la empatía en la atención farmacéutica?', options: ['Ser serio', 'Comprender la situación de salud del cliente y brindar apoyo profesional', 'Regalar dulces', 'Hacer todo rápido'], correctAnswer: 1 }
        ]
      },
      {
        id: 'l3',
        title: 'Módulo 3: Farmacología por Sistemas',
        parts: [
          {
            id: 'l3p1',
            title: 'Medicamentos Digestivos',
            type: 'document',
            content: 'Tratamientos para el tracto digestivo.',
            topics: [
              { title: 'Antiácidos', description: 'Neutralización del ácido gástrico.', whatIsItFor: 'Aliviar acidez y ardor.', howToDoIt: 'Explicar que suelen tomarse tras las comidas.', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=400' }
            ]
          }
        ],
        lessonExam: [
          { id: 'l3q1', type: 'multiple', question: '¿Para qué sirve el Omeprazol?', options: ['Para el dolor de cabeza', 'Protector gástrico', 'Para la tos', 'Antiviral'], correctAnswer: 1 },
          { id: 'l3q2', type: 'multiple', question: '¿Qué es la Hipertensión?', options: ['Baja energía', 'Presión arterial alta constante', 'Dolor de estómago', 'Fiebre'], correctAnswer: 1 },
          { id: 'l3q3', type: 'multiple', question: '¿Para qué sirve un broncodilatador?', options: ['Para los ojos', 'Facilitar la respiración (asma, EPOC)', 'Para la piel', 'Para dormir'], correctAnswer: 1 },
          { id: 'l3q4', type: 'multiple', question: '¿Qué es la Insulina?', options: ['Una vitamina', 'Hormona para controlar el azúcar en sangre (diabetes)', 'Un antibiótico', 'Un hongo'], correctAnswer: 1 },
          { id: 'l3q5', type: 'multiple', question: '¿Qué es un diurético?', options: ['Fármaco que aumenta la eliminación de líquidos/orina', 'Para el estreñimiento', 'Para dar sueño', 'Para la tos'], correctAnswer: 0 },
          { id: 'l3q6', type: 'multiple', question: '¿Para qué sirven los AINEs?', options: ['Solo para dormir', 'Antiinflamatorios No Esteroideos (dolor e inflamación)', 'Para las bacterias', 'Para los virus'], correctAnswer: 1 },
          { id: 'l3q7', type: 'multiple', question: '¿Qué es un fármaco "psicotrópico"?', options: ['Un antibiótico', 'Aquel que actúa sobre el sistema nervioso central (controlados)', 'Un jarabe común', 'Una crema'], correctAnswer: 1 },
          { id: 'l3q8', type: 'multiple', question: '¿Para qué sirve la Amoxicilina?', options: ['Para el dolor', 'Infecciones bacterianas (antibiótico)', 'Para el resfriado común', 'Para quemaduras'], correctAnswer: 1 },
          { id: 'l3q9', type: 'multiple', question: '¿Qué es un antihipertensivo?', options: ['Para subir la presión', 'Para bajar y controlar la presión arterial', 'Para el azúcar', 'Para la vista'], correctAnswer: 1 },
          { id: 'l3q10', type: 'multiple', question: '¿Qué es un expectorante?', options: ['Para el sueño', 'Facilitar la eliminación de flemas y mucosidad', 'Para la piel', 'Para el oído'], correctAnswer: 1 }
        ]
      },
      {
        id: 'l4',
        title: 'Módulo 4: Gestión de Stock y Compras',
        parts: [
          {
            id: 'l4p1',
            title: 'Control de Inventario',
            type: 'document',
            content: 'Evitar el desabastecimiento de medicamentos críticos.',
            topics: [
              { title: 'Punto de Reorden', description: 'Nivel mínimo para pedir mercadería.', whatIsItFor: 'Garantizar disponibilidad.', howToDoIt: 'Revisar ventas diarias y tiempos de entrega.', image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=400' }
            ]
          }
        ],
        lessonExam: [
          { id: 'l4q1', type: 'multiple', question: '¿Qué es un stock de seguridad?', options: ['Reserva para cubrir picos de demanda o retrasos', 'Medicamentos caducados', 'Regalo de farmacia', 'No existe'], correctAnswer: 0 },
          { id: 'l4q2', type: 'multiple', question: '¿Qué es el inventario físico?', options: ['Mirar la PC', 'Contar físicamente cada producto en estantería', 'No contar nada', 'Pedirle al jefe'], correctAnswer: 1 },
          { id: 'l4q3', type: 'multiple', question: '¿Para qué sirve el código de barras en farmacia?', options: ['Para decorar', 'Identificación rápida y automática de productos y precios', 'No se usa', 'Para el color'], correctAnswer: 1 },
          { id: 'l4q4', type: 'multiple', question: '¿Qué es un quiebre de stock?', options: ['Cuando sobra producto', 'Cuando no hay existencia de un medicamento solicitado', 'Un tipo de pastilla', 'Un hongo'], correctAnswer: 1 },
          { id: 'l4q5', type: 'multiple', question: '¿Para qué sirve la recepción de pedidos?', options: ['Para jugar', 'Verificar que lo recibido coincida con la factura y esté en buen estado', 'Para tirar cajas', 'Para el precio'], correctAnswer: 1 },
          { id: 'l4q6', type: 'multiple', question: '¿Qué es la merma?', options: ['Ganancia extra', 'Pérdida de productos por daño, robo o caducidad', 'Un tipo de jarabe', 'No existe'], correctAnswer: 1 },
          { id: 'l4q7', type: 'multiple', question: '¿Cómo influye la humedad en el almacenamiento?', options: ['No influye', 'Puede degradar el fármaco y alterar su efecto', 'Lo hace más fuerte', 'Lo limpia'], correctAnswer: 1 },
          { id: 'l4q8', type: 'multiple', question: '¿Qué es una orden de compra?', options: ['Un regalo', 'Documento formal para solicitar productos al proveedor', 'Una factura de venta', 'Un dibujo'], correctAnswer: 1 },
          { id: 'l4q9', type: 'multiple', question: 'Importancia de rotular los estantes:', options: ['Por estética', 'Facilitar la ubicación rápida de medicamentos y el orden', 'Para nada', 'Para que el jefe vea'], correctAnswer: 1 },
          { id: 'l4q10', type: 'multiple', question: '¿Qué es un proveedor de farmacia?', options: ['El cliente', 'Empresa que suministra los medicamentos (Laboratorio o Distribuidora)', 'El cajero', 'La competencia'], correctAnswer: 1 }
        ]
      },
      {
        id: 'l5',
        title: 'Módulo 5: Legislación Farmacéutica Dominicana',
        parts: [
          {
            id: 'l5p1',
            title: 'Ley General de Salud',
            type: 'document',
            content: 'Marco legal del ejercicio farmacéutico.',
            topics: [
              { title: 'Venta Controlada', description: 'Psicotrópicos y estupefacientes.', whatIsItFor: 'Prevenir el abuso de sustancias.', howToDoIt: 'Retención de receta oficial y registro en libro.', image: 'https://images.unsplash.com/photo-1527368746281-798b65eeac3e?auto=format&fit=crop&q=80&w=400' }
            ]
          }
        ],
        lessonExam: [
          { id: 'l5q1', type: 'multiple', question: '¿Qué ministerio regula las farmacias?', options: ['Ministerio de Educación', 'Ministerio de Salud Pública', 'Ministerio de Trabajo', 'Turismo'], correctAnswer: 1 },
          { id: 'l5q2', type: 'multiple', question: '¿Qué es la Ley 42-01 en República Dominicana?', options: ['Ley de tránsito', 'Ley General de Salud', 'Ley de educación', 'Ley de bancos'], correctAnswer: 1 },
          { id: 'l5q3', type: 'multiple', question: '¿Para qué sirve el regente farmacéutico?', options: ['Para vender', 'Profesional responsable técnico-legal de la farmacia', 'Para limpiar', 'Es el dueño siempre'], correctAnswer: 1 },
          { id: 'l5q4', type: 'multiple', question: '¿Qué es una falta grave en farmacia?', options: ['Llegar tarde', 'Despachar medicamentos controlados sin receta oficial', 'Hablar mucho', 'No usar uniforme'], correctAnswer: 1 },
          { id: 'l5q5', type: 'multiple', question: '¿Qué debe tener un establecimiento farmacéutico para operar?', options: ['Solo dinero', 'Habilitación de Salud Pública vigente', 'Solo música', 'Muchos estantes'], correctAnswer: 1 },
          { id: 'l5q6', type: 'multiple', question: '¿Qué es la receta 80-20?', options: ['Un descuento', 'Un tipo de medicamento', 'Formulario para dispensar psicotrópicos (controlados)', 'No existe'], correctAnswer: 2 },
          { id: 'l5q7', type: 'multiple', question: '¿Para qué sirve el libro de control de estupefacientes?', options: ['Para dibujar', 'Registro legal de entradas y salidas de fármacos controlados', 'Para contabilidad', 'No es necesario'], correctAnswer: 1 },
          { id: 'l5q8', type: 'multiple', question: '¿Quién puede inspeccionar una farmacia?', options: ['Cualquier persona', 'Inspectores autorizados de Salud Pública', 'La competencia', 'El vecino'], correctAnswer: 1 },
          { id: 'l5q9', type: 'multiple', question: '¿Qué es un medicamento prohibido?', options: ['Uno muy caro', 'Aquel cuya venta no es legal por riesgos graves a la salud', 'Un dulce', 'Uno que no tiene caja'], correctAnswer: 1 },
          { id: 'l5q10', type: 'multiple', question: 'Importancia del cumplimiento legal:', options: ['Por miedo', 'Garantizar la seguridad del paciente y evitar sanciones legales graves', 'Para nada', 'Para que el jefe no se enoje'], correctAnswer: 1 }
        ]
      }
    ],
    finalExam: [
      { id: 'far-f1', type: 'multiple', question: '¿Qué es la vía de administración oral?', options: ['Inyectada', 'Por la boca', 'En la piel', 'En el ojo'], correctAnswer: 1 },
      { id: 'far-f2', type: 'multiple', question: '¿Qué es una contraindicación?', options: ['Un beneficio', 'Situación donde un fármaco puede ser dañino', 'El precio', 'La marca'], correctAnswer: 1 },
      { id: 'far-f3', type: 'multiple', question: '¿Para qué sirve la fecha de caducidad?', options: ['Aviso de oferta', 'Garantizar que el fármaco es seguro y estable hasta ese día', 'Indicar el peso', 'Indicar el país'], correctAnswer: 1 },
      { id: 'far-f4', type: 'multiple', question: '¿Qué es un inventario cíclico?', options: ['Contar todo una vez al año', 'Conteo periódico por grupos para exactitud', 'No contar', 'Regalar cosas'], correctAnswer: 1 },
      { id: 'far-f5', type: 'multiple', question: '¿Qué hacer ante una receta ilegible?', options: ['Adivinar', 'Consultar al farmacéutico o médico', 'No atender', 'Cobrar igual'], correctAnswer: 1 },
      { id: 'far-f6', type: 'multiple', question: '¿Qué es el principio activo?', options: ['El color de la pastilla', 'Componente que produce el efecto terapéutico', 'El empaque', 'El azúcar'], correctAnswer: 1 },
      { id: 'far-f7', type: 'multiple', question: '¿Qué es un excipiente?', options: ['El fármaco principal', 'Sustancia inactiva en el fármaco', 'Un virus', 'Un error'], correctAnswer: 1 },
      { id: 'far-f8', type: 'multiple', question: '¿Para qué sirve el lote?', options: ['Para jugar', 'Trazabilidad en caso de fallas de fabricación', 'Para el precio', 'Identificar al cajero'], correctAnswer: 1 },
      { id: 'far-f9', type: 'multiple', question: '¿Qué es la automedicación?', options: ['Ir al médico', 'Consumo de fármacos sin consejo profesional', 'Hacer ejercicio', 'Vender'], correctAnswer: 1 },
      { id: 'far-f10', type: 'multiple', question: '¿Qué es una farmacia comunitaria?', options: ['Farmacia de hospital', 'Farmacia abierta al público en cercanía', 'Un depósito', 'Un laboratorio'], correctAnswer: 1 }
    ]
  },
  {
    id: 'informatica',
    title: 'Informática Básica',
    category: 'Tecnología',
    description: 'Domina el mundo digital desde cero.',
    longDescription: 'Manejo de Windows, Office (Word, Excel, PowerPoint) e Internet de forma profesional.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
    youtubeId: 'yXv7C5e_Ics',
    competencies: ['Microsoft Office', 'Navegación segura', 'Hardware y Software básico'],
    subjects: [
      { name: 'Sistemas Operativos', credits: 4 },
      { name: 'Procesador de Textos', credits: 5 },
      { name: 'Hojas de Cálculo', credits: 6 }
    ],
    lessons: [
      {
        id: 'inf-l1',
        title: 'Módulo 1: Fundamentos de Computación',
        parts: [
          {
            id: 'inf-l1p1',
            title: 'El Cerebro de la PC: CPU y RAM',
            type: 'document',
            content: `**Introducción:** Para entender cómo funciona una computadora, debemos conocer sus dos componentes más críticos: el Microprocesador (CPU) y la Memoria de Acceso Aleatorio (RAM).

**Explicación Detallada:** El **CPU** es el cerebro que ejecuta todos los cálculos y comandos. Imagina que es un chef en una cocina. La **RAM** es la mesa de trabajo del chef; mientras más grande sea la mesa (más RAM), más ingredientes y platos puede manejar al mismo tiempo sin saturarse. Si abres muchos programas y la PC se pone lenta, probablemente te has quedado sin espacio en tu "mesa de trabajo" (RAM).

**Resumen:** Sin procesamiento no hay acción, y sin memoria temporal no hay multitarea eficiente.

**Puntos Clave:**
*   **CPU:** Mide su velocidad en GHz (Gigahercios).
*   **RAM:** Almacena datos temporalmente mientras la PC está encendida.
*   **Multitarea:** Directamente relacionada con la capacidad de la RAM.`,
            topics: [
              {
                title: 'Funcionamiento del CPU',
                description: `El CPU interpreta señales y las convierte en acciones visibles en pantalla.`,
                whatIsItFor: `**Objetivo:** Comprender la importancia del procesador en la velocidad general del sistema.`,
                howToDoIt: `**Instrucción:** Para ver qué CPU tienes, haz clic derecho en "Este equipo" y selecciona "Propiedades".`,
                image: 'https://images.unsplash.com/photo-1591405351990-4726e33df58d?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'inf-l1p2',
            title: 'Almacenamiento: HDD vs SSD',
            type: 'document',
            content: `**Introducción:** Donde guardamos nuestras fotos, documentos y el sistema operativo es vital para la experiencia de usuario.

**Explicación Detallada:** Existen dos tecnologías principales. El **HDD (Disco Duro)** es mecánico y usa platos giratorios; es más barato pero lento y ruidoso. El **SSD (Unidad de Estado Sólido)** es pura electrónica, mucho más rápido (hasta 10 veces más) y resistente. Cambiar un HDD por un SSD es la forma más barata de hacer que una computadora vieja se sienta como nueva.

**Resumen:** El almacenamiento SSD es el estándar moderno por su velocidad superior en el arranque de programas.

**Puntos Clave:**
*   **HDD:** Mayor capacidad por menor precio, pero frágil a golpes.
*   **SSD:** Inicia Windows en segundos en lugar de minutos.
*   **Capacidad:** Se mide en GB (Gigabytes) o TB (Terabytes).`,
            topics: [
              {
                title: 'Elección de Disco',
                description: `Saber diferenciar entre espacio de almacenamiento y velocidad de lectura.`,
                whatIsItFor: `**Objetivo:** Aprender a elegir el almacenamiento adecuado según las necesidades de uso.`,
                howToDoIt: `**Práctica:** Busca en internet la diferencia de tiempo de arranque entre un HDD y un SSD para visualizar la ventaja.`,
                image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'inf-l1p3',
            title: 'Periféricos: Entrada y Salida',
            type: 'document',
            content: `**Introducción:** La computadora necesita interactuar con nosotros a través de dispositivos externos llamados periféricos.

**Explicación Detallada:** Los dispositivos de **Entrada** meten información a la PC (Teclado, Mouse, Micrófono, Escáner). Los de **Salida** sacan la información para que la veamos o escuchemos (Monitor, Impresora, Bocinas). Algunos son **Híbridos**, como las pantallas táctiles o las impresoras multifuncionales que escanean y imprimen.

**Resumen:** Sin periféricos, la computadora sería una caja cerrada sin forma de recibir órdenes ni mostrar resultados.

**Puntos Clave:**
*   **Entrada:** Envían datos al CPU.
*   **Salida:** Reciben datos procesados del CPU.
*   **Conectividad:** La mayoría hoy usa puertos USB.`,
            topics: [
              {
                title: 'Identificación de Dispositivos',
                description: `Clasificar correctamente cada objeto conectado a la torre o laptop.`,
                whatIsItFor: `**Objetivo:** Diferenciar entre los flujos de información que entran y salen del procesador.`,
                howToDoIt: `**Ejercicio:** Haz una lista de 5 dispositivos de tu hogar y clasifícalos como entrada o salida.`,
                image: 'https://images.unsplash.com/photo-1541029071515-84cc54f84dc5?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'inf-l1p4',
            title: 'Placa Base y Fuente de Poder',
            type: 'document',
            content: `**Introducción:** Estos son los componentes que sostienen y alimentan a todos los demás.

**Explicación Detallada:** La **Placa Base (Motherboard)** es el circuito impreso donde se conectan el CPU, la RAM y los discos; es como el sistema nervioso del cuerpo. La **Fuente de Poder** convierte la electricidad de la pared en un voltaje que la PC puede usar sin quemarse. Es crucial que sea de buena calidad para proteger tus componentes de apagones.

**Resumen:** Una placa sólida permite expandir la PC a futuro, y una buena fuente garantiza años de vida útil.

**Puntos Clave:**
*   **Hardware Crítico:** Si falla uno de estos, la PC no enciende.
*   **Conexiones:** Todo cable dentro de la PC sale o llega a la placa.
*   **Voltaje:** La fuente asegura que no haya sobrecargas.`,
            topics: [
              {
                title: 'Conectividad Interna',
                description: `Visualizar cómo se ensambla una computadora de escritorio.`,
                whatIsItFor: `**Objetivo:** Perder el miedo a abrir una PC y reconocer sus partes internas básicas.`,
                howToDoIt: `**Observación:** Mira una imagen de una placa base e intenta localizar los slots largos de la RAM.`,
                image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'inf-l1p5',
            title: 'Mantenimiento Preventivo Básico',
            type: 'document',
            content: `**Introducción:** Cuidar tu equipo evita gastos innecesarios de reparación a largo plazo.

**Explicación Detallada:** El polvo es el peor enemigo. Se acumula en los ventiladores, hace que la PC se caliente y se apague o se ponga lenta. Limpiar el teclado con aire comprimido, no comer cerca de la laptop y mantener el sistema actualizado es "mantenimiento preventivo". El mantenimiento **correctivo** es cuando algo ya se rompió y hay que cambiarlo.

**Resumen:** 15 minutos de limpieza al mes pueden duplicar la vida de tu computadora.

**Puntos Clave:**
*   **Calor:** El enemigo número 1 del hardware.
*   **Limpieza:** Usar aire comprimido y paños antiestáticos.
*   **Actualizaciones:** Protegen tu software contra fallas.`,
            topics: [
              {
                title: 'Rutina de Limpieza',
                description: `Pasos seguros para mantener el equipo impecable por fuera y por dentro.`,
                whatIsItFor: `**Objetivo:** Fomentar el hábito del cuidado de las herramientas de tecnología.`,
                howToDoIt: `**Acción:** Limpia la pantalla de tu monitor con un paño de microfibra seco hoy mismo.`,
                image: 'https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&q=80&w=400'
              }
            ]
          }
        ],
        lessonExam: [
          { id: 'inf-q1', type: 'multiple', question: '¿Cuál es el "cerebro" de la computadora?', options: ['Monitor', 'CPU', 'Mouse', 'Teclado'], correctAnswer: 1 },
          { id: 'inf-q2', type: 'multiple', question: '¿Qué significa RAM?', options: ['Read Access Memory', 'Random Access Memory', 'Rapid Action Module', 'Real Audio Media'], correctAnswer: 1 },
          { id: 'inf-q3', type: 'multiple', question: '¿Cuál es un dispositivo de entrada?', options: ['Monitor', 'Impresora', 'Teclado', 'Bocinas'], correctAnswer: 2 },
          { id: 'inf-q4', type: 'multiple', question: '¿Para qué sirve el mouse?', options: ['Escribir', 'Controlar el puntero', 'Guardar archivos', 'Imprimir'], correctAnswer: 1 },
          { id: 'inf-q5', type: 'multiple', question: '¿Qué es el Disco Duro?', options: ['Memoria temporal', 'Unidad de almacenamiento permanente', 'Un procesador', 'Una pantalla'], correctAnswer: 1 },
          { id: 'inf-q6', type: 'multiple', question: '¿Cuál es un periférico de salida?', options: ['Escaner', 'Micrófono', 'Monitor', 'Teclado'], correctAnswer: 2 },
          { id: 'inf-q7', type: 'multiple', question: '¿Qué es el Software?', options: ['Partes físicas', 'Programas y aplicaciones', 'Cables', 'El monitor'], correctAnswer: 1 },
          { id: 'inf-q8', type: 'multiple', question: '¿Cuál es un sistema operativo?', options: ['Office', 'Windows', 'Chrome', 'Spotify'], correctAnswer: 1 },
          { id: 'inf-q9', type: 'multiple', question: '¿Para qué sirve la placa base?', options: ['Para enfriar', 'Conectar todos los componentes', 'Solo para el video', 'Guardar fotos'], correctAnswer: 1 },
          { id: 'inf-q10', type: 'multiple', question: '¿Qué es un puerto USB?', options: ['Un tipo de monitor', 'Puerto de conexión universal', 'Un sistema operativo', 'Una marca de laptop'], correctAnswer: 1 }
        ]
      },
      {
        id: 'l2',
        title: 'Módulo 2: Ofimática Básica',
        parts: [
          {
            id: 'l2p1',
            title: 'Interfaz de Word y Formatos',
            type: 'document',
            content: `**Introducción:** Microsoft Word es el procesador de textos más usado del mundo. Aprender su interfaz es el primer paso para dominarlo.

**Explicación Detallada:** Al abrir Word, vemos la "Cinta de Opciones" superior. Allí están las pestañas de Inicio (formato de letra), Insertar (tablas e imágenes) y Disposición (márgenes). Podemos cambiar el tipo de letra (Fuente), el tamaño, el color y resaltar partes importantes. El uso de estilos de título permite crear índices automáticos después.

**Resumen:** Dominar la fuente y el tamaño de letra permite que cualquier carta o reporte se vea formal.

**Puntos Clave:**
*   **Fuente:** Tipo de letra (ej. Arial, Times New Roman).
*   **Atajos:** Ctrl+N (Negrita), Ctrl+K (Cursiva), Ctrl+S (Subrayado).
*   **Guardado:** Siempre usa Ctrl+G para no perder avances.`,
            topics: [
              {
                title: 'Barra de Herramientas',
                description: `Conocer dónde está cada comando esencial para escribir rápido.`,
                whatIsItFor: `**Objetivo:** Navegar fluidamente por las pestañas de Microsoft Word sin perderse.`,
                howToDoIt: `**Práctica:** Abre Word y escribe tu nombre completo con 3 fuentes diferentes.`,
                image: 'https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'l2p2',
            title: 'Párrafos, Listas y Alineación',
            type: 'document',
            content: `**Introducción:** Un bloque de texto largo es difícil de leer. El formato de párrafo ayuda a organizar las ideas.

**Explicación Detallada:** Podemos alinear el texto a la izquierda, derecha, centrarlo (para títulos) o justificarlo (para que se vea cuadrado y ordenado). Las **Viñetas** y **Listas numeradas** son perfectas para enumerar pasos o elementos. También podemos ajustar el **Interlineado**, que es el espacio que hay entre una línea y otra.

**Resumen:** Un buen interlineado y alineación justificada son la clave de la legibilidad.

**Puntos Clave:**
*   **Justificado:** Alinea ambos lados del texto.
*   **Viñetas:** Ideales para listas de materiales or ideas.
*   **Sangría:** Espacio al inicio del primer renglón del párrafo.`,
            topics: [
              {
                title: 'Organización de Texto',
                description: `Transformar un texto "sucio" en un documento limpio y fácil de leer.`,
                whatIsItFor: `**Objetivo:** Aplicar formatos de párrafo para estructurar documentos extensos.`,
                howToDoIt: `**Ejercicio:** Crea una lista de mercado usando viñetas de puntos y luego cámbiala a números.`,
                image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'l2p3',
            title: 'Inserción de Imágenes y Tablas',
            type: 'document',
            content: `**Introducción:** Un documento no es solo texto; las tablas y fotos ayudan a visualizar la información.

**Explicación Detallada:** En la pestaña **Insertar**, podemos añadir imágenes desde nuestra PC o desde internet. Al insertar una tabla, podemos elegir cuántas filas y columnas necesitamos. Las tablas son útiles para horarios, listas de precios o comparaciones. Podemos cambiar el color de la tabla para que combine con el resto del diseño.

**Resumen:** Las tablas organizan datos de forma matricial y las imágenes apoyan el mensaje visualmente.

**Puntos Clave:**
*   **Tablas:** Se organizan en Filas (horizontales) y Columnas (verticales).
*   **Imágenes:** Se pueden recortar y ajustar al texto para que no se muevan.
*   **Ajuste de Texto:** Permite poner la imagen "Detrás del texto" o "Cuadrado".`,
            topics: [
              {
                title: 'Elementos Visuales',
                description: `Aprender a manejar objetos dentro de un flujo de texto sin que el documento se desordene.`,
                whatIsItFor: `**Objetivo:** Crear documentos ricos en contenido visual y datos estructurados.`,
                howToDoIt: `**Tarea:** Inserta una tabla de 3x3 y coloca un nombre diferente en cada celda.`,
                image: 'https://images.unsplash.com/photo-1542314831-27909c27702f?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'l2p4',
            title: 'Configuración de Página y Márgenes',
            type: 'document',
            content: `**Introducción:** Antes de imprimir o enviar un archivo, debemos configurar el tamaño "del papel digital".

**Explicación Detallada:** En la pestaña **Disposición**, podemos elegir si la hoja estará en Vertical u Horizontal (Apaisada). También configuramos el tamaño de papel (Carta, Oficio o A4). Los **Márgenes** son los espacios en blanco que rodean el texto; si los pones muy pequeños, corres el riesgo de que la impresora corte el texto al final de la hoja.

**Resumen:** Configurar la página al inicio evita desajustes de formato al final del trabajo.

**Puntos Clave:**
*   **Orientación:** Vertical (estándar) u Horizontal (para tablas anchas).
*   **Tamaño:** Carta es el más común en oficinas.
*   **Saltos de Página:** Permiten pasar forzosamente a la siguiente hoja.`,
            topics: [
              {
                title: 'Diseño de la Hoja',
                description: `Entender el espacio de trabajo para que el documento final coincida con lo impreso.`,
                whatIsItFor: `**Objetivo:** Establecer correctamente las dimensiones físicas del documento.`,
                howToDoIt: `**Práctica:** Cambia la orientación de tu hoja a "Horizontal" y observa cómo cambia el espacio.`,
                image: 'https://images.unsplash.com/photo-1532074205216-d0e1bf0eddc1?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'l2p5',
            title: 'Ortografía, Impresión y PDF',
            type: 'document',
            content: `**Introducción:** El toque final es asegurar que no hay errores y compartir el documento de forma segura.

**Explicación Detallada:** Word tiene un autocorrector que subraya en rojo los errores ortográficos. Siempre revisa la pestaña **Revisar** antes de terminar. Para enviar el archivo a alguien sin que se desordene, lo mejor es **Guardar como PDF**; esto bloquea el formato para que se vea igual en cualquier dispositivo. Finalmente, desde el menú Archivo > Imprimir, puedes configurar cuántas copias necesitas.

**Resumen:** La revisión ortográfica y la exportación a PDF son marcas de un profesional de oficina.

**Puntos Clave:**
*   **Gramática:** Subrayado azul o rojo según el tipo de error.
*   **PDF:** Formato universal no editable que conserva el diseño.
*   **Vista Previa:** Mira cómo se verá antes de gastar papel en la impresora.`,
            topics: [
              {
                title: 'Finalización de Archivo',
                description: `Pasos críticos antes de la entrega final de un trabajo escrito.`,
                whatIsItFor: `**Objetivo:** Entregar documentos impecables y en formatos compatibles.`,
                howToDoIt: `**Logro:** Exporta un documento de prueba a PDF y ábrelo con un navegador web.`,
                image: 'https://images.unsplash.com/photo-1512428559083-a401c338e49e?auto=format&fit=crop&q=80&w=400'
              }
            ]
          }
        ],
        lessonExam: [
          { id: 'l2q1', type: 'multiple', question: '¿Qué es una fuente?', options: ['Un lugar de agua', 'El tipo de letra', 'Un virus', 'Un cable'], correctAnswer: 1 },
          { id: 'l2q2', type: 'multiple', question: '¿Para qué sirve el atajo Ctrl + C?', options: ['Cortar', 'Copiar', 'Pegar', 'Cerrar'], correctAnswer: 1 },
          { id: 'l2q3', type: 'multiple', question: '¿Qué es el atajo Ctrl + V?', options: ['Guardar', 'Pegar lo copiado', 'Imprimir', 'Negrita'], correctAnswer: 1 },
          { id: 'l2q4', type: 'multiple', question: '¿Cómo ponemos un texto en Negrita?', options: ['Ctrl + N', 'Ctrl + B', 'Ctrl + S', 'Alt + F4'], correctAnswer: 0 },
          { id: 'l2q5', type: 'multiple', question: '¿Qué significa el icono de la "disquetera" en Word?', options: ['Borrar', 'Guardar documento', 'Abrir nuevo', 'Imprimir'], correctAnswer: 1 },
          { id: 'l2q6', type: 'multiple', question: '¿Para qué sirve el Interlineado?', options: ['Cambiar el color', 'Espacio vertical entre líneas de texto', 'Espacio entre palabras', 'Número de página'], correctAnswer: 1 },
          { id: 'l2q7', type: 'multiple', question: '¿Cómo se justifica un texto?', options: ['Explicando por qué se escribió', 'Alinear el texto a ambos márgenes (izquierdo y derecho)', 'Ponerlo al centro', 'Borrarlo'], correctAnswer: 1 },
          { id: 'l2q8', type: 'multiple', question: '¿Qué es el encabezado?', options: ['Parte inferior de la página', 'Parte superior que se repite en todas las páginas', 'El título principal solamente', 'Una nota al pie'], correctAnswer: 1 },
          { id: 'l2q9', type: 'multiple', question: '¿Para qué sirve la herramienta "Buscar y Reemplazar"?', options: ['Cambiar el fondo', 'Localizar una palabra y cambiarla por otra automáticamente', 'Para borrar el archivo', 'Para buscar en internet'], correctAnswer: 1 },
          { id: 'l2q10', type: 'multiple', question: '¿En qué pestaña se encuentran los Márgenes?', options: ['Inicio', 'Disposición / Diseño de página', 'Insertar', 'Vista'], correctAnswer: 1 }
        ]
      },
      {
        id: 'l3',
        title: 'Módulo 3: Microsoft Excel - Hojas de Cálculo',
        parts: [
          {
            id: 'l3p1',
            title: 'Interfaz de Excel: Columnas y Filas',
            type: 'document',
            content: `**Introducción:** Excel no es un procesador de texto, es una cuadrícula gigante para manejar datos y cálculos.

**Explicación Detallada:** El área de trabajo se llama "Hoja de Cálculo". Está compuesta por **Columnas** (letras de la A a la Z) y **Filas** (números del 1 al millón). La unión de una columna y una fila es una **Celda** (ej. A1, B10). Puedes escribir texto, números o fechas en cada celda. Un archivo de Excel se llama "Libro" porque puede tener muchas hojas abajo.

**Resumen:** La celda es la unidad mínima de información en Excel y tiene un "nombre" único según su posición.

**Puntos Clave:**
*   **Cuadrícula:** Base de toda la organización de datos.
*   **Nomenclatura:** Siempre letra primero y luego número (ej. C5).
*   **Hojas:** Pestañas en la parte inferior para separar información.`,
            topics: [
              {
                title: 'Navegación en la Hoja',
                description: `Entender cómo moverse por los miles de recuadros de Excel rápidamente.`,
                whatIsItFor: `**Objetivo:** Familiarizarse con la estructura de coordenadas de una hoja de cálculo.`,
                howToDoIt: `**Práctica:** Haz clic en la celda F10 y escribe "Hola Mundo".`,
                image: 'https://images.unsplash.com/photo-1543286386-713bcd534007?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'l3p2',
            title: 'Formatos de Celda: Dinero y Fechas',
            type: 'document',
            content: `**Introducción:** Para que Excel entienda qué hay en la celda, debemos darle un "Formato".

**Explicación Detallada:** Si escribes "100", Excel cree que es solo un número. Si aplicas el formato **Moneda**, le pondrá el signo de $ y los decimales. El formato **Porcentaje** convierte 0.5 en 50%. También existe el formato de **Fecha** y de **Texto**. Esto es vital para que las fórmulas de suma den el resultado correcto y no den error.

**Resumen:** El formato de celda le dice a Excel "cómo ver" el dato que ingresaste.

**Puntos Clave:**
*   **Contabilidad/Moneda:** Para listas de precios y presupuestos.
*   **Decimales:** Puedes aumentar o disminuir los ceros después del punto.
*   **Fecha Corta:** Convierte números en fechas reales calendario.`,
            topics: [
              {
                title: 'Tipos de Datos',
                description: `Saber cuándo aplicar formato de número, texto o moneda según el trabajo.`,
                whatIsItFor: `**Objetivo:** Evitar errores de cálculo aplicando los formatos correctos a la información.`,
                howToDoIt: `**Ejercicio:** Escribe un número y presiona el botón de "$" en la pestaña Inicio.`,
                image: 'https://images.unsplash.com/photo-1554224155-1696413575b9?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'l3p3',
            title: 'Fórmulas Básicas: Suma y Resta',
            type: 'document',
            content: `**Introducción:** La magia de Excel es que calcula solo. Todo empieza con el signo igual (=).

**Explicación Detallada:** Para sumar dos celdas, escribimos \`=A1+A2\`. Si cambias el número en A1, el resultado cambia automáticamente. Las operaciones principales son: **+** (Suma), **-** (Resta), ***** (Multiplicación) y **/** (División). Nunca sumes los números directamente (ej. 5+5), suma las celdas (ej. \`A1+A2\`) para que el archivo sea dinámico.

**Resumen:** El signo igual le avisa a Excel que lo que sigue es una orden matemática.

**Puntos Clave:**
*   **Dinamismo:** El resultado se actualiza solo si cambian los datos.
*   **Operadores:** Signos estándar del teclado numérico.
*   **Orden:** Puedes usar paréntesis para priorizar cálculos (ej. \`=(A1+A2)*B1\`).`,
            topics: [
              {
                title: 'Tu Primera Fórmula',
                description: `Aprender a realizar operaciones matemáticas sencillas que se auto-actualizan.`,
                whatIsItFor: `**Objetivo:** Automatizar cálculos repetitivos de la vida diaria u oficina.`,
                howToDoIt: `**Tarea:** Pon un 10 en A1, un 5 en A2 y escribe en A3: =A1-A2.`,
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'l3p4',
            title: 'Funciones de Estadística: Promedio y Max',
            type: 'document',
            content: `**Introducción:** Una "Función" es una fórmula pre-diseñada por Excel para tareas complejas.

**Explicación Detallada:** \`=SUMA(A1:A50)\` suma 50 celdas de un golpe sin escribir cada una. \`=PROMEDIO(A1:A10)\` te da la nota media de un estudiante. \`=MAX()\` te dice cuál es el número más alto y \`=MIN()\` el más bajo. Estas funciones ahorran horas de trabajo manual en listas de notas o inventarios grandes.

**Resumen:** Las funciones facilitan el análisis de grandes cantidades de datos con palabras simples.

**Puntos Clave:**
*   **Rango:** El uso de los dos puntos (:) significa "desde-hasta" (ej. A1 hasta A10).
*   **Suma Rápida:** Botón "Autosuma" en la esquina superior derecha.
*   **Promedio:** Herramienta esencial para reportes de rendimiento.`,
            topics: [
              {
                title: 'Funciones Poderosas',
                description: `Dominar las palabras clave que activan las herramientas más usadas de Excel.`,
                whatIsItFor: `**Objetivo:** Obtener estadísticas rápidas de una lista de valores numéricos.`,
                howToDoIt: `**Práctica:** Selecciona una columna de números y mira abajo a la derecha: ¡Excel te da el promedio solo!`,
                image: 'https://images.unsplash.com/photo-1551288049-bbbda546697c?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'l3p5',
            title: 'Gráficos y Filtros para Reportes',
            type: 'document',
            content: `**Introducción:** Para presentar datos a un jefe, los gráficos son mejores que miles de números.

**Explicación Detallada:** Si seleccionas una tabla y vas a **Insertar > Gráfico de Barras**, Excel dibujará una comparación visual al instante. Los **Filtros** (icono de embudo) permiten esconder filas que no necesitamos ver en el momento, dejando solo lo que buscamos (ej. "Solo facturas de Enero").

**Resumen:** Los gráficos visualizan tendencias y los filtros permiten buscar datos en segundos.

**Puntos Clave:**
*   **Barras/Pastel:** Los gráficos más comunes para oficina.
*   **Filtrar:** No borra los datos, solo los oculta temporalmente.
*   **Diseño:** Puedes cambiar los colores de los gráficos para que se vean atractivos.`,
            topics: [
              {
                title: 'Visualización de Datos',
                description: `Convertir tablas aburridas en gráficos coloridos y profesionales.`,
                whatIsItFor: `**Objetivo:** Presentar información de forma clara y fácil de entender para terceros.`,
                howToDoIt: `**Logro:** Selecciona dos columnas y crea un gráfico de "Torta" o "Pastel".`,
                image: 'https://images.unsplash.com/photo-1543286386-713bcd534007?auto=format&fit=crop&q=80&w=400'
              }
            ]
          }
        ],
        lessonExam: [
          { id: 'l3q1', type: 'multiple', question: '¿Con qué símbolo empiezan todas las fórmulas en Excel?', options: ['+', '-', '=', '*'], correctAnswer: 2 },
          { id: 'l3q2', type: 'multiple', question: '¿Qué es una Celda?', options: ['Un programa', 'Intersección de una fila y una columna', 'Un virus', 'Una tecla'], correctAnswer: 1 },
          { id: 'l3q3', type: 'multiple', question: '¿Cómo se identifican las Columnas?', options: ['Por números (1, 2, 3)', 'Por letras (A, B, C)', 'Por colores', 'Por nombres de personas'], correctAnswer: 1 },
          { id: 'l3q4', type: 'multiple', question: '¿Para qué sirve la función =SUMA?', options: ['Para restar', 'Para sumar un rango de celdas', 'Para multiplicar', 'Para dividir'], correctAnswer: 1 },
          { id: 'l3q5', type: 'multiple', question: '¿Qué es un Libro en Excel?', options: ['Un manual de instrucciones', 'El archivo que contiene varias hojas de cálculo', 'Una celda especial', 'Una fórmula'], correctAnswer: 1 },
          { id: 'l3q6', type: 'multiple', question: '¿Para qué sirve "Combinar y Centrar"?', options: ['Para sumar', 'Unir varias celdas en una sola y centrar el contenido', 'Para borrar bordes', 'Para ocultar filas'], correctAnswer: 1 },
          { id: 'l3q7', type: 'multiple', question: '¿Qué hace la función =PROMEDIO?', options: ['Suma todo', 'Calcula la media aritmética de un conjunto de valores', 'Cuenta las celdas vacías', 'Busca el valor máximo'], correctAnswer: 1 },
          { id: 'l3q8', type: 'multiple', question: '¿Cómo se identifica una Fila?', options: ['Por letras', 'Por números', 'Por símbolos', 'Por iconos'], correctAnswer: 1 },
          { id: 'l3q9', type: 'multiple', question: '¿Para qué sirven los Filtros en Excel?', options: ['Para limpiar la pantalla', 'Mostrar solo los datos que cumplen ciertos criterios', 'Para cambiar el color de la celda', 'Para proteger el archivo'], correctAnswer: 1 },
          { id: 'l3q10', type: 'multiple', question: '¿Qué es el autorrelleno?', options: ['Que Excel escriba solo tus textos', 'Función para copiar fórmulas o seguir series lógicas arrastrando la celda', 'Llenar la PC de virus', 'Ponerle color a todo'], correctAnswer: 1 }
        ]
      },
      {
        id: 'l4',
        title: 'Módulo 4: Microsoft PowerPoint - Presentaciones',
        parts: [
          {
            id: 'l4p1',
            title: 'PowerPoint: Diapositivas y Diseño',
            type: 'document',
            content: `**Introducción:** PowerPoint es la herramienta de diseño para presentaciones orales por excelencia.

**Explicación Detallada:** Cada "Hacer" en PowerPoint es una **Diapositiva**. No debemos llenarlas de texto; lo ideal es poco texto y una imagen grande. Puedes elegir "Temas" pre-diseñados en la pestaña Diseño para que todas las diapositivas tengan los mismos colores y fuentes automáticamente. Una presentación exitosa es un apoyo visual, no un guion para leer.

**Resumen:** El diseño debe ser limpio y con alto contraste (fondo claro, letra oscura o viceversa).

**Puntos Clave:**
*   **Temas:** Colores y estilos globales del archivo.
*   **Objetos:** Texto, imágenes y formas que movemos libremente.
*   **Regla 6x6:** No más de 6 líneas por diapositiva, no más de 6 palabras por línea.`,
            topics: [
              {
                title: 'Primeros Pasos',
                description: `Crear una estructura lógica para una exposición profesional.`,
                whatIsItFor: `**Objetivo:** Organizar ideas de forma secuencial en láminas digitales.`,
                howToDoIt: `**Práctica:** Elige un tema de diseño en la pestaña correspondiente y crea 3 diapositivas.`,
                image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'l4p2',
            title: 'Multimedia: Imágenes y Videos',
            type: 'document',
            content: `**Introducción:** Una presentación aburrida duerme a la audiencia. El contenido multimedia la hace dinámica.

**Explicación Detallada:** Podemos insertar imágenes desde la PC o buscar fotos profesionales en internet (Unsplash, Pexels). También se pueden insertar videos de YouTube que se reproducen directamente en la diapositiva. Los **Iconos** son geniales para representar ideas (ej. un teléfono para contacto) en lugar de usar muchas palabras.

**Resumen:** El contenido visual ayuda a que el mensaje se recuerde mucho más tiempo.

**Puntos Clave:**
*   **Iconos:** Gráficos simples y modernos.
*   **Videos:** Deben ser cortos para no perder el hilo de la charla.
*   **Calidad:** Siempre usa imágenes que no se vean borrosas (pixeladas).`,
            topics: [
              {
                title: 'Apoyo Visual',
                description: `Encontrar y colocar elementos que refuercen lo que el orador está diciendo.`,
                whatIsItFor: `**Objetivo:** Enriquecer las diapositivas con materiales que capturen el interés.`,
                howToDoIt: `**Ejercicio:** Inserta un icono de "Reloj" y cámbiale el color a azul.`,
                image: 'https://images.unsplash.com/photo-1497339100210-9e87df79c218?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'l4p3',
            title: 'Transiciones entre Diapositivas',
            type: 'document',
            content: `**Introducción:** Las transiciones son los efectos de movimiento al pasar de una hoja a la siguiente.

**Explicación Detallada:** Una transición suave (como "Desvanecer" o "Empuje") da un toque elegante. Hay transiciones muy llamativas como "Transformación" que mueven los objetos de lugar de forma mágica. El error más común es usar transiciones diferentes en cada hoja; lo mejor es elegir una sola para toda la presentación para no distraer.

**Resumen:** El movimiento debe acompañar el cambio de tema, no ser el protagonista.

**Puntos Clave:**
*   **Aplicar a todas:** Botón clave para mantener la consistencia.
*   **Duración:** El tiempo que tarda el efecto en completarse.
*   **Sonido:** Es posible poner sonidos al pasar, pero se recomienda no hacerlo en ambientes serios.`,
            topics: [
              {
                title: 'Movimiento Suave',
                description: `Aprender a conectar las ideas mediante efectos visuales de flujo.`,
                whatIsItFor: `**Objetivo:** Dar fluidez profesional al paso del tiempo en la exposición.`,
                howToDoIt: `**Tarea:** Aplica la transición "Desvanecer" a todas tus diapositivas de prueba.`,
                image: 'https://images.unsplash.com/photo-1542744095-2ad48707b1d7?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'l4p4',
            title: 'Animaciones de Objetos',
            type: 'document',
            content: `**Introducción:** Las animaciones permiten que los puntos de una lista aparezcan uno por uno mientras hablas.

**Explicación Detallada:** Hay tres tipos: **Entrada** (cómo aparece el objeto), **Énfasis** (resaltarlo cuando ya está) y **Salida** (cómo se va). Usar animaciones de entrada "Al hacer clic" es perfecto para que la gente no lea lo que vas a decir antes de que lo digas. Controlas el orden desde el "Panel de Animación".

**Resumen:** Las animaciones dosifican la información para que la audiencia no se abrume.

**Puntos Clave:**
*   **Panel de Animación:** Lista cronológica de todos los movimientos.
*   **Orden:** Puedes reordenar qué aparece primero.
*   **Exceso:** Demasiadas animaciones hacen que la presentación se vea lenta y poco profesional.`,
            topics: [
              {
                title: 'Control de la Atención',
                description: `Aparecer el contenido justo en el momento en que se menciona.`,
                whatIsItFor: `**Objetivo:** Sincronizar el habla con los elementos visuales de la pantalla.`,
                howToDoIt: `**Instrucción:** Ponle animación de "Flotar hacia arriba" a un título de tu presentación.`,
                image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'l4p5',
            title: 'Presentación Final y Notas',
            type: 'document',
            content: `**Introducción:** El momento de la verdad. Cómo proyectar y usar las ayudas del programa.

**Explicación Detallada:** Al presionar **F5**, la presentación ocupa toda la pantalla. Si conectas un proyector, puedes usar la "Vista del Moderador", donde tú ves tus notas de orador y el tiempo, pero la audiencia solo ve la diapositiva grande. Puedes usar el puntero láser digital moviendo el mouse para señalar partes importantes del diseño.

**Resumen:** La preparación técnica antes de empezar da seguridad al expositor.

**Puntos Clave:**
*   **F5:** Inicia desde la primera hoja.
*   **Notas:** Texto secreto que solo tú lees en la laptop mientras expones.
*   **ESC:** Tecla para salir del modo presentación rápidamente.`,
            topics: [
              {
                title: 'Modo Expositor',
                description: `Dominar las herramientas de control durante la charla en vivo.`,
                whatIsItFor: `**Objetivo:** Realizar una exposición fluida apoyado en las herramientas de PowerPoint.`,
                howToDoIt: `**Logro:** Ensayas tu presentación usando el cronómetro interno de PowerPoint.`,
                image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400'
              }
            ]
          }
        ],
        lessonExam: [
          { id: 'l4q1', type: 'multiple', question: '¿Qué es una diapositiva?', options: ['Un error', 'Cada una de las páginas de la presentación', 'Un cable', 'Un disco'], correctAnswer: 1 },
          { id: 'l4q2', type: 'multiple', question: '¿Para qué sirve la tecla F5?', options: ['Guardar', 'Iniciar la presentación desde el principio', 'Borrar diapositiva', 'Cerrar el programa'], correctAnswer: 1 },
          { id: 'l4q3', type: 'multiple', question: '¿Qué es una Transición?', options: ['Un efecto de movimiento entre una diapositiva y otra', 'Un efecto dentro de un objeto', 'Un tipo de fuente', 'Un sonido solamente'], correctAnswer: 0 },
          { id: 'l4q4', type: 'multiple', question: '¿Para qué sirve el Patrón de Diapositivas?', options: ['Para copiar una idea', 'Controlar la apariencia global (logotipos, fuentes) de toda la presentación', 'Para imprimir', 'Para ver fotos'], correctAnswer: 1 },
          { id: 'l4q5', type: 'multiple', question: '¿Qué es el SmartArt?', options: ['Un dibujo a mano', 'Representación visual de información (diagramas, procesos, listas)', 'Un tipo de texto plano', 'Un antivirus'], correctAnswer: 1 },
          { id: 'l4q6', type: 'multiple', question: '¿Cómo se inserta una nueva diapositiva?', options: ['Alt + F4', 'Ctrl + M', 'Esc', 'Ctrl + P'], correctAnswer: 1 },
          { id: 'l4q7', type: 'multiple', question: '¿Qué es una Animación?', options: ['Cualquier dibujo', 'Efecto visual que se aplica a un objeto (texto, imagen) dentro de una diapositiva', 'El cambio de página', 'Un video'], correctAnswer: 1 },
          { id: 'l4q8', type: 'multiple', question: '¿Para qué sirve la pestaña "Insertar"?', options: ['Para borrar diapositivas', 'Añadir imágenes, tablas, formas y otros elementos', 'Para cambiar el color de fondo solamente', 'Para corregir la ortografía'], correctAnswer: 1 },
          { id: 'l4q9', type: 'multiple', question: '¿Qué es el modo Clasificador de Diapositivas?', options: ['Ver una por una en grande', 'Ver miniaturas de todas las diapositivas para organizar el orden', 'Imprimir el archivo', 'Guardar como PDF'], correctAnswer: 1 },
          { id: 'l4q10', type: 'multiple', question: 'Recomendación para una buena presentación:', options: ['Poner mucho texto pequeño', 'Poco texto, ideas claras y buen apoyo visual', 'No usar imágenes', 'Leer todo lo que dice la diapositiva'], correctAnswer: 1 }
        ]
      },
      {
        id: 'l5',
        title: 'Módulo 5: Internet y Navegación Segura',
        parts: [
          {
            id: 'l5p1',
            title: 'Navegadores y Búsquedas Inteligentes',
            type: 'document',
            content: `**Introducción:** Internet es un mar de información; necesitas el barco correcto y un buen mapa para navegar.

**Explicación Detallada:** El **Navegador** (ej. Chrome, Edge) es el programa que abre las páginas. El **Buscador** (ej. Google, Bing) es el sitio que busca dentro de esas páginas. Para buscar mejor, usa comillas "" para frases exactas o el signo "-" para quitar resultados que no quieres (ej. "recetas chocolate -pasteles").

**Resumen:** Saber filtrar la información es la habilidad más valiosa en la era digital.

**Puntos Clave:**
*   **Marcadores:** Guardar tus sitios favoritos para no perderlos.
*   **Historial:** Lista de sitios que ya visitaste.
*   **Pestañas:** Abrir varios sitios a la vez en una sola ventana.`,
            topics: [
              {
                title: 'Navegación Eficaz',
                description: `Moverse por la web con velocidad y criterio para encontrar datos reales.`,
                whatIsItFor: `**Objetivo:** Reducir el tiempo de búsqueda y aumentar la calidad de la información encontrada.`,
                howToDoIt: `**Práctica:** Busca en Google "curso informatica" y luego busca "curso informatica" + "gratis" y nota la diferencia.`,
                image: 'https://images.unsplash.com/photo-1510511459019-5dee1b56fd62?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'l5p2',
            title: 'Correo Electrónico Profesional',
            type: 'document',
            content: `**Introducción:** El e-mail es la carta formal del siglo de hoy. Su uso correcto abre puertas laborales.

**Explicación Detallada:** Un correo profesional debe tener: Un **Asunto** claro (ej. "Entrega de Trabajo - Juan Perez"), un saludo cordial, el cuerpo del mensaje bien escrito y una despedida con tu nombre. Aprende a usar **Adjuntar** (icono de clip) para enviar archivos. Nunca envíes un correo sin asunto, ya que puede irse a la carpeta de Spam automáticamente.

**Resumen:** Tu dirección de correo es tu identidad digital; elígela seria (ej. j.perez@email.com).

**Puntos Clave:**
*   **CC y CCO:** Para enviar copia a varias personas (CCO oculta la lista).
*   **Firma:** Bloque de texto automático al final con tus datos de contacto.
*   **Spam:** Correos basura o peligrosos que debes ignorar.`,
            topics: [
              {
                title: 'Comunicación Digital',
                description: `Dominar el arte de escribir y gestionar mensajes electrónicos oficiales.`,
                whatIsItFor: `**Objetivo:** Comunicarse formalmente con empresas y colegas mediante el e-mail.`,
                howToDoIt: `**Tarea:** Crea un borrador de correo para postularte a un empleo, incluyendo un asunto claro.`,
                image: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'l5p3',
            title: 'La Nube: Google Drive y OneDrive',
            type: 'document',
            content: `**Introducción:** Ya no necesitas memorias USB. Tus archivos están en internet, accesibles desde cualquier lugar.

**Explicación Detallada:** "La Nube" (Cloud) son servidores remotos donde guardas tus documentos. Con servicios como Google Drive, puedes crear una carpeta en tu PC que se sincroniza sola. Esto te protege si tu computadora se rompe o se pierde, ya que tus archivos están seguros en los servidores de la empresa. Además, puedes compartir archivos pesados mediante un simple enlace.

**Resumen:** La nube es seguridad, movilidad y colaboración en tiempo real.

**Puntos Clave:**
*   **Sincronización:** El archivo que editas en el celular se actualiza en la PC.
*   **Compartir:** Enviar archivos sin usar adjuntos pesados en el correo.
*   **Seguridad:** Copias de respaldo automáticas de tus fotos y documentos.`,
            topics: [
              {
                title: 'Almacenamiento Virtual',
                description: `Gestionar archivos fuera de la memoria física de la computadora.`,
                whatIsItFor: `**Objetivo:** Garantizar la disponibilidad de los documentos personales en cualquier dispositivo.`,
                howToDoIt: `**Acción:** Sube una imagen a Drive y comprueba si puedes verla desde tu teléfono móvil.`,
                image: 'https://images.unsplash.com/photo-1544391682-171efec2374b?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'l5p4',
            title: 'Amenazas Digitales y Malware',
            type: 'document',
            content: `**Introducción:** La red no es 100% segura. Hay gente y programas diseñados para robar o dañar.

**Explicación Detallada:** El **Malware** incluye virus (dañan archivos), troyanos (puertas traseras) y spyware (espían tu cámara o teclado). El **Phishing** es un correo que parece de tu banco pidiéndote tu clave; ¡nunca lo hagas! Los bancos nunca piden claves por e-mail. Mantener el Windows Defender o un antivirus activo es tu escudo principal de defensa.

**Resumen:** La mejor defensa es el sentido común: no hagas clic en enlaces sospechosos o premios gratis.

**Puntos Clave:**
*   **Virus:** Programa que se replica y daña el sistema.
*   **Antivirus:** Software que detecta y borra estas amenazas.
*   **Actualizaciones:** Corrigen "huecos" de seguridad por donde entran hackers.`,
            topics: [
              {
                title: 'Seguridad Informática',
                description: `Aprender a detectar comportamientos extraños en la PC y la red.`,
                whatIsItFor: `**Objetivo:** Proteger la integridad del hardware y la privacidad del usuario.`,
                howToDoIt: `**Ejercicio:** Revisa si tu antivirus está activo hoy en la barra de tareas.`,
                image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'l5p5',
            title: 'Privacidad y Contraseñas Seguras',
            type: 'document',
            content: `**Introducción:** Tus cuentas (Facebook, Banco, Correo) son tan seguras como tu contraseña.

**Explicación Detallada:** Una clave como "12345" o "tu fecha de nacimiento" se hackea en segundos. Una clave **Segura** tiene más de 12 caracteres, usa Mayúsculas, Minúsculas, Números y Símbolos (ej. "Gato#Azul$2024"). No uses la misma clave para todo; si hackean un sitio, el hacker probará esa misma clave en tu banco y correo.

**Resumen:** Una buena contraseña es el candado de tu vida digital privada.

**Puntos Clave:**
*   **Complejidad:** Mezcla de diferentes tipos de caracteres.
*   **Unicidad:** Una clave distinta para cada cuenta importante.
*   **Manejo:** Nunca anotes tus claves en un papel pegado al monitor.`,
            topics: [
              {
                title: 'Protección de Identidad',
                description: `Crear barreras de entrada robustas para todas las plataformas digitales.`,
                whatIsItFor: `**Objetivo:** Evitar el acceso no autorizado a información personal y financiera.`,
                howToDoIt: `**Logro:** Cambia una de tus contraseñas débiles por una frase compleja que solo tú sepas.`,
                image: 'https://images.unsplash.com/photo-1510511459019-5dee1b56fd62?auto=format&fit=crop&q=80&w=400'
              }
            ]
          }
        ],
        lessonExam: [
          { id: 'l5q1', type: 'multiple', question: '¿Qué es el Phishing?', options: ['Un tipo de pesca', 'Engaño para robar datos mediante correos falsos', 'Un antivirus', 'Un juego'], correctAnswer: 1 },
          { id: 'l5q2', type: 'multiple', question: '¿Qué significa la "s" en https://?', options: ['Simple', 'Secure (Seguro - indica cifrado de datos)', 'System', 'Search'], correctAnswer: 1 },
          { id: 'l5q3', type: 'multiple', question: '¿Para qué sirve el modo Incógnito?', options: ['Para ser invisible legalmente', 'Navegar sin que se guarde el historial ni cookies en la PC local', 'Para que no me cobren el internet', 'Entrar en sitios prohibidos gratis'], correctAnswer: 1 },
          { id: 'l5q4', type: 'multiple', question: '¿Qué es una Cookie?', options: ['Un virus galleta', 'Archivo pequeño con datos de navegación enviado por un sitio web', 'Un programa espía solamente', 'Un tipo de memoria RAM'], correctAnswer: 1 },
          { id: 'l5q5', type: 'multiple', question: '¿Para qué sirve un cortafuegos (Firewall)?', options: ['Para apagar incendios', 'Bloquear accesos no autorizados a la red', 'Para que la PC no se caliente', 'Para limpiar el navegador'], correctAnswer: 1 },
          { id: 'l5q6', type: 'multiple', question: '¿Qué es la Nube (Cloud Storage)?', options: ['Un dibujo del clima', 'Almacenamiento de archivos en servidores de internet (ej. Google Drive)', 'Un disco duro externo', 'Un tipo de monitor'], correctAnswer: 1 },
          { id: 'l5q7', type: 'multiple', question: '¿Qué es una Red Social?', options: ['Un club de lectura', 'Plataforma digital para conectar e interactuar con personas', 'Un programa de Office', 'Un tipo de cable'], correctAnswer: 1 },
          { id: 'l5q8', type: 'multiple', question: 'Importancia de cerrar sesión en equipos públicos:', options: ['Para que la PC descanse', 'Evitar que otros accedan a tu información personal o cuentas', 'No es necesario', 'Para ahorrar luz'], correctAnswer: 1 },
          { id: 'l5q9', type: 'multiple', question: '¿Qué es un Spam?', options: ['Un virus destructivo', 'Correo electrónico no deseado o publicitario masivo', 'Un tipo de teclado', 'Un buscador'], correctAnswer: 1 },
          { id: 'l5q10', type: 'multiple', question: '¿Qué es un motor de búsqueda?', options: ['Un tipo de auto', 'Sitio web para localizar información en internet (ej. Google)', 'Un antivirus', 'Un programa de Word'], correctAnswer: 1 }
        ]
      }
    ],
    finalExam: [
      { id: 'inf-f1', type: 'multiple', question: '¿Cuál es la función principal de Windows?', options: ['Hacer dibujos', 'Gestionar los recursos del sistema', 'Navegar en internet', 'Solo jugar'], correctAnswer: 1 },
      { id: 'inf-f2', type: 'multiple', question: '¿Qué es una carpeta?', options: ['Un archivo de texto', 'Un contenedor de archivos', 'Un programa de diseño', 'Un virus'], correctAnswer: 1 },
      { id: 'inf-f3', type: 'multiple', question: 'Principal función de Microsoft Word:', options: ['Cálculos matemáticos', 'Procesador de textos', 'Enviar correos', 'Editar videos'], correctAnswer: 1 },
      { id: 'inf-f4', type: 'multiple', question: 'Principal función de Microsoft Excel:', options: ['Escribir cuentos', 'Hojas de cálculo y fórmulas', 'Hacer presentaciones', 'Ver fotos'], correctAnswer: 1 },
      { id: 'inf-f5', type: 'multiple', question: '¿Qué es el Internet?', options: ['Una computadora gigante', 'Red global de computadoras interconectadas', 'Un programa de chat', 'Un cable de luz'], correctAnswer: 1 },
      { id: 'inf-f6', type: 'multiple', question: '¿Para qué sirve un navegador web?', options: ['Para apagar la PC', 'Para visualizar páginas web', 'Para arreglar el CPU', 'Para escribir cartas'], correctAnswer: 1 },
      { id: 'inf-f7', type: 'multiple', question: '¿Qué es el correo electrónico?', options: ['Un juego online', 'Servicio para enviar mensajes digitales', 'Un tipo de procesador', 'Una red social'], correctAnswer: 1 },
      { id: 'inf-f8', type: 'multiple', question: '¿Qué es una red Wi-Fi?', options: ['Conexión inalámbrica a internet', 'Un programa de música', 'Un cable de monitor', 'Un tipo de teclado'], correctAnswer: 0 },
      { id: 'inf-f9', type: 'multiple', question: '¿Qué es un antivirus?', options: ['Un juego de médicos', 'Programa para detectar y eliminar malware', 'Un virus informático', 'Una pieza de hardware'], correctAnswer: 1 },
      { id: 'inf-f10', type: 'multiple', question: '¿Para qué sirve el botón de Reinicio?', options: ['Borrar todo', 'Volver a cargar el sistema operativo', 'Cambiar de fondo', 'Conectar el internet'], correctAnswer: 1 }
    ]
  },
  {
    id: 'ingles',
    title: 'Inglés Básico',
    category: 'Idiomas',
    description: 'Habla inglés desde el primer día.',
    longDescription: 'Gramática básica, conversación cotidiana y vocabulario técnico para el trabajo.',
    image: 'https://images.unsplash.com/photo-1513241901530-9728359f2bd4?auto=format&fit=crop&q=80&w=800',
    youtubeId: 'S-eI-I-mXm8',
    competencies: ['Conversación básica', 'Gramática elemental', 'Comprensión lectora'],
    subjects: [
      { name: 'Gramática I', credits: 5 },
      { name: 'Conversación', credits: 6 },
      { name: 'Lectura', credits: 4 }
    ],
    lessons: [
      {
        id: 'eng-l1',
        title: 'Module 1: Greetings and Introductions',
        parts: [
          { 
            id: 'eng-l1p1', 
            title: 'Greetings and Farewells (Saludos y Despedidas)', 
            type: 'document', 
            content: `**Introduction:** In English, as in any language, the first thing we do when we meet someone is greet them. Depending on the time of day or the level of formality, we use different expressions.

**Detailed Explanation:** We can divide greetings into Formal and Informal. **Formal greetings** are used with bosses, teachers, or people we don't know well (e.g., "Good morning", "Hello"). **Informal greetings** are used with friends or family (e.g., "Hi", "What's up?"). Farewells follow a similar pattern: "Goodbye" (formal) vs. "See ya" (informal).

**Summary:** Knowing how to start and end a conversation is the key to a good first impression.

**Key Vocabulary:**
*   **Good morning:** Buenos días (hasta las 12:00 PM).
*   **Good afternoon:** Buenas tardes (hasta el atardecer).
*   **Good evening:** Buenas noches (saludo al llegar).
*   **Good night:** Buenas noches (despedida al ir a dormir).`,
            topics: [
              {
                title: 'Basic Conversations',
                description: `**Greeting and Asking:** A common sequence is "Hello, how are you?". The standard response is "I am fine, thank you, and you?".`,
                whatIsItFor: `**Learning Objective:** Be able to initiate a basic social interaction using common greetings and farewells according to the context.`,
                howToDoIt: `**Step-by-Step Instructions:**
1.  **Initiate:** Say "Hello" or "Good morning".
2.  **Ask:** "How are you?" or "How is it going?".
3.  **Respond:** "Great", "Good", or "Not bad".
4.  **Close:** "Have a nice day" or "See you later".`,
                image: 'https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'eng-l1p2',
            title: 'The Alphabet and Spelling (El Alfabeto)',
            type: 'document',
            content: `**Introduction:** Learning the alphabet is the foundation of pronunciation and spelling, especially for names and emails in professional settings.

**Detailed Explanation:** While some letters sound similar to Spanish, many have distinct sounds, such as "A" (ei), "E" (i), and "I" (ai). English spelling is not phonetic, meaning letters can sound different depending on the word, but knowing their names helps you communicate clarity when someone asks "How do you spell that?".

**Summary:** Master the alphabet to improve your listening and spelling skills instantly.

**Key Points:**
*   **Vowels:** A (ei), E (i), I (ai), O (ou), U (iu).
*   **Tricky Letters:** G (dji) vs. J (djei), H (eitch), Y (wai).`,
            topics: [
              {
                title: 'Spelling Names',
                description: `**Precision:** In an office or hotel, you will often need to spell names for databases. "My name is John: J-O-H-N".`,
                whatIsItFor: `**Objective:** Be able to spell names and basic words to ensure accuracy in written communication.`,
                howToDoIt: `**Practice:** Look around your room, pick an object (e.g., TABLE), and say the letters one by one out loud: T-A-B-L-E.`,
                image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'eng-l1p3',
            title: 'Subject Pronouns (Pronombres Personales)',
            type: 'document',
            content: `**Introduction:** To build sentences, we need to know who is performing the action. These are the Subject Pronouns.

**Detailed Explanation:** In English, there are 8 main pronouns: I (Yo), You (Tú/Usted), He (Él), She (Ella), It (Eso/Cosa/Animal), We (Nosotros), You (Ustedes/Vosotros), They (Ellos/Ellas). Unlike Spanish, English ALWAYS requires the subject in a sentence. We cannot say "Is happy", we must say "He is happy".

**Summary:** The subject is the "anchor" of every English sentence.

**Key Vocabulary:**
*   **Singular:** I, You, He, She, It.
*   **Plural:** We, You, They.`,
            topics: [
              {
                title: 'Using "IT" correctly',
                description: `**The Neutral Pronoun:** Use "It" for objects, animals (if gender is unknown), weather, and time. "It is raining", "It is 5 o'clock".`,
                whatIsItFor: `**Objective:** Identify and use the correct pronouns to avoid repetition and clarify who is speaking or being spoken about.`,
                howToDoIt: `**Rule of Thumb:** Replace names with pronouns. "Maria is a student" -> "She is a student". "The house is blue" -> "It is blue".`,
                image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'eng-l1p4',
            title: 'Days of the Week and Months',
            type: 'document',
            content: `**Introduction:** Organizing your schedule and making appointments requires knowing the days and months.

**Detailed Explanation:** There are 7 days in a week. All start with capital letters in English. Monday, Tuesday, Wednesday (the "d" is silent!), Thursday, Friday, Saturday, Sunday. The months also start with capital letters: January, February, March, April, May, June, July, August, September, October, November, December.

**Summary:** Precision in dates is essential for professional commitments.

**Key Vocabulary:**
*   **Weekdays:** Monday to Friday.
*   **Weekend:** Saturday and Sunday.`,
            topics: [
              {
                title: 'Booking an Appointment',
                description: `**Time Management:** "Can we meet on Tuesday at 3:00 PM?" or "My birthday is in June".`,
                whatIsItFor: `**Objective:** Learn to name the days and months to schedule events and describe specific dates.`,
                howToDoIt: `**Exercise:** Write down your weekly schedule in English using the correct names for the days.`,
                image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'eng-l1p5',
            title: 'Personal Information and Intros',
            type: 'document',
            content: `**Introduction:** Introducing yourself goes beyond just saying your name.

**Detailed Explanation:** To introduce yourself formally, you use: "My name is...", "I am from...", "I live in...", "I am [age] years old". Note that in English we don't "have" years, we "are" years old. To ask about others: "What is your name?", "Where are you from?".

**Summary:** Be ready to talk about yourself in any situation.

**Key Vocabulary:**
*   **From:** De (origen).
*   **Live in:** Vivir en.
*   **Old:** Viejo/años de edad.`,
            topics: [
              {
                title: 'The "Who am I" exercise',
                description: `**Self-Introduction:** "Hi, I am Carlos. I am from Mexico and I live in Cancun. I am 25 years old. Nice to meet you!".`,
                whatIsItFor: `**Objective:** Provide basic personal information clearly and understand the information provided by others.`,
                howToDoIt: `**Practice:** Draft a 3-sentence introduction about yourself and read it out loud.`,
                image: 'https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&q=80&w=400'
              }
            ]
          }
        ],
        lessonExam: [
          { id: 'eng-q1', type: 'multiple', question: 'How do you say "Hola" in English?', options: ['Bye', 'Hello', 'Thanks', 'Please'], correctAnswer: 1 },
          { id: 'eng-q2', type: 'multiple', question: 'Formal greeting for 10:00 AM:', options: ['Good night', 'Good morning', 'Good afternoon', 'Hi'], correctAnswer: 1 },
          { id: 'eng-q3', type: 'multiple', question: 'How do you respond to "How are you?"', options: ['I am fine, thank you', 'Yes', 'No', 'Goodbye'], correctAnswer: 0 },
          { id: 'eng-q4', type: 'multiple', question: 'What is an informal greeting?', options: ['Good evening', 'Hey', 'Good morning', 'Good day'], correctAnswer: 1 },
          { id: 'eng-q5', type: 'multiple', question: 'How do you say "Adiós"?', options: ['Please', 'Welcome', 'Goodbye', 'Again'], correctAnswer: 2 },
          { id: 'eng-q6', type: 'multiple', question: 'Greeting for 4:00 PM:', options: ['Good morning', 'Good afternoon', 'Good night', 'Hi'], correctAnswer: 1 },
          { id: 'eng-q7', type: 'multiple', question: 'What do you say when you receive something?', options: ['Please', 'Thank you', 'You are welcome', 'Sorry'], correctAnswer: 1 },
          { id: 'eng-q8', type: 'multiple', question: 'Response to "Nice to meet you":', options: ['I am sorry', 'Nice to meet you too', 'Hello', 'What?'], correctAnswer: 1 },
          { id: 'eng-q9', type: 'multiple', question: 'How do you ask for a name?', options: ['What is your name?', 'How are you?', 'Where are you?', 'Who?'], correctAnswer: 0 },
          { id: 'eng-q10', type: 'multiple', question: 'What do you say before leaving at night?', options: ['Good morning', 'Good afternoon', 'Good night', 'Hi'], correctAnswer: 2 }
        ]
      },
      {
        id: 'l2',
        title: 'Module 2: Numbers, Colors and Time',
        parts: [
          {
            id: 'l2p1',
            title: 'Numbers and Counting',
            type: 'video',
            content: 'Counting from 1 to 100.',
            topics: [
              { title: 'Cardinal Numbers', description: 'One, two, three...', whatIsItFor: 'Expressing quantity.', howToDoIt: 'Practice pronunciation daily.', image: 'https://images.unsplash.com/photo-1594818379496-da1e345b0ded?auto=format&fit=crop&q=80&w=400' }
            ]
          }
        ],
        lessonExam: [
          { id: 'l2q1', type: 'multiple', question: 'How do you say "Diez"?', options: ['One', 'Ten', 'Five', 'Twenty'], correctAnswer: 1 },
          { id: 'l2q2', type: 'multiple', question: 'What is the color "Azul"?', options: ['Red', 'Green', 'Blue', 'Yellow'], correctAnswer: 2 },
          { id: 'l2q3', type: 'multiple', question: 'How do you say "Lunes"?', options: ['Monday', 'Tuesday', 'Friday', 'Sunday'], correctAnswer: 0 },
          { id: 'l2q4', type: 'multiple', question: 'Translate: "What time is it?"', options: ['¿Cómo estás?', '¿Qué hora es?', '¿Dónde vives?', '¿Quién eres?'], correctAnswer: 1 },
          { id: 'l2q5', type: 'multiple', question: 'How do you say "Cinco"?', options: ['Two', 'Four', 'Five', 'Six'], correctAnswer: 2 },
          { id: 'l2q6', type: 'multiple', question: 'The color of grass is...', options: ['Blue', 'Red', 'Green', 'Orange'], correctAnswer: 2 },
          { id: 'l2q7', type: 'multiple', question: 'Day after Tuesday:', options: ['Monday', 'Wednesday', 'Thursday', 'Saturday'], correctAnswer: 1 },
          { id: 'l2q8', type: 'multiple', question: 'How do you say "Cien"?', options: ['Ten', 'Fifty', 'One hundred', 'Thousand'], correctAnswer: 2 },
          { id: 'l2q9', type: 'multiple', question: 'The color of a banana is...', options: ['Purple', 'Pink', 'Yellow', 'Black'], correctAnswer: 2 },
          { id: 'l2q10', type: 'multiple', question: 'Translate: "It is seven o\'clock"', options: ['Son las seis', 'Son las siete', 'Son las ocho', 'Son las nueve'], correctAnswer: 1 }
        ]
      },
      {
        id: 'l3',
        title: 'Module 3: Family and Personal Information',
        parts: [
          {
            id: 'l3p1',
            title: 'Family Members',
            type: 'document',
            content: 'Identifying relatives in English.',
            topics: [
              { title: 'The Nuclear Family', description: 'Mother, father, brother, sister.', whatIsItFor: 'Talking about your background.', howToDoIt: 'Practice with a family tree.', image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=400' }
            ]
          }
        ],
        lessonExam: [
          { id: 'l3q1', type: 'multiple', question: 'Who is "Madre" in English?', options: ['Father', 'Mother', 'Brother', 'Grandpa'], correctAnswer: 1 },
          { id: 'l3q2', type: 'multiple', question: 'Who is "Hermano" in English?', options: ['Sister', 'Cousin', 'Brother', 'Uncle'], correctAnswer: 2 },
          { id: 'l3q3', type: 'multiple', question: 'Who is "Hijo" in English?', options: ['Daughter', 'Son', 'Baby', 'Father'], correctAnswer: 1 },
          { id: 'l3q4', type: 'multiple', question: 'Translate: "Where are you from?"', options: ['¿Cómo te llamas?', '¿De dónde eres?', '¿Qué haces?', '¿A dónde vas?'], correctAnswer: 1 },
          { id: 'l3q5', type: 'multiple', question: 'How do you say "Tío"?', options: ['Aunt', 'Uncle', 'Nephew', 'Cousin'], correctAnswer: 1 },
          { id: 'l3q6', type: 'multiple', question: 'Translate: "I am a student"', options: ['Soy profesor', 'Soy estudiante', 'Soy doctor', 'Soy bombero'], correctAnswer: 1 },
          { id: 'l3q7', type: 'multiple', question: 'Who is "Abuela" in English?', options: ['Grandfather', 'Grandmother', 'Mother', 'Aunt'], correctAnswer: 1 },
          { id: 'l3q8', type: 'multiple', question: 'Translate: "How old are you?"', options: ['¿Cómo estás?', '¿Cuántos años tienes?', '¿Qué haces?', '¿Dónde estás?'], correctAnswer: 1 },
          { id: 'l3q9', type: 'multiple', question: 'How do you say "Soltero" (Not married)?', options: ['Married', 'Single', 'Divorced', 'Friend'], correctAnswer: 1 },
          { id: 'l3q10', type: 'multiple', question: 'Translate: "My name is Peter"', options: ['Me llamo Pedro', 'Su nombre es Pedro', 'Yo soy Pedro solamente', 'Pedro vive aquí'], correctAnswer: 0 }
        ]
      },
      {
        id: 'l4',
        title: 'Module 4: Daily Routine and Verbs',
        parts: [
          {
            id: 'l4p1',
            title: 'Common Actions',
            type: 'video',
            content: 'Talking about what you do every day.',
            topics: [
              { title: 'Present Simple', description: 'I eat, I work, I sleep.', whatIsItFor: 'Describing habits.', howToDoIt: 'Use the base form of the verb.', image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=400' }
            ]
          }
        ],
        lessonExam: [
          { id: 'l4q1', type: 'multiple', question: 'What is "Comer" in English?', options: ['Drink', 'Eat', 'Run', 'Sleep'], correctAnswer: 1 },
          { id: 'l4q2', type: 'multiple', question: 'What is "Trabajar" in English?', options: ['Work', 'Play', 'Read', 'Write'], correctAnswer: 0 },
          { id: 'l4q3', type: 'multiple', question: 'Correct sentence (Present):', options: ['I eats breakfast', 'I eat breakfast', 'I eating breakfast', 'I eaten breakfast'], correctAnswer: 1 },
          { id: 'l4q4', type: 'multiple', question: 'Translate: "I wash my hands"', options: ['Lavo mi cara', 'Lavo mis manos', 'Lavo mi ropa', 'Lavo el auto'], correctAnswer: 1 },
          { id: 'l4q5', type: 'multiple', question: 'What is "Estudiar" in English?', options: ['Speak', 'Listen', 'Study', 'Teach'], correctAnswer: 2 },
          { id: 'l4q6', type: 'multiple', question: 'Translate: "She works a lot"', options: ['Ella trabaja mucho', 'Él trabaja mucho', 'Nosotros trabajamos mucho', 'Ustedes trabajan'], correctAnswer: 0 },
          { id: 'l4q7', type: 'multiple', question: 'What is "Dormir" in English?', options: ['Wake up', 'Sleep', 'Rest', 'Dream'], correctAnswer: 1 },
          { id: 'l4q8', type: 'multiple', question: 'Translate: "I go to school"', options: ['Voy al parque', 'Voy a la escuela', 'Voy al trabajo', 'Voy a casa'], correctAnswer: 1 },
          { id: 'l4q9', type: 'multiple', question: 'What is the action "Caminar"?', options: ['Jump', 'Run', 'Walk', 'Climb'], correctAnswer: 2 },
          { id: 'l4q10', type: 'multiple', question: 'Translate: "They play soccer"', options: ['Ellos juegan béisbol', 'Ellos juegan fútbol', 'Nosotros jugamos fútbol', 'Él juega fútbol'], correctAnswer: 1 }
        ]
      },
      {
        id: 'l5',
        title: 'Module 5: Directions and Places',
        parts: [
          {
            id: 'l5p1',
            title: 'Asking for Directions',
            type: 'video',
            content: 'Navigating through a city.',
            topics: [
              { title: 'Prepositions of Place', description: 'In, on, under, next to.', whatIsItFor: 'Giving and receiving location info.', howToDoIt: 'Identify landmards and use turn left/right.', image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=400' }
            ]
          }
        ],
        lessonExam: [
          { id: 'l5q1', type: 'multiple', question: 'What does "Turn left" mean?', options: ['Doblar a la derecha', 'Doblar a la izquierda', 'Seguir derecho', 'Parar'], correctAnswer: 1 },
          { id: 'l5q2', type: 'multiple', question: 'Translate: "Where is the bank?"', options: ['¿Dónde está el baño?', '¿Dónde está el banco?', '¿Dónde está el parque?', '¿Dónde está la escuela?'], correctAnswer: 1 },
          { id: 'l5q3', type: 'multiple', question: 'How do you say "Derecha" in English?', options: ['Left', 'Right', 'Straight', 'Back'], correctAnswer: 1 },
          { id: 'l5q4', type: 'multiple', question: 'Translate: "I am at the supermarket"', options: ['Estoy en la farmacia', 'Estoy en el supermercado', 'Estoy en el hospital', 'Estoy en el cine'], correctAnswer: 1 },
          { id: 'l5q5', type: 'multiple', question: 'What is "Calle" in English?', options: ['Road', 'Street', 'Avenue', 'Way'], correctAnswer: 1 },
          { id: 'l5q6', type: 'multiple', question: 'Translate: "The park is next to the school"', options: ['El parque está lejos de la escuela', 'El parque está al lado de la escuela', 'El parque está en la escuela', 'No hay parque'], correctAnswer: 1 },
          { id: 'l5q7', type: 'multiple', question: 'What is "Ciudad" in English?', options: ['Town', 'City', 'Country', 'Village'], correctAnswer: 1 },
          { id: 'l5q8', type: 'multiple', question: 'Translate: "Go straight"', options: ['Doble a la izquierda', 'Siga derecho', 'Pare aquí', 'Vuelva pronto'], correctAnswer: 1 },
          { id: 'l5q9', type: 'multiple', question: 'What is "Cerca" in English?', options: ['Far', 'Near', 'Behind', 'Inside'], correctAnswer: 1 },
          { id: 'l5q10', type: 'multiple', question: 'Translate: "Excuse me, I am lost"', options: ['Perdón, estoy ocupado', 'Disculpe, estoy perdido', 'Hola, estoy aquí', 'Adiós, me voy'], correctAnswer: 1 }
        ]
      }
    ],
    finalExam: [
      { id: 'eng-f1', type: 'multiple', question: 'Which is a pronoun?', options: ['Book', 'Table', 'He', 'Blue'], correctAnswer: 2 },
      { id: 'eng-f2', type: 'multiple', question: 'Correct sentence:', options: ['I is happy', 'I am happy', 'I are happy', 'I be happy'], correctAnswer: 1 },
      { id: 'eng-f3', type: 'multiple', question: 'What is the color "Rojo"?', options: ['Red', 'Blue', 'Green', 'Yellow'], correctAnswer: 0 },
      { id: 'eng-f4', type: 'multiple', question: 'How do you say "Manzana"?', options: ['Orange', 'Banana', 'Apple', 'Grape'], correctAnswer: 2 },
      { id: 'eng-f5', type: 'multiple', question: 'Question for age:', options: ['How old are you?', 'Who are you?', 'What?', 'Where?'], correctAnswer: 0 },
      { id: 'eng-f6', type: 'multiple', question: 'The plural of "Cat":', options: ['Caties', 'Cats', 'Catos', 'Cates'], correctAnswer: 1 },
      { id: 'eng-f7', type: 'multiple', question: 'Action of "Correr":', options: ['Walk', 'Sleep', 'Run', 'Eat'], correctAnswer: 2 },
      { id: 'eng-f8', type: 'multiple', question: 'Opposite of "Hot":', options: ['Warm', 'Cold', 'Burn', 'Sun'], correctAnswer: 1 },
      { id: 'eng-f9', type: 'multiple', question: 'Day after Monday:', options: ['Wednesday', 'Tuesday', 'Sunday', 'Friday'], correctAnswer: 1 },
      { id: 'eng-f10', type: 'multiple', question: 'In my "House", I live in a...', options: ['Bank', 'Park', 'Home', 'Store'], correctAnswer: 2 }
    ]
  },
  {
    id: 'cajero-bancario',
    title: 'Cajero Bancario Computarizado',
    category: 'Finanzas',
    description: 'Especialízate en el área operativa de la banca.',
    longDescription: 'Manejo de efectivo, detección de billetes falsos y software bancario especializado.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800',
    competencies: ['Conteo de efectivo', 'Detección de moneda falsa', 'Atención en ventanilla'],
    subjects: [
      { name: 'Operaciones Bancarias', credits: 6 },
      { name: 'Contabilidad Básica', credits: 4 },
      { name: 'Ética y Valores', credits: 2 }
    ],
    lessons: [
      {
        id: 'caj-l1',
        title: 'Módulo 1: Operaciones en Caja y Seguridad',
        parts: [
          {
            id: 'caj-l1p1',
            title: 'Manejo de Efectivo: El Arte del Conteo',
            type: 'document',
            content: `**Introducción:** El efectivo es la materia prima del cajero bancario. Su manejo requiere una combinación de agilidad mental, destreza manual y una concentración absoluta para garantizar que cada centavo esté donde debe estar.

**Explicación Detallada:** El conteo de efectivo no es solo pasar billetes de una mano a otra. Implica técnicas estandarizadas como el "Abanico" o el conteo "Paso a Paso" para verificar la cantidad y autenticidad simultáneamente. Un cajero profesional debe ser capaz de contar grandes sumas sin distraerse por el ruido ambiental o las consultas de los clientes. El "Arqueo Inicial" es el primer paso del día, donde recibes y cuentas tu fondo fijo (encaje).

**Resumen:** La exactitud es tu mejor carta de presentación. Un descuadre de caja al final del día no es solo un error contable, es un riesgo para tu carrera.

**Puntos Clave:**
*   **Encaje de Caja:** El dinero base con el que inicias para dar cambio.
*   **Conteo Dual:** Siempre cuenta el dinero frente al cliente y vuelve a contar antes de procesar.
*   **Organización:** Mantén los billetes por denominación y orientados hacia el mismo lado.`,
            topics: [
              {
                title: 'Técnicas de Conteo Rápido',
                description: `**Destreza Manual:** El uso de los dedos para separar billetes rápidamente permite un flujo constante en la ventanilla. La técnica más común es sujetar el fajo con una mano y "deslizar" los billetes con el pulgar e índice de la otra.`,
                whatIsItFor: `**Objetivo de Aprendizaje:** Desarrollar la habilidad de contar efectivo con precisión quirúrgica y velocidad competitiva.`,
                howToDoIt: `**Instrucciones Prácticas:**
1.  **Sujeción:** Toma el fajo con la mano izquierda y dóblalo levemente.
2.  **Desplazamiento:** Usa el pulgar derecho para mover cada billete hacia tu mano derecha.
3.  **Verificación:** Observa los bordes del billete para asegurarte de que no van dos pegados.`,
                image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'caj-l1p2',
            title: 'Seguridad: Detección de Billetes Falsos',
            type: 'document',
            content: `**Introducción:** Los falsificadores utilizan técnicas cada vez más sofisticadas, pero los bancos dotan a sus billetes de medidas de seguridad que son casi imposibles de replicar en su totalidad.

**Explicación Detallada:** La detección se basa en tres acciones: Tocar, Mirar y Girar. Debes sentir la textura del papel (que es de algodón o polímero, no papel común), mirar a contraluz la marca de agua y el hilo de seguridad, y girar el billete para ver cambios de color en tintas especiales. El uso de luz ultravioleta (UV) ayuda a identificar fibras y marcas fluorescentes invisibles al ojo humano.

**Resumen:** Nunca confíes solo en el tacto; verifica al menos tres medidas de seguridad.`,
            topics: [
              {
                title: 'Medidas de Seguridad Críticas',
                description: `**Marca de Agua:** Imagen visible solo al trasluz, que debe coincidir con el personaje o motivo del billete. **Hilo de Seguridad:** Banda incrustada que puede tener microimpresiones.`,
                whatIsItFor: `**Objetivo:** Proteger los activos de la institución y evitar que moneda falsa entre en circulación legal.`,
                howToDoIt: `**Protocolo ante Billete Falso:**
1.  **Detección:** Si dudas, usa la luz UV o el marcador detector.
2.  **Confirmación:** Compara con un billete que sepas que es auténtico.
3.  **Retención:** Sigue el protocolo legal de tu país; generalmente el billete se retiene y se entrega un recibo al cliente.`,
                image: 'https://images.unsplash.com/photo-1554224155-1677a28a1958?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'caj-l1p3',
            title: 'Depósitos y Retiros: El Corazón de la Ventanilla',
            type: 'document',
            content: `**Introducción:** Son las transacciones más frecuentes. Dominarlas te permite atender a más clientes con menos errores.

**Explicación Detallada:** Un depósito es el ingreso de fondos a una cuenta. Debes validar el número de cuenta, el nombre del titular y el monto en efectivo o cheque. Un retiro es la salida de fondos; aquí la seguridad es extrema: debes identificar al cliente con su documento oficial (ID), verificar su firma y asegurarte de que tenga saldo disponible. Los errores en montos de retiro son los que causan los faltantes de caja más dolorosos.

**Resumen:** No proceses nada sin confirmar los datos dos veces en pantalla.`,
            topics: [
              {
                title: 'Validación de Identidad',
                description: `**Conozca a su Cliente:** El ID debe estar vigente y la foto debe coincidir con el portador. La firma en el voucher debe ser idéntica a la que el sistema muestra como registrada.`,
                whatIsItFor: `**Objetivo de Aprendizaje:** Aprender a ejecutar depósitos y retiros cumpliendo con todas las normativas de seguridad bancaria.`,
                howToDoIt: `**Checklist de Transacción:**
1.  **Identificación:** Solicita el ID y el número de cuenta.
2.  **Ingreso:** Digita los datos en el sistema.
3.  **Confirmación Escrita:** Haz que el cliente firme el comprobante.
4.  **Entrega/Recepción:** Entrega el ticket y el efectivo (si aplica) de forma clara.`,
                image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'caj-l1p4',
            title: 'Tránsito de Cheques y Otros Títulos',
            type: 'document',
            content: `**Introducción:** Aunque el mundo es cada vez más digital, los cheques siguen siendo instrumentos de pago legales y muy utilizados en el comercio.

**Explicación Detallada:** Como cajero, debes revisar que el cheque cumpla con los requisitos de forma: Fecha vigente, monto en números igual al monto en letras, beneficiario claro y firma del girador. Además, debes verificar que el cheque no tenga tachaduras o enmiendas. El proceso de "Endoso" es vital: el beneficiario debe firmar al reverso para poder cobrarlo o depositarlo.

**Resumen:** Un cheque mal recibido es una pérdida económica para el banco.`,
            topics: [
              {
                title: 'El Endoso Correcto',
                description: `**Transferencia de Derechos:** El endoso debe incluir firma, número de ID y teléfono. Si es para abono en cuenta, debe decir "Para abono en cuenta número...".`,
                whatIsItFor: `**Objetivo:** Garantizar la validez legal de los documentos valorados que ingresan a la ventanilla.`,
                howToDoIt: `**Examen del Cheque:**
1.  **Anverso:** Revisa fecha, montos y firmas.
2.  **Reverso:** Verifica el endoso del cliente.
3.  **Validación Interna:** Verifica fondos en la cuenta del girador si es un cheque del mismo banco.`,
                image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'caj-l1p5',
            title: 'El Arqueo Final y Cierre de Caja',
            type: 'document',
            content: `**Introducción:** Es el momento de la verdad. Al cerrar la ventanilla, el sistema y tu efectivo físico deben coincidir exactamente.

**Explicación Detallada:** El arqueo final consiste en listar todo el efectivo (billetes y monedas por denominación), cheques y comprobantes de tarjetas de crédito recibidos durante el turno. La suma de estos valores debe ser IGUAL a lo que el sistema reporta como "Saldo en Caja". Si hay una diferencia, puede ser un "Faltante" (te falta dinero) o un "Sobrante" (te sobra dinero). Ambas situaciones deben reportarse y analizarse.

**Resumen:** Un cajero que cuadra a la primera es un cajero confiable y profesional.`,
            topics: [
              {
                title: 'Procedimiento de Cuadre',
                description: `**Orden y Reporte:** Imprime el reporte de movimientos del día y procede a contar el dinero sistemáticamente. No te apresures; el apuro es la causa número uno de errores en el arqueo.`,
                whatIsItFor: `**Objetivo:** Asegurar la integridad contable de las operaciones diarias de la sucursal bancaria.`,
                howToDoIt: `**Pasos para el Cierre:**
1.  **Bloqueo:** Cierra el sistema para nuevas operaciones.
2.  **Conteo:** Lista el efectivo físico.
3.  **Conciliación:** Compara el físico vs. el sistema.
4.  **Entrega:** Entrega el efectivo y documentos a la bóveda o al supervisor.`,
                image: 'https://images.unsplash.com/photo-1559526271-991817e4e414?auto=format&fit=crop&q=80&w=400'
              }
            ]
          }
        ],
        lessonExam: [
          { id: 'caj-q1', type: 'multiple', question: '¿Qué es el arqueo de caja?', options: ['Un error', 'El cuadre de dinero al final del día', 'Un tipo de préstamo', 'Un retiro de cuenta'], correctAnswer: 1 },
          { id: 'caj-q2', type: 'multiple', question: 'Medida de seguridad en billetes:', options: ['Color brillante', 'Marca de agua', 'Tamaño pequeño', 'Firma del cajero'], correctAnswer: 1 },
          { id: 'caj-q3', type: 'multiple', question: '¿Qué hacer ante un faltante?', options: ['Ignorarlo', 'Reportarlo inmediatamente', 'Poner dinero propio sin avisar', 'Culpar al compañero'], correctAnswer: 1 },
          { id: 'caj-q4', type: 'multiple', question: 'Principal valor de un cajero:', options: ['Velocidad', 'Honestidad', 'Fuerza', 'Belleza'], correctAnswer: 1 },
          { id: 'caj-q5', type: 'multiple', question: '¿Qué es un depósito?', options: ['Retirar dinero', 'Ingresar dinero a una cuenta', 'Pedir un crédito', 'Cerrar la cuenta'], correctAnswer: 1 },
          { id: 'caj-q6', type: 'multiple', question: 'Instrumento para detectar billetes falsos:', options: ['Lupa', 'Luz ultravioleta', 'Regla', 'Calculadora'], correctAnswer: 1 },
          { id: 'caj-q7', type: 'multiple', question: '¿Qué es el encaje de caja?', options: ['Guardar la caja', 'Fondo inicial para dar cambio', 'El sueldo del cajero', 'Un tipo de seguro'], correctAnswer: 1 },
          { id: 'caj-q8', type: 'multiple', question: 'Acción prohibida en caja:', options: ['Saludar', 'Contar dinero', 'Usar celular personal', 'Verificar ID'], correctAnswer: 2 },
          { id: 'caj-q9', type: 'multiple', question: '¿Qué es un cheque?', options: ['Dinero en efectivo', 'Orden de pago por escrito', 'Una tarjeta de crédito', 'Un recibo de luz'], correctAnswer: 1 },
          { id: 'caj-q10', type: 'multiple', question: '¿Quién es el titular de cuenta?', options: ['El banco', 'El dueño del dinero', 'El cajero', 'El guardia'], correctAnswer: 1 }
        ]
      },
      {
        id: 'l2',
        title: 'Módulo 2: Software y Sistemas Bancarios',
        parts: [
          {
            id: 'l2p1',
            title: 'Entorno Transaccional',
            type: 'video',
            content: 'Uso de la terminal de caja profesional.',
            topics: [
              { title: 'Registro de Operaciones', description: 'Cómo ingresar depósitos y retiros al sistema.', whatIsItFor: 'Mantener el libro mayor actualizado.', howToDoIt: 'Digitar montos y números de cuenta con precisión.', image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=400' }
            ]
          }
        ],
        lessonExam: [
          { id: 'l2q1', type: 'multiple', question: '¿Para qué sirve el número de cuenta?', options: ['Para nada', 'Identificar al cliente y su dinero de forma única', 'Para el color del billete', 'Es opcional'], correctAnswer: 1 },
          { id: 'l2q2', type: 'multiple', question: '¿Qué es una clave de exceso de límites?', options: ['Una contraseña común', 'Autorización especial para transacciones de alto monto', 'Un virus', 'La clave del cajero'], correctAnswer: 1 },
          { id: 'l2q3', type: 'multiple', question: '¿Para qué sirve el botón de "Anulación" en el sistema?', options: ['Para borrar la cuenta', 'Corregir un error cometido durante el registro antes de finalizar', 'Para regalar dinero', 'No tiene utilidad'], correctAnswer: 1 },
          { id: 'l2q4', type: 'multiple', question: '¿Qué es la comprobación de saldo antes de un retiro?', options: ['Por curiosidad', 'Verificar que el cliente tenga fondos suficientes para retirar', 'Para que el cliente sepa cuánto tiene', 'Un trámite innecesario'], correctAnswer: 1 },
          { id: 'l2q5', type: 'multiple', question: '¿Qué significa "bloqueo de cuenta"?', options: ['La cuenta se eliminó', 'Suspensión temporal de operaciones por seguridad o legalidad', 'Un premio', 'Un tipo de depósito'], correctAnswer: 1 },
          { id: 'l2q6', type: 'multiple', question: '¿Para qué sirve el ticket de operación?', options: ['Para tirar a la basura', 'Comprobante legal para el cliente de la transacción realizada', 'Para el banco solamente', 'Para el guardia'], correctAnswer: 1 },
          { id: 'l2q7', type: 'multiple', question: '¿Qué es un sistema "Core" bancario?', options: ['El aire acondicionado', 'Plataforma central donde se procesan todas las operaciones', 'Un antivirus', 'Un tipo de teclado'], correctAnswer: 1 },
          { id: 'l2q8', type: 'multiple', question: '¿Qué hacer si el sistema se congela a mitad de una transacción?', options: ['Reiniciar y no avisar', 'Reportar al supervisor y verificar el estado del último registro', 'Irme a casa', 'Gritar'], correctAnswer: 1 },
          { id: 'l2q9', type: 'multiple', question: '¿Qué es la "Conciliación" bancaria?', options: ['Pelear con el cliente', 'Proceso de cuadre entre los registros del sistema y el dinero real', 'Un tipo de retiro', 'No existe'], correctAnswer: 1 },
          { id: 'l2q10', type: 'multiple', question: 'Importancia del ingreso manual de datos:', options: ['Cualquier dato sirve', 'Debe ser exacto para evitar errores contables y legales graves', 'No es importante', 'Excel hace todo'], correctAnswer: 1 }
        ]
      },
      {
        id: 'l3',
        title: 'Módulo 3: Productos y Servicios Financieros',
        parts: [
          {
            id: 'l3p1',
            title: 'Cuentas y Préstamos',
            type: 'document',
            content: 'Conocimiento de los servicios que ofrece el banco.',
            topics: [
              { title: 'Venta Cruzada', description: 'Ofrecer productos adicionales al cliente.', whatIsItFor: 'Incrementar la satisfacción y rentabilidad.', howToDoIt: 'Identificar necesidades según el perfil del cliente.', image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=400' }
            ]
          }
        ],
        lessonExam: [
          { id: 'l3q1', type: 'multiple', question: '¿Qué es un préstamo hipotecario?', options: ['Para comprar comida', 'Para la compra de un inmueble (casa)', 'Para ir al cine', 'Para ropa'], correctAnswer: 1 },
          { id: 'l3q2', type: 'multiple', question: '¿Qué es un CDP o Certificado de Depósito a Plazo?', options: ['Un retiro rápido', 'Inversión donde el dinero se deja por un tiempo acordado a cambio de intereses', 'Una tarjeta de crédito', 'Un error'], correctAnswer: 1 },
          { id: 'l3q3', type: 'multiple', question: 'Diferencia entre Tarjeta de Débito y Crédito:', options: ['Ninguna', 'Débito usa fondos propios; Crédito usa fondos prestados por el banco', 'Débito es para ricos', 'Crédito es solo para empresas'], correctAnswer: 1 },
          { id: 'l3q4', type: 'multiple', question: '¿Qué es un préstamo de consumo?', options: ['Para comprar una casa solamente', 'Para necesidades personales (viajes, electrodomésticos, salud)', 'Para regalar dinero', 'No existe'], correctAnswer: 1 },
          { id: 'l3q5', type: 'multiple', question: '¿Para qué sirve un Seguro de Vida vinculado a un crédito?', options: ['Por estética', 'Garantizar el pago de la deuda en caso de fallecimiento del titular', 'Para el banco solamente', 'Para que el cliente esté feliz'], correctAnswer: 1 },
          { id: 'l3q6', type: 'multiple', question: '¿Qué es una Tasa de Interés Pasiva?', options: ['La que el banco cobra por préstamos', 'La que el banco paga al cliente por sus ahorros', 'Un impuesto de gobierno', 'No existe'], correctAnswer: 1 },
          { id: 'l3q7', type: 'multiple', question: '¿Qué es la Banca en Línea (Internet Banking)?', options: ['Un juego online', 'Plataforma para realizar transacciones desde cualquier lugar con red', 'Un virus', 'Un tipo de cajero físico'], correctAnswer: 1 },
          { id: 'l3q8', type: 'multiple', question: '¿Qué es un fondo de inversión?', options: ['Un ahorro personal solamente', 'Pool de dinero de varios clientes gestionado profesionalmente', 'Un préstamo', 'Un tipo de billete'], correctAnswer: 1 },
          { id: 'l3q9', type: 'multiple', question: '¿Qué es el "Leasing"?', options: ['Venta de autos', 'Arrendamiento financiero con opción a compra', 'Un tipo de cuenta de ahorros', 'Un seguro médica'], correctAnswer: 1 },
          { id: 'l3q10', type: 'multiple', question: 'Importancia de conocer los productos bancarios:', options: ['Para nada', 'Para asesorar correctamente al cliente y realizar ventas cruzadas', 'Para hablar mucho', 'Para que el jefe no me despida'], correctAnswer: 1 }
        ]
      },
      {
        id: 'l4',
        title: 'Módulo 4: Lavado de Activos y Prevención',
        parts: [
          {
            id: 'l4p1',
            title: 'Cumplimiento Normativo',
            type: 'video',
            content: 'Prevención de delitos financieros.',
            topics: [
              { title: 'Conozca a su Cliente (KYC)', description: 'Verificación de la procedencia de fondos.', whatIsItFor: 'Evitar que el banco sea usado para actividades ilícitas.', howToDoIt: 'Solicitar documentación soporte en transacciones grandes.', image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=400' }
            ]
          }
        ],
        lessonExam: [
          { id: 'l4q1', type: 'multiple', question: '¿Qué es el lavado de activos?', options: ['Lavar billetes con jabón', 'Dar apariencia legal a dinero ilícito', 'Regalar dinero', 'No tiene importancia'], correctAnswer: 1 },
          { id: 'l4q2', type: 'multiple', question: '¿Qué es una "Operación Sospechosa"?', options: ['Cualquier retiro', 'Transacción que no se ajusta al perfil del cliente o de naturaleza dudosa', 'Un depósito grande solamente', 'Un trámite normal'], correctAnswer: 1 },
          { id: 'l4q3', type: 'multiple', question: '¿Qué es el "Pitufeo" (Smurfing)?', options: ['Un dibujo animado', 'Fraccionar grandes sumas de dinero en depósitos pequeños para evitar controles', 'Un tipo de cuenta', 'No existe'], correctAnswer: 1 },
          { id: 'l4q4', type: 'multiple', question: '¿Para qué sirve el formulario de declaración de efectivo?', options: ['Para gastar papel', 'Informar sobre transacciones en efectivo que superan el límite legal', 'Para el precio', 'No sirve'], correctAnswer: 1 },
          { id: 'l4q5', type: 'multiple', question: '¿Qué es el oficial de cumplimiento?', options: ['El guardia', 'Persona encargada de vigilar que se sigan las normas contra el lavado', 'El gerente general', 'Un cliente VIP'], correctAnswer: 1 },
          { id: 'l4q6', type: 'multiple', question: '¿Cuál es la consecuencia de participar en lavado de activos?', options: ['Ninguna', 'Cárcel, multas y despido', 'Un ascenso', 'Fama'], correctAnswer: 1 },
          { id: 'l4q7', type: 'multiple', question: '¿Qué es la debida diligencia?', options: ['Hacer todo rápido', 'Proceso de identificación y verificación exhaustiva del cliente', 'Un tipo de préstamo', 'No existe'], correctAnswer: 1 },
          { id: 'l4q8', type: 'multiple', question: '¿Qué significa PEP?', options: ['Persona En Peligro', 'Persona Expuesta Políticamente (requieren mayor control)', 'Pequeña Empresa Particular', 'Un tipo de billete'], correctAnswer: 1 },
          { id: 'l4q9', type: 'multiple', question: '¿Por qué es importante reportar transacciones inusuales?', options: ['Por chismear', 'Proteger la integridad del sistema financiero y la institución', 'Para ganar puntos', 'No es importante'], correctAnswer: 1 },
          { id: 'l4q10', type: 'multiple', question: '¿Qué es el financiamiento del terrorismo?', options: ['Un juego de acción', 'Canalización de fondos para actividades terroristas', 'Un tipo de inversión', 'No existe en banca'], correctAnswer: 1 }
        ]
      },
      {
        id: 'l5',
        title: 'Módulo 5: Calidad en el Servicio al Cliente',
        parts: [
          {
            id: 'l5p1',
            title: 'Excelencia en Ventanilla',
            type: 'video',
            content: 'Protocolo de atención bancaria.',
            topics: [
              { title: 'Manejo de Filas y Reclamos', description: 'Eficiencia y cortesía bajo presión.', whatIsItFor: 'Mejorar la experiencia del usuario bancario.', howToDoIt: 'Ser rápido sin descuidar el trato humano.', image: 'https://images.unsplash.com/photo-1556741433-479925615567?auto=format&fit=crop&q=80&w=400' }
            ]
          }
        ],
        lessonExam: [
          { id: 'l5q1', type: 'multiple', question: '¿Cuál es la clave del servicio al cliente?', options: ['Gritar', 'Empatía y resolución de problemas', 'Irse rápido', 'No hablar'], correctAnswer: 1 },
          { id: 'l5q2', type: 'multiple', question: '¿Cómo manejar a un cliente molesto?', options: ['Ignorarlo', 'Escuchar con calma, mostrar comprensión y buscar solución', 'Discutir con él', 'Llamar al guardia de inmediato sin hablar'], correctAnswer: 1 },
          { id: 'l5q3', type: 'multiple', question: '¿Qué es la comunicación no verbal?', options: ['No decir nada', 'Gestos, postura y contacto visual que transmiten un mensaje', 'Hablar por señas', 'Un error'], correctAnswer: 1 },
          { id: 'l5q4', type: 'multiple', question: 'Importancia del orden en el área de trabajo:', options: ['Por estética solamente', 'Trasmite profesionalismo y eficiencia al cliente', 'Para que no se pierdan los dulces', 'No es importante'], correctAnswer: 1 },
          { id: 'l5q5', type: 'multiple', question: '¿Qué significa ser proactivo en ventanilla?', options: ['Hacer solo lo que piden', 'Anticiparse a las necesidades del cliente y ofrecer soluciones', 'Correr mucho', 'No hacer nada'], correctAnswer: 1 },
          { id: 'l5q6', type: 'multiple', question: '¿Qué es un momento de verdad en el servicio?', options: ['Cuando digo la verdad', 'Cada contacto entre cliente y banco donde se forma una opinión', 'Un examen', 'No existe'], correctAnswer: 1 },
          { id: 'l5q7', type: 'multiple', question: '¿Por qué evitar tecnicismos con el cliente?', options: ['Por secreto bancario', 'Para que el cliente nos entienda claramente sin confusiones', 'Para parecer más inteligentes', 'No hay que evitarlos'], correctAnswer: 1 },
          { id: 'l5q8', type: 'multiple', question: 'Importancia de la puntualidad para el cajero:', options: ['No importa', 'Garantizar que la ventanilla esté abierta a tiempo para los clientes', 'Para cobrar más', 'Solo si el jefe está'], correctAnswer: 1 },
          { id: 'l5q9', type: 'multiple', question: '¿Cómo finalizar una atención?', options: ['Dándome la vuelta', 'Agradeciendo y preguntando si necesita algo más', 'Diciendo "adiós" rápido', 'No decir nada'], correctAnswer: 1 },
          { id: 'l5q10', type: 'multiple', question: '¿Qué es la reputación bancaria?', options: ['El color del logo', 'Imagen y confianza que el público tiene en el banco', 'La cantidad de dinero en la bóveda', 'Un tipo de cuenta'], correctAnswer: 1 }
        ]
      }
    ],
    finalExam: [
      { id: 'caj-f1', type: 'multiple', question: '¿Qué es una cuenta de ahorros?', options: ['Deuda', 'Producto para guardar dinero', 'Inversión riesgosa', 'Un préstamo'], correctAnswer: 1 },
      { id: 'caj-f2', type: 'multiple', question: '¿Qué significa ATM?', options: ['A Toda Maquina', 'Cajero Automático', 'Banco Central', 'Ahorro Total'], correctAnswer: 1 },
      { id: 'caj-f3', type: 'multiple', question: '¿Qué es el interés?', options: ['Un regalo', 'Costo por el uso del dinero', 'Una comisión fija', 'El saldo'], correctAnswer: 1 },
      { id: 'caj-f4', type: 'multiple', question: '¿Qué es un retiro?', options: ['Poner dinero', 'Sacar dinero de la cuenta', 'Abrir cuenta', 'Transferencia'], correctAnswer: 1 },
      { id: 'caj-f5', type: 'multiple', question: 'Documento necesario para transacciones:', options: ['Cédula o ID', 'Receta médica', 'Carta de amor', 'Foto'], correctAnswer: 0 },
      { id: 'caj-f6', type: 'multiple', question: '¿Qué es el saldo?', options: ['Ducha', 'Cantidad de dinero disponible', 'La deuda', 'El límite'], correctAnswer: 1 },
      { id: 'caj-f7', type: 'multiple', question: '¿Qué es una transferencia?', options: ['Cambio de billete', 'Mover dinero entre cuentas', 'Un robo', 'Un depósito'], correctAnswer: 1 },
      { id: 'caj-f8', type: 'multiple', question: '¿Qué es el PIN?', options: ['Una aguja', 'Clave de seguridad personal', 'Nombre del banco', 'Un botón'], correctAnswer: 1 },
      { id: 'caj-f9', type: 'multiple', question: '¿Qué es el comprobante?', options: ['Un billete', 'Recibo de la operación', 'Una firma', 'El ID'], correctAnswer: 1 },
      { id: 'caj-f10', type: 'multiple', question: 'Responsabilidad ante billete falso detectado:', options: ['Darlo de vuelta', 'Retenerlo y reportar', 'Cobrarlo igual', 'Romperlo'], correctAnswer: 1 }
    ]
  },
  {
    id: 'barberia',
    title: 'Barbería Profesional',
    category: 'Belleza',
    description: 'Técnicas de corte masculino y diseño de barba.',
    longDescription: 'Aprende cortes clásicos y modernos, fade, uso de navaja y cuidado de la barba.',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800',
    competencies: ['Técnica de Fade', 'Afeitado tradicional', 'Diseño de barbas'],
    subjects: [
      { name: 'Corte Clásico', credits: 5 },
      { name: 'Técnicas Modernas', credits: 6 },
      { name: 'Higiene', credits: 3 }
    ],
    lessons: [
      {
        id: 'bar-l1',
        title: 'Módulo 1: Herramientas y Fundamentos',
        parts: [
          {
            id: 'bar-l1p1',
            title: 'La Navaja: El Alma del Barbero',
            type: 'document',
            content: `**Introducción:** La navaja es la herramienta que distingue a un verdadero barbero de un peluquero estilista. Su dominio es un rito de iniciación y la clave para lograr delineados perfectos y afeitados tradicionales que un rastrillo común jamás igualaría.

**Explicación Detallada:** Existen principalmente dos tipos: la navaja de barbero tradicional (que requiere afilado manual con asentador) y la Shavette (navajín de hojas intercambiables). En la barbería moderna, la Shavette es el estándar por razones de higiene y salud pública. Dominar la navaja implica conocer el ángulo de ataque (30 grados), la tensión de la piel con la mano opuesta y la dirección del crecimiento del vello.

**Resumen:** La navaja no solo corta, diseña. Es una extensión de tu mano que requiere firmeza y respeto absoluto.

**Puntos Clave:**
*   **Higiene:** Cambia la cuchilla frente al cliente siempre.
*   **Ángulo:** Mantén la hoja a 30 grados respecto a la piel.
*   **Tensión:** Estira la piel siempre antes de pasar el filo.
*   **Lubricación:** Nunca uses la navaja sobre piel seca.`,
            topics: [
              {
                title: 'Tipos y Seguridad',
                description: `**Explorando el Filo:** Comprender la diferencia entre una navaja libre y un porta-navaja (Shavette). La Shavette es ideal para principiantes ya que garantiza un filo siempre nuevo y cumple con las normas de bioseguridad actuales.

**Explicación:** La seguridad comienza con cómo sostienes la navaja. El mango debe reposar entre tus dedos índice y corazón, mientras el dedo pulgar sostiene la base de la hoja por debajo. Este agarre te da el control total sobre la presión ejercida.`,
                whatIsItFor: `**Objetivo de Aprendizaje:** Aprender a manipular la navaja con seguridad y precisión para realizar delineados de barba y limpieza de nuca sin causar cortes ni irritaciones.

**Situación Real:** Un cliente llega con la piel sensible. Si no dominas el ángulo de la navaja, podrías causar quemaduras por fricción o cortes microscópicos que se infecten más tarde.`,
                howToDoIt: `**Instrucciones Paso a Paso:**
1.  **Carga:** Inserta la media cuchilla en la Shavette con cuidado.
2.  **Preparación:** Aplica gel de afeitado transparente en la zona a delinear.
3.  **Tensión:** Con la mano libre, estira la piel hacia arriba.
4.  **Corte:** Apoya la navaja a 30 grados y realiza movimientos cortos hacia abajo.

**Tips:** No presiones la navaja; deja que el filo y el peso de la herramienta hagan el trabajo por ti.

**Errores Comunes:** Sostener la navaja de forma plana (la navaja no corta) o demasiado vertical (puedes causar un corte profundo).`,
                image: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'bar-l1p2',
            title: 'Clippers: El Motor de la Barbería',
            type: 'document',
            content: `**Introducción:** La máquina clipper es tu principal herramienta para remover grandes volúmenes de cabello y crear las bases de cualquier degradado. Es el "caballo de batalla" de tu estación de trabajo.

**Explicación Detallada:** Las máquinas se dividen en magnéticas (vibración rápida), de pivote (potentes pero lentas) y de motor rotativo (potencia máxima). Hoy en día, las inalámbricas dominan el mercado por su versatilidad. Es vital entender el uso de la "palanca de ajuste", la cual te permite jugar con la longitud de corte entre los peines guía (abierta = más largo, cerrada = más corto).

**Resumen:** Conocer tu clipper es entender cómo el ruido y la vibración se traducen en un corte limpio y sin tirones.

**Puntos Clave:**
*   **Limpieza:** Cepilla los pelos después de cada uso.
*   **Lubricación:** 3 gotas de aceite en las cuchillas cada pocos cortes.
*   **Ajuste:** Aprende a calibrar tus cuchillas para un "Zero Gap" (espacio cero) seguro.`,
            topics: [
              {
                title: 'Uso de Peines Guía',
                description: `**La Escala del Degradado:** Los peines guía (guards) son fundamentales. Van desde el #0.5 hasta el #8 en la mayoría de marcas. Combinar estos peines con el juego de la palanca es lo que crea el efecto de esfumado o fade.

**Situación Real:** Si intentas borrar una línea de la #0 con un peine #2, nunca lo lograrás. Debes usar la escala progresiva y el juego de la palanca intermedia.`,
                whatIsItFor: `**Objetivo:** Dominar el cambio de peines y el movimiento de la palanca para realizar cortes uniformes y prepararse para los degradados.`,
                howToDoIt: `**Instrucciones Paso a Paso:**
1.  **Encienda:** Enciende la máquina lejos del oído del cliente.
2.  **Selección:** Coloca el peine deseado asegurándote de que "clic".
3.  **Cierre:** Comienza con la palanca cerrada para el largo base.
4.  **Apertura:** Abre la palanca para difuminar la unión con el largo superior.

**Tips:** Escucha el sonido del motor; si suena forzado, podrías tener pedazos de cabello trabados entre las cuchillas.`,
                image: 'https://images.unsplash.com/photo-1599351431247-f509153c39ef?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'bar-l1p3',
            title: 'Trimmers y Shovers: El Detalle Final',
            type: 'document',
            content: `**Introducción:** Mientras que la clipper remueve volumen, la trimmer (patillera) y la shaver (rasuradora eléctrica) son las encargadas de la definición extrema y los acabados "skin" (a piel).

**Explicación Detallada:** La Trimmer tiene dientes mucho más finos y cercanos, lo que permite marcar contornos de patillas, frente y nuca con precisión láser. La Shaver, por su parte, utiliza una lámina hipoalergénica (foil) que remueve el vello al ras, dejando la piel suave como recién afeitada sin necesidad de jabón.

**Resumen:** No puedes entregar un corte premium sin el uso correcto de estas herramientas de detalle.`,
            topics: [
              {
                title: 'Marcado de Contornos',
                description: `**La Definición:** Marcar un cerquillo (line-up) recto y limpio es la firma de un barbero detallista. Se usa la esquina de la trimmer para áreas curvas y la base completa para líneas rectas.`,
                whatIsItFor: `**Objetivo:** Aprender a usar la trimmer para dar terminaciones profesionales y la shaver para lograr degradados que duren más tiempo.`,
                howToDoIt: `**Instrucciones:**
1.  **Posición:** Coloca la trimmer mirando hacia la piel para mayor profundidad o plana para limpieza superficial.
2.  **Shaver:** Desliza la shaver suavemente en movimientos de vaivén sobre cabello menor a 0.5mm.

**Errores Comunes:** Presionar demasiado la shaver, lo cual causa irritación roja en el cuello (Razor burn).`,
                image: 'https://images.unsplash.com/photo-1595475204848-9f89fe1d40dd?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'bar-l1p4',
            title: 'Tesoros del Barbero: Tijeras y Peines',
            type: 'document',
            content: `**Introducción:** El corte a tijera es un arte que requiere coordinación y paciencia. Es la única forma de dar textura y forma orgánica a la parte superior del cabello donde la máquina no llega.

**Explicación Detallada:** Existen tijeras de corte (filo dulce/navaja) y tijeras de entresacar (dentadas para quitar peso). Un buen par de tijeras es una inversión para toda la vida si se cuidan bien. Los peines también varían: el peine de corte (fino/grueso) para secciones, el de máquina para la técnica "Scissors over comb" y el de volumen para el terminado.

**Resumen:** Un barbero que solo usa máquina es un operario; un barbero que domina la tijera es un artista.`,
            topics: [
              {
                title: 'Ergonomía de la Tijera',
                description: `**Sujeción Correcta:** El pulgar entra solo lo suficiente en el ojo inferior, mientras el anular sostiene el superior. El dedo meñique descansa en el "apoyo" (tang) para estabilidad.`,
                whatIsItFor: `**Objetivo:** Desarrollar la destreza manual para realizar cortes a tijera uniformes y quitar volumen sin crear huecos indeseados.`,
                howToDoIt: `**Mini Ejercicio:** Practica abrir y cerrar la tijera moviendo únicamente el dedo pulgar. Los otros dedos deben permanecer inmóviles para garantizar una línea recta de corte.`,
                image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'bar-l1p5',
            title: 'Bioseguridad y Atención al Cliente',
            type: 'document',
            content: `**Introducción:** La barbería es un servicio de contacto humano directo. La limpieza no es opcional, es el cimiento de tu negocio. De nada sirve un corte perfecto si tu estación está sucia o transmites una infección.

**Explicación Detallada:** La bioseguridad implica tres procesos: Limpieza (remover suciedad visible), Desinfección (eliminar la mayoría de patógenos con químicos como Barbicide) y Esterilización (eliminación total, poco común en barbería pero ideal para navajas). La atención al cliente comienza con el saludo y la consulta: escuchar lo que el cliente quiere antes de encender la primera máquina.

**Resumen:** Eres un profesional de la salud estética. Actúa como tal.`,
            topics: [
              {
                title: 'Protocolo de Limpieza',
                description: `**El Ritual de Saneamiento:** El cliente debe verte limpiar tus herramientas. Esto genera confianza instantánea.`,
                whatIsItFor: `**Objetivo:** Implementar hábitos de higiene estrictos y aprender a gestionar la consulta con el cliente para asegurar un servicio satisfactorio.`,
                howToDoIt: `**Checklist Diario:**
1.  **Capa:** Asegúrate de que esté limpia y usemos cuellero de papel.
2.  **Cuchillas:** Spray desinfectante 5 en 1 después de cada corte.
3.  **Barbicida:** Sumerge peines y tijeras regularmente.

**Tips:** Si un cliente tiene una herida abierta o infección visible (tiña), tienes la obligación ética de sugerirle que visite a un médico antes de atenderlo.`,
                image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=400'
              }
            ]
          }
        ],
        lessonExam: [
          { id: 'bar-q1', type: 'multiple', question: '¿Cuál es el ángulo ideal para usar la navaja?', options: ['90 grados', '30 grados', '45 grados', '10 grados'], correctAnswer: 1 },
          { id: 'bar-q2', type: 'multiple', question: '¿Para qué sirve el "Trimmer"?', options: ['Corte de barba larga', 'Detalles y terminaciones', 'Lavar el cabello', 'Secar'], correctAnswer: 1 },
          { id: 'bar-q3', type: 'multiple', question: '¿Qué es el "Fade"?', options: ['Un tipo de tinte', 'Un degradado o esfumado', 'Una marca de tijera', 'Un champú'], correctAnswer: 1 },
          { id: 'bar-q4', type: 'multiple', question: '¿Cómo se desinfectan las herramientas?', options: ['Con agua caliente', 'Con alcohol o soluciones específicas (Barbicide)', 'Solo con un paño', 'No se desinfectan'], correctAnswer: 1 },
          { id: 'bar-q5', type: 'multiple', question: '¿Para qué sirve el After Shave?', options: ['Para peinar', 'Para calmar la piel tras el afeitado', 'Para teñir', 'Para lavar'], correctAnswer: 1 },
          { id: 'bar-q6', type: 'multiple', question: '¿Qué es un corte "Pompadour"?', options: ['Rapado total', 'Corte con volumen en la parte superior', 'Trenzas', 'Corte de mujer'], correctAnswer: 1 },
          { id: 'bar-q7', type: 'multiple', question: '¿Cuál es la función del "Clipper"?', options: ['Cortar el vello de la nariz', 'Corte principal de cabello', 'Peinar', 'Dar masaje'], correctAnswer: 1 },
          { id: 'bar-q8', type: 'multiple', question: '¿Qué es el visagismo en barbería?', options: ['Estudio de la piel', 'Estudio de la forma del rostro para el corte', 'Uso de químicos', 'Diseño de local'], correctAnswer: 1 },
          { id: 'bar-q9', type: 'multiple', question: '¿Para qué se usa la toalla caliente?', options: ['Para secar el sudor', 'Para ablandar el folículo antes del afeitado', 'Para peinar', 'Por estética'], correctAnswer: 1 },
          { id: 'bar-q10', type: 'multiple', question: 'Diferencia entre navaja y Shavette:', options: ['Ninguna', 'La Shavette usa cuchillas desechables', 'La navaja es más segura', 'La Shavette es más cara'], correctAnswer: 1 }
        ]
      },
      {
        id: 'l2',
        title: 'Módulo 2: Técnicas de Fade Avanzado',
        parts: [
          {
            id: 'l2p1',
            title: 'Fundamentos del Degradado: La Escala Gris',
            type: 'document',
            content: `**Introducción:** El "Fade" o degradado es la técnica insignia de la barbería moderna. Se basa en crear una transición fluida y sin líneas visibles entre diferentes longitudes de cabello, creando un efecto visual de "esfumado" o sombra.

**Explicación Detallada:** Para lograr un fade perfecto, debemos entender la "Escala Gris". El cabello tiene diferentes densidades y tonos según su largo: el blanco (piel), el gris (longitudes cortas como 0.5 a 1.5) y el negro (volumen superior). El secreto del fade es conectar estos tres colores mediante el juego de la palanca de la máquina y el uso preciso de los peines trampa (#0.5 y #1.5).

**Resumen:** Un fade no se trata de cuánto cortas, sino de cómo conectas lo que dejas.

**Puntos Clave:**
*   **Luz:** Necesitas iluminación directa sobre el área de trabajo para ver las "sombras".
*   **Limpieza:** Usa el cepillo pequeño constantemente para ver la línea real.
*   **Cuchareo:** El movimiento de salida en "C" es vital para no dejar líneas nuevas.`,
            topics: [
              {
                title: 'El Movimiento de Cuchareo (C-Stroke)',
                description: `**La Técnica Maestra:** El movimiento de "C" consiste en entrar con la máquina paralela a la piel y salir en un movimiento curvo hacia afuera al llegar a la línea guía.`,
                whatIsItFor: `**Objetivo:** Evitar la creación de líneas duras que sean difíciles de borrar posteriormente.`,
                howToDoIt: `**Instrucciones:** Mueve la muñeca de forma fluida. Imagina que estás "sacando" la máquina de la cabeza en lugar de empujarla hacia adentro.`,
                image: 'https://images.unsplash.com/photo-1599351431247-f509153c39ef?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'l2p2',
            title: 'Skin Fade: El Maestro de la Piel',
            type: 'document',
            content: `**Introducción:** El Skin Fade es el degradado más extremo, ya que comienza desde el nivel 0 absoluto (piel). Es el más solicitado pero también el que requiere mayor técnica de borrado.

**Explicación Detallada:** El proceso comienza marcando la "línea base" con la trimmer. Todo lo que esté por debajo de esa línea se limpia con la shaver. El reto es borrar la línea que deja la trimmer contra la sombra de la clipper abierta. Aquí es donde entra el "Zero Gap" y el uso de las esquinas de la cuchilla para detallar puntos oscuros.

**Resumen:** La suavidad de la piel contrastada con el volumen superior crea un look impactante y limpio.

**Puntos Clave:**
*   **Shaver:** Úsala solo en la parte más baja para evitar irritación.
*   **Base:** Asegúrate de que la línea base sea simétrica en ambos lados.
*   **Difuminado:** La zona de transición entre piel y cabello debe ser impecable.`,
            topics: [
              {
                title: 'Borrado de la Línea Base',
                description: `**El Paso Crítico:** Para borrar la línea de la trimmer, usa la clipper cerrada al 100% y ve abriendo la palanca milímetro a milímetro mientras subes.`,
                whatIsItFor: `**Objetivo:** Lograr una transición invisible donde no se note dónde termina la piel y empieza el cabello.`,
                howToDoIt: `**Técnica de Esquina:** Usa solo los últimos 3 o 4 dientes de la cuchilla para "puntear" sobre la línea. Esto da un control quirúrgico sobre el degradado.`,
                image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'l2p3',
            title: 'Low Fade y Mid Fade: Estilos Comerciales',
            type: 'document',
            content: `**Introducción:** No todos los degradados son iguales. La altura a la que comienza la sombra determina el estilo del corte y cómo este enmarca el rostro.

**Explicación Detallada:** El **Low Fade** (Degradado Bajo) se mantiene muy cerca de la línea del cabello, ideal para rostros alargados. El **Mid Fade** (Degradado Medio) sube hasta la altura de la sien, siendo el estilo más equilibrado y popular. Ambos requieren un manejo excelente de la curvatura de la cabeza para no subir el corte demasiado.

**Resumen:** Elegir la altura correcta del fade es parte del visagismo (estudio del rostro).`,
            topics: [
              {
                title: 'Guía de Alturas',
                description: `**Identificación:** El Low Fade cae sobre la nuca. El Mid Fade sigue una línea más recta que conecta la sien con el hueso occipital.`,
                whatIsItFor: `**Objetivo:** Aprender a posicionar el degradado según la morfología craneal del cliente.`,
                howToDoIt: `**Instrucciones:** Usa el peine #2 para limpiar la zona superior del lateral antes de empezar el fade; esto te dará una visión clara de cuánto espacio tienes para degradar.`,
                image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'l2p4',
            title: 'High Fade y Taper: Audacia y Detalle',
            type: 'document',
            content: `**Introducción:** El **High Fade** es un estilo audaz que deja gran parte de los laterales a piel, mientras que el **Taper** es la técnica de degradar únicamente las patillas y la nuca, dejando el resto del lateral con cabello.

**Explicación Detallada:** El High Fade es ideal para clientes con rostros redondos, ya que alarga visualmente la cabeza. El Taper, por otro lado, es la técnica preferida para estilos más conservadores o cabellos muy largos (Braids, Afros), ya que limpia solo los bordes permitiendo un crecimiento más estético.

**Resumen:** Dominar estas variantes te permite atender desde el cliente más arriesgado hasta el más clásico.`,
            topics: [
              {
                title: 'Técnica de Taper',
                description: `**Detallado Localizado:** El taper se realiza en un espacio de apenas 2 a 3 centímetros. Requiere una precisión extrema en el uso de la máquina sin peines.`,
                whatIsItFor: `**Objetivo:** Aprender a pulir contornos específicos sin comprometer la estructura general de un corte largo.`,
                howToDoIt: `**Tips:** Para un Taper perfecto en la nuca, asegúrate de que el degradado termine en una línea natural que se funda con la piel del cuello.`,
                image: 'https://images.unsplash.com/photo-1599351431247-f509153c39ef?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'l2p5',
            title: 'Pulido y Texturizado Final',
            type: 'document',
            content: `**Introducción:** Un fade puede verse bien a media distancia, pero el "pulido" es lo que lo hace ver perfecto de cerca. El texturizado es lo que da vida y movimiento a la parte superior.

**Explicación Detallada:** El pulido implica buscar "manchas" (zonas más oscuras) y suavizarlas usando la esquina de la clipper o tijeras de entresacar. El texturizado se logra mediante técnicas como el "Point Cutting" (corte en puntas) o el "Sliding" con tijera navaja, creando capas que permiten que el cabello se acomode mejor con el uso de ceras o pomadas.

**Resumen:** Los detalles finales son los que justifican un precio premium y fidelizan al cliente.`,
            topics: [
              {
                title: 'Uso de Tijera de Entresacar',
                description: `**Control de Volumen:** Esta tijera se usa para conectar el degradado de la máquina con el largo de la tijera arriba. Nunca se debe usar cerca de la raíz, siempre de medios a puntas.`,
                whatIsItFor: `**Objetivo:** Eliminar el exceso de peso y suavizar las transiciones finales entre el fade y el top.`,
                howToDoIt: `**Instrucciones:** Eleva el cabello con el peine y realiza uno o dos cortes máximos por sección. Evalúa el resultado antes de seguir cortando.`,
                image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=400'
              }
            ]
          }
        ],
        lessonExam: [
          { id: 'l2q1', type: 'multiple', question: '¿Qué significa un "Mid Fade"?', options: ['Arriba del todo', 'Degradado a media altura de la cabeza', 'Solo nuca', 'Sin degradado'], correctAnswer: 1 },
          { id: 'l2q2', type: 'multiple', question: '¿Qué es el "Low Fade"?', options: ['Degradado bajo (cerca de la oreja y nuca)', 'Degradado alto', 'Corte con tijera', 'Rapado total'], correctAnswer: 0 },
          { id: 'l2q3', type: 'multiple', question: '¿Para qué sirve la palanca de la máquina (Lever)?', options: ['Para prenderla', 'Ajustar la longitud de corte entre los peines guía', 'Para que no pese', 'Para limpiar'], correctAnswer: 1 },
          { id: 'l2q4', type: 'multiple', question: '¿Qué es el "High Fade"?', options: ['Degradado que empieza en la parte superior lateral', 'Degradado solo en nuca', 'Un tipo de peine', 'Una marca de máquina'], correctAnswer: 0 },
          { id: 'l2q5', type: 'multiple', question: '¿Cómo se borra la línea de la 0?', options: ['Usando la 0 abierta/media y cuchara de movimiento', 'Usando la 3', 'Con tijeras', 'Con agua'], correctAnswer: 0 },
          { id: 'l2q6', type: 'multiple', question: '¿Qué es el "Skin Fade"?', options: ['Degradado que empieza desde la piel (0 o rasuradora)', 'Degradado con peine 2', 'Un corte largo', 'Uso de tinte'], correctAnswer: 0 },
          { id: 'l2q7', type: 'multiple', question: '¿Para qué sirve el peine "Flat Top"?', options: ['Para rulos', 'Guiar la máquina en cortes planos superiores', 'Para peinar barba', 'Para lavar'], correctAnswer: 1 },
          { id: 'l2q8', type: 'multiple', question: '¿Qué es un degradado comprimido?', options: ['Uno muy largo', 'Degradado en un espacio muy pequeño de cabello', 'Corte de niños', 'Pintar el pelo'], correctAnswer: 1 },
          { id: 'l2q9', type: 'multiple', question: 'Importancia del cepillo de limpieza (Small Brush):', options: ['Para el cuello', 'Retirar cabellos pequeños para ver bien la línea del fade', 'Para lavar la máquina', 'Para peinar'], correctAnswer: 1 },
          { id: 'l2q10', type: 'multiple', question: '¿Qué es el movimiento de "Cuchareo" (C-stroke)?', options: ['Comer con cuchara', 'Movimiento circular de salida para evitar dejar líneas marcadas', 'Cortar recto', 'Lavar el pelo'], correctAnswer: 1 }
        ]
      },
      {
        id: 'l3',
        title: 'Módulo 3: Afeitado Tradicional y Barba',
        parts: [
          {
            id: 'l3p1',
            title: 'Ritual de la Toalla Caliente: El Arte del Vapor',
            type: 'document',
            content: `**Introducción:** El afeitado tradicional en barbería no es solo remover vello; es un tratamiento de spa para el hombre. El uso de la toalla caliente es el paso que define la experiencia premium y garantiza un afeitado sin irritación.

**Explicación Detallada:** El calor y la humedad de la toalla cumplen tres funciones vitales: ablandar la queratina del vello (haciéndolo más fácil de cortar), abrir los poros para una limpieza profunda y relajar los músculos faciales. Se deben usar aceites esenciales como eucalipto o mentol para potenciar la sensación de frescura y relajación.

**Resumen:** La toalla caliente es la preparación técnica y emocional para el afeitado perfecto.

**Puntos Clave:**
*   **Temperatura:** Debe estar caliente pero nunca quemar la piel del cliente.
*   **Tiempo:** Dejar actuar entre 2 y 3 minutos mínimos.
*   **Aceite Pre-Shave:** Aplícalo antes de la toalla para crear una barrera protectora.`,
            topics: [
              {
                title: 'Apertura de Poros',
                description: `**Ciencia del Vapor:** El vapor ayuda a que el vello se verticalice, permitiendo que la navaja corte la base del folículo sin arrastrar la piel.`,
                whatIsItFor: `**Objetivo de Aprendizaje:** Aprender a preparar la piel de manera profesional para minimizar el riesgo de vellos encarnados y sangrado.`,
                howToDoIt: `**Instrucciones:**
1.  **Humedecer:** Sumerge la toalla en agua caliente (máximo 45°C).
2.  **Escurrir:** Quita el exceso de agua.
3.  **Colocación:** Cubre la barba dejando la nariz libre para que el cliente respire con normalidad.

**Tips:** Agrega una gota de aceite de sándalo en la toalla para una experiencia aromática relajante.`,
                image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'l3p2',
            title: 'Jabones, Cremas y la Brocha de Afeitar',
            type: 'document',
            content: `**Introducción:** La espuma de lata es el enemigo de la barbería clásica. Para un servicio de calidad, se utilizan jabones de base vegetal o cremosa que requieren ser batidos con una brocha de cerdas naturales o sintéticas de alta gama.

**Explicación Detallada:** El objetivo de la brocha es doble: crear una micro-exfoliación en la piel y levantar los vellos para que la espuma penetre hasta la base. Los jabones premium contienen aceites que lubrican el paso de la navaja, permitiendo que esta "deslice" en lugar de "raspar".

**Resumen:** Una buena espuma debe ser densa, húmeda y tener el aspecto de un merengue firme.`,
            topics: [
              {
                title: 'Técnica de Espumado',
                description: `**Batido Perfecto:** Ya sea en un tazón (scuttle) o directamente en la cara del cliente, el movimiento circular rápido incorpora aire a la mezcla logrando la densidad ideal.`,
                whatIsItFor: `**Objetivo:** Desarrollar la habilidad de crear la mezcla perfecta según el tipo de piel y vello del cliente.`,
                howToDoIt: `**Instrucciones:** Carga la brocha con jabón, agrega gotas de agua poco a poco y bate hasta que no veas burbujas grandes. La espuma debe sostenerse sola en la brocha.`,
                image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'l3p3',
            title: 'Técnica de Afeitado a Navaja',
            type: 'document',
            content: `**Introducción:** Aquí es donde la teoría se encuentra con el filo. Afeitar con navaja requiere una mano firme, una mente enfocada y una técnica depurada de 3 pasadas.

**Explicación Detallada:** Las tres pasadas clásicas son: 
1. **With the grain (A favor):** Sigue la dirección del crecimiento. Es la más segura.
2. **Across the grain (Cruzado):** Perpendicular al vello. Quita lo que quedó.
3. **Against the grain (Contrapelo):** Opuesto al vello. Solo para pieles no sensibles. 
Es imperativo estirar la piel con la mano libre en dirección opuesta al recorrido de la navaja para aplanar la superficie.

**Resumen:** La navaja no debe pesar; es el filo el que realiza el corte bajo tu guía suave.`,
            topics: [
              {
                title: 'La Mano de Apoyo',
                description: `**Tensión de Piel:** Sin tensión, la piel se arruga frente a la hoja causando cortes. La mano libre es tan importante como la mano que sostiene la navaja.`,
                whatIsItFor: `**Objetivo:** Realizar un afeitado "Close Shave" (al ras) sin causar irritación ni cortes.`,
                howToDoIt: `**Instrucciones:** Realiza pases cortos de no más de 2 centímetros cada uno. Limpia la navaja en una toalla húmeda tras cada pase.`,
                image: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'l3p4',
            title: 'Diseño y Perfilado de Barba',
            type: 'document',
            content: `**Introducción:** No todos los clientes quieren un afeitado total. Muchos buscan dar forma a su barba existente para mejorar su estructura facial.

**Explicación Detallada:** El perfilado implica definir la línea de los pómulos y la línea del cuello. Una regla de oro es que la línea del cuello debe estar dos dedos por encima de "la manzana de Adán" para crear un ángulo de mandíbula fuerte. También se deben usar tijeras para remover vellos rebeldes (stray hairs) y máquinas con peine para degradar la barba hacia las patillas.

**Resumen:** Una barba bien perfilada es el equivalente masculino del maquillaje de contorno.`,
            topics: [
              {
                title: 'Simetría de Pómulos',
                description: `**Visagismo de Barba:** Puedes crear la ilusión de una mandíbula más ancha o un rostro más delgado solo variando la altura de la línea en la mejilla.`,
                whatIsItFor: `**Objetivo:** Aprender a diseñar barbas que favorezcan la fisionomía del cliente, ocultando imperfecciones y resaltando rasgos fuertes.`,
                howToDoIt: `**Tips:** Usa gel transparente en lugar de espuma para ver exactamente donde estás cortando la línea de diseño.`,
                image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'l3p5',
            title: 'Cuidado Post-Afeitado y Salud de la Piel',
            type: 'document',
            content: `**Introducción:** El proceso termina cuando los poros se cierran y la piel recupera su equilibrio. El post-afeitado es crucial para evitar infecciones y foliculitis.

**Explicación Detallada:** Tras el afeitado, se debe aplicar una toalla fría para cerrar los poros. Posteriormente, el uso de Alumbre (piedra mineral astringente) ayuda a sellar pequeños poros abiertos y desinfectar. Finalmente, un after-shave en bálsamo (sin alcohol para piel seca, con alcohol para piel grasa) hidrata y refresca la dermis.

**Resumen:** Envía a tu cliente a casa no solo con un buen corte, sino con una piel sana y renovada.`,
            topics: [
              {
                title: 'Manejo de Irritaciones',
                description: `**Prevención de Foliculitis:** Explicar al cliente cómo cuidar la barba en casa para evitar que los vellos se encarnen en los días posteriores al servicio.`,
                whatIsItFor: `**Objetivo:** Garantizar el bienestar del cliente a largo plazo y educarlo en el uso de aceites y bálsamos diarios.`,
                howToDoIt: `**Instrucciones:** Al finalizar, realiza un pequeño masaje facial con el bálsamo. Esto mejora la circulación y hace que el cliente se sienta relajado y valorado.`,
                image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=400'
              }
            ]
          }
        ],
        lessonExam: [
          { id: 'l3q1', type: 'multiple', question: '¿Para qué sirve el bálsamo de barba?', options: ['Para lavar', 'Hidratar y dar forma al vello facial', 'Para el pelo de la cabeza', 'No sirve'], correctAnswer: 1 },
          { id: 'l3q2', type: 'multiple', question: '¿Qué es el aceite de barba?', options: ['Para cocinar', 'Hidratar la piel debajo de la barba y suavizar el vello', 'Un tipo de tinte', 'Un fijador fuerte'], correctAnswer: 1 },
          { id: 'l3q3', type: 'multiple', question: '¿Cómo se delinea la mejilla?', options: ['Siguiendo la línea natural o curva de diseño con navaja', 'Cortando todo', 'Usando solo tijera', 'No se delinea'], correctAnswer: 0 },
          { id: 'l3q4', type: 'multiple', question: '¿Qué es la línea del cuello (Neckline)?', options: ['Donde termina la barba arriba', 'Límite inferior de la barba en el cuello', 'Detrás de la oreja', 'No existe'], correctAnswer: 1 },
          { id: 'l3q5', type: 'multiple', question: '¿Para qué se usa el Pre-Shave?', options: ['Para secar', 'Preparar y lubricar la piel antes de la espuma', 'Para después de afeitar', 'Para peinar'], correctAnswer: 1 },
          { id: 'l3q6', type: 'multiple', question: '¿Cuál es la dirección del afeitado inicial?', options: ['Contrapelo', 'A favor del crecimiento del vello', 'A los lados siempre', 'Circular'], correctAnswer: 1 },
          { id: 'l3q7', type: 'multiple', question: '¿Qué es el afeitado a contrapelo?', options: ['A favor del pelo', 'En dirección opuesta al crecimiento (más al ras, más riesgo)', 'Para barba larga', 'No se usa'], correctAnswer: 1 },
          { id: 'l3q8', type: 'multiple', question: 'Importancia de estirar la piel al afeitar:', options: ['Para que duela', 'Evitar cortes y facilitar el deslizamiento de la navaja', 'No es necesario', 'Para ver mejor'], correctAnswer: 1 },
          { id: 'l3q9', type: 'multiple', question: '¿Qué es una barba de "candado"?', options: ['Barba completa', 'Barba que rodea solo la boca y mentón', 'Barba muy larga', 'Solo bigote'], correctAnswer: 1 },
          { id: 'l3q10', type: 'multiple', question: '¿Cómo se desinfecta el Shavette?', options: ['No se hace', 'Limpieza y cambio de cuchilla por cada cliente', 'Cambiando solo el mango', 'Usando papel'], correctAnswer: 1 }
        ]
      },
      {
        id: 'l4',
        title: 'Módulo 4: Colorimetría Masculina',
        parts: [
          {
            id: 'l4p1',
            title: 'Tintes y Pigmentación',
            type: 'document',
            content: 'Cubrimiento de canas y delineado con pigmentos.',
            topics: [
              { title: 'Tinte de Barba', description: 'Uso de productos específicos.', whatIsItFor: 'Rejuvenecer la imagen del cliente.', howToDoIt: 'Aplicar con brocha pequeña y respetar tiempos.', image: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&q=80&w=400' }
            ]
          }
        ],
        lessonExam: [
          { id: 'l4q1', type: 'multiple', question: '¿Qué es el "Hair Fiber"?', options: ['Un tipo de tijera', 'Fibras para ocultar zonas con poco cabello', 'Un champú', 'Cera de peinar'], correctAnswer: 1 },
          { id: 'l4q2', type: 'multiple', question: '¿Para qué sirve el tinte en spray de barbero?', options: ['Para pintar paredes', 'Perfeccionar contornos y dar densidad visual al corte', 'Para color permanente', 'No se usa'], correctAnswer: 1 },
          { id: 'l4q3', type: 'multiple', question: '¿Qué es un reflejo en colorimetría?', options: ['Mirarse al espejo', 'El matiz secundario que toma el cabello con el tinte', 'El sol', 'Un error de luz'], correctAnswer: 1 },
          { id: 'l4q4', type: 'multiple', question: '¿Para qué sirve la decoloración?', options: ['Para oscurecer', 'Aclarar el tono natural para aplicar colores fantasía o claros', 'Para lavar', 'Para dar brillo'], correctAnswer: 1 },
          { id: 'l4q5', type: 'multiple', question: '¿Qué es el tinte "tono sobre tono"?', options: ['Aclarar mucho', 'Coloración que no aclara, solo aporta matiz o cubre canas suavemente', 'Pintar de colores', 'No existe'], correctAnswer: 1 },
          { id: 'l4q6', type: 'multiple', question: 'Importancia de la prueba de alergia:', options: ['Para perder tiempo', 'Evitar reacciones adversas graves al tinte en el cliente', 'Para vender más', 'No es importante'], correctAnswer: 1 },
          { id: 'l4q7', type: 'multiple', question: '¿Qué es un color "Fantasía"?', options: ['Negro', 'Colores vivos como azul, verde, rosa, etc.', 'Rubio natural', 'Castaño'], correctAnswer: 1 },
          { id: 'l4q8', type: 'multiple', question: '¿Para qué sirve el oxidante (Peróxido)?', options: ['Para limpiar', 'Activar el tinte y permitir que penetre en la fibra capilar', 'Para dar olor', 'Es el tinte mismo'], correctAnswer: 1 },
          { id: 'l4q9', type: 'multiple', question: '¿Cómo se cubren las canas difíciles?', options: ['Con agua', 'Usando tonos naturales y tiempo adecuado de exposición', 'No se pueden cubrir', 'Con un marcador'], correctAnswer: 1 },
          { id: 'l4q10', type: 'multiple', question: '¿Qué es la pigmentación del cuero cabelludo?', options: ['Un tatuaje', 'Uso de pigmentos para simular folículos en zonas calvas', 'Pintar con tiza', 'No existe'], correctAnswer: 1 }
        ]
      },
      {
        id: 'l5',
        title: 'Módulo 5: El Negocio de la Barbería',
        parts: [
          {
            id: 'l5p1',
            title: 'Atención y Venta de Productos',
            type: 'document',
            content: 'Cómo aumentar el ticket promedio.',
            topics: [
              { title: 'Retail en Barbería', description: 'Venta de ceras, aceites y peines.', whatIsItFor: 'Ingresos extras y cuidado del cliente en casa.', howToDoIt: 'Recomendar productos usados durante el servicio.', image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=400' }
            ]
          }
        ],
        lessonExam: [
          { id: 'l5q1', type: 'multiple', question: '¿Cuál es la mejor publicidad?', options: ['Gritar en la calle', 'Un cliente satisfecho y redes sociales activas', 'No hacer nada', 'Carteles rotos'], correctAnswer: 1 },
          { id: 'l5q2', type: 'multiple', question: 'Importancia del agendamiento (Citas):', options: ['Para molestar', 'Organizar el tiempo, evitar esperas largas y mejorar el servicio', 'Para que el local se vea vacío', 'No es necesario'], correctAnswer: 1 },
          { id: 'l5q3', type: 'multiple', question: '¿Qué es la fidelización?', options: ['Cobrar caro', 'Lograr que el cliente regrese y prefiera tu servicio siempre', 'Regalar todo', 'Obligar al cliente'], correctAnswer: 1 },
          { id: 'l5q4', type: 'multiple', question: '¿Cómo aumentar el ticket promedio?', options: ['Subiendo el precio a escondidas', 'Ofreciendo productos de cuidado personal o servicios adicionales', 'Haciendo cortes rápidos', 'No se puede'], correctAnswer: 1 },
          { id: 'l5q5', type: 'multiple', question: 'Importancia de la imagen personal del barbero:', options: ['No importa', 'Transmite limpieza, estilo y confianza al cliente', 'Para ser modelo', 'Solo si el jefe mira'], correctAnswer: 1 },
          { id: 'l5q6', type: 'multiple', question: '¿Qué es el "Client Detail"?', options: ['La factura', 'Registro de gustos, cortes anteriores y datos del cliente', 'Un premio', 'No existe'], correctAnswer: 1 },
          { id: 'l5q7', type: 'multiple', question: '¿Cómo manejar una queja?', options: ['Echar al cliente', 'Escuchar, disculparse y ofrecer una solución inmediata', 'Ignorar', 'Discutir'], correctAnswer: 1 },
          { id: 'l5q8', type: 'multiple', question: '¿Para qué sirven las redes sociales en barbería?', options: ['Para jugar', 'Portafolio digital para mostrar trabajos y atraer clientes', 'Para ver videos', 'No sirven'], correctAnswer: 1 },
          { id: 'l5q9', type: 'multiple', question: '¿Qué es el servicio al cliente premium?', options: ['Cobrar mucho', 'Superar las expectativas con trato excelente y extras (café, masajes)', 'Solo cortar el pelo', 'Tener tijeras de oro'], correctAnswer: 1 },
          { id: 'l5q10', type: 'multiple', question: 'Importancia de la educación continua:', options: ['Para perder tiempo', 'Mantenerse actualizado en tendencias, herramientas y técnicas', 'Para nada', 'Ya lo sé todo'], correctAnswer: 1 }
        ]
      }
    ],
    finalExam: [
      { id: 'bar-f1', type: 'multiple', question: '¿Qué es un corte "Taper"?', options: ['Degradado solo en patillas y nuca', 'Rapado arriba', 'Largo total', 'Corte de niños'], correctAnswer: 0 },
      { id: 'bar-f2', type: 'multiple', question: '¿Para qué sirve el talco en barbería?', options: ['Para el olor', 'Para retirar cabellos cortados de la piel', 'Para teñir', 'Para brillar'], correctAnswer: 1 },
      { id: 'bar-f3', type: 'multiple', question: '¿Qué es el "Buzz Cut"?', options: ['Pelo largo', 'Corte muy corto y uniforme (militar)', 'Moño', 'Color rubio'], correctAnswer: 1 },
      { id: 'bar-f4', type: 'multiple', question: '¿Cómo evitamos la foliculitis?', options: ['No afeitando', 'Higiene y técnica correcta de dirección de crecimiento', 'Usando jabón de manos', 'Afeitando en seco'], correctAnswer: 1 },
      { id: 'bar-f5', type: 'multiple', question: '¿Para qué sirve el peine "Flat Top"?', options: ['Para rulos', 'Para cortes de corona plana', 'Para desenredar', 'Para barba'], correctAnswer: 1 },
      { id: 'bar-f6', type: 'multiple', question: '¿Qué es la técnica "Scissors over comb"?', options: ['Cortar con la mano', 'Corte con tijera sobre peine', 'Corte con máquina', 'Peinado'], correctAnswer: 1 },
      { id: 'bar-f7', type: 'multiple', question: '¿Cuál es el "Hueso Occipital"?', options: ['La frente', 'Hueso de la parte trasera del cráneo', 'La mandíbula', 'El pómulo'], correctAnswer: 1 },
      { id: 'bar-f8', type: 'multiple', question: '¿Qué es el "Nape"?', options: ['La frente', 'La nuca', 'La oreja', 'La nariz'], correctAnswer: 1 },
      { id: 'bar-f9', type: 'multiple', question: '¿Para qué sirve la "Capa"?', options: ['Para dar calor', 'Protección del cliente contra el cabello cortado', 'De adorno', 'Para limpiar'], correctAnswer: 1 },
      { id: 'bar-f10', type: 'multiple', question: 'Ética del barbero:', options: ['Hablar mucho', 'Higiene, puntualidad y respeto al cliente', 'Solo cobrar', 'Ser famoso'], correctAnswer: 1 }
    ]
  },
  {
    id: 'cejas-pestanas',
    title: 'Estilismo en Cejas y Pestañas',
    category: 'Belleza',
    description: 'Embellece la mirada con técnicas de precisión.',
    longDescription: 'Diseño de cejas (Visagismo), Henna, Lifting de pestañas y extensiones pelo a pelo.',
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800',
    competencies: ['Visagismo de cejas', 'Lifting de pestañas', 'Extensiones clásicas'],
    subjects: [
      { name: 'Visagismo', credits: 4 },
      { name: 'Pestañas', credits: 5 },
      { name: 'Bioseguridad', credits: 3 }
    ],
    lessons: [
      {
        id: 'cey-l1',
        title: 'Módulo 1: Diseño de Cejas y Pestañas',
        parts: [
          {
            id: 'cey-l1p1',
            title: 'Visagismo y Diseño',
            type: 'document',
            content: 'El visagismo es el arte de diseñar cejas según la estructura facial.',
            topics: [
              { title: 'Puntos de Medición', description: 'Inicio, arco y cola de la ceja.', whatIsItFor: 'Lograr simetría total.', howToDoIt: 'Usar pie de rey o hilo marcador.', image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=400' },
              { title: 'Lifting de Pestañas', description: 'Técnica para elevar la pestaña natural.', whatIsItFor: 'Dar efecto de mayor longitud y curvatura.', howToDoIt: 'Uso de químicos seguros y bigudíes.', image: 'https://images.unsplash.com/photo-1560869713-7d0a29430863?auto=format&fit=crop&q=80&w=400' }
            ]
          }
        ],
        lessonExam: [
          { id: 'cey-q1', type: 'multiple', question: '¿Qué es el visagismo?', options: ['Corte de pelo', 'Estudio de las proporciones del rostro', 'Maquillaje de labios', 'Un tipo de crema'], correctAnswer: 1 },
          { id: 'cey-q2', type: 'multiple', question: '¿Cuál es el punto más alto de la ceja?', options: ['Inicio', 'Arco', 'Cola', 'Final'], correctAnswer: 1 },
          { id: 'cey-q3', type: 'multiple', question: '¿Qué es el Lifting de pestañas?', options: ['Extensiones', 'Elevación química de la pestaña natural', 'Pintura de ojos', 'Un masaje'], correctAnswer: 1 },
          { id: 'cey-q4', type: 'multiple', question: 'Herramienta para medir simetría:', options: ['Regla escolar', 'Calibrador o Pie de Rey', 'Lápiz labial', 'Tijeras'], correctAnswer: 1 },
          { id: 'cey-q5', type: 'multiple', question: '¿Qué es la Henna?', options: ['Un pegamento', 'Tinte natural para cejas', 'Un tipo de pinza', 'Un tónico'], correctAnswer: 1 },
          { id: 'cey-q6', type: 'multiple', question: '¿Cuánto tiempo dura el diseño con Henna en piel?', options: ['Un mes', 'De 3 a 7 días aproximadamente', '24 horas', 'Eterno'], correctAnswer: 1 },
          { id: 'cey-q7', type: 'multiple', question: '¿Para qué sirve la microporosa?', options: ['Pintar', 'Sujetar párpados o proteger zona inferior', 'Limpiar el rostro', 'Para rulos'], correctAnswer: 1 },
          { id: 'cey-q8', type: 'multiple', question: '¿Qué es el mapeo de cejas?', options: ['Hacer un dibujo del mapa', 'Trazado previo para definir forma', 'Depilación', 'Uso de sombras'], correctAnswer: 1 },
          { id: 'cey-q9', type: 'multiple', question: '¿Cuál es la función del cepillo tipo Spoolie?', options: ['Cortar', 'Peinar y difuminar', 'Pintar', 'Lavar'], correctAnswer: 1 },
          { id: 'cey-q10', type: 'multiple', question: '¿Qué hacer ante una irritación?', options: ['Seguir trabajando', 'Detener proceso y lavar con agua/solución fisiológica', 'Poner más producto', 'Rascar'], correctAnswer: 1 }
        ]
      },
      {
        id: 'l2',
        title: 'Módulo 2: Henna y Tinte Progresivo',
        parts: [
          {
            id: 'l2p1',
            title: 'Uso de la Henna para Cejas',
            type: 'document',
            content: `**Introducción:** La henna es un tinte orgánico que sombrea la piel y tiñe el vello para un efecto de ceja más poblada.

**Explicación Detallada:** La preparación requiere mezclar el pigmento con agua mineral o activador hasta obtener una textura de "yogurt". La piel debe estar limpia de aceites. Se aplica siguiendo el diseño previo de visagismo y su duración depende del tipo de piel (en pieles grasas dura menos). El efecto "Ombré" se logra retirando el inicio de la ceja antes que el resto.

**Resumen:** Es la alternativa perfecta para quienes buscan definición sin recurrir al tatuaje permanente.

**Puntos Clave:**
*   **Fijación:** Dura de 3 a 7 días en piel y hasta 2 semanas en vello.
*   **Color:** Elegir tonos cenizos para evitar que oxiden a naranja.
*   **Higiene:** Realizar siempre prueba de parche 4s horas antes.`,
            topics: [
              {
                title: 'Técnica de Sombreado Temporal',
                description: `Aprender a aplicar henna de forma degradada para un acabado natural.`,
                whatIsItFor: `**Objetivo:** Ofrecer un servicio de diseño de cejas semipermanente muy rentable.`,
                howToDoIt: `**Instrucción:** Aplica la henna con un pincel biselado, marcando primero la base y la cola de la ceja.`,
                image: 'https://images.unsplash.com/photo-1595475204848-9f89fe1d40dd?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'l2p2',
            title: 'Tintes y Pigmentos Híbridos',
            type: 'document',
            content: `**Introducción:** Los tintes híbridos son la evolución de la henna, con mayor durabilidad y variedad de tonos.

**Explicación Detallada:** Los tintes químicos específicos para cejas y pestañas penetran en la cutícula del vello, logrando una coloración que dura hasta un mes. Son ideales para cubrir canas en las cejas o para clientes que quieren pestañas negras azabache sin usar máscara. Se suele combinar con el lifting para un resultado total.

**Resumen:** Proporcionan un color más sólido y duradero que la henna tradicional.

**Puntos Clave:**
*   **Oxidante:** Se mezclan con reveladores de bajo volumen (3% o 6%).
*   **Canas:** Cobertura total de vello blanco.
*   **Pestañas:** El tinte de pestañas es esencial tras un lifting.`,
            topics: [
              {
                title: 'Coloración de Vello',
                description: `Diferencias entre henna y tinte oxidativo.`,
                whatIsItFor: `**Objetivo:** Dominar todas las opciones de coloración para la mirada.`,
                howToDoIt: `**Práctica:** Aplica tinte negro en las pestañas inferiores protegiendo la piel con un parche.`,
                image: 'https://images.unsplash.com/photo-1595475204848-9f89fe1d40dd?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'l2p3',
            title: 'Mantenimiento del Diseño',
            type: 'document',
            content: `**Introducción:** El diseño de cejas requiere un mantenimiento constante para no perder la forma.

**Explicación Detallada:** Enseñaremos a realizar la depilación con pinza y con hilo (threading) de forma precisa. Se debe eliminar solo el vello que crece fuera del mapa diseñado. Limpiar el arco de la ceja y el entrecejo abre la mirada y rejuvenece el rostro del cliente de forma inmediata.

**Resumen:** Un buen mantenimiento preserva el visagismo realizado originalmente.

**Puntos Clave:**
*   **Hilo:** Técnica milenaria que no jala la piel (ideal para pieles sensibles).
*   **Pinza:** Calidad del agarre para no romper el vello.
*   **Post-depilación:** Aplicar gel de aloe vera para calmar.`,
            topics: [
              {
                title: 'Depilación de Precisión',
                description: `Técnicas de remoción manual de vello para definir contornos.`,
                whatIsItFor: `**Objetivo:** Mantener la limpieza y pulcritud del diseño de cejas.`,
                howToDoIt: `**Logro:** Depila el entrecejo buscando una distancia de dos dedos entre ceja y ceja.`,
                image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'l2p4',
            title: 'Higiene y Salud del Vello',
            type: 'document',
            content: `**Introducción:** Una ceja sana es la base de un buen trabajo. No podemos aplicar químicos en pieles irritadas.

**Explicación Detallada:** El uso excesivo de henna o laminados puede resecar el vello. El uso de aceites de castor o sueros con biotina ayuda a fortalecer el vello desde la raíz. Debemos educar al cliente para que no se depile en casa y use productos hidratantes específicos en la zona.

**Resumen:** El cuidado de la salud del vello garantiza que podamos seguir realizando servicios con éxito.

**Puntos Clave:**
*   **Hidratación:** El vello facial también necesita nutrición.
*   **Crecimiento:** Cómo estimular zonas calvas mediante masajes circulares.
*   **Enfermedades:** Identificar alopecia areata o dermatitis para derivar al médico.`,
            topics: [
              {
                title: 'Nutrición Capilar Facial',
                description: `Uso de aceites y sueros para el crecimiento de cejas y pestañas.`,
                whatIsItFor: `**Objetivo:** Mejorar la materia prima (vello) del cliente para mejores diseños.`,
                howToDoIt: `**Tarea:** Recomienda al cliente el uso nocturno de aceite de almendras en las cejas.`,
                image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'l2p5',
            title: 'Correcciones de Diseño',
            type: 'document',
            content: `**Introducción:** No siempre recibimos cejas perfectas; a veces debemos corregir trabajos mal hechos o asimetrías naturales.

**Explicación Detallada:** Ante una ceja mucho más alta que la otra, podemos equilibrarlas bajando el arco de una y subiendo la cola de la otra mediante depilación y tinte. Si faltan vellos, el mapeo debe ser capaz de inventar una forma que armonice con la nariz y ojos del cliente para ocultar el defecto.

**Resumen:** La corrección es donde el experto demuestra su capacidad de diseño estratégico.

**Puntos Clave:**
*   **Simetría:** El rostro nunca es 100% simétrico; buscamos el equilibrio.
*   **Paciencia:** Algunos diseños de cejas toman varios meses en recuperarse.
*   **Maquillaje:** Usarlo como guía de cómo quedará la ceja tras el crecimiento.`,
            topics: [
              {
                title: 'Estrategias de Camuflaje',
                description: `Cómo corregir defectos de crecimiento mediante técnicas de diseño.`,
                whatIsItFor: `**Objetivo:** Restaurar la armonía facial en clientes con cejas poco pobladas o asimétricas.`,
                howToDoIt: `**Ejercicio:** Realiza un mapeo en un cliente con cejas muy finas buscando dar un poco más de grosor con henna.`,
                image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=400'
              }
            ]
          }
        ],
        lessonExam: [
          { id: 'l2q1', type: 'multiple', question: '¿Para qué sirve la henna?', options: ['Solo para pelo', 'Dar color temporal a la piel y vello de la ceja', 'Para labios', 'No sirve'], correctAnswer: 1 },
          { id: 'l2q2', type: 'multiple', question: '¿Qué es el diseño "Ombré" en cejas?', options: ['Cejas muy oscuras', 'Degradado de color de claro a oscuro', 'Cejas rojas', 'Sin color'], correctAnswer: 1 },
          { id: 'l2q3', type: 'multiple', question: '¿Cómo se prepara la piel antes de la henna?', options: ['Sin limpiar', 'Exfoliación suave y desengrase profundo', 'Poniendo crema', 'Mojando con agua sola'], correctAnswer: 1 },
          { id: 'l2q4', type: 'multiple', question: 'Importancia del tiempo de pose de la henna:', options: ['No importa', 'Determina la intensidad del color en la piel', 'Para que el cliente descanse', 'Es un requisito'], correctAnswer: 1 },
          { id: 'l2q5', type: 'multiple', question: '¿Qué es la Henna de alta fijación?', options: ['Dura 1 mes', 'Producto con mayor concentración de pigmento', 'Un tipo de pegamento', 'No existe'], correctAnswer: 1 },
          { id: 'l2q6', type: 'multiple', question: '¿Cómo se retira la henna excedente?', options: ['Con alcohol', 'Con algodón húmedo o tónico específico', 'Rasguñando', 'Con jabón'], correctAnswer: 1 },
          { id: 'l2q7', type: 'multiple', question: '¿Qué es el mapeo híbrido?', options: ['Uso de hilos y lápiz para diseñar', 'Diseño a mano alzada solamente', 'Un error', 'Uso de un compás'], correctAnswer: 0 },
          { id: 'l2q8', type: 'multiple', question: '¿Para qué sirve el perfilador de cejas?', options: ['Para pintar', 'Remover vellos finos y definir el diseño final', 'Para cortar pelo largo solamente', 'Para masajear'], correctAnswer: 1 },
          { id: 'l2q9', type: 'multiple', question: 'Recomendación post-henna:', options: ['Mojar las cejas de inmediato', 'No mojar el área por 24 horas', 'Ponerse mucho sol', 'Maquillar encima'], correctAnswer: 1 },
          { id: 'l2q10', type: 'multiple', question: '¿En qué casos no aplicar henna?', options: ['Piel sana', 'Piel con heridas, brotes o alergia al producto', 'Cualquier cliente', 'Si el cliente tiene sueño'], correctAnswer: 1 }
        ]
      },
      {
        id: 'l3',
        title: 'Módulo 3: Extensiones de Pestañas (Clásicas)',
        parts: [
          {
            id: 'l3p1',
            title: 'Técnica Pelo a Pelo (Clásica)',
            type: 'document',
            content: `**Introducción:** La técnica 1x1 consiste en aplicar una extensión de fibra sintética sobre una sola pestaña natural.

**Explicación Detallada:** El aislamiento es el paso más crítico; usamos una pinza para separar una pestaña natural de sus vecinas antes de pegar la extensión. El adhesivo debe ser de grado médico (cianoacrilato) y secar en contacto con la humedad del aire. Es vital dejar una distancia de 0.5mm a 1mm del párpado para no causar irritación o alergias por contacto directo.

**Resumen:** Las extensiones clásicas dan longitud y oscuridad sin comprometer la salud del ojo.

**Puntos Clave:**
*   **Aislamiento:** Evita los "stickies" (pestañas pegadas entre sí).
*   **Distancia:** Respetar el margen del párpado es obligatorio.
*   **Higiene:** Uso de parches de hidrogel para proteger las pestañas inferiores.`,
            topics: [
              {
                title: 'Colocación Segura de Extensiones',
                description: `Aprender el manejo de pinzas y adhesivos en la zona ocular.`,
                whatIsItFor: `**Objetivo:** Lograr un efecto de rimel permanente con un acabado natural y pulcro.`,
                howToDoIt: `**Instrucción:** Sumerge la base de la extensión en el adhesivo y deslízala suavemente sobre la pestaña natural.`,
                image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'l3p2',
            title: 'Adhesivos y Parámetros de Retención',
            type: 'document',
            content: `**Introducción:** El adhesivo es el mejor amigo o el peor enemigo del lashista. Su comportamiento cambia con el clima.

**Explicación Detallada:** Un adhesivo profesional requiere un ambiente controlado: humedad entre 40-60% y temperatura de 18-24°C. Si hay mucha humedad, el pegamento seca demasiado rápido (secado por choque) y no habrá buena retención. Aprenderemos a usar el Nano Mister para polimerizar el adhesivo al final y el higrómetro para medir los parámetros de tu cabina.

**Resumen:** Controlar el ambiente de trabajo garantiza que las pestañas del cliente duren 3 o 4 semanas.

**Puntos Clave:**
*   **Cianoacrilato:** El componente activo que reacciona a la humedad.
*   **Vapores:** Usar ventiladores pequeños para dispersar los gases del adhesivo.
*   **Gota Fresh:** Cambiar la gota de pegamento cada 15-20 minutos.`,
            topics: [
              {
                title: 'Química del Adhesivo',
                description: `Cómo influyen la temperatura y humedad en el pegado de las extensiones.`,
                whatIsItFor: `**Objetivo:** Maximizar la durabilidad de las extensiones aplicadas.`,
                howToDoIt: `**Logro:** Usa un higrómetro en tu mesa de trabajo para verificar que la humedad sea óptima.`,
                image: 'https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'l3p3',
            title: 'Diseño de Mirada (Mapping)',
            type: 'document',
            content: `**Introducción:** No todos los ojos deben llevar el mismo diseño. El mapeo personaliza el servicio.

**Explicación Detallada:** Usamos el parche de hidrogel para dibujar los números (longitudes) que vamos a aplicar. El mapa **"Ojo de Gato"** alarga ojos redondos, mientras que el mapa **"Dolly"** (muñeca) abre ojos caídos poniendo las fibras más largas al centro. Debemos medir el largo de la pestaña natural y nunca exceder un 30% de su tamaño original para no dañarla.

**Resumen:** El mapping es la parte artística donde corregimos visualmente la forma del ojo.

**Puntos Clave:**
*   **Longitudes:** Desde 7mm hasta 14mm son las más comunes.
*   **Curvaturas:** C, CC y D para diferentes efectos de elevación.
*   **Transición:** Cambiar de número de forma fluida para que no se vean escalones.`,
            topics: [
              {
                title: 'Arquitectura de Pestañas',
                description: `Dibujo de mapas sobre el parche para guiar la aplicación.`,
                whatIsItFor: `**Objetivo:** Estilizar la mirada del cliente resaltando sus mejores rasgos.`,
                howToDoIt: `**Tarea:** Dibuja un mapa de "Ojo de Gato" sobre un parche de práctica dividiéndolo en 5 secciones.`,
                image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'l3p4',
            title: 'Retoques y Remoción Segura',
            type: 'document',
            content: `**Introducción:** Las pestañas naturales caen por ciclo biológico, por lo que el servicio requiere mantenimiento.

**Explicación Detallada:** Un retoque se hace cada 21 días aproximadamente. Debemos retirar las extensiones que han crecido mucho y están pesando sobre la punta de la pestaña natural. Para una remoción completa, usamos un removedor en crema que disuelve el adhesivo en 5 minutos sin dañar el vello. NUNCA se deben arrancar las extensiones manualmente.

**Resumen:** El mantenimiento profesional asegura que el cliente tenga pestañas hermosas todo el año sin huecos.

**Puntos Clave:**
*   **Crecimiento:** Las pestañas crecen 0.5mm al día; la extensión se aleja del párpado.
*   **Remover en Crema:** Más seguro que el líquido porque no corre hacia el ojo.
*   **Evaluación:** Si el cliente tiene menos del 30% de pestañas, se cobra como set nuevo.`,
            topics: [
              {
                title: 'Ciclo de Vida de la Pestaña',
                description: `Cómo manejar las fases anágena, catágena y telógena en el servicio.`,
                whatIsItFor: `**Objetivo:** Mantener el set de extensiones impecable a lo largo del tiempo.`,
                howToDoIt: `**Instrucción:** Usa dos pinzas para separar la extensión crecida y retírala con un movimiento firme pero suave ("banana peel").`,
                image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'l3p5',
            title: 'Higiene de Párpados y Salon Care',
            type: 'document',
            content: `**Introducción:** El mito de que las pestañas no se lavan es peligroso y causa infecciones.

**Explicación Detallada:** El cliente debe lavar sus extensiones a diario con una espuma limpiadora (Lash Shampoo) y una brocha suave. La acumulación de grasa, piel muerta y maquillaje puede causar Blefaritis o proliferación de ácaros Demodex. Como profesionales, debemos realizar un "Lash Bath" antes de cada aplicación para que el adhesivo pegue sobre vello limpio.

**Resumen:** La limpieza es salud ocular y garantiza la mejor retención del adhesivo.

**Puntos Clave:**
*   **Lash Shampoo:** Libre de aceites para no soltar el pegamento.
*   **Secado:** Usar un ventilador y cepillar para que queden esponjosas.
*   **Desechables:** El cepillo (spoolie) se entrega al cliente tras el servicio.`,
            topics: [
              {
                title: 'Protocolo de Limpieza Ocular',
                description: `Cómo prevenir infecciones mediante la educación al cliente.`,
                whatIsItFor: `**Objetivo:** Mantener la higiene del área ocular y mejorar la calidad del servicio.`,
                howToDoIt: `**Logro:** Realiza un lavado de pestañas completo usando espuma y enjuagando con solución salina.`,
                image: 'https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&q=80&w=400'
              }
            ]
          }
        ],
        lessonExam: [
          { id: 'l3q1', type: 'multiple', question: '¿Qué es el adhesivo cyanoacrilato?', options: ['Un champú', 'Pegamento de secado rápido para pestañas', 'Un tónico', 'No existe'], correctAnswer: 1 },
          { id: 'l3q2', type: 'multiple', question: '¿Qué es la técnica "Clásica" 1x1?', options: ['Poner 10 pestañas por ojo', 'Una extensión sobre cada pestaña natural', 'Grupos de pestañas', 'Pestañas magnéticas'], correctAnswer: 1 },
          { id: 'l3q3', type: 'multiple', question: 'Importancia del aislamiento:', options: ['Para ir rápido', 'Evitar que las pestañas se peguen entre sí (Stickies)', 'Para que se vean más negras', 'No es necesario'], correctAnswer: 1 },
          { id: 'l3q4', type: 'multiple', question: '¿Qué es el "Bonding Area"?', options: ['La punta de la pestaña', 'Zona de contacto entre la extensión y la pestaña natural', 'El párpado', 'El ojo'], correctAnswer: 1 },
          { id: 'l3q5', type: 'multiple', question: '¿Cómo elegir el grosor de la extensión?', options: ['Cualquiera sirve', 'Según la salud y capacidad de soporte de la pestaña natural', 'El más grueso siempre', 'El más fino siempre'], correctAnswer: 1 },
          { id: 'l3q6', type: 'multiple', question: '¿Qué es el efecto "Kim K"?', options: ['Solo pestañas cortas', 'Diseño con puntas o "spikes" más largos', 'Pestañas de un solo tamaño', 'Tinte de pestañas'], correctAnswer: 1 },
          { id: 'l3q7', type: 'multiple', question: '¿Para qué sirve el Nano Mister?', options: ['Dar color', 'Polimerización rápida del adhesivo y alivio post-servicio', 'Limpiar el ojo', 'Es un maquillaje'], correctAnswer: 1 },
          { id: 'l3q8', type: 'multiple', question: '¿Qué es el parche de hidrogel?', options: ['Para pintar', 'Protección de las pestañas inferiores y confort del cliente', 'Un premio', 'Para lavar'], correctAnswer: 1 },
          { id: 'l3q9', type: 'multiple', question: '¿Cuánto dura un retoque de pestañas?', options: ['1 mes', 'Cada 15 a 21 días', 'Cada 3 días', 'No necesitan retoque'], correctAnswer: 1 },
          { id: 'l3q10', type: 'multiple', question: 'Higiene del cliente en casa:', options: ['No lavar nunca las pestañas', 'Lavar con champú específico y cepillar para evitar infecciones', 'Quitarse las pestañas con aceite', 'No hacer nada'], correctAnswer: 1 }
        ]
      },
      {
        id: 'l4',
        title: 'Módulo 4: Laminado de Cejas (Brow Lamination)',
        parts: [
          {
            id: 'l4p1',
            title: 'Brow Lamination (Laminado de Cejas)',
            type: 'document',
            content: `**Introducción:** El laminado de cejas es un tratamiento que alisa y redirecciona el vello para un efecto de ceja orgánica y poblada.

**Explicación Detallada:** El proceso utiliza una solución química que rompe las uniones de azufre del vello (Paso 1) para que podamos peinarlo en la dirección deseada. Luego, aplicamos una crema neutralizante (Paso 2) para fijar esa nueva forma. Es ideal para cejas rebeldes, rizadas o con calvas, ya que el vello laminado cubre mejor los espacios vacíos.

**Resumen:** Es el servicio favorito de quienes buscan una ceja "Lion Brow" o de modelo, sin maquillaje diario.

**Puntos Clave:**
*   **Direccionalidad:** Peinar siempre a 45 grados para un look natural.
*   **Protección:** Aplicar aceite protector en la piel de alrededor para evitar irritaciones.
*   **Tiempo:** El vello fino requiere menos tiempo de exposición que el vello grueso.`,
            topics: [
              {
                title: 'Control de Textura del Vello',
                description: `Aprender a manejar los químicos de permanente y fijación en cejas.`,
                whatIsItFor: `**Objetivo:** Ofrecer una solución de diseño semipermanente para cejas rebeldes.`,
                howToDoIt: `**Instrucción:** Aplica el Paso 1 uniformemente y cubre con film osmótico para acelerar la reacción por calor.`,
                image: 'https://images.unsplash.com/photo-1560869713-7d0a29430863?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'l4p2',
            title: 'Lifting de Pestañas (Las Lift)',
            type: 'document',
            content: `**Introducción:** El lifting eleva la pestaña desde la base, creando un efecto de mayor longitud y mirada abierta.

**Explicación Detallada:** A diferencia de la permanente antigua que rizaba la pestaña en espiral, el lifting usa moldes de silicona planos (Power Pads) que estiran el vello hacia arriba. Incluye el tinte de pestañas al final del proceso para dar un efecto de máscara permanente. No daña la pestaña si se respetan los tiempos de los productos y se usa queratina nutritiva al final.

**Resumen:** Es el tratamiento de belleza ocular más natural y de mayor demanda en la actualidad.

**Puntos Clave:**
*   **Bigudíes:** Elegir el tamaño correcto (S, M, L) según el largo de la pestaña.
*   **Adhesivo:** Pegar las pestañas al molde de forma perfectamente paralela.
*   **Tinte:** El negro azabache es el tono estándar para un impacto máximo.`,
            topics: [
              {
                title: 'Elevación Curvatura Ocular',
                description: `Técnica para realzar la pestaña natural sin extensiones artificiales.`,
                whatIsItFor: `**Objetivo:** Brindar una curvatura perfecta a las pestañas durante 6 a 8 semanas.`,
                howToDoIt: `**Logro:** Aplica los químicos solo en la zona media de la pestaña, nunca en las puntas para no quemarlas.`,
                image: 'https://images.unsplash.com/photo-1560869713-7d0a29430863?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'l4p3',
            title: 'Errores Comunes y Reparación del Vello',
            type: 'document',
            content: `**Introducción:** Un error en los tiempos de pose puede dejar el vello de la ceja o pestaña "achilado" (quemado).

**Explicación Detallada:** Si el vello se ve rizado de forma artificial o se siente áspero, ha sufrido un sobreprocesamiento químico. Aprenderemos a realizar tratamientos de rescate con Bótox Capilar Ocular y aceites hidrosolubles. En casos graves, se debe recomendar al cliente no volver a realizarse el servicio hasta que el ciclo natural renueve todo el vello.

**Resumen:** El conocimiento de la química te permite evitar daños irreversibles y dar soluciones a clientes que vienen de malos servicios.

**Puntos Clave:**
*   **Porosidad:** El vello rubio o fino procesa mucho más rápido.
*   **Neutralización:** El Paso 2 es el que detiene la acción del Paso 1; nunca saltarlo.
*   **Reversa:** Técnica para "bajar" un laminado demasiado marcado.`,
            topics: [
              {
                title: 'Gestión de Daño Químico',
                description: `Cómo identificar y tratar vello sobreprocesado por malas técnicas.`,
                whatIsItFor: `**Objetivo:** Ser un especialista capaz de recuperar la salud de la mirada de tus clientes.`,
                howToDoIt: `**Instrucción:** Aplica una máscara hidratante de queratina y deja actuar por 15 minutos en vellos dañados.`,
                image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'l4p4',
            title: 'Diseño de Cejas Masculinas',
            type: 'document',
            content: `**Introducción:** El mercado masculino está en auge. El hombre busca limpieza sin que se note que se hizo algo.

**Explicación Detallada:** En las cejas masculinas no se busca un arco marcado ni una cola fina. Se trata de limpiar el entrecejo, quitar los "pelos locos" que sobresalen y definir sutilmente la base. El laminado en hombres se usa para controlar cejas muy desordenadas, peinándolas de forma plana y varonil, nunca hacia arriba exagerado.

**Resumen:** La sutileza es la clave para ganar y mantener clientes hombres en el área de la mirada.

**Puntos Clave:**
*   **Naturalidad:** No dejar bordes demasiado rectos o artificiales.
*   **Perfilado:** Limpiar el vello de los párpados superiores para "limpiar" la mirada.
*   **Tinte:** Usar tonos muy suaves si es necesario cubrir alguna cana.`,
            topics: [
              {
                title: 'Estilismo Masculino de la Mirada',
                description: `Diferencias entre el diseño femenino y masculino de cejas.`,
                whatIsItFor: `**Objetivo:** Ampliar tu cartera de clientes incluyendo al público varonil.`,
                howToDoIt: `**Tarea:** Realiza una limpieza de ceja masculina removiendo solo el vello que crece muy fuera de la forma natural.`,
                image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'l4p5',
            title: 'Cuidados Post-Tratamiento en Casa',
            type: 'document',
            content: `**Introducción:** El 50% de la durabilidad del servicio depende del cuidado del cliente en casa.

**Explicación Detallada:** Durante las primeras 24 horas NO se deben mojar las cejas ni pestañas tras un laminado o lifting, ya que el proceso químico sigue actuando internamente. Deben evitar vapores (cocina, sauna) y no dormir boca abajo. Es indispensable venderles un aceite nutritivo para que lo apliquen cada noche y mantengan el vello hidratado y flexible.

**Resumen:** Una buena hoja de cuidados post-servicio reduce las quejas y aumenta la satisfacción.

**Puntos Clave:**
*   **Regla de Oro:** No agua, no vapor por 24 horas.
*   **Peinado:** Indicar al cliente que debe peinar sus cejas cada mañana tras el laminado.
*   **Frecuencia:** No repetir el servicio antes de 6 u 8 semanas.`,
            topics: [
              {
                title: 'Educación del Cliente',
                description: `Pautas para que el trabajo se mantenga perfecto por más tiempo.`,
                whatIsItFor: `**Objetivo:** Garantizar resultados óptimos y duraderos en todos tus servicios.`,
                howToDoIt: `**Logro:** Entrega una tarjeta de cuidados post-servicio a cada cliente antes de que se retire del salón.`,
                image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=400'
              }
            ]
          }
        ],
        lessonExam: [
          { id: 'l4q1', type: 'multiple', question: '¿Para qué sirve el laminado?', options: ['Para alisar el vello de la ceja', 'Para quitar la ceja', 'Para pintar la piel', 'Es un maquillaje'], correctAnswer: 0 },
          { id: 'l4q2', type: 'multiple', question: '¿Qué es el paso 1 (Bonding/Permanente)?', options: ['Fijar el color', 'Ablandar los puentes del vello para darle nueva forma', 'Dar brillo', 'Limpiar'], correctAnswer: 1 },
          { id: 'l4q3', type: 'multiple', question: '¿Para qué sirve el paso 2 (Neutralizante)?', options: ['Pintar', 'Sellar y fijar la nueva dirección del vello', 'Eliminar la ceja', 'No tiene importancia'], correctAnswer: 1 },
          { id: 'l4q4', type: 'multiple', question: '¿Qué es la "Capa de Protección"?', options: ['Un dibujo', 'Uso de hidratante o protector antes de los químicos', 'Una crema solar', 'No existe'], correctAnswer: 1 },
          { id: 'l4q5', type: 'multiple', question: 'Tiempo ideal para el paso 1 en vello fino:', options: ['20 minutos', '5 a 8 minutos', '1 hora', '1 minuto'], correctAnswer: 1 },
          { id: 'l4q6', type: 'multiple', question: '¿Cómo se peina el vello en laminado?', options: ['Hacia abajo', 'Hacia arriba y en diagonal siguiendo un diseño armónico', 'Desordenado', 'No se peina'], correctAnswer: 1 },
          { id: 'l4q7', type: 'multiple', question: '¿Qué es el "Brow Tox"?', options: ['Un veneno', 'Tratamiento hidratante profundo post-laminado', 'Un tipo de tinte', 'Un error'], correctAnswer: 1 },
          { id: 'l4q8', type: 'multiple', question: '¿Qué hacer si el vello se sobreprocesa?', options: ['Poner más químico', 'Hidratar profundamente y recomendar cuidados especiales', 'Cortarlo todo', 'No hacer nada'], correctAnswer: 1 },
          { id: 'l4q9', type: 'multiple', question: '¿Para qué sirve el film osmótico (papel film)?', options: ['Para envolver comida', 'Generar calor y potenciar el efecto de los químicos', 'Secar el área', 'Como adorno'], correctAnswer: 1 },
          { id: 'l4q10', type: 'multiple', question: 'Indicación post-laminado:', options: ['Mojar las cejas de inmediato', 'No mojar por 24h y peinar a diario con cepillo especial', 'Ir a la piscina', 'Dormir boca abajo'], correctAnswer: 1 }
        ]
      },
      {
        id: 'l5',
        title: 'Módulo 5: Marketing y Gestión de Cabina',
        parts: [
          {
            id: 'l5p1',
            title: 'Gestión de Cabina y Bioseguridad',
            type: 'document',
            content: `**Introducción:** Tu estación de trabajo proyecta tu profesionalismo. Un área sucia ahuyenta clientes.

**Explicación Detallada:** En servicios de la mirada trabajamos muy cerca del ojo, por lo que la esterilidad de las pinzas es innegociable. Debes tener un protocolo de desinfección de tres pasos: lavado con jabón enzimático, inmersión en desinfectante de alto nivel (como el Glutaraldehído) y almacenamiento en esterilizador UV. Usa sábanas descartables y tapabocas durante todo el servicio.

**Resumen:** La bioseguridad protege la salud de tus clientes y el prestigio de tu negocio.

**Puntos Clave:**
*   **Pinzas:** Esterilizarlas tras cada uso para evitar contagios de conjuntivitis.
*   **Desechables:** Anillos porta-pegamento, cepillitos y parches son de un solo uso.
*   **Orden:** Mantener el kit organizado para trabajar de forma ágil y segura.`,
            topics: [
              {
                title: 'Esterilización Profesional',
                description: `Protocolos de limpieza profunda para herramientas de precisión.`,
                whatIsItFor: `**Objetivo:** Trabajar bajo normas internacionales de salud estética.`,
                howToDoIt: `**Instrucción:** Sumerge las pinzas en la solución desinfectante respetando el tiempo indicado por el fabricante.`,
                image: 'https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'l5p2',
            title: 'Fotografía de Detalle Ocular (Macro)',
            type: 'document',
            content: `**Introducción:** En el mundo de las pestañas, lo que vende es la nitidez de la foto.

**Explicación Detallada:** Necesitas aprender a usar lentes macro para tu celular. La foto debe mostrar cada pestaña perfectamente aislada, sin restos de pegamento y con un diseño impecable. La iluminación debe ser blanca y frontal para evitar sombras duras en el párpado. Aprenderemos a capturar el "Cash Shot" (la foto que trae dinero), que suele ser el ojo abierto mirando a cámara.

**Resumen:** Una fotografía de alta calidad es tu mejor herramienta de marketing digital.

**Puntos Clave:**
*   **Enfoque:** Asegurarse de que el foco esté en la base de las pestañas.
*   **Luz:** Usar focos LED articulados para iluminar el iris del cliente.
*   **Ángulos:** Fotos de frente, de perfil y desde arriba (plano cenital).`,
            topics: [
              {
                title: 'Captura de Portafolio',
                description: `Técnicas de fotografía con celular para resaltar trabajos de precisión.`,
                whatIsItFor: `**Objetivo:** Crear un catálogo visual que demuestre tu destreza técnica.`,
                howToDoIt: `**Logro:** Toma una foto macro de un set de pestañas clásico donde se aprecie el aislamiento perfecto.`,
                image: 'https://images.unsplash.com/photo-1497339100210-9e87df79c218?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'l5p3',
            title: 'Marketing para Especialistas de la Mirada',
            type: 'document',
            content: `**Introducción:** Ser excelente técnico no garantiza tener clientes. Debes saber venderte.

**Explicación Detallada:** El marketing para lashistas se basa en la confianza. Usa testimonios reales para calmar el miedo de nuevas clientas. Crea promociones de "Trae a una amiga" para expandir tu base de datos rápidamente. Tu perfil de Instagram debe ser educativo: explica qué son los ácaros, por qué se caen las pestañas y cómo dormirse de lado. Esto te posiciona como experto.

**Resumen:** La educación al cliente genera autoridad y, por consecuencia, más ventas de servicios.

**Puntos Clave:**
*   **Historias:** Muestra el "detrás de cámaras" de tu limpieza de herramientas.
*   **Reels:** Procesos rápidos de antes y después con música tendencia.
*   **Ads:** Cómo invertir 1 dólar al día para captar clientes en tu ciudad.`,
            topics: [
              {
                title: 'Estrategia de Crecimiento Digital',
                description: `Uso de redes sociales y pauta local para llenar tu agenda.`,
                whatIsItFor: `**Objetivo:** Establecer un flujo constante de nuevas citas cada semana.`,
                howToDoIt: `**Tarea:** Crea una publicación explicando los 3 beneficios de hacerse un lifting de pestañas.`,
                image: 'https://images.unsplash.com/photo-1497339100210-9e87df79c218?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'l5p4',
            title: 'Ética y Consentimiento Informado',
            type: 'document',
            content: `**Introducción:** El consentimiento informado es tu seguro de vida profesional ante reclamos.

**Explicación Detallada:** Cada cliente debe firmar un documento donde declare que no tiene cirugías oculares recientes, alergias conocidas o enfermedades como el glaucoma. Debes explicarle que un set de pestañas no dura para siempre y que si se las arranca perderá su vello natural. La ética profesional también implica saber decir "NO" cuando una pestaña está muy dañada y no soporta más peso.

**Resumen:** Trabajar con ética garantiza una carrera larga y libre de problemas legales.

**Puntos Clave:**
*   **Ficha Técnica:** Guardar registro de cada diseño y mapping realizado por clienta.
*   **Honestidad:** No prometer resultados imposibles (ej: 3 meses de duración).
*   **Seguridad:** Priorizar siempre la salud ocular sobre la estética exagerada.`,
            topics: [
              {
                title: 'Responsabilidad Profesional',
                description: `Protocolos legales y éticos en la prestación de servicios de belleza.`,
                whatIsItFor: `**Objetivo:** Proteger legalmente tu emprendimiento y la salud del cliente.`,
                howToDoIt: `**Instrucción:** Diseña un formulario de consentimiento que incluya una sección sobre cuidados post-servicio.`,
                image: 'https://images.unsplash.com/photo-1519415510236-855911993297?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'l5p5',
            title: 'Atención al Cliente de Lujo',
            type: 'document',
            content: `**Introducción:** Lo que hace que un cliente vuelva no es solo la pestaña, es cómo se sintió en tu camilla.

**Explicación Detallada:** El servicio inicia con una cabina que huela rico, música relajante y una manta por si tienen frío. Ofrece un parche de hidrogel frío para desinflamar mientras trabajas. Al finalizar, regala un cepillito en un estuche bonito. Un cliente fidelizado es aquel que te recomienda sin que se lo pidas por el trato VIP que le das.

**Resumen:** La excelencia en la atención al cliente es lo que justifica precios altos en tu ciudad.

**Puntos Clave:**
*   **Comodidad:** Una buena almohada ergonómica es vital para servicios de 2 horas.
*   **Escucha:** Entender el estilo de vida del cliente (¿hace mucho deporte? ¿usa mucho maquillaje?).
*   **Post-Venta:** Un mensaje de "Hola, ¿cómo van tus pestañas?" a los 3 días.`,
            topics: [
              {
                title: 'Experiencia del Cliente VIP',
                description: `Técnicas de servicio al cliente para destacar sobre la competencia.`,
                whatIsItFor: `**Objetivo:** Lograr una tasa de retorno de clientes del 90%.`,
                howToDoIt: `**Logro:** Prepara un "Kit de Bienvenida" para tus nuevas clientas con cuidados y un cepillo.`,
                image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=400'
              }
            ]
          }
        ],
        lessonExam: [
          { id: 'l5q1', type: 'multiple', question: '¿Cuál es la mejor red social para belleza?', options: ['Twitter', 'Instagram y TikTok', 'LinkedIn', 'Facebook'], correctAnswer: 1 },
          { id: 'l5q2', type: 'multiple', question: 'Importancia del Consentimiento Informado:', options: ['Para molestar', 'Documento legal donde el cliente conoce riesgos y cuidados', 'Para cobrar más', 'No es importante'], correctAnswer: 1 },
          { id: 'l5q3', type: 'multiple', question: '¿Qué es la fidelización?', options: ['Tener muchos seguidores', 'Que el cliente regrese por tu técnica y buen trato', 'Regalar el trabajo', 'Llamar al cliente a diario'], correctAnswer: 1 },
          { id: 'l5q4', type: 'multiple', question: '¿Cómo mejorar la rentabilidad?', options: ['Usando productos baratos', 'Ofreciendo combos y productos de cuidado posterior', 'Atendiendo muy rápido', 'Cerrando temprano'], correctAnswer: 1 },
          { id: 'l5q5', type: 'multiple', question: 'Importancia de la iluminación en cabina:', options: ['Por estética', 'Ver con precisión detalles y evitar errores en diseño', 'Para que no se vea el polvo', 'No es importante'], correctAnswer: 1 },
          { id: 'l5q6', type: 'multiple', question: '¿Qué es la "Higiene de Manos"?', options: ['Lavar platos', 'Lavado y desinfección antes de tocar al cliente', 'Usar guantes sucios', 'No es necesaria'], correctAnswer: 1 },
          { id: 'l5q7', type: 'multiple', question: '¿Cómo manejar una agenda llena?', options: ['Decir sí a todo', 'Priorizar citas confirmadas y tener lista de espera', 'No contestar', 'Cerrar el local'], correctAnswer: 1 },
          { id: 'l5q8', type: 'multiple', question: 'Importancia de fotos "Antes y Después":', options: ['Para llenar memoria', 'Demostrar resultados reales de tu trabajo a prospectos', 'Para presumir', 'No sirven'], correctAnswer: 1 },
          { id: 'l5q9', type: 'multiple', question: '¿Qué es el "Retail" en pestañas?', options: ['Vender ropa', 'Venta de espumas limpiadoras, ceras y cepillos', 'Comprar insumos', 'Pagar impuestos'], correctAnswer: 1 },
          { id: 'l5q10', type: 'multiple', question: 'Ética y profesionalismo:', options: ['Hablar mal de otros', 'Puntualidad, honestidad y mantener un área limpia', 'Cobrar según la cara', 'Solo trabajar por dinero'], correctAnswer: 1 }
        ]
      }
    ],
    finalExam: [
      { id: 'cey-f1', type: 'multiple', question: 'Diferencia entre extensión y lifting:', options: ['Son lo mismo', 'La extensión añade pelo sintético; el lifting curva el natural', 'El lifting es más caro', 'La extensión dura menos'], correctAnswer: 1 },
      { id: 'cey-f2', type: 'multiple', question: '¿Qué es la técnica 1 por 1?', options: ['Pestañas en grupo', 'Una extensión sobre cada pestaña natural', 'Un tipo de trenza', 'Un masaje'], correctAnswer: 1 },
      { id: 'cey-f3', type: 'multiple', question: '¿Para qué sirve el Primer de pestañas?', options: ['Para dar color', 'Desengrasar y preparar la pestaña', 'Para peinar', 'Para dormir'], correctAnswer: 1 },
      { id: 'cey-f4', type: 'multiple', question: '¿Cuál es la función del neutralizante en lifting?', options: ['Dañar el pelo', 'Sellar la nueva curvatura', 'Dar brillo', 'Limpiar'], correctAnswer: 1 },
      { id: 'cey-f5', type: 'multiple', question: '¿Qué es el Microblading?', options: ['Un tipo de lápiz', 'Técnica de tatuaje semipermanente pelo a pelo', 'Sombra de ojos', 'Depilación con hilo'], correctAnswer: 1 },
      { id: 'cey-f6', type: 'multiple', question: '¿Qué es el Brown Lamination?', options: ['Teñir cejas', 'Direccionamiento y alisado de vellos de la ceja', 'Maquillaje líquido', 'Limpieza'], correctAnswer: 1 },
      { id: 'cey-f7', type: 'multiple', question: '¿Cómo se deben esterilizar las pinzas?', options: ['Solo con agua', 'Autoclava o soluciones químicas de alto nivel', 'Con un papel', 'No se esterilizan'], correctAnswer: 1 },
      { id: 'cey-f8', type: 'multiple', question: '¿Qué evitamos con una buena bioseguridad?', options: ['Gastar dinero', 'Contagios e infecciones oculares', 'Que el cliente se vaya', 'Que se acabe el producto'], correctAnswer: 1 },
      { id: 'cey-f9', type: 'multiple', question: '¿Para qué sirve el pegamento grado médico en pestañas?', options: ['Para pegar heridas', 'Garantizar seguridad y adherencia en zona ocular', 'Para manualidades', 'Para cejas'], correctAnswer: 1 },
      { id: 'cey-f10', type: 'multiple', question: '¿Qué es el ciclo anágeno de la pestaña?', options: ['Caída', 'Fase de crecimiento activo', 'Fase de reposo', 'Fase muerta'], correctAnswer: 1 }
    ]
  },
  {
    id: 'reparacion-celulares',
    title: 'Reparación y Mantenimiento de Celulares',
    category: 'Tecnología',
    description: 'Aprende a reparar dispositivos móviles a nivel técnico.',
    longDescription: 'Diagnóstico de fallas, cambio de pantallas, soldadura básica y software de móviles.',
    image: 'https://images.unsplash.com/photo-1512428559083-a4019323af7c?auto=format&fit=crop&q=80&w=800',
    competencies: ['Cambio de pantallas', 'Micro-soldadura', 'Software móvil', 'Diagnóstico de hardware'],
    subjects: [
      { name: 'Hardware de Móviles', credits: 6 },
      { name: 'Software y Flasheo', credits: 5 },
      { name: 'Electrónica Básica', credits: 4 }
    ],
    lessons: [
      {
        id: 'cel-l1',
        title: 'Módulo 1: Diagnóstico y Hardware',
        parts: [
          {
            id: 'cel-l1p1',
            title: 'Anatomía del Smartphone: El Interior',
            type: 'document',
            content: `**Introducción:** Para ser un técnico de élite, debes conocer cada componente que vive dentro de un smartphone. Abrir un equipo sin saber qué hay debajo es la receta para el desastre.

**Explicación Detallada:** Un celular moderno se divide en varios bloques críticos: La **Placa Lógica** (Motherboard), donde residen el procesador, la RAM y la memoria flash; la **Batería**, que suele ser de polímero de litio; y los **Periféricos**, que incluyen cámaras, altavoces y sensores. Todo está interconectado por **Flexes** (cables planos ultra delgados) que son extremadamente frágiles.

**Resumen:** Antes de meter una espátula, identifica dónde están los flexes de pantalla y batería para no cortarlos.

**Puntos Clave:**
*   **FPC Connectors:** Son los enchufes donde se conectan los flexes a la placa.
*   **Blindajes:** Chapas metálicas que protegen del calor y la interferencia.
*   **Antenas:** Suelen estar integradas en el marco o en flexes específicos.`,
            topics: [
              {
                title: 'Identificación de Componentes',
                description: `**Reconocimiento:** Aprende a distinguir un condensador de una resistencia en la placa base bajo el microscopio.`,
                whatIsItFor: `**Objetivo de Aprendizaje:** Identificar correctamente cada parte interna de un dispositivo móvil para realizar diagnósticos precisos.`,
                howToDoIt: `**Instrucciones Prácticas:**
1.  **Desarme:** Retira la tapa trasera con calor.
2.  **Mapeo:** Identifica visualmente la batería, la placa principal y la subplaca de carga.
3.  **Desconexión:** Usa una herramienta de plástico para desconectar la batería PRIMERO.`,
                image: 'https://images.unsplash.com/photo-1512428559083-a4019323af7c?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'cel-l1p2',
            title: 'Herramientas del Servicio Técnico',
            type: 'document',
            content: `**Introducción:** Un buen técnico no es nada sin sus herramientas. La precisión en celulares se mide en milímetros y grados centígrados.

**Explicación Detallada:** Necesitas herramientas básicas como destornilladores de precisión (Pentalobe, Tri-point, Phillips), espátulas de plástico y metal, y pinzas antiestáticas. Las herramientas eléctricas incluyen la **Estación de Calor** (para despegar pantallas), el **Cautín** (para soldar) y la **Fuente de Poder** (para encender equipos y detectar consumos). No olvides la **Manta Antiestática** para proteger los circuitos de descargas de tu cuerpo.

**Resumen:** Invierte en herramientas de calidad; las baratas dañan los tornillos y los equipos.

**Puntos Clave:**
*   **ESD (Electrostatic Discharge):** La mayor enemiga de los microchips invisibles.
*   **Alcohol Isopropílico:** El único líquido permitido para limpiar placas.`,
            topics: [
              {
                title: 'Uso de la Estación de Calor',
                description: `**Control Térmico:** Aprender a usar el aire caliente sin quemar el LCD o derretir los conectores plásticos de la placa.`,
                whatIsItFor: `**Objetivo:** Dominar el uso de herramientas térmicas y manuales esenciales para la reparación de hardware móvil.`,
                howToDoIt: `**Protocolo Segure:**
1.  **Temperatura:** Configura a 80-100°C para tapas traseras.
2.  **Distancia:** Mantén la boquilla a 3-5 cm de distancia en movimiento constante.
3.  **Seguridad:** Nunca calientes la batería directamente.`,
                image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'cel-l1p3',
            title: 'Cambio de Pantalla: El Servicio #1',
            type: 'document',
            content: `**Introducción:** El 80% de los ingresos de un taller provienen de pantallas rotas. Es la reparación más común y rentable.

**Explicación Detallada:** Existen dos tipos de pantallas: **LCD** (requieren retroiluminación) y **OLED/AMOLED** (cada píxel emite su propia luz). El proceso implica calentar el pegamento viejo, retirar el cristal roto con cuidado de no dañar el marco, limpiar los residuos y aplicar pegamento nuevo (como B-7000). Es CRUCIAL probar la pantalla nueva antes de pegarla definitivamente.

**Resumen:** Limpieza absoluta del marco es el secreto de un acabado original.`,
            topics: [
              {
                title: 'Técnicas de Pegado y Sellado',
                description: `**Pegamentos Especiales:** Uso de B-7000 (transparente) o T-7000 (negro) para que la pantalla no se levante con el tiempo.`,
                whatIsItFor: `**Objetivo de Aprendizaje:** Realizar cambios de módulos de pantalla completos con estándares de fábrica.`,
                howToDoIt: `**Paso a Paso:**
1.  **Prueba:** Conecta la pantalla nueva al flex de la placa sin pegarla.
2.  **Limpieza:** Usa alcohol y una espátula para quitar el pegamento viejo del marco.
3.  **Aplicación:** Pon una línea fina de pegamento en el borde.
4.  **Presión:** Usa prensas suaves durante 2 horas.`,
                image: 'https://images.unsplash.com/photo-1596742572435-0fb19df2adab?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'cel-l1p4',
            title: 'Diagnóstico por Multímetro y Consumos',
            type: 'document',
            content: `**Introducción:** Cuando un equipo no enciende, el multímetro es tu mejor amigo para encontrar el "asesino" silencioso.

**Explicación Detallada:** Usamos el multímetro principalmente en dos modos: **Voltaje DC** para medir si la batería tiene carga (mínimo 3.7V para encender) y **Continuidad/Diodo** para detectar cortocircuitos. Si conectamos el equipo a una Fuente de Poder y esta marca un consumo alto sin presionar el botón de encendido, tenemos un "Corto" en la línea principal de energía (VCC_MAIN).

**Resumen:** No adivines qué componente falla; mídelo.`,
            topics: [
              {
                title: 'Detección de Cortocircuitos',
                description: `**Líneas de Poder:** Identifica componentes que calientan más de lo normal usando la técnica del rocín o cámara térmica.`,
                whatIsItFor: `**Objetivo:** Interpretar mediciones eléctricas para diagnosticar fallas de encendido y carga.`,
                howToDoIt: `**Prueba de Batería:**
1.  **Puntas:** Pon el multímetro en 20V DC.
2.  **Contacto:** Toca el positivo y negativo de los pines de la batería.
3.  **Lectura:** Si marca 0V, la batería está muerta o protegida.`,
                image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'cel-l1p5',
            title: 'Puerto de Carga y Micrófono: La Subplaca',
            type: 'document',
            content: `**Introducción:** Problemas de "No carga" o "No me escuchan" suelen residir en la parte inferior del equipo.

**Explicación Detallada:** La mayoría de celulares modernos usan una **Subplaca de Carga** independiente conectada por un flex largo a la placa principal. Esta placa contiene el puerto USB (Tipo C o V8), el micrófono principal y el conector de antena. A veces basta con limpiar el puerto con alcohol y un cepillo, pero si los pines están rotos, se debe cambiar la pieza completa o soldar un puerto nuevo.

**Resumen:** Revisa siempre si el puerto está sucio antes de diagnosticar una falla de hardware.`,
            topics: [
              {
                title: 'Micro-limpieza de Puertos',
                description: `**Mantenimiento Preventivo:** El polvo y la pelusa impiden el contacto físico de los cables. Una limpieza profunda ahorra repuestos innecesarios.`,
                whatIsItFor: `**Objetivo:** Reparar fallas de comunicación y energía reemplazando o manteniendo el bloque inferior del celular.`,
                howToDoIt: `**Técnica de Reemplazo:**
1.  **Acceso:** Abre el equipo y retira el altavoz (buzzer).
2.  **Desconexión:** Quita el flex de interconexión y el cable coaxial de antena.
3.  **Cambio:** Retira la subplaca dañada e instala la nueva.`,
                image: 'https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&q=80&w=400'
              }
            ]
          }
        ],
        lessonExam: [
          { id: 'cel-q1', type: 'multiple', question: '¿Para qué sirve la pulsera antiestática?', options: ['De adorno', 'Para evitar descargar electricidad estática en la placa', 'Para sujetar el celular', 'Para soldar'], correctAnswer: 1 },
          { id: 'cel-q2', type: 'multiple', question: '¿A qué temperatura se suele despegar una pantalla?', options: ['200°C', '80°C - 100°C', '0°C', '500°C'], correctAnswer: 1 },
          { id: 'cel-q3', type: 'multiple', question: '¿Qué es el "Multímetro"?', options: ['Un tipo de destornillador', 'Herramienta para medir voltajes y corrientes', 'Un pegamento', 'Una pantalla'], correctAnswer: 1 },
          { id: 'cel-q4', type: 'multiple', question: '¿Qué significa que un celular sea IP68?', options: ['Es de 6.8 pulgadas', 'Resistente al agua y polvo', 'Tiene 8 cámaras', 'Es muy viejo'], correctAnswer: 1 },
          { id: 'cel-q5', type: 'multiple', question: '¿Para qué se usa el Alcohol Isopropílico?', options: ['Para beber', 'Para limpiar circuitos sin dejar humedad', 'Para teñir carcasas', 'Para pegar vidrios'], correctAnswer: 1 },
          { id: 'cel-q6', type: 'multiple', question: '¿Qué es la batería Li-ion?', options: ['Batería de larga duración compuesta de Litio', 'Un tipo de procesador', 'Un cristal', 'Un cable'], correctAnswer: 0 },
          { id: 'cel-q7', type: 'multiple', question: '¿Para qué sirve el cautín?', options: ['Para cortar plástico', 'Para realizar soldaduras electrónicas', 'Para lavar el equipo', 'Para medir señal'], correctAnswer: 1 },
          { id: 'cel-q8', type: 'multiple', question: '¿Qué es el conector FPC?', options: ['Un tipo de cargador', 'Conector plano flexible para componentes', 'Un botón', 'Una cámara'], correctAnswer: 1 },
          { id: 'cel-q9', type: 'multiple', question: '¿Qué hacer si un celular cae al agua?', options: ['Prenderlo enseguida', 'Desconectarlo, secarlo y quitar batería si es posible', 'Ponerlo al sol 3 días', 'Llamar por teléfono'], correctAnswer: 1 },
          { id: 'cel-q10', type: 'multiple', question: '¿Qué es el procesador?', options: ['La batería', 'El encargado de ejecutar las tareas y aplicaciones', 'La pantalla', 'El micrófono'], correctAnswer: 1 }
        ]
      },
      {
        id: 'l2',
        title: 'Módulo 2: Reparación Avanzada y Software',
        parts: [
          {
            id: 'l2p1',
            title: 'Micro-soldadura en Placa Base',
            type: 'document',
            content: `**Introducción:** La micro-soldadura es la habilidad que separa a los abridores de cajas de los reparadores reales.

**Explicación Detallada:** Consiste en soldar componentes SMD (Surface Mount Device) invisibles al ojo humano sin ayuda de microscopio. Aprenderás a usar el flux para que el estaño fluya solo a los pads, la importancia de la aleación (estaño con plomo para reparaciones fáciles) y cómo retirar integrados (IC) mediante la estación de calor sin "estresar" la placa.

**Resumen:** Dominar el calor y el estaño permite revivir equipos que otros dan por muertos.

**Puntos Clave:**
*   **Flux:** Vital para que la soldadura quede brillante y sólida.
*   **Malla:** Uso de malla de cobre para dejar los pads limpios.
*   **Componentes:** Resistencias, condensadores y diodos.`,
            topics: [
              {
                title: 'Técnicas de Soldadura SMD',
                description: `Uso del microscopio y cautín de punta fina para soldar miniaturas electrónicas.`,
                whatIsItFor: `**Objetivo:** Reparar fallas internas de la placa base del smartphone.`,
                howToDoIt: `**Práctica:** Suelda un pin de carga nuevo usando estaño en pasta y estación de calor a 350°C.`,
                image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'l2p2',
            title: 'Uso del Microscopio Trinocular',
            type: 'document',
            content: `**Introducción:** En telefonía móvil, tus ojos no son suficientes para ver el daño real.

**Explicación Detallada:** El microscopio nos permite ver pistas rotas, corrosión por humedad o soldaduras frías. El microscopio trinocular es ideal porque permite conectar una cámara para grabar tus reparaciones o mostrárselas al cliente. Debes aprender a regular el enfoque y la luz (anillo LED) para no tener reflejos que te engañen al soldar.

**Resumen:** El microscopio es la ventana al micro-mundo donde ocurren las fallas de hardware.

**Puntos Clave:**
*   **Zoom:** Poder ver desde un tornillo hasta una mota de polvo en un sensor.
*   **Pistas:** Reconstruir caminos de cobre (jumpers) bajo el lente.
*   **Diagnóstico:** Ver si un IC tiene "bolas" de estaño salidas (falla de BGA).`,
            topics: [
              {
                title: 'Inspección Visual Profunda',
                description: `Detección de corrosión o daños físicos invisibles a simple vista.`,
                whatIsItFor: `**Objetivo:** Realizar diagnósticos precisos mediante la visualización microscópica.`,
                howToDoIt: `**Instrucción:** Ajusta el foco hasta que veas los números grabados encima de los chips integrados.`,
                image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'l2p3',
            title: 'Flasheo y Restauración de Software',
            type: 'document',
            content: `**Introducción:** Muchos celulares no están rotos, solo tienen el sistema operativo "corrupto".

**Explicación Detallada:** El flasheo consiste en instalar el Firmware (sistema operativo) original desde una computadora. Aprenderemos a descargar las ROMs correctas según el modelo y región del equipo. Es la única forma de sacar equipos que se quedan en el logo (Bootloop) o que tienen errores constantes de "La aplicación se detuvo".

**Resumen:** El software es el alma del equipo; reinstalarlo soluciona el 30% de las fallas.

**Puntos Clave:**
*   **Drivers:** Controladores necesarios para que la PC reconozca el móvil.
*   **Firmware:** El archivo de sistema específico para cada modelo.
*   **Respaldo:** Advertir al cliente que el flasheo borra todos sus datos.`,
            topics: [
              {
                title: 'Instalación de Firmwares',
                description: `Uso de herramientas oficiales de cada marca para revivir celulares.`,
                whatIsItFor: `**Objetivo:** Reparar fallas lógicas del sistema operativo móvil.`,
                howToDoIt: `**Logro:** Conecta un Samsung en modo Download y flashea los 4 archivos con la herramienta Odin.`,
                image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'l2p4',
            title: 'Desbloqueos y Cuentas (FRP Lock)',
            type: 'document',
            content: `**Introducción:** El bloqueo de cuenta Google (FRP) es una medida de seguridad que a veces el dueño real olvida tras un reset.

**Explicación Detallada:** Aprenderemos los protocolos de seguridad de Android y cómo se activan estos bloqueos. Existen métodos manuales (bypass) y métodos mediante cajas de servicio (Box) o software profesional. El técnico debe ser ético y siempre pedir factura o identificación para asegurar que el equipo no es robado.

**Resumen:** Los desbloqueos son un servicio MUY pedido tras restauraciones de fábrica accidentales.

**Puntos Clave:**
*   **Seguridad:** Entender el bloqueo por IMEI y bloqueo por cuenta.
*   **Ética Profesional:** Nunca desbloquear equipos de dudosa procedencia.
*   **Métodos:** Uso de Test Points o combinaciones de teclas.`,
            topics: [
              {
                title: 'Protocolos de Seguridad Android',
                description: `Cómo funcionan las cuentas de usuario y los bloqueos antirrobo.`,
                whatIsItFor: `**Objetivo:** Ayudar a clientes legítimos a recuperar el acceso a sus sus dispositivos.`,
                howToDoIt: `**Tarea:** Investiga qué es un "Test Point" para entrar en modo EDL en procesadores Qualcomm.`,
                image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'l2p5',
            title: 'Diagnostico por Plano Esquemático',
            type: 'document',
            content: `**Introducción:** No repares a ciegas. El plano esquemático es el mapa de carreteras de la placa.

**Explicación Detallada:** Un esquemático nos dice qué voltaje debe haber en cada condensador. Aprenderemos a usar "Dongles" como DZKJ o BorneoSchanmatics. Si un equipo no tiene imagen, buscamos la línea "LCD_PWR" en el plano y medimos si están los 5V necesarios. Es la diferencia entre un cambia-piezas y un ingeniero de reparaciones.

**Resumen:** El esquemático te guía paso a paso desde la falla hasta el componente exacto que la causa.

**Puntos Clave:**
*   **Layout:** El dibujo que ubica el componente físico en la placa.
*   **Diagrama de Bloques:** Entender cómo se comunican el procesador y la memoria.
*   **Líneas de Voltaje:** Identificar VCC_MAIN y las líneas secundarias LDO.`,
            topics: [
              {
                title: 'Lectura de Mapas de Placa',
                description: `Interpretación de circuitos y diagramas técnicos de celulares modernos.`,
                whatIsItFor: `**Objetivo:** Localizar fallas complejas midiendo voltajes de referencia según el plano.`,
                howToDoIt: `**Ejercicio:** Encuentra en el layout el condensador C4002 y mide su voltaje con el multímetro.`,
                image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=400'
              }
            ]
          }
        ],
        lessonExam: [
          { id: 'l2q1', type: 'multiple', question: '¿Qué es el flux?', options: ['Un tipo de cable', 'Sustancia que facilita la soldadura', 'Un programa de PC', 'Una pantalla'], correctAnswer: 1 },
          { id: 'l2q2', type: 'multiple', question: '¿Para qué sirve el puerto JTAG?', options: ['Para cargar batería', 'Para diagnóstico y programación a bajo nivel', 'Para escuchar música', 'No tiene uso'], correctAnswer: 1 },
          { id: 'l2q3', type: 'multiple', question: '¿Qué es el Estaño en pasta?', options: ['Un pegamento', 'Soldadura líquida/pastosa para componentes SMD', 'Un limpiador', 'Una grasa'], correctAnswer: 1 },
          { id: 'l2q4', type: 'multiple', question: '¿Para qué sirve la malla desoldadora?', options: ['Para pescar', 'Retirar exceso de estaño en los pads', 'Para limpiar cristales', 'Para sujetar cables'], correctAnswer: 1 },
          { id: 'l2q5', type: 'multiple', question: '¿Qué es el "Reballing"?', options: ['Cambiar la pantalla', 'Rehacer las esferas de soldadura de un chip BGA', 'Lavar el equipo', 'Pintar la carcasa'], correctAnswer: 1 },
          { id: 'l2q6', type: 'multiple', question: 'Temperatura segura para soldar en placa movil:', options: ['500°C', '320°C - 380°C', '100°C', '900°C'], correctAnswer: 1 },
          { id: 'l2q7', type: 'multiple', question: '¿Qué es un componente SMD?', options: ['Un motor', 'Componente de montaje superficial', 'Un tipo de batería', 'Una herramienta de mano'], correctAnswer: 1 },
          { id: 'l2q8', type: 'multiple', question: '¿Para qué sirve la pinza de precisión?', options: ['Para cortar cables gruesos', 'Manipular componentes pequeños sin dañarlos', 'Para limpiar', 'Para martillar'], correctAnswer: 1 },
          { id: 'l2q9', type: 'multiple', question: '¿Qué es el cortocircuito en placa?', options: ['Falla por falta de batería', 'Contacto accidental entre positivo y tierra', 'Un exceso de memoria', 'Un virus'], correctAnswer: 1 },
          { id: 'l2q10', type: 'multiple', question: '¿Para qué sirve el microscopio en reparación?', options: ['Ver bacterias', 'Visualizar pistas y componentes diminutos con claridad', 'Para nada', 'Ver el logo del banco'], correctAnswer: 1 }
        ]
      },
      {
        id: 'l3',
        title: 'Módulo 3: Electrónica y Mediciones',
        parts: [
          {
            id: 'l3p1',
            title: 'Uso del Multímetro',
            type: 'video',
            content: 'Medición de voltajes y continuidad.',
            topics: [
              { title: 'Detección de Cortos', description: 'Cómo encontrar fallas eléctricas en la placa.', whatIsItFor: 'Reparar equipos que no encienden.', howToDoIt: 'Medir componentes en escala de diodo o continuidad.', image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=400' }
            ]
          }
        ],
        lessonExam: [
          { id: 'l3q1', type: 'multiple', question: '¿Para qué sirve la escala de continuidad?', options: ['Medir peso', 'Verificar si el paso de corriente no está interrumpido', 'Cambiar el color', 'Aumentar señal'], correctAnswer: 1 },
          { id: 'l3q2', type: 'multiple', question: '¿Cómo se mide el voltaje de una batería?', options: ['En escala de Amperios', 'En escala de Voltios DC', 'En escala de Ohmios', 'En escala de Watts'], correctAnswer: 1 },
          { id: 'l3q3', type: 'multiple', question: '¿Para qué sirve medir la Resistencia?', options: ['Ver el tamaño del equipo', 'Comprobar el estado de componentes como resistencias', 'Aumentar la velocidad', 'Cambiar el idioma'], correctAnswer: 1 },
          { id: 'l3q4', type: 'multiple', question: '¿Qué es un condensador (Capacitor)?', options: ['Un cable', 'Componente que almacena energía temporalmente', 'Un interruptor', 'Un motor'], correctAnswer: 1 },
          { id: 'l3q5', type: 'multiple', question: '¿Qué indica un multímetro marcando 1 o OL en resistencia?', options: ['Circuito cerrado', 'Circuito abierto (infinito/roto)', 'Mantenimiento okay', 'Carga llena'], correctAnswer: 1 },
          { id: 'l3q6', type: 'multiple', question: '¿Para qué se usa la Fuente de Poder?', options: ['Para dar luz al local', 'Alimentar el equipo y detectar consumos anormales', 'Para cargar el multímetro', 'Para calentar'], correctAnswer: 1 },
          { id: 'l3q7', type: 'multiple', question: '¿Qué es un diodo?', options: ['Un sensor de luz', 'Componente que permite el paso de corriente en un solo sentido', 'Una pantalla', 'Una batería'], correctAnswer: 1 },
          { id: 'l3q8', type: 'multiple', question: '¿Cómo detectar un corto con la fuente?', options: ['Viendo si el equipo prende', 'Observando un consumo excesivo de amperaje sin encender', 'Viendo la pantalla', 'No se puede'], correctAnswer: 1 },
          { id: 'l3q9', type: 'multiple', question: '¿Para qué sirve el plano esquemático?', options: ['Para dibujar', 'Mapa técnico que muestra las conexiones de la placa', 'Para ver fotos', 'Para cobrar'], correctAnswer: 1 },
          { id: 'l3q10', type: 'multiple', question: '¿Qué es un transistor?', options: ['Una radio', 'Componente que actúa como interruptor o amplificador', 'Un cable usb', 'Una tecla'], correctAnswer: 1 }
        ]
      },
      {
        id: 'l4',
        title: 'Módulo 4: Cambio de Pantallas y Componentes',
        parts: [
          {
            id: 'l4p1',
            title: 'Desensamble Profesional',
            type: 'video',
            content: 'Técnicas para abrir equipos sin dañarlos.',
            topics: [
              { title: 'Uso de Estación de Calor', description: 'Ablandar pegamentos originales.', whatIsItFor: 'Retirar pantallas y tapas traseras.', howToDoIt: 'Aplicar calor uniforme a 80-100 grados.', image: 'https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&q=80&w=400' }
            ]
          }
        ],
        lessonExam: [
          { id: 'l4q1', type: 'multiple', question: '¿Qué precaución tener con las pantallas AMOLED?', options: ['Se pueden mojar', 'Son frágiles y se dañan con presión excesiva', 'No necesitan calor', 'Se rompen con el aire'], correctAnswer: 1 },
          { id: 'l4q2', type: 'multiple', question: '¿Qué es el pegamento B-7000/T-7000?', options: ['Pegamento escolar', 'Adhesivo específico para sellar pantallas y tapas de celulares', 'Un tipo de soldadura', 'Para cables'], correctAnswer: 1 },
          { id: 'l4q3', type: 'multiple', question: '¿Para qué sirve el iSesamo o espátula de metal?', options: ['Para comer', 'Ayudar a abrir carcasas y despegar componentes', 'Limpiar la pantalla', 'Pintar'], correctAnswer: 1 },
          { id: 'l4q4', type: 'multiple', question: '¿Qué es el cristal (Gorilla Glass)?', options: ['Un plástico común', 'Vidrio templado de alta resistencia de la pantalla', 'Un tipo de lente', 'Una carcasa'], correctAnswer: 1 },
          { id: 'l4q5', type: 'multiple', question: 'Importancia de probar la pantalla antes de pegar:', options: ['Por diversión', 'Evitar perder la garantía y tiempo si la pantalla viene defectuosa', 'No es necesario', 'Para que el cliente vea'], correctAnswer: 1 },
          { id: 'l4q6', type: 'multiple', question: '¿Cómo se limpia el pegamento viejo?', options: ['Con agua', 'Con calor y alcohol isopropílico cuidadosamente', 'Con un cuchillo', 'No se limpia'], correctAnswer: 1 },
          { id: 'l4q7', type: 'multiple', question: '¿Para qué sirven las prensas de sujeción?', options: ['Para romper el equipo', 'Mantener presión uniforme mientras seca el pegamento de la pantalla', 'Para el ID', 'Para nada'], correctAnswer: 1 },
          { id: 'l4q8', type: 'multiple', question: '¿Qué es la retroiluminación (Backlight)?', options: ['La cámara', 'Luz que permite ver la imagen en pantallas LCD', 'Un flash', 'Un sensor'], correctAnswer: 1 },
          { id: 'l4q9', type: 'multiple', question: '¿Qué hacer con los tornillos al desarmar?', options: ['Tirarlos', 'Organizarlos por tamaño y posición (usar mat magnético)', 'Ponerlos todos juntos', 'No usarlos'], correctAnswer: 1 },
          { id: 'l4q10', type: 'multiple', question: '¿Qué es el Flex de carga?', options: ['Un cable de red', 'Cinta flexible que conecta el puerto de carga con la placa', 'Una antena', 'Un altavoz'], correctAnswer: 1 }
        ]
      },
      {
        id: 'l5',
        title: 'Módulo 5: Software y Flasheo',
        parts: [
          {
            id: 'l5p1',
            title: 'Restauración de Sistema',
            type: 'document',
            content: 'Solución de errores lógicos y bloqueos.',
            topics: [
              { title: 'Instalación de Firmware', description: 'Carga de sistema operativo original.', whatIsItFor: 'Revivir equipos en "brick" o logo pegado.', howToDoIt: 'Uso de herramientas como Odin o SP Flash Tool.', image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=400' }
            ]
          }
        ],
        lessonExam: [
          { id: 'l5q1', type: 'multiple', question: '¿Qué es un Hard Reset?', options: ['Reiniciar el wifi', 'Restablecimiento de fábrica mediante botones', 'Cambiar la pantalla', 'Cargar la batería'], correctAnswer: 1 },
          { id: 'l5q2', type: 'multiple', question: '¿Qué es el modo Odin/Download?', options: ['Para bajar música', 'Modo especial en Samsung para flashear software', 'Un tipo de recovery', 'Modo avión'], correctAnswer: 1 },
          { id: 'l5q3', type: 'multiple', question: '¿Qué es el "Bootloader"?', options: ['Un cargador', 'Gestor de arranque del sistema operativo', 'Una aplicación', 'Un virus'], correctAnswer: 1 },
          { id: 'l5q4', type: 'multiple', question: '¿Para qué sirve el archivo Firmware?', options: ['Para nada', 'Contiene todo el sistema operativo del equipo', 'Es un manual', 'Para borrar fotos'], correctAnswer: 1 },
          { id: 'l5q5', type: 'multiple', question: '¿Qué es el "Root" en Android?', options: ['Una raíz de planta', 'Permisos de superusuario para modificar el sistema', 'Un virus', 'Un error de carga'], correctAnswer: 1 },
          { id: 'l5q6', type: 'multiple', question: '¿Qué es el FRP Lock?', options: ['Cierre de tapa', 'Bloqueo de cuenta Google tras restablecimiento (antirrobo)', 'Un tipo de pin', 'No existe'], correctAnswer: 1 },
          { id: 'l5q7', type: 'multiple', question: '¿Para qué sirve la herramienta ADB?', options: ['Para jugar', 'Comandos para interactuar con el móvil desde la PC', 'Para cargar', 'Para audio'], correctAnswer: 1 },
          { id: 'l5q8', type: 'multiple', question: '¿Qué es un equipo "Brickeado"?', options: ['Un equipo nuevo', 'Equipo que no enciende por falla crítica de software', 'Un equipo mojado', 'Un equipo sin señal'], correctAnswer: 1 },
          { id: 'l5q9', type: 'multiple', question: '¿Qué es el puerto Qualcomm 9008?', options: ['Para música', 'Puerto de emergencia para flasheo profundo en procesadores Qualcomm', 'Un cable usb', 'No existe'], correctAnswer: 1 },
          { id: 'l5q10', type: 'multiple', question: 'Importancia del Backup antes de flashear:', options: ['No es importante', 'Evitar la pérdida permanente de datos del usuario', 'Para gastar tiempo', 'Ocupa espacio'], correctAnswer: 1 }
        ]
      }
    ],
    finalExam: [
      { id: 'cel-f1', type: 'multiple', question: '¿Qué es el flasheo?', options: ['Sacar fotos con flash', 'Reinstalar el sistema operativo del móvil', 'Limpiar el lente', 'Cambiar la batería'], correctAnswer: 1 },
      { id: 'cel-f2', type: 'multiple', question: '¿Qué es el IMEI?', options: ['Un juego', 'Identidad internacional de equipo móvil (único)', 'El nombre del dueño', 'La marca'], correctAnswer: 1 },
      { id: 'cel-f3', type: 'multiple', question: '¿Para qué sirve una estación de calor?', options: ['Para calentar café', 'Para remover componentes soldados o pegados', 'Para secar el sudor', 'Para dar luz'], correctAnswer: 1 },
      { id: 'cel-f4', type: 'multiple', question: '¿Qué es el puerto de carga tipo C?', options: ['Puerto de carga simétrico universal', 'Un conector viejo', 'Una pantalla', 'Un tipo de virus'], correctAnswer: 0 },
      { id: 'cel-f5', type: 'multiple', question: '¿Qué falla indica una pantalla azul?', options: ['Problema de Software o Memoria', 'Falta de carga', 'Es normal', 'Problema de audio'], correctAnswer: 0 },
      { id: 'cel-f6', type: 'multiple', question: '¿Qué es la placa de carga?', options: ['Donde se pone el protector', 'Subplaca que contiene el puerto de carga y micrófono', 'La batería', 'La pantalla principal'], correctAnswer: 1 },
      { id: 'cel-f7', type: 'multiple', question: '¿Para qué sirve la malla desoldadora?', options: ['Para pescar', 'Para retirar excedentes de estaño', 'Para pegar carcasas', 'Para limpiar la pantalla'], correctAnswer: 1 },
      { id: 'cel-f8', type: 'multiple', question: '¿Qué es el modo Recovery?', options: ['Menú avanzado para restaurar o actualizar sistema', 'Un juego', 'Modo para ver películas', 'Modo avión'], correctAnswer: 0 },
      { id: 'cel-f9', type: 'multiple', question: '¿Qué es un corto circuito?', options: ['Cables largos', 'Falla eléctrica por contacto accidental de polos opuestos', 'Exceso de batería', 'Falta de luz'], correctAnswer: 1 },
      { id: 'cel-f10', type: 'multiple', question: 'Ética del técnico:', options: ['Quedarse con piezas', 'Privacidad de datos del cliente y garantía del trabajo', 'Cobrar muy caro', 'No avisar de fallas'], correctAnswer: 1 }
    ]
  },
  {
    id: 'masaje-corporal',
    title: 'Masaje Corporal Profesional',
    category: 'Belleza',
    description: 'Relajación y terapéutica a través del tacto.',
    longDescription: 'Aprende diversas técnicas de masaje como sueco, tejido profundo y piedras calientes para bienestar físico y mental.',
    image: 'https://images.unsplash.com/photo-1544161515-4af67f54044a?auto=format&fit=crop&q=80&w=800',
    competencies: ['Masaje sueco', 'Reflexología podal', 'Ética del terapeuta', 'Anatomía muscular'],
    subjects: [
      { name: 'Anatomía y Fisiología', credits: 4 },
      { name: 'Técnicas de Masaje', credits: 6 },
      { name: 'Higiene y Ambiente', credits: 3 }
    ],
    lessons: [
      {
        id: 'mas-l1',
        title: 'Módulo 1: Anatomía Humana y Masaje Sueco',
        parts: [
          {
            id: 'mas-l1p1',
            title: 'Introducción a la Masoterapia y Ética',
            type: 'document',
            content: `**Introducción:** El masaje es una de las artes curativas más antiguas de la humanidad. No es solo aplicar presión, sino una forma de comunicación a través del tacto que busca el equilibrio físico y mental.

**Explicación Detallada:** Como terapeuta, tu primer deber es la ética. Esto incluye mantener la confidencialidad del cliente, respetar sus límites físicos y emocionales, y asegurar un ambiente de higiene absoluta. La masoterapia profesional se distingue por el conocimiento profundo de la anatomía y la aplicación de técnicas con un propósito específico (relajante, deportivo, terapéutico).

**Resumen:** El tacto profesional es respetuoso, seguro y siempre busca el bienestar integral del receptor.

**Puntos Clave:**
*   **Consentimiento:** Siempre explica qué zonas trabajarás antes de empezar.
*   **Presentación:** Higiene personal impecable y uñas cortas.
*   **Entorno:** Silencio o música suave que induzca al estado Alfa de relajación.`,
            topics: [
              {
                title: 'La Ética del Terapeuta',
                description: `**Integridad:** Mantener una distancia profesional y un lenguaje adecuado. No emitir diagnósticos médicos fuera de tu competencia.`,
                whatIsItFor: `**Objetivo de Aprendizaje:** Comprender el marco ético y legal en el que se desarrolla la práctica profesional del masaje.`,
                howToDoIt: `**Protocolo Inicial:**
1.  **Entrevista:** Realiza la ficha clínica (anamnesis).
2.  **Preparación:** Indica al cliente cómo debe posicionarse y qué prendas retirar.
3.  **Privacidad:** Sal de la habitación mientras el cliente se prepara.`,
                image: 'https://images.unsplash.com/photo-1544161515-4af67f54044a?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'mas-l1p2',
            title: 'Anatomía Muscular para Masajistas',
            type: 'document',
            content: `**Introducción:** No puedes masajear lo que no conoces. Los músculos son el mapa sobre el que tus manos navegarán.

**Explicación Detallada:** Debes identificar los grandes grupos musculares: **Trapecio** (espalda alta y cuello), **Dorsal Ancho**, **Glúteos**, **Isquiotibiales** y **Cuádriceps**. Es vital conocer el origen e inserción de los músculos para saber en qué dirección realizar las maniobras. El masaje suele ir en dirección al corazón (sentido centrípeto) para favorecer el retorno venoso.

**Resumen:** El conocimiento anatómico evita que presiones zonas sensibles como nervios superficiales o ganglios de forma incorrecta.

**Puntos Clave:**
*   **Fascia:** Tejido conectivo que envuelve el músculo y que también se trabaja.
*   **Zonas de Peligro:** Hueco poplíteo (detrás de rodilla), axilas y zona renal (golpeteo prohibido).`,
            topics: [
              {
                title: 'Direccionalidad del Masaje',
                description: `**Retorno Venoso:** Casi todas las maniobras de deslizamiento deben ir hacia los ganglios linfáticos más cercanos para ayudar a drenar toxinas.`,
                whatIsItFor: `**Objetivo:** Localizar los principales músculos superficiales y entender su función motora.`,
                howToDoIt: `**Práctica Visual:**
1.  **Palpación:** Aprende a sentir la tensión de las fibras musculares.
2.  **Identificación:** Localiza las escápulas y la columna vertebral para trabajar alrededor de ellas, nunca sobre el hueso directamente.`,
                image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'mas-l1p3',
            title: 'Técnicas Básicas: Roce y Amasamiento',
            type: 'document',
            content: `**Introducción:** El masaje sueco se basa en maniobras fundamentales que permiten calentar el tejido y relajar las fibras.

**Explicación Detallada:** Empezamos con el **Effleurage** (Roce): movimientos suaves y largos para aplicar el aceite y acostumbrar al cliente al tacto. Luego pasamos al **Petrissage** (Amasamiento): comprimimos y soltamos el músculo como si fuera masa de pan, esto aumenta la circulación profundamente y libera adherencias.

**Resumen:** Cambia de ritmo y presión de forma fluida para que el cliente no pierda la sensación de relajación.

**Puntos Clave:**
*   **Contacto Constante:** No despegues las dos manos al mismo tiempo del cuerpo del cliente.
*   **Ritmo:** Lento y rítmico para sedar el sistema nervioso.`,
            topics: [
              {
                title: 'Dominio del Effleurage',
                description: `**La Maniobra Reina:** Es el inicio y el fin de toda sesión. Sirve para evaluar el estado de la piel y la temperatura corporal.`,
                whatIsItFor: `**Objetivo de Aprendizaje:** Ejecutar con técnica correcta las maniobras de roce, fricción y amasamiento del masaje tradicional.`,
                howToDoIt: `**Instrucciones Técnicas:**
1.  **Roce:** Palma abierta, dedos juntos, desliza de lumbar a cervical con presión media.
2.  **Amasamiento:** Usa los pulgares y la palma para "pellizcar" suavemente el músculo y girarlo de forma rítmica.`,
                image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'mas-l1p4',
            title: 'Fricción, Vibración y Percusión',
            type: 'document',
            content: `**Introducción:** Estas técnicas son más estimulantes y se usan para tratar nudos específicos o despertar el tejido al final del masaje.

**Explicación Detallada:** La **Fricción** es un movimiento circular profundo sobre un punto de tensión (nudo). La **Vibración** se genera con la mano temblando sobre un área para relajar los nervios. La **Percusión** (Tapotement) incluye golpeteos rítmicos con el canto de la mano o manos en copa; aumenta el tono muscular y la hiperemia (sangre en la zona).

**Resumen:** No uses percusión en personas muy estresadas; quédate con el roce y amasamiento lento.

**Puntos Clave:**
*   **Hachuramiento:** Golpeteo rápido con los cantos de las manos.
*   **Palmoteo Cóncavo:** Crear un efecto de vacío para despegar mucosidades o activar circulación.`,
            topics: [
              {
                title: 'Localización de Nudos (Puntos Gatillo)',
                description: `**Precisión:** Aprende a encontrar esas "piedritas" en el músculo y tratarlas con fricción circular progresiva sin causar dolor excesivo.`,
                whatIsItFor: `**Objetivo:** Aplicar técnicas de percusión y fricción de forma segura y efectiva según la necesidad del cliente.`,
                howToDoIt: `**Ejercicio de Vibración:**
1.  **Colocación:** Pon tu palma plana sobre el omóplato.
2.  **Acción:** Genera una vibración desde tu antebrazo que se transmita a la palma sin moverte del sitio.`,
                image: 'https://images.unsplash.com/photo-1544161515-4af67f54044a?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'mas-l1p5',
            title: 'Ergonomía y Cuidado del Terapeuta',
            type: 'document',
            content: `**Introducción:** Tu cuerpo es tu herramienta de trabajo. Si no te cuidas, tu carrera será muy corta.

**Explicación Detallada:** La fuerza del masaje NO debe venir de tus muñecas o dedos, sino de tu **peso corporal** y el movimiento de tus piernas (posición de estocada o "Lunge"). Mantén la espalda recta y las rodillas ligeramente flexionadas. Usa tus manos, antebrazos y codos para distribuir el esfuerzo. Recuerda hidratarte y estirar tus muñecas entre cada sesión.

**Resumen:** Si terminas con dolor de espalda, tu técnica ergonómica está fallando.

**Puntos Clave:**
*   **Mecánica Corporal:** El movimiento nace en los pies y se transmite a las manos.
*   **Cuidado de Muñecas:** Evita la hiperextensión de la muñeca al presionar.`,
            topics: [
              {
                title: 'La Postura del Guerrero',
                description: `**Base de Sustentación:** Mantener los pies separados y usar el balanceo del cuerpo para aplicar presión uniforme sin agotarse.`,
                whatIsItFor: `**Objetivo:** Adoptar posturas ergonómicas correctas para prevenir lesiones profesionales a largo plazo.`,
                howToDoIt: `**Checklist Postural:**
1.  **Pies:** Uno adelante y otro atrás.
2.  **Espalda:** Siempre recta, cabeza alineada con la columna.
3.  **Presión:** Deja caer tu peso sobre el cliente, no empujes con los hombros.`,
                image: 'https://images.unsplash.com/photo-1519415510236-855911993297?auto=format&fit=crop&q=80&w=400'
              }
            ]
          }
        ],
        lessonExam: [
          { id: 'mas-q1', type: 'multiple', question: '¿Para qué sirve el masaje sueco?', options: ['Para adelgazar', 'Relajación y mejora de la circulación', 'Tratar fracturas', 'Solo por placer'], correctAnswer: 1 },
          { id: 'mas-q2', type: 'multiple', question: '¿Qué es el "Efleurage"?', options: ['Amasamiento fuerte', 'Roce suave y superficial', 'Puntos gatillo', 'Golpeteo'], correctAnswer: 1 },
          { id: 'mas-q3', type: 'multiple', question: '¿Cuál es la contraindicación absoluta?', options: ['Estrés', 'Fiebre o infecciones agudas', 'Cansancio', 'Dolor muscular leve'], correctAnswer: 1 },
          { id: 'mas-q4', type: 'multiple', question: '¿Para qué se usan los aceites?', options: ['Para mojar', 'Para facilitar el deslizamiento y no irritar', 'Para dar calor', 'Por el olor solamente'], correctAnswer: 1 },
          { id: 'mas-q5', type: 'multiple', question: '¿Qué es el amasamiento (Petrissage)?', options: ['Roce suave', 'Compresión rítmica de los tejidos', 'Vibración', 'Presión estática'], correctAnswer: 1 },
          { id: 'mas-q6', type: 'multiple', question: '¿Qué sistema se beneficia más directamente?', options: ['Digestivo', 'Muscular y circulatorio', 'Óseo', 'Respiratorio'], correctAnswer: 1 },
          { id: 'mas-q7', type: 'multiple', question: '¿Cuál es la postura del masajista?', options: ['Doblado', 'Ergonómica para proteger su espalda', 'Sentado siempre', 'De rodillas'], correctAnswer: 1 },
          { id: 'mas-q8', type: 'multiple', question: '¿Qué es la ética del tacto?', options: ['Presionar fuerte', 'Respeto a la intimidad y límites del cliente', 'Hablar de problemas', 'No tocar'], correctAnswer: 1 },
          { id: 'mas-q9', type: 'multiple', question: '¿Para qué sirve la música en cabina?', options: ['Para no aburrirse', 'Ayudar a la relajación mental', 'Tapar ruidos de la calle', 'Es obligatoria'], correctAnswer: 1 },
          { id: 'mas-q10', type: 'multiple', question: '¿Qué es la anamnesis en masaje?', options: ['El masaje en sí', 'Entrevista previa para conocer dolencias o riesgos', 'El cobro', 'La despedida'], correctAnswer: 1 }
        ]
      },
      {
        id: 'l2',
        title: 'Módulo 2: Técnicas Terapéuticas Avanzadas',
        parts: [
          {
            id: 'l2p1',
            title: 'Piedras Calientes (Termoterapia)',
            type: 'document',
            content: `**Introducción:** El uso de piedras volcánicas (basalto) combina el masaje manual con el poder sedante del calor.

**Explicación Detallada:** Las piedras se calientan en un calentador especial con agua a unos 50-60°C. El calor penetra hasta 4 cm en el tejido muscular, provocando una vasodilatación que relaja las fibras casi instantáneamente. Se usan tanto para masajear (deslizándolas) como para dejarlas estáticas en puntos de energía (chakras) o zonas de dolor crónico.

**Resumen:** El calor profundo permite soltar nudos que el masaje manual tardaría mucho más tiempo en disolver.

**Puntos Clave:**
*   **Basalto:** Piedra que mejor retiene el calor.
*   **Seguridad:** Prueba siempre la piedra en tu propio antebrazo antes de tocar al cliente.
*   **Beneficio:** Sedación profunda del sistema nervioso.`,
            topics: [
              {
                title: 'Manejo de Piedras',
                description: `Aprender a alternar entre el calor de las piedras y el frío de las manos para un efecto circulatorio.`,
                whatIsItFor: `**Objetivo:** Integrar herramientas térmicas en la rutina de masaje relajante.`,
                howToDoIt: `**Instrucción:** Desliza la piedra sobre la espalda usando aceite, haciendo círculos lentos sobre los omóplatos.`,
                image: 'https://images.unsplash.com/photo-1544161515-4af67f54044a?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'l2p2',
            title: 'Masaje de Tejido Profundo (Deep Tissue)',
            type: 'document',
            content: `**Introducción:** Esta técnica no busca la relajación superficial, sino llegar a las capas más profundas del músculo y la fascia.

**Explicación Detallada:** Se caracteriza por movimientos lentos y una presión muy firme. Se utilizan los antebrazos, codos y nudillos para "despegar" fibras musculares que se han pegado por estrés o mala postura. No debe doler de forma insoportable, pero el cliente sentirá una intensidad mayor que en un masaje sueco.

**Resumen:** Ideal para dolores crónicos y personas con mucha masa muscular.

**Puntos Clave:**
*   **Presión Progresiva:** Empezar suave e ir profundizando.
*   **Hidratación:** El cliente debe beber mucha agua después para eliminar toxinas liberadas.
*   **Enfoque:** Se trabaja por zonas específicas, no en todo el cuerpo a la vez.`,
            topics: [
              {
                title: 'Técnica de Codo',
                description: `Uso de superficies romas para aplicar presión sin cansar los dedos.`,
                whatIsItFor: `**Objetivo:** Aprender a aplicar presión intensa de forma segura y efectiva.`,
                howToDoIt: `**Práctica:** Usa la base de tu palma para estirar el dorsal antes de aplicar presión con el codo.`,
                image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'l2p3',
            title: 'Reflexología Podal Básica',
            type: 'document',
            content: `**Introducción:** Los pies son el mapa del cuerpo entero. Cada zona del pie corresponde a un órgano o sistema.

**Explicación Detallada:** Al presionar ciertos puntos en la planta del pie, podemos enviar señales al cerebro para equilibrar funciones en el estómago, pulmones o columna. Es una técnica excelente para cerrar un masaje corporal, dejando al cliente con una sensación de ligereza total.

**Resumen:** La reflexología equilibra la energía corporal mediante la digitopresión en los pies.

**Puntos Clave:**
*   **Pulgares:** Son la herramienta principal (Caminata de pulgar).
*   **Zonas:** Talón (zona pélvica), Arco (zona digestiva), Metatarso (tórax).
*   **Relajación:** Disminuye el estrés de inmediato al trabajar las terminaciones nerviosas.`,
            topics: [
              {
                title: 'Mapa de los Pies',
                description: `Visualizar la correspondencia de los órganos en la planta del pie.`,
                whatIsItFor: `**Objetivo:** Incorporar la reflexología como complemento de bienestar integral.`,
                howToDoIt: `**Tarea:** Realiza presiones circulares en el centro de la planta del pie para relajar el plexo solar.`,
                image: 'https://images.unsplash.com/photo-1519415510236-855911993297?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'l2p4',
            title: 'Masaje Craneofacial y Cervical',
            type: 'document',
            content: `**Introducción:** Donde más acumulamos estrés es en la mandíbula, frente y cuello.

**Explicación Detallada:** El masaje craneal relaja el músculo occipitofrontal y ayuda con las migrañas tensionales. El masaje facial debe ser muy suave, siguiendo las líneas de expresión. En el cuello, nos enfocamos en el esternocleidomastoideo y los escalenos, zonas que sufren mucho por el uso del celular (Text-neck).

**Resumen:** Un rostro relajado proyecta bienestar y libera la tensión del resto del cuerpo.

**Puntos Clave:**
*   **Presión:** Muy ligera, casi un roce en el rostro.
*   **Cuello:** Movimientos de tracción suaves para elongar las vértebras.
*   **Cuero Cabelludo:** Movimientos circulares vigorosos pero sin jalar el pelo.`,
            topics: [
              {
                title: 'Liberación de Tensión Facial',
                description: `Técnicas de digitopresión en sienes y mandíbula.`,
                whatIsItFor: `**Objetivo:** Aliviar dolores de cabeza y tensión por bruxismo.`,
                howToDoIt: `**Ejercicio:** Haz pequeños círculos con las yemas de tus dedos en las sienes del cliente.`,
                image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'l2p5',
            title: 'Estiramientos Asistidos y Movilizaciones',
            type: 'document',
            content: `**Introducción:** El masaje termina de ser efectivo cuando recuperamos el rango de movimiento perdido.

**Explicación Detallada:** Las movilizaciones pasivas consisten en mover las articulaciones del cliente (hombros, cadera) sin que él haga fuerza. Los estiramientos asistidos aprovechan que el músculo está caliente y relajado para elongarlo suavemente, mejorando la flexibilidad y soltando las últimas tensiones profundas.

**Resumen:** Las movilizaciones lubrican las articulaciones y los estiramientos "resetean" la longitud muscular.

**Puntos Clave:**
*   **No forzar:** Nunca llegar al punto del dolor.
*   **Respiración:** Pedir al cliente que exhale cuando realizas el estiramiento.
*   **Hombros:** Rotaciones lentas para liberar la cápsula articular.`,
            topics: [
              {
                title: 'Movilidad Articular',
                description: `Aprender a manejar el peso de las extremidades del cliente con seguridad.`,
                whatIsItFor: `**Objetivo:** Devolver la amplitud de movimiento al cuerpo tras la terapia manual.`,
                howToDoIt: `**Logro:** Realiza una rotación suave de hombro sosteniendo el codo y la muñeca del cliente.`,
                image: 'https://images.unsplash.com/photo-1544161515-4af67f54044a?auto=format&fit=crop&q=80&w=400'
              }
            ]
          }
        ],
        lessonExam: [
          { id: 'l2q1', type: 'multiple', question: '¿Qué tipo de piedras se usan en masajes?', options: ['Piedras de río comunes', 'Piedras volcánicas (basalto) por su retención de calor', 'Piedras preciosas', 'Hielo'], correctAnswer: 1 },
          { id: 'l2q2', type: 'multiple', question: '¿Qué es la reflexología podal?', options: ['Masaje en la espalda', 'Trabajo en zonas reflejas de los pies', 'Arreglo de uñas', 'Un tipo de zapato'], correctAnswer: 1 },
          { id: 'l2q3', type: 'multiple', question: '¿Cómo deben estar las piedras al aplicarlas?', options: ['Hirviendo', 'A una temperatura tibia-caliente tolerable (aprox 50°C)', 'Frías', 'Secas solamente'], correctAnswer: 1 },
          { id: 'l2q4', type: 'multiple', question: '¿Para qué sirve el masaje de tejido profundo?', options: ['Para dormir', 'Liberar tensiones crónicas en capas profundas del músculo', 'Solo para la piel', 'Para niños'], correctAnswer: 1 },
          { id: 'l2q5', type: 'multiple', question: '¿Qué es un "Punto Gatillo"?', options: ['Un hueso', 'Zona de dolor referido e hiperirritabilidad en el músculo', 'Un músculo fuerte', 'Una articulación'], correctAnswer: 1 },
          { id: 'l2q6', type: 'multiple', question: '¿Cuál es el beneficio de la termoterapia?', options: ['Enfriar el cuerpo', 'Relajación muscular por vasodilatación', 'Cerrar poros', 'Ninguno'], correctAnswer: 1 },
          { id: 'l2q7', type: 'multiple', question: '¿Cómo se limpian las piedras volcánicas?', options: ['Solo con agua', 'Lavado con jabón neutro y desinfección', 'No se limpian', 'Con perfume'], correctAnswer: 1 },
          { id: 'l2q8', type: 'multiple', question: '¿Qué técnica busca el equilibrio energético en pies?', options: ['Masaje sueco', 'Reflexología', 'Lifting', 'Afeitado'], correctAnswer: 1 },
          { id: 'l2q9', type: 'multiple', question: '¿Qué es la presión estática?', options: ['Moverse mucho', 'Mantener una presión constante en un punto específico', 'Golpear', 'No tocar'], correctAnswer: 1 },
          { id: 'l2q10', type: 'multiple', question: '¿Para qué sirve la vibración rítmica?', options: ['Cansar al cliente', 'Relajar el sistema nervioso y soltar tejidos', 'Para hacer ruido', 'Para nada'], correctAnswer: 1 }
        ]
      },
      {
        id: 'l3',
        title: 'Módulo 3: Masajes Reductores y Estéticos',
        parts: [
          {
            id: 'l3p1',
            title: 'Maderoterapia y sus Herramientas',
            type: 'document',
            content: `**Introducción:** La maderoterapia utiliza elementos de madera diseñados para adaptarse a las curvas del cuerpo.

**Explicación Detallada:** Los instrumentos (rodillos, copas suecas, tablas moldeadoras) permiten una presión más uniforme y profunda que las manos para tratar la celulitis. El rodillo de mazorca activa la circulación, mientras que la copa sueca genera un efecto de vacío que ayuda a movilizar la grasa localizada hacia los puntos de drenaje.

**Resumen:** Es una técnica natural, no invasiva y altamente efectiva para el moldeo corporal.

**Puntos Clave:**
*   **Presión:** Se calibra según la tolerancia de la piel (no dejar moratones).
*   **Aceites:** Usar aceites reductores para potenciar la quema de grasa.
*   **Higiene:** Limpiar la madera con soluciones desinfectantes no corrosivas.`,
            topics: [
              {
                title: 'Uso de la Copa Sueca',
                description: `Técnica de succión para movilizar adiposidad.`,
                whatIsItFor: `**Objetivo:** Dominar los implementos de madera para tratamientos estéticos.`,
                howToDoIt: `**Instrucción:** Usa la copa en movimientos ascendentes rápidos desde la rodilla hasta el glúteo.`,
                image: 'https://images.unsplash.com/photo-1544161515-4af67f54044a?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'l3p2',
            title: 'Drenaje Linfático Manual (DLM)',
            type: 'document',
            content: `**Introducción:** El DLM es un masaje de salud que ayuda al cuerpo a eliminar toxinas y líquidos acumulados.

**Explicación Detallada:** A diferencia del masaje relajante, el DLM es **extremadamente suave**. No usamos aceites (o muy poco) para poder "arrastrar" la piel. Los movimientos son circulares y lentos, siguiendo el ritmo del sistema linfático. Es el tratamiento post-operatorio número 1 tras una cirugía estética.

**Resumen:** El drenaje linfático desinflama el cuerpo y refuerza el sistema inmunológico.

**Puntos Clave:**
*   **Ritmo:** Lento, imitando el bombeo del corazón.
*   **Dirección:** Siempre hacia los ganglios (axilas, ingles, cuello).
*   **Beneficio:** Reduce edemas (hinchazón) de inmediato.`,
            topics: [
              {
                title: 'Bombeo de Ganglios',
                description: `Aprender a "abrir" los filtros del cuerpo antes de empezar el drenaje.`,
                whatIsItFor: `**Objetivo:** Realizar un drenaje linfático efectivo para desintoxicación corporal.`,
                howToDoIt: `**Práctica:** Presiona suavemente 3 veces en la zona de la ingle antes de drenar la pierna.`,
                image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'l3p3',
            title: 'Masaje Reductor de Abdomen',
            type: 'document',
            content: `**Introducción:** El masaje reductor busca descompactar la grasa para que el cuerpo pueda metabolizarla mejor.

**Explicación Detallada:** Se usan maniobras vigorosas y rápidas. El amasamiento profundo y los nudillares rompen los tabiques de grasa. Se debe alternar con drenaje para que lo que soltamos sea eliminado por la orina. Es un tratamiento complementario a la dieta y el ejercicio, no un sustituto.

**Resumen:** Combina velocidad y fricción para elevar la temperatura local y movilizar depósitos de grasa.

**Puntos Clave:**
*   **Intensidad:** Alta, pero sin causar lesiones internas.
*   **Sentido:** Seguir el sentido de las agujas del reloj (para ayudar también a la digestión).
*   **Duración:** Sesiones de 40 a 60 minutos.`,
            topics: [
              {
                title: 'Maniobra de Nudillares',
                description: `Uso de los nudillos para trabajar la grasa rebelde.`,
                whatIsItFor: `**Objetivo:** Reducir medidas visuales y mejorar el tránsito intestinal.`,
                howToDoIt: `**Ejercicio:** Realiza círculos rápidos con tus nudillos en los laterales de la cintura.`,
                image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'l3p4',
            title: 'Celulitis: Tipos y Tratamientos',
            type: 'document',
            content: `**Introducción:** La celulitis o "piel de naranja" afecta al 90% de las mujeres y requiere un enfoque específico.

**Explicación Detallada:** Existen 3 tipos: **Edematosa** (retención de líquidos), **Blanda** (flacidez) y **Dura** (compacta y dolorosa). Para tratarla, combinamos maderoterapia para romper el tejido fibroso y drenaje para evacuar. El uso de cremas calientes (hiperemiantes) ayuda a que los poros se abran y los principios activos penetren mejor.

**Resumen:** Identificar el tipo de celulitis permite elegir la técnica de masaje correcta.

**Puntos Clave:**
*   **Piel de Naranja:** Acumulación de grasa que empuja el tejido conectivo.
*   **Exfoliación:** Hacerla una vez por semana mejora la absorción de productos.
*   **Constancia:** Se requieren al menos 10 sesiones para ver cambios reales.`,
            topics: [
              {
                title: 'Diagnóstico de Piel',
                description: `Aprender a diferenciar entre flacidez muscular y celulitis.`,
                whatIsItFor: `**Objetivo:** Diseñar protocolos personalizados contra la celulitis.`,
                howToDoIt: `**Tarea:** Presiona suavemente el muslo para observar si aparecen hoyuelos de forma natural o por presión.`,
                image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'l3p5',
            title: 'Envolturas Corporales (Body Wraps)',
            type: 'document',
            content: `**Introducción:** El cierre perfecto para un tratamiento estético es la envoltura.

**Explicación Detallada:** Se aplica una máscara de **Arcilla**, **Algas** o **Fango** en todo el cuerpo o zona tratada. Se envuelve al cliente en papel film o manta térmica por 20 minutos. El calor hace que el cuerpo sude y absorba los minerales del producto, logrando una piel mucho más firme, suave y detoxificada.

**Resumen:** Las envolturas sellan el tratamiento y aprovechan la apertura de poros por el masaje previo.

**Puntos Clave:**
*   **Detox:** Eliminación de metales pesados y toxinas.
*   **Hidratación:** Deja la piel con textura de seda.
*   **Relax:** Es el momento de descanso total para el cliente.`,
            topics: [
              {
                title: 'Mascarillas de Algas',
                description: `Beneficios de los principios activos marinos en la piel.`,
                whatIsItFor: `**Objetivo:** Ofrecer un servicio premium de spa que complemente el masaje.`,
                howToDoIt: `**Logro:** Aplica la arcilla con un pincel grande y cubre con film sin apretar demasiado.`,
                image: 'https://images.unsplash.com/photo-1544161515-4af67f54044a?auto=format&fit=crop&q=80&w=400'
              }
            ]
          }
        ],
        lessonExam: [
          { id: 'l3q1', type: 'multiple', question: '¿Qué es el drenaje linfático?', options: ['Un masaje fuerte', 'Técnica suave para eliminar toxinas y líquidos', 'Ejercicio de gym', 'Un tipo de dieta'], correctAnswer: 1 },
          { id: 'l3q2', type: 'multiple', question: '¿Para qué sirve la maderoterapia?', options: ['Para prender fuego', 'Modelar el cuerpo y tratar la celulitis mediante fricción', 'Para peinar', 'No tiene uso'], correctAnswer: 1 },
          { id: 'l3q3', type: 'multiple', question: '¿Qué es el rodillo de mazorca?', options: ['Un juguete', 'Instrumento de madera para activar circulación y remover grasa', 'Un peine', 'Una piedra'], correctAnswer: 1 },
          { id: 'l3q4', type: 'multiple', question: '¿Cómo debe ser la presión en drenaje linfático?', options: ['Muy fuerte', 'Muy suave, superficial y rítmica', 'Media', 'Inexistente'], correctAnswer: 1 },
          { id: 'l3q5', type: 'multiple', question: '¿Hacia dónde se dirige el drenaje?', options: ['A cualquier lado', 'Hacia los ganglios linfáticos más cercanos', 'Hacia los pies siempre', 'Hacia la cabeza'], correctAnswer: 1 },
          { id: 'l3q6', type: 'multiple', question: '¿Para qué sirve la tabla moldeadora?', options: ['Para apoyar cosas', 'Definir curvas y drenar líquidos en maderoterapia', 'Para golpear', 'Para tapar'], correctAnswer: 1 },
          { id: 'l3q7', type: 'multiple', question: 'Beneficio estético del masaje reductor:', options: ['Cura enfermedades', 'Mejora la apariencia de la piel y reduce medidas visualmente', 'Ninguno', 'Aumenta el peso'], correctAnswer: 1 },
          { id: 'l3q8', type: 'multiple', question: '¿Qué es la adiposidad localizada?', options: ['Hueso', 'Grasa acumulada en zonas específicas', 'Un músculo', 'Un nervio'], correctAnswer: 1 },
          { id: 'l3q9', type: 'multiple', question: '¿Para qué sirve el aceite reductor?', options: ['Para mojar', 'Aportar principios activos que ayudan a la quema de grasa', 'Para el pelo', 'No sirve'], correctAnswer: 1 },
          { id: 'l3q10', type: 'multiple', question: 'Importancia de la ingesta de agua post-reductor:', options: ['Para tener sed', 'Facilitar la eliminación de toxinas removidas', 'No es importante', 'Para sudar'], correctAnswer: 1 }
        ]
      },
      {
        id: 'l4',
        title: 'Módulo 4: Masaje Deportivo y Estiramientos',
        parts: [
          {
            id: 'l4p1',
            title: 'Masaje Pre-Competición',
            type: 'document',
            content: `**Introducción:** El objetivo aquí es "despertar" al músculo, no relajarlo.

**Explicación Detallada:** Se realiza entre 15 a 45 minutos antes del ejercicio físico. Las maniobras son rápidas, cortas y superficiales. Se evita el masaje profundo ya que podría causar una pesadez muscular contraproducente. Buscamos aumentar la temperatura local y la circulación para preparar al atleta para un esfuerzo máximo.

**Resumen:** Es una activación sanguínea y nerviosa antes del deporte.

**Puntos Clave:**
*   **Velocidad:** Alta.
*   **Presión:** Superficial o media.
*   **Duración:** Corta (15-20 min).`,
            topics: [
              {
                title: 'Activación Muscular',
                description: `Técnicas de percusión rápida para estimular la respuesta nerviosa.`,
                whatIsItFor: `**Objetivo:** Preparar el sistema musculoesquelético para el alto rendimiento.`,
                howToDoIt: `**Instrucción:** Usa golpeteos rítmicos y rápidos con el canto de la mano en los cuádriceps.`,
                image: 'https://images.unsplash.com/photo-1519415510236-855911993297?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'l4p2',
            title: 'Masaje Post-Competición',
            type: 'document',
            content: `**Introducción:** Este masaje se realiza tras el esfuerzo para acelerar la recuperación.

**Explicación Detallada:** Aquí sí buscamos la relajación. El objetivo es eliminar el ácido láctico y los desechos metabólicos acumulados. Usamos técnicas de drenaje y amasamiento muy suave para no dañar fibras que puedan estar micro-lesionadas por el ejercicio intenso. Ayuda a prevenir las temidas "agujetas" o dolor muscular tardío.

**Resumen:** Recupera la flexibilidad y limpia el músculo tras el cansancio extremo.

**Puntos Clave:**
*   **Drenaje:** Ayuda a que la sangre "sucia" circule.
*   **Hielo:** Se puede combinar con masajes con hielo para desinflamar.
*   **Postura:** Elevar las piernas del atleta durante el masaje.`,
            topics: [
              {
                title: 'Eliminación de Toxinas',
                description: `Maniobras lentas que favorecen la limpieza tisular.`,
                whatIsItFor: `**Objetivo:** Reducir el tiempo de recuperación entre entrenamientos o partidos.`,
                howToDoIt: `**Práctica:** Realiza deslizamientos largos desde el tobillo hasta la cadera muy lentamente.`,
                image: 'https://images.unsplash.com/photo-1544161515-4af67f54044a?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'l4p3',
            title: 'Manejo de Contracturas y Sobrecargas',
            type: 'document',
            content: `**Introducción:** El deportista suele presentar zonas de "tensión acumulada" que limitan su movimiento.

**Explicación Detallada:** Una contractura es un músculo que se quedó "trabado" en tensión. Usamos la **Fricción Transversa Profunda (Cyriax)** para romper la fibrosis. Es una técnica intensa que se aplica exactamente sobre la zona del dolor. Combinado con calor previo, permite que el músculo recupere su elasticidad original sin recurrir a fármacos.

**Resumen:** El tratamiento de puntos gatillo es vital para que el atleta recupere su forma física total.

**Puntos Clave:**
*   **Cyriax:** Presión que se mueve en contra de las fibras.
*   **Dolor:** El cliente debe informar si la presión es excesiva.
*   **Reposo:** A veces se requiere un día de descanso post-trata miento.`,
            topics: [
              {
                title: 'Técnica Cyriax',
                description: `Presión profunda sobre tendones y ligamentos para mejorar su salud.`,
                whatIsItFor: `**Objetivo:** Tratar lesiones crónicas y puntos de dolor agudo en deportistas.`,
                howToDoIt: `**Ejercicio:** Usa tus dos dedos (uno sobre otro) para presionar y moverte de lado a lado sobre el tendón.`,
                image: 'https://images.unsplash.com/photo-1519415510236-855911993297?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'l4p4',
            title: 'Kinesiotape: El Vendaje que Cura',
            type: 'document',
            content: `**Introducción:** Esas cintas de colores que vemos en los atletas se llaman Kinesiotape o Vendaje Neuromuscular.

**Explicación Detallada:** No limitan el movimiento como un vendaje normal. Funcionan levantando microscópicamente la piel para que la linfa y la sangre circulen mejor por debajo. Alivian el dolor y dan soporte al músculo sin ser un parche rígido. El barbero o masajista puede usarlo como toque final tras tratar una contractura para que el efecto dure días.

**Resumen:** Prolonga el efecto del masaje y da seguridad al movimiento del paciente.

**Puntos Clave:**
*   **Tensión:** Se aplica con diferentes niveles de estiramiento según el objetivo.
*   **Anclajes:** Los extremos de la cinta nunca llevan tensión.
*   **Agua:** Son resistentes al agua y pueden durar hasta 5 días puestos.`,
            topics: [
              {
                title: 'Aplicación de Cintas',
                description: `Aprender los cortes básicos (en I, en Y, en X) para diferentes músculos.`,
                whatIsItFor: `**Objetivo:** Complementar la terapia manual con soporte neuromuscular duradero.`,
                howToDoIt: `**Instrucción:** Limpia la zona con alcohol, corta las puntas redondeadas de la cinta y pégala sin estirar la piel.`,
                image: 'https://images.unsplash.com/photo-1544161515-4af67f54044a?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'l4p5',
            title: 'Prevención y Educación del Atleta',
            type: 'document',
            content: `**Introducción:** El mejor masaje es el que se hace antes de que aparezca la lesión.

**Explicación Detallada:** Como masajista deportivo, debes educar a tu cliente. Enséñale estiramientos básicos para hacer en casa y la importancia de la hidratación. El masaje preventivo (mantenimiento) debe hacerse una vez por semana o cada 15 días según el volumen de entreno. Esto mantiene la fascia libre y los músculos listos para la acción.

**Resumen:** La prevención ahorra meses de fisioterapia y permite al atleta ser constante.

**Puntos Clave:**
*   **Fascia:** Trabajar el tejido que envuelve al músculo evita desgarros.
*   **Escuchar al cuerpo:** El masaje ayuda a detectar tensiones antes de que duelan.
*   **Salud mental:** Reduce la ansiedad pre-competencia.`,
            topics: [
              {
                title: 'Mantenimiento del Rendimiento',
                description: `Calendario de masajes según la temporada deportiva (carga o descarga).`,
                whatIsItFor: `**Objetivo:** Convertirse en el consultor de salud y rendimiento del cliente deportista.`,
                howToDoIt: `**Logro:** Diseña un plan de 4 sesiones mensuales para un corredor que entrena para una maratón.`,
                image: 'https://images.unsplash.com/photo-1519415510236-855911993297?auto=format&fit=crop&q=80&w=400'
              }
            ]
          }
        ],
        lessonExam: [
          { id: 'l4q1', type: 'multiple', question: '¿Cuándo se aplica el masaje pre-competición?', options: ['Después de correr', 'Antes del evento para calentar músculos', 'Durante el sueño', 'Solo si hay dolor'], correctAnswer: 1 },
          { id: 'l4q2', type: 'multiple', question: '¿Qué es el masaje de descarga?', options: ['Un masaje suave', 'Masaje post-entreno para eliminar fatiga y ácido láctico', 'Lavar los músculos', 'No existe'], correctAnswer: 1 },
          { id: 'l4q3', type: 'multiple', question: '¿Para qué sirven los estiramientos pasivos?', options: ['Para cansar', 'Mejorar el rango de movimiento asistido por el terapeuta', 'Para dormir', 'Para ganar fuerza'], correctAnswer: 1 },
          { id: 'l4q4', type: 'multiple', question: '¿Qué es la crioterapia?', options: ['Uso de calor', 'Uso de frío para reducir inflamación', 'Uso de luces', 'Uso de sonidos'], correctAnswer: 1 },
          { id: 'l4q5', type: 'multiple', question: '¿Cómo evitar lesiones con el masaje?', options: ['No sirve para eso', 'Manteniendo la elasticidad y salud de las fibras musculares', 'Masajeando huesos', 'Haciendo mucha fuerza'], correctAnswer: 1 },
          { id: 'l4q6', type: 'multiple', question: '¿Qué es el ácido láctico?', options: ['Una leche', 'Desecho metabólico que causa fatiga muscular', 'Un tipo de aceite', 'Un hueso'], correctAnswer: 1 },
          { id: 'l4q7', type: 'multiple', question: '¿Para qué sirve el percusor (Massage Gun)?', options: ['Para jugar', 'Terapia de percusión para relajar puntos profundos', 'Para audio', 'No sirve'], correctAnswer: 1 },
          { id: 'l4q8', type: 'multiple', question: 'Importancia del calentamiento antes del masaje deportivo:', options: ['No es necesario', 'Preparar el flujo sanguíneo y evitar microdesgarros', 'Para que el cliente sude', 'Por estética'], correctAnswer: 1 },
          { id: 'l4q9', type: 'multiple', question: '¿Qué es una contractura?', options: ['Un hueso roto', 'Contracción involuntaria persistente de un músculo', 'Un músculo largo', 'Un nervio'], correctAnswer: 1 },
          { id: 'l4q10', type: 'multiple', question: 'Objetivo del masaje deportivo avanzado:', options: ['Solo relax', 'Optimizar rendimiento y acelerar recuperación tisular', 'Dormir', 'Bajar de peso'], correctAnswer: 1 }
        ]
      },
      {
        id: 'l5',
        title: 'Módulo 5: Aromaterapia y Musicoterapia',
        parts: [
          {
            id: 'l5p1',
            title: 'Aromaterapia: El Poder de las Esencias',
            type: 'document',
            content: `**Introducción:** El olfato es el único sentido conectado directamente con el sistema límbico de las emociones.

**Explicación Detallada:** Los aceites esenciales no solo huelen bien; tienen propiedades químicas. La **Lavanda** sedante, el **Eucalipto** expectorante y el **Romero** circulatorio. Debemos siempre diluirlos en un aceite base (almendras o coco) para no quemar la piel del cliente. Unas gotas en el difusor y otras en las manos al iniciar el masaje cambian la experiencia por completo.

**Resumen:** El uso de esencias transporta al cliente a un estado de paz incluso antes de ser tocado.

**Puntos Clave:**
*   **Pureza:** Usa solo aceites 100% puros de grado terapéutico.
*   **Mezclas:** Puedes mezclar hasta 3 aceites para efectos sinérgicos.
*   **Seguridad:** Cuidado con los cítricos (limón, naranja), pueden manchar con el sol.`,
            topics: [
              {
                title: 'Mezcla Personalizada',
                description: `Aprender a elegir el aroma ideal según el estado de ánimo detectado.`,
                whatIsItFor: `**Objetivo:** Enriquecer la sesión de masaje con beneficios olfativos reales.`,
                howToDoIt: `**Instrucción:** Pon una gota de Lavanda en tus palmas, frótalas y deja que el cliente respire el aroma 3 veces.`,
                image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'l5p2',
            title: 'Ambiente: Luz, Música y Temperatura',
            type: 'document',
            content: `**Introducción:** El spa es un santuario. Todo lo que el cliente ve, oye y siente debe ser armonioso.

**Explicación Detallada:** La **Iluminación** debe ser tenue, preferiblemente con velas de LED o luces cálidas indirectas. La **Música** no debe tener letra (para no activar el centro del lenguaje en el cerebro); se recomiendan sonidos de la naturaleza o música ambient de 432Hz. La **Temperatura** debe ser cálida (24-26°C), ya que al relajarse, la temperatura corporal baja y el cliente podría sentir frío.

**Resumen:** Si el ambiente está fallando, la técnica de masaje más avanzada no logrará la relajación total.

**Puntos Clave:**
*   **Cromoterapia:** Luz azul/verde para relax, roja para energía.
*   **Silencio:** Evita hablar durante la sesión a menos que sea necesario.
*   **Orden:** Una cabina desordenada genera ruido visual y estrés.`,
            topics: [
              {
                title: 'Diseño de Cabina',
                description: `Organización del espacio para que el terapeuta se mueva libremente.`,
                whatIsItFor: `**Objetivo:** Crear una atmósfera inmersiva que induzca estados profundos de calma.`,
                howToDoIt: `**Práctica:** Entra a tu cabina, cierra los ojos y escucha: ¿Qué ruidos distraen? Elimínalos.`,
                image: 'https://images.unsplash.com/photo-1544161515-4af67f54044a?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'l5p3',
            title: 'Atención al Cliente y Protocolo de Saluda',
            type: 'document',
            content: `**Introducción:** El cliente no solo compra un masaje, compra una experiencia de principio a fin.

**Explicación Detallada:** El protocolo inicia desde que agendan la cita. Al llegar, ofréceles un té o agua. Durante el masaje, pregunta una sola vez si la presión es de su agrado y luego mantén silencio. Al terminar, déjalos 2 minutos solos para que se incorporen lentamente; levantarse rápido puede causar mareo. Acompáñalos a la salida y agenda su próxima cita.

**Resumen:** El trato humano y el respeto a los tiempos del cliente son lo que te diferencia de un masaje barato.

**Puntos Clave:**
*   **Empatía:** Entender el motivo del estrés del cliente sin juzgar.
*   **Seguimiento:** Preguntar por WhatsApp al día siguiente cómo se siente su espalda.
*   **Fidelización:** Pack de sesiones con descuento.`,
            topics: [
              {
                title: 'La Bienvenida al Spa',
                description: `Cómo realizar la anamnesis (ficha técnica) de forma profesional pero cálida.`,
                whatIsItFor: `**Objetivo:** Establecer una relación de confianza y seguridad con el paciente.`,
                howToDoIt: `**Tarea:** Diseña una hoja de consentimiento donde el cliente declare si tiene cirugías o alergias.`,
                image: 'https://images.unsplash.com/photo-1519415510236-855911993297?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'l5p4',
            title: 'Marketing para Terapeutas Digitales',
            type: 'document',
            content: `**Introducción:** Si no te ven, no existes. Las redes sociales son tu vitrina.

**Explicación Detallada:** Usa Instagram para mostrar fotos de tu cabina (limpia y zen), videos cortos de tus manos trabajando (sin mostrar nada inapropiado del cliente) y tips de salud. No vendas "Masajes", vende "Alivio al dolor de cuello por el home office". La gente busca soluciones a sus problemas. Google Maps es vital; tener buenas reseñas allí atrae a gente de tu zona.

**Resumen:** Enfoca tu publicidad en los beneficios (bienestar, energía, paz) y no solo en el precio.

**Puntos Clave:**
*   **Testimonios:** Historias de clientes agradecidos.
*   **Educación:** Enseña un estiramiento en video para que confíen en tu saber.
*   **Estética:** Fotos con colores suaves y naturales.`,
            topics: [
              {
                title: 'Tu Marca Personal',
                description: `Diferenciarte por tu especialidad (ej: "El experto en masaje deportivo").`,
                whatIsItFor: `**Objetivo:** Atraer clientes de forma constante a través de plataformas digitales.`,
                howToDoIt: `**Logro:** Publica una foto de tus herramientas (piedras, aceites) con una frase sobre sus beneficios.`,
                image: 'https://images.unsplash.com/photo-1497339100210-9e87df79c218?auto=format&fit=crop&q=80&w=400'
              }
            ]
          },
          {
            id: 'l5p5',
            title: 'Higiene y Bioseguridad en Cabina',
            type: 'document',
            content: `**Introducción:** La salud del cliente y la tuya dependen de un protocolo de limpieza estricto.

**Explicación Detallada:** Las sábanas y toallas se cambian TRAS CADA CLIENTE sin excepción. La camilla se desinfecta con alcohol al 70%. El uso de sábanas descartables encima de las de tela es muy recomendado. Tus manos deben estar lavadas hasta el codo. Mantén tu cabello recogido y usa una vestimenta que proyecte profesionalismo y pulcritud.

**Resumen:** La limpieza es la base de la ética profesional en el contacto humano.

**Puntos Clave:**
*   **Ventilación:** Abre ventanas entre sesiones para renovar el aire.
*   **Eliminación de residuos:** Aceites viejos o toallitas usadas.
*   **Aroma ambiental:** Siempre fresco, nunca cargado o con olor a sudor.`,
            topics: [
              {
                title: 'Protocolo de Desinfección',
                description: `Paso a paso para dejar la cabina lista para el siguiente cliente en 10 minutos.`,
                whatIsItFor: `**Objetivo:** Garantizar un ambiente libre de bacterias y virus para la práctica segura.`,
                howToDoIt: `**Checklist:** Quita sábanas, rocía alcohol en camilla, limpia piedras, cambia aceites y ventila.`,
                image: 'https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&q=80&w=400'
              }
            ]
          }
        ],
        lessonExam: [
          { id: 'l5q1', type: 'multiple', question: '¿Cuál aceite es mejor para la relajación?', options: ['Menta', 'Lavanda', 'Limón', 'Canela'], correctAnswer: 1 },
          { id: 'l5q2', type: 'multiple', question: '¿Qué es un aceite vehicular?', options: ['Para autos', 'Aceite base (almendras, coco) donde se diluye la esencia', 'Gasolina', 'Aceite sucio'], correctAnswer: 1 },
          { id: 'l5q3', type: 'multiple', question: '¿Para qué sirve el eucalipto?', options: ['Para comer', 'Efecto refrescante y descongestivo', 'Para dormir profundamente', 'Para pintar'], correctAnswer: 1 },
          { id: 'l5q4', type: 'multiple', question: '¿Qué es la musicoterapia en spa?', options: ['Cantar karaoke', 'Uso de sonidos armónicos para inducir estados de calma', 'Poner radio rock', 'No se usa'], correctAnswer: 1 },
          { id: 'l5q5', type: 'multiple', question: 'Frecuencia de las ondas para relajación:', options: ['Altas y rápidas', 'Bajas y lentas (Alfa/Theta)', 'No importa', 'Ruido blanco'], correctAnswer: 1 },
          { id: 'l5q6', type: 'multiple', question: '¿Para qué sirve el difusor?', options: ['Para mojar la cara', 'Esparcir partículas de aceite esencial en el ambiente', 'Para dar luz', 'Para secar'], correctAnswer: 1 },
          { id: 'l5q7', type: 'multiple', question: 'Beneficio de la cromoterapia (Luces):', options: ['Gastar luz', 'Influir en el estado de ánimo mediante colores específicos', 'Para que no se vea nada', 'Ninguno'], correctAnswer: 1 },
          { id: 'l5q8', type: 'multiple', question: '¿Qué es un retiro de bienestar?', options: ['Una oficina', 'Experiencia integral de spa, masaje y meditación', 'Un hospital', 'Un mercado'], correctAnswer: 1 },
          { id: 'l5q9', type: 'multiple', question: 'Importancia del silencio durante el masaje:', options: ['Para no hablar', 'Permitir que el cliente se desconecte de ruidos externos', 'No es importante', 'Para que el cliente se asuste'], correctAnswer: 1 },
          { id: 'l5q10', type: 'multiple', question: '¿Qué es la atención plena (Mindfulness)?', options: ['Estar distraído', 'Estar presente y consciente durante la terapia', 'Dormir', 'Pensar en problemas'], correctAnswer: 1 }
        ]
      }
    ],
    finalExam: [
      { id: 'mas-f1', type: 'multiple', question: '¿Qué es el masaje de tejido profundo?', options: ['Un masaje muy rápido', 'Técnica enfocada en capas profundas del músculo y fascia', 'Uso de agua caliente', 'Masaje de pies'], correctAnswer: 1 },
      { id: 'mas-f2', type: 'multiple', question: '¿Qué son los "Puntos Gatillo"?', options: ['Zonas con cosquillas', 'Nódulos hipersensibles en el músculo', 'Huesos salientes', 'Cicatrices'], correctAnswer: 1 },
      { id: 'mas-f3', type: 'multiple', question: '¿Para qué sirve el drenaje linfático?', options: ['Musculación', 'Eliminar toxinas y reducir retención de líquidos', 'Curar resfrío', 'Dar energía'], correctAnswer: 1 },
      { id: 'mas-f4', type: 'multiple', question: '¿Cuál es la función del masaje deportivo?', options: ['Solo para profesionales', 'Preparar y recuperar el tejido para la actividad física', 'Dormir', 'Bajar de peso'], correctAnswer: 1 },
      { id: 'mas-f5', type: 'multiple', question: '¿Qué es la reflexología?', options: ['Mirarse al espejo', 'Masaje en puntos específicos de pies/manos con reflejo en órganos', 'Masaje de espalda', 'Un tipo de gimnasia'], correctAnswer: 1 },
      { id: 'mas-f6', type: 'multiple', question: '¿Para qué sirven las piedras calientes?', options: ['De adorno', 'Termoterapia para relajar tensiones profundas', 'Para exfoliar', 'Para dar masajes fuertes'], correctAnswer: 1 },
      { id: 'mas-f7', type: 'multiple', question: '¿Qué es la Fascia?', options: ['Una cara', 'Tejido conectivo que envuelve músculos y órganos', 'Un hueso', 'Un nervio'], correctAnswer: 1 },
      { id: 'mas-f8', type: 'multiple', question: '¿Cómo debe ser la presión?', options: ['Igual para todos', 'Adaptada al umbral de dolor y necesidad del cliente', 'Siempre muy fuerte', 'Siempre muy suave'], correctAnswer: 1 },
      { id: 'mas-f9', type: 'multiple', question: '¿Para qué sirve el estiramiento pasivo?', options: ['Para cansar', 'Mejorar el rango de movimiento tras el masaje', 'Hacer fuerza', 'Gritar'], correctAnswer: 1 },
      { id: 'mas-f10', type: 'multiple', question: 'Importancia de la hidratación tras masaje:', options: ['Para tener sed', 'Ayudar al cuerpo a eliminar los desechos liberados', 'Para no sudar', 'No es importante'], correctAnswer: 1 }
    ]
  }
];
