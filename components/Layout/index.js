import React,{ useState, createContext, useEffect } from 'react'
import Head from 'next/head'
import Navigation from '../Navigation'
import { GlobalStyles } from '../../GlobalStyles'

// import { Context } from '../../Context'

export const Context = createContext()

const Layout = (props) => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    
    async function getStaticProps() {
      
      //fetch a la api
      // const data = await fetchData('https://pokeapi.co/api/v2/pokemon')
      const res = await fetch('https://apidjangoprueba.azurewebsites.net/api/items-list/')
      const data = await res.json()
      
      // console.log(data)
      
      // return {
      //   props: {
      //     data
      //   },
      // }

      setProducts(data)
    }
    
    getStaticProps()
  }, [])


  // console.log(products)


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


//función que hará el fetch a la api con getStaticProps y la pasará al Context
// (getStaticsProps es pra que se renderizen datos en el build)

// export async function getStaticProps(context) {
  
//   //fetch a la api
//   // const data = await fetchData('https://pokeapi.co/api/v2/pokemon')
//   const res = await fetch('https://apidjangoprueba.azurewebsites.net/api/items-list/')
//   const data = await res.json()
  
//   // console.log(data)
  
//   return {
//     props: {
//       data
//     },
//   }
// }

export default Layout