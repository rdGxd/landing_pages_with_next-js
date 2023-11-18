import { loadPages } from "@/api/load-pages";
import Home from "@/templates/Home";
import P from "prop-types";

export default function Index({ data = null }) {
  return <Home data={data} />;
}

// Apenas utilize getServerSideProps se você realmente nao puder colocar esse dados na pagina sem ter buscado na API

export const getStaticProps = async () => {
  let data;

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
    revalidate: 10,
  };
};

Index.propTypes = {
  data: P.array,
};
