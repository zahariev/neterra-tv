import { Outlet } from "react-router-dom";
import Menu from "../../components/Menu";

const Profile = function Profile() {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  );
};

export default Profile;
