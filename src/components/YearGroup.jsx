import React from "react";
import { Link } from "react-router-dom";
import "../styles/prompt.css";
import image from "../images/year-group.png";

function YearGroup() {
  return (
    <div className="prompt">
      <div className="prompt_text">
        <h2 className="prompt_text_heading">
          Which year group are you teaching?
        </h2>
        <select
          className="prompt_text_dropdown "
          name="year-group"
          id="year-group"
        >
          <option value="">Select Year Group</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
        <div className="prompt_text_buttons">
          <Link className="button" to="/">
            Back
          </Link>
          <Link className="button" to="/subject">
            Next
          </Link>
        </div>
      </div>
      <img className="image" src={image} alt="teacher in classroom" />
    </div>
  );
}

export default YearGroup;
