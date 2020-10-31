import { useRouter } from 'next/router'
import { FaSearch } from 'react-icons/fa'
import { Background, Video, SearchBar, Icon, Area } from './styles'
import { useState } from 'react'
import ReactPlayer from 'react-player'

const Search = () => {
  const router = useRouter()
  const [text, setText] = useState('')

  const searchAction = () => {
    router.push(`/search/${text}`)
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
      <Video>
        <ReactPlayer 
          className='search__video'
          url='https://streamable.com/xc9ua4' 
          width='100%'
          height='100%'
          playing={true}
          loop={true}
          controls={false}
          volume={0}
        />
      </Video>
    </>
  )
}

export default Search
