import styled from "styled-components";

const StyledImg = styled.img`
  width: 230px;
  height: 28px;
  position: relative;
  cursor: pointer;
`;

const LogoIcon: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = ({
  ...props
}) => {
  return <StyledImg {...props} />;
};

export default LogoIcon;
