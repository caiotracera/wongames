import { useState } from 'react';
import { Add, ShoppingCart } from '@styled-icons/material-outlined';

import { Heading } from '@/components/Heading';
import { Button } from '@/components/Button';

import { PaymentOptionsProps } from '@/components/PaymentOptions/types';
import * as S from '@/components/PaymentOptions/styles';
import { Radio } from '@/components/Radio';

export function PaymentOptions({
  cards = [],
  handlePayment,
}: PaymentOptionsProps) {
  const [checked, setChecked] = useState(false);

  return (
    <S.Wrapper>
      <S.Body>
        <Heading lineBottom lineColor="primary" color="black" size="small">
          Payment
        </Heading>

        <S.CardsList>
          {cards.map((card) => (
            <S.Card key={card.number}>
              <S.CardInfo>
                <img src={card.img} alt={card.flag} />
                {card.number}
              </S.CardInfo>
              <Radio
                name="credit-card"
                id={card.number}
                value={card.number}
                onCheck={() => setChecked(true)}
              />
            </S.Card>
          ))}

          <S.AddCard role="button">
            <Add size={14} /> Add a new credit card
          </S.AddCard>
        </S.CardsList>
      </S.Body>

      <S.Footer>
        <Button minimal as="a" fullWidth>
          Continue shopping
        </Button>

        <Button
          fullWidth
          icon={<ShoppingCart />}
          onClick={handlePayment}
          disabled={!checked}
        >
          Buy now
        </Button>
      </S.Footer>
    </S.Wrapper>
  );
}
