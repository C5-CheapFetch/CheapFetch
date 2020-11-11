import { Card, Image, Info, Name, Price, Store, Url } from './styles'
import { useRouter } from 'next/router'

const CardInfo = ({ picture, name, price, stores, url_located }) => {
  const router = useRouter()
  const goToComparison = () => {
    // console.log({ picture, name, price, stores, url_located })
    router.push({
      pathname: '/comparison',
      query: { item: JSON.stringify({ picture, name, price, stores, url_located }) },
    })
  }

  return (
    // <Url href={url_located} target='_blank'>
    <Url onClick={goToComparison}>
      <Card>
        <Image src={picture} />
        <Info>
          <Name className='cardinfo__name'>{name}</Name>
          <Price>${price} USD</Price>
          <Store>{stores}</Store>
        </Info>
      </Card>
    </Url>
  )
}

export default CardInfo
