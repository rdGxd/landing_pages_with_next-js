import { mapData } from "@/api/map-data";
import Home, { PageData } from "@/templates/Home";

type IndexProps = {
  data?: PageData[];
};

export default function Index({ data }: IndexProps) {
  console.log(data);
  return <Home data={data} />;
}

export const getStaticProps = async () => {
  const raw = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_defaultSlug}`);
  const json = await raw.json();
  const data = mapData(json).slice(0, 1);

  return {
    props: {
      data,
    },
  };
};
