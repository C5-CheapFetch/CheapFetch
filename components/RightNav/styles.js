import styled from "styled-components";

export const Anchor = styled.a `
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

export const List = styled.ul `
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  margin-left: -20px;
  cursor: pointer;
  margin-left:5px;
  text-decoration: none;

  
  @media (max-width: 767px){
  display:block;

} `;

export const Li = styled.li `
  height: 50px;
`;

export const Button = styled.button`
  border: 1px solid #B86161;
  text-decoration: none;
  border-radius: 10px;
  margin: 5px;
  cursor: pointer;
  padding:1px;
  background-color:#1C1C1C;
  &&:hover{
        background-color:#1c1c1c;
      }

  @media (max-width: 767px){
 text-decoration: none;
  height: inherit;
  display: flex;
  align-items: center;
  padding: 0 10px;
  cursor: pointer;
  margin:10px;
  border: none;
} 
`;

export const ButtonA = styled.button`
  color: #FAC5C5;
  height: inherit;
  display: flex;
  align-items: center;
  padding:10px;
  background-color: #1C1C1C;
  border-radius: 10px;
  text-decoration: none;
  &&:hover{
        background-color:#C2BEBE;
      }

  @media (max-width: 767px){
  background-color: white;
  border: none;
  color: #FAC5C5;
  &&:hover{
        background-color:#1C1C1C;
      }
} 
`;


