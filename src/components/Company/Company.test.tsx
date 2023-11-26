import { render, screen } from "@testing-library/react";
import Company from "./Company";
import BlankLogo from "../BlankLogo";

describe("Company test suite", () => {
  const description = "Test description";
  const companyName = "company logo";
  const techStack = "C#, React, MobX";

  it("should render company component and display description", () => {
    render(
      <Company
        logo={"test"}
        companyName={companyName}
        description={description}
        techStack={techStack}
      />
    );
    expect(screen.getByText(description)).toBeInTheDocument();
  });
  it("should render company component and display company name", () => {
    render(
      <Company
        logo={"test"}
        companyName={companyName}
        description={description}
        techStack={techStack}
      />
    );
    expect(screen.getByText(companyName)).toBeInTheDocument();
  });
  it("should render company component and display tech stack", () => {
    render(
      <Company
        logo={"test"}
        companyName={companyName}
        description={description}
        techStack={techStack}
      />
    );
    expect(screen.getByText(`Tech Stack: ${techStack}`)).toBeInTheDocument();
  });
  it("should render company to contain image", () => {
    render(
      <Company
        logo={"test"}
        companyName={companyName}
        description={description}
        techStack={techStack}
      />
    );
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
  it("should render custom react node logo instead of img", () => {
    render(
      <Company
        logo={<BlankLogo content="T" />}
        companyName={companyName}
        description={description}
        techStack={techStack}
      />
    );
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(/t/i);
  });
});
