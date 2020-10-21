import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 600px;
  height: 120px;
  background-color: whitesmoke;
  border: 2px solid black;
  cursor: pointer;
  &:hover {
    background-color: pink;
  }
`

export const Image = styled.img`
  width: 120px;
  height: 90px;
`
export const Separator = styled.div`
  width: 2px;
  height: 80px;
  background-color: black;
`
export const PriceTag = styled.div`
  font-size: 24px;
`
