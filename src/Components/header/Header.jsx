import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="nav-container px-4 px-lg-5">
      <div>
        <img src={logo} alt="Logo" className="logo" />
      </div>

      <div className=" d-none d-lg-inline">
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
            <a href="#products">
              <button>Get in Touch</button>
            </a>
          </div>
        </div>
      </div>

      <div className="navbar-container d-lg-none">
        <button className="toggle-btn" onClick={toggleNavbar}>
          ☰
        </button>
        <div className={`navbar ${isOpen ? "open" : ""}`}>
          <div className="list">
            <div>
              <a href="#home">Home</a>
            </div>
            <div>
              <a href="#services">Services</a>
            </div>
            <div>
              <a href="#services">Services</a>
            </div>
            <div>
              <a href="#products">Products</a>
            </div>
            <div>
              <button>Get in Touch</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
