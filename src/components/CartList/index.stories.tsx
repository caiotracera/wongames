import { Story, Meta } from '@storybook/react/types-6-0';

import { CartList } from '@/components/CartList';
import { CartListProps } from '@/components/CartList/types';
import { items as cartListMock } from '@/components/CartList/mock';

export default {
  title: 'CartList',
  component: CartList,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
  args: {
    items: cartListMock,
    total: 'R$ 430,00',
  },
} as Meta;

export const Default: Story<CartListProps> = (args) => (
  <div style={{ maxWidth: 800 }}>
    <CartList {...args} />
  </div>
);
