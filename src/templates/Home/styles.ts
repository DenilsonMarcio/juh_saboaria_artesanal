import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as HeadingStyles from 'components/Heading/styles'
import * as ItemCardSliderStyles from 'components/ItemCardSlider/styles'
import * as HighlightStyles from 'components/Heading/styles'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Sections = styled.section`
  ${({ theme }) => css`
    ${HeadingStyles.Wrapper},
    ${HighlightStyles.Wrapper},
${ItemCardSliderStyles.Wrapper} {
      margin-bottom: ${theme.spacings.medium};
    }

    ${HighlightStyles.Wrapper} {
      ${media.lessThan('medium')`
  margin-right: calc(-${theme.grid.gutter} / 2)
  margin-left: calc(-${theme.grid.gutter} / 2)
  `}
    }

    ${ItemCardSliderStyles.Wrapper} {
      ${media.lessThan('huge')`
  margin-right: calc(-${theme.grid.gutter} / 2)

  `}
    }
    margin-bottom: calc(${theme.spacings.large} 2);
  `}
`

export const SectionBanner = styled.section`
  ${({ theme }) => css`
    margin: 0 calc(-${theme.grid.gutter} / 2);
    ${media.greaterThan('medium')`
      margin-bottom: ${theme.spacings.large};
      position: relative;
      z-index: ${theme.layers.base};
    `}
  `}
`

export const SectionNews = styled.section`
  ${({ theme }) => css`
    margin-bottom: calc(${theme.spacings.xxlarge} * 2);

    ${media.greaterThan('large')`
    margin-top: -13rem;
    `}

    ${media.greaterThan('medium')`
    margin-bottom: 0;
    padding-top: 14rem;
    padding-bottom: 10rem;
    background-color: ${theme.colors.lightBg};
    clip-path: polygon(0 0, 100% 15%, 100% 100%, 0 85%);
    ${HeadingStyles.Wrapper} {
      color: ${theme.colors.black}
    }
    `}
  `}
`

export const SectionBestSellers = styled.section`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xlarge};
  `}
`

export const SectionFooter = styled.section`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.large};
    padding-bottom: ${theme.spacings.xsmall};
    padding-top: ${theme.spacings.xxlarge};
    background-color: ${theme.colors.white};
    clip-path: polygon(0 5%, 100% 0%, 100% 100%, 0 100%);

    ${media.greaterThan('medium')`
    padding-top: calc(${theme.spacings.xxlarge} * 2);
    clip-path: polygon(0 15%, 100% 0%, 100% 100%, 0 100%);
`}
  `}
`
