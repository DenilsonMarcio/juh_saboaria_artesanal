import { Story, Meta } from '@storybook/react/types-6-0'
import Radio, { RadioProps } from '.'

export default {
  title: 'Radio',
  component: Radio,
  layout: 'fullscreen',
  argTypes: {
    onCheck: { action: 'onCheck' }
  }
} as Meta

export const Default: Story<RadioProps> = (args) => (
  <>
    <div style={{ padding: 10 }}>
      <Radio
        name="category"
        label="Shampoo"
        labelFor="Shampoo"
        {...args}
        id="Shampoo"
        value="Shampoo"
        defaultChecked
      />
    </div>
    <div style={{ padding: 10 }}>
      <Radio
        name="category"
        label="Sabonete"
        labelFor="Sabonete"
        {...args}
        id="Sabonete"
        value="Sabonete"
      />
    </div>
    <div style={{ padding: 10 }}>
      <Radio
        name="category"
        label="Creme Corporal"
        labelFor="Creme Corporal"
        id="Creme Corporal"
        value="Creme Corporal"
        {...args}
      />
    </div>
    <div style={{ padding: 10 }}>
      <Radio
        name="category"
        label="Hidratante"
        labelFor="Hidratante"
        id="Hidratante"
        value="Hidratante"
        {...args}
      />
    </div>
  </>
)
