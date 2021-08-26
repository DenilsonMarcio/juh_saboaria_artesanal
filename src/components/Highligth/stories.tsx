import { Story, Meta } from '@storybook/react/types-6-0'
import Highligth, { HighlightProps } from '.'

import item from './mock'

export default {
  title: 'Highligth',
  component: Highligth,
  args: {...item}
} as Meta

export const Default: Story<HighlightProps> = (args) => (
  <div style={{ maxWidth: '104rem'}}>
    <Highligth {...args} />
  </div>
)

export const WithFloatImage: Story<HighlightProps> = (args) => (
  <div style={{ maxWidth: '104rem'}}>
    <Highligth {...args} />
  </div>
)

WithFloatImage.args = {
  floatImage: '/img/red-dead-float.png',

}