import React from 'react'
import Layout from '../../components/Layout'
import Search from '../../components/Search'
import ListCardInfo from '../../components/ListCardInfo'
import { useRouter } from 'next/router'

const search = () => {
  const router = useRouter()
  return (
    <Layout>
      <Search />
      <ListCardInfo search={router.query.search} />
    </Layout>
  )
}

export default search
