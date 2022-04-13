import React, { useState, Component, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Button } from "../Button";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

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

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            makerspace
            <i class="fab fa-react " />
          </Link>

          <div
            className={click ? "menu-icon menu-icon-adj" : "menu-icon"}
            onClick={handleClick}
          >
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/machines"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Machines
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/schedule"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Schedule
              </Link>
            </li>
            {/* <li className='nav-item'> */}
            {/* <Link
                            to='/blog'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            blog
                        </Link> */}
            {/* </li> */}
            <li>
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
