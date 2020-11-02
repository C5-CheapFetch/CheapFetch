import CardSimpleStore from '../CardSimpleStore'
import { List, Title } from './styles'

const ListSimpleStore = () => {
  const stores = [
    {
      img: '/images/MercadoLibreCarroussel.png',
      url: 'https://www.mercadolibre.com.co/',
    },
    {
      img: '/images/AliExpressCarroussel.png',
      url: 'https://es.aliexpress.com/',
    },
    {
      img: '/images/SamsCarroussel.png',
      url: 'https://www.sams.com.mx/',
    },
    {
      img: '/images/WalmartCarroussel.png',
      url: 'https://www.walmart.com.mx/',
    },
    {
      img: '/images/amazonCarroussel.png',
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
