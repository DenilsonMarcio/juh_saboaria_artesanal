import { Story, Meta } from '@storybook/react/types-6-0'
import Checkbox, { CheckboxProps } from '.'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  layout: 'fullscreen',
  argTypes: {
    onCheck: { action: 'onCheck' }
  }
} as Meta

export const Default: Story<CheckboxProps> = (args) => (
  <>
    <div style={{ padding: 10 }}>
      <Checkbox
        name="category"
        label="Shampoo"
        labelFor="Shampoo"
        isChecked
        {...args}
      />
    </div>
    <div style={{ padding: 10 }}>
      <Checkbox
        name="category"
        label="Sabonete"
        labelFor="sabonete"
        {...args}
      />
    </div>
    <div style={{ padding: 10 }}>
      <Checkbox
        name="category"
        label="Creme Corporal"
        labelFor="Creme Corporal"
        {...args}
      />
    </div>
    <div style={{ padding: 10 }}>
      <Checkbox
        name="category"
        label="Hidratante"
        labelFor="Hidratante"
        {...args}
      />
    </div>
  </>
)
