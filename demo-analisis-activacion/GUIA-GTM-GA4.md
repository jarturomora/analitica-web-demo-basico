# Guía para configurar GTM y GA4 en la demo

## Introducción

Una vez que el sitio web está disponible y los eventos básicos ya se envían al `dataLayer`, el siguiente paso consiste en conectar esa estructura con Google Tag Manager (GTM) y Google Analytics 4 (GA4). En este punto, la tarea ya no es diseñar la web, sino convertirla en un entorno de medición útil, ordenado y coherente con las preguntas de negocio que queremos formular.

Dicho de otro modo, el objetivo de esta guía no es únicamente “hacer que GA4 recoja datos”, sino construir una base que permita interpretar cómo se comportan los usuarios dentro de la web de la pastelería y qué señales resultan más valiosas desde el punto de vista del negocio.

Esta guía debe leerse como complemento del `README.md` de la demo, donde se presenta el caso de negocio, el propósito general de la práctica y la lógica del recorrido que después será observado mediante la medición.

## Paso 1. Crear la propiedad de GA4

El primer paso consiste en crear una propiedad de Google Analytics 4. Para ello, debes:

1. acceder a Google Analytics;
2. crear una nueva propiedad de GA4;
3. crear un flujo de datos web;
4. guardar el identificador de medición, con formato `G-XXXXXXXXXX`.

Este identificador será necesario después para enlazar la medición con GTM.

## Paso 2. Crear el contenedor de GTM

El segundo paso consiste en crear un contenedor de Google Tag Manager para la web. Para ello:

1. accede a Google Tag Manager;
2. crea un nuevo contenedor;
3. guarda el identificador del contenedor, con formato `GTM-XXXXXXX`.

Este contenedor será el espacio desde el que organizarás etiquetas, activadores y variables.

## Paso 3. Insertar GTM en el sitio

Una vez creado el contenedor, debes insertar el código de Google Tag Manager en todas las páginas del sitio.

La inserción debe realizarse así:

- el bloque principal de GTM dentro del `<head>`;
- el bloque `noscript` al inicio del `<body>`.

En esta demo conviene añadirlo en:

- `index.html`
- `catalogo.html`
- `quienes-somos.html`
- `contacto.html`
- todas las páginas dentro de `productos/`

En este punto, lo importante es entender que una medición coherente requiere consistencia. Si una parte del sitio no incorpora correctamente el contenedor, el análisis posterior quedará incompleto.

## Paso 4. Comprender qué señales ya genera el sitio

La demo ya incorpora una lógica básica de eventos desde `assets/site.js`. Esto significa que el trabajo de implementación no parte desde cero: la web ya produce señales observables en el `dataLayer`, y el reto consiste en recogerlas, organizarlas y enviarlas correctamente a GA4.

Los eventos disponibles son:

- `view_catalog`
- `about_view`
- `view_contact`
- `view_product`
- `product_interest`
- `form_start`
- `form_submit`

Además, algunos de estos eventos se acompañan de parámetros como:

- `product_name`
- `form_type`
- `placement`
- `page_path`

Estos parámetros aportan contexto y ayudan a construir una lectura analítica más rica.

## Paso 5. Configurar la etiqueta base de GA4 en GTM

Dentro de GTM, el siguiente paso consiste en crear la etiqueta base que cargará Google Analytics 4 en todo el sitio.

Para ello:

1. crea una nueva etiqueta;
2. selecciona `Google Analytics: configuración de GA4` o `Google tag`, según la interfaz disponible;
3. introduce el identificador de medición `G-XXXXXXXXXX`;
4. utiliza como activador `All Pages`;
5. guarda la etiqueta.

Con esta configuración, todas las páginas del sitio quedarán conectadas a la propiedad de GA4.

## Paso 6. Crear variables de capa de datos

Para recoger los parámetros que acompañan a los eventos, conviene crear variables de tipo `Data Layer Variable` en GTM.

Las variables recomendadas son:

- `DLV - product_name`
- `DLV - form_type`
- `DLV - placement`
- `DLV - page_path`

Cada una debe apuntar exactamente a la clave correspondiente dentro del `dataLayer`.

Este paso es importante porque permite que la medición no se limite al nombre del evento, sino que incorpore información adicional útil para interpretar mejor el comportamiento.

## Paso 7. Crear activadores de tipo `Custom Event`

Una vez definidas las variables, el siguiente paso consiste en crear activadores de evento personalizado para cada señal que queramos enviar a GA4.

Debes crear un activador `Custom Event` para:

- `view_catalog`
- `about_view`
- `view_contact`
- `view_product`
- `product_interest`
- `form_start`
- `form_submit`

El nombre del activador debe coincidir exactamente con el nombre enviado en el `dataLayer`.

## Paso 8. Crear las etiquetas de evento en GA4

Cuando los activadores ya están disponibles, se pueden crear las etiquetas de evento de GA4 correspondientes.

Se recomienda configurar al menos estas etiquetas:

- `view_catalog`
- `about_view`
- `view_contact`
- `view_product`
- `product_interest`
- `form_start`
- `form_submit`

Además, conviene asociar los parámetros cuando tenga sentido:

- `page_path` → `{{DLV - page_path}}`
- `product_name` → `{{DLV - product_name}}`
- `placement` → `{{DLV - placement}}`
- `form_type` → `{{DLV - form_type}}`

Por ejemplo:

- en `view_product`, tiene sentido enviar `product_name` y `page_path`;
- en `product_interest`, resulta útil enviar `product_name`, `placement` y `page_path`;
- en `form_start` y `form_submit`, conviene enviar `form_type` y `page_path`.

## Paso 9. Validar la implementación en modo Preview

Antes de publicar el contenedor, es necesario comprobar si la lógica de medición realmente funciona como esperamos.

Para ello:

1. entra en modo `Preview` dentro de GTM;
2. abre la web;
3. navega por varias páginas;
4. verifica que los eventos se disparan correctamente.

Un recorrido útil para esta validación es:

1. entrar en `index.html`;
2. ir a `catalogo.html`;
3. hacer clic en un producto;
4. abrir una ficha;
5. acceder a `contacto.html`;
6. comenzar a rellenar el formulario;
7. enviar el formulario.

Este flujo permite observar varias señales relevantes dentro de una misma sesión.

## Paso 10. Comprobar la llegada de datos en GA4

Una vez validada la implementación en GTM, el siguiente paso consiste en revisar si los eventos llegan correctamente a Google Analytics 4.

Para ello:

1. abre `DebugView` en GA4;
2. comprueba que los eventos aparecen;
3. verifica que los parámetros se reciben como esperabas;
4. repite la validación si observas ausencias o incoherencias.

En una sesión de prueba, el orden habitual de algunos eventos puede ser este:

1. `view_catalog`
2. `product_interest`
3. `view_product`
4. `view_contact`
5. `form_start`
6. `form_submit`

## Paso 11. Marcar la conversión principal

En esta demo, la señal más adecuada para marcar como conversión es:

- `form_submit`

La razón es sencilla: representa la acción que más claramente se aproxima a una oportunidad real de negocio.

Para configurarlo:

1. accede a la administración de GA4;
2. busca el apartado de eventos o conversiones;
3. marca `form_submit` como conversión.

## Paso 12. Qué puede analizarse después

Una vez configurada la medición, la demo ya puede utilizarse para trabajar:

- informes básicos de eventos;
- rutas de navegación;
- embudos de conversión;
- comparación entre páginas;
- interés por producto;
- y relación entre interacción y contacto.

En este punto, la medición deja de ser solo una cuestión técnica y empieza a convertirse en una herramienta para interpretar comportamiento.

## Paso 13. Propuesta de lectura analítica

Al revisar los datos, conviene formular preguntas como estas:

- ¿Cuántos usuarios pasan del catálogo a una ficha?
- ¿Qué productos despiertan más interés?
- ¿Cuántos usuarios llegan a contacto después de ver productos?
- ¿Cuántos comienzan el formulario, pero no lo envían?
- ¿Qué parte del recorrido parece concentrar mayor fricción?

Estas preguntas ayudan a desplazar el foco desde la simple observación de métricas hacia una lectura orientada a decisiones.

## Paso 14. Recomendación metodológica para clase

Si esta guía se utiliza en el aula, resulta especialmente útil dividir la práctica en dos momentos:

- primero, una parte técnica orientada a insertar GTM, crear variables, activadores y etiquetas;
- después, una parte analítica orientada a interpretar qué indican los datos.

Este enfoque ayuda a que el estudiante entienda que la implementación no es un fin en sí misma, sino una condición necesaria para poder analizar con criterio.

## Cierre

Cuando dispongas de los identificadores reales:

- `GTM-XXXXXXX`
- `G-XXXXXXXXXX`

podrás integrar por completo la medición en la demo y utilizar el sitio como un ejemplo práctico de cómo una web sencilla puede convertirse en un entorno válido para estudiar comportamiento, embudos y oportunidades de optimización.
