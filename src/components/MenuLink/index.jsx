import P from "prop-types";
import * as Styled from "./styles";

export const MenuLink = ({ children, link, newTab = false }) => {
  const target = newTab ? "_blank" : "_self";
  const nextLink = link.match(/.*\/.*/) ? true : false;

  if (nextLink) {
    return (
      <Styled.Container href={link} target={target}>
        {children}
      </Styled.Container>
    );
  }

  return (
    <Styled.Container href={link} target={target}>
      {children}
    </Styled.Container>
  );
};

MenuLink.propTypes = {
  children: P.node.isRequired,
  link: P.string.isRequired,
  newTab: P.bool,
};
