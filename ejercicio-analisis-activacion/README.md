# Ejercicio de análisis y activación

## Contexto

En este ejercicio trabajaremos con una landing page promocional dedicada al lanzamiento de un nuevo hoverboard inspirado en el imaginario clásico de la ciencia ficción. El sitio incluye una portada, una página de especificaciones y un formulario para unirse a la lista de espera.

La práctica está pensada para que el estudiante configure la medición con Google Tag Manager (GTM) y Google Analytics 4 (GA4), observe el comportamiento de los usuarios y sea capaz de interpretar el recorrido digital desde una perspectiva de negocio.

## Objetivo del ejercicio

El objetivo principal es transformar una navegación sencilla en una oportunidad de análisis. Para ello, el estudiante deberá:

- insertar correctamente GTM en el sitio,
- configurar GA4 a través de GTM,
- validar los eventos enviados al `dataLayer`,
- identificar el recorrido del usuario,
- y plantear una lectura analítica del comportamiento observado.

## Estructura del sitio

El ejercicio incluye los siguientes archivos:

- `index.html`: landing principal del producto.
- `specs.html`: página de especificaciones del hoverboard.
- `waitlist.html`: formulario para solicitar acceso a la lista de espera.
- `assets/styles.css`: estilos del sitio.
- `assets/site.js`: lógica de eventos enviada al `dataLayer`.
- `assets/hoverone-hero.webp`: imagen principal de la landing.
- `assets/hoverone-specs.webp`: imagen principal de la página de especificaciones.

## Preparación técnica

El alumno debe localizar en cada página los comentarios que indican dónde insertar:

- el bloque principal de GTM dentro del `<head>`,
- el bloque `noscript` de GTM justo después de abrir `<body>`,
- y, si fuera necesario, la etiqueta base de GA4.

## Tarea técnica

El estudiante debe realizar los siguientes pasos:

1. Crear un contenedor de GTM.
2. Insertar el código de GTM en las tres páginas del sitio.
3. Crear una propiedad de GA4.
4. Configurar la etiqueta base de GA4 desde GTM.
5. Crear variables de capa de datos para los parámetros enviados.
6. Crear activadores de tipo `Custom Event`.
7. Crear etiquetas de evento de GA4 para los eventos del ejercicio.
8. Validar la implementación en modo Preview y en DebugView.

## Eventos disponibles

El sitio ya envía al `dataLayer` los siguientes eventos:

- `view_specs`
- `view_waitlist`
- `cta_click`
- `form_start`
- `select_waitlist_interest`
- `form_submit`

Parámetros que pueden recibirse:

- `cta_name`
- `cta_location`
- `form_type`
- `selected_interest`
- `page_path`

## Recorrido sugerido para validar la medición

Para comprobar que la implementación funciona correctamente, se recomienda realizar esta navegación:

1. Entrar en la página principal.
2. Hacer clic en el botón de ver especificaciones.
3. Navegar desde la página de especificaciones hacia la lista de espera.
4. Comenzar a rellenar el formulario.
5. Cambiar el campo de interés.
6. Enviar el formulario.

## Preguntas de análisis

Una vez configurada la medición, el estudiante debe intentar responder preguntas como estas:

- ¿Cuántos usuarios hacen clic en los CTA principales?
- ¿Qué CTA parece empujar mejor al usuario hacia la lista de espera?
- ¿Cuántos usuarios llegan a `waitlist.html`?
- ¿Cuántos usuarios comienzan el formulario?
- ¿Cuántos usuarios cambian el campo de interés?
- ¿Cuántos usuarios terminan enviando el formulario?
- ¿Dónde parece producirse la mayor pérdida dentro del recorrido?

## Propuesta de embudo

Una forma sencilla de estructurar el análisis es construir un embudo con estas etapas:

1. `cta_click`
2. `view_specs` o `view_waitlist`
3. `form_start`
4. `select_waitlist_interest`
5. `form_submit`

## Entrega sugerida

El estudiante puede entregar:

- una captura de la configuración en GTM,
- una captura de la validación en Preview o DebugView,
- una breve explicación de los eventos configurados,
- y una interpretación final de lo que indican los datos.

## Idea clave del ejercicio

La finalidad de esta práctica no es solo comprobar si los eventos funcionan, sino aprender a conectar la medición con preguntas reales de negocio. En este caso, el foco está en entender cómo una landing promocional puede conducir al usuario desde el descubrimiento del producto hasta la intención de compra.
