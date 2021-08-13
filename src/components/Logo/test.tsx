import { screen } from '@testing-library/react'
import { renderWitheTheme } from 'utils/tests/helpers'

import Logo from '.'

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    renderWitheTheme(<Logo />)
    expect(screen.getByLabelText(/Juju Soap/i).parentElement).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a black label when is passed', () => {
    renderWitheTheme(<Logo color="black" />)
    expect(screen.getByLabelText(/Juju Soap/i).parentElement).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render a normal logo when size is default', () => {
    renderWitheTheme(<Logo />)
    expect(screen.getByLabelText(/Juju Soap/i).parentElement).toHaveStyle({
      width: '11rem'
    })
  })

  it('should render a bigger logo', () => {
    renderWitheTheme(<Logo size="large" />)
    expect(screen.getByLabelText(/Juju Soap/i).parentElement).toHaveStyle({
      width: '20rem'
    })
  })
})
