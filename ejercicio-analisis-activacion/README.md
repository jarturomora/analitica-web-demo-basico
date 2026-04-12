# Ejercicio de análisis del lanzamiento de HoverOne X

## Objetivos

A través de este ejercicio vas a poner en práctica los conceptos fundamentales del tema en un escenario próximo a una situación real de negocio. Trabajarás sobre una landing promocional diseñada para presentar un nuevo producto, profundizar en sus especificaciones y captar usuarios interesados mediante una lista de espera.

Con esta actividad se pretende que seas capaz de:

- interpretar cómo un objetivo comercial puede traducirse en una estructura básica de medición;
- diferenciar entre eventos informativos, eventos de interacción y señales más próximas a la conversión;
- revisar una implementación visible desde el navegador para comprobar si responde a una lógica razonable de analítica digital;
- y proponer una lectura inicial del comportamiento del usuario a partir de los datos recogidos.

## Contexto del caso

El escenario de negocio al que te enfrentas en esta práctica es el siguiente. Una marca ficticia quiere lanzar al mercado un nuevo hoverboard llamado `HoverOne X`, presentado como una pieza tecnológica de edición limitada con una estética claramente retrofuturista. La empresa no pretende vender el producto de forma inmediata desde la web, sino generar expectación, despertar interés y reunir usuarios potencialmente dispuestos a reservar acceso prioritario al lanzamiento.

Para ello, el sitio se organiza en tres momentos claramente diferenciados. En primer lugar, una página principal presenta el producto y su propuesta de valor. A continuación, una página de especificaciones permite profundizar en sus prestaciones y características. Por último, una página de lista de espera ofrece al usuario la posibilidad de dejar sus datos y manifestar su interés de manera más explícita.

La pregunta clave no es solo si la web recibe visitas, sino qué comportamientos reflejan un avance real hacia una oportunidad de negocio. No tiene el mismo valor visitar la portada que consultar las especificaciones, hacer clic en una llamada a la acción o comenzar a rellenar el formulario. La finalidad del ejercicio consiste precisamente en ordenar esa lectura y convertirla en una estructura básica de medición.

## Estructura del sitio

El ejercicio incluye los siguientes archivos:

- `index.html`: landing principal del producto;
- `specs.html`: página de especificaciones del hoverboard;
- `waitlist.html`: formulario para solicitar acceso a la lista de espera;
- `assets/styles.css`: estilos del sitio;
- `assets/site.js`: lógica de eventos enviada al `dataLayer`;
- `assets/hoverone-hero.webp`: imagen principal de la landing;
- `assets/hoverone-specs.webp`: imagen principal de la página de especificaciones.

## Preparación técnica

El sitio ya está preparado para que puedas integrar Google Tag Manager y Google Analytics 4. En cada una de las páginas encontrarás comentarios en el código que indican dónde debes insertar:

- el bloque principal de GTM dentro del `<head>`;
- el bloque `noscript` de GTM justo después de abrir el `<body>`;
- y, si fuera necesario, la etiqueta base de GA4.

Esto te permitirá centrar la práctica no tanto en construir el sitio desde cero, sino en revisar y completar una estructura de medición coherente con el caso planteado.

## Tarea técnica

Para desarrollar el ejercicio, se recomienda seguir este orden:

1. crear un contenedor de GTM;
2. insertar el código de GTM en las tres páginas del sitio;
3. crear una propiedad de GA4;
4. configurar la etiqueta base de GA4 desde GTM;
5. crear variables de capa de datos para los parámetros enviados;
6. crear activadores de tipo `Custom Event`;
7. crear etiquetas de evento de GA4 para los eventos disponibles en el ejercicio;
8. validar la implementación en modo Preview y en DebugView.

## Eventos disponibles

El archivo `assets/site.js` ya envía al `dataLayer` una serie de eventos que permiten observar distintos niveles de interés por parte del usuario. Los eventos implementados son los siguientes:

- `view_specs`
- `view_waitlist`
- `cta_click`
- `form_start`
- `select_waitlist_interest`
- `form_submit`

Además, la implementación envía algunos parámetros que enriquecen la lectura analítica:

- `cta_name`
- `cta_location`
- `form_type`
- `selected_interest`
- `page_path`

## Recorrido sugerido para validar la medición

Una vez integrada la capa técnica, conviene realizar una navegación sencilla pero intencionada para comprobar que la estructura de medición responde a lo esperado. El recorrido recomendado es este:

1. entrar en la página principal;
2. hacer clic en el botón de ver especificaciones;
3. navegar desde la página de especificaciones hacia la lista de espera;
4. comenzar a rellenar el formulario;
5. cambiar el campo de interés;
6. enviar el formulario.

Este flujo permite comprobar con claridad si los eventos aparecen en el orden esperado y si los parámetros aportan contexto útil para el análisis.

## Propuesta de lectura analítica

Una vez recogidos los datos, el siguiente paso consiste en interpretarlos con criterio. Algunas preguntas razonables para orientar esa lectura son las siguientes:

- ¿cuántos usuarios hacen clic en las llamadas a la acción principales?;
- ¿qué llamada a la acción parece empujar mejor al usuario hacia la lista de espera?;
- ¿cuántos usuarios llegan realmente a `waitlist.html`?;
- ¿cuántos comienzan el formulario?;
- ¿cuántos cambian el campo de interés?;
- ¿cuántos terminan enviando el formulario?;
- ¿en qué punto del recorrido parece producirse la mayor pérdida?

Estas preguntas ayudan a pasar de la mera observación de eventos a una interpretación orientada a negocio.

## Propuesta de embudo

Una forma sencilla de estructurar la práctica es construir un embudo con estas etapas:

1. `cta_click`
2. `view_specs` o `view_waitlist`
3. `form_start`
4. `select_waitlist_interest`
5. `form_submit`

Este embudo permite distinguir entre curiosidad inicial, interés más explícito y acción final.

## Entrega sugerida

La actividad puede entregarse en un documento breve en el que se recojan, al menos, los siguientes elementos:

- una captura de la configuración en GTM;
- una captura de la validación en Preview o DebugView;
- una breve explicación de los eventos configurados;
- y una interpretación final de lo que indican los datos.

## Idea clave del ejercicio

La finalidad de esta práctica no consiste únicamente en comprobar si los eventos funcionan, sino en aprender a relacionar la medición con preguntas reales de negocio. En este caso, el foco está en entender cómo una landing promocional puede conducir al usuario desde el descubrimiento del producto hasta una señal más valiosa de intención, como es el envío del formulario de acceso prioritario.
