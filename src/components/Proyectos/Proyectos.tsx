export default function Proyectos() {
  const proyectos = [
    {
      id: "proyecto-1",
      titulo: "Proyecto 1",
      descripcion: "Una aplicación web sencilla creada con React. Incluye funcionalidades básicas de CRUD.",
      tecnologias: ["React", "CSS", "JavaScript"],
      link: "https://github.com"
    },
    {
      id: "proyecto-2",
      titulo: "Proyecto 2",
      descripcion: "Landing page responsive con diseño moderno y animaciones suaves.",
      tecnologias: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com"
    },
    {
      id: "proyecto-3",
      titulo: "Proyecto 3",
      descripcion: "Aplicación de lista de tareas con localStorage para persistencia de datos.",
      tecnologias: ["React", "Tailwind", "LocalStorage"],
      link: "https://github.com"
    }
  ];

  return (
    <section id="proyectos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Mis Proyectos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {proyectos.map((proyecto) => (
            <div key={proyecto.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                {proyecto.titulo}
              </h3>
              <p className="text-gray-600 mb-4">
                {proyecto.descripcion}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {proyecto.tecnologias.map((tech) => (
                  <span key={tech} className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={proyecto.link}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Ver proyecto →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
