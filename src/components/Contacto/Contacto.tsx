export default function Contacto() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('¡Gracias por tu mensaje! (Este es un formulario de demostración)');
  };

  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Contacto
        </h2>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8">
            <div className="mb-6">
              <label htmlFor="nombre" className="block text-gray-700 font-medium mb-2">
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Tu nombre"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="tu@email.com"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="mensaje" className="block text-gray-700 font-medium mb-2">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Tu mensaje..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-medium"
            >
              Enviar Mensaje
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">O encuéntrame en:</p>
            <div className="flex justify-center gap-6">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition">
                GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition">
                LinkedIn
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition">
                X
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
