import React, { useEffect } from "react";
import Select from "react-select";
import "../styles/prompt.css";
import FadeIn from "react-fade-in";
import curriculum from "../data/curriculum.json";

function Topic({ choices, setChoices, topics, setCurriculumAims }) {
  const handleChange = (choice) => {
    setChoices({ ...choices, topic: choice.value });
  };

  const { yearGroup, subject, topic } = choices;

  useEffect(() => {
    setCurriculumAims(curriculum[yearGroup][subject][topic]);
  });

  const topicsArray = Object.keys(topics);

  const options = topicsArray.map((item) => {
    return { value: item, label: item };
  });

  return (
    <FadeIn>
      <div className="prompt">
        <h2 className="prompt_heading">Topic?</h2>
        <h2 className="prompt_heading_small">Topic? </h2>
        <Select
          className="prompt_dropdown"
          placeholder="Select Topic"
          options={options}
          onChange={handleChange}
        />
      </div>
    </FadeIn>
  );
}

export default Topic;
