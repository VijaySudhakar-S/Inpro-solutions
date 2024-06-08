import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="nav-container px-4 px-lg-5">
      <div>
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      </div>

      <div className="d-none d-lg-inline">
        <div className="d-flex list-items">
          <div>
            <a href="#home">Home</a>
          </div>
          <div>
            <a href="#about">About</a>
          </div>
          <div>
            <a href="#services">Services</a>
          </div>
          <div>
            <a href="#products">Products</a>
          </div>
          <div>
            <Link to="/contact">
              <button>Get in Touch</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="navbar-container d-lg-none">
        <button className="toggle-btn" onClick={toggleNavbar}>
          ☰
        </button>
        <div className={`navbar ${isOpen ? "open" : ""}`}>
          <button className="close-btn" onClick={toggleNavbar}>
            X
          </button>
          <div className="list">
            <div>
              <a href="#home" onClick={toggleNavbar}>
                Home
              </a>
            </div>
            <div>
              <a href="#about" onClick={toggleNavbar}>
                About
              </a>
            </div>
            <div>
              <a href="#services" onClick={toggleNavbar}>
                Services
              </a>
            </div>
            <div>
              <a href="#products" onClick={toggleNavbar}>
                Products
              </a>
            </div>
            <div>
              <Link to="/contact">
                <button>Get in Touch</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
