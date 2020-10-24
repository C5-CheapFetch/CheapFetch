import CardStore from '../CardStore'
import { List, Title } from './styles'

const ListSimpleStore = () => {
  const stores = [
    {
      img: '/images/amazon.png',
      price: '150.00',
      url:'https://www.amazon.com.mx/dp/B08HPCFCSV?pf_rd_r=PH11HDFCNMHST3AE74WV&pf_rd_p=87fbb934-9541-44f0-bc43-15507431b95b',
    },
    {
      img: '/images/amazon.png',
      price: '170.00',
      url:'https://www.amazon.com.mx/dp/B08HPCFCSV?pf_rd_r=PH11HDFCNMHST3AE74WV&pf_rd_p=87fbb934-9541-44f0-bc43-15507431b95b',
    },
    {
      img: '/images/amazon.png',
      price: '190.00',
      url:'https://www.amazon.com.mx/dp/B08HPCFCSV?pf_rd_r=PH11HDFCNMHST3AE74WV&pf_rd_p=87fbb934-9541-44f0-bc43-15507431b95b',
    },
    {
      img: '/images/amazon.png',
      price: '200.00',
      url:'https://www.amazon.com.mx/dp/B08HPCFCSV?pf_rd_r=PH11HDFCNMHST3AE74WV&pf_rd_p=87fbb934-9541-44f0-bc43-15507431b95b',
    },
  ]
  return (
    <List>
      <Title>Available in the following stores</Title>
      {stores.map((s) => (
        <CardStore img={s.img} price={s.price} url={s.url}></CardStore>
      ))}
    </List>
  )
}

export default ListSimpleStore
