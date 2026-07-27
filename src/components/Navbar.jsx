import React, { useContext, useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { ThemeContext } from "../context/useContext";

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Process", href: "#how-it-works" },
  { name: "Why Us", href: "#why-choose-us" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#footer" },
];

  return (
    <>
      <nav
        className={`sticky top-0 z-50 w-full h-20 backdrop-blur-lg transition-all duration-300 ${
          theme === "light"
            ? "bg-white/90 shadow-sm"
            : "bg-black/90 border-b border-gray-800"
        }`}
      >
        <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-6">

          <a href="#" className="flex items-center gap-3">
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl ${
                theme === "light"
                  ? "bg-[#F0383E]"
                  : "bg-blue-500"
              }`}
            >
              GP
            </div>

            <div>
              <h1
                className={`text-2xl font-bold leading-none ${
                  theme === "light"
                    ? "text-gray-900"
                    : "text-white"
                }`}
              >
                Tech
              </h1>

              <p
                className={`text-xs tracking-[3px] uppercase ${
                  theme === "light"
                    ? "text-gray-500"
                    : "text-gray-400"
                }`}
              >
                Solutions
              </p>
            </div>
          </a>

          {/* Desktop Menu */}
          <ul
            className={`hidden lg:flex items-center gap-8 font-semibold ${
              theme === "light"
                ? "text-gray-700"
                : "text-gray-200"
            }`}
          >
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
  href={link.href}
  className={`relative transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:transition-all after:duration-300 hover:after:w-full ${
    theme === "light"
      ? "hover:text-[#F0383E] after:bg-[#F0383E]"
      : "hover:text-blue-500 after:bg-blue-500"
  }`}
>
  {link.name}
</a>
              </li>
            ))}
          </ul>

          {/* Desktop Theme Toggle */}
          <div className="hidden lg:block">
            <button
              onClick={toggleTheme}
              className={`relative w-16 h-8 rounded-full transition ${
                theme === "light"
                  ? "bg-yellow-400"
                  : "bg-slate-700"
              }`}
            >
              <div
                className={`absolute top-1 w-6 h-6 rounded-full bg-white flex items-center justify-center transition-all ${
                  theme === "light"
                    ? "left-1"
                    : "left-9"
                }`}
              >
                {theme === "light" ? (
                  <Sun className="w-4 h-4 text-yellow-500" />
                ) : (
                  <Moon className="w-4 h-4 text-slate-700" />
                )}
              </div>
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className={`lg:hidden ${
              theme === "light"
                ? "text-black"
                : "text-white"
            }`}
          >
            <Menu size={30} />
          </button>
        </div>
      </nav>

      {/* Overlay */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/50 z-40"
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-screen w-72 z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } ${
          theme === "light"
            ? "bg-white"
            : "bg-[#111111]"
        }`}
      >
        <div className="flex justify-between items-center p-6">

          <div className="flex items-center gap-3">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${
                theme === "light"
                  ? "bg-[#F0383E]"
                  : "bg-blue-500"
              }`}
            >
              GP
            </div>

            <span
              className={`text-xl font-bold ${
                theme === "light"
                  ? "text-black"
                  : "text-white"
              }`}
            >
              Tech
            </span>
          </div>

          <button
            onClick={() => setMenuOpen(false)}
            className={
              theme === "light"
                ? "text-black"
                : "text-white"
            }
          >
            <X size={28} />
          </button>
        </div>

        <ul className="mt-10 flex flex-col gap-6 px-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-lg font-medium ${
                  theme === "light"
                    ? "text-gray-700"
                    : "text-gray-200"
                } hover:text-[#F0383E] transition`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Theme Toggle */}
        <div className="mt-10 px-8">
          <button
            onClick={toggleTheme}
            className={`relative w-16 h-8 rounded-full transition ${
              theme === "light"
                ? "bg-yellow-400"
                : "bg-slate-700"
            }`}
          >
            <div
              className={`absolute top-1 w-6 h-6 bg-white rounded-full flex items-center justify-center transition-all ${
                theme === "light"
                  ? "left-1"
                  : "left-9"
              }`}
            >
              {theme === "light" ? (
                <Sun className="w-4 h-4 text-yellow-500" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;