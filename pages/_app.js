import { createContext } from 'react'

export const DataContext = createContext()

function MyApp({ Component, pageProps, products, categories, stores }) {
  return (
    <DataContext.Provider value={{ products, categories, stores }}>
      <Component {...pageProps} />
    </DataContext.Provider>
  )
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let stores = [
    {
      id: 1,
      img: '/images/MercadoLibreCarroussel.png',
      url: 'https://www.mercadolibre.com.co/',
    },
    {
      id: 2,
      img: '/images/AmazonCarroussel.png',
      url: 'https://www.amazon.com.mx/',
    },
  ]

  const res = await fetch(
    'https://apicheapfetch.azurewebsites.net/api/items-list/'
  )

  const products = await res.json()

  let categories = []
  if (products.length > 0) {
    products.forEach((r) => {
      if (!categories.includes(r.category)) {
        categories.push(r.category)
      }
    })
  }

  let pageProps = {}
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }

  return { pageProps, products, stores, categories }
}

export default MyApp
