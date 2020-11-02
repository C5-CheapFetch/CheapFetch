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
    height: 120px;
    grid-template-columns: 1fr ;
  }
`

export const Menu = styled.img`
  margin-right: 8px;
  max-width: 100%;
`

export const LogoContainer = styled.div`
  height: 100px;
  width: 280px;
  position: absolute;
  /* background-color: red; */
  top: -15px;
  left: 100px;

  @media (max-width: 1024px) {
    left: 70px;
    width: 180px;
  }

  @media (max-width: 767px) {
    width: 150px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    top: -40px;
  }
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
