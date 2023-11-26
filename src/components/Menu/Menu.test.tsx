import { render, screen } from "@testing-library/react";
import Menu from "./";

describe("Profile test suite", () => {
  it("should check if work history is available", () => {
    render(<Menu scrollPosition={0} />);
    expect(screen.getByText(/work history/i)).toBeInTheDocument();
  });
  it("should check if contact is available", () => {
    render(<Menu scrollPosition={0} />);
    expect(screen.getByText(/contact/i)).toBeInTheDocument();
  });
});
