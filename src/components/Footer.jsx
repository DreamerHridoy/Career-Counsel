import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between">
          {/* Brand Section */}
          <div className="w-full sm:w-1/2 lg:w-1/3 mb-6">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Build Your Career
            </h2>
            <p className="text-gray-400">
              Empowering individuals to take charge of their career paths with
              expert guidance, resources, and inspiration.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="w-full sm:w-1/2 lg:w-1/3 mb-6">
            <h3 className="text-xl font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="w-full sm:w-1/2 lg:w-1/3 mb-6">
            <h3 className="text-xl font-semibold text-white mb-4">
              Contact Us
            </h3>
            <p className="text-gray-400">Email: support@buildyourcareer.com</p>
            <p className="text-gray-400">Phone: +123 456 7890</p>
            <div className="flex space-x-4 mt-4">
              {/* Social Media Icons */}
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Build Your Career. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
