import styled from 'styled-components'

export const Card = styled.div`
  margin: 18px;
  width: 620px;
  height: 250px;
  background-color: #ffffff;
  display: grid;
  grid-template-columns: 50% 50%;
  /* overflow: hidden; */
  border: 3px solid #1c1c1c;

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

  &:hover {
    transform: scale(1.01);
    background-color: #fac5c5;
  }
  &:hover .cardinfo__name {
    border-bottom: 3px solid #1c1c1c;
    white-space: normal; /*para que se vea el nombre entero al hacer hover */
  }
  //Tablet hacia abajo
  @media (max-width: 768px) {
    width: 480px;
    height: 200px;
  }
`

export const Image = styled.img`
  width: 100%;
  height: inherit;
  grid-column: 1 / 2;
  object-fit: cover;
`

export const Info = styled.div`
  width: 100%;
  height: inherit;
  grid-column: 2 / 3;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Name = styled.p`
  font-size: 24px;
  color: #1c1c1c;
  width: 80%;
  margin-top: 15%;
  padding-bottom: 5%;
  border-bottom: 3px solid #fac5c5;
  white-space: nowrap; /*propiedad para '...'*/
  overflow: hidden; /*propiedad para '...'*/
  text-overflow: ellipsis; /*propiedad para '...'*/
`

export const Price = styled.p`
  margin-top: 5%;
  font-size: 24px;
`

export const Store = styled.p`
  margin-top: 200px;
  position: absolute;
`

export const Url = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: #1c1c1c;
`