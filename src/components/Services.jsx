import React, { useContext } from "react";
import {
  Code2,
  Smartphone,
  Globe,
  BrainCircuit,
  Rocket,
  ShieldCheck,
} from "lucide-react";
import { ThemeContext } from "../context/useContext";

const services = [
  {
    icon: <Code2 size={40} />,
    title: "Web Development",
    desc: "Modern, responsive websites built with the latest technologies."
  },
  {
    icon: <Smartphone size={40} />,
    title: "App Development",
    desc: "Cross-platform mobile applications with beautiful user interfaces."
  },
  {
    icon: <BrainCircuit size={40} />,
    title: "AI Solutions",
    desc: "Integrate AI into your business to automate and improve productivity."
  },
  {
    icon: <Globe size={40} />,
    title: "Digital Presence",
    desc: "Build a strong online identity with SEO-friendly websites."
  },
  {
    icon: <Rocket size={40} />,
    title: "Performance",
    desc: "Lightning-fast applications optimized for speed and scalability."
  },
  {
    icon: <ShieldCheck size={40} />,
    title: "Security",
    desc: "Secure applications with modern authentication and best practices."
  },
];

const Services = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section id="services"
      className={`py-24 transition-all duration-300 ${
        theme === "light" ? "bg-white" : "bg-[#111111]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p
            className={`font-semibold uppercase tracking-widest ${
              theme === "light"
                ? "text-[#F0383E]"
                : "text-blue-400"
            }`}
          >
            Our Services
          </p>

          <h2
            className={`text-4xl md:text-5xl font-bold mt-4 ${
              theme === "light"
                ? "text-gray-900"
                : "text-white"
            }`}
          >
            Everything You Need
          </h2>

          <p
            className={`max-w-2xl mx-auto mt-5 text-lg ${
              theme === "light"
                ? "text-gray-600"
                : "text-gray-400"
            }`}
          >
            We provide end-to-end digital solutions that help businesses
            launch, grow, and succeed in the modern world.
          </p>

        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                theme === "light"
                  ? "bg-white shadow-md"
                  : "bg-[#1B1B1B] border border-gray-800"
              }`}
            >
              <div
                className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${
                  theme === "light"
                    ? "bg-red-100 text-[#F0383E]"
                    : "bg-blue-900/30 text-blue-400"
                }`}
              >
                {service.icon}
              </div>

              <h3
                className={`text-2xl font-bold mb-3 ${
                  theme === "light"
                    ? "text-gray-900"
                    : "text-white"
                }`}
              >
                {service.title}
              </h3>

              <p
                className={`leading-7 ${
                  theme === "light"
                    ? "text-gray-600"
                    : "text-gray-400"
                }`}
              >
                {service.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Services;