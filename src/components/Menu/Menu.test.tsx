import { fireEvent, render, screen } from "@testing-library/react";
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
  it("should check if contact is available", () => {
    render(<Menu scrollPosition={0} scrollTo={scrollTo} />);
    expect(screen.getByText(/education/i)).toBeInTheDocument();
  });
  it("should check if work history button calls scroll to function when defined", () => {
    render(<Menu scrollPosition={0} scrollTo={scrollTo} />);
    fireEvent.click(screen.getByText(/work history/i));
    expect(scrollTo).toHaveBeenCalledWith(0.05);
  });
  it("should check if work history button calls scroll to function when defined", () => {
    render(<Menu scrollPosition={0} scrollTo={scrollTo} />);
    fireEvent.click(screen.getByText(/education/i));
    expect(scrollTo).toHaveBeenCalledWith(2);
  });
  it("should check if work history button calls scroll to function when defined", () => {
    render(<Menu scrollPosition={0} scrollTo={scrollTo} />);
    fireEvent.click(screen.getByText(/contact/i));
    expect(scrollTo).toHaveBeenCalledWith(3.5);
  });
  it("should check small class is added", () => {
    const { container } = render(
      <Menu scrollPosition={45} scrollTo={scrollTo} />
    );

    expect(container.getElementsByClassName("nav small").length).toBe(1);
  });
  it("should check small class is not in the document", () => {
    const { container } = render(
      <Menu scrollPosition={0} scrollTo={scrollTo} />
    );

    expect(container.getElementsByClassName("nav small").length).toBe(0);
  });
});
