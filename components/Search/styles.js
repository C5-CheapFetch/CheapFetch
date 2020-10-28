import styled from 'styled-components'


export const Background = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 600px;
`
export const Video = styled.div`
  width: 100%;
  background: linear-gradient(to bottom, #fac5c5, white);
  height: calc(100vh - 100px);
  object-fit: cover;
  /* position: relative; */

  & .search__video {
    /* position: absolute; */
    top: 0;
    left: 0;
    object-fit: cover;
  }
`
export const Icon = styled.div`
  position: absolute;
  right: -8px;
  top: 12px;
  font-size: 26px;
  cursor: pointer;
`
export const SearchBar = styled.input`
  width: 600px;
  height: 40px;
  padding: 4px 12px 4px 12px;
  font-size: 24px;
  border-radius: 12px;
  border: 3px solid #1c1c1c;
  background-color: #fac5c5;
  opacity: 0.8;
`
export const Area = styled.div`
  position: relative;
  width: 600px;
  height: 55px;
`
