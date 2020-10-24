import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 120px;
  background-color: whitesmoke;
  border: 3px solid #1c1c1c;
  cursor: pointer;
  margin: 16px;
  &:hover {
    background-color: #fac5c5;
    transform: scale(1.1);
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
`
export const Category = styled.div`
  font-size: 38px;
`
export const Line = styled.div`
  width: 160px;
  height: 2px;
  margin-top: 8px;
  background-color: #b86161;
  &:hover {
    background-color: black;
  }
`
