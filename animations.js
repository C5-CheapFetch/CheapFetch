import { css, keyframes } from 'styled-components'

const fadeKeyframes = keyframes`
  from {
    opacity:0;
  }

  to {
    opacity: 0.85;
  }
`
const colorKeyframes = keyframes`
  from {
    background-color: #eeeeee;
  }

  to {
    background-color: #fac5c5;
  }
`

export const fadeIn = ({time = '1s', type = 'ease' } = {}) =>
  css`animation: ${time} ${fadeKeyframes} ${type}`

export const colorFade = ({time = '1s', type = 'ease' } = {}) =>
  css`animation: ${time} ${colorKeyframes} ${type}`