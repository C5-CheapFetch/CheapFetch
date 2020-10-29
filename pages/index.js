import React from "react";
import { useFetchApi } from "../hooks/useFetchApi";
import Head from "next/head";

import Layout from "../components/Layout";
import { CarrousselShops } from "../components/CarrousselShops";
import Search from "../components/Search";
import GridCards from "../components/GridCards";

const Index = () => {
  //FETCH A LA API DE PRUEBA
  const [itemList] = useFetchApi(
    "https://apidjangoprueba.azurewebsites.net/api/items-list/"
  );

  //___local storage___
  // se guarda la llamada de la api en el local storage para usarse en toda la app
  // localStorage.setItem( "items", JSON.stringify( itemList ))

  // se obtienen los productos del local storage y se almacenan en una variable
  // const itemsLocalStorage = JSON.parse( localStorage.getItem("items"))

  console.log(itemList);

  return (
    <Layout>
      <Head>
        <title>CheapFetch - Home</title>
      </Head>
      <Search />
      <CarrousselShops />
      <GridCards />
    </Layout>
  );
};

export default Index;
