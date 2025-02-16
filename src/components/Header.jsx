import React from "react";
import "../css/Header.css";

const Header = () => {
  return (
    <header className="header-con">
      <nav>
        <div className="logo">
          Grizmo<span className="ai">AI</span>
        </div>
        <div className="nav-right">
          <div className="contact">
            <ul>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <button className="cta-btn">Create</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
