import styled from "styled-components";

export const Footer = styled.article `
  background-color: #1c1c1c;
  height: 180px;
  bottom: 0;
  width: 100%;
  color: lavender;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 100px;

  @media (max-width: 767px) {
    display: block;
    text-align: center;
    border: 1px solid transparent;
  }
`;

export const PlatziCheap = styled.div `
  background-color: #1c1c1c;
  color: lavender;
  display: flex;
  align-items: space-between;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 15px;
`;

export const Text = styled.div `
  margin: 10px;
  padding: 10px;
`;

export const Social = styled.div `
  color: #f4fbff;

  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 15px;
`;

export const Img = styled.img `
  margin-right: 8px;
`;