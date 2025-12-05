export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-gray-300 mb-2">
            © {currentYear} Mi Portafolio @AdrianRodriguez. Todos los derechos reservados.
          </p>
          <p className="text-gray-400 text-sm">
            Hecho con React y Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
