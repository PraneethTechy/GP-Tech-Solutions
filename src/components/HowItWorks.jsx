import React, { useContext } from "react";
import {
  ClipboardList,
  Palette,
  Code2,
  Rocket,
} from "lucide-react";
import { ThemeContext } from "../context/useContext";

const steps = [
  {
    icon: <ClipboardList size={40} />,
    title: "Collect Requirements",
    desc: "We understand your business goals, target audience, and project requirements before starting development.",
  },
  {
    icon: <Palette size={40} />,
    title: "Design & Planning",
    desc: "Our team creates clean UI/UX designs and prepares a structured development plan for your project.",
  },
  {
    icon: <Code2 size={40} />,
    title: "Development",
    desc: "We build fast, secure, and responsive websites using modern technologies and best coding practices.",
  },
  {
    icon: <Rocket size={40} />,
    title: "Launch & Support",
    desc: "After testing, we deploy your project and provide continuous maintenance and technical support.",
  },
];

const HowItWorks = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section id="how-it-works"
      className={`py-24 transition-all duration-300 ${
        theme === "light" ? "bg-white" : "bg-black"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p
            className={`uppercase tracking-[4px] font-semibold ${
              theme === "light"
                ? "text-[#F0383E]"
                : "text-blue-400"
            }`}
          >
            How It Works
          </p>

          <h2
            className={`text-4xl md:text-5xl font-bold mt-4 ${
              theme === "light"
                ? "text-gray-900"
                : "text-white"
            }`}
          >
            Our Simple Working Process
          </h2>

          <p
            className={`max-w-2xl mx-auto mt-5 text-lg ${
              theme === "light"
                ? "text-gray-600"
                : "text-gray-400"
            }`}
          >
            From understanding your idea to launching your product,
            we follow a clear and transparent development process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2 ${
                theme === "light"
                  ? "bg-gray-50 shadow-md"
                  : "bg-[#171717] border border-gray-800"
              }`}
            >
              <div
                className={`absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  theme === "light"
                    ? "bg-[#F0383E] text-white"
                    : "bg-blue-500 text-white"
                }`}
              >
                {index + 1}
              </div>

              <div
                className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 ${
                  theme === "light"
                    ? "bg-red-100 text-[#F0383E]"
                    : "bg-blue-900/30 text-blue-400"
                }`}
              >
                {step.icon}
              </div>

              <h3
                className={`text-2xl font-bold mb-4 ${
                  theme === "light"
                    ? "text-gray-900"
                    : "text-white"
                }`}
              >
                {step.title}
              </h3>

              <p
                className={`leading-7 ${
                  theme === "light"
                    ? "text-gray-600"
                    : "text-gray-400"
                }`}
              >
                {step.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;