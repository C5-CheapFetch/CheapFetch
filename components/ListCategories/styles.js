import styled from 'styled-components'

export const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 767px) {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width:100%;
  }

  @media (max-width: 480px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width:100%;
  }

`
export const Title = styled.h1`
  margin-top: 16px;
  font-size: 32px;
`
