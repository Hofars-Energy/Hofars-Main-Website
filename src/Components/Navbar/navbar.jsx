import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../button/button";
import "./navbar.css";
import img from "../../images/img.png";
const Navbar = () => {
  const [click, setClicker] = useState(false);
  const [button1, setButton] = useState(true);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton);
  const closeMobileMenu = () => setClicker(false);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Hofars
            <i class="fas fa-radiation-alt ic"></i>
          </Link>
          <div className="menu-icon" onClick={() => setClicker(!click)}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/Home" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                className="nav-links "
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/careers"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Careers
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/hfp" className="nav-links" onClick={closeMobileMenu}>
                Hofars Internship Program
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
