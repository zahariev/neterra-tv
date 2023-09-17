import styled from "styled-components";
import { darken } from "polished";
import { Link, LinkProps } from "react-router-dom";
import { buildPath } from "../utils/pathBuilder";

const StyledLinkComponent = styled(Link)`
  color: #fff;
  text-decoration: none;

  &:hover {
    background-color: ${darken(0.1, "#1e94ba")};
  }
`;

interface StyledLinkProps extends LinkProps {
  to: string; // Explicitly define the 'to' prop
  styleProps?: React.CSSProperties; // Allow any other props
}

const StyledLink: React.FC<StyledLinkProps> = ({
  to,
  styleProps,
  ...props
}) => {
  return (
    <StyledLinkComponent style={styleProps} to={buildPath(to)} {...props} />
  );
};
export default StyledLink;
