import { Story, Meta } from '@storybook/react/types-6-0';

import { OrdersList } from '@/components/OrdersList';
import { OrdersListProps } from '@/components/OrdersList/types';
import { items as ordersListMock } from '@/components/OrdersList/mock';

export default {
  title: 'Profile/OrdersList',
  component: OrdersList,
  args: {
    items: ordersListMock,
  },
} as Meta;

export const Default: Story<OrdersListProps> = (args) => (
  <div style={{ maxWidth: 850, margin: 'auto' }}>
    <OrdersList {...args} />
  </div>
);
