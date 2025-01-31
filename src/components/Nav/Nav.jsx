import { useState } from "react";
import { Link } from "react-router";
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
          <Link to="/">STTT</Link>
        </div>

        {/* Desktop Menu */}
        <div className="menu desktop-menu">
          <Link to="/" className="menu-item">
            Home
          </Link>
          <Link to="/about" className="menu-item">
            About
          </Link>
          <Link to="/contact" className="menu-item">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          <span>☰</span>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="menu mobile-menu">
          <Link to="/" className="menu-item">
            Home
          </Link>
          <Link to="/about" className="menu-item">
            About
          </Link>

          <Link to="/contact" className="menu-item">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
