import styled from 'styled-components'

export const Card = styled.div`
  width: 620px;
  height: 250px;
  background-color: #FFFFFF;
  display: grid;
  grid-template-columns: 50% 50%;
  /* overflow: hidden; */
  border: 3px solid #1c1c1c;
  margin: 100px;

  /* hacer el border-radius angular */
  clip-path: polygon(
  0 2%,
  1% 0,
  99% 0,
  100% 2%,
  100% 98%,
  99% 100%,
  1% 100%,
  0% 98%,
  0% 10%
  );

  &:hover{
    transform: scale(1.01);
    background-color: #fac5c5;
  }
`

export const Image = styled.img`
  width: 100%;
  height: inherit;
  grid-column: 1 / 2;
  object-fit: cover;
`

export const Info = styled.div `
  width: 100%;
  height: inherit;
  grid-column: 2 / 3;
  background-color: #FFFFFF;
`

export const Name = styled.p `
  font-size: 24px;
  color: #1c1c1c;
`