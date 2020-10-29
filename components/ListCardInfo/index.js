import CardInfo from '../CardInfo'
import { List,Title,TitlePink } from './styles'

const ListCardInfo = ({search}) => {
    return (
      <List>
        <Title>You searched for: <TitlePink>{search}</TitlePink></Title>
        <CardInfo></CardInfo>
        <CardInfo></CardInfo>
        <CardInfo></CardInfo>
      </List>
    )
}

export default ListCardInfo
