import Head from 'next/head'
import Navigation from './Navigation'

const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>CheapFetch</title>
      </Head>
      <Navigation />
      <div>{props.children}</div>
    </div>
  )
}

export default Layout
