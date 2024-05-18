import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "../styles/root.css";

function Root({ index, setIndex }) {
  const location = useLocation();
  const url = location.pathname;

  const prompts = [
    "/",
    "/year-group",
    "/subject",
    "/topic",
    "/curriculum-aim",
    "/lesson-plan",
  ];

  const goForward = () => {
    setIndex(index + 1);
  };

  const goBack = () => {
    setIndex(index - 1);
  };

  const goHome = () => {
    setIndex(0);
  };

  return (
    <div className="root">
      <h1 className="heading">SupplySoS</h1>
      <div id="prompt">
        <Outlet />
      </div>
      <div className="navbar">
        {url === "/" && (
          <Link
            to="year-group"
            className="button"
            type="button"
            onClick={goForward}
          >
            Let&apos;s get started
          </Link>
        )}
        {(url === "/year-group" ||
          url === "/subject" ||
          url === "/topic" ||
          url === "/curriculum-aim") && (
          <>
            <Link
              onClick={goBack}
              to={prompts[index - 1]}
              className="button"
              type="button"
            >
              Back
            </Link>
            <Link
              onClick={goForward}
              to={prompts[index + 1]}
              className="button"
              type="button"
            >
              Next
            </Link>
          </>
        )}
        {url === "/lesson-plan" && (
          <>
            <Link
              to={prompts[0]}
              className="button"
              type="button"
              onClick={goHome}
            >
              Home
            </Link>
            <Link to={prompts[5]} className="button" type="button">
              Retry
            </Link>
            <Link to={prompts[5]} className="button" type="button">
              Low-Resource
            </Link>
            <Link to={prompts[5]} className="button" type="button">
              Download
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Root;
