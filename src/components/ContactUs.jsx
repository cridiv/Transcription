import React from "react";
import { FaLinkedin, FaXTwitter, FaDiscord } from "react-icons/fa6";
import Header from "./Header";
import "../css/ContactUs.css";

const ContactUs = () => {
  return (
    <>
      <Header />
      <h1 className="sHead">Contact Us</h1>
      <div className="social-icons-container">
        <div className="social-icon linkedin">
          <a href="https://www.linkedin.com/in/aderemi-ademola-192907324">
            <FaLinkedin />
          </a>
        </div>
        <div className="social-icon twitter">
          <a href="https://x.com/Crid_IV">
            <FaXTwitter />
          </a>
        </div>
        <div className="social-icon discord">
          <a href="https://discord.com/channels/crid_iv">
            <FaDiscord />
          </a>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
