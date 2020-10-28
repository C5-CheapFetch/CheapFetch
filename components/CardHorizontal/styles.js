import styled from 'styled-components'

export const Card = styled.div`
  width: 403px;
  height: 194px;
  background-color: #FAC5C5;
  overflow:hidden;
  border: 3px solid #1C1C1C;

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