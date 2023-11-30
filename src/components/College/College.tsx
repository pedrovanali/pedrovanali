import "./College.scss";
import pucpr from "../../assets/puc-dark.png";

const College = () => {
  return (
    <section className="college-container">
        <img src={pucpr} alt="PUCPR" />
        <h3>Bachelor in Information Systems</h3>
        <p>Period 2012 - 2015</p>
    </section>
  );
};

export default College;
