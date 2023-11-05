import React from "react";
import { render, screen } from "@testing-library/react";
import LandingPage from "../components/LandingPage";

describe("Landing Page", () => {
  test("renders correctly", () => {
    const { asFragment } = render(<LandingPage />);

    expect(asFragment()).toMatchSnapshot();
  });

  test("heading renders correctly", () => {
    render(<LandingPage />);
    const heading = screen.getByRole("heading");

    expect(heading).toHaveTextContent("No planning? No problem.");
  });

  test("heading renders correctly", () => {
    render(<LandingPage />);
    const heading = screen.getByText("No planning? No problem.");

    expect(heading).toBeInTheDocument();
  });

  test("paragraph renders correctly", () => {
    render(<LandingPage />);
    const paragraph = screen.getByText(
      "Downloadable, customisable AI-generated lesson plans for Key Stages 1 and 2.",
    );

    expect(paragraph).toBeInTheDocument();
  });

  test("button renders correctly", () => {
    render(<LandingPage />);
    const button = screen.getByText("Let's get started.");

    expect(button).toBeInTheDocument();
  });

  test("image renders correctly", () => {
    render(<LandingPage />);
    const image = screen.getByRole("img");

    expect(image).toBeInTheDocument();
  });
});
