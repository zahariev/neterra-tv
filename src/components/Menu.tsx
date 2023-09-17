import styled from "styled-components";

import StyledLink from "../components/StyledLink";

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

const Nav = styled.nav``;

const NavList = styled.ul`
  display: block;

  list-style: none;
  align-items: center;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  padding: 5px;
  color: #9e949f;
  float: left;
  clear: left;
`;

const MenuLink = styled(StyledLink)`
  color: #9e949f;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 400;
  padding: 3px;
  display: block;
  &:hover {
    color: #fff;
  }
`;

const Menu = () => {
  return (
    <>
      <Nav>
        <NavList>
          {menuItems.map((item, index) => {
            return (
              <NavItem key={index}>
                <MenuLink target={item.target} to={item.path}>
                  {item.label}
                </MenuLink>
              </NavItem>
            );
          })}
        </NavList>
      </Nav>
    </>
  );
};

export default Menu;
