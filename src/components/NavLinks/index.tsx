import { MenuLink } from "../MenuLink";
import * as Styled from "./styles";

export type NavLinksProps = {
  links: [
    {
      children: string;
      link: string;
      newTab?: boolean;
    },
  ];
};

export const NavLinks = ({ links }: NavLinksProps) => {
  return (
    <Styled.Container aria-label="Main menu">
      {links.map((link) => (
        <MenuLink key={link.link} {...link} />
      ))}
    </Styled.Container>
  );
};
