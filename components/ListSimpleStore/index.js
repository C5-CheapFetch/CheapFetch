import CardSimpleStore from '../CardSimpleStore'
import { List, Title } from './styles'

const ListSimpleStore = () => {
  const stores = [
    {
      id: 1,
      img: '/images/MercadoLibreCarroussel.png',
      url: 'https://www.mercadolibre.com.co/',
    },
    // {
    //   id: 2,
    //   img: '/images/AliExpressCarroussel.png',
    //   url: 'https://es.aliexpress.com/',
    // },
    // {
    //   id: 3,
    //   img: '/images/SamsCarroussel.png',
    //   url: 'https://www.sams.com.mx/',
    // },
    // {
    //   id: 4,
    //   img: '/images/WalmartCarroussel.png',
    //   url: 'https://www.walmart.com.mx/',
    // },
    {
      id: 5,
      img: '/images/AmazonCarroussel.png',
      url: 'https://www.amazon.com.mx/',
    },
  ]
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
