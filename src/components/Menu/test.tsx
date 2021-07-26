import { fireEvent, render, screen } from '@testing-library/react'
import { renderWitheTheme } from 'utils/tests/helpers'

import Menu from '.'

describe('<Menu />', () => {
  it('should render the menu', () => {
 renderWitheTheme(<Menu />)
expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
// expect(screen.getByRole('img', {name: /won games/i})).toBeInTheDocument()
expect(screen.getByLabelText(/search/i)).toBeInTheDocument()
expect(screen.getByLabelText(/open shopping cart/i)).toBeInTheDocument()
  })

it('should render the open/close mobile menu', () => {
  renderWitheTheme(<Menu />)
  const fullMenuElement = screen.getByRole('navigation', {hidden: true})
expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
expect(fullMenuElement).toHaveStyle({opacity: 0})

fireEvent.click(screen.getByLabelText(/open menu/i))
expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false')
expect(fullMenuElement).toHaveStyle({opacity: 1})

fireEvent.click(screen.getByLabelText(/close menu/i))
expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
expect(fullMenuElement).toHaveStyle({opacity: 0})
    })
    
})
