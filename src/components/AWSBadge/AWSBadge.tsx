import "./AWSBadge.scss";
import awsBadge from "../../assets/aws-badge.png";
const AWSBadge = () => {
  return (
    <div className="badge-container">
      <img src={awsBadge} alt="AWS Architect associate badge" />
      Certified in 2022
    </div>
  );
};

export default AWSBadge;
