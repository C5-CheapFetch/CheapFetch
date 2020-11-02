import RightNav from '../RightNav'
import CenterNav from '../CenterNav'
import { Nav, Menu, LogoContainer } from './styles'
import Logo from '../../../public/images/logo.svg'

const Navigation = () => {
  return (
    <Nav>
      <Menu />
      <LogoContainer>
        <Logo width="100%"></Logo>
      </LogoContainer>
      <CenterNav />
      <RightNav />
    </Nav>
  )
}

export default Navigation
