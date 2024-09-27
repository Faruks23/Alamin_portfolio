import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-20  border-t border-teal-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between">
          {/* Company Info Section */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
            <h2 className="text-xl font-bold mb-4">About Us</h2>
            <p className="text-sm">
              We are a leading digital marketing agency offering a range of
              services to help your business grow. Contact us for SEO, PPC,
              social media marketing, and more.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6 ml-5">
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-gray-400">
                  Home
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-gray-400">
                  Services
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-gray-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gray-400">
                  Contact
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-gray-400">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Services Section */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
            <h2 className="text-xl font-bold mb-4">Services</h2>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-gray-400">
                  SEO Optimization
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-gray-400">
                  PPC Advertising
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-gray-400">
                  Social Media Marketing
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-gray-400">
                  Content Marketing
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
            <h2 className="text-xl font-bold mb-4">Follow Us</h2>
            <ul className="flex space-x-4">
              <li>
                <a href="https://facebook.com" className="hover:text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M22.675 0H1.325C.595 0 0 .597 0 1.326v21.348C0 23.403.595 24 1.325 24h11.498v-9.294H9.691v-3.62h3.132v-2.664c0-3.1 1.892-4.788 4.655-4.788 1.324 0 2.462.099 2.794.142v3.24h-1.918c-1.504 0-1.796.715-1.796 1.763v2.31h3.59l-.468 3.62h-3.122V24h6.118c.73 0 1.325-.597 1.325-1.326V1.326C24 .597 23.405 0 22.675 0z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://twitter.com" className="hover:text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.917 4.917 0 00-8.384 4.482A13.951 13.951 0 011.671 3.149a4.916 4.916 0 001.524 6.574 4.904 4.904 0 01-2.229-.616v.062a4.917 4.917 0 003.946 4.827 4.902 4.902 0 01-2.224.084 4.918 4.918 0 004.59 3.417A9.868 9.868 0 010 19.54a13.905 13.905 0 007.548 2.212c9.056 0 14.01-7.504 14.01-14.01 0-.213-.005-.425-.014-.636A10.025 10.025 0 0024 4.557z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" className="hover:text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M22.23 0H1.77C.792 0 0 .774 0 1.728v20.543C0 23.225.792 24 1.77 24h20.457C23.208 24 24 23.225 24 22.271V1.728C24 .774 23.208 0 22.23 0zM7.07 20.452H3.548V9.049H7.07v11.403zm-1.76-13.09a2.048 2.048 0 110-4.096 2.048 2.048 0 010 4.096zm14.196 13.09h-3.523v-5.907c0-1.409-.025-3.22-1.961-3.22-1.963 0-2.263 1.535-2.263 3.119v6.008H8.88V9.049h3.385v1.557h.047c.47-.888 1.616-1.82 3.325-1.82 3.555 0 4.21 2.34 4.21 5.381v6.285z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Digital Marketing Agency. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
