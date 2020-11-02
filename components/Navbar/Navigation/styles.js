import styled from 'styled-components'

export const Nav = styled.div`
  width: 100%;
  height: 70px;
  display: grid;
  column-gap: 8px;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;

  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 1) 50%,
    rgba(0, 0, 0, 0.7) 100%
  );

  @media (max-width: 767px) {
    display: block;
    height: 360px;
  }
`

export const Menu = styled.img`
  margin-right: 8px;
  max-width: 100%;
`

export const Logo = styled.figure`
  height: 100px;
  width: 300px;
  background: red;
  position: absolute;
  top: 25px;
  left: 100px;
`

export const Anchor = styled.a`
  text-decoration: none;
  height: inherit;
  display: flex;
  align-items: center;
  padding: 0 10px;
  cursor: pointer;
  color: #fac5c5;
  margin-right: 15px;
  margin-left: 10px;
`
