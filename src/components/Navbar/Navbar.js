import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="fixed w-full z-10">
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <div className="text-lg font-semibold">
              <button className="text-gray text-3xl">
                Pran<span className="text-orange">a</span>v
              </button>
            </div>
            <div className="hidden md:flex space-x-12">
              {[
                { label: "Home", href: "#home" },
                { label: "About Me", href: "#about" },
                { label: "Expertise", href: "#expertise" },
                { label: "My Projects", href: "#projects" },
                { label: "Get In Touch", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`font-medium text-gray text-shadow cursor-pointer ${
                    activeLink === link.href ? "border-b-2 border-orange" : ""
                  }`}
                  onClick={() => setActiveLink(link.href)}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="fixed top-5 right-4 z-40 md:hidden">
              <button
                onClick={toggleMenu}
                className="flex flex-col items-center justify-center relative w-6 h-6"
              >
                <span
                  className={`absolute w-5 h-0.5 bg-gray rounded-sm transition-all duration-300 ${
                    menuOpen
                      ? "transform rotate-45"
                      : "transform -translate-y-1.5"
                  }`}
                ></span>
                <span
                  className={`absolute w-5 h-0.5 bg-gray rounded-sm transition-opacity duration-300 ${
                    menuOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`absolute w-5 h-0.5 bg-gray rounded-sm transition-all duration-300 ${
                    menuOpen
                      ? "transform -rotate-45"
                      : "transform translate-y-1.5"
                  }`}
                ></span>
              </button>
            </div>
          </nav>
        </div>
      </div>
      {menuOpen && (
        <>
          <div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-md z-0"
            onClick={toggleMenu}
          ></div>
          <div className="absolute top-0 right-0 h-screen w-64 bg-white transform transition-transform ease-in-out duration-300 translate-x-0 z-20 shadow-lg">
            <div className="pt-8 pb-4 px-6 mb-5 mt-4">
              <span className="text-xl font-semibold text-gray"></span>
            </div>
            {[
              { label: "Home", href: "#home" },
              { label: "About Me", href: "#about" },
              { label: "Expertise", href: "#expertise" },
              { label: "My Projects", href: "#projects" },
              { label: "Get In Touch", href: "#contact" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => {
                  setActiveLink(link.href);
                  toggleMenu();
                }}
                className={`block py-2 px-6 font-medium text-gray hover:border-l-4 hover:border-orange ${
                  activeLink === link.href ? "border-l-4 border-orange" : ""
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Navbar;
