import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import Icon from "../components/Icon";
import logo from "../assets/neterra-tv-logo.svg";
import shopping_cart from "../assets/shopping_cart.svg";
import profile from "../assets/profile.svg";
import logout from "../assets/logout.svg";
import menu from "../assets/menu.svg";
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
  left: 0;

  @media (max-width: 1280px) {
    justify-content: flex-start;
    height: 5.5rem;
  }

  @media (max-width: 1024px) {
    height: 3.5rem;
    justify-content: center;
  }
`;

const StyleLink = styled(Link)`
  padding: 0rem 2rem;
`;

const MenuIcon = styled(Icon)`
  width: 25px;
  height: 25px;
  padding: 0.5rem 1rem;
  color: white;
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 0.5rem;
  display: none;

  @media (max-width: 1024px) {
    display: block;
  }
`;

const NavList = styled.ul`
  display: inline-flex;
  background-color: #452d64;

  gap: 0rem 1rem;
  list-style: none;
  align-items: center;
  padding: 0;
  margin: 0;
  margin-top: 0.6rem;
  li:first-child {
    min-width: 6rem;
  }
  @media (max-width: 1280px) {
    flex-wrap: wrap;
    justify-content: flex-end;
    gap: 0rem 2rem;
  }
  @media (max-width: 1024px) {
    display: none;
  }
`;

const NavItem = styled.li`
  min-width: 2rem;
  margin-right: 0.5rem;
`;

const CustomIcon = styled(Icon)`
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
        <StyleLink to="/">
          <Icon src={logo} alt="App Logo" />
        </StyleLink>

        <MenuIcon className="material-symbols-rounded" src={menu} alt="menu" />
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
            <CustomIcon
              className="material-symbols-rounded"
              src={shopping_cart}
              alt="Search"
            />
          </li>
          <li>
            <Link to="/profile">
              <CustomIcon src={profile} alt="Search" />
            </Link>
          </li>
          <li>
            <CustomIcon src={logout} alt="Search" />
          </li>
        </NavList>
      </Nav>
      <Outlet />
    </>
  );
};

export default Navigation;
