import React, { createContext, useState, useEffect } from 'react'
import { useFetchApi } from './hooks/useFetchApi'

const Context = createContext()

const Provider = ({ children }) => {
  const [itemList, setItemList] = useState([])

  //FETCH A LA API DE PRUEBA
  const [data] = useFetchApi("https://apidjangoprueba.azurewebsites.net/api/items-list/")


  useEffect( () => {
    setItemList(data);
  }, [])

  const value = {
    itemList,
    setItemList
  }
  
  // console.log(data)
  // console.log(itemList)

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

export default { 
  Provider,
  Consumer: Context.Consumer
}