import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "./image/Plabon Express.jpg";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 91) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  let navbarClasses = [""];
  if (scrolled) {
    navbarClasses.push("scrolled");
  }

  // className="navbar fixed-top"
  return (
    <div className={`fixed-top navbar ${navbarClasses.join(" ")}`}>
      <nav className="navbar-expand-lg navbar-dark container">
        <NavLink className="navbar-brand" to="/">
          <img className="logo" src={logo} alt="" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link  nav-text mr-3 mt-2" to="/home">
                Home
              </NavLink>
            </li>

            {/* <li className="nav-item"> */}
            {/* <NavLink className="nav-link nav-text mr-3 mt-2" to="/home"> */}
            {/* <Link to="to-service">Service</Link> */}
            {/* service */}
            {/* </NavLink> */}
            {/* </li> */}

            <li className="nav-item">
              <NavLink
                className="nav-link nav-text mr-3 mt-2"
                to="/ServicePage"
              >
                Service
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link nav-text mr-3 mt-2" to="/about">
                About Us
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link nav-text mr-3 mt-2" to="/contact">
                Contact Us
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/track-products">
                <button className="nav-btn">Track Products</button>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
