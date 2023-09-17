import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import LogoIcon from "../components/Icon";
import logo from "../assets/neterra-tv-logo.svg";
import StyledLink from "../components/StyledLink";

const Nav = styled.nav`
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #452d64;
  color: white;
  padding: 0rem 1rem;
  position: sticky;
  top: 0;
`;
//   padding: 1rem 2rem;
//   background-color: #333;

const NavList = styled.ul`
  display: flex;
  gap: 1rem;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li``;

const menuItems = [
  {
    label: "ТВ на живо",
    path: "/live",
  },
  {
    label: "Видеотека",
    path: "/videos",
  },
  {
    label: "Програма",
    path: "/guide",
  },
  {
    label: "Абонамент",
    path: "/access-plans",
  },
  {
    label: "Neterra.TV+",
    path: "/plus",
  },
  {
    label: "Блог",
    path: "https://blog.neterra.tv",
    target: "_blank",
  },
  {
    label: "Приложения",
    path: "/profile/applications",
  },
];
/*ТВ на живо Видеотека Програма Абонамент Neterra.TV+ Блог Приложения */

const Navigation = () => {
  return (
    <>
      <Nav>
        <Link to="/">
          <LogoIcon src={logo} alt="App Logo" />
        </Link>
        <NavList>
          {menuItems.map((item, index) => {
            return (
              <NavItem key={index}>
                <StyledLink target={item.target} to={item.path}>
                  {item.label}
                </StyledLink>
              </NavItem>
            );
          })}
        </NavList>
      </Nav>
      <Outlet />
    </>
  );
};

export default Navigation;
