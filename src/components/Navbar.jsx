// src/components/Navbar.jsx
const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full z-10 backdrop-blur-sm bg-white/90">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-xl font-bold text-blue-900">GUN | KITINUN</h1>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="text-gray-700 hover:text-red-600 transition-colors"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-gray-700 hover:text-red-600 transition-colors"
            >
              Skills
            </a>
            <a
              href="#experience"
              className="text-gray-700 hover:text-red-600 transition-colors"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="text-gray-700 hover:text-red-600 transition-colors"
            >
              Projects
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
