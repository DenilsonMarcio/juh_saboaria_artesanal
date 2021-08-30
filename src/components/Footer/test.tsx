import { screen } from '@testing-library/react'
import { renderWitheTheme } from 'utils/tests/helpers'

import Footer from '.'

describe('<Footer />', () => {
  it('should render 4 columns topics', () => {
    renderWitheTheme(<Footer />)
    expect(
      screen.getByRole('heading', { name: /contato/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Nossas redes/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /links/i })).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Localização/i })
    ).toBeInTheDocument()
  })
})
