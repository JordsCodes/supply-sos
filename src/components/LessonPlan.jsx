import React from "react";
import "../styles/lesson-plan.css";
import FadeIn from "react-fade-in";

function LessonPlan() {
  return (
    <FadeIn>
      <div className="lesson-plan">
        <h2 className="lesson-plan_heading">All done!</h2>
        <div className="lesson-plan_render">Lesson Plan rendered here</div>
      </div>
    </FadeIn>
  );
}

export default LessonPlan;
