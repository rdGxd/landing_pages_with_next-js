import { Close as CloseIcon } from "@styled-icons/material-outlined/Close";
import { Menu as MenuIcon } from "@styled-icons/material-outlined/Menu";

import { useState } from "react";
import { LogoLink, PropsLogoLink } from "../LogoLink";
import { NavLinks, PropsNavLinks } from "../NavLinks";
import { SectionContainer } from "../SectionContainer";
import * as Styled from "./styles";

export type PropsMenu = {
  links: PropsNavLinks[];
  logoData: PropsLogoLink;
};

export const Menu = ({ links, logoData }: PropsMenu) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Styled.Button visible={visible} onClick={() => setVisible(true)} aria-label="Open/Close menu">
        {visible ? <CloseIcon aria-label="Close menu" /> : <MenuIcon aria-label="Open menu" />}
      </Styled.Button>
      <Styled.Container visible={visible} onClick={() => setVisible(false)}>
        <SectionContainer>
          <Styled.MenuContainer>
            <LogoLink {...logoData} />
            <NavLinks links={links} />
          </Styled.MenuContainer>
        </SectionContainer>
      </Styled.Container>
    </>
  );
};
