import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaEnvelope, FaLinkedin, FaPhone } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Core Competencies', href: '#core-competencies' },
    { name: 'Performance Reel', href: '#performance-reel' },
    { name: 'Case Studies', href: '#technical-case-studies' },
    { name: 'Toolbox', href: '#toolbox' },
    { name: 'Academic Foundation', href: '#academic-foundation' },
    { name: 'Global Profile', href: '#global-profile' },
    { name: 'Contact', href: '#footer' }
  ];

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Navbar height offset
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-green-200' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div 
                className={`font-bold text-lg transition-colors zalando-font ${
                  isScrolled ? 'text-green-600' : 'text-white'
                }`}
              >
                Nithin Surendran Menon
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden xl:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className={`text-sm font-medium transition-colors hover:text-green-600 px-3 py-2 rounded-md ${
                    isScrolled ? 'text-slate-700' : 'text-white'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="mailto:nithinsmenon1994@gmail.com"
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-all hover:scale-110 ${
                isScrolled 
                  ? 'bg-green-100 text-green-600 hover:bg-green-200' 
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              <FaEnvelope className="text-sm" />
            </a>
            <a
              href="https://www.linkedin.com/in/nithin-surendran-menon/"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-all hover:scale-110 ${
                isScrolled 
                  ? 'bg-green-100 text-green-600 hover:bg-green-200' 
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              <FaLinkedin className="text-sm" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="xl:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md transition-colors ${
                isScrolled ? 'text-slate-700 hover:text-green-600' : 'text-white hover:text-green-300'
              }`}
            >
              {isMobileMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="xl:hidden">
            <div className={`px-2 pt-2 pb-3 space-y-1 rounded-md shadow-lg ${
              isScrolled ? 'bg-white' : 'bg-white/95 backdrop-blur-md'
            }`}>
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className="text-slate-700 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium"
                >
                  {item.name}
                </a>
              ))}
              <div className="flex items-center space-x-4 px-3 py-2 border-t border-gray-200 mt-2 pt-4">
                <a
                  href="mailto:nithinsmenon1994@gmail.com"
                  className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center hover:bg-green-200 transition-colors"
                >
                  <FaEnvelope className="text-sm" />
                </a>
                <a
                  href="https://www.linkedin.com/in/nithin-surendran-menon/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center hover:bg-green-200 transition-colors"
                >
                  <FaLinkedin className="text-sm" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
