import { render, screen } from "@testing-library/react";
import Company from "./Company";

describe("Company test suite", () => {
  it("should render company component and display description", () => {
    const description = "Test description";
    const alt = "company logo";
    render(
      <Company logo={"test"}  alt={alt} description={description} />
    );
    expect(screen.getByText(description)).toBeInTheDocument();
  });
  it("should render company to contain image", () => {
    const description = "Test description";
    const alt = "company logo";
    render(
      <Company logo={"test"}  alt={alt} description={description} />
    );
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});
