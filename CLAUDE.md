# SKAPE FROM THE BRONX — Contexto del proyecto

## PALABRAS CLAVE (leer siempre)

| Palabra       | Qué hace Claude automáticamente |
|---------------|----------------------------------|
| `continuemos` | Lee este CLAUDE.md + `git log --oneline -5` y continúa el trabajo sin pedir contexto |
| `actualiza`   | **Paso 1:** Actualiza la sección Estado actual de este CLAUDE.md. **Paso 2:** Actualiza README.md (catálogo, pendientes, o cualquier sección que haya cambiado). **Paso 3:** `git push` (ambos MDs suben junto con el código). Siempre en ese orden. |

---

## Estado actual

**Última actualización:** 2026-06-22

**Qué se hizo en las últimas sesiones:**
- **Carrusel de productos**: se eliminó el grid con filtros y se reemplazó por un carrusel deslizable con flechas ← → , dots de navegación, swipe táctil en móvil y responsive (3 cards PC / 2 tablet / 1 móvil)
- **Solo 2 categorías reales**: `calzado` y `sombreros` — 6 productos en total con fotos reales
- **Fotos reales integradas**: subcarpetas `img/Calzados/` y `img/Sombreros/` — cada producto tiene su `img:` en PRODUCTS
- **Logo movido** a `img/Logo_Web/Logo-Skape.png` — actualizado en favicon, nav, hero, footer, OG tags y JSON-LD
- **Lightbox de imágenes**: clic en la foto de un producto abre vista a pantalla completa con zoom (+/- botones, rueda del mouse, clic para alternar 1×/2×), navegación entre productos (flechas, teclado, swipe), se cierra con X o Escape
- **Ícono lupa** aparece en hover sobre cada imagen del carrusel
- **Toast de notificación**: aparece 6 segundos cada vez que se agrega un producto al carrito (primera vez y re-agregados), con icono del producto + nombre + "Agregado al carrito"
- **Carrito mejorado**:
  - Botón papelera en cada ítem → pide confirmación vía modal antes de eliminar
  - Modal "Ya en carrito" cuando se intenta agregar un producto que ya existe
  - Modal "¿Eliminar del carrito?" cuando se presiona la papelera
  - Botón "Vaciar" en el encabezado del drawer (solo visible cuando hay ítems)
  - Animación shake en el ícono del carrito al agregar productos
- **WhatsApp real**: `584125385086` — botón flotante y footer preguntan disponibilidad; checkout del carrito manda pedido completo
- **Todos los links externos** (WhatsApp float, WhatsApp footer, Instagram, TikTok) abren en `target="_blank"`

**Qué falta por hacer:**
- Agregar links reales de Instagram y TikTok en el footer de `index.html` (actualmente `href="#"`)
- (Opcional) Dominio personalizado en Cloudflare Pages

**Próximo paso acordado:**
Agregar links reales de Instagram y TikTok cuando el cliente los tenga listos.

---

## Qué es este proyecto

Catálogo de e-commerce de streetwear y cultura del básquet, inspirado en el Bronx (NYC).
**Estructura multi-archivo** separada en `index.html` + `css/skape-from-the-bronx.css` + `js/skape-from-the-bronx.js`. Sin frameworks, sin build system, sin dependencias locales (solo Google Fonts externo). Abre `index.html` en el navegador directamente.

**Deploy:** Cloudflare Pages → `https://skapefromthebronx.pages.dev` (auto-deploy en cada `git push` a `main`)

## Git / GitHub / Cloudflare — workflow

- Repo: `git@github-jxenterprise:jxenterprise/skape-from-the-bronx.git`
- Rama activa: `main` (tanto local como en GitHub)
- SSH config: `github-jxenterprise` → cuenta jxenterprise / `github-jampier` → cuenta Jampier-Developer
- Flujo normal: editar → `git add` → `git commit` → `git push` → Cloudflare despliega automático
- **NUNCA** subir archivos manualmente por la web de GitHub (crearía ramas separadas y rompería el deploy)

## Arquitectura del proyecto

```
skape-from-the-bronx/
├── index.html                    — HTML (estructura, secciones, componentes)
├── css/
│   └── skape-from-the-bronx.css — Todo el CSS + variables CSS + breakpoints
├── js/
│   └── skape-from-the-bronx.js  — PRODUCTS array, carrito, lightbox, lógica
├── img/
│   ├── Logo_Web/
│   │   └── Logo-Skape.png        — Logo real (favicon + nav + hero + footer)
│   ├── Calzados/
│   │   ├── Calzado 1.png
│   │   ├── Calzado 2.png
│   │   └── Calzado 3.png
│   └── Sombreros/
│       ├── Sombrero 1.png
│       ├── Sombrero 2.png
│       └── Sombrero 3.png
├── .claude/
│   └── settings.json             — Hooks de palabras clave (continuemos / actualiza)
├── .gitignore
├── README.md
└── CLAUDE.md                     — Este archivo
```

**Secciones en index.html:**
- `<header class="nav">` — sticky, blur backdrop, menú móvil
- `<section class="hero">` — logo real con efecto specular de cursor (luz que sigue el mouse)
- `<section id="catalogo">` — carrusel de productos con flechas y dots
- `<section id="marca">` — pillares de la marca (4 bloques)
- `<footer id="contacto">` — links sociales, horario
- `.wa-float` — botón flotante WhatsApp (abre en nueva pestaña)
- `<aside id="cart">` — drawer carrito (slide desde la derecha)
- `#lbOverlay` — lightbox pantalla completa con zoom
- `#modalOverlay` — modal de confirmación (re-agregar / eliminar del carrito)
- `#toastWrap` — contenedor de notificaciones toast

## Paleta de colores (variables CSS)

| Variable        | Valor     | Uso                            |
|----------------|-----------|--------------------------------|
| `--asphalt`    | `#14110f` | Fondo base (casi negro cálido) |
| `--brick`      | `#1d1714` | Cards y paneles                |
| `--brick-2`    | `#262019` | Hover / elevación              |
| `--line`       | `#3a322b` | Bordes sutiles                 |
| `--chrome`     | `#dde1e5` | Texto principal                |
| `--chrome-dim` | `#8b9197` | Texto secundario               |
| `--copper`     | `#c47a45` | Acento cálido (CTA principal)  |
| `--copper-hi`  | `#e2a06a` | Acento cálido claro            |
| `--teal`       | `#28c2d4` | Acento frío (puente)           |
| `--ok`         | `#5ec27a` | Estado "añadido" en carrito    |

## Tipografías

- **Archivo** (900) → Headings grandes, nombre de marca, títulos cards
- **Oswald** (500–700) → Eyebrows, labels, botones, precios, nav links
- **Hanken Grotesk** (400–600) → Cuerpo de texto

## Secciones principales (IDs)

- `#catalogo` — sección del carrusel
- `#carouselTrack` — track deslizable del carrusel (cards inyectadas por JS)
- `#carouselDots` — dots de navegación del carrusel
- `#prevBtn` / `#nextBtn` — flechas del carrusel
- `#marca` — about the brand
- `#contacto` — footer / contacto
- `#cart` — drawer carrito (aside)
- `#lbOverlay` — lightbox pantalla completa
- `#modalOverlay` — modal confirmación (re-agregar / eliminar)
- `#toastWrap` — contenedor de toasts

## Configuración editable (en `js/skape-from-the-bronx.js`)

### Número de WhatsApp
```js
const WHATSAPP = "584125385086"; // Venezuela +58 0412-5385086
```
Formato: código de país + número, sin signos. Ej: Venezuela `584121234567`, Colombia `573001234567`.

### Catálogo de productos (array PRODUCTS)
```js
const PRODUCTS = [
  {
    id:     "slide-concourse",
    name:   "Concourse Slide",
    cat:    "calzado",        // "calzado" | "sombreros"
    price:  45,
    tag:    "Para después del juego",
    icon:   "slide",          // fallback SVG si no hay img
    accent: "#c47a45",
    img:    "img/Calzados/Calzado 1.png"  // ruta relativa a la foto real
  },
];
```

### Productos actuales (6 ítems)
| ID              | Nombre                  | Cat        | Precio | Imagen                        |
|-----------------|-------------------------|------------|--------|-------------------------------|
| slide-concourse | Concourse Slide         | calzado    | $45    | img/Calzados/Calzado 1.png    |
| low-grand       | Grand Court Low         | calzado    | $89    | img/Calzados/Calzado 2.png    |
| bridge-runner   | Bridge Runner           | calzado    | $95    | img/Calzados/Calzado 3.png    |
| cap-snap        | Skape Snapback          | sombreros  | $28    | img/Sombreros/Sombrero 1.png  |
| beanie-chrome   | Chrome Monogram Beanie  | sombreros  | $24    | img/Sombreros/Sombrero 2.png  |
| bucket-skape    | Skape Bucket Hat        | sombreros  | $30    | img/Sombreros/Sombrero 3.png  |

## Funciones JS clave (en `js/skape-from-the-bronx.js`)

| Función              | Qué hace                                                        |
|----------------------|-----------------------------------------------------------------|
| `renderCarousel()`   | Renderiza todas las cards en el carrusel                        |
| `moveCarousel()`     | Mueve el track y actualiza flechas/dots según carIdx            |
| `renderDots()`       | Genera los puntos de navegación del carrusel                    |
| `openLightbox(id)`   | Abre el lightbox con la imagen del producto indicado            |
| `closeLightbox()`    | Cierra el lightbox                                              |
| `lbUpdate()`         | Actualiza imagen, título, zoom y estados del lightbox           |
| `lbSetZoom(scale)`   | Aplica zoom (1× – 3×) con step 0.5                             |
| `lbNav(dir)`         | Navega al producto anterior (-1) o siguiente (+1) en lightbox   |
| `showToast(id)`      | Muestra notificación "Agregado al carrito" durante 6 segundos   |
| `closeToast(t)`      | Cierra y elimina un toast del DOM                               |
| `showModal(id, mode)`| Abre modal: mode "add" (re-agregar) o "del" (eliminar)          |
| `hideModal()`        | Cierra el modal de confirmación                                 |
| `addToCart(id)`      | Si ya existe en carrito → showModal("add"); si no → doAddToCart |
| `doAddToCart(id)`    | Agrega al carrito, actualiza badge, shake, muestra toast        |
| `removeFromCart(id)` | Pide confirmación vía modal antes de eliminar                   |
| `doRemoveFromCart(id)`| Elimina definitivamente del carrito                            |
| `clearCart()`        | Vacía el carrito completo                                       |
| `setQty(id, d)`      | Cambia cantidad (+1 / -1) en el carrito                         |
| `syncCart()`         | Actualiza badge contador y visibilidad del botón "Vaciar"       |
| `renderCart()`       | Re-renderiza el drawer del carrito                              |
| `checkout()`         | Construye mensaje y abre WhatsApp con el pedido en nueva pestaña|
| `cartBtnShake()`     | Animación shake en el ícono del carrito al agregar              |
| `iconSVG(type)`      | Devuelve SVG line-art del producto (fallback sin foto)          |
| `mediaInner(p)`      | Devuelve HTML de la imagen o icono SVG del producto             |
| `observeReveals()`   | IntersectionObserver para animaciones de entrada por scroll     |
| `initSpecular()`     | Efecto de luz que sigue al cursor sobre el logo hero            |

## Carrito — comportamiento

- Estado en memoria: objeto `cart = { id: qty }` — se pierde al recargar la página
- Agregar producto ya existente → modal de confirmación "¿Agregar una más?"
- Papelera → modal de confirmación "¿Eliminar del carrito?"
- "Vaciar" en el encabezado → limpia todo el carrito
- Animación shake en el botón del carrito al agregar cualquier ítem
- Toast de 6 segundos confirma cada adición
- El checkout abre `wa.me/584125385086?text=...` en nueva pestaña con el pedido formateado
- No hay backend ni persistencia

## Lightbox — comportamiento

- Se abre al hacer clic en la imagen del producto (ícono lupa aparece en hover)
- Zoom: botones +/−, rueda del mouse (PC), clic en imagen (alterna 1× ↔ 2×)
- Rango de zoom: 1× (100%) a 3× (300%), paso 0.5×
- Navegación entre productos: flechas laterales, teclas ← →, swipe en móvil
- Teclas adicionales: + / − para zoom, 0 para resetear zoom, Escape para cerrar
- Se cierra con el botón X o Escape

## Logo

- Logo real: `img/Logo_Web/Logo-Skape.png` — `<img>` en nav, hero y footer
- Tamaño en hero: ~720px en PC (880px+), ~340px en mobile
- Efecto specular (luz que sigue el cursor) activo sobre el logo en el hero
- Para cambiar el logo: reemplazar `img/Logo_Web/Logo-Skape.png` con el nuevo archivo (mismo nombre)

## SEO / Open Graph

Etiquetas en el `<head>` de `index.html`:
- `og:title`, `og:description`, `og:image`, `og:url` — para WhatsApp, Instagram, iMessage
- `twitter:card`, `twitter:image` — para Twitter/X
- JSON-LD `ClothingStore` — para Google
- URL base: `https://skapefromthebronx.pages.dev`
- Imagen OG: `https://skapefromthebronx.pages.dev/img/Logo_Web/Logo-Skape.png`

## Añadir o cambiar fotos de productos

Modificar la propiedad `img` en el objeto correspondiente de PRODUCTS:
```js
{ id:"slide-concourse", ..., img:"img/Calzados/Calzado 1.png" }
// También acepta URL externa o base64:
{ id:"slide-concourse", ..., img:"https://ejemplo.com/foto.jpg" }
```
La foto reemplaza automáticamente al icono SVG tanto en la card como en el carrito y el lightbox.

## Idioma

Todo el contenido está en **español**. El sitio está orientado a mercado hispanohablante (Venezuela y región).

## Pendientes antes de lanzar

1. Agregar links reales de **Instagram** y **TikTok** en el footer de `index.html` (actualmente `href="#"`)
2. (Opcional) Dominio personalizado en Cloudflare Pages

## Notas de edición rápida

- **Agregar producto**: añadir objeto al array `PRODUCTS` en `js/skape-from-the-bronx.js`
- **Cambiar precio**: modificar `price:` en el objeto del producto
- **Cambiar foto de producto**: modificar `img:` en el objeto del producto
- **Cambiar nombre/descripción de producto**: modificar `name:` y `tag:` en el objeto
- **Cambiar texto hero**: buscar `<h1>` en la sección `.hero` de `index.html`
- **Cambiar descripción de marca**: buscar `<section class="brand-strip">` en `index.html`
- **Cambiar horario**: buscar `Lun–Sáb` en el footer de `index.html`
- **Cambiar moneda**: modificar `const CURRENCY = "$"` en `js/skape-from-the-bronx.js`
- **Cambiar número WhatsApp**: modificar `const WHATSAPP = "..."` en `js/skape-from-the-bronx.js`
- **Cambiar tamaño logo hero**: `.emblem-stage` en `css/skape-from-the-bronx.css`
- **Agregar Instagram/TikTok**: buscar `aria-label="Instagram"` y `aria-label="TikTok"` en el footer de `index.html` y reemplazar `href="#"` con el link real
