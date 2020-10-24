import CardSimpleStore from '../CardSimpleStore'
import { List, Title } from './styles'

const ListSimpleStore = () => {
  const stores = [
    {
      img: '/images/amazon.png',
      url: 'https://www.amazon.com.mx/',
    },
    {
      img: 'https://www.sams.com.mx/20.10.1/static/logo-fixed-2.png',
      url: 'https://www.sams.com.mx/',
    },
    {
      img: 'https://www.walmart.com.mx/static/media/logo-white.b89985b7.svg',
      url: 'https://www.walmart.com.mx/',
    },
    {
      img: '/images/amazon.png',
      url: 'https://www.amazon.com.mx/',
    },
  ]
  return (
    <List>
      <Title>Available Stores</Title>
      {stores.map((s) => (
        <CardSimpleStore url={s.url} img={s.img}></CardSimpleStore>
      ))}
    </List>
  )
}

export default ListSimpleStore
