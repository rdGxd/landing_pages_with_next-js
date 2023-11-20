import { GridContent, GridContentProps } from "@/components/GridContent";
import { GridImage, GridImageProps } from "@/components/GridImage";
import { GridText, GridTextProps } from "@/components/GridText";
import { GridTwoColumns, GridTwoColumnsProps } from "@/components/GridTwoColumns";
import { LogoLinkProps } from "@/components/LogoLink";
import { MenuLinkProps } from "@/components/MenuLink";
import config from "@/config";
import Head from "next/head";
import { Base } from "../Base";

export type PageData = {
  title: string;
  slug: string;
  footerHtml: string;
  menu: LogoLinkProps & { links: MenuLinkProps[] };
  sections: SectionProps[];
};

export type SectionProps = GridContentProps | GridImageProps | GridTextProps | GridTwoColumnsProps;

export type HomeProps = {
  data: PageData[];
};

const Home = ({ data }: HomeProps) => {
  const { menu, sections, footerHtml, slug, title } = data[0];
  const { links, text, link, srcImg } = menu;

  return (
    <>
      <Head>
        <title>{`${title} | ${config.siteName}`}</title>
        <meta name="theme-color" content="#0A1128" />
        <meta name="description" content="As landing pages mais legais da internet." />
      </Head>

      <Base links={links} footerHtml={footerHtml} logoData={{ text, link, srcImg }}>
        {sections.map((section, index) => {
          const { component } = section;
          const key = `${slug}-${index}`;

          if (component === "section.section-two-columns") {
            return <GridTwoColumns {...(section as GridTwoColumnsProps)} key={key} />;
          }

          if (component === "section.section-content") {
            return <GridContent {...(section as GridContentProps)} key={key} />;
          }

          if (component === "section.section-grid-text") {
            return <GridText {...(section as GridTextProps)} key={key} />;
          }

          if (component === "section.section-grid-image") {
            return <GridImage {...(section as GridImageProps)} key={key} />;
          }
        })}
      </Base>
    </>
  );
};

export default Home;
