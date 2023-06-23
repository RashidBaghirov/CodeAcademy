import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./_Navbar.scss";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("dashboard");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li
          className={`navbar__item ${activeLink === "request" ? "active" : ""}`}
          onClick={() => handleLinkClick("request")}
        >
          <Link to="/request" className="navbar__link">
            Request
          </Link>
        </li>
        <li
          className={`navbar__item ${activeLink === "users" ? "active" : ""}`}
          onClick={() => handleLinkClick("users")}
        >
          <Link to="/register" className="navbar__link">
            Register New Admin
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
