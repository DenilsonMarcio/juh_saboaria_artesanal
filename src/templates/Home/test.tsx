import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWitheTheme } from 'utils/tests/helpers'

import bannerMock from 'components/BannerSlider/mock'
import itemsMock from 'components/ItemCardSlider/mock'
import highlightMock from 'components/Highligth/mock'

import Home from '.'

const props = {
  banners: bannerMock,
  newItems: [itemsMock[0]],
  bestSellersHightLight: highlightMock,
  bestSellerItem: [itemsMock[0]]
}

describe('<Home />', () => {
  it('should render menu and footer', () => {
    renderWitheTheme(<Home {...props} />)

    // Menu
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()

    // Footer
    expect(
      screen.getByRole('heading', { name: /contato/i })
    ).toBeInTheDocument()

    expect(screen.getAllByRole('img', { name: /Juju Soap/i })).toHaveLength(2)

    expect(
      screen.getByRole('heading', { name: /Novidades/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Mais Vendidos/i })
    ).toBeInTheDocument()
    // Banner
    expect(screen.getAllByText(/Sabonete 1/i)).toHaveLength(1)
  })
})
