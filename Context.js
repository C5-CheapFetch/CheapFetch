// import React, { createContext } from 'react'

// export const Context = createContext()


// ___esta sección es lo que hizo en un principio para context api usando 
// render props___

// const Provider = ({ children, items }) => {
//   // const [itemList, setItemList] = useState(items)

//   //FETCH A LA API DE PRUEBA
//   // const [data] = useFetchApi("https://apidjangoprueba.azurewebsites.net/api/items-list/")


//   // useEffect( () => {
//   //   setItemList(data);
//   //   console.log(data)
//   //   console.log(itemList)
//   // }, [])

//   const value = {
//     items,
//     children
//   }

//   return (
//     <Context.Provider value={value}>
//       {items}
//     </Context.Provider>
//   )
// }

// export default { 
//   Provider,
//   Consumer: Context.Consumer
// }