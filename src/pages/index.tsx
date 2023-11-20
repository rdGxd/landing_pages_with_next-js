import { loadPages } from "@/api/load-pages";
import Home, { HomeProps } from "@/templates/Home";
import { GetStaticProps } from "next";

export default function Index({ data = null }: HomeProps) {
  return <Home data={data} />;
}

// Apenas utilize getServerSideProps se você realmente nao puder colocar esse dados na pagina sem ter buscado na API

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  let data = null;

  try {
    data = await loadPages("landing-page");
  } catch (error) {
    data = null;
  }

  if (!data || !data.length) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
    revalidate: 60,
  };
};
