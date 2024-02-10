import React from "react";
import Select from "react-select";
import "../styles/prompt.css";
import FadeIn from "react-fade-in";

const options = [
  { value: "Year 1", label: "Year 1" },
  { value: "Year 2", label: "Year 2" },
  { value: "Year 3", label: "Year 3" },
  { value: "Year 4", label: "Year 4" },
  { value: "Year 5", label: "Year 5" },
  { value: "Year 6", label: "Year 6" },
];

function YearGroup({ choices, setChoices }) {
  const handleChange = (choice) => {
    setChoices({ ...choices, yearGroup: choice.value });
  };

  return (
    <FadeIn>
      <div className="prompt">
        <h2 className="prompt_heading">Which year group are you teaching?</h2>
        <h2 className="prompt_heading_small">
          Which year group are you teaching?
        </h2>
        <Select
          className="prompt_dropdown"
          placeholder="Select Year Group"
          options={options}
          onChange={handleChange}
        >
          Select Year Group
        </Select>
      </div>
    </FadeIn>
  );
}

export default YearGroup;
