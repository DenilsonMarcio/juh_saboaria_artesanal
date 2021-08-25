import { Story, Meta } from '@storybook/react/types-6-0'
import { ItemCardProps } from 'components/ItemCard'
import ItemCardSlider from '.'

const items = [
  {
      title: 'Sabonetes',
    description: 'Sabonete branco',
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: 235,
    promotionalPrice: 215
  },
  {
       title: 'Sabonetes',
    description: 'Sabonete branco',
    img: 'https://source.unsplash.com/user/willianjusten/300x141',
    price: 235,
    promotionalPrice: 215
  },
  {
       title: 'Sabonetes',
    description: 'Sabonete branco',
    img: 'https://source.unsplash.com/user/willianjusten/300x142',
    price: 235,
    promotionalPrice: 215
  },
  {
      title: 'Sabonetes',
    description: 'Sabonete branco',
    img: 'https://source.unsplash.com/user/willianjusten/300x143',
    price: 235,
    promotionalPrice: 215
  },
  {
    title: 'Sabonetes',
    description: 'Sabonete branco',
    img: 'https://source.unsplash.com/user/willianjusten/300x144',
    price: 235,
    promotionalPrice: 215
  },
  {
    title: 'Sabonetes',
    description: 'Sabonete Azul',
    img: 'https://source.unsplash.com/user/willianjusten/300x145',
    price: 235,
    promotionalPrice: 215
  }
]

export default {
  title: 'ItemCardSlider',
  component: ItemCardSlider,
  args: { items },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story<ItemCardProps[]> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <ItemCardSlider items={args} {...args} />
  </div>
)
