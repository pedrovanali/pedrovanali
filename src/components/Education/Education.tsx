import AWSBadge from "../AWSBadge";
import College from "../College";
import "./Education.scss";

const Education = () => {
  return (
    <section className="education-container">
      <College />
      <AWSBadge />
    </section>
  );
};

export default Education;
