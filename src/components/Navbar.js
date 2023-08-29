import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
        <NavLink to="/" activeClassName="active" exact>
          <li className="nav-item">
          <a className="nav-link" href="/">Link</a>
              </li>
            </NavLink>
            <NavLink to="/about" activeClassName="active">

          <li className="nav-item">
              About
          </li>
          </NavLink>
          <NavLink to="/contact" activeClassName="active">
          <li className="nav-item">
              Contact
              </li>
            </NavLink>
            <NavLink to="/rules" activeClassName="active">
          <li className="nav-item">
              Rules & Policies
              </li>
            </NavLink>
            <NavLink to="/games" activeClassName="active">
          <li className="nav-item">
              Game Information
              </li>
            </NavLink>
   
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;