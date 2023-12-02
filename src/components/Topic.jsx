import React from "react";
import { Link } from "react-router-dom";
import "../styles/prompt.css";
import image from "../images/topic.png";

function Topic() {
  return (
    <div className="prompt">
      <div className="prompt_text">
        <h2 className="prompt_text_heading">Topic?</h2>
        <select className="prompt_text_dropdown " name="subject" id="subject">
          <option value="">Select Topic</option>
        </select>
        <div className="prompt_text_buttons">
          <Link className="button" to="/subject">
            Back
          </Link>
          <Link className="button" to="/curriculum-aim">
            Next
          </Link>
        </div>
      </div>
      <img className="image" src={image} alt="teacher in classroom" />
    </div>
  );
}

export default Topic;
