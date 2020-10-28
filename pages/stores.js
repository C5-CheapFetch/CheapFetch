import Layout from "../components/Layout";
import Head from "next/head";
import ListSimpleStore from "../components/ListSimpleStore";
const Stores = () => {
  return (
    <Layout>
      <Head>
        <title>CheapFetch - Stores</title>
      </Head>
      <ListSimpleStore />
    </Layout>
  );
};

export default Stores;
