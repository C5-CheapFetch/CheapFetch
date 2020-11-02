import React,{ useState, createContext, useEffect } from 'react'
import Head from 'next/head'
import Navigation from '../Navbar/Navigation'
import { GlobalStyles } from '../../GlobalStyles'



export const Context = createContext()

const Layout = (props) => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    
    async function getStaticProps() {
      
      //fetch a la api
      const res = await fetch('https://apidepruebas.azurewebsites.net/api/items-list/')
      const data = await res.json()

      setProducts(data)
    }
    
    getStaticProps()
  }, [])



  return (
    <div>
      <Context.Provider value={ {products, setProducts} }>
        <Head>
          <title>CheapFetch</title>
        </Head>
        <GlobalStyles />
        <Navigation />
        <div>{props.children}</div>
      </Context.Provider>
    </div>
  )
}


export default Layout