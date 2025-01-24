import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-navy-blue p-4 fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-white">
          SCI
        </a>

        {/* Desktop Navigation */}
        <nav>
          <ul className="flex space-x-4 max-sm:hidden">
            <li>
              <a href="/" className="hover:text-orange text-white">
                Inicio
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-orange text-white">
                Servicios
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-orange text-white">
                ¿Quiénes somos?
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-orange text-white">
                Contacto
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Navigation */}
        <div className="relative sm:hidden">
          <button
            className="focus:outline-none"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <img src="/icons/menu.svg" alt="menu icon" className="w-6 h-6" />
          </button>

          {/* Overlay */}
          {menuOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={() => setMenuOpen(false)} // Close menu when clicking on the overlay
            ></div>
          )}

          {/* Sliding Menu */}
          <div
            className={`fixed top-0 left-0 h-full bg-navy-blue text-white z-50 shadow-lg flex transition-transform duration-300 ${
              menuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
            style={{ width: "100%" }} // Adjust the width as needed
          >
            
            <div className="w-3/5 h-full bg-royal-blue p-5">
              <ul className="space-y-6 mt-4">
              <li>
                <a
                  href="/"
                  className="block hover:text-orange text-xl"
                  onClick={() => setMenuOpen(false)}
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="block hover:text-orange text-xl"
                  onClick={() => setMenuOpen(false)}
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="block hover:text-orange text-xl"
                  onClick={() => setMenuOpen(false)}
                >
                  ¿Quiénes somos?
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="block hover:text-orange text-xl"
                  onClick={() => setMenuOpen(false)}
                >
                  Contacto
                </a>
              </li>
            </ul>
            </div>
            <div className=" w-2/5 h-full flex items-center justify-between"
              onClick={() => setMenuOpen(false)}
            >
              <button
              className="absolute top-4 right-4 text-white hover:text-orange text-3xl"
              
            >
              ✕
            </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
