import React from "react";
import "../styles/landing-page.css";
import image from "../images/landing-page.png";

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="welcome">
        <h2 className="welcome_heading">No planning? No problem.</h2>
        <p className="welcome_text">
          Downloadable, customisable AI-generated lesson plans for Key Stages 1
          and 2.
        </p>
        <button className="welcome_button" type="button">
          Let&apos;s get started.
        </button>
      </div>
      <img className="image" src={image} alt="teacher in classroom" />
    </div>
  );
}

export default LandingPage;
