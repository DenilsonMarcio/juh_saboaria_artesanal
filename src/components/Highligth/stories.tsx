import { Story, Meta } from '@storybook/react/types-6-0'
import Highligth, { HighlightProps } from '.'

export default {
  title: 'Highligth',
  component: Highligth,
  args: {
    title: 'Sabonete de Morango',
    subtitle: 'Feito com essencias naturais da fruta',
    buttonLabel: 'Comprar Agora',
    buttonLink: '/produto2'
  }
} as Meta

export const Default: Story<HighlightProps> = (args) => <Highligth {...args} />
