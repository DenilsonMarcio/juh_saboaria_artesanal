import { LineColors } from './index'
import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'
import { HeadingProps } from '.'

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
    &::after {
      width: 3rem;
    }
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};

    ${media.greaterThan('medium')`
font-size: ${theme.font.sizes.xxlarge};
`}
  `,
  lineLeft: (theme: DefaultTheme, lineColor: LineColors) => css`
    padding-left: ${theme.spacings.xsmall};
    border-left: 0.7rem solid ${theme.colors[lineColor]};
  `,
  lineBottom: (theme: DefaultTheme, lineColor: LineColors) => css`
    position: relative;
    margin-bottom: ${theme.spacings.medium};
    &::after {
      position: absolute;
      left: 0;
      bottom: -1rem;
      content: '';
      width: 5rem;
      border-bottom: 0.5rem solid ${theme.colors[lineColor]};
    }
  `
}
export const Wrapper = styled.h2<HeadingProps>`
  ${({ theme, color, lineLeft, lineBottom, lineColor, size }) => css`
    color: ${theme.colors[color!]};
    ${lineLeft && wrapperModifiers.lineLeft(theme, lineColor!)}
    ${lineBottom && wrapperModifiers.lineBottom(theme, lineColor!)}
${!!size && wrapperModifiers[size](theme)}
  `}
`
