import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="bg-gray-800">
        <div className="flex justify-between items-center p-3">
          <div>
            <img
              src="img/nysl_logo.png"
              alt="logo"
              width="80"
            />
          </div>

          <div>
            <button
              className="text-white lg:hidden"
              onClick={toggleMenu}
              style={{ fontSize: "36px" }}
              
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </div>

        {isMenuOpen ? (
          <div className="text-center">
            <ul className="space-y-2 pb-3">
            <li>
              <NavLink to="/">Home</NavLink> 
          </li>   
              <li><NavLink to="/">About NYSL </NavLink></li>
              <li><NavLink to="/">Contact</NavLink></li>   
              <li><NavLink to="/">Rules and Policies</NavLink></li>
              <li><NavLink to="/games">Game Information</NavLink></li>
              <li><NavLink to="/">Registration Form</NavLink></li>

            </ul>
          </div>
        ) : null}
      </nav>
    </div>
  );
}

export default Navbar;
