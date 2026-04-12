# Guía práctica para configurar GTM y GA4

Esta guía explica qué debes hacer ahora para conectar esta demo con Google Tag Manager (GTM) y Google Analytics 4 (GA4), validar la medición y dejar preparada una práctica útil para clase.

## 1. Crear la propiedad de GA4

En Google Analytics:

1. Crea una nueva propiedad de GA4.
2. Crea un flujo de datos web.
3. Guarda el identificador de medición, con formato `G-XXXXXXXXXX`.

Este identificador se utilizará después dentro de GTM.

## 2. Crear el contenedor de GTM

En Google Tag Manager:

1. Crea un nuevo contenedor para la web.
2. Guarda el identificador del contenedor, con formato `GTM-XXXXXXX`.

## 3. Insertar GTM en el sitio

Una vez creado el contenedor, debes insertar el código de GTM en todas las páginas de la demo:

- el bloque principal de GTM dentro del `<head>`,
- y el bloque `noscript` al inicio del `<body>`.

La recomendación es añadirlo en:

- `index.html`
- `catalogo.html`
- `quienes-somos.html`
- `contacto.html`
- todas las páginas dentro de `productos/`

## 4. Verificar que el `dataLayer` ya está preparado

El sitio ya envía eventos al `dataLayer` desde `assets/site.js`.

Eventos implementados:

- `view_catalog`
- `about_view`
- `view_contact`
- `view_product`
- `product_interest`
- `form_start`
- `form_submit`

Parámetros disponibles según el caso:

- `product_name`
- `form_type`
- `placement`
- `page_path`

## 5. Configurar la etiqueta base de GA4 en GTM

Dentro de GTM:

1. Crea una nueva etiqueta.
2. Elige tipo `Google Analytics: configuración de GA4` o `Google tag`, según la interfaz disponible.
3. Introduce el identificador de medición `G-XXXXXXXXXX`.
4. Usa como activador `All Pages`.
5. Guarda la etiqueta.

Con esto GA4 quedará cargado en todas las páginas del sitio.

## 6. Crear variables de capa de datos en GTM

Para aprovechar mejor los parámetros, crea estas variables de tipo `Data Layer Variable`:

- `DLV - product_name`
- `DLV - form_type`
- `DLV - placement`
- `DLV - page_path`

Cada variable debe leer exactamente la clave correspondiente:

- `product_name`
- `form_type`
- `placement`
- `page_path`

## 7. Crear activadores de evento personalizado

En GTM, crea un activador `Custom Event` para cada uno de estos nombres:

- `view_catalog`
- `about_view`
- `view_contact`
- `view_product`
- `product_interest`
- `form_start`
- `form_submit`

El nombre del evento en GTM debe coincidir exactamente con el valor enviado en el `dataLayer`.

## 8. Crear las etiquetas de evento de GA4

Ahora crea una etiqueta de evento de GA4 para cada evento.

### Eventos recomendados

- `view_catalog`
- `about_view`
- `view_contact`
- `view_product`
- `product_interest`
- `form_start`
- `form_submit`

### Parámetros recomendados

Asocia estos parámetros cuando tenga sentido:

- `page_path` → `{{DLV - page_path}}`
- `product_name` → `{{DLV - product_name}}`
- `placement` → `{{DLV - placement}}`
- `form_type` → `{{DLV - form_type}}`

Por ejemplo:

- En `view_product`, envía `product_name` y `page_path`.
- En `product_interest`, envía `product_name`, `placement` y `page_path`.
- En `form_start` y `form_submit`, envía `form_type` y `page_path`.

## 9. Entrar en modo Preview en GTM

Antes de publicar:

1. Pulsa `Preview` en GTM.
2. Abre la web.
3. Recorre varias páginas del sitio.
4. Comprueba que se disparan los eventos correctos.

Recorrido recomendado para validar:

1. Entrar en `index.html`
2. Ir a `catalogo.html`
3. Hacer clic en un producto
4. Abrir una ficha de producto
5. Ir a `contacto.html`
6. Hacer foco en un campo del formulario
7. Enviar el formulario

## 10. Comprobar los resultados en GA4

En Google Analytics:

1. Abre `DebugView`.
2. Comprueba que llegan los eventos.
3. Verifica que aparecen los parámetros.
4. Repite el recorrido si falta algo.

El orden esperado de algunos eventos puede ser:

1. `view_catalog`
2. `product_interest`
3. `view_product`
4. `view_contact`
5. `form_start`
6. `form_submit`

## 11. Marcar una conversión en GA4

El evento más adecuado para marcar como conversión es:

- `form_submit`

Para ello:

1. Ve a la administración de GA4.
2. Busca el apartado de eventos o conversiones.
3. Marca `form_submit` como conversión.

## 12. Qué puedes analizar después

Una vez configurado todo, ya puedes utilizar la demo para trabajar:

- informes de eventos,
- rutas de navegación,
- embudos de conversión,
- comparación entre páginas,
- interés por producto,
- y relación entre interacción y contacto.

## 13. Propuesta de lectura analítica

Al revisar los datos, algunas preguntas útiles son:

- ¿Cuántos usuarios pasan del catálogo a una ficha?
- ¿Qué productos reciben más interés?
- ¿Cuántos usuarios llegan a contacto después de ver producto?
- ¿Cuántos empiezan el formulario, pero no lo envían?
- ¿Qué parte del recorrido parece generar más fricción?

## 14. Recomendación para clase

Si la guía se utiliza en el aula, conviene dividir la práctica en dos partes:

1. Una parte técnica:
   insertar GTM, crear etiquetas, activadores y variables.
2. Una parte analítica:
   interpretar los datos y relacionarlos con decisiones de negocio.

## 15. Siguiente paso recomendado

Cuando tengas los IDs reales:

- `GTM-XXXXXXX`
- `G-XXXXXXXXXX`

puedes integrarlos directamente en el código del sitio y dejar la demo completamente operativa.
