import { Story, Meta } from '@storybook/react/types-6-0'
import ItemCard, { ItemCardProps } from '.'

export default {
  title: 'ItemCard',
  component: ItemCard,
  args: {
    title: 'Sabonete Morango com Pêra',
    description: 'Sabonetes produzidos com morangos orgânicos',
    price: 'R$ 25,00',
    promotionalPrice: 'R$ 20,00',
    img: 'https://source.unsplash.com/user/willianjusten/300x140'
  },
  argTypes: {
    onFav: { action: 'clicked' },
    ribbon: { type: 'string' }
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story<ItemCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <ItemCard {...args} />
  </div>
)

export const WithRibbon: Story<ItemCardProps> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <ItemCard {...args} />
  </div>
)

WithRibbon.args = {
  ribbon: '20% off',
  ribbonColor: 'primary',
  ribbonSize: 'normal'
}
