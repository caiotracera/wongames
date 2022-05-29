import {
  AddShoppingCart,
  Favorite,
  FavoriteBorder,
} from '@styled-icons/material-outlined';

import Button from '@/components/Button';
import { Ribbon } from '@/components/Ribbon';

import { GameCardProps } from '@/components/GameCard/types';
import * as S from '@/components/GameCard/styles';

export function GameCard({
  title,
  developer,
  img,
  price,
  promotionalPrice,
  favorite = false,
  onFav,
  ribbon,
  ribbonColor = 'primary',
  ribbonSize = 'small',
}: GameCardProps) {
  return (
    <S.Wrapper>
      <S.ImageBox>
        <img src={img} alt={title} />
      </S.ImageBox>

      <S.Content>
        <S.Info>
          <S.Title>{title}</S.Title>
          <S.Developer>{developer}</S.Developer>
        </S.Info>

        <S.FavButton role={'button'} onClick={onFav}>
          {favorite ? (
            <Favorite aria-label={'Remove from wishlist'} />
          ) : (
            <FavoriteBorder aria-label={'Add to wishlist'} />
          )}
        </S.FavButton>

        <S.BuyBox>
          {!!promotionalPrice && <S.Price isPromotional>{price}</S.Price>}
          <S.Price>{promotionalPrice || price}</S.Price>
          <Button icon={<AddShoppingCart />} size={'small'} />
        </S.BuyBox>
      </S.Content>

      {!!ribbon && (
        <Ribbon color={ribbonColor} size={ribbonSize}>
          {ribbon}
        </Ribbon>
      )}
    </S.Wrapper>
  );
}
