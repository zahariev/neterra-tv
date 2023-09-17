import styled from "styled-components";

interface IconProps {
  styleProps?: React.CSSProperties;
}

const StyledImg = styled.img`
  width: 225px;
  height: 56px;
  cursor: pointer;
`;

const Icon: React.FC<IconProps & React.ImgHTMLAttributes<HTMLImageElement>> = ({
  styleProps,
  ...props
}) => {
  return <StyledImg style={styleProps} {...props} />;
};

export default Icon;
