import styled from 'styled-components'

export const Grid = styled.div`
  width: 834px;
  margin: 5px;
  height: 1050px;
  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: repeat(5, 20%);

  & .grid__vertical {
    grid-column: 1 / 2;
    grid-row: 1 / 3;
  }
  & .grid__square {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }
  & .grid__horizontal {
    grid-column: 3 / 5;
    grid-row: 1 / 2;
  }

  & .grid__horizontal--second {
    grid-column: 2 / 4;
    grid-row: 2 / 3;
  }
  & .grid__square--second {
    grid-column: 4 / 5;
    grid-row: 2 / 3;
  }

  & .grid__square--third {
    grid-column: 1 / 2;
    grid-row: 3 / 4;
  }
  & .grid__squareTwo--third {
    grid-column: 2 / 3;
    grid-row: 3 / 4;
  }
  & .grid__vertical--thrid {
    grid-column: 3 / 4;
    grid-row: 3 / 4;
  }
  & .grid__squareThree--thrid {
    grid-column: 4 / 5;
    grid-row: 3 / 4;
  }
  
  & .grid__horizontal--fourth {
    grid-column: 1 / 3;
    grid-row: 4 / 5;
  }
  & .grid__vertical--fourth {
    grid-column: 4 / 5;
    grid-row: 4 / 5;
  }
  
  & .grid__square--fifth {
    grid-column: 1 / 2;
    grid-row: 5 / 6;
  }
  & .grid__horizontal--fifth {
    grid-column: 2 / 4;
    grid-row: 5 / 6;
  }
`