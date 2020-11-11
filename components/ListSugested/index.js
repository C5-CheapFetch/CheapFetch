import CardInfo from '../CardInfo'
import SelectCategory from '../SelectCategory'
import { List, Title, TitlePink, Container, NotFound } from './styles'
import { useContext } from 'react'
import { DataContext } from '../../pages/_app'

const ListCardInfo = ({ items }) => {
  return (
    <List>
      <Title>maybe you might be interested in these products:</Title>
      <Container>
        {items.map((r) => (
          <CardInfo
            key={r.id}
            picture={r['picture_url']}
            price={r.price}
            name={r.name}
            stores={r.stores}
            url_located={r.url_located}
          ></CardInfo>
        ))}
      </Container>
    </List>
  )
}

export default ListCardInfo
