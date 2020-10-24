import Head from 'next/head'
import Navigation from '../Navigation'
import { GlobalStyles } from '../../GlobalStyles'

const Layout = (props) => {
  const styleDefault = '* { margin: 0;  padding: 0; }';

  return (
    <div>
      <Head>
        <title>CheapFetch</title>
      </Head>
      <GlobalStyles />
      <style>{styleDefault}</style>
      <Navigation />
      <div>{props.children}</div>
    </div>
  )
}

export default Layout
