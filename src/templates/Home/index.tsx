import { GridContent, GridContentProps } from "@/components/GridContent/index.jsx";
import { GridImage, GridImageProps } from "@/components/GridImage/index.jsx";
import { GridText, GridTextProps } from "@/components/GridText/index.jsx";
import { GridTwoColumns, GridTwoColumnsProps } from "@/components/GridTwoColumns/index.jsx";
import { LogoLinkProps } from "@/components/LogoLink";
import { MenuLinkProps } from "@/components/MenuLink";
import Head from "next/head";
import { Base } from "../Base";
import { PageNotFound } from "../PageNotFound";

export type PageData = {
  attributes: {
    title: string;
    slug: string;
    footerHtml: string;
    menu: LogoLinkProps & { links: MenuLinkProps[] };
    sections: SectionProps[];
  };
};

export type SectionProps = GridImageProps | GridTextProps | GridTwoColumnsProps | GridContentProps;

export type HomeProps = {
  data: PageData[];
};

const Home = ({ data }: HomeProps) => {
  if (!data || !data.length) {
    return <PageNotFound />;
  }

  const { menu, sections, footerHtml, slug, title } = data[0].attributes;
  const { links, text, link, srcImg } = menu;

  return (
    <>
      <Head>
        <title>
          `{title} | ${process.env.NEXT_PUBLIC_siteName}`
        </title>
      </Head>
      <Base links={links} footerHtml={footerHtml} logoData={{ text, link, srcImg }}>
        {sections.map((section, index) => {
          const { component } = section;
          const key = `${slug}-${index}`;

          if (component === "section.section-two-columns") return <GridTwoColumns {...section} key={key} />;

          if (component === "section.section-content") return <GridContent {...section} key={key} />;

          if (component === "section.section-grid-text") return <GridText {...section} key={key} />;

          if (component === "section.section-grid-image") return <GridImage {...section} key={key} />;
        })}
      </Base>
    </>
  );
};

export default Home;
