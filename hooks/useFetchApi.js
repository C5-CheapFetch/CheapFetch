import { useState, useEffect } from 'react';


export function useFetchApi (url) {

  // ------- PARA USAR EL CUSTOM HOOK Y CONSUMIR DE LA API
  const [item, setItem] = useState([]);


  async function fetchItem (url) {
    const response = await fetch(url);
    const data = await response.json();
    setItem(data)
  }

  useEffect (() => {
    fetchItem(url);
  }, [])


  return [item]
}