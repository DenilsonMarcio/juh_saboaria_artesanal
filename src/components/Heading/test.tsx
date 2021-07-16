import { screen } from '@testing-library/react'
import { renderWitheTheme } from 'utils/tests/helpers'
import 'jest-styled-components'

import Heading from '.'

describe('<Heading />', () => {
  it('should render a white heading by default', () => {
  renderWitheTheme(<Heading >Juju Soap</Heading>)
  expect(screen.getByRole('heading', {name: /Juju Soap/})).toHaveStyle({color: '#FAFAFA'})
  })

  it('should render a black heading when color is passed', () => {
    renderWitheTheme(<Heading color="black">Juju Soap</Heading>)
    expect(screen.getByRole('heading', {name: /Juju Soap/i})).toHaveStyle({color: '#030517'})
    })

    it('should render a heading with a line to the left side', () => {
      renderWitheTheme(<Heading lineLeft>Juju Soap</Heading>)
      expect(screen.getByRole('heading', {name: /Juju Soap/i})).toHaveStyle({'borderLeft': "0.7rem solid #3CD3C1"})
      })
      
      it('should render a heading with a line at the bottom', () => {
        renderWitheTheme(<Heading lineBottom>Juju Soap</Heading>)
        expect(screen.getByRole('heading', {name: /Juju Soap/i})).toHaveStyleRule( 'border-bottom', '0.5rem solid #F231A5' , {modifier: '::after'})
      })
  })

