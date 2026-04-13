# Ejercicio de análisis y activación con HoverOne X

## Introducción

En esta práctica vas a trabajar sobre el lanzamiento de `HoverOne X`, un hoverboard de estética retrofuturista presentado como una edición limitada. El sitio no está orientado a la venta directa, sino a despertar interés, empujar al usuario a conocer mejor el producto y recoger registros en una lista de espera.

El objetivo del ejercicio consiste en traducir ese caso de negocio a una estructura de medición básica con Google Tag Manager (GTM) y Google Analytics 4 (GA4). Para ello, tendrás que revisar el sitio, identificar qué señales ya envía al `dataLayer`, configurar la recogida en GTM y comprobar después en GA4 si los datos llegan como esperabas.

## Qué vas a practicar

Al completar esta actividad deberías ser capaz de:

- insertar correctamente GTM en un sitio estático;
- conectar GTM con una propiedad de GA4;
- crear variables de capa de datos;
- configurar activadores de tipo `Custom Event`;
- crear etiquetas de evento de GA4 en GTM;
- validar la implementación en `Preview` y en `DebugView`;
- e interpretar qué indican los eventos sobre el comportamiento del usuario.

## Estructura del ejercicio

El directorio incluye estos archivos:

- `index.html`: landing principal del producto;
- `specs.html`: página de especificaciones;
- `waitlist.html`: formulario para solicitar acceso prioritario;
- `assets/styles.css`: estilos del sitio;
- `assets/site.js`: lógica de eventos enviada al `dataLayer`;
- `assets/hoverone-hero.webp`: imagen principal de portada;
- `assets/hoverone-specs.webp`: imagen principal de especificaciones.

En las páginas HTML encontrarás comentarios que indican dónde debes pegar:

- el bloque principal de GTM dentro del `<head>`;
- el bloque `noscript` de GTM justo después de abrir el `<body>`;
- y, si quisieras usar GA4 sin GTM, el lugar reservado para la etiqueta base.

## Paso 1. Recorre el sitio y entiende el caso

Antes de configurar nada, abre la web y navega por las tres páginas para entender el recorrido propuesto:

1. la portada presenta el producto y contiene varias llamadas a la acción;
2. la página de `specs` amplía la información técnica y mantiene el interés;
3. la página de `waitlist` recoge los datos del usuario.

La lógica del caso es sencilla: no todas las visitas tienen el mismo valor. El objetivo es distinguir entre curiosidad inicial, interés por el producto y señal más próxima a conversión.

## Paso 2. Crea GA4 y GTM

Antes de tocar el código, crea:

1. una propiedad de Google Analytics 4;
2. un flujo web asociado;
3. un contenedor de Google Tag Manager.

Guarda estos dos identificadores:

- `G-XXXXXXXXXX`
- `GTM-XXXXXXX`

Los necesitarás en los pasos siguientes.

## Paso 3. Inserta GTM en el sitio

Edita estas páginas:

- `index.html`
- `specs.html`
- `waitlist.html`

Y pega en cada una:

1. el bloque principal de GTM dentro del `<head>`;
2. el bloque `noscript` de GTM justo después de abrir el `<body>`.

El sitio ya te indica el lugar exacto con comentarios en el HTML.

## Paso 4. Identifica qué envía ya el dataLayer

El archivo `assets/site.js` ya empuja eventos al `dataLayer`. Eso significa que no necesitas programar la lógica básica de analítica: tu tarea consiste en recoger bien esas señales en GTM.

Los eventos disponibles son:

- `view_specs`
- `view_waitlist`
- `cta_click`
- `form_start`
- `select_waitlist_interest`
- `form_submit`

Los parámetros disponibles son:

- `cta_name`
- `cta_location`
- `form_type`
- `selected_interest`
- `page_path`

Conviene tener en cuenta un matiz importante: la home no envía un evento personalizado de vista de página. La portada seguirá apareciendo en GA4 gracias a la etiqueta base, pero los eventos custom empiezan a generarse en otros momentos del recorrido, como un clic en CTA, la visita a `specs`, la visita a `waitlist` o la interacción con el formulario.

## Paso 5. Crea la etiqueta base de GA4 en GTM

Dentro de GTM:

1. crea una nueva etiqueta;
2. selecciona `Google tag` o `Google Analytics: configuración de GA4`, según la interfaz;
3. introduce el identificador `G-XXXXXXXXXX`;
4. usa el activador `All Pages`;
5. guarda la etiqueta.

Esta será la base sobre la que después crearás las etiquetas de evento.

## Paso 6. Crea las variables de capa de datos

Ahora crea en GTM variables de tipo `Data Layer Variable` para recoger los parámetros que ya envía `site.js`.

Las variables recomendadas son:

- `cta_name`
- `cta_location`
- `form_type`
- `selected_interest`
- `page_path`

Cada variable debe apuntar exactamente a la clave correspondiente dentro del `dataLayer`.

Su función es la siguiente:

- `cta_name`: identifica qué botón o llamada a la acción se ha pulsado;
- `cta_location`: indica desde qué parte de la página se produjo ese clic;
- `form_type`: identifica el formulario implicado;
- `selected_interest`: recoge la opción elegida por el usuario en el selector de interés;
- `page_path`: indica la ruta de la página donde ocurre la interacción.

## Paso 7. Crea los activadores de tipo Custom Event

Una vez creadas las variables, configura un activador `Custom Event` para cada evento que aparece en el `dataLayer`.

Debes crear estos activadores:

- `view_specs`
- `view_waitlist`
- `cta_click`
- `form_start`
- `select_waitlist_interest`
- `form_submit`

El nombre del activador debe coincidir exactamente con el valor enviado en la clave `event`.

## Paso 8. Crea las etiquetas de evento de GA4 en GTM

El siguiente paso consiste en crear en GTM las etiquetas de evento que enviarán la información a Google Analytics 4.

Para cada etiqueta:

1. crea una nueva etiqueta;
2. elige `Google Analytics: evento de GA4` o la opción equivalente;
3. selecciona la etiqueta base de configuración de GA4;
4. escribe el nombre exacto del evento;
5. añade los parámetros que correspondan;
6. asigna el activador `Custom Event` adecuado;
7. guarda la etiqueta.

La tabla siguiente resume una propuesta clara de configuración:

| Nombre de la etiqueta en GTM | Nombre del evento en GA4 | Activador (`Custom Event`) | Parámetros recomendados |
| --- | --- | --- | --- |
| `view_specs` | `view_specs` | `view_specs` | `page_path` → `{{page_path}}` |
| `view_waitlist` | `view_waitlist` | `view_waitlist` | `page_path` → `{{page_path}}` |
| `cta_click` | `cta_click` | `cta_click` | `cta_name` → `{{cta_name}}`<br>`cta_location` → `{{cta_location}}`<br>`page_path` → `{{page_path}}` |
| `form_start` | `form_start` | `form_start` | `form_type` → `{{form_type}}`<br>`page_path` → `{{page_path}}` |
| `select_waitlist_interest` | `select_waitlist_interest` | `select_waitlist_interest` | `selected_interest` → `{{selected_interest}}`<br>`form_type` → `{{form_type}}`<br>`page_path` → `{{page_path}}` |
| `form_submit` | `form_submit` | `form_submit` | `form_type` → `{{form_type}}`<br>`page_path` → `{{page_path}}` |

En esta práctica, usar el mismo nombre para etiqueta, evento y activador ayuda a reducir errores y hace la configuración más fácil de seguir.

## Paso 9. Valida la implementación en Preview

Antes de publicar nada, entra en el modo `Preview` de GTM y recorre el sitio.

Haz esta navegación de prueba:

1. entra en `index.html`;
2. haz clic en una llamada a la acción;
3. visita `specs.html`;
4. navega a `waitlist.html`;
5. empieza a rellenar el formulario;
6. cambia el selector de interés;
7. envía el formulario.

Durante ese recorrido deberías poder observar, al menos, estos eventos:

1. `cta_click`
2. `view_specs` o `view_waitlist`
3. `form_start`
4. `select_waitlist_interest`
5. `form_submit`

## Paso 10. Comprueba los datos en GA4

Una vez verificada la lógica en GTM:

1. abre `DebugView` en GA4;
2. comprueba que los eventos llegan;
3. revisa si los parámetros se reciben correctamente;
4. repite la prueba si detectas ausencias o incoherencias.

En este punto deberías comprobar no solo que el evento existe, sino también que llega enriquecido con el contexto adecuado.

## Paso 11. Marca la conversión principal

La conversión más lógica para este ejercicio es:

- `form_submit`

La razón es que representa la señal más clara de intención por parte del usuario: dejar sus datos para acceder antes al lanzamiento.

## Paso 12. Interpreta el recorrido

Una vez recogidos los datos, formula preguntas como estas:

- ¿qué llamadas a la acción reciben más clics?;
- ¿qué CTA empuja mejor hacia la lista de espera?;
- ¿cuántos usuarios llegan realmente a `waitlist.html`?;
- ¿cuántos comienzan el formulario?;
- ¿cuántos modifican el campo de interés?;
- ¿cuántos terminan enviando el formulario?;
- ¿en qué parte del recorrido parece concentrarse la mayor pérdida?

La finalidad de la práctica no es solo comprobar si la implementación funciona, sino utilizar esa implementación para responder preguntas razonables de negocio.

## Paso 13. Propón un embudo sencillo

Como cierre del ejercicio, puedes construir un embudo con etapas como estas:

1. `cta_click`
2. `view_specs` o `view_waitlist`
3. `form_start`
4. `select_waitlist_interest`
5. `form_submit`

Este embudo te ayudará a distinguir entre descubrimiento, interés y señal final de intención.

## Entrega sugerida

La práctica puede entregarse en un documento breve que incluya:

- una captura del contenedor de GTM con las etiquetas y activadores creados;
- una captura de `Preview` o `DebugView`;
- una tabla breve con los eventos configurados;
- y una interpretación final de lo que indican esos datos sobre el comportamiento del usuario.
