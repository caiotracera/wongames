import { Story, Meta } from '@storybook/react/types-6-0';

import { items as paymentOptionsMock } from '@/components/PaymentOptions/mock';

import { CardsList } from '@/components/CardsList';
import { CardsListProps } from '@/components/CardsList/types';

export default {
  title: 'Profile/CardsList',
  component: CardsList,
  args: {
    cards: paymentOptionsMock,
  },
} as Meta;

export const Default: Story<CardsListProps> = (args) => (
  <div style={{ maxWidth: 860, margin: 'auto' }}>
    <CardsList {...args} />
  </div>
);
