import React from "react";
import { Link } from "react-router-dom";
import "../styles/lesson-plan.css";

function LessonPlan() {
  return (
    <div className="lesson-plan">
      <div className="lesson-plan_content">
        <h2 className="lesson-plan_content_heading">All done!</h2>
        <p className="lesson-plan_content_text">Bullet points go here</p>
      </div>
      <div className="lesson-plan_render">
        {" "}
        Lesson plan rendered here in scrollable textbox
      </div>
      <div className="lesson-plan_buttons">
        <Link className="button" to="/lesson-plan">
          Try Again
        </Link>
        <Link className="button" to="/lesson-plan">
          Low-Resource
        </Link>
        <Link className="button" to="/lesson-plan">
          Download
        </Link>
        <Link className="button" to="/">
          Home
        </Link>
      </div>
    </div>
  );
}

export default LessonPlan;
