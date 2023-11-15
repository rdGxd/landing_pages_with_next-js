import { GridContent, GridContentProps } from "@/components/GridContent/index.jsx";
import { GridImage, GridImageProps } from "@/components/GridImage/index.jsx";
import { GridText, GridTextProps } from "@/components/GridText/index.jsx";
import { GridTwoColumns, GridTwoColumnsProps } from "@/components/GridTwoColumns/index.jsx";
import { LogoLinkProps } from "@/components/LogoLink";
import { MenuLinkProps } from "@/components/MenuLink";
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
  // const [data, setResponse] = useState([]);

  // useEffect(() => {
  //   const pathname = location.pathname.replace(/[^A-Za-z0-9]/gi, "");
  //   const slug = pathname ? pathname : `${process.env.NEXT_PUBLIC_defaultSlug}`;

  //   const load = async () => {
  //     try {
  //       const data = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${slug}`);
  //       const json = await data.json();
  //       const pageData = mapData(json.data);
  //       setResponse(pageData[0]);
  //     } catch (error) {
  //       setResponse(undefined);
  //     }
  //   };

  //   load();
  // }, [location.pathname]);

  // useEffect(() => {
  //   if (data === undefined) {
  //     document.title = `Página não encontrada | ${process.env.NEXT_PUBLICsiteName}`;
  //   }

  //   if (data && !data.attributes.slug) {
  //     document.title = `Carregando... |  ${process.env.NEXT_PUBLICsiteName} `;
  //   }

  //   if (data && data.attributes.title) {
  //     document.title = `${data.attributes.title} |  ${process.env.NEXT_PUBLICsiteName}`;
  //   }
  // }, [data]);

  if (!data) {
    return <PageNotFound />;
  }

  // if (data && !data.slug) {
  //   return <Loading />;
  // }

  const { menu, sections, footerHtml, slug } = data;
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
