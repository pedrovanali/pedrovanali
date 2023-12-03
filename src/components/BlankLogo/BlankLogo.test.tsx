import { render, screen } from "@testing-library/react";
import BlankLogo from "./BlankLogo";
describe("BlankLogo test suite", () => {
  const content = "text";
  it("should render blank logo component with initial only", () => {
    render(<BlankLogo content={content} />);
    expect(screen.getByText(/t/i)).toBeInTheDocument();
  });
  
});
