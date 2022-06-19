import { Story, Meta } from '@storybook/react/types-6-0';

import { FormProfile } from '@/components/FormProfile';

export default {
  title: 'Form/FormProfile',
  component: FormProfile,
} as Meta;

export const Default: Story = () => (
  <div style={{ maxWidth: 860, margin: 'auto' }}>
    <FormProfile />
  </div>
);
