import { fireEvent, screen } from '@testing-library/react'
import theme from 'styles/theme'
import { renderWitheTheme } from 'utils/tests/helpers'

import ItemCard from '.'

const props = {
  title: 'Sabonete Morango com Pêra',
  description: 'Sabonetes produzidos com morangos orgânicos',
  price: 'R$ 200,00',
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

  it('should render price in label', () => {
    // renderiza o componente
    renderWitheTheme(<ItemCard {...props} />)
    const price = screen.getByText('R$ 200,00')
    // preço não tenha line-through
    expect(price).not.toHaveStyle({ textDecoration: 'line-through' })
    // preço tenha o background secundario
    expect(price).toHaveStyle({ backgroundColor: theme.colors.secondary })
  })

  it('should render a line-through in price when promotional', () => {
    // renderiza o componente promotional  $100
    renderWitheTheme(<ItemCard {...props} promotionalPrice="R$100,00" />)

    // preço tenha line-through $200
    expect(screen.getByText('R$ 200,00')).toHaveStyle({
      textDecoration: 'line-through'
    })
    // preço promotional sem o line-through $100
    expect(screen.getByText('R$100,00')).not.toHaveStyle({
      textDecoration: 'line-through'
    })
  })

  it('should render a filled Favorite icon when favorite is true ', () => {
    // renderiza o componente
    renderWitheTheme(<ItemCard {...props} favorite />)

    // verifica se o icone de favoritos foi renderizado
    expect(screen.getByLabelText(/remove from wishlist/)).toBeInTheDocument()
  })

  it('should call onFav method when favorite is clicked ', () => {
    // função para favoritar
    const onFav = jest.fn()
    // renderiza o componente
    renderWitheTheme(<ItemCard {...props} favorite onFav={onFav} />)

    // Quando clicado no botão de favoritar
    fireEvent.click(screen.getAllByRole('button')[0])
    // o metodo é chamado
    expect(onFav).toBeCalled()
  })

  it('should render Ribbon', () => {
    renderWitheTheme(
      <ItemCard
        {...props}
        ribbon="My Ribbon"
        ribbonSize="small"
        ribbonColor="secondary"
      />
    )
    const ribbon = screen.getByText(/My Ribbon/i)

    expect(ribbon).toBeInTheDocument()
    expect(ribbon).toHaveStyle({ backgroundColor: '#3CD3C1' })
    expect(ribbon).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem'
    })
  })
})
