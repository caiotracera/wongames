import { Story, Meta } from '@storybook/react/types-6-0';
import { AddShoppingCart } from '@styled-icons/material-outlined';

import { Button } from '@/components/Button';
import { ButtonProps } from '@/components/Button/types';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string',
    },
    icon: {
      type: 'symbol',
    },
  },
} as Meta;

export const Default: Story<ButtonProps> = (args) => <Button {...args} />;

Default.args = {
  children: 'Buy now',
};

export const WithIcon: Story<ButtonProps> = (args) => <Button {...args} />;
WithIcon.args = {
  children: 'Buy now',
  icon: <AddShoppingCart />,
  size: 'small',
};
