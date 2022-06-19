import { Heading } from '@/components/Heading';
import { GameItem } from '@/components/GameItem';
import { Empty } from '@/components/Empty';

import { OrdersListProps } from '@/components/OrdersList/types';
import * as S from '@/components/OrdersList/styles';

export function OrdersList({ items = [] }: OrdersListProps) {
  return (
    <S.Wrapper>
      <Heading lineBottom color={'black'} size={'small'}>
        My orders
      </Heading>

      {items.length ? (
        items.map((item) => <GameItem key={item.title} {...item} />)
      ) : (
        <Empty
          title={'You have no orders yet'}
          description={
            'Go back to the store and explore great games and offers'
          }
          hasLink
        />
      )}
    </S.Wrapper>
  );
}
