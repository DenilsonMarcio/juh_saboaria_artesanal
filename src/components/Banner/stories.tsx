import { Story, Meta } from '@storybook/react/types-6-0'
import Banner, { BannerProps } from '.'

export default {
  title: 'Banner',
  component: Banner,
  args: {
    img: 'https://source.unsplash.com/1042x580',
    title: 'Sabonete Morango',
    subtitle: '<p>Morango <strong> Silvestre </strong> com pêra</p>',
    buttonLabel: 'Comprar Agora',
    buttonLink: '/produtos/morango-pera'
  },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: Story<BannerProps> = (args) => (
  <div style={{ maxWidth: '104rem', margin: '0 auto'}}>
    <Banner {...args} />
  </div>
)

export const WithRibbon: Story<BannerProps> = (args) => (
  <div style={{ maxWidth: '104rem'}}>
    <Banner {...args} />
  </div>
)

WithRibbon.args = {
  ribbon: '20% off',
  ribbonColor: 'primary',
  ribbonSize: 'normal'
}
