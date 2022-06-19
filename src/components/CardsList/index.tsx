import { Heading } from '@/components/Heading';

import { CardsListProps } from '@/components/CardsList/types';
import * as S from '@/components/CardsList/styles';
import { Add } from '@styled-icons/material-outlined';

export function CardsList({ cards = [] }: CardsListProps) {
  return (
    <>
      <Heading lineBottom color={'black'} size={'small'}>
        My cards
      </Heading>

      {cards.map((card) => (
        <S.Card key={card.number}>
          <img src={card.img} alt={card.flag} />
          <span>{card.number}</span>
        </S.Card>
      ))}

      <S.AddCard role="button">
        <Add size={14} /> Add a new credit card
      </S.AddCard>
    </>
  );
}
