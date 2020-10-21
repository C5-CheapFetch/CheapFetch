import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 120px;
  background-color: whitesmoke;
  border: 2px solid black;
  cursor: pointer;
  &:hover {
    background-color: #fac5c5;
  }
`
export const Category = styled.div`
  font-size: 38px;
`
export const Line = styled.div`
  width: 160px;
  height: 2px;
  margin-top: 8px;
  background-color: #b86161;
  &:hover {
    background-color: black;
  }
`

