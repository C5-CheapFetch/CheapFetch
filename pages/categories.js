import Layout from "../components/Layout";
import Head from "next/head";
import ListCategories from "../components/ListCategories";
const Categories = () => {
  return (
    <Layout>
      <Head>
        <title>CheapFetch - Categories</title>
      </Head>
      <ListCategories />
    </Layout>
  );
};

export default Categories;
