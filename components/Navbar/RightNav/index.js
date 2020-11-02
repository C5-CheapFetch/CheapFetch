import Link from 'next/link'
import { List, Button } from './styles'
import { useFetchUser } from '../../../utils/user'

const RightNav = () => {
  const { user, loading } = useFetchUser()
  return (
    <List>
      {user && !loading
        ? [
            <Link href='/api/logout'>
              <Button> Log Out </Button>
            </Link>,
            <Link href='/api/me'>
              <Button> Profile </Button>
            </Link>,
          ]
        : null}
      {!user && !loading ? (
        <Link href='/api/login'>
          <Button>Log In</Button>
        </Link>
      ) : null}
    </List>
  )
}

export default RightNav
