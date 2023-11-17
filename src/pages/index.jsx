import { loadPages } from "@/api/load-pages";
import Home from "@/templates/Home";
import P from "prop-types";

export default function Index({ data = null }) {
  return <Home data={data} />;
}

export const getServerSideProps = async () => {
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
  };
};

Index.propTypes = {
  data: P.array,
};
