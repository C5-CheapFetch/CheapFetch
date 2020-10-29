import Head from 'next/head'
import Navigation from '../Navigation'
import { GlobalStyles } from '../../GlobalStyles'

import Context from '../../Context'

const Layout = (props) => {
  const styleDefault = '* { margin: 0;  padding: 0; }';

  return (
    <div>
      <Context.Provider>
        <Head>
          <title>CheapFetch</title>
        </Head>
        <GlobalStyles />
        <style>{styleDefault}</style>
        <Navigation />
        <div>{props.children}</div>
      </Context.Provider>
    </div>
  )
}

export default Layout
