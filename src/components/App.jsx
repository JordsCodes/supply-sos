import React from "react";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import LandingPage from "./LandingPage";
import YearGroup from "./YearGroup";
import Subject from "./Subject";
import "../styles/app.css";
import Topic from "./Topic";
import CurriculumAim from "./CurriculumAim";
import LessonPlan from "./LessonPlan";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<LandingPage />} />
      <Route path="year-group" element={<YearGroup />} />
      <Route path="subject" element={<Subject />} />
      <Route path="topic" element={<Topic />} />
      <Route path="curriculum-aim" element={<CurriculumAim />} />
      <Route path="lesson-plan" element={<LessonPlan />} />
    </Route>,
  ),
);

function App() {
  return (
    <>
      <h1 className="heading">SupplySoS</h1>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
