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

    /* background: linear-gradient( #0000, #fac5c5) */
 /*  width: 100%;
  /* background-color: black; */
  /* background: linear-gradient(
    to bottom,
  );
  color: white; */ 
`
export const List = styled.li `
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  margin-left: -20px;
  cursor: pointer;
  margin-left:5px;
`;

export const Button = styled.button`
  border: 1px solid #B86161;
  text-decoration: none;
  border-radius: 10px;
  margin: 5px;
  cursor: pointer;
  padding:1px;
  background-color:#1C1C1C;
`;

export const ButtonA = styled.button`
  color: #FAC5C5;
  height: inherit;
  display: flex;
  align-items: center;
  padding:10px;
  background-color: #1C1C1C;
  border-radius: 10px;
`;

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

