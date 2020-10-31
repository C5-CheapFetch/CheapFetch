import CardInfo from '../CardInfo'
import { List, Title, TitlePink } from './styles'

import { useContext, useEffect, useState } from 'react'
import { Context } from '../Layout/index.js'

const ListCardInfo = ({ search }) => {
  const { products } = useContext(Context)
  const text = search[0]
  const category = search[1]
  const [result, setState] = useState([])

  useEffect(() => {
    setState(products.filter((r) => r.category.includes(category)))
  })

  return (
    <List>
      <Title>
        You searched for: <TitlePink>{text}</TitlePink>
      </Title>
      <Title>
        Category: <TitlePink>{category}</TitlePink>
      </Title>
      {result.map((r) => (
        <CardInfo></CardInfo>
      ))}
    </List>
  )
}

export default ListCardInfo
