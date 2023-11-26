import "./BlankLogo.scss";
type BlankLogoProps = {
  content: string;
};

const BlankLogo = ({ content }: BlankLogoProps) => {
  return (
    <div className="logo">
      <h1>{content[0]}</h1>
    </div>
  );
};

export default BlankLogo;
