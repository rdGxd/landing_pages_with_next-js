import { Footer } from "../../components/Footer";
import { GoTop } from "../../components/GoTop";
import { Menu, PropsMenu } from "../../components/Menu";
import * as Styled from "./styles";

export type PropsBase = {
  children: React.ReactNode;
  footerHtml: string;
} & PropsMenu;

export const Base = ({ links = [], logoData, footerHtml, children }: PropsBase) => {
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
