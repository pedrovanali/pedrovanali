import AWSBadge from "../AWSBadge";
import College from "../College";
import TechCourse from "../TechCourse";
import "./Education.scss";

const Education = () => {
  return (
    <section className="education-container">
      <h1>Education</h1>
      <College />
      <TechCourse />
      <AWSBadge />
    </section>
  );
};

export default Education;
