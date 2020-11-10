import { createContext } from 'react'

export const DataContext = createContext()

function MyApp({ Component, pageProps, products, categories }) {
  return (
    <DataContext.Provider value={{ products, categories }}>
      <Component {...pageProps} />
    </DataContext.Provider>
  )
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  const res = await fetch(
    'https://apidepruebas.azurewebsites.net/api/items-list/'
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
  return { pageProps, products, categories }
}

export default MyApp
