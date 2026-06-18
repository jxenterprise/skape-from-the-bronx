# SKAPE FROM THE BRONX — Contexto del proyecto

## PALABRAS CLAVE (leer siempre)

| Palabra     | Qué hace Claude automáticamente |
|-------------|----------------------------------|
| `continuemos` | Lee este CLAUDE.md + `git log --oneline -5` y continúa el trabajo sin pedir contexto |
| `actualiza`   | Actualiza la sección **Estado actual** (abajo) con los cambios de la sesión + `git push` |

---

## Estado actual

**Última actualización:** 2026-06-18

**Qué se hizo hoy:**
- Reorganización completa del proyecto: de un único HTML a estructura multi-archivo
- Creado `index.html` (solo HTML), `css/styles.css`, `js/main.js`, `img/` (vacía)
- Inicializado repositorio Git (commit inicial hecho)
- Configurados hooks de palabras clave (`continuemos` / `actualiza`) en `.claude/settings.json`

**Qué falta por hacer:**
- Conectar repo local a GitHub (el usuario aún no ha creado el repo en GitHub)
- Agregar número real de WhatsApp en `js/main.js` → `const WHATSAPP = "0000000000"`
- Subir fotos reales de productos (carpeta `img/`)
- Agregar links reales de Instagram y TikTok en el footer de `index.html`
- (Opcional) Reemplazar logo SVG generado por logo real de la marca

**Próximo paso acordado:**
Esperar que el usuario cree el repo en GitHub y pase la URL para hacer el push.

---

## Qué es este proyecto

Catálogo de e-commerce de streetwear y cultura del básquet, inspirado en el Bronx (NYC).
**Estructura multi-archivo** separada en `index.html` + `css/styles.css` + `js/main.js`. Sin frameworks, sin build system, sin dependencias locales (solo Google Fonts externo). Abre `index.html` en el navegador directamente.

## Arquitectura del proyecto

```
skape-from-the-bronx/
├── index.html          — HTML (estructura, secciones, componentes)
├── css/
│   └── styles.css      — Todo el CSS + variables CSS + breakpoints
├── js/
│   └── main.js         — PRODUCTS array, carrito, lógica, emblema SVG
├── img/                — Carpeta para fotos de productos (vacía aún)
├── .claude/
│   └── settings.json   — Hooks de palabras clave (continuemos / actualiza)
├── .gitignore
└── CLAUDE.md           — Este archivo
```

**Secciones en index.html:**
- `<header class="nav">` — sticky, blur backdrop, menú móvil
- `<section class="hero">` — emblema SVG animado con efecto specular en cursor
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

## Configuración editable (en el `<script>`)

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

## Funciones JS clave

| Función          | Qué hace                                              |
|------------------|-------------------------------------------------------|
| `renderGrid()`   | Renderiza las cards según el filtro activo            |
| `addToCart(id)`  | Agrega ítem al carrito (objeto en memoria)            |
| `setQty(id, d)`  | Cambia cantidad (+1 / -1) en el carrito               |
| `syncCart()`     | Actualiza el badge del contador en el nav             |
| `renderCart()`   | Re-renderiza el drawer del carrito                    |
| `checkout()`     | Construye mensaje y abre WhatsApp con el pedido       |
| `emblemSVG()`    | Genera el SVG del emblema SKAPE (balón + rascacielos) |
| `iconSVG(type)`  | Devuelve SVG line-art del producto por tipo de icono  |
| `observeReveals()` | IntersectionObserver para animaciones de entrada    |
| `initSpecular()` | Efecto de luz que sigue al cursor en el emblema hero  |

## Carrito — comportamiento

- Estado en memoria: objeto `cart = { id: qty }` — se pierde al recargar la página
- El checkout abre `wa.me/{WHATSAPP}?text=...` con el pedido formateado
- No hay backend ni persistencia

## Logo / emblema

- SVG generado programáticamente en `emblemSVG()` — balón de básquet + rascacielos + puente colgante
- Se inyecta en 3 lugares: `#emblemHero`, `#markNav`, `#markFoot`
- Para reemplazar con logo real: cambiar el contenido de esos `<span>` con el SVG real

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

1. Reemplazar `WHATSAPP = "0000000000"` con número real
2. (Opcional) Reemplazar `emblemSVG()` con logo SVG real
3. (Opcional) Agregar fotos reales de productos con `img:` en PRODUCTS
4. (Opcional) Agregar links reales de Instagram y TikTok en el footer

## Notas de edición rápida

- **Agregar producto**: añadir objeto al array `PRODUCTS` en el `<script>`
- **Cambiar precio**: modificar `price:` en el objeto del producto
- **Cambiar texto hero**: buscar `<h1>` en la sección `.hero`
- **Cambiar descripción de marca**: buscar `<section class="brand-strip">`
- **Cambiar horario**: buscar `Lun–Sáb` en el footer
- **Cambiar moneda**: modificar `const CURRENCY = "$"`
