import React from "react";
import "../css/Homepage.css";

const Homepage = () => {
  return (
    <div className="homepageCon">
      <header>
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
            <button className="cta-btn">Explore</button>
          </div>
        </nav>
      </header>
      <div className="image-container">
        <img
          src="https://www.shutterstock.com/image-vector/artificial-intelligence-circuit-electric-line-600nw-2465096659.jpg"
          alt="Left Side"
          className="side-image left-image"
        />
        <img
          src="https://www.shutterstock.com/image-vector/artificial-intelligence-circuit-electric-line-600nw-2465096659.jpg"
          alt="Right Side"
          className="side-image right-image"
        />
      </div>
      <section className="hero">
        <h1>
          Introducing the <span className="neG">Next Generation</span> AI Tool
        </h1>
        <p className="paragraph">
          <span className="pText">
            Embrace the future with AI-driven design
          </span>
        </p>
        <div className="btn-con">
          <a href="/dashboard">
            <button className="cta-btn">Try it for free</button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
