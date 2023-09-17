import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import Icon from "../components/Icon";
import logo from "../assets/neterra-tv-logo.svg";
import shopping_cart from "../assets/shopping_cart.svg";
import profile from "../assets/profile.svg";
import logout from "../assets/logout.svg";
import StyledLink from "../components/StyledLink";

const Nav = styled.nav`
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #452d64;
  color: white;
  position: sticky;
  top: 0;
`;
//   padding: 1rem 2rem;
//   background-color: #333;

const NavList = styled.ul`
  display: flex;
  gap: 1rem;
  list-style: none;
  align-items: center;
  padding: 0;
  margin: 0;

  li:first-child {
    min-width: 6rem;
  }
`;

const NavItem = styled.li`
  min-width: 2rem;
`;

const MenuIcon = styled(Icon)`
  width: 25px;
  height: 25px;
  padding: 0.5rem;
  color: white;
  cursor: pointer;
  font-weight: 700;
  fill: white;
  top: 0.5rem;
`;
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
          <Icon src={logo} alt="App Logo" />
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

          <li>
            <MenuIcon
              className="material-symbols-rounded"
              src={shopping_cart}
              alt="Search"
            />
          </li>
          <li>
            <MenuIcon src={profile} alt="Search" />
          </li>
          <li>
            <MenuIcon src={logout} alt="Search" />
          </li>
        </NavList>
      </Nav>
      <Outlet />
    </>
  );
};

export default Navigation;
