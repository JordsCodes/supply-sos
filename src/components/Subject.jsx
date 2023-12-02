import React from "react";
import { Link } from "react-router-dom";
import "../styles/prompt.css";
import image from "../images/subject.png";

function Subject() {
  return (
    <div className="prompt">
      <div className="prompt_text">
        <h2 className="prompt_text_heading">And the subject?</h2>
        <select className="prompt_text_dropdown " name="subject" id="subject">
          <option value="">Select Subject</option>
          <option value="English">English</option>
          <option value="Maths">Maths</option>
          <option value="Science">Science</option>
          <option value="History">History</option>
          <option value="Geography">Geography</option>
          <option value="Computing">Computing</option>
          <option value="Art and Design">Art and Design</option>
          <option value="Music">Music</option>
          <option value="PE">PE</option>
          <option value="Modern Foreign Languages">
            Modern Foreign Languages
          </option>
          <option value="Design and Technology">Design and Technology</option>
        </select>
        <div className="prompt_text_buttons">
          <Link className="button" to="/year-group">
            Back
          </Link>
          <Link className="button" to="/topic">
            Next
          </Link>
        </div>
      </div>
      <img className="image" src={image} alt="teacher in classroom" />
    </div>
  );
}

export default Subject;
