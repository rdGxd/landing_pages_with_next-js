import { LogoLinkProps } from "@/components/LogoLink";
import { MenuLinkProps } from "@/components/MenuLink";
import { Footer } from "../../components/Footer";
import { GoTop } from "../../components/GoTop";
import { Menu } from "../../components/Menu";
import * as Styled from "./styles";

export type BaseProps = {
  children: React.ReactNode;
  links: MenuLinkProps[];
  logoData: LogoLinkProps;
  footerHtml: string;
};

export const Base = ({ links = [], logoData, footerHtml, children }: BaseProps) => {
  return (
    <>
      <Menu links={links} logoData={logoData} />
      <Styled.Container>
        {children}
        <Footer html={footerHtml} />
      </Styled.Container>
      <GoTop />
    </>
  );
};
