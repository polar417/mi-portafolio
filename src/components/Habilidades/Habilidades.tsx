export default function Habilidades() {
  const habilidades = [
    { id: "html", nombre: "HTML", nivel: 80 },
    { id: "css", nombre: "CSS", nivel: 75 },
    { id: "javascript", nombre: "JavaScript", nivel: 70 },
    { id: "react", nombre: "React", nivel: 65 },
    { id: "git", nombre: "Git", nivel: 60 },
    { id: "tailwind", nombre: "Tailwind CSS", nivel: 70 }
  ];

  return (
    <section id="habilidades" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Habilidades
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {habilidades.map((habilidad) => (
              <div key={habilidad.id} className="mb-4">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700 font-medium">{habilidad.nombre}</span>
                  <span className="text-gray-500">{habilidad.nivel}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-blue-600 h-3 rounded-full transition-all duration-1000"
                    style={{ width: `${habilidad.nivel}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
