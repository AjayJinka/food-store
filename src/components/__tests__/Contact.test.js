import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

it("Should load heading inside Contact component", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");

  expect(heading).toBeInTheDocument();
});

it("Should load two input elements inside Contact component", () => {
  render(<Contact />);

  const inputs = screen.getAllByRole("textbox");

  expect(inputs.length).toBe(2);
});

it("Should not load three input elements inside Contact component", () => {
  render(<Contact />);

  const inputs = screen.getAllByRole("textbox");

  expect(inputs.length).not.toBe(3);
});

it("Should load submit button inside Contact compnent", () => {
  render(<Contact />);

  const submitButton = screen.getByText("Submit");

  expect(submitButton).toBeInTheDocument();
});

it("Should load input element with placeholder text Name inside Contact component", () => {
  render(<Contact />);

  const input = screen.getByPlaceholderText("Name");

  expect(input).toBeInTheDocument();
});
