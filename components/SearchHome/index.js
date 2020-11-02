import { Video, Container, Gradient, Separator } from './styles'
import ReactPlayer from 'react-player'
import SearchBar from '../SearchBar'

const Search = () => {
  return (
    <>
      <Container>
        <SearchBar></SearchBar>
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
      </Container>
      <Separator></Separator>
      <Gradient></Gradient>
    </>
  )
}

export default Search
    