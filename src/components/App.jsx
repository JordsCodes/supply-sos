import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import LandingPage from "./LandingPage";
import YearGroup from "./YearGroup";
import Subject from "./Subject";
import Topic from "./Topic";
import CurriculumAim from "./CurriculumAim";
import LessonPlan from "./LessonPlan";

function App() {
  const [choices, setChoices] = useState({
    yearGroup: "",
    subject: "",
    topic: "",
    curriculumAim: "",
  });

  const [topics, setTopics] = useState({});
  const [curriculumAims, setCurriculumAims] = useState({});
  const [plan, setPlan] = useState({});

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
        {
          path: "year-group",
          element: <YearGroup choices={choices} setChoices={setChoices} />,
        },
        {
          path: "subject",
          element: (
            <Subject
              choices={choices}
              setChoices={setChoices}
              topics={topics}
              setTopics={setTopics}
            />
          ),
        },
        {
          path: "topic",
          element: (
            <Topic
              choices={choices}
              setChoices={setChoices}
              topics={topics}
              curriculumAims={curriculumAims}
              setCurriculumAims={setCurriculumAims}
            />
          ),
        },
        {
          path: "curriculum-aim",
          element: <CurriculumAim curriculumAims={curriculumAims} />,
        },
        {
          path: "lesson-plan",
          element: (
            <LessonPlan choices={choices} plan={plan} setPlan={setPlan} />
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
