import CardInfo from '../CardInfo'
import SelectCategory from '../SelectCategory'
import { List, Title, TitlePink, Container } from './styles'
import { useContext } from 'react'
import { DataContext } from '../../pages/_app'

const ListCardInfo = ({ search }) => {
  const { products } = useContext(DataContext)
  const text = search ? search[0] : ''
  const category = search ? search[1] : ''

  const compare = (a, b) => {
    if (a.price < b.price) {
      return -1
    }
    if (a.price > b.price) {
      return 1
    }
    return 0
  }

  const getSearch = () => {
    //Funcion para filtrar los resultados
    let filtered = products.filter((r) => {
      if (text === 'all') {
        return r.category.includes(category)
      } else if (category === 'all') {
        return r.name.toLowerCase().includes(text.toLowerCase())
      } else {
        return (
          r.category.includes(category) &&
          r.name.toLowerCase().includes(text.toLowerCase())
        )
      }
    })
    return filtered.sort(compare)
  }

  return (
    <List>
      {getSearch().length === 0 ? (
        <Title>
          No results for: <TitlePink>{text}</TitlePink>
        </Title>
      ) : (
        <>
          <Title>
            You searched for: <TitlePink>{text} </TitlePink>
          </Title>

          <Title>
            Category: <TitlePink>{category}</TitlePink>
          </Title>
        </>
      )}
      <SelectCategory category={category} text={text} />
      <Container>
        {getSearch().map((r) => (
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
