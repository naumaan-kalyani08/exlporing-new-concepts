import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="logo">
        <Link>Logo</Link>
      </div>
      <div className="nav-links">
        <div className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
