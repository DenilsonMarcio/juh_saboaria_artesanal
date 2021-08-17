import { render, screen } from '@testing-library/react'
import { renderWitheTheme } from 'utils/tests/helpers'

import Ribbon from '.'

describe('<Ribbon />', () => {
  // texto do component
  it('should render the text correctly', () => {
    renderWitheTheme(<Ribbon>Mais vendido</Ribbon>)

    expect(screen.getByText(/Mais vendido/i)).toBeInTheDocument()
  })

  // background color do component
  it('should render with the primary color', () => {
    renderWitheTheme(<Ribbon>Mais vendido</Ribbon>)

    expect(screen.getByText(/Mais vendido/i)).toHaveStyle({
      backgroundColor: '#F231A5'
    })
  })

  // background color do component
  it('should render with the secondary color', () => {
    renderWitheTheme(<Ribbon color="secondary">Mais vendido</Ribbon>)

    expect(screen.getByText(/Mais vendido/i)).toHaveStyle({
      backgroundColor: '#3CD3C1'
    })
  })

  // Se o tamanho normal é default
  it('should render with the normal size as default', () => {
    renderWitheTheme(<Ribbon>Mais vendido</Ribbon>)

    expect(screen.getByText(/Mais vendido/i)).toHaveStyle({
      height: '3.6rem',
      fontSize: '1.4rem'
    })
  })

  // Se o tamanho small size
  it('should render with the smal size ', () => {
    renderWitheTheme(<Ribbon size="small">Mais vendido</Ribbon>)

    expect(screen.getByText(/Mais vendido/i)).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem'
    })
  })
})
