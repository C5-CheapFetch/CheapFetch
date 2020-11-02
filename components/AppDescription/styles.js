import styled from 'styled-components'

export const Container = styled.section`
  max-width: 100%;
  color: #1c1c1c;
  margin: 180px 20% 250px 20%;

  @media (max-width: 767px) {
    margin: 80px 10% 80px 10%;
  }
`

export const Name = styled.h1`
  font-size: 60px;
  margin-bottom: 30px;
  text-align: start;

  @media (max-width: 767px) {
    font-size: 32px;
  }
`

export const Description = styled.p`
  font-size: 30px;
  text-align: justify;
  color: #5c5c5c;

  @media (max-width: 767px) {
    font-size: 20px;
  }
`