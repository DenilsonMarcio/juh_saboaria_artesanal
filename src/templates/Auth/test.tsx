import { screen } from '@testing-library/react'
import { renderWitheTheme } from 'utils/tests/helpers'

import Auth from '.'

describe('<Auth />', () => {
  it('should render all components and children', () => {
    renderWitheTheme(
      <Auth title="Auth Title">
        <input type="text" />
      </Auth>
    )

    // Verificar se tem 2 logos
    expect(screen.getAllByRole('img', { name: /juju soap/i })).toHaveLength(2)

    // Verificar se tem o heading principal do banner
    expect(
      screen.getByRole('heading', {
        name: /Shampoos e Sabonetes feitos com produtos naturais/i
      })
    ).toBeInTheDocument()

    // Verificar se tem o subtitle
    expect(
      screen.getByRole('heading', { name: /Arte em Saboaria Artesanal/i })
    ).toBeInTheDocument()

    // Verificar se tem o title do content
    expect(
      screen.getByRole('heading', { name: /Auth Title/i })
    ).toBeInTheDocument()

    // Verificar se o children está sendo renderizado
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
})
