import styled from "styled-components";
import StyledLink from "../components/StyledLink";

interface MenuProps {
  styleProps?: React.CSSProperties;
  displayed: string;
}

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

const Nav = styled.nav`
  border-right: 1px dashed #9e949f;
  width: 320px;
  height: 90%;
  position: absolute;
`;

const NavList = styled.ul`
  display: block;
  list-style: none;
  align-items: center;
  padding: 2rem;
  margin: 0;
`;

const NavItem = styled.li`
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
  padding: 0.48rem 1rem;
`;

const Menu: React.FC<MenuProps & React.HTMLProps<HTMLDivElement>> = ({
  styleProps,
  displayed,
  ...props
}) => {
  return (
    <>
      <Nav style={styleProps} {...props} className={displayed}>
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
