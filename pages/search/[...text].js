import React,{ useEffect } from "react";
import Layout from "../../components/Layout";
import SearchBar from "../../components/SearchBar";
import ListCardInfo from "../../components/ListCardInfo";
import { useRouter } from "next/router";

const Search = () => {

  const router = useRouter();

  useEffect(() => { //esta linea sirve para que cuando se renderice la pagina envíe al usuario hasta arriba de la pagina
    window.scrollTo(0, 0)
  }, [])

  return (
    <Layout title="Search">
      <SearchBar />
      <ListCardInfo search={router.query.text} />{" "}
    </Layout>
  );
};

export default Search;
