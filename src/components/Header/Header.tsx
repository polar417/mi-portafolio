export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Mi Portafolio</h1>
          <ul className="hidden md:flex space-x-6">
            <li>
              <button onClick={() => scrollToSection('inicio')} className="text-gray-600 hover:text-gray-900">
                Inicio
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('sobre-mi')} className="text-gray-600 hover:text-gray-900">
                Sobre Mí
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('proyectos')} className="text-gray-600 hover:text-gray-900">
                Proyectos
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('habilidades')} className="text-gray-600 hover:text-gray-900">
                Habilidades
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('contacto')} className="text-gray-600 hover:text-gray-900">
                Contacto
              </button>
            </li>
          </ul>

          <div className="md:hidden">
            <button className="text-gray-600">☰</button>
          </div>
        </div>
      </nav>
    </header>
  );
}
