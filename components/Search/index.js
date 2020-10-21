import Link from 'next/link'
import { FaSearch } from 'react-icons/fa'
import { Background, Image, SearchBar, Icon, Area } from './styles'
import { useState } from 'react'

const Search = () => {
  const [text, setText] = useState('')

  const searchAction = () => {
    alert(`Buscaste: ${text}`)
  }
  const handleChange = (e) => {
    setText(`${e.target.value}`)
  }
  const keyPress = (e) => {
    if (e.keyCode == 13) {
      searchAction()
    }
  }

  return (
    <>
      <Background>
        <Area>
          <SearchBar
            placeholder='Buscar'
            value={text}
            onChange={handleChange}
            onKeyDown={keyPress}
          ></SearchBar>
          <Icon onClick={searchAction}>
            <FaSearch></FaSearch>
          </Icon>
        </Area>
      </Background>
      <Image src='https://picsum.photos/seed/picsum/1200/500'></Image>
    </>
  )
}

export default Search
