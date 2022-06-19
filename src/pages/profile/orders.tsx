import { GetServerSideProps } from 'next';

import { ProfileTemplate } from '@/templates/Profile';

import { OrdersList } from '@/components/OrdersList';
import { OrdersListProps } from '@/components/OrdersList/types';
import { items as ordersListMock } from '@/components/OrdersList/mock';

export default function Orders({ items }: OrdersListProps) {
  return (
    <ProfileTemplate>
      <OrdersList items={items} />
    </ProfileTemplate>
  );
}

export const getServerSideProps: GetServerSideProps<
  OrdersListProps
> = async () => {
  return {
    props: {
      items: [],
    },
  };
};
