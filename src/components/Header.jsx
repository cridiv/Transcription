import React, { useState } from "react";
import "../css/Header.css";
import Create from "./Create";

const Header = () => {
  const [showPopup, setShowPopup] = useState(false);

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
          <div className="pop-upCon">
            <button
              className="cta-btn open-popup-btn"
              onClick={() => setShowPopup(true)}
            >
              Create
            </button>
            {showPopup && <Create onClose={() => setShowPopup(false)} />}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
