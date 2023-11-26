import "./Company.scss";

type CompanyProps = {
  logo: string | React.ReactNode;
  description: string;
  companyName: string;
  techStack: string;
};

const Company = ({
  logo,
  description,
  companyName,
  techStack,
}: CompanyProps) => {
  return (
    <div className="history">
      <div className="company-logo">
        {typeof logo === "string" ? (
          <img src={logo} alt={companyName} />
        ) : (
          logo
        )}
      </div>
      <div className="company">
        <div className="company-name">{companyName}</div>
        <div className="tech-stack">Tech Stack: {techStack}</div>
        <div className="description">{description}</div>
      </div>
    </div>
  );
};

export default Company;
