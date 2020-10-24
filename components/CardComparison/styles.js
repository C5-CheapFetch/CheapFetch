import styled from 'styled-components'

export const Card = styled.div`
display:flex;
flex-direction:column;
  width: 600px;
  border: 3px solid #1c1c1c;
  margin: 16px;
  &:hover {
    background-color: #fac5c5;
  }
  /* hacer el border-radius angular */
  clip-path: polygon(
    0 5px,
    5px 0,
    calc(100% - 5px) 0px,
    100% 5px,
    100% calc(100% - 5px),
    calc(100% - 5px) 100%,
    5px 100%,
    0% calc(100% - 5px)
  );
`

export const Image = styled.img`
  width: 100%;
`
export const ProductLabel = styled.div`
  font-size: 26px;
  line-height: 80px;
  height: 80px;
  padding:0 16px 0 16px;
  background-color: #fac5c5;
`
