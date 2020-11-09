import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  justify-content: center;
`;
export const Card = styled.div`
  width: 300px;
  height: 80px;
  background-color: #fff;
  overflow: hidden;
  border: 3px solid #1c1c1c;
  margin-top: 150px;
  display: flex;
  margin-top: 40px;
  padding: 10px;
  box-sizing: content-box;

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
`;

export const Img = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  justify-content: space-between;
  margin-top: -10px;
`;

export const Name = styled.a`
  font-size: 30px;
  margin-top: 20px;
  margin-left: 60px;
`;
