import RightNav from '../RightNav'
import CenterNav from '../CenterNav'
import { Nav, Menu, Logo } from './styles'

const Navigation = () => {
  return (
    <Nav>
      <Menu src='images/menu.png' height={50} alt='menu' />
      <Logo></Logo>
      <CenterNav />
      <RightNav />
    </Nav>
  )
}

export default Navigation
