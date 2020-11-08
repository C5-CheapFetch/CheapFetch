import { css, keyframes } from 'styled-components'

const fadeKeyframes = keyframes`
  from {
    opacity:0;
  }

  to {
    opacity: 0.85;
  }
`

export const fadeIn = ({time = '1s', type = 'ease' } = {}) =>
  css`animation: ${time} ${fadeKeyframes} ${type}`