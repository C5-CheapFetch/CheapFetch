import styled from 'styled-components'

export const Card = styled.div`
  width: 403px;
  height: 194px;
  background-color: #fac5c5;
  overflow: hidden;
  border: 3px solid #1c1c1c;

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
    width: 320px;
    height: 154px;
  }
`

export const Image = styled.img`
  width: inherit;
  height: inherit;
  object-fit: cover;
`

export const Url = styled.a`
  & :hover{
    filter: drop-shadow(50px 50px 50px rgba(0, 0, 0, 0.25));
  }
`