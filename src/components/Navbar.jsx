import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100); // Cambia de fondo después de 50px de scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const items = [
    {
      name: "Inicio",
      link: "/"
    },
    {
      name: "Servicios",
      link: "/services"
    },
    {
      name: "¿Quiénes somos?",
      link: "/about"
    },
    {
      name: "Contacto",
      link: "/contact"
    }
  ]

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-royal-blue shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-white">
          SCI
        </a>

        {/* Desktop Navigation */}
        <nav>
          <ul className="hidden sm:flex space-x-6 text-white">
            {items.map(
              (item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    className="hover:text-orange transition"
                  >
                    {item.name}
                  </a>
                </li>
              )
            )}
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
                {items.map(
                  (item, index) => (
                    <li key={index}>
                      <a
                        href={item.link}
                        className="hover:text-orange transition"
                      >
                        {item.name}
                      </a>
                    </li>
                  )
                )}
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
