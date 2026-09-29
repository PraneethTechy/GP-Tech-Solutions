import React, { useContext } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { ThemeContext } from "../context/useContext";

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <footer
      id="footer"
      className={`pt-20 pb-8 transition-all duration-300 ${
        theme === "light"
          ? "bg-gray-900 text-white"
          : "bg-black text-gray-200 border-t border-blue-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          <div>
            <div className="flex items-center gap-3 mb-5">

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
                <h2 className="text-2xl font-bold">Tech</h2>

                <p
                  className={`text-xs tracking-[2px] uppercase ${
                    theme === "light"
                      ? "text-gray-400"
                      : "text-blue-300"
                  }`}
                >
                  Solutions
                </p>
              </div>
            </div>

            <p
              className={`leading-7 ${
                theme === "light"
                  ? "text-gray-400"
                  : "text-gray-400"
              }`}
            >
              We build modern websites, AI-powered applications, and
              scalable digital solutions that help businesses grow
              faster in the digital world.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul
              className={`space-y-3 ${
                theme === "light"
                  ? "text-gray-400"
                  : "text-gray-300"
              }`}
            >
              <li>
                <a
                  href="#home"
                  className={`transition ${
                    theme === "light"
                      ? "hover:text-white"
                      : "hover:text-blue-400"
                  }`}
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className={`transition ${
                    theme === "light"
                      ? "hover:text-white"
                      : "hover:text-blue-400"
                  }`}
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  href="#how-it-works"
                  className={`transition ${
                    theme === "light"
                      ? "hover:text-white"
                      : "hover:text-blue-400"
                  }`}
                >
                  Process
                </a>
              </li>

              <li>
                <a
                  href="#why-choose-us"
                  className={`transition ${
                    theme === "light"
                      ? "hover:text-white"
                      : "hover:text-blue-400"
                  }`}
                >
                  Why Choose Us
                </a>
              </li>

              <li>
                <a
                  href="#testimonials"
                  className={`transition ${
                    theme === "light"
                      ? "hover:text-white"
                      : "hover:text-blue-400"
                  }`}
                >
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-5">
              Contact
            </h3>

            <div className="space-y-5">

              <div className="flex items-center gap-3">
                <Mail
                  className={
                    theme === "light"
                      ? "text-[#F0383E]"
                      : "text-blue-400"
                  }
                />
                <span className="text-gray-400">
                  hello@gptech.com
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone
                  className={
                    theme === "light"
                      ? "text-[#F0383E]"
                      : "text-blue-400"
                  }
                />
                <span className="text-gray-400">
                  +91 98765 43210
                </span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin
                  className={
                    theme === "light"
                      ? "text-[#F0383E]"
                      : "text-blue-400"
                  }
                />
                <span className="text-gray-400">
                  Bengaluru, India
                </span>
              </div>

            </div>
          </div>

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Follow Us
            </h3>

            <div className="flex gap-4">

              {[
                <FaFacebookF />,
                <FaInstagram />,
                <FaLinkedinIn />,
                <FaGithub />,
              ].map((icon, index) => (
                <div
                  key={index}
                  className={`w-11 h-11 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 ${
                    theme === "light"
                      ? "bg-[#F0383E] hover:bg-red-600"
                      : "bg-blue-500 hover:bg-blue-600"
                  }`}
                >
                  {icon}
                </div>
              ))}

            </div>

            <p className="text-gray-400 mt-6 leading-7">
              Stay connected with us on social media for updates,
              new projects, and technology insights.
            </p>

          </div>
        </div>


        <div
          className={`mt-16 pt-6 border-t flex flex-col md:flex-row justify-between items-center ${
            theme === "light"
              ? "border-gray-700 text-gray-400"
              : "border-blue-900 text-gray-400"
          }`}
        >
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} GP Tech. All rights reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">

            <a
              href="#"
              className={`transition ${
                theme === "light"
                  ? "hover:text-white"
                  : "hover:text-blue-400"
              }`}
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className={`transition ${
                theme === "light"
                  ? "hover:text-white"
                  : "hover:text-blue-400"
              }`}
            >
              Terms & Conditions
            </a>

          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;