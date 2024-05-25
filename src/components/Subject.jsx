import React, { useEffect } from "react";
import Select from "react-select";
import "../styles/prompt.css";
import FadeIn from "react-fade-in";
import curriculum from "../constants/curriculum.json";

const keyStageOneOptions = [
  { value: "English", label: "English" },
  { value: "Maths", label: "Maths" },
  { value: "Science", label: "Science" },
  { value: "History", label: "History" },
  { value: "Geography", label: "Geography" },
  { value: "Computing", label: "Computing" },
  { value: "Art and Design", label: "Art and Design" },
  { value: "Music", label: "Music" },
  { value: "PE", label: "PE" },
];

const keyStageTwoOptions = [
  { value: "English", label: "English" },
  { value: "Maths", label: "Maths" },
  { value: "Science", label: "Science" },
  { value: "History", label: "History" },
  { value: "Geography", label: "Geography" },
  { value: "Computing", label: "Computing" },
  { value: "Art and Design", label: "Art and Design" },
  { value: "Music", label: "Music" },
  { value: "PE", label: "PE" },
  { value: "French", label: "French" },
  { value: "Spanish", label: "Spanish" },
  { value: "German", label: "German" },
];

function Subject({ choices, setChoices, setTopics }) {
  const handleChange = (choice) => {
    setChoices({ ...choices, subject: choice.value });
  };

  const { yearGroup, subject } = choices;

  useEffect(() => {
    setTopics(curriculum[yearGroup][subject]);
  });

  const options =
    choices.yearGroup === "Year 1" || choices.yearGroup === "Year 2"
      ? keyStageOneOptions
      : keyStageTwoOptions;

  return (
    <FadeIn>
      <div className="prompt">
        <h2 className="prompt_heading">And the subject?</h2>
        <h2 className="prompt_heading_small">And the subject?</h2>
        <Select
          className="prompt_dropdown"
          placeholder="Select Subject"
          options={options}
          onChange={handleChange}
        />
      </div>
    </FadeIn>
  );
}

export default Subject;
