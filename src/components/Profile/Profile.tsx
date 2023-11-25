import "./Profile.scss";

interface Props {
  scrollPosition: number;
}
const Profile = ({ scrollPosition }: Props) => (
  <div className={scrollPosition > 40 ? "profile small" : "profile"}></div>
);

export default Profile;
