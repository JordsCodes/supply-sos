import React, { useState } from "react";
import "../styles/prompt-drop.css";
import FadeIn from "react-fade-in";
import LandingPage from "./LandingPage";
import YearGroup from "./YearGroup";
import Subject from "./Subject";
import Topic from "./Topic";
import CurriculumAim from "./CurriculumAim";
import LessonPlan from "./LessonPlan";

function PromptDrop() {
  const [promptNumber, setPrompt] = useState(0);

  const goBack = () => {
    setPrompt(promptNumber - 1);
  };

  const goForward = () => {
    setPrompt(promptNumber + 1);
  };

  const goHome = () => {
    setPrompt(0);
  };

  return (
    <FadeIn>
      <div className="prompt-drop">
        <h1 className="heading">SupplySoS</h1>
        <div className="prompt-drop_prompt">
          {promptNumber === 0 && <LandingPage />}
          {promptNumber === 1 && <YearGroup />}
          {promptNumber === 2 && <Subject />}
          {promptNumber === 3 && <Topic />}
          {promptNumber === 4 && <CurriculumAim />}
          {promptNumber === 5 && <LessonPlan />}
        </div>
        <div className="prompt-drop_buttons">
          {promptNumber === 0 && (
            <button className="button" type="button" onClick={goForward}>
              Let&apos;s get started
            </button>
          )}{" "}
          {promptNumber >= 1 && promptNumber <= 4 && (
            <>
              <button className="button" type="button" onClick={goBack}>
                Back
              </button>
              <button className="button" type="button" onClick={goForward}>
                Next
              </button>{" "}
            </>
          )}
          {promptNumber === 5 && (
            <>
              <button className="button" type="button" onClick={goHome}>
                Home
              </button>
              <button className="button" type="button">
                Retry
              </button>
              <button className="button" type="button">
                Low-Resource
              </button>
              <button className="button" type="button">
                Download
              </button>
            </>
          )}
        </div>
      </div>
    </FadeIn>
  );
}

export default PromptDrop;
