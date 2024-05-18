import React, { useState } from "react";
import Root from "../components/App";
import { render, screen, waitFor } from "@testing-library/react";

describe("Root", () => {
  test("renders correctly", () => {
    const { asFragment } = render(<Root />);

    expect(asFragment()).toMatchSnapshot();
  });
  test("renders let's get started button when on landing page", async () => {
    render(<Root />);

    const startButton = screen.getByRole("link");

    expect(startButton).toHaveTextContent("Let's get started");
  });
  test("renders back and next buttons when start button clicked", async () => {});
});
