import React, { useState, useEffect } from "react";
// import { Button } from './Button';
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  /* const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  }; */

  /*  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton); */

  return (
    <>
      <nav className="home-navbar">
        <div className="home-navbar-container">
          <Link to="/" className="home-navbar-logo" onClick={closeMobileMenu}>
            NIRVANA
            <i className="fas fa-cubes fa-1x"></i>
          </Link>
          <div className="home-menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "home-nav-menu active" : "home-nav-menu"}>
            <li className="home-nav-item">
              <Link to="/" className="home-nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>

            <li className="home-nav-item">
              <Link
                to="/Login"
                className="home-nav-links"
                onClick={closeMobileMenu}
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
