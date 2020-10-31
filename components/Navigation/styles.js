import styled from "styled-components";

export const Anchor = styled.a `
  display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  width: 75px;
  cursor: pointer;
`;
export const Nav = styled.div`
  width: 100%;
  /* background-color: black; */
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 1) 50%,
    rgba(0, 0, 0, .7) 100%
  );
  color: white;
`
export const List = styled.ul `
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  height: 100px;
`;