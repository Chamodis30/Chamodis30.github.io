# Barbería Calle Mayor 12 · Web de ejemplo

Página web profesional para una barbería, creada como **proyecto de demostración** para mostrar mi forma de trabajar: diseño con identidad propia, código limpio y una web que funciona bien en cualquier dispositivo.

> **Aviso:** la barbería, los precios, el equipo, la dirección y el teléfono son ficticios. Todo se puede adaptar a un negocio real.

**Demo:** _añade aquí el enlace cuando la publiques_

---

## Qué incluye

- **Portada** con un poste de barbero animado en CSS puro, sin imágenes.
- **Servicios y precios** presentados como la carta de la barbería, con duración de cada servicio.
- **Equipo** de tres barberos con su especialidad.
- **Reserva de cita** con formulario que prepara el mensaje y lo envía por WhatsApp.
- **Horario** que resalta automáticamente el día de hoy.
- **Ubicación** con botones para llamar y abrir el mapa.

## Detalles de diseño y calidad

- **Identidad visual propia:** paleta rojo, azul y latón inspirada en las barberías clásicas, con tipografía condensada tipo cartel (Barlow Condensed y Barlow).
- **Modo oscuro automático** según la configuración del dispositivo.
- **Responsive:** se adapta a móvil, tableta y escritorio.
- **Accesible:** foco visible con teclado, etiquetas en todos los campos, mensajes anunciados a lectores de pantalla y respeto a la preferencia de movimiento reducido.
- **Sin dependencias:** HTML, CSS y JavaScript puros, sin frameworks ni librerías. La única petición externa es la fuente de Google Fonts.
- **Ligera y rápida:** todo el proyecto pesa pocos KB.

## Tecnologías

| Parte | Tecnología |
|---|---|
| Estructura | HTML5 semántico |
| Estilos | CSS3 (variables, grid, flexbox, animaciones) |
| Interacción | JavaScript (ES6) |
| Fuentes | Google Fonts |

## Estructura del proyecto

```
├── index.html   # Contenido y estructura de la página
├── style.css    # Estilos, tema claro/oscuro y adaptación a móvil
├── script.js    # Formulario de reserva y horario dinámico
└── README.md
```

## Cómo usarlo

1. Descarga o clona el proyecto.
2. Abre `index.html` en el navegador. No hace falta instalar nada ni usar servidor.

## Cómo personalizarlo

- **Nombre del negocio:** busca «Calle Mayor 12» en `index.html` (título, logo y pie de página).
- **WhatsApp:** cambia la variable `WHATSAPP` al inicio de `script.js` (prefijo del país + número, sin espacios).
- **Teléfono y mapa:** edita los enlaces `tel:` y `google.com/maps` en `index.html`.
- **Servicios, precios, equipo y horario:** están escritos directamente en `index.html`.
- **Colores:** cambia las variables al principio de `style.css` (`--red`, `--blue`, `--brass`, etc.).

## Limitaciones de esta demo

- El formulario **no guarda las reservas** en ningún servidor: solo genera el mensaje de WhatsApp. Para un negocio real se puede conectar a un sistema de citas o a un calendario.
- No incluye imágenes reales ni galería de trabajos. Se pueden añadir con las fotos del cliente.

## Posibles ampliaciones

- Sistema de reservas con calendario y horas ocupadas.
- Galería de cortes antes y después.
- Opiniones de clientes.
- Versión en varios idiomas.
- Optimización para buscadores (SEO local) y Google Business.

## ¿Quieres una web así para tu negocio?

Puedo adaptar este diseño a tu marca o crear uno desde cero.

- **Contacto:** _tu nombre_
- **Email:** _tu@email.com_
- **Web / portfolio:** _tu enlace_

---

© 2026 · Proyecto de ejemplo con fines demostrativos.
