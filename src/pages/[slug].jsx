import { useRouter } from "next/router";
import P from "prop-types";

import { loadPages } from "@/api/load-pages";
import Home from "@/templates/Home";
import { Loading } from "@/templates/Loading";

export default function Page({ data }) {
  const router = useRouter();

  if (router.isFallback) {
    return <Loading />;
  }

  return <Home data={data} />;
}

Page.propTypes = {
  data: P.array,
};

export const getStaticPaths = async () => {
  // const paths = (await loadPages()).map((page) => {
  //   return {
  //     params: {
  //       slug: page.slug,
  //     },
  //   };
  // });

  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  let data;

  try {
    data = await loadPages(context.params.slug);
  } catch (error) {
    data = null;
  }

  if (!data) {
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
