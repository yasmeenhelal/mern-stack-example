import React from "react";

// import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";

// import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";

// Navbar
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        
        <h4 className="navbar navbar-expand-lg navbar-light bg-light">
         {"Admin"}
        </h4>

        <h3
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          // aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </h3>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/create">
                Create New Flight
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
