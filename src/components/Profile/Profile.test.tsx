import { render, screen } from "@testing-library/react";
import Profile from "./";

describe("Profile test suite", () => {
  it("should check profile is normal sized", () => {
    render(<Profile scrollPosition={50} />);
    expect(screen.queryByRole("div")).toBeNull();
  });
});
