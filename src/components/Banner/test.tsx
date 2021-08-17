import {  screen } from '@testing-library/react'
import { renderWitheTheme } from 'utils/tests/helpers'

import Banner from '.'

const props = {
  img: 'https://source.unsplash.com/user/willianjusten/1042x580',
  title: 'Sabonete Morango',
  subtitle: '<p>Morango <strong> Silvestre </strong> com pêra</p>',
  buttonLabel: 'Comprar Agora',
  buttonLink: '/produtos/morango-pera'
}

describe('<Banner />', () => {
  it('should render correctly', () => {
    const { container } = renderWitheTheme(<Banner {...props} />)

    // verifique se o titulo existe renderizado (toBeInThedocument)
    expect(screen.getByRole('heading', {name: /Sabonete Morango/i})).toBeInTheDocument()
    // verifique se o sibtulo existe renderizado
    expect(screen.getByRole('heading', {name: /Morango Silvestre com pêra/i })).toBeInTheDocument()
    // verifique se a imagem existe renderizado
    expect(screen.getByRole('img', {name: /Sabonete Morango/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()

  })
})
