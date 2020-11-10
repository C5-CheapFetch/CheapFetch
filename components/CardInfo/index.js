import { Card, Image, Info, Name, Price, Store, Url } from './styles'

const CardInfo = ({picture, name, price, stores, url_located}) => {

  return (
    <Url href={url_located} target='_blank'>
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