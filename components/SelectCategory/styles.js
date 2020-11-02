import styled from 'styled-components'


export const Select = styled.select`
  width: 150px;
  height: 30px;
  color: #b86161;
  border: 3px solid #1c1c1c;
  font-size: 15px;
  font-weight: bold;
  background-color: #ffffff;
  border-radius: 3px;

  &:hover {
    background-color: rgba(250, 197, 197, .4);
    filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.25));
  }
`

export const Option = styled.option`
  color: #1c1c1c;
`