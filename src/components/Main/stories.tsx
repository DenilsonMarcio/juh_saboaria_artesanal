import { Story, Meta } from '@storybook/react/types-6-0'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'Sabonetes Artesanais',
    description: 'Sabonetes produzidos com materiais orgânicos'
  }
} as Meta

export const Basic: Story = (args) => <Main {...args} />
Basic.args = {
  title: 'Sabonetes Artesanais',
  description: 'Sabonetes produzidos com materiais orgânicos'
}

export const Default: Story = (args) => <Main {...args} />
