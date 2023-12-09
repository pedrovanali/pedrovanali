/* eslint-disable testing-library/no-container */
import { fireEvent, render, screen } from "@testing-library/react";
import Menu from "./";
import { Adaptive } from "../../hooks/useAdaptiveTriggers";

describe("Profile test suite", () => {
  const scrollTo = jest.fn();
  const width = Adaptive.sm;
  it("should check if work history is available", () => {
    render(<Menu scrollPosition={0} scrollTo={scrollTo} width={width} />);
    expect(screen.getByText(/work history/i)).toBeInTheDocument();
  });
  it("should check if contact is available", () => {
    render(<Menu scrollPosition={0} scrollTo={scrollTo} width={width} />);
    expect(screen.getByText(/contact/i)).toBeInTheDocument();
  });
  it("should check if education is available", () => {
    render(<Menu scrollPosition={0} scrollTo={scrollTo} width={width} />);
    expect(screen.getByText(/education/i)).toBeInTheDocument();
  });
  it("should check if work history button calls scroll to function when defined", () => {
    render(<Menu scrollPosition={0} scrollTo={scrollTo} width={width} />);
    fireEvent.click(screen.getByText(/work history/i));
    expect(scrollTo).toHaveBeenCalledWith(0.05);
  });
  it("should check if education calls scroll to function when defined and not mobile", () => {
    render(<Menu scrollPosition={0} scrollTo={scrollTo} width={width} />);
    fireEvent.click(screen.getByText(/education/i));
    expect(scrollTo).toHaveBeenCalledWith(3.3);
  });
  it("should check if education calls scroll to function when defined and xs", () => {
    render(<Menu scrollPosition={0} scrollTo={scrollTo} width={Adaptive.xs} />);
    fireEvent.click(screen.getByText(/education/i));
    expect(scrollTo).toHaveBeenCalledWith(3.6);
  });
  it("should check if education calls scroll to function when defined and sm", () => {
    render(<Menu scrollPosition={0} scrollTo={scrollTo} width={Adaptive.sm} />);
    fireEvent.click(screen.getByText(/education/i));
    expect(scrollTo).toHaveBeenCalledWith(3.3);
  });
  it("should check if education calls scroll to function when defined and md", () => {
    render(<Menu scrollPosition={0} scrollTo={scrollTo} width={Adaptive.md} />);
    fireEvent.click(screen.getByText(/education/i));
    expect(scrollTo).toHaveBeenCalledWith(2.75);
  });
  it("should check if education calls scroll to function when defined and lg", () => {
    render(<Menu scrollPosition={0} scrollTo={scrollTo} width={Adaptive.lg} />);
    fireEvent.click(screen.getByText(/education/i));
    expect(scrollTo).toHaveBeenCalledWith(2.5);
  });
  it("should check if education calls scroll to function when defined and xl", () => {
    render(<Menu scrollPosition={0} scrollTo={scrollTo} width={Adaptive.lg} />);
    fireEvent.click(screen.getByText(/education/i));
    expect(scrollTo).toHaveBeenCalledWith(2.5);
  });
  it("should check if contact button calls scroll to function when defined width", () => {
    render(<Menu scrollPosition={0} scrollTo={scrollTo} width={width} />);
    fireEvent.click(screen.getByText(/contact/i));
    expect(scrollTo).toHaveBeenCalledWith(4);
  });
  it("should check small class is added", () => {
    const { container } = render(
      <Menu scrollPosition={45} scrollTo={scrollTo} width={width} />
    );

    expect(container.getElementsByClassName("nav small").length).toBe(1);
  });
  it("should check small class is not in the document", () => {
    const { container } = render(
      <Menu scrollPosition={0} scrollTo={scrollTo} width={width} />
    );

    expect(container.getElementsByClassName("nav small").length).toBe(0);
  });
});
