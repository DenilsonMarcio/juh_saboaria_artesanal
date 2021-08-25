import 'match-media-mock'
import { screen } from '@testing-library/react'

import BannerSlider from '.'
import { renderWitheTheme } from 'utils/tests/helpers'

const items = [
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'sabonete 1',
    subtitle: '<p>Compre agora seu sabonete</p>',
    buttonLabel: 'Compre agora',
    buttonLink: '/categories/sabonete-1',
    ribbon: 'Mais Vendido'
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x581',
    title: 'sabonete 2',
    subtitle: '<p>Compre agora seu sabonete</p>',
    buttonLabel: 'Compre agora',
    buttonLink: '/categories/sabonete-2',
    ribbon: 'Mais Vendido'
  }
]

describe('<BannerSlider />', () => {
  it('should render vertical Slider', () => {
    const { container } = renderWitheTheme(<BannerSlider items={items} />)

    expect(container.querySelector('.slick-vertical')).toBeInTheDocument()
  })

  it('should render with 1 active item', () => {
    const { container } = renderWitheTheme(<BannerSlider items={items} />)

    expect(container.querySelectorAll('.slick-slide')).toHaveLength(2)
    expect(container.querySelectorAll('li.slick-active')).toHaveLength(1)

    expect(
      screen.getByRole('heading', { name: /sabonete 1/i, hidden: false })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /sabonete 2/i, hidden: true })
    ).toBeInTheDocument()
  })

  it('should render with the dots', () => {
    const { container } = renderWitheTheme(<BannerSlider items={items} />)

    expect(container.querySelectorAll('.slick-dots')).toHaveLength(1)
  })
})
