import React, { useState, useEffect, useRef } from "react";
import "../styles/lesson-plan.css";
import FadeIn from "react-fade-in";
import { Scrollbars } from "react-custom-scrollbars";
import { ring } from "ldrs";
import getPlan from "../requests/getPlan";

function LessonPlan({ choices }) {
  const [plan, setPlan] = useState();
  const initialized = useRef(false);

  const renderPlan = async () => {
    await getPlan(choices).then((res) => {
      setPlan(res);
    });
  };

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      renderPlan();
    }
  }, []);

  ring.register();

  return (
    <FadeIn>
      <div className="lesson-plan">
        <h2 className="lesson-plan_heading">{!plan && "Hang in there..."}</h2>
        {plan ? (
          <Scrollbars className="lesson-plan_render">
            <pre className="lesson-plan_text">{plan}</pre>
          </Scrollbars>
        ) : (
          <div className="lesson-plan_loader">
            <l-ring />
          </div>
        )}
      </div>
    </FadeIn>
  );
}

export default LessonPlan;
