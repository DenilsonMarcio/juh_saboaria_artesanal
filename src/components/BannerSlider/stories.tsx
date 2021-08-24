import { Story, Meta } from '@storybook/react/types-6-0'
import BannerSlider, { BannerSliderProps } from '.'

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
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x582',
    title: 'sabonete 3',
    subtitle: '<p>Compre agora seu sabonete</p>',
    buttonLabel: 'Compre agora',
    buttonLink: '/categories/sabonete-3',
    ribbon: 'Mais Vendido'
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x583',
    title: 'sabonete 4',
    subtitle: '<p>Compre agora seu sabonete</p>',
    buttonLabel: 'Compre agora',
    buttonLink: '/categories/sabonete-4',
    ribbon: 'Mais Vendido'
  },
]

export default {
  title: 'BannerSlider',
  component: BannerSlider,
  args: {items},
  parameters: {
layout: 'fullscreen',
backgrounds: {
  default: 'dark',
}
  }
} as Meta

export const Default: Story<BannerSliderProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto'}}>
    <BannerSlider {...args}/>
  </div>
)
