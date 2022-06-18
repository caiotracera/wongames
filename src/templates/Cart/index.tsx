import { CartList } from '@/components/CartList';
import { Container } from '@/components/Container';
import { Divider } from '@/components/Divider';
import { Heading } from '@/components/Heading';
import { PaymentOptions } from '@/components/PaymentOptions';
import { Showcase } from '@/components/Showcase';

import { Base } from '@/templates/Base';

import { CartTemplateProps } from '@/templates/Cart/types';
import * as S from '@/templates/Cart/styles';
import { Empty } from '@/components/Empty';

export function CartTemplate({
  recommendedGames,
  recommendedHighlight,
  items,
  total,
  cards,
}: CartTemplateProps) {
  const handlePayment = () => ({});
  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          My cart
        </Heading>

        {items.length ? (
          <S.Content>
            <CartList items={items} total={total} />
            <PaymentOptions cards={cards} handlePayment={handlePayment} />
          </S.Content>
        ) : (
          <Empty
            title="Your cart is empty"
            description="Go back to the store and explore great games and offers"
            hasLink
          />
        )}

        <Divider />
      </Container>

      <Showcase
        title="You may like these games"
        games={recommendedGames}
        highlight={recommendedHighlight}
      />
    </Base>
  );
}
