import { Card, Image, Info, Name, Price, Store } from './styles'

const CardInfo = ({picture, name, price, stores}) => {

  stores = 'Amazon'

  return (
    <Card>
      <Image src={picture} />
      <Info>
        <Name className='cardinfo__name'>{name}</Name>
        <Price>${price}</Price>
        <Store>{stores}</Store>
      </Info>
    </Card>
  )
}

export default CardInfo