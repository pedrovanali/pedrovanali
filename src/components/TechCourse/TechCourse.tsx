import tecpuc from "../../assets/tecpucpr.jpg";
import "./TechCourse.scss";

const TechCourse = () => {
  return (
    <div className="tech-course-container">
      <img src={tecpuc} alt="TECPUCPR" />
      <h3>Technical Course in Web Development</h3>
      <p>Period 2010 - 2011</p>
    </div>
  );
};

export default TechCourse;
