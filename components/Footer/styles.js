import styled from "styled-components";

export const Footer = styled.article`
  background-color: #000;
  color: lavender;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding: 20px;
  @media (max-width: 767px){
    display: block;
    text-align: center;
    border: 1px solid transparent;
}
`;

export const PlatziCheap = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Text = styled.div`
  box-sizing: border-box;
  margin: 10px;
`;

export const Social = styled.div`
  display: flex;
  justify-content: flex-end;
  align-content: flex-end;
  width: 20px;
  height: 60px;
  margin: 10px;
  padding-left: 50px;
  padding-bottom: 10px;
`;


