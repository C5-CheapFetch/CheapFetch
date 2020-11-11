import styled from "styled-components";
import { colorFade } from '../../animations';

export const Div = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
`

export const Anchor = styled.a`
  text-decoration: none;
  color: #1c1c1c;
`

export const Card = styled.div`
  width: 600px;
  height: 80px;
  background-color: #fff;
  overflow: hidden;
  border: 3px solid #1c1c1c;
  display: grid;
  grid-template-columns: repeat(2, 50%);
  box-sizing: content-box;

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
    background-color: #fac5c5;
    ${colorFade({ time: '0.5s' })};
  }

  @media (max-width: 767px) {
    width: 400px;
  }
  @media (max-width: 530px) {
    width: 280px;
  }
`

export const Img = styled.img`
  grid-column: 1 / 2;
  width: 100%;
  height: 80px;
  object-fit: cover;
  justify-content: space-between;
`

export const Name = styled.a`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  grid-column: 2 / 3;
  font-size: 24px;
  @media (max-width: 767px) {
    font-size: 18px;
  }
  @media (max-width: 530px) {
    font-size: 14px;
  }
`
