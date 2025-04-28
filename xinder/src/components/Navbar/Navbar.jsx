import React from "react";
import "./Navbar.scss";

const navItems = [
  { text: "Explore", href: "#" },
  { text: "Solutions", href: "#" },
  { text: "Articles", href: "#" },
  { text: "Sign In", href: "#" },
  { text: "Join Now", href: "#", class: "join" },
];

const Navbar = () => {
  return (
    <header className="fixed-top">
      <nav className="navbar navbar-expand-lg">
        <div className="container d-flex justify-content-between">
          <a className="logo" href="#">xinder</a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end align-items-center flex-grow-1">
                {navItems.map((item, index) => (
                  <li className="nav-item" key={index}>
                    <a className={`nav-link ${item.class || ""}`} href={item.href}>
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
