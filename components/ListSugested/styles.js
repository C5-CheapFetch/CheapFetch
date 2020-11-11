import styled from 'styled-components'

export const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`
export const Title = styled.h1`
  margin-top: 16px;
  font-size: 26px;
`
export const TitlePink = styled.span`
  color: #b86161;
  margin-top: 16px;
  font-size: 26px;
`
export const Container = styled.div`
  display: grid;
  height: auto;
  grid-template-columns: 1fr 1fr;
  align-self: center;
  justify-self: center;
  //Tablet hacia abajo
  @media (max-width: 1024px) {
    grid-template-columns: 1fr ;
  }
`

export const NotFound = styled.div`
  color: #1c1c1c;
  font-size: 24px;
  margin: 20px 0px;
`
