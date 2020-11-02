import styled from 'styled-components'

export const Anchor = styled.a`
  text-decoration: none;
  height: inherit;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #fac5c5;
`
export const Separator = styled.div`
  height: 28px;
  width: 3px;
  background-color: #b86161;
`

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  list-style-type: none;

  @media (max-width: 767px) {
    position: relative;
    top: 60px;
  }
`

export const Li = styled.li`
  height: 100%;
  margin-right: 20px;
`
