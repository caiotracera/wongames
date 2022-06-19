import { GetServerSideProps } from 'next';

import { ProfileTemplate } from '@/templates/Profile';

import { CardsList } from '@/components/CardsList';
import { CardsListProps } from '@/components/CardsList/types';
import { items as paymentOptionsMock } from '@/components/PaymentOptions/mock';

export default function Cards({ cards }: CardsListProps) {
  return (
    <ProfileTemplate>
      <CardsList cards={cards} />
    </ProfileTemplate>
  );
}

export const getServerSideProps: GetServerSideProps<
  CardsListProps
> = async () => {
  return {
    props: {
      cards: paymentOptionsMock,
    },
  };
};
