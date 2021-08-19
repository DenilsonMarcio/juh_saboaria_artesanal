import { render, screen } from '@testing-library/react'
import { renderWitheTheme } from 'utils/tests/helpers'

import ItemCard from '.'

const props = {
  title: 'Sabonete Morango com Pêra',
  description: 'Sabonetes produzidos com morangos orgânicos',
  price: 'R$ 25,00',
  img: 'https://source.unsplash.com/user/willianjusten/300x140'
}

describe('<ItemCard />', () => {
  it('should render correctly', () => {
    // renderizar o card
    renderWitheTheme(<ItemCard {...props} />)

    // verificar se o title foi renderizado
    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    // verificar se o description foi renderizado
    expect(
      screen.getByRole('heading', { name: props.description })
    ).toBeInTheDocument()

    // verificar se o image foi renderizado
    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    )

    // verificar se o botão adicionar ao carrinho foi renderizado
    expect(
      screen.getByLabelText(/adicionar ao carrinho de compras/i)
    ).toBeInTheDocument()
  })
})
