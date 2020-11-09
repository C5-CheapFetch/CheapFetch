import styled from 'styled-components'

export const Select = styled.select`
  width: 250px;
  height: 34px;
  color: #b86161;
  margin-top: 16px;
  margin-bottom: 8px;
  font-size: 18px;
  font-weight: bold;
  background-color: #ffffff;

  &:hover {
    background-color: rgba(250, 197, 197, 0.4);
    filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.25));
  }

  border: 3px solid #1c1c1c;
  box-shadow: 5px 5px 5px 5px black;

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

export const Option = styled.option`
  color: #1c1c1c;
`
