import clsx from "clsx";
import { IScroll } from "../../interfaces";
import "./Profile.scss";

const Profile = ({ scrollPosition }: IScroll) => (
  <div className={clsx("profile", scrollPosition > 40 && "small")}></div>
);

export default Profile;
