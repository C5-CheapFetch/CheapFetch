import styled from 'styled-components'

export const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
`
export const Area = styled.div`
  width: 600px;
  height: 40px;
  position: relative;
//Tablet hacia abajo
  @media (max-width: 768px) {
    width: 100%;
    padding:18px;
  }
`
export const SearchBar = styled.input`
  width:100%;
  padding: 4px 18px 4px 18px;
  margin:0;
  font-size: 26px;
  border-radius: 12px;
  border: 3px solid #1c1c1c;
  background-color: #fac5c5;
  opacity: 0.8;
`

export const Icon = styled.div`
  position: absolute;
  right: -32px;
  top: 9px;
  font-size: 26px;
  cursor: pointer;
`


