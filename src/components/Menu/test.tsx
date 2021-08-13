import { fireEvent, screen } from '@testing-library/react'
import { renderWitheTheme } from 'utils/tests/helpers'

import Menu from '.'

describe('<Menu />', () => {
  it('should render the menu', () => {
    renderWitheTheme(<Menu />)
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/open shopping cart/i)).toBeInTheDocument()
  })

  it('should render the open/close mobile menu', () => {
    renderWitheTheme(<Menu />)
    const fullMenuElement = screen.getByRole('navigation', { hidden: true })
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })

    fireEvent.click(screen.getByLabelText(/open menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false')
    expect(fullMenuElement).toHaveStyle({ opacity: 1 })

    fireEvent.click(screen.getByLabelText(/close menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })
  })

  it('should show register box when logged out', () => {
    renderWitheTheme(<Menu />)
    expect(screen.getByText(/entrar/i)).toBeInTheDocument()
    expect(screen.getByText(/Criar conta/i)).toBeInTheDocument()
  })

  it('should show wishlist and account when logged in', () => {
    renderWitheTheme(<Menu username="palau" />)
    expect(screen.getByText(/Minha conta/i)).toBeInTheDocument()
    expect(screen.getByText(/Lista de desejos/i)).toBeInTheDocument()
    expect(screen.queryByText(/entrar/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/Criar conta/i)).not.toBeInTheDocument()
  })
})
