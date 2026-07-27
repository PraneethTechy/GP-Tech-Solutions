import React, { useContext } from "react";
import { Star } from "lucide-react";
import { ThemeContext } from "../context/useContext";

const testimonials = [
  {
    name: "John Anderson",
    role: "CEO, TechNova",
    review:
      "GP Tech delivered exactly what we needed. The website is fast, modern, and exceeded our expectations.",
  },
  {
    name: "Sarah Williams",
    role: "Founder, Bright Solutions",
    review:
      "The team was professional throughout the project. Communication was excellent and the final product was amazing.",
  },
  {
    name: "Michael Brown",
    role: "Marketing Manager",
    review:
      "Our business saw a significant increase in customer engagement after launching the new website built by GP Tech.",
  },
   {
    name: "Sarah Williams",
    role: "Founder, Bright Solutions",
    review:
      "The team was professional throughout the project. Communication was excellent and the final product was amazing.",
  }
  
];

const Testimonials = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section id="testimonials"
      className={`py-24 ${
        theme === "light" ? "bg-white" : "bg-[#111111]"
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
            Testimonials
          </p>

          <h2
            className={`text-4xl md:text-5xl font-bold mt-4 ${
              theme === "light"
                ? "text-gray-900"
                : "text-white"
            }`}
          >
            What Our Clients Say
          </h2>

          <p
            className={`mt-5 max-w-2xl mx-auto text-lg ${
              theme === "light"
                ? "text-gray-600"
                : "text-gray-400"
            }`}
          >
            We take pride in building long-term relationships with our
            clients through quality work and exceptional service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 transition duration-300 hover:-translate-y-2 ${
                theme === "light"
                  ? "bg-white shadow-md"
                  : "bg-[#1A1A1A] border border-gray-800"
              }`}
            >
              <div className="flex gap-1 text-yellow-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              <p
                className={`leading-7 italic ${
                  theme === "light"
                    ? "text-gray-600"
                    : "text-gray-400"
                }`}
              >
                "{item.review}"
              </p>

              <div className="flex items-center gap-4 mt-8">

                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg ${
                    theme === "light"
                      ? "bg-[#F0383E]"
                      : "bg-blue-500"
                  }`}
                >
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h3
                    className={`font-bold text-lg ${
                      theme === "light"
                        ? "text-gray-900"
                        : "text-white"
                    }`}
                  >
                    {item.name}
                  </h3>

                  <p
                    className={`text-sm ${
                      theme === "light"
                        ? "text-gray-500"
                        : "text-gray-400"
                    }`}
                  >
                    {item.role}
                  </p>
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Testimonials;