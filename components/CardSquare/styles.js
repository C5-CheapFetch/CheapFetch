import styled from 'styled-components'

export const Card = styled.div`
  width: 194px;
  height: 194px;
  background-color: #fac5c5;
  overflow: hidden;
  border: 3px solid #1c1c1c;
  box-shadow: 5px 5px 5px 5px black;

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

  &:hover {
    transform: scale(1.01);
  }

  @media (max-width: 425px) {
    width: 154px;
    height: 154px;
  }
`

export const Image = styled.img`
  width: inherit;
  height: inherit;
  object-fit: cover;
`
