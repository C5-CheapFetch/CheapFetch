import styled from 'styled-components'

export const Div = styled.div`
  display: flex;
  justify-content: center;
`

export const CardAnchor = styled.a`
  text-decoration: none;
  color: #1c1c1c;
  width: 600px;
  height: 350px;
  background-color: #FAC5C5;
  overflow:hidden;
  border: 3px solid #1C1C1C;
  margin-top:150px;
  display: flex;
  flex-direction: column;
  align-items: center;

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

  &:hover{
    transform: scale(1.01);
    filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.25));
  }

  @media (max-width: 767px) {
    width: 400px;
  }
  @media (max-width: 530px) {
    width: 280px;
  }
`

export const Img = styled.img`
  width: inherit;
  height: inherit;
  object-fit: cover;
  position: absolute;
`

export const ContainerName = styled.div`
  z-index: 10;
  height: 70px;
  width: inherit;
  margin-top: 281px;
  background: linear-gradient(to top, #fac5c5, #eeeeee);
`


export const Name = styled.p`
  font-size: 25px;
  width: 95%;
  text-align: center;
  margin: 20px 20px 0px 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 767px){
    margin: 20px 10px 0px 10px;
  }
`

