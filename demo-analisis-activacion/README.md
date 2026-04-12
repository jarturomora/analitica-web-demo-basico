# Demo de Análisis y Activación con GTM y GA4

## Introducción y propósito de la práctica

Esta demo reproduce el caso de una pequeña pastelería sin gluten que quiere utilizar su sitio web para dar a conocer sus productos, generar confianza en torno a su propuesta de valor y captar oportunidades de negocio a través de un formulario de contacto.

El objetivo de la práctica no consiste únicamente en observar visitas o páginas vistas, sino en utilizar la web como base para formular preguntas de negocio y responderlas mediante una lectura analítica apoyada en Google Tag Manager (GTM) y Google Analytics 4 (GA4).

En otras palabras, esta demo permite trabajar la idea central del tema: disponer de datos no es suficiente; lo verdaderamente valioso es interpretar el comportamiento del usuario para detectar oportunidades de mejora, optimización y activación.

Como complemento a este documento, el archivo `GUIA-GTM-GA4.md` desarrolla con más detalle los pasos técnicos necesarios para conectar la demo con Google Tag Manager y Google Analytics 4.

## Objetivos de aprendizaje

Al trabajar con esta demo, se pretende que el estudiante sea capaz de:

- comprender cómo una web sencilla puede utilizarse como escenario de análisis de negocio,
- distinguir entre observación descriptiva e interpretación analítica,
- identificar un recorrido digital orientado a la generación de oportunidades,
- configurar eventos en GTM y GA4 a partir del `dataLayer`,
- analizar el comportamiento del usuario a través de embudos y rutas,
- y relacionar los hallazgos con decisiones concretas de mejora.

## Descripción del sitio

El sitio representa un pequeño obrador artesanal especializado en repostería sin gluten. La arquitectura del contenido está pensada para que el usuario pueda recorrer distintas etapas antes de contactar con el negocio.

La estructura principal es la siguiente:

- `index.html`: portada del sitio.
- `catalogo.html`: catálogo general de productos.
- `quienes-somos.html`: página de presentación del obrador.
- `contacto.html`: formulario de contacto.
- `productos/`: fichas de producto individuales.
- `assets/`: estilos, script del sitio e imágenes.

Este recorrido permite estudiar navegación, interés por producto, avance hacia contacto y envío del formulario.

## Preguntas de negocio que pueden trabajarse

La práctica puede orientarse a preguntas como estas:

- ¿Qué páginas reciben mayor atención por parte de los usuarios?
- ¿Qué productos despiertan más interés?
- ¿Qué parte del recorrido precede con mayor frecuencia al acceso a contacto?
- ¿Cuántos usuarios llegan al formulario y cuántos lo comienzan realmente?
- ¿Qué fricciones podrían estar impidiendo el envío final?

Estas preguntas ayudan a trasladar la práctica desde una lectura puramente métrica hacia un análisis con sentido de negocio.

## Eventos disponibles en la demo

El sitio ya incorpora envíos al `dataLayer` desde el archivo `assets/site.js`, por lo que se encuentra preparado para ser conectado con GTM.

Los eventos implementados son los siguientes:

- `view_catalog`: se dispara al entrar en el catálogo.
- `about_view`: se dispara al acceder a la página “Quiénes somos”.
- `view_contact`: se dispara al acceder a la página de contacto.
- `view_product`: se dispara al abrir una ficha de producto.
- `product_interest`: se dispara al hacer clic sobre enlaces que llevan a una ficha de producto.
- `form_start`: se dispara cuando el usuario interactúa por primera vez con el formulario.
- `form_submit`: se dispara al enviar el formulario.

Algunos eventos incluyen además parámetros como `product_name`, `form_type`, `placement` y `page_path`, lo que permite enriquecer posteriormente el análisis en GA4.

Conviene tener en cuenta un matiz importante: la portada no envía un evento personalizado propio desde `assets/site.js`. La página principal queda medida igualmente por la etiqueta base de GA4, pero los eventos personalizados empiezan a generarse cuando el usuario entra en páginas como catálogo, contacto, “Quiénes somos” o una ficha de producto.

## Propuesta de desarrollo de la práctica

Una secuencia sencilla para desarrollar la demo en clase puede ser esta:

1. Abrir la página principal y presentar el caso de negocio.
2. Navegar al catálogo y observar la oferta disponible.
3. Acceder a una o varias fichas de producto.
4. Visitar la página “Quiénes somos”.
5. Entrar en la página de contacto.
6. Comenzar a rellenar el formulario.
7. Enviar el formulario.

Este flujo permite construir después una lectura analítica del recorrido completo.

## Pasos recomendados en GTM

Para trabajar la demo con Google Tag Manager, se recomienda seguir este proceso:

1. Crear un contenedor de GTM.
2. Insertar el código del contenedor en todas las páginas del sitio.
3. Crear una etiqueta de configuración de GA4.
4. Crear variables de capa de datos para recoger `product_name`, `form_type`, `placement` y `page_path`.
5. Crear activadores de tipo `Custom Event` para cada evento del `dataLayer`.
6. Crear etiquetas de evento de GA4 asociadas a los siguientes eventos:
   - `view_catalog`
   - `about_view`
   - `view_contact`
   - `view_product`
   - `product_interest`
   - `form_start`
   - `form_submit`
7. Verificar los eventos en modo Preview.
8. Publicar el contenedor una vez validado.

## Pasos recomendados en GA4

Una vez recogidos los eventos en Google Analytics 4, la práctica puede continuar del siguiente modo:

1. Comprobar la llegada de eventos en DebugView.
2. Validar que los parámetros se reciben correctamente.
3. Marcar `form_submit` como conversión.
4. Revisar informes básicos para observar actividad general.
5. Utilizar exploraciones para profundizar en el comportamiento.

## Propuesta de embudo para la práctica

Un embudo sencillo y muy útil para explicar en clase puede ser el siguiente:

1. `view_catalog`
2. `view_product`
3. `view_contact`
4. `form_start`
5. `form_submit`

Este embudo permite detectar con claridad dónde se produce el mayor abandono y en qué etapa del proceso conviene centrar la interpretación.

## Propuesta de interpretación

Una vez recogidos los datos, el análisis puede orientarse hacia lecturas como estas:

- si muchos usuarios llegan al catálogo pero pocos visitan fichas, tal vez la presentación de productos no sea suficientemente atractiva;
- si las fichas reciben visitas, pero contacto apenas se consulta, quizá falten llamadas a la acción más claras;
- si muchos usuarios llegan a contacto, pero pocos activan `form_start`, puede existir una barrera inicial;
- si `form_start` es alto, pero `form_submit` es bajo, es razonable sospechar de una fricción en el formulario.

Este tipo de interpretación permite conectar directamente los datos con decisiones de mejora.

## Ideas para el cierre de clase

La práctica puede cerrarse recordando varias ideas clave:

- medir no equivale automáticamente a comprender;
- no todas las preguntas se responden con el mismo tipo de informe;
- un embudo ayuda a localizar fricción;
- una ruta ayuda a entender el comportamiento real;
- y el valor de la analítica aparece cuando los datos se traducen en decisiones con sentido de negocio.

## Sugerencia metodológica

Para sacar mayor partido a esta demo, conviene desarrollar la sesión en dos momentos:

- primero, recorrer la web como si fuéramos usuarios reales;
- después, revisar en GTM y GA4 qué señales deja ese comportamiento.

De este modo, el estudiante puede relacionar con facilidad la experiencia de navegación con la lógica de medición y con la interpretación analítica posterior.
