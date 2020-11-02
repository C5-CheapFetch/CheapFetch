import styled from 'styled-components'

export const List = styled.ul`
  display: flex;
  justify-content: flex-end;
  height: 50px;
  cursor: pointer;
  margin-right: 8px;
  text-decoration: none;
  list-style-type: none;

  @media (max-width: 767px) {
    display: block;
  }
`
export const Button = styled.button`
  height: 50px;
  border: 3px solid #b86161;
  cursor: pointer;
  margin-left: 10px;
  padding: 5px 10px 5px 10px;
  background-color: #1c1c1c;
  color: #b86161;
  font-weight: bold;
  &:hover {
    background-color: white;
    color: #1c1c1c;
    transform: scale(1.01);
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
    position:absolute;
    right:8px;
    top:16px;
  }
`
