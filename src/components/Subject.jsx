import React from "react";
import Select from "react-select";
import "../styles/prompt.css";
import FadeIn from "react-fade-in";

const options = [
  { value: "English", label: "English" },
  { value: "Maths", label: "Maths" },
  { value: "Science", label: "Science" },
  { value: "History", label: "History" },
  { value: "Geography", label: "Geography" },
  { value: "Computing", label: "Conputing" },
  { value: "Art and Design", label: "Art and Design" },
  { value: "Music", label: "Music" },
  { value: "PE", label: "PE" },
  { value: "French", label: "French" },
  { value: "Spanish", label: "Spanish" },
  { value: "German", label: "German" },
];

function Subject() {
  return (
    <FadeIn>
      <div className="prompt">
        <h2 className="prompt_heading">And the subject?</h2>
        <Select
          className="prompt_dropdown"
          placeholder="Select Subject"
          options={options}
        />
      </div>
    </FadeIn>
  );
}

export default Subject;
