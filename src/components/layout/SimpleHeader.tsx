// components/layout/SimpleHeader.tsx
import React, { useState } from 'react';
import { ArrowLeft, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface NavItem {
  title: string;
  href: string;
}

const navItems: NavItem[] = [
  { title: 'Home', href: '/' },
  { title: 'Services', href: '#services' },
  { title: 'Job Opportunities', href: '/job-opportunities' },
  { title: 'Yoshon List', href: '/yoshon-list' },
  { title: 'About Us', href: '#about' },
  { title: 'Contact', href: '#contact' },
];

const SimpleHeader: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Function to handle navigation with smooth scrolling
  const handleNavClick = (href: string, e: React.MouseEvent) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      
      // If we're not on the home page, navigate to home first
      if (location.pathname !== '/') {
        // Store the target section in sessionStorage
        sessionStorage.setItem('scrollToSection', targetId);
        // Navigate to home page
        window.location.href = '/';
      } else {
        // We're already on home page, scroll to section
        scrollToSection(targetId);
      }
    }
    setIsMobileMenuOpen(false);
  };

  // Function to scroll to a section with smooth behavior
  const scrollToSection = (sectionId: string) => {
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 80; // Height of fixed header
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100); // Small delay to ensure DOM is ready
  };

  return (
    <header className="bg-white shadow-md py-4 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Back button and logo */}
          <div className="flex items-center">
            
            <div className="flex items-center">
              <img
                src="/vklogo-black.svg"
                alt="Volove Kashrus Logo"
                className="h-10 w-10 mr-2"
              />
              <Link 
              to="/"  className="font-serif text-xl font-bold text-navy">
                Volove Kosher
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              item.href.startsWith('/') ? (
                <Link
                  key={item.title}
                  to={item.href}
                  className="font-medium text-navy hover:text-gold transition-colors"
                >
                  {item.title}
                </Link>
              ) : (
                <a
                  key={item.title}
                  href={item.href}
                  onClick={(e) => handleNavClick(item.href, e)}
                  className="font-medium text-navy hover:text-gold transition-colors cursor-pointer"
                >
                  {item.title}
                </a>
              )
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
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
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white mt-4 py-3 rounded-lg shadow-lg">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                item.href.startsWith('/') ? (
                  <Link
                    key={item.title}
                    to={item.href}
                    className="text-navy font-medium text-lg hover:text-gold transition-colors px-4 py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                ) : (
                  <a
                    key={item.title}
                    href={item.href}
                    onClick={(e) => {
                      handleNavClick(item.href, e);
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-navy font-medium text-lg hover:text-gold transition-colors px-4 py-2 cursor-pointer"
                  >
                    {item.title}
                  </a>
                )
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default SimpleHeader;