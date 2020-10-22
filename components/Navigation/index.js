import Link from 'next/link'
import { Anchor, Nav, List } from './styles'

const Navigation = () => {
  return (
    <Nav>
      <List>
        <li>
          <Link href='/'>
            <Anchor>Home</Anchor>
          </Link>
        </li>

        <li>
          <Link href='/'>
            <Anchor>Stores</Anchor>
          </Link>
        </li>

        <li>
          <Link href='/about'>
            <Anchor>About</Anchor>
          </Link>
        </li>
      </List>
    </Nav>
  )
}

export default Navigation
