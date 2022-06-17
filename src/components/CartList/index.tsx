import { GameItem } from '@/components/GameItem';

import { CartListProps } from '@/components/CartList/types';
import * as S from '@/components/CartList/styles';

export function CartList({ items, total }: CartListProps) {
  return (
    <S.Wrapper>
      {items.map((item) => (
        <GameItem key={item.title} {...item} />
      ))}

      <S.Footer>
        Total <S.Total>{total}</S.Total>
      </S.Footer>
    </S.Wrapper>
  );
}
