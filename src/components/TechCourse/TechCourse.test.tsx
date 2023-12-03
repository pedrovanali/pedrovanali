import { render, screen } from "@testing-library/react";
import TechCourse from "./TechCourse";
describe("TechCourse test suite", () => {
  it("should render tech course component", () => {
    render(<TechCourse />);
    expect(screen.getByRole("heading", { level: 3 })).toBeInTheDocument();
  });
  it("should contain heading level with text content", () => {
    render(<TechCourse />);
    expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent(
      /technical course in web development/i
    );
  });
  it("should contain period of course", () => {
    render(<TechCourse />);
    expect(screen.getByText(/period 2010 - 2011/i)).toBeInTheDocument();
  });
  it("should render technical course header", () => {
    render(<TechCourse />);
    expect(
      screen.getByText(/technical course in web development/i)
    ).toBeInTheDocument();
  });
  it("should render tech course image", () => {
    render(<TechCourse />);

    const logo = screen.getByRole("img");
    expect(logo).toHaveAttribute("src", "tecpucpr.jpg");
    expect(logo).toHaveAttribute("alt", "TECPUCPR");
  });
});
