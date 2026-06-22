# SKAPE FROM THE BRONX

**Streetwear & cultura del básquet — catálogo online con carrito y checkout por WhatsApp**

[![Deploy](https://img.shields.io/badge/Live-skapefromthebronx.pages.dev-28c2d4?style=flat-square&logo=cloudflare)](https://skapefromthebronx.pages.dev)
[![Estado](https://img.shields.io/badge/Estado-En%20desarrollo-c47a45?style=flat-square)]()
[![HTML](https://img.shields.io/badge/Stack-HTML%20%2B%20CSS%20%2B%20JS-dde1e5?style=flat-square)]()
[![Sin frameworks](https://img.shields.io/badge/Sin%20frameworks-Vanilla-8b9197?style=flat-square)]()

---

## ¿Qué es SKAPE?

SKAPE FROM THE BRONX es una marca de streetwear y cultura del básquet inspirada en el Bronx (NYC). Calzado y sombreros diseñados para la cancha y la calle — piezas propias, tiradas cortas, del asfalto al concourse.

Este repositorio contiene el sitio web oficial: un catálogo interactivo con carrusel de productos, lightbox de imágenes, carrito de compra y checkout directo por WhatsApp. Sin backend, sin frameworks, sin dependencias locales.

---

## Demo en vivo

**[skapefromthebronx.pages.dev](https://skapefromthebronx.pages.dev)**

Desplegado en Cloudflare Pages — se actualiza automáticamente en cada `git push` a `main`.

---

## Funcionalidades

- **Carrusel de productos** con flechas de navegación, dots indicadores y swipe táctil en móvil
- **Lightbox de imágenes** — clic en cualquier producto para verlo a pantalla completa con zoom (botones, rueda del mouse, clic para alternar), navegación entre productos, soporte teclado y swipe
- **Carrito de compra** con control de cantidades y total en tiempo real
- **Modal de confirmación** al intentar agregar un producto ya existente o al eliminar un ítem
- **Notificaciones toast** al agregar productos — aparecen 6 segundos con nombre e imagen del producto
- **Botón "Vaciar carrito"** para limpiar el pedido completo
- **Animación shake** en el ícono del carrito al agregar productos
- **Checkout por WhatsApp** — genera el mensaje con el pedido completo y abre `wa.me` en nueva pestaña
- **Botón flotante de WhatsApp** siempre visible — abre en nueva pestaña
- **Links sociales** (WhatsApp, Instagram, TikTok) — todos abren en nueva pestaña
- **Menú móvil** responsive con hamburger toggle
- **Animaciones de entrada** por scroll (IntersectionObserver)
- **Efecto specular** en el logo hero (luz que sigue al cursor)
- **SEO completo**: Open Graph (WhatsApp, Instagram, Facebook), Twitter Cards, JSON-LD ClothingStore
- **Favicon y Apple Touch Icon** con el logo real
- Responsive completo: mobile, tablet y desktop (breakpoints en 560px, 880px, 1040px, 1400px)

---

## Stack técnico

| Capa        | Tecnología                                     |
|-------------|------------------------------------------------|
| Estructura  | HTML5 semántico                                |
| Estilos     | CSS3 vanilla + variables CSS + media queries   |
| Lógica      | JavaScript ES6+ vanilla                        |
| Tipografías | Google Fonts (Archivo, Oswald, Hanken Grotesk) |
| Deploy      | Cloudflare Pages (auto-deploy)                 |
| Repo        | GitHub (`main` → Cloudflare)                   |

Sin frameworks. Sin build system. Sin dependencias locales. Abre `index.html` directo en el navegador.

---

## Estructura de archivos

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
│   └── settings.json             — Configuración del asistente de desarrollo
├── CLAUDE.md                     — Documentación interna del proyecto
└── README.md                     — Este archivo
```

---

## Configuración rápida

Todo lo editable está al inicio de `js/skape-from-the-bronx.js`:

### 1. Número de WhatsApp

```js
const WHATSAPP = "584125385086"; // código de país + número, sin signos ni espacios
// Venezuela: 58 + número · Colombia: 57 + número · México: 52 + número
```

### 2. Moneda

```js
const CURRENCY = "$";
```

### 3. Catálogo de productos

```js
const PRODUCTS = [
  {
    id:     "slide-concourse",     // identificador único
    name:   "Concourse Slide",
    cat:    "calzado",             // "calzado" | "sombreros"
    price:  45,
    tag:    "Para después del juego", // descripción corta
    icon:   "slide",               // icono SVG de respaldo (si no hay img)
    accent: "#c47a45",             // color de acento de la card
    img:    "img/Calzados/Calzado 1.png"  // ruta a la foto real
  },
];
```

---

## Catálogo actual — 6 productos

| Producto                | Categoría  | Precio |
|-------------------------|------------|--------|
| Concourse Slide         | Calzado    | $45    |
| Grand Court Low         | Calzado    | $89    |
| Bridge Runner           | Calzado    | $95    |
| Skape Snapback          | Sombreros  | $28    |
| Chrome Monogram Beanie  | Sombreros  | $24    |
| Skape Bucket Hat        | Sombreros  | $30    |

---

## Paleta de colores

| Variable        | Valor     | Uso                            |
|----------------|-----------|--------------------------------|
| `--asphalt`    | `#14110f` | Fondo base                     |
| `--brick`      | `#1d1714` | Cards y paneles                |
| `--copper`     | `#c47a45` | Acento principal (CTA)         |
| `--teal`       | `#28c2d4` | Acento frío (puente)           |
| `--chrome`     | `#dde1e5` | Texto principal                |
| `--ok`         | `#5ec27a` | Confirmación en carrito        |

---

## Secciones de la página

| Sección         | ID / clase        | Descripción                                      |
|-----------------|-------------------|--------------------------------------------------|
| Navegación      | `.nav`            | Sticky, blur backdrop, menú móvil                |
| Hero            | `.hero`           | Logo con efecto specular de cursor               |
| Catálogo        | `#catalogo`       | Carrusel de productos con flechas y dots         |
| La marca        | `#marca`          | 4 pilares de identidad SKAPE                     |
| Footer          | `#contacto`       | Redes sociales, navegación, horario              |
| Carrito         | `#cart`           | Drawer lateral (slide desde la derecha)          |
| Lightbox        | `#lbOverlay`      | Vista de imagen a pantalla completa con zoom     |
| Modal           | `#modalOverlay`   | Confirmación: re-agregar o eliminar del carrito  |
| Toasts          | `#toastWrap`      | Notificaciones de "Agregado al carrito"          |
| WhatsApp float  | `.wa-float`       | Botón fijo siempre visible                       |

---

## Cómo usar localmente

```bash
git clone git@github-jxenterprise:jxenterprise/skape-from-the-bronx.git
cd skape-from-the-bronx
# Abre index.html en tu navegador — no necesita servidor
```

---

## Deploy en Cloudflare Pages

El sitio se despliega automáticamente en cada `git push` a `main`:

```bash
git add .
git commit -m "Descripción del cambio"
git push
# Cloudflare Pages despliega en ~30 segundos
```

---

## Pendientes antes del lanzamiento oficial

- [ ] Agregar links reales de **Instagram** y **TikTok** en el footer de `index.html`
- [ ] *(Opcional)* Dominio personalizado en Cloudflare Pages

---

## Licencia

Todos los derechos reservados — SKAPE From the Bronx © 2026.  
Diseño propio. Sin marcas de terceros.
