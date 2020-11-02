import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 250px;
`

export const Title = styled.h3`
  font-size: 36px;
  margin: 0px 0px 50px 0px;
`

export const Grid = styled.div`
  width: 834px;
  margin: 5px;
  height: 1050px;
  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: repeat(5, 20%);
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 210px) ;
    grid-template-rows: repeat(10, 210px);
    width: 400px;
    height: 2150px;
  }

  & .grid__vertical {
    grid-column: 1 / 2;
    grid-row: 1 / 3;
    @media (max-width: 1024px) {
    grid-column: 1 / 2;
    grid-row: 1 / 3;
    }
  }
  & .grid__square {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    @media (max-width: 1024px) {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    }
  }
  & .grid__horizontal {
    grid-column: 3 / 5;
    grid-row: 1 / 2;
    @media (max-width: 1024px) {
    grid-column: 1 / 3;
    grid-row: 3 / 4;
    }
  }

  & .grid__horizontal--second {
    grid-column: 2 / 4;
    grid-row: 2 / 3;
    @media (max-width: 1024px) {
    grid-column: 1 / 3;
    grid-row: 4 / 5;
    }
  }
  & .grid__square--second {
    grid-column: 4 / 5;
    grid-row: 2 / 3;
    @media (max-width: 1024px) {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    }
  }

  & .grid__square--third {
    grid-column: 1 / 2;
    grid-row: 3 / 4;
    @media (max-width: 1024px) {
    grid-column: 1 / 2;
    grid-row: 5 / 6;
    }
  }
  & .grid__squareTwo--third {
    grid-column: 2 / 3;
    grid-row: 3 / 4;
    @media (max-width: 1024px) {
    grid-column: 1 / 2;
    grid-row: 6 / 7;
    }
  }
  & .grid__vertical--thrid {
    grid-column: 3 / 4;
    grid-row: 3 / 4;
    @media (max-width: 1024px) {
    grid-column: 2 / 3;
    grid-row: 5 / 7;
    }
  }
  & .grid__squareThree--thrid {
    grid-column: 4 / 5;
    grid-row: 3 / 4;
    @media (max-width: 1024px) {
    grid-column: 2 / 3;
    grid-row: 9 / 10;
    }
  }
  
  & .grid__horizontal--fourth {
    grid-column: 1 / 3;
    grid-row: 4 / 5;
    @media (max-width: 1024px) {
    grid-column: 1 / 3;
    grid-row: 7 / 8;
    }
  }
  & .grid__vertical--fourth {
    grid-column: 4 / 5;
    grid-row: 4 / 5;
    @media (max-width: 1024px) {
    grid-column: 1 / 2;
    grid-row: 9 / 11;
    }
  }
  
  & .grid__square--fifth {
    grid-column: 1 / 2;
    grid-row: 5 / 6;
    @media (max-width: 1024px) {
    grid-column: 2 / 3;
    grid-row: 10 / 11;
    }
  }
  & .grid__horizontal--fifth {
    grid-column: 2 / 4;
    grid-row: 5 / 6;
    @media (max-width: 1024px) {
    grid-column: 1 / 3;
    grid-row: 8 / 9;
    }
  }
`