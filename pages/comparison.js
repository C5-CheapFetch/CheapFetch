import React,{ useEffect } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import SearchBar from "../components/SearchBar";
import CardCompare1 from "../components/CardCompare1";
import CardCompare2 from "../components/CardCompare2";
import Comments from "../components/Comments";
import Title from "../components/Title";

const Comparison = () => {

  useEffect(() => { //esta linea sirve para que cuando se renderice la pagina envíe al usuario hasta arriba de la pagina
    window.scrollTo(0, 0)
  }, [])

  return (

    <Layout>
      <Head>
        <title> CheapFetch - Comparison </title>{" "}
      </Head>{" "}
      <SearchBar />
      <CardCompare1 />
      <Title />
      <CardCompare2 />
      <CardCompare2 />
      <CardCompare2 />
      <Comments />
    </Layout>

  )
}

export default Comparison;
