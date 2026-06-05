# Sara & Fernando · Wedding Website
### 12 · 12 · 2026 · Madrid

Una experiencia web victoriana navideña para la boda de Sara y Fernando.

---

## 🚀 Inicio rápido

### Requisitos previos
- **Node.js** ≥ 20.x (recomendado 22 LTS)
- **npm** ≥ 10

### Instalación

```bash
# 1. Entrar al directorio del proyecto
cd sara-fernando-wedding

# 2. Instalar dependencias
npm install

# 3. Lanzar en desarrollo
npm start
```

La web abrirá automáticamente en `http://localhost:4200`

---

## 📁 Estructura del proyecto

```
sara-fernando-wedding/
├── src/
│   ├── app/
│   │   ├── core/
│   │   │   ├── models/
│   │   │   │   └── wedding.models.ts       # Interfaces TypeScript
│   │   │   └── services/
│   │   │       ├── rsvp.service.ts          # Servicio confirmación
│   │   │       └── wedding-data.service.ts  # Datos boda (Signals)
│   │   ├── features/
│   │   │   ├── home/          # Portada con cuenta atrás
│   │   │   ├── wedding/       # La Boda — timeline
│   │   │   ├── transport/     # Transporte — mapa ilustrado
│   │   │   ├── madrid/        # Nuestro Madrid — guía
│   │   │   ├── regalo/        # Regalo — IBAN con copiar
│   │   │   └── confirmacion/  # Formulario confirmación
│   │   └── shared/
│   │       └── components/
│   │           ├── nav/   # Navegación sticky
│   │           └── snow/  # Efecto nieve
│   ├── index.html
│   ├── main.ts
│   └── styles.scss          # Sistema de diseño global
├── public/
│   └── assets/
│       └── favicon.svg
├── angular.json
├── netlify.toml             # Config Netlify
├── package.json
└── tsconfig.json
```

---

## 🌐 Rutas

| Ruta | Componente | Descripción |
|------|-----------|-------------|
| `/` | HomeComponent | Portada + cuenta atrás |
| `/la-boda` | WeddingComponent | Horarios y lugar |
| `/transporte` | TransportComponent | Mapa de autobuses |
| `/nuestro-madrid` | MadridComponent | Guía de Madrid |
| `/regalo` | RegaloComponent | IBAN y mensaje |
| `/confirmacion` | ConfirmacionComponent | Formulario RSVP |

---

## 🏗️ Build de producción

```bash
npm run build:prod
```

El build se genera en `dist/sara-fernando-wedding/browser/`

---

## ☁️ Despliegue en Netlify

### Opción A — Desde la CLI de Netlify

```bash
# Instalar CLI (si no la tienes)
npm install -g netlify-cli

# Build
npm run build:prod

# Deploy
netlify deploy --prod --dir=dist/sara-fernando-wedding/browser
```

### Opción B — Desde la interfaz web de Netlify

1. Ve a [app.netlify.com](https://app.netlify.com) y crea un nuevo sitio
2. **Build command:** `npm run build:prod`
3. **Publish directory:** `dist/sara-fernando-wedding/browser`
4. **Node version:** 20 (en Site Settings → Build & Deploy → Environment variables añade `NODE_VERSION=20`)

### Opción C — Conectar con GitHub (recomendado)

1. Sube el proyecto a un repositorio de GitHub
2. En Netlify: New site → Import an existing project → GitHub
3. Configura:
   - **Build command:** `npm run build:prod`
   - **Publish directory:** `dist/sara-fernando-wedding/browser`
4. Netlify desplegará automáticamente en cada push

El archivo `netlify.toml` ya está configurado para:
- Redirigir todas las rutas a `index.html` (necesario para SPA)
- Configurar el build correcto

---

## 📋 Configurar el formulario de confirmación

### Opción 1 — Netlify Forms (recomendado, gratis hasta 100 envíos/mes)

En `confirmacion.component.html`, añadir al `<form>`:
```html
<form data-netlify="true" name="rsvp-boda" ...>
  <input type="hidden" name="form-name" value="rsvp-boda">
  ...
</form>
```

Luego en `rsvp.service.ts`, cambiar `submitRsvp` por `submitNetlifyForm`.

### Opción 2 — API REST propia

En `rsvp.service.ts`, descomentar la llamada HTTP real:
```typescript
return this.http.post<RsvpResponse>(this.apiUrl, form, {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
});
```

Y cambiar `this.apiUrl` por la URL de tu backend.

### Opción 3 — EmailJS (sin backend)

```bash
npm install @emailjs/browser
```

Consulta [emailjs.com](https://www.emailjs.com) para la configuración.

---

## 🎨 Personalización

### Datos de la boda

Edita `src/app/core/services/wedding-data.service.ts`:
- Fecha y hora de la boda
- Eventos del timeline
- Paradas de transporte
- Restaurantes y planes de Madrid

### IBAN y titular

Edita `src/app/features/regalo/regalo.component.ts`:
```typescript
readonly iban = 'ES12 3456 7890 1234 5678 9012';
readonly titular = 'Sara & Fernando';
```

### Paleta de colores

Edita las variables CSS en `src/styles.scss`:
```scss
:root {
  --color-cream: #f5ede0;
  --color-garnet: #6b1f1f;
  --color-gold: #b5892a;
  // ...
}
```

---

## 🔧 Scripts disponibles

| Comando | Descripción |
|---------|-------------|
| `npm start` | Desarrollo en `localhost:4200` |
| `npm run build` | Build de desarrollo |
| `npm run build:prod` | Build optimizado para producción |
| `npm test` | Tests unitarios |
| `npm run lint` | Linting con ESLint |

---

## 🌿 Tecnologías

- **Angular 20** — Standalone Components + Signals
- **SCSS** — Sistema de diseño personalizado (sin Bootstrap ni Material)
- **Angular Router** — Lazy loading + View Transitions API
- **Google Fonts** — IM Fell English, Libre Baskerville, Crimson Text
- **SVG inline** — Todas las ilustraciones son SVG inline (sin imágenes externas)

---

## ✉️ Soporte

Para cualquier duda o personalización adicional, el código está completamente
documentado y preparado para ser editado por cualquier desarrollador Angular.

---

*Hecho con ♥ para Sara & Fernando · Diciembre 2026*
