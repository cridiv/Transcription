import React, { useState } from "react";
import { SpeechProvider } from "../context/SpeechContext";
import "../css/Header.css";
import Create from "./Create";

const Header = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <SpeechProvider>
      <header className="header-con">
        <nav>
          <div className="logo">
            <a href="/">
              Grizmo<span className="ai">AI</span>
            </a>
          </div>
          <div className="nav-right">
            <div className="contact">
              <ul>
                <li>
                  <a href="/contactus">Contact</a>
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
    </SpeechProvider>
  );
};

export default Header;
