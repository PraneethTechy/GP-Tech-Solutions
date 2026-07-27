import React, { useContext } from "react";
import {
  CheckCircle2,
  Clock3,
  Users,
  BadgeCheck,
} from "lucide-react";
import { ThemeContext } from "../context/useContext";

const features = [
  {
    icon: <CheckCircle2 size={38} />,
    title: "High Quality",
    desc: "Every project is built with clean code, modern design, and industry best practices.",
  },
  {
    icon: <Clock3 size={38} />,
    title: "On-Time Delivery",
    desc: "We value your time and ensure every project is delivered as promised.",
  },
  {
    icon: <Users size={38} />,
    title: "Client First",
    desc: "We work closely with clients to understand their goals and build the perfect solution.",
  },
  {
    icon: <BadgeCheck size={38} />,
    title: "Trusted Support",
    desc: "Our team provides continuous support even after your project goes live.",
  },
];

const WhyChooseUs = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section id="why-choose-us"
      className={`py-24 ${
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
            Why Choose Us
          </p>

          <h2
            className={`text-4xl md:text-5xl font-bold mt-4 ${
              theme === "light"
                ? "text-gray-900"
                : "text-white"
            }`}
          >
            We Build Digital Experiences
          </h2>

          <p
            className={`max-w-2xl mx-auto mt-5 text-lg ${
              theme === "light"
                ? "text-gray-600"
                : "text-gray-400"
            }`}
          >
            We combine creativity, technology, and innovation to deliver
            websites that help businesses grow faster.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {features.map((item, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 flex gap-6 transition duration-300 hover:-translate-y-2 ${
                theme === "light"
                  ? "bg-gray-50 shadow-md"
                  : "bg-[#171717] border border-gray-800"
              }`}
            >
              <div
                className={`w-16 h-16 rounded-xl flex items-center justify-center shrink-0 ${
                  theme === "light"
                    ? "bg-red-100 text-[#F0383E]"
                    : "bg-blue-900/30 text-blue-400"
                }`}
              >
                {item.icon}
              </div>

              <div>
                <h3
                  className={`text-2xl font-semibold mb-3 ${
                    theme === "light"
                      ? "text-gray-900"
                      : "text-white"
                  }`}
                >
                  {item.title}
                </h3>

                <p
                  className={`leading-7 ${
                    theme === "light"
                      ? "text-gray-600"
                      : "text-gray-400"
                  }`}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;