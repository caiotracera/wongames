import { Story, Meta } from '@storybook/react/types-6-0';

import { PaymentOptions } from '@/components/PaymentOptions';
import { PaymentOptionsProps } from '@/components/PaymentOptions/types';
import { items as paymentOptionsMock } from '@/components/PaymentOptions/mock';

export default {
  title: 'PaymentOptions',
  component: PaymentOptions,
  args: {
    cards: paymentOptionsMock,
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
  argTypes: {
    handlePayment: {
      action: 'clicked',
    },
  },
} as Meta;

export const Default: Story<PaymentOptionsProps> = (args) => (
  <div style={{ padding: 16, maxWidth: 400 }}>
    <PaymentOptions {...args} />
  </div>
);
