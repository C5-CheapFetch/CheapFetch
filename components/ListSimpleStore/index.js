import { useContext } from 'react'
import { DataContext } from '../../pages/_app'
import CardSimpleStore from '../CardSimpleStore'
import { List, Title } from './styles'

const ListSimpleStore = () => {
  const { stores } = useContext(DataContext)
  return (
    <List>
      <Title>Available Stores</Title>
      {stores.map((s) => (
        <CardSimpleStore key={s.id} url={s.url} img={s.img}></CardSimpleStore>
      ))}
    </List>
  )
}

export default ListSimpleStore
