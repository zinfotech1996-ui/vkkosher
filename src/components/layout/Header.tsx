// components/layout/Header.tsx
import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowLeft } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { NavItem } from '../../types';

const navItems: NavItem[] = [
  { title: 'Home', href: '#home' },
  { title: 'Services', href: '#services' },
  { title: 'Job Opportunities', href: '/job-opportunities' },
  { title: 'Yoshon List', href: '/yoshon-list' },
  { title: 'About Us', href: '#about' },
  { title: 'Contact', href: '#contact' },
];

interface HeaderProps {
  showBackButton?: boolean;
}

const Header: React.FC<HeaderProps> = ({ showBackButton = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // Only add scroll listener if we're on the home page
    if (location.pathname === '/') {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      setIsScrolled(true); // Always show solid background on other pages
    }
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || location.pathname !== '/'
          ? 'bg-white shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {showBackButton ? (
              <Link to="/" className="flex items-center mr-4 text-navy hover:text-gold">
                <ArrowLeft className="h-5 w-5 mr-1" />
                Back
              </Link>
            ) : null}
            <Link to="/">
              <img
                src={`${isScrolled || location.pathname !== '/' ? '/vklogo-black.svg' : '/vklogo.svg'}`}
                alt="Volove Kashrus Logo"
                className="h-12 w-12 mr-2"
              />
            </Link>
            <span className={`font-serif text-2xl font-bold ${
              isScrolled || location.pathname !== '/' ? 'text-navy' : 'text-white'
            }`}>
              <Link to="/">Volove Kosher</Link>
            </span>
          </div>

          {/* Desktop Nav - Only show on home page */}
          {location.pathname === '/' && (
            <nav className="hidden md:flex space-x-6">
              {navItems.map((item) => (
                item.href.startsWith('/') ? (
                  <Link
                    key={item.title}
                    to={item.href}
                    className={`font-medium transition-colors ${
                      isScrolled 
                        ? 'text-navy hover:text-gold' 
                        : 'text-white hover:text-gold'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                ) : (
                  <a
                    key={item.title}
                    href={item.href}
                    className={`font-medium transition-colors ${
                      isScrolled 
                        ? 'text-navy hover:text-gold' 
                        : 'text-white hover:text-gold'
                    }`}
                  >
                    {item.title}
                  </a>
                )
              ))}
            </nav>
          )}

          {/* Mobile Nav Toggle - Only show on home page */}
          {location.pathname === '/' && (
            <button
              className="md:hidden text-navy"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          )}
        </div>
      </div>

      {/* Mobile Navigation Menu - Only show on home page */}
      {isMobileMenuOpen && location.pathname === '/' && (
        <div className="md:hidden bg-white">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                item.href.startsWith('/') ? (
                  <Link
                    key={item.title}
                    to={item.href}
                    className="text-navy font-medium text-lg hover:text-gold transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                ) : (
                  <a
                    key={item.title}
                    href={item.href}
                    className="text-navy font-medium text-lg hover:text-gold transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.title}
                  </a>
                )
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;