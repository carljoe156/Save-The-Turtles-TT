import { useState } from "react";
import "./Nav.css";
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <a href="/">MyLogo</a>
        </div>

        {/* Desktop Menu */}
        <div className="menu desktop-menu">
          <a href="/" className="menu-item">
            Home
          </a>
          <a href="/about" className="menu-item">
            About
          </a>
          <a href="/services" className="menu-item">
            Services
          </a>
          <a href="/contact" className="menu-item">
            Contact
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          <span>☰</span>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="menu mobile-menu">
          <a href="/" className="menu-item">
            Home
          </a>
          <a href="/about" className="menu-item">
            About
          </a>
          <a href="/services" className="menu-item">
            Services
          </a>
          <a href="/contact" className="menu-item">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
