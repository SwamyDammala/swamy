import React, { useState } from "react";
import { Link } from "react-scroll";
import logo from "../../images/swasa.png";
const TopNavbar = () => {
  const [activeLink, setActiveLink] = useState("main");
  const opengithub = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const activeNavLink = (activeLink) => {
    setActiveLink(activeLink);
  };
  return (
    <div>
      <nav>
        <Link to="main" className="logo" smooth={true} duration={2000}>
          <img src={logo} alt="" />
        </Link>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="nav-icon"></span>
        </label>
        <ul className="menu">
          <li>
            <Link
              to="main"
              smooth={true}
              duration={1000}
              className={activeLink === "main" ? "active" : ""}
              onClick={() => activeNavLink("main")}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="features"
              smooth={true}
              duration={1000}
              className={activeLink === "features" ? "active" : ""}
              onClick={() => activeNavLink("features")}
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              to="services"
              smooth={true}
              duration={1000}
              className={activeLink === "services" ? "active" : ""}
              onClick={() => activeNavLink("services")}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="subscribe"
              smooth={true}
              duration={1000}
              className={activeLink === "subscribe" ? "active" : ""}
              onClick={() => activeNavLink("subscribe")}
            >
              Subscribe
            </Link>
          </li>
          <li>
            <Link
              to="#"
              smooth={true}
              duration={1000}
              className={activeLink === "#" ? "active" : ""}
              onClick={() => activeNavLink("#")}
            >
              Contact US
            </Link>
          </li>
        </ul>
        <span
          onClick={() => opengithub("https://github.com/SwamyDammala/swamy")}
          className="hey"
        >
          GitHub
        </span>
      </nav>
    </div>
  );
};

export default TopNavbar;
