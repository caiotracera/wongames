import { Story, Meta } from '@storybook/react/types-6-0';

import { Checkbox } from '@/components/Checkbox';
import { CheckboxProps } from '@/components/Checkbox/types';

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
    },
  },
  argTypes: {
    onCheck: { action: 'checked' },
  },
} as Meta;

export const Default: Story<CheckboxProps> = (args) => (
  <>
    <div style={{ padding: 10 }}>
      <Checkbox
        name="category"
        label="Action"
        labelFor="action"
        isChecked
        {...args}
      />
    </div>
    <div style={{ padding: 10 }}>
      <Checkbox
        name="category"
        label="Adventure"
        labelFor="adventure"
        {...args}
      />
    </div>
    <div style={{ padding: 10 }}>
      <Checkbox
        name="category"
        label="Strategy"
        labelFor="strategy"
        {...args}
      />
    </div>
  </>
);
