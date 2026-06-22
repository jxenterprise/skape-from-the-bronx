# SKAPE FROM THE BRONX

**Streetwear & cultura del básquet — catálogo online con carrito y checkout por WhatsApp**

[![Deploy](https://img.shields.io/badge/Live-skapefromthebronx.pages.dev-28c2d4?style=flat-square&logo=cloudflare)](https://skapefromthebronx.pages.dev)
[![Estado](https://img.shields.io/badge/Estado-En%20desarrollo-c47a45?style=flat-square)]()
[![HTML](https://img.shields.io/badge/Stack-HTML%20%2B%20CSS%20%2B%20JS-dde1e5?style=flat-square)]()
[![Sin frameworks](https://img.shields.io/badge/Sin%20frameworks-Vanilla-8b9197?style=flat-square)]()

---

## ¿Qué es SKAPE?

SKAPE FROM THE BRONX es una marca de streetwear y cultura del básquet inspirada en el Bronx (NYC). Calzado, ropa y accesorios diseñados para la cancha y la calle — piezas propias, tiradas cortas, del asfalto al concourse.

Este repositorio contiene el sitio web oficial: un catálogo interactivo con carrito de compra y checkout directo por WhatsApp. Sin backend, sin frameworks, sin dependencias locales.

---

## Demo en vivo

**[skapefromthebronx.pages.dev](https://skapefromthebronx.pages.dev)**

Desplegado en Cloudflare Pages — se actualiza automáticamente en cada `git push` a `main`.

---

## Funcionalidades

- **Catálogo filtrable** por categoría: Calzado · Ropa · Accesorios
- **Carrito de compra** con control de cantidades y total en tiempo real
- **Checkout por WhatsApp** — genera el mensaje con el pedido completo y abre wa.me directo
- **Botón flotante de WhatsApp** siempre visible
- **Menú móvil** responsive con hamburger toggle
- **Animaciones de entrada** por scroll (IntersectionObserver)
- **Efecto specular** en el logo hero (luz que sigue al cursor)
- **SEO completo**: Open Graph (WhatsApp, Instagram, Facebook), Twitter Cards, JSON-LD ClothingStore
- **Favicon y Apple Touch Icon** con el logo real
- Soporte para **fotos reales de productos** (URL o base64) — si no hay foto, muestra icono SVG de línea

---

## Stack técnico

| Capa       | Tecnología                        |
|------------|-----------------------------------|
| Estructura | HTML5 semántico                   |
| Estilos    | CSS3 vanilla + variables CSS      |
| Lógica     | JavaScript ES6+ vanilla           |
| Tipografías| Google Fonts (Archivo, Oswald, Hanken Grotesk) |
| Deploy     | Cloudflare Pages (auto-deploy)    |
| Repo       | GitHub (`main` → Cloudflare)      |

Sin frameworks. Sin build system. Sin dependencias locales. Abre `index.html` directo en el navegador.

---

## Estructura de archivos

```
skape-from-the-bronx/
├── index.html                    — HTML (estructura, secciones, componentes)
├── css/
│   └── skape-from-the-bronx.css — Todo el CSS + variables CSS + breakpoints
├── js/
│   └── skape-from-the-bronx.js  — PRODUCTS array, carrito, lógica, configuración
├── img/
│   └── Logo-Skape.png            — Logo real (favicon + nav + hero + footer)
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
const WHATSAPP = "584121234567"; // código de país + número, sin signos ni espacios
// Venezuela: 584121234567 · Colombia: 573001234567 · México: 521234567890
```

### 2. Moneda

```js
const CURRENCY = "$";
```

### 3. Catálogo de productos

```js
const PRODUCTS = [
  {
    id:     "hoodie-bronx",           // identificador único
    name:   "Bronx Heavyweight Hoodie",
    cat:    "ropa",                   // "calzado" | "ropa" | "accesorios"
    price:  65,
    tag:    "Algodón 440 g",          // descripción corta bajo el nombre
    icon:   "hoodie",                 // slide | sneaker | hoodie | tee | shorts | cap | beanie | socks | tote
    accent: "#c47a45",                // color de acento de la card
    // img: "https://..." o "data:image/jpeg;base64,..."  ← opcional, reemplaza al icono SVG
  },
];
```

---

## Catálogo actual — 11 productos

| Producto                   | Categoría   | Precio |
|----------------------------|-------------|--------|
| Concourse Slide            | Calzado     | $45    |
| Grand Court Low            | Calzado     | $89    |
| Bridge Runner              | Calzado     | $95    |
| Bronx Heavyweight Hoodie   | Ropa        | $65    |
| 161st St. Crewneck         | Ropa        | $58    |
| Court Culture Tee          | Ropa        | $32    |
| Concourse Shorts           | Ropa        | $40    |
| Skape Snapback             | Accesorios  | $28    |
| Chrome Monogram Beanie     | Accesorios  | $24    |
| Court Socks (3 pares)      | Accesorios  | $18    |
| Bronx Tote                 | Accesorios  | $22    |

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

- [ ] Reemplazar `WHATSAPP = "0000000000"` con número real
- [ ] Agregar links reales de Instagram y TikTok en el footer
- [ ] *(Opcional)* Fotos reales de productos con `img:` en PRODUCTS
- [ ] *(Opcional)* Dominio personalizado en Cloudflare Pages

---

## Secciones de la página

| Sección        | ID / clase        | Descripción                                   |
|----------------|-------------------|-----------------------------------------------|
| Navegación     | `.nav`            | Sticky, blur backdrop, menú móvil             |
| Hero           | `.hero`           | Logo con efecto specular de cursor            |
| Catálogo       | `#catalogo`       | Grid filtrable de productos                   |
| La marca       | `#marca`          | 4 pilares de identidad SKAPE                  |
| Footer         | `#contacto`       | Redes sociales, navegación, horario           |
| Carrito        | `#cart`           | Drawer lateral (slide desde la derecha)       |
| WhatsApp float | `.wa-float`       | Botón fijo siempre visible                    |

---

## Licencia

Todos los derechos reservados — SKAPE From the Bronx © 2025.  
Diseño propio. Sin marcas de terceros.
