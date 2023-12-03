import { render, screen } from "@testing-library/react";
import AWSBadge from "./AWSBadge";

describe("AWSBadge test suite", () => {
  it("should render aws badge component", () => {
    render(<AWSBadge />);
    expect(screen.getByText(/certified in 2022/i)).toBeInTheDocument();
  });
  it("should render aws image", () => {
    render(<AWSBadge />);

    const logo = screen.getByRole("img");
    expect(logo).toHaveAttribute("src", "aws-badge.png");
    expect(logo).toHaveAttribute("alt", "AWS Architect associate badge");
  });
});
