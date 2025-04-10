import React from 'react';
import {
  Facebook,
  Twitter,
  Linkedin,
  Github,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Section */}
        <div>
          <h3 className="text-2xl font-bold mb-4">
            Anna<span className="text-green-500">data</span>
          </h3>
          <nav className="flex flex-col space-y-1 text-sm">
            <a href="/" className="hover:text-green-400 transition">
              Home
            </a>
            <a href="/crop" className="hover:text-green-400 transition">
              Crop
            </a>
            <a href="/soil" className="hover:text-green-400 transition">
              Soil
            </a>
            <a href="/about" className="hover:text-green-400 transition">
              About
            </a>
            <a href="/schemes" className="hover:text-green-400 transition">
              Schemes
            </a>
            <a href="/community" className="hover:text-green-400 transition">
              Community
            </a>
          </nav>
          <p className="mt-4 text-xs text-gray-400">Annadata © 2021</p>
        </div>

        {/* Center Section */}
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <MapPin className="text-green-400" size={20} />
            <p>
              <span className="block font-medium">GEC (Goa)</span>
              Margoa , Goa
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="text-green-400" size={20} />
            <p>+14246257905</p>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="text-green-400" size={20} />
            <a
              href="mailto:help.annadata@gmail.com"
              className="hover:text-green-400"
            >
              help.annadata@gmail.com
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <p className="text-sm mb-4">
            <span className="block text-lg font-semibold mb-1">
              About the company
            </span>
            Complete Farming support for the backbone of our nation — our
            Annadata.
          </p>
          <div className="flex space-x-4 mb-4">
            <a href="/" className="hover:text-green-400">
              <Facebook size={20} />
            </a>
            <a href="/" className="hover:text-green-400">
              <Twitter size={20} />
            </a>
            <a href="/" className="hover:text-green-400">
              <Linkedin size={20} />
            </a>
            <a href="/" className="hover:text-green-400">
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
