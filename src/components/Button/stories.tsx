import { Story, Meta } from '@storybook/react/types-6-0'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'
import Button from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: ""
    }
  }
} as Meta

export const Default: Story = (args) => <Button {...args}/>

Default.args = {
  children: 'Comprar agora'
}
export const withIcon: Story = (args) => <Button {...args}/>
withIcon.args = {
  size: 'small',
  children: 'Comprar agora',
  icon: <AddShoppingCart />
}

export const asLink: Story = (args) => <Button {...args}/>

asLink.args = {
  size: 'large',
  children: 'Comprar agora',
  as: 'a',
  href: '/link'
}