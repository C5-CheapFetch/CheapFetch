import styled from "styled-components";
import { keyframes } from "styled-components";

export const scroll = keyframes`
0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * 7));
  }
}
`;

export const Slider = styled.div`
  background: white;
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.125);
  /* height: 100px; */
  height: 10em;
  margin: auto;
  overflow: hidden;
  position: relative;
  /* width: 960px; */
  width: 80%;
  border-radius: 20px;

  ::before,
  ::after {
    content: "";
    height: 100px;
    position: absolute;
    width: 200px;
    z-index: 2;
  }

  ::after {
    right: 0;
    top: 0;
    transform: rotateZ(180deg);
  }

  ::before {
    left: 0;
    top: 0;
  }
`;

export const SlideTrack = styled.div`
  animation: ${scroll} 40s linear infinite;
  display: flex;
  align-items: center;
  justify-items: center;
  /* width: calc(250px * 14); */
  width: 100%;
  height: 100%;
  /* border: 1px solid blue; */
`;

export const Slide = styled.div`
  margin-right: 40px;
  height: 100px;
  /* width: 250px; */
  width: 500px;
  /* height: 100%; */
`;
