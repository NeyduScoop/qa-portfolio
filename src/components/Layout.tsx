import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Footer from './Footer';
import { GithubIcon, LinkedinIcon, Menu, X } from 'lucide-react';

const Layout = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      <header 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="container flex justify-between items-center">
          <NavLink to="/" className="text-xl font-bold text-gray-900">
            Ojinmah Chinedu Christian
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavLink 
              to="/" 
              className={({ isActive }) => `navbar-item ${isActive ? 'active' : ''}`}
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => `navbar-item ${isActive ? 'active' : ''}`}
            >
              About Me
            </NavLink>
            <NavLink 
              to="/portfolio" 
              className={({ isActive }) => `navbar-item ${isActive ? 'active' : ''}`}
            >
              Portfolio
            </NavLink>
            <NavLink 
              to="/blog" 
              className={({ isActive }) => `navbar-item ${isActive ? 'active' : ''}`}
            >
              Blog
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => `navbar-item ${isActive ? 'active' : ''}`}
            >
              Contact
            </NavLink>
            
            <div className="ml-4 flex items-center space-x-2">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
                <GithubIcon size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
                <LinkedinIcon size={20} />
              </a>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white py-4 shadow-lg">
            <div className="container flex flex-col space-y-3">
              <NavLink 
                to="/" 
                className={({ isActive }) => `block py-2 ${isActive ? 'text-gray-900 font-medium' : 'text-gray-800'}`}
              >
                Home
              </NavLink>
              <NavLink 
                to="/about" 
                className={({ isActive }) => `block py-2 ${isActive ? 'text-gray-900 font-medium' : 'text-gray-800'}`}
              >
                About Me
              </NavLink>
              <NavLink 
                to="/portfolio" 
                className={({ isActive }) => `block py-2 ${isActive ? 'text-gray-900 font-medium' : 'text-gray-800'}`}
              >
                Portfolio
              </NavLink>
              <NavLink 
                to="/blog" 
                className={({ isActive }) => `block py-2 ${isActive ? 'text-gray-900 font-medium' : 'text-gray-800'}`}
              >
                Blog
              </NavLink>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => `block py-2 ${isActive ? 'text-gray-900 font-medium' : 'text-gray-800'}`}
              >
                Contact
              </NavLink>
              
              <div className="flex items-center space-x-4 pt-2">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
                  <GithubIcon size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
                  <LinkedinIcon size={20} />
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow pt-24">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;