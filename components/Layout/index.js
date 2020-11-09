import Head from 'next/head'
import Navigation from '../Navbar/Navigation'
import { GlobalStyles } from '../../GlobalStyles'
import Footers from '../Footer'
import { Container } from './styles'

const Layout = (props) => {
  return (
    <>
      <Head>
        <title>CheapFetch - {props.title}</title>
        <link
          rel='shortcut icon'
          type='image/png'
          href='/images/favicon-16x16.png'
        />
        <meta name='Description' content='Search once, find everywhere'></meta>
      </Head>
      <GlobalStyles />
      <Navigation />
      <Container>{props.children}</Container>
      <Footers />
    </>
  )
}

export default Layout
