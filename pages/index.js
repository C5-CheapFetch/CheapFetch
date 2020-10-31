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
<<<<<<< HEAD
        <title> CheapFetch - Home </title>{" "}
      </Head>{" "}
      <Search />
=======
        <title>CheapFetch - Home</title>
      </Head>
      <SearchHome />
>>>>>>> f5ab9f40ea05d9de10396e81e9631107431c0c7d
      <CarrousselShops />
      <GridCards />
    </Layout>
  );
};


export default Index;
