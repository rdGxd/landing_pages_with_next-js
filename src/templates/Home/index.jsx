import { GridContent } from "@/components/GridContent";
import { GridImage } from "@/components/GridImage";
import { GridText } from "@/components/GridText";
import { GridTwoColumns } from "@/components/GridTwoColumns";
import config from "@/config";
import Head from "next/head";
import P from "prop-types";
import { Base } from "../Base";
const Home = ({ data }) => {
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

Home.propTypes = {
  data: P.array,
};
