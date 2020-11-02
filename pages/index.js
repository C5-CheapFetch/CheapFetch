import React from "react";
import Head from "next/head";

import Layout from "../components/Layout";
import { CarrousselShops } from "../components/CarrousselShops";
import SearchHome from "../components/SearchHome";
import GridCards from "../components/GridCards";
import { AppDescription } from "../components/AppDescription";

const Index = () => {
  return (
    <Layout>
      <Head>
        <title> CheapFetch - Home </title>{" "}
      </Head>{" "}
      <SearchHome />
      <CarrousselShops />
      <AppDescription />
      <GridCards />

    </Layout>
  );
};

export default Index;
