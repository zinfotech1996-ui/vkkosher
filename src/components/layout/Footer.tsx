import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src={`${import.meta.env.BASE_URL}/vklogo.svg`}
                alt="Volove Kashrus Logo" 
                className="h-8 w-8 mr-2"
              />
              <span className="font-serif text-xl font-bold">Volove Kosher</span>
            </div>
            <p className="mb-4 text-gray-300">
              Providing the highest standard of kosher certification since 1955.
            </p>
            {/* <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-gold transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div> */}
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-gold transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-gold transition-colors">Services</a></li>
              {/* <li><a href="#products" className="text-gray-300 hover:text-gold transition-colors">Search Products</a></li> */}
              {/* <li><a href="#resources" className="text-gray-300 hover:text-gold transition-colors">Resources</a></li> */}
              <li><a href="#about" className="text-gray-300 hover:text-gold transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-gold transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-gold mr-2 mt-0.5" />
                <span>(845) 799-1525</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-gold mr-2 mt-0.5" />
                <span>info@volovekosher.org</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gold mr-2 mt-0.5" />
                <span>5808 11th Ave.<br />Brooklyn, NY 11219</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Certification Hours</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Monday - Thursday:</span>
                <span>9:00 AM - 5:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Friday:</span>
                <span>9:00 AM - 2:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span>Closed</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span>10:00 AM - 4:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Volove Kosher. All rights reserved. Powered by <a href="https://uppertech.net/" target="_blank">Uppertech</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;