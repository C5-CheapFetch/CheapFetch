import React, { useContext } from 'react'
import { Context } from '../Layout/index.js'
import CardCategory from '../CardCategory'
import { List, Title } from './styles'

const ListCategories = () => {

  const {products} = useContext(Context)

  let categories = []

  products.forEach(r => {
    if (!categories.includes(r.category)) {
        categories.push(r.category)
    }
  })


  return (
    <List>
      <Title>Categories</Title>
      {categories.map((c,key) => (
        <CardCategory key={key} category={c}></CardCategory>
      ))}
    </List>
  )
}

export default ListCategories
