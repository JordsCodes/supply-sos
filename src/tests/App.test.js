import React from "react";
import App from "../components/App";
import { render, screen } from "@testing-library/react";

describe("App", () => {
  test("renders correctly", () => {
    const { asFragment } = render(<App />);

    expect(asFragment()).toMatchSnapshot();
  });
});
