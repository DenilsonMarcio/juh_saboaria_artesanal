import { screen } from '@testing-library/react'
import { renderWitheTheme } from 'utils/tests/helpers'

import FormSignIn from '.'

describe('<FormSignIn />', () => {
  it('should render the form', () => {
    const { container } = renderWitheTheme(<FormSignIn />)

    // verifique email
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()
    // verifique password
    expect(screen.getByPlaceholderText(/senha/i)).toBeInTheDocument()
    // verifique button
    expect(
      screen.getByRole('button', { name: /entrar agora/i })
    ).toBeInTheDocument()

    expect(container.parentElement).toMatchSnapshot()
  })

  it('Should render the forget password link', () => {
    renderWitheTheme(<FormSignIn />)

    expect(
      screen.getByRole('link', { name: /Esqueci minha senha/i })
    ).toBeInTheDocument()
  })
  it('should render the text and link to sign up', () => {
    renderWitheTheme(<FormSignIn />)
    // verificar text
    expect(
      screen.getByRole('link', { name: /criar aqui/i })
    ).toBeInTheDocument()

    //verificar link
    expect(screen.getByText(/Não tem uma conta\?/i)).toBeInTheDocument()
  })
})
