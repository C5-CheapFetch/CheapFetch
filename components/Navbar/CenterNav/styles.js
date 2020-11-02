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
    display: block;
  }
`

export const Li = styled.li`
  height: 100%;
  margin-right:15px
`

export const Button = styled.button`
  border: 1px solid #b86161;
  text-decoration: none;
  border-radius: 10px;
  margin: 5px;
  cursor: pointer;
  padding: 1px;
  background-color: #1c1c1c;
  &&:hover {
    background-color: #1c1c1c;
  }

  @media (max-width: 767px) {
    text-decoration: none;
    height: inherit;
    display: flex;
    align-items: center;
    padding: 0 10px;
    cursor: pointer;
    margin: 10px;
    border: none;
  }
`

export const ButtonA = styled.button`
  color: #fac5c5;
  height: inherit;
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #1c1c1c;
  border-radius: 10px;
  text-decoration: none;
  &&:hover {
    background-color: #c2bebe;
  }

  @media (max-width: 767px) {
    background-color: white;
    border: none;
    color: #fac5c5;
    &&:hover {
      background-color: #1c1c1c;
    }
  }
`
