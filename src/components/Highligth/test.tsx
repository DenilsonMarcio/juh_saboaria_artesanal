import { screen } from '@testing-library/react'
import { renderWitheTheme } from 'utils/tests/helpers'

import Highligth from '.'

const props = {
  title: 'Heading 1',
  subtitle: 'Heading 2',
  buttonLabel: 'Comprar Agora',
  buttonLink: '/produto2'
}

describe('<Highligth />', () => {
  it('should render headings and button', () => {
    const { container } = renderWitheTheme(<Highligth {...props} />)

    expect(
      screen.getByRole('heading', { name: /heading 1/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /heading 2/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('link', { name: /Comprar agora/i })
    ).toBeInTheDocument()
  })

})
