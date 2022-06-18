import { GetServerSideProps } from 'next';

import { items as gamesMock } from '@/components/GameCardSlider/mock';
import { items as cartListMock } from '@/components/CartList/mock';
import { items as paymentOptionsMock } from '@/components/PaymentOptions/mock';
import { item as highlightMock } from '@/components/Highlight/mock';

import { CartTemplate } from '@/templates/Cart';
import { CartTemplateProps } from '@/templates/Cart/types';

export default function Cart(props: CartTemplateProps) {
  return <CartTemplate {...props} />;
}

export const getServerSideProps: GetServerSideProps<
  CartTemplateProps
> = async () => {
  return {
    props: {
      recommendedGames: gamesMock,
      recommendedHighlight: highlightMock,
      items: cartListMock,
      total: '$0.00',
      cards: paymentOptionsMock,
    },
  };
};
