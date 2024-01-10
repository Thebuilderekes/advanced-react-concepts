/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./Buttons.jsx";

//import identityObjProxy from "identity-obj-proxy";

//jest.mock("./buttons.css", () => identityObjProxy());

test("renders a primary button with correct class", () => {
  render(<Button type="primary">Save</Button>);
  const button = screen.getByText(/Save/i);
  expect(button).toHaveClass("primary-btn btn");
});

test("renders a secondary button with correct class", () => {
  render(<Button type="secondary">Delete</Button>);
  const button = screen.getByText(/Delete/i);
  expect(button).toHaveClass("secondary-btn btn");
});

test("renders the provided children content", () => {
  const customText = "Custom Button";
  render(<Button type="primary">{customText}</Button>);
  const button = screen.getByText(customText);
  expect(button).toBeInTheDocument();
});
