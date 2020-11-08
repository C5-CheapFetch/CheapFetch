import styled from 'styled-components'
import { fadeIn } from '../../animations'

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
  position: absolute;
`

export const Url = styled.a`
  & :hover{
    filter: drop-shadow(50px 50px 50px rgba(0, 0, 0, 0.25));
  }
`

export const Info = styled.div`
  opacity: 0;
  background-color: #fac5c5;
  position: absolute;
  height: inherit;
  width: inherit;
  color: #1c1c1c;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.85;
    ${fadeIn({ time: '0.5s' })};
  }
`

export const Name = styled.h3`
  z-index: 10;
  text-align: justify;
  margin: 15px 5px 5px 5px;
  padding-bottom: 10px;
  border-bottom: 3px solid #b86161;
  font-size: 18px;
`

export const Price = styled.p`
  z-index: 10;
  margin-top: 10px;
  font-size: 18px;
`

export const Category = styled.p`
  z-index: 10;
  font-size: 14px;
  margin-top: 10px;
  font-style: italic;
  padding: 1px 10px 1px 10px;
  background-color: #b86161;
  color: #ffffff;
  border-radius: 3px;
`

export const Store = styled.p`
  z-index: 10;
  position: fixed;
  bottom: 2%;
  font-size: 14px;
  margin-top: 5px;
`