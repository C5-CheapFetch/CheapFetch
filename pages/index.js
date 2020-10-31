import React from "react";
import Head from "next/head";

import Layout from "../components/Layout";
import { CarrousselShops } from "../components/CarrousselShops";
import SearchHome from "../components/SearchHome";
import GridCards from "../components/GridCards";

const Index = () => {
  return (
    <Layout>
      <Head>
        <title> CheapFetch - Home </title>{" "}
      </Head>{" "}
      <SearchHome />
      <CarrousselShops />
      <GridCards />
    </Layout>
  );
};

export default Index;
