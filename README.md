🌐 Portafolio Web - Desarrollador Junior
Un portafolio web personal desarrollado con React, TypeScript y Tailwind CSS como parte de una práctica de desarrollo Scrum.

📋 Descripción del Proyecto
Este portafolio web fue desarrollado siguiendo metodología Scrum con un sprint de 14 días. Es una aplicación de una sola página (SPA) que presenta información profesional, proyectos y habilidades de un desarrollador web junior.

🚀 Tecnologías Utilizadas
React 18 - Biblioteca de JavaScript para interfaces de usuario
TypeScript - Superset de JavaScript con tipado estático
Vite - Herramienta de construcción y desarrollo rápido
Tailwind CSS - Framework de CSS utilitario
Bun - Runtime y package manager de JavaScript
✨ Características Principales
✅ Diseño 100% responsive (móvil, tablet y desktop)
✅ Navegación suave entre secciones
✅ Secciones completas: Hero, Sobre Mí, Proyectos, Habilidades, Contacto
✅ Formulario de contacto con validación
✅ Tarjetas de proyectos con tecnologías
✅ Barras de progreso para habilidades
✅ Interfaz limpia y moderna
✅ Código TypeScript type-safe
📦 Instalación
Requisitos previos
Node.js 18+ o Bun instalado
Git
Pasos de instalación
# Clonar el repositorio

git clone https://github.com/tu-usuario/portafolio-junior.git


# Navegar al directorio del proyecto

cd portafolio-junior


# Instalar dependencias

bun install

# o

npm install


# Iniciar el servidor de desarrollo

bun run dev

# o

npm run dev
El proyecto estará disponible en http://localhost:5173

🎯 Uso
Scripts disponibles
# Desarrollo - Inicia el servidor de desarrollo

bun run dev


# Build - Genera la versión de producción

bun run build


# Preview - Previsualiza la build de producción

bun run preview


# Lint - Ejecuta el linter

bun run lint
📁 Estructura del Proyecto
portafolio-junior/
├── public/
│   └── _redirects          # Configuración de Netlify
├── src/
│   ├── components/         # Componentes de React
│   │   ├── Header.tsx      # Navegación principal
│   │   ├── Hero.tsx        # Sección de presentación
│   │   ├── SobreMi.tsx     # Información personal
│   │   ├── Proyectos.tsx   # Portafolio de proyectos
│   │   ├── Habilidades.tsx # Skills técnicas
│   │   ├── Contacto.tsx    # Formulario de contacto
│   │   └── Footer.tsx      # Pie de página
│   ├── App.tsx             # Componente principal
│   ├── main.tsx            # Punto de entrada
│   └── index.css           # Estilos globales
├── .gitignore
├── package.json
├── tailwind.config.js      # Configuración de Tailwind
├── vite.config.ts          # Configuración de Vite
└── README.md
🎨 Secciones del Portafolio
1. Header y Navegación
Navegación fija (sticky)
Enlaces a todas las secciones
Scroll suave
2. Hero / Presentación
Presentación impactante
Botones de llamada a la acción
Diseño full-screen
3. Sobre Mí
Avatar/emoji representativo
Biografía profesional
Motivaciones y objetivos
4. Proyectos
3 proyectos de ejemplo
Tarjetas con descripción
Tecnologías utilizadas
Enlaces a demos/repositorios
5. Habilidades
6 habilidades técnicas
Barras de progreso visuales
Niveles de dominio
Grid responsive
6. Contacto
Formulario funcional
Validación de campos
Enlaces a redes sociales
Confirmación de envío
7. Footer
Información de copyright
Tecnologías utilizadas
🛠️ Personalización
Para personalizar el portafolio con tu información:

Información personal - Edita src/components/Hero.tsx y src/components/SobreMi.tsx
Proyectos - Modifica el array de proyectos en src/components/Proyectos.tsx
Habilidades - Actualiza el array de habilidades en src/components/Habilidades.tsx
Redes sociales - Cambia los enlaces en src/components/Contacto.tsx
📚 Documentación de la Práctica
Este proyecto incluye documentación completa del proceso de desarrollo Scrum:

Product Backlog - Historias de usuario priorizadas
Sprint Planning - Planificación del sprint de 14 días
Daily Standup Log - Registro diario de progreso
Definition of Done - Criterios de aceptación
Sprint Review - Revisión final del sprint
Sprint Retrospective - Análisis y mejoras
Ver archivos en .same/ para más detalles.

📊 Metodología Scrum
Sprint: 14 días Historias de usuario: 8 completadas Puntos de historia: 39/39 completados Velocidad del sprint: 39 puntos Tasa de completitud: 100%

🔄 Control de Versiones
Este proyecto utiliza Git con las siguientes convenciones:

Tipos de commits
feat: Nueva funcionalidad
fix: Corrección de bugs
style: Cambios de estilos
refactor: Refactorización de código
docs: Cambios en documentación
Estrategia de branches
main - Rama principal
feature/* - Ramas de funcionalidades
🚀 Deployment
Este proyecto está configurado para desplegarse en Netlify:

# Build de producción

bun run build


# La carpeta dist/ contendrá los archivos estáticos
👨‍💻 Autor
Tu Nombre

Desarrollador Web Junior
GitHub: @tu-usuario
LinkedIn: Tu Perfil
📝 Licencia
Este proyecto es de código abierto y está disponible bajo la licencia MIT.

🎓 Aprendizajes
Durante el desarrollo de este proyecto se practicaron:

✅ Planificación con metodología Scrum
✅ Desarrollo con React y TypeScript
✅ Diseño responsive con Tailwind CSS
✅ Control de versiones con Git
✅ Componentización y reutilización de código
✅ Buenas prácticas de desarrollo web
🔮 Próximas Mejoras
 Implementar backend para formulario de contacto (EmailJS)
 Agregar modo oscuro (dark mode)
 Incluir animaciones avanzadas
 Agregar más proyectos reales
 Implementar tests unitarios
 Mejorar SEO y accesibilidad
 Optimizar imágenes y rendimiento
📞 Contacto
Si tienes preguntas o sugerencias sobre este proyecto, no dudes en contactarme a través del formulario de contacto en el portafolio o por las redes sociales mencionadas.

Desarrollado con ❤️ como parte de una práctica de desarrollo web