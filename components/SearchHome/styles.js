import styled from 'styled-components'

export const Video = styled.div`
  z-index: -2;
  position: absolute;
  top: -30vh;
  width: 100%;

  background: linear-gradient(to bottom, #fac5c5, white);
  height: 70vw;
  object-fit: fill;
  /* position: relative; */

  & .search__video {
    /* position: absolute; */
    top: 0;
    left: 0;
    object-fit: fill;
  }

  @media (max-width: 768px) {
    top: -10vh;
  }
`

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 400px;
  margin-bottom: 16px;
  //Tablet hacia abajo
  @media (max-width: 768px) {
    height: 200px;
  }
`

export const Gradient = styled.div`
  position: absolute;
  top: 500px;
  z-index: -1;
  background: linear-gradient(
    to bottom,
    rgba(250, 197, 197, .8),
    rgba(255, 255, 255, 0)
  );
  width: 100%;
  height: 400px;
  @media (max-width: 768px) {
    height: 200px;
    top: 300px;
  }
`

export const Separator = styled.div`
  position: absolute;
  top: 500px;
  z-index: -1;
  width: 100%;
  height: 1000px;
  background-color: white;
  @media (max-width: 768px) {
    height: 200px;
    top: 300px;
  }
`
