import styled from "styled-components";

export const Div = styled.div`
  margin: 0px;
`;

export const Figure = styled.figure`
  margin: 0;
  margin-top:-10px;
  padding: 0;
  max-width: 100%;
`;

export const Anchor = styled.a `
  /* display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  width: 75px;
  cursor: pointer; */
  text-decoration: none;
  height: inherit;
  display: flex;
  align-items: center;
  padding: 0 10px;
  cursor: pointer;
  color: #FAC5C5;
  margin-right: 15px;
  margin-left: 10px;
 
`;
export const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    height: 70px;
    align-items: center;
    flex-wrap: wrap;
    background-color: #1C1C1C;

    @media (max-width: 767px){
      display: block;
      height: 360px;

} 

    /* background: linear-gradient( #0000, #fac5c5) */
 /*  width: 100%;
  /* background-color: black; */
  /* background: linear-gradient(
    to bottom,
  );
  color: white; */ 
`


/* @media (max-width: 1024px){
  align-items: flex-start;
  flex-direction: column;
}  */

/* @media (max-width: 767px){
  align-items: flex-start;
  flex-direction: column;
}  */

/* @media (max-width: 480px){
  align-items: flex-start;
  flex-direction: column;
}  */

/* @media (max-width: 320px){
  align-items: flex-start;
  flex-direction: column;
}  */

