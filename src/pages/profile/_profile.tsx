import { Outlet } from "react-router-dom";
import Menu from "../../components/Menu";
import styled from "styled-components";
import { useEffect, useState } from "react";

export interface MenuProps {
  displayed: string;
}

const StyledMenu = styled(Menu)`
  @media (max-width: 1024px) {
    display: none;
  }
`;

const Profile = function Profile() {
  const [menuBarOpen, setNMenuBarOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 1024) {
        setNMenuBarOpen(true);
      } else {
        setNMenuBarOpen(false);
      }
    });
  }, [menuBarOpen]);
  return (
    <>
      <StyledMenu displayed={`${menuBarOpen ? "show" : "hide"}`} />
      <Outlet />
    </>
  );
};

export default Profile;
