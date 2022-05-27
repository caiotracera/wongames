import { Story, Meta } from '@storybook/react/types-6-0';

import { FormSignIn } from '@/components/FormSignIn';

export default {
  title: 'Form/FormSignIn',
  component: FormSignIn,
} as Meta;

export const Default: Story = () => (
  <div style={{ width: 300, margin: 'auto' }}>
    <FormSignIn />
  </div>
);
