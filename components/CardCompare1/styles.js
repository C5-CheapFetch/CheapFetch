import styled from 'styled-components'

export const Div = styled.div`
  display: flex;
  justify-content: center;
`
export const Card = styled.div`
  width: 600px;
  height: 350px;
  background-color: #FAC5C5;
  overflow:hidden;
  border: 3px solid #1C1C1C;
  margin-top:150px;


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

  &:hover{
    transform: scale(1.01);
  }
`

export const Image = styled.img`
  width: inherit;
  height: inherit;
  object-fit: cover;
`

export const Img = styled.img`
  width: 100%;
  height: 80%;
  object-fit: cover;
`

export const Name = styled.a`
  font-size: 25px;
`

