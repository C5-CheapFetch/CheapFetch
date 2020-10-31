import React from 'react'
import Layout from '../../components/Layout'
import SearchBar from '../../components/SearchBar'
import ListCardInfo from '../../components/ListCardInfo'
import { useRouter } from 'next/router'

const search = () => {
  const router = useRouter()
  return (
    <Layout>
      <SearchBar />
      <ListCardInfo search={router.query.search} />
    </Layout>
  )
}

export default search
