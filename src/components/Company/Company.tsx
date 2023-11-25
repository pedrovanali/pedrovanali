import "./Company.scss";

interface CompanyProps {
  logo: string;
  alt?: string;
  description: string;
}

const Company = ({ logo, alt, description }: CompanyProps) => {
  return (
    <div className="history">
      <div className="company-logo">
        <img src={logo} alt={alt} />
      </div>
      <div className="description">{description}</div>
    </div>
  );
};

export default Company;
