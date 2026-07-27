import React, { useContext } from "react";
import { ThemeContext } from "../context/useContext";

const companies = [
  "Google",
  "Microsoft",
  "Amazon",
  "Meta",
  "Netflix",
];

const TrustedBy = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section 
      className={`py-16 ${
        theme === "light" ? "bg-white" : "bg-[#111111]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">

        <p
          className={`text-center uppercase tracking-[4px] font-semibold ${
            theme === "light"
              ? "text-[#F0383E]"
              : "text-blue-400"
          }`}
        >
          Trusted By
        </p>

        <h2
          className={`text-center text-4xl font-bold mt-4 ${
            theme === "light"
              ? "text-gray-900"
              : "text-white"
          }`}
        >
          Companies That Believe In Us
        </h2>

        <div className="flex flex-wrap justify-center gap-6 mt-14">
  {companies.map((company, index) => (
    <div
      key={index}
      className={`px-10 py-4 rounded-full text-lg md:text-xl font-semibold transition-all duration-300 cursor-pointer hover:-translate-y-1 ${
        theme === "light"
          ? "bg-gray-100 text-gray-800 shadow-sm hover:shadow-lg hover:bg-[#F0383E] hover:text-white"
          : "bg-[#1A1A1A] text-gray-300 border border-gray-700 hover:bg-blue-500 hover:text-white hover:border-blue-500"
      }`}
    >
      {company}
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default TrustedBy;