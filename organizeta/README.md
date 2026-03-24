# OrganiZeta

Base profesional para un clon avanzado de gestión visual de trabajo:

- Autenticación con Firebase (email, Google, GitHub).
- Tableros, listas y tarjetas con persistencia en Firestore.
- Arquitectura modular por features.
- Base para editor visual de tarjetas estilo Photoshop (toolbar + canvas).

## Scripts

```bash
npm install
npm run dev
npm run build
npm run lint
```

## Variables de entorno

1. Copia `.env.example` como `.env`.
2. Completa tus credenciales de Firebase.

## Estructura

- `src/app`: configuración global (store, firebase).
- `src/features`: módulos de negocio (auth, boards, lists, cards).
- `src/services`: acceso a Firebase.
- `src/pages`: rutas de aplicación.
- `src/components`: componentes reutilizables.
