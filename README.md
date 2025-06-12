# Juego de Adivinanza con React y Supabase

Este proyecto es un juego de adivinanza de números desarrollado con React y Supabase. Los usuarios pueden registrarse, iniciar sesión y jugar a adivinar un número entre 1 y 7.

## 🎮 Características

- **Autenticación de Usuarios**
  - Registro de nuevos usuarios
  - Inicio de sesión
  - Protección de rutas

- **Juego de Adivinanza**
  - Generación aleatoria de números entre 1 y 7
  - Sistema de pistas cada 3 intentos
  - Contador de intentos
  - Interfaz intuitiva y responsive

- **Características del Juego**
  - Pistas automáticas cada 3 intentos incorrectos
  - Registro del último intento
  - Mensajes de feedback claros
  - Diseño moderno y amigable

## 🚀 Tecnologías Utilizadas

- React
- TypeScript
- Supabase (Autenticación)
- Vite
- CSS Moderno

## 📋 Prerrequisitos

- Node.js (versión 18 o superior)
- npm o pnpm
- Cuenta en Supabase

## 🔧 Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/Miqueaslacaze/Tp-supabase.git
cd Tp-supabase
```

2. Instala las dependencias:
```bash
npm install
# o
pnpm install
```

3. Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:
```env
VITE_SUPABASE_URL=tu_url_de_supabase
VITE_SUPABASE_ANON_KEY=tu_clave_anonima_de_supabase
```

4. Inicia el servidor de desarrollo:
```bash
npm run dev
# o
pnpm dev
```

## 🎯 Cómo Jugar

1. **Registro/Inicio de Sesión**
   - Regístrate con tu email y contraseña
   - O inicia sesión si ya tienes una cuenta

2. **Iniciar el Juego**
   - Haz clic en "Iniciar nuevo juego"
   - El sistema generará un número aleatorio entre 1 y 7

3. **Adivinar el Número**
   - Ingresa un número entre 1 y 7
   - Haz clic en "Adivinar"
   - Recibirás feedback sobre tu intento

4. **Sistema de Pistas**
   - Cada 3 intentos incorrectos, recibirás una pista
   - La pista te indicará si el número es mayor o menor que tu último intento

## 🎨 Estructura del Proyecto

```
├── src/
│   ├── components/
│   │   ├── Auth.tsx        # Componente de autenticación
│   │   └── Game.tsx        # Componente del juego
│   ├── lib/
│   │   └── supabaseClient.ts  # Configuración de Supabase
│   ├── App.tsx            # Componente principal
│   └── App.css            # Estilos globales
├── supabase/
│   └── functions/
│       └── generate-number/  # Edge Function para números aleatorios
└── public/                # Archivos estáticos
```

## 🔐 Configuración de Supabase

1. Crea un proyecto en [Supabase](https://supabase.com)
2. Habilita la autenticación por email
3. Copia las credenciales de tu proyecto
4. Configura las variables de entorno en el archivo `.env`

## 🛠️ Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la versión de producción

## 🤝 Contribuir

Las contribuciones son bienvenidas. Para contribuir:

1. Haz fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Haz commit de tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## ✨ Características Futuras

- [ ] Implementación de la Edge Function para generación de números
- [ ] Sistema de puntuación
- [ ] Diferentes niveles de dificultad
- [ ] Estadísticas de juego
- [ ] Modo multijugador

## 📧 Contacto

Miqueas Lacaze - [GitHub](https://github.com/Miqueaslacaze)

Link del Proyecto: [https://github.com/Miqueaslacaze/Tp-supabase](https://github.com/Miqueaslacaze/Tp-supabase)
