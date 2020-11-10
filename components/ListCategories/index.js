import React, { useContext } from 'react'
import CardCategory from '../CardCategory'
import { List, Title } from './styles'
import { DataContext } from '../../pages/_app'

const ListCategories = () => {
  const { categories } = useContext(DataContext)
  return (
    <List>
      <Title>Categories</Title>
      {categories.map((c, key) => (
        <CardCategory key={key} category={c}></CardCategory>
      ))}
    </List>
  )
}

export default ListCategories
