import { screen } from '@testing-library/react'
import { renderWitheTheme } from 'utils/tests/helpers'
import 'jest-styled-components'

import Heading from '.'

describe('<Heading />', () => {
  it('should render a white heading by default', () => {
    renderWitheTheme(<Heading>Juju Soap</Heading>)
    expect(screen.getByRole('heading', { name: /Juju Soap/ })).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a black heading when color is passed', () => {
    renderWitheTheme(<Heading color="black">Juju Soap</Heading>)
    expect(screen.getByRole('heading', { name: /Juju Soap/i })).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render a heading with a line to the left side', () => {
    renderWitheTheme(<Heading lineLeft>Juju Soap</Heading>)
    expect(screen.getByRole('heading', { name: /Juju Soap/i })).toHaveStyle({
      borderLeft: '0.7rem solid #F231A5'
    })
  })

  it('should render a heading with a line at the bottom', () => {
    renderWitheTheme(<Heading lineBottom>Juju Soap</Heading>)
    expect(screen.getByRole('heading', { name: /Juju Soap/i })).toHaveStyleRule(
      'border-bottom',
      '0.5rem solid #F231A5',
      {
        modifier: '::after'
      }
    )
  })

  it('should render a heading with a small size', () => {
    renderWitheTheme(<Heading size="small">Juju Soap</Heading>)
    expect(screen.getByRole('heading', { name: /Juju Soap/i })).toHaveStyle({
      'font-size': '1.6rem'
    })
    expect(screen.getByRole('heading', { name: /Juju Soap/i })).toHaveStyleRule(
      'width',
      '3rem',
      { modifier: '::after' }
    )
  })

  it('should render a heading with a huge size', () => {
    renderWitheTheme(<Heading size="huge">Juju Soap</Heading>)
    expect(screen.getByRole('heading', { name: /Juju Soap/i })).toHaveStyle({
      'font-size': '5.2rem'
    })
  })

  it('should render a Heading with a primary line color', () => {
    renderWitheTheme(
      <Heading lineColor="primary" lineLeft lineBottom>
        Lorem Ipsum
      </Heading>
    )

    const heading = screen.getByRole('heading', { name: /lorem ipsum/i })
    expect(heading).toHaveStyle({ 'border-left': '0.7rem solid #F231A5' })
    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #F231A5', {
      modifier: '::after'
    })
  })

  it('should render a Heading with a secondary line color', () => {
    renderWitheTheme(
      <Heading lineColor="secondary" lineLeft lineBottom>
        Lorem Ipsum
      </Heading>
    )

    const heading = screen.getByRole('heading', { name: /lorem ipsum/i })
    expect(heading).toHaveStyle({ 'border-left': '0.7rem solid #3CD3C1' })
    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #3CD3C1', {
      modifier: '::after'
    })
  })
})
