import Link from 'next/link'
import { Anchor, List, Li, Separator } from './styles'

const CenterNav = () => {
  return (
    <List>
      <Li>
        <Link href='/'>
          <Anchor> Home </Anchor>
        </Link>
      </Li>
      <Li>
        <Separator />
      </Li>
      <Li>
        <Link href='/categories'>
          <Anchor> Categories </Anchor>
        </Link>
      </Li>
      <Li>
        <Separator />
      </Li>
      <Li>
        <Link href='/stores'>
          <Anchor> Stores </Anchor>
        </Link>
      </Li>
    </List>
  )
}

export default CenterNav
