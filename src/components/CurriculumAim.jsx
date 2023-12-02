import React from "react";
import { Link } from "react-router-dom";
import "../styles/prompt.css";
import image from "../images/curriculum-aim.png";

function CurriculumAim() {
  return (
    <div className="prompt">
      <div className="prompt_text">
        <h2 className="prompt_text_heading">
          Let&apos;s finish up with the curriculum aim
        </h2>
        <select className="prompt_text_dropdown " name="subject" id="subject">
          <option value="">Select Curriculum Aim</option>
        </select>
        <div className="prompt_text_buttons">
          <Link className="button" to="/subject">
            Back
          </Link>
          <Link className="button" to="/lesson-plan">
            Next
          </Link>
        </div>
      </div>
      <img className="image" src={image} alt="teacher in classroom" />
    </div>
  );
}

export default CurriculumAim;
