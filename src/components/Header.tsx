import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Calculator } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) => 
    `px-4 py-2 rounded-md transition-colors ${
      isActive 
        ? 'text-primary-700 font-medium' 
        : 'text-gray-600 hover:text-primary-600 hover:bg-primary-50'
    }`;

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <Calculator className="w-8 h-8 text-primary-600" />
            <span className="text-xl font-bold text-gray-800">BodyFatCalculator</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            <NavLink to="/" className={navLinkClass} end>Home</NavLink>
            <NavLink to="/calculator" className={navLinkClass}>Calculator</NavLink>
            <NavLink to="/about" className={navLinkClass}>About Body Fat</NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 animate-fade-in">
            <div className="flex flex-col space-y-2">
              <NavLink 
                to="/" 
                className={navLinkClass} 
                onClick={closeMenu}
                end
              >
                Home
              </NavLink>
              <NavLink 
                to="/calculator" 
                className={navLinkClass} 
                onClick={closeMenu}
              >
                Calculator
              </NavLink>
              <NavLink 
                to="/about" 
                className={navLinkClass} 
                onClick={closeMenu}
              >
                About Body Fat
              </NavLink>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;