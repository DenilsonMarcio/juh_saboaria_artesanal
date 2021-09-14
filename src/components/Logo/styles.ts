import styled, { css } from 'styled-components'

import { LogoProps } from '.'

const wrapperModifiers = {
  normal: () => css`
    width: 11rem;
    height: 3.3rem;
    // tirar essa margin se trocar o SVG
    margin-bottom: 60px;
  `,
  large: () => css`
    width: 20rem;
    height: 5.9rem;
    // tirar essa margin se trocar o SVG
    margin-bottom: 80px;
  `
}

export const Wrapper = styled.div<LogoProps>`
  ${({ theme, color, size }) => css`
    color: ${theme.colors[color!]};
    ${!!size && wrapperModifiers[size]}
  `}
`
