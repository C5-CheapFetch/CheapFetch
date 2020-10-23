import styled from 'styled-components'

export const Card = styled.div`
  width: 194px;
  height: 408px;
  background-color: #FAC5C5;
  overflow:hidden;
  border: 3px solid #1C1C1C;

  /* hacer el border-radius angular */
  clip-path: polygon(
    0 1%,
    2% 0,
    98% 0,
    100% 1%,
    100% 99%,
    98% 100%,
    2% 100%,
    0% 99%,
    0% 10%
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