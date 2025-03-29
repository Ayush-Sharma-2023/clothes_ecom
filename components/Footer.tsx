import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo & About */}
        <div>
          <h2 className="text-xl font-semibold text-white">YourCompany</h2>
          <p className="mt-2 text-sm">
            Providing the best services to help you grow. Follow us for updates and offers.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-white transition"><FaFacebook size={20} /></a>
            <a href="#" className="hover:text-white transition"><FaTwitter size={20} /></a>
            <a href="#" className="hover:text-white transition"><FaLinkedin size={20} /></a>
            <a href="#" className="hover:text-white transition"><FaGithub size={20} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold text-white">Quick Links</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Services</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-semibold text-white">Contact Us</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="flex items-center space-x-2">
              <FaMapMarkerAlt /> <span>123 Street, City, Country</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaPhone /> <span>+123 456 7890</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaEnvelope /> <span>support@yourcompany.com</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Newsletter Section */}
      <div className="max-w-6xl mx-auto px-6 mt-8">
        <h2 className="text-lg font-semibold text-white text-center">Subscribe to our Newsletter</h2>
        <div className="mt-4 flex justify-center">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="p-2 rounded-l-md bg-gray-800 text-white outline-none border border-gray-700"
          />
          <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-md text-white">
            Subscribe
          </button>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-500 mt-8 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} YourCompany. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
