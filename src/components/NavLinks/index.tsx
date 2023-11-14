import { MenuLink } from "../MenuLink";
import * as Styled from "./styles";

export type PropsNavLinks = {
  links: [
    {
      children: string;
      link: string;
      newTab: boolean;
    },
  ];
};

export const NavLinks = ({ links }: PropsNavLinks) => {
  return (
    <Styled.Container aria-label="Main menu">
      {links.map((link) => (
        <MenuLink key={link.link} {...link} />
      ))}
    </Styled.Container>
  );
};
