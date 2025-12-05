export default function Hero() {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
            ¡Hola! Soy <span className="text-blue-600">Adrian Rodriguez</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Desarrollador Web Junior | Estudiante de la carrera de Ingeniería en Sistemas en la universidad U.A.T.F
          </p>
          <p className="text-lg text-gray-500 mb-8">
            Apasionado por crear experiencias web increíbles y aprender nuevas tecnologías
          </p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Ver Proyectos
            </button>
            <button
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition"
            >
              Contactar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
