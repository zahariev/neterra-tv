import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Icon from "../components/Icon";
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
    label: "Настройки",
    path: "/profile",
  },
  {
    label: "Моят абонамент",
    path: "/profile/subscription",
  },
  {
    label: "Neterra.TV+ история",
    path: "/profiles/extras/history",
  },
  {
    label: "Платежни методи",
    path: "/profile/payment-methods",
  },
  {
    label: "Родителски контрол",
    path: "/profile/parental-control",
  },
  {
    label: "Потребителски сесии",
    path: "/profile/sessions",
  },
  {
    label: "Моите подаръчни карти",
    path: "/profile/my-gift-cards",
  },
  {
    label: "Доведи приятел",
    path: "/profile/my-promo-code",
    target: "_blank",
  },
  {
    label: "Приложения",
    path: "/profile/applications",
  },
  {
    label: "Съобщения",
    path: "/profile/messages",
  },
  {
    label: "Маркетинг",
    path: "/profile/marketing",
  },
  {
    label: "Код от партньор",
    path: "/profile/partners",
  },
  {
    label: "Изход",
    path: "/sign-out",
  },
];

const Menu = () => {
  return (
    <>
      <Nav>
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

export default Menu;
