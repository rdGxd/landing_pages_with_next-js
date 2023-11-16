import { GridContent } from "@/components/GridContent";
import { GridImage } from "@/components/GridImage";
import { GridText } from "@/components/GridText";
import { GridTwoColumns } from "@/components/GridTwoColumns";
import { useEffect, useState } from "react";
import { Base } from "../Base";
import { Loading } from "../Loading";
import { PageNotFound } from "../PageNotFound";
import { mapData } from "@/api/map-data";

const Home = () => {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    const slug = `${process.env.NEXT_PUBLIC_DEFAULT_SLUG}`;

    const load = async () => {
      try {
        const data = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}[$eq]=${slug}`);
        const json = await data.json();
        const pageData = mapData(json.data);
        setResponse(pageData[0]);
      } catch (error) {
        setResponse(undefined);
      }
    };

    load();
  }, []);

  useEffect(() => {
    if (response === undefined) {
      document.title = `Página não encontrada | ${process.env.NEXT_PUBLIC_SITE_NAME}`;
    }

    if (response && !response.slug) {
      document.title = `Carregando... |  ${process.env.NEXT_PUBLIC_SITE_NAME} `;
    }

    if (response && response.title) {
      document.title = `${response.title} |  ${process.env.NEXT_PUBLIC_SITE_NAME}`;
    }
  }, [response]);

  if (response === undefined) {
    return <PageNotFound />;
  }

  if (response && !response.slug) {
    return <Loading />;
  }

  const { menu, sections, footerHtml, slug } = response;
  const { links, text, link, srcImg } = menu;

  return (
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
  );
};

export default Home;
