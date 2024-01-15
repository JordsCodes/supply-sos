import React from "react";
import FadeIn from "react-fade-in";
import "../styles/prompt.css";

function LandingPage() {
  return (
    <FadeIn>
      <div className="prompt">
        <h2 className="prompt_heading">No planning? No problem.</h2>
        <p className="prompt_content">
          Downloadable, customisable AI-generated lesson plans for Key Stages 1
          and 2.
        </p>
      </div>
    </FadeIn>
  );
}

export default LandingPage;
