# Ejemplos Prácticos para Analítica Web

Este repositorio recoge demos y ejercicios sencillos para trabajar conceptos introductorios de analítica web. Cada subdirectorio contiene un ejemplo independiente, pensado para abrirse fácilmente en local y servir como base para prácticas, explicaciones en clase o actividades autónomas.

## Estructura del repositorio

### `demo-basica/`

Contiene una demo web estática orientada a introducir la medición con herramientas como Google Tag Manager (GTM) y Google Analytics 4 (GA4).

Archivos principales:

- `index.html`: página principal de la demo. Representa una landing de una pastelería sin gluten con un formulario de contacto. Incluye scripts de GTM y GA4, por lo que resulta útil para practicar la carga de etiquetas, la inspección del `dataLayer` y el seguimiento de interacciones básicas.
- `assets/`: carpeta que agrupa los recursos estáticos asociados a esta demo.

### `demo-analisis-activacion/`

Contiene una demo web más completa basada en la misma pastelería sin gluten, pensada para trabajar recorridos de navegación, interés por producto, formularios de contacto y una primera aproximación a embudos y activación.

Archivos principales:

- `index.html`: página principal del sitio.
- `catalogo.html`: catálogo con cinco productos.
- `quienes-somos.html`: página de presentación del obrador.
- `contacto.html`: página con formulario de contacto.
- `productos/`: fichas individuales de los cinco productos.
- `assets/`: estilos, script del sitio e imágenes de producto.
- `README.md`: guía docente y explicación del caso.
- `GUIA-GTM-GA4.md`: guía práctica para la implementación técnica con GTM y GA4.

### `ejercicio-analisis-activacion/`

Contiene un ejercicio autónomo para alumnado, basado en una landing promocional de un hoverboard retrofuturista. Está pensado para que el estudiante configure GTM y GA4 por su cuenta, valide eventos y plantee una lectura analítica básica del recorrido.

Archivos principales:

- `index.html`: landing principal del producto.
- `specs.html`: página de especificaciones.
- `waitlist.html`: formulario para unirse a la lista de espera.
- `assets/`: estilos, script del sitio e imágenes del ejercicio.
- `README.md`: enunciado y guía del ejercicio para alumnado.
