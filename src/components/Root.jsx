import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "../styles/root.css";

export default function Root() {
  const location = useLocation();
  const url = location.pathname;

  return (
    <div className="root">
      <h1 className="heading">SupplySoS</h1>
      <div id="prompt">
        <Outlet />
      </div>
      <div className="navbar">
        {url === "/" && (
          <Link to="year-group" className="button" type="button">
            Let&apos;s get started
          </Link>
        )}
        <button className="button" type="button">
          Home
        </button>
        <button className="button" type="button">
          Retry
        </button>
        <button className="button" type="button">
          Low-Resource
        </button>
        <button className="button" type="button">
          Download
        </button>
      </div>
    </div>
  );
}
