import { render, screen } from "@testing-library/react";
import College from "./College";
describe("College test suite", () => {
  it("should render college component", () => {
    render(<College />);
    expect(screen.getByRole("heading", { level: 3 })).toBeInTheDocument();
  });
  it("should contain heading level with text content", () => {
    render(<College />);
    expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent(
      /bachelor in information systems/i
    );
  });
  it("should contain correct classname", () => {
    const { container } = render(<College />);
    expect(container.firstChild).toHaveClass("college-container");
  });
  it("should contain period of course", () => {
    render(<College />);
    expect(screen.getByText(/period 2012 - 2015/i)).toBeInTheDocument();
  });
  it("should render college header", () => {
    render(<College />);
    expect(
      screen.getByText(/bachelor in information systems/i)
    ).toBeInTheDocument();
  });
  it("should render college image", () => {
    render(<College />);

    const logo = screen.getByRole("img");
    expect(logo).toHaveAttribute("src", "puc-dark.png");
    expect(logo).toHaveAttribute("alt", "PUCPR");
  });
});
