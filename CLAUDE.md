# SKAPE FROM THE BRONX — Contexto del proyecto

## PALABRAS CLAVE (leer siempre)

| Palabra       | Qué hace Claude automáticamente |
|---------------|----------------------------------|
| `continuemos` | Lee este CLAUDE.md + `git log --oneline -5` y continúa el trabajo sin pedir contexto |
| `actualiza`   | **Paso 1:** Actualiza la sección Estado actual de este CLAUDE.md. **Paso 2:** Actualiza README.md (catálogo, pendientes, o cualquier sección que haya cambiado). **Paso 3:** `git push` (ambos MDs suben junto con el código). Siempre en ese orden. |

---

## Estado actual

**Última actualización:** 2026-06-18

**Qué se hizo hoy:**
- Archivos renombrados: `css/skape-from-the-bronx.css` y `js/skape-from-the-bronx.js`
- Logo real `img/Logo-Skape.png` integrado en: favicon (pestaña del navegador), nav, hero y footer
- SVG emblem programático eliminado del JS — reemplazado por imagen real
- SEO completo: Open Graph, Twitter Cards y JSON-LD (ClothingStore) en el `<head>`
- URL Open Graph correcta: `https://skapefromthebronx.pages.dev`
- Responsive corregido: pillars 4 columnas en desktop (1040px+), fixes móvil <400px
- Logo hero agrandado: 500px en PC, 340px en mobile (efecto specular de cursor sigue activo)
- Cloudflare Pages conectado — URL live: `https://skapefromthebronx.pages.dev`
- Conflicto de ramas resuelto: local `master` renombrada a `main`; `git push` va directo a `main` (la rama que Cloudflare monitorea para auto-deploy)

**Qué falta por hacer:**
- Agregar número real de WhatsApp en `js/skape-from-the-bronx.js` → `const WHATSAPP = "0000000000"`
- Agregar links reales de Instagram y TikTok en el footer de `index.html`
- Subir fotos reales de productos a `img/` y referenciarlas en PRODUCTS
- (Opcional) Dominio personalizado en Cloudflare Pages

**Próximo paso acordado:**
Contenido real: número de WhatsApp, fotos de productos, links de redes sociales.

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
│   └── skape-from-the-bronx.js  — PRODUCTS array, carrito, lógica
├── img/
│   └── Logo-Skape.png            — Logo real (favicon + nav + hero + footer)
├── .claude/
│   └── settings.json             — Hooks de palabras clave (continuemos / actualiza)
├── .gitignore
└── CLAUDE.md                     — Este archivo
```

**Secciones en index.html:**
- `<header class="nav">` — sticky, blur backdrop, menú móvil
- `<section class="hero">` — logo real con efecto specular de cursor (luz que sigue el mouse)
- `<section id="catalogo">` — grid filtrable de productos
- `<section id="marca">` — pillares de la marca (4 bloques)
- `<footer id="contacto">` — links sociales, horario
- `.wa-float` — botón flotante WhatsApp
- `<aside id="cart">` — drawer carrito (slide desde la derecha)

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

- `#catalogo` — grid de productos
- `#marca` — about the brand
- `#contacto` — footer / contacto
- `#cart` — drawer carrito (aside)
- `#grid` — donde se renderizan las tarjetas de productos
- `#filters` — botones de filtro de categoría

## Configuración editable (en `js/skape-from-the-bronx.js`)

### Número de WhatsApp
```js
const WHATSAPP = "0000000000"; // ⚠️ PENDIENTE reemplazar con número real
```
Formato: código de país + número, sin signos. Ej: Venezuela `584121234567`, Colombia `573001234567`.

### Catálogo de productos (array PRODUCTS)
```js
const PRODUCTS = [
  { id:"...", name:"...", cat:"calzado|ropa|accesorios", price:45, tag:"descripción corta", icon:"slide|sneaker|hoodie|tee|shorts|cap|beanie|socks|tote", accent:"#hexcolor" },
  // Para foto real agregar: img:"URL_o_data_URI_base64"
];
```

### Productos actuales (11 ítems)
| ID                  | Nombre                      | Cat         | Precio |
|---------------------|-----------------------------|-------------|--------|
| slide-concourse     | Concourse Slide             | calzado     | $45    |
| low-grand           | Grand Court Low             | calzado     | $89    |
| bridge-runner       | Bridge Runner               | calzado     | $95    |
| hoodie-bronx        | Bronx Heavyweight Hoodie    | ropa        | $65    |
| crew-161            | 161st St. Crewneck          | ropa        | $58    |
| tee-court           | Court Culture Tee           | ropa        | $32    |
| shorts-concourse    | Concourse Shorts            | ropa        | $40    |
| cap-snap            | Skape Snapback              | accesorios  | $28    |
| beanie-chrome       | Chrome Monogram Beanie      | accesorios  | $24    |
| socks-court         | Court Socks (3 pares)       | accesorios  | $18    |
| tote-bronx          | Bronx Tote                  | accesorios  | $22    |

## Funciones JS clave (en `js/skape-from-the-bronx.js`)

| Función            | Qué hace                                              |
|--------------------|-------------------------------------------------------|
| `renderGrid()`     | Renderiza las cards según el filtro activo            |
| `addToCart(id)`    | Agrega ítem al carrito (objeto en memoria)            |
| `setQty(id, d)`    | Cambia cantidad (+1 / -1) en el carrito               |
| `syncCart()`       | Actualiza el badge del contador en el nav             |
| `renderCart()`     | Re-renderiza el drawer del carrito                    |
| `checkout()`       | Construye mensaje y abre WhatsApp con el pedido       |
| `iconSVG(type)`    | Devuelve SVG line-art del producto por tipo de icono  |
| `observeReveals()` | IntersectionObserver para animaciones de entrada      |
| `initSpecular()`   | Efecto de luz que sigue al cursor sobre el logo hero  |
| `emblemSVG()`      | ~~SVG del emblema~~ — función obsoleta, ya no se llama |

## Carrito — comportamiento

- Estado en memoria: objeto `cart = { id: qty }` — se pierde al recargar la página
- El checkout abre `wa.me/{WHATSAPP}?text=...` con el pedido formateado
- No hay backend ni persistencia

## Logo

- Logo real: `img/Logo-Skape.png` — `<img>` en nav, hero y footer
- Tamaño en hero: 500px en PC (880px+), 340px en mobile
- Efecto specular (luz que sigue el cursor) sigue activo sobre el logo en el hero
- Para cambiar el logo: reemplazar `img/Logo-Skape.png` con el nuevo archivo (mismo nombre)

## SEO / Open Graph

Etiquetas en el `<head>` de `index.html`:
- `og:title`, `og:description`, `og:image`, `og:url` — para WhatsApp, Instagram, iMessage
- `twitter:card`, `twitter:image` — para Twitter/X
- JSON-LD `ClothingStore` — para Google
- URL base: `https://skapefromthebronx.pages.dev`
- Imagen OG: `https://skapefromthebronx.pages.dev/img/Logo-Skape.png`

## Añadir fotos reales a productos

Agregar propiedad `img` al objeto en PRODUCTS:
```js
{ id:"hoodie-bronx", ..., img:"https://..." }
// o base64:
{ id:"hoodie-bronx", ..., img:"data:image/jpeg;base64,/9j/..." }
```
La foto reemplaza automáticamente al icono SVG tanto en la card como en el carrito.

## Idioma

Todo el contenido está en **español**. El sitio está orientado a mercado hispanohablante.

## Pendientes antes de lanzar

1. Reemplazar `WHATSAPP = "0000000000"` con número real en `js/skape-from-the-bronx.js`
2. Agregar links reales de Instagram y TikTok en el footer de `index.html`
3. (Opcional) Agregar fotos reales de productos con `img:` en PRODUCTS
4. (Opcional) Dominio personalizado en Cloudflare Pages

## Notas de edición rápida

- **Agregar producto**: añadir objeto al array `PRODUCTS` en `js/skape-from-the-bronx.js`
- **Cambiar precio**: modificar `price:` en el objeto del producto
- **Cambiar texto hero**: buscar `<h1>` en la sección `.hero` de `index.html`
- **Cambiar descripción de marca**: buscar `<section class="brand-strip">` en `index.html`
- **Cambiar horario**: buscar `Lun–Sáb` en el footer de `index.html`
- **Cambiar moneda**: modificar `const CURRENCY = "$"` en `js/skape-from-the-bronx.js`
- **Cambiar tamaño logo hero**: `.emblem-stage` en `css/skape-from-the-bronx.css` (mobile: `340px`, desktop 880px+: `500px`)
