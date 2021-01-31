import { React, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.scss";

export default function Navbar() {
  const [isMenuItemClicked, setMenuItemClicked] = useState(true);
  function handleMenuIconClick() {
    setMenuItemClicked(!isMenuItemClicked);
  }

  function handleButtonClick() {
    setMenuItemClicked(false);
  }

  return (
    <nav className="navbar-container unselectable">
      <div className="navbar-logo">
        <Link to="/" onClick={handleButtonClick}>
          Issue Tracker
        </Link>
      </div>
      <div className="menu-icon" onClick={handleMenuIconClick}>
        <i
          className={isMenuItemClicked ? "fa fa-times" : "fa fa-bars"}
          aria-hidden="true"
        ></i>
      </div>
      <ul className={isMenuItemClicked ? "navbar-menu active" : "navbar-menu"}>
        <li>
          <Link
            className="navbar-links"
            to="/create-project"
            onClick={handleButtonClick}
          >
            Create Project
          </Link>
        </li>
      </ul>
    </nav>
  );
}
