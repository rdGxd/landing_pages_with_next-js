import { mapData } from "@/api/map-data";
import config from "@/config";
import Home from "@/templates/Home";
import P from "prop-types";

export default function Index({ data = null }) {
  return <Home data={data} />;
}

export const getStaticProps = async () => {
  const raw = await fetch(`${config.url}${config.defaultSlug}`);
  const json = await raw.json();
  const data = mapData(json.data);

  return {
    props: {
      data,
    },
  };
};

Index.propTypes = {
  data: P.array,
};
