export default function SobreMi() {
  return (
    <section id="sobre-mi" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Sobre Mí
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-48 h-48 bg-gray-300 rounded-full flex items-center justify-center text-6xl">
              👨‍💻
            </div>
            <div className="flex-1">
              <p className="text-gray-600 text-lg mb-4">
                Soy un desarrollador web junior apasionado por la tecnología y el aprendizaje continuo.
                Me encanta enfrentar nuevos desafíos y crear soluciones creativas.
              </p>
              <p className="text-gray-600 text-lg mb-4">
                Actualmente estoy enfocado en mejorar mis habilidades en React, JavaScript y desarrollo web moderno.
              </p>
              <p className="text-gray-600 text-lg">
                Siempre estoy buscando oportunidades para crecer como profesional y colaborar en proyectos interesantes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
