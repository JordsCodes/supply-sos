import React from "react";
import Select from "react-select";
import "../styles/prompt.css";
import FadeIn from "react-fade-in";

function CurriculumAim({ curriculumAims }) {
  const options = curriculumAims.map((item) => {
    return { value: item, label: item };
  });

  return (
    <FadeIn>
      <div className="prompt">
        <h2 className="prompt_heading">
          Let&apos;s finish up with the curriculum aim
        </h2>
        <h2 className="prompt_heading_small">
          Let&apos;s finish up with the curriculum aim
        </h2>
        <Select
          className="prompt_dropdown"
          placeholder="Select Curriculum Aim"
          options={options}
        />
      </div>
    </FadeIn>
  );
}

export default CurriculumAim;
