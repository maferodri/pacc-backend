# PACC-backend

Backend del proyecto PACC (gestión de instructores).
Stack: Node.js + Express + TypeScript.

## Descripción de los directorios y archivos

1. **src/config/**: Parámetros globales de la aplicación (variables de entorno y CORS).
2. **src/modules/**: Un subdirectorio por funcionalidad. Cada módulo agrupa sus propias carpetas (`controllers/`, `routes/`, `services/`, `types/`).
3. **src/shared/**: Código reutilizable por todos los módulos (middlewares, tipos, utilidades).
4. **src/app.ts**: Configuración de Express (middlewares y rutas).
5. **src/index.ts**: Punto de entrada. Levanta el servidor.
6. **docs/**: Documentación del proyecto.
7. **.env.example**: Plantilla de variables de entorno. Copiarla a `.env` y completar los valores.

## Requisitos previos

- [Node.js](https://nodejs.org/) 22 (ver `.nvmrc`). Con `nvm`: `nvm install 22 && nvm use`.
- npm (viene con Node.js).
- TypeScript 5.8.3 (se instala con `npm install`). La versión está fijada porque `typescript-eslint` todavía no soporta TypeScript 7. No actualizar sin revisar compatibilidad.

## Cómo levantar el proyecto

1. Clonar el repositorio:

   ```bash
   git clone <URL_DEL_REPO>
   cd pacc-backend
   ```

2. Instalar dependencias:

   ```bash
   npm install
   ```

3. Configurar las variables de entorno:

   ```bash
   cp .env.example .env
   ```

4. Ejecutar en desarrollo (con recarga automática):

   ```bash
   npm run dev
   ```

   Verificar en `http://localhost:3000/health`. Debe responder `{"status":"ok"}`.

5. Compilar y ejecutar en producción:

   ```bash
   npm run build
   npm run start
   ```

## Variables de entorno

| Variable | Descripción | Valor por defecto |
|---|---|---|
| `PORT` | Puerto del servidor | `3000` |
| `NODE_ENV` | Entorno de ejecución | `development` |
| `FRONTEND_URL` | Origen permitido por CORS (URL del frontend) | `http://localhost:5173` |

## Scripts

| Comando | Descripción |
|---|---|
| `npm run dev` | Desarrollo con recarga automática |
| `npm run build` | Compila a `dist/` |
| `npm run start` | Corre la versión compilada |
| `npm run lint` | Revisa el código con ESLint |
| `npm run format` | Formatea el código con Prettier |

## Flujo de trabajo

- `main`: rama estable. Protegida, solo se modifica por