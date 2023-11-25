import { render, screen } from "@testing-library/react";
import Menu from "./";

describe("Profile test suite", () => {
  it("should check if home is available", () => {
    render(<Menu scrollPosition={0} />);
    expect(screen.getByText(/home/i)).toBeInTheDocument();
  });
  it("should check if history is available", () => {
    render(<Menu scrollPosition={0} />);
    expect(screen.getByText(/history/i)).toBeInTheDocument();
  });
  it("should check if contact is available", () => {
    render(<Menu scrollPosition={0} />);
    expect(screen.getByText(/contact/i)).toBeInTheDocument();
  });
});
