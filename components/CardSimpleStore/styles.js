import styled from 'styled-components'
import { colorFade } from '../../animations'

export const Card = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 600px;
  height: 120px;
  background-color: whitesmoke;
  border: 3px solid #1c1c1c;
  cursor: pointer;
  margin: 16px;
  &:hover {
    background-color: #fac5c5;
    transform: scale(1.01);
    ${colorFade({ time: '0.5s' })};
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
  @media (max-width: 767px) {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width:100%;
  }

  @media (max-width: 480px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width:100%;
  }
  @media (max-width: 320px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width:100%;
  }
`

export const Image = styled.img`
  height: 80px;
  width: auto;
  @media (max-width: 767px) {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 480px) {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 370px) {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width:inherit;
  }
`
export const Separator = styled.div`
  width: 2px;
  height: 80px;
  background-color: black;
`
export const PriceTag = styled.div`
  font-size: 24px;
`
