import { useRouter } from 'next/router'
import { FaSearch } from 'react-icons/fa'
import { Background, SearchBar, Icon, Area } from './styles'
import { useState } from 'react'

const Search = () => {
  const router = useRouter()
  const [text, setText] = useState('')

  const searchAction = () => {
    router.push(`/search/${text}/all`)
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
            placeholder='Search products'
            value={text}
            onChange={handleChange}
            onKeyDown={keyPress}
          ></SearchBar>
          <Icon onClick={searchAction}>
            <FaSearch></FaSearch>
          </Icon>
        </Area>
      </Background>
    </>
  )
}

export default Search
