import { screen } from '@testing-library/react'
import Heading from 'components/Heading'
import { renderWitheTheme } from 'utils/tests/helpers'

import Home from '.'

describe('<Home />', () => {
  it('should render menu and footer', () => {
    renderWitheTheme(<Home />)
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /contato/i })
    ).toBeInTheDocument()
  })

  it('should render the sections', () => {
    renderWitheTheme(<Heading>Novidades</Heading>)
    expect(screen.getByRole('heading', { name: /Novidades/ })).toHaveStyle({
      color: '#FAFAFA'
    })
  })
})
