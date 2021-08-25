import 'match-media-mock'
import {  screen } from '@testing-library/react'
import { renderWitheTheme } from 'utils/tests/helpers'

import ItemCardSlider from '.'

const items = [
  {
      title: 'Sabonetes',
    description: 'Sabonete branco',
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: '235',
    promotionalPrice: '215'
  },
  {
       title: 'Sabonetes',
    description: 'Sabonete branco',
    img: 'https://source.unsplash.com/user/willianjusten/300x141',
    price: '235',
    promotionalPrice: '215'
  },
  {
       title: 'Sabonetes',
    description: 'Sabonete branco',
    img: 'https://source.unsplash.com/user/willianjusten/300x142',
    price: '235',
    promotionalPrice: '215'
  },
  {
      title: 'Sabonetes',
    description: 'Sabonete branco',
    img: 'https://source.unsplash.com/user/willianjusten/300x143',
    price: '235',
    promotionalPrice: '215'
  },
  {
    title: 'Sabonetes',
    description: 'Sabonete branco',
    img: 'https://source.unsplash.com/user/willianjusten/300x144',
    price: '235',
    promotionalPrice: '215'
  },
  {
    title: 'Sabonetes',
    description: 'Sabonete Azul',
    img: 'https://source.unsplash.com/user/willianjusten/300x145',
    price: '235',
    promotionalPrice: '215'
  }
]


describe('<ItemSlider />', () => {
  it('should render with 4 active items', () => {
    const { container } = renderWitheTheme(<ItemCardSlider items={items} />)
    expect(container.querySelectorAll('.slick-active')).toHaveLength(4)
  })

  it('should render white arrows if color passed', () => {
    renderWitheTheme(<ItemCardSlider items={items} color="white" />)

    expect(screen.getByLabelText(/previous items/i)).toHaveStyle({
      color: '#FAFAFA'
    })
    expect(screen.getByLabelText(/next items/i)).toHaveStyle({
      color: '#FAFAFA'
    })
  })
})