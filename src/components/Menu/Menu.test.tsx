import { render, screen } from "@testing-library/react";
import Menu from "./";

describe("Profile test suite", () => {
  const scrollTo = jest.fn();
  it("should check if work history is available", () => {
    render(<Menu scrollPosition={0} scrollTo={scrollTo} />);
    expect(screen.getByText(/work history/i)).toBeInTheDocument();
  });
  it("should check if contact is available", () => {
    render(<Menu scrollPosition={0} scrollTo={scrollTo} />);
    expect(screen.getByText(/contact/i)).toBeInTheDocument();
  });
});
