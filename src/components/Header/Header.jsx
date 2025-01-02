import React from "react";
import "./header.css";
import logo from "../../images/logo.png";
import { NavLink } from "react-router-dom";

const nav_links = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/tours",
    display: "Tours",
  },
];

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="content">
        <ul>
          {nav_links.map((nav, index) => {
            return (
              <li key={index} className="nav_item">
                <NavLink to={nav.path}>{nav.display}</NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="right">
        <button className="btn-login">Login</button>
        <button className="btn-register">Register</button>
      </div>
    </div>
  );
};

export default Header;
