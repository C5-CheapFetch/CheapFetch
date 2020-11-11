import styled from 'styled-components'

export const Container = styled.section`
  max-width: 100%;
  color: #1c1c1c;
  margin: 130px 0px 50px 0px;

  @media (max-width: 767px) {
    margin: 20px;
  }
`

export const Name = styled.h1`
  font-size: 30px;
  text-align: center;
  margin-bottom: -10px;

  @media (max-width: 767px) {
    font-size: 25px;
  }
`
