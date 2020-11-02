import React from "react";
import Layout from "../../components/Layout";
import SearchBar from "../../components/SearchBar";
import ListCardInfo from "../../components/ListCardInfo";
import { useRouter } from "next/router";

<<<<<<< HEAD:pages/search/[...search].js
const Search = () => {
=======
const Searchx = () => {
>>>>>>> 38ccc6fb7ef67ce493915179b01bb18619a6e58f:pages/search/[...text].js
  const router = useRouter();
  return (
    <Layout>
      <SearchBar />
      <ListCardInfo search={router.query.text} />
    </Layout>
  );
};

<<<<<<< HEAD:pages/search/[...search].js
export default Search;
=======
export default Searchx;
>>>>>>> 38ccc6fb7ef67ce493915179b01bb18619a6e58f:pages/search/[...text].js
