import React, { useContext } from "react";
import img from "../assets/elephant1.png";
import { ThemeContext } from "../context/useContext";
import { Sparkles, Star } from "lucide-react";

const Hero = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      className={`relative overflow-hidden w-full min-h-[calc(100vh-80px)] transition-all duration-300 ${
        theme === "light" ? "bg-white" : "bg-black"
      }`}
    >
      {/* Background Blur */}
      <div
        className={`absolute top-20 left-10 w-72 h-72 rounded-full blur-[120px] opacity-30 ${
          theme === "light" ? "bg-red-300" : "bg-blue-500"
        }`}
      ></div>

      <div
        className={`absolute bottom-0 right-0 w-80 h-80 rounded-full blur-[150px] opacity-20 ${
          theme === "light" ? "bg-pink-300" : "bg-cyan-500"
        }`}
      ></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 min-h-[calc(100vh-80px)] flex flex-col-reverse lg:flex-row items-center justify-between">

        {/* Left Side */}
        <div className="w-full lg:w-1/2 py-10 text-center lg:text-left">

          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 ${
              theme === "light"
                ? "bg-red-50 text-[#F0383E]"
                : "bg-slate-900 text-blue-400"
            }`}
          >
            <Sparkles size={18} />
            <span className="font-medium">
              AI Powered Web Development
            </span>
          </div>

          <h1
            className={`text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight ${
              theme === "light" ? "text-gray-900" : "text-white"
            }`}
          >
            Build Your
            <br />

            <span
              className={`bg-gradient-to-r bg-clip-text text-transparent ${
                theme === "light"
                  ? "from-[#F0383E] to-orange-500"
                  : "from-blue-400 to-cyan-400"
              }`}
            >
              Dream Website
            </span>

            <br />
            With AI
          </h1>

          <p
            className={`mt-6 text-lg leading-8 max-w-xl ${
              theme === "light"
                ? "text-gray-600"
                : "text-gray-300"
            }`}
          >
            We create stunning websites, modern web applications, and
            AI-powered digital experiences that help businesses grow
            faster than ever before.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 mt-10 justify-center lg:justify-start">
            <button
              className={`px-8 py-4 rounded-xl font-semibold shadow-lg transition hover:scale-105 text-white ${
                theme === "light"
                  ? "bg-[#F0383E]"
                  : "bg-blue-500"
              }`}
            >
              Get Started
            </button>

            <button
              className={`px-8 py-4 rounded-xl border font-semibold transition hover:scale-105 ${
                theme === "light"
                  ? "border-[#F0383E] text-[#F0383E] hover:bg-[#F0383E] hover:text-white"
                  : "border-blue-400 text-blue-400 hover:bg-blue-500 hover:text-white"
              }`}
            >
              View Projects
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-10 mt-12 justify-center lg:justify-start flex-wrap">

            <div>
              <h2
                className={`text-3xl font-bold ${
                  theme === "light"
                    ? "text-black"
                    : "text-white"
                }`}
              >
                120+
              </h2>
              <p className="text-gray-500">Projects</p>
            </div>

            <div>
              <h2
                className={`text-3xl font-bold ${
                  theme === "light"
                    ? "text-black"
                    : "text-white"
                }`}
              >
                50+
              </h2>
              <p className="text-gray-500">Clients</p>
            </div>

            <div>
              <h2
                className={`flex items-center gap-1 text-3xl font-bold ${
                  theme === "light"
                    ? "text-black"
                    : "text-white"
                }`}
              >
                4.9 <Star size={22} fill="gold" color="gold" />
              </h2>
              <p className="text-gray-500">Rating</p>
            </div>

          </div>

        </div>

        {/* Right Side */}
       <div className="w-full lg:w-1/2 flex justify-center items-center py-10">
  <img
    src={img}
    alt="Hero"
    className="w-full max-w-xl drop-shadow-2xl object-contain"
  />
</div>

      </div>
    </section>
  );
};

export default Hero;