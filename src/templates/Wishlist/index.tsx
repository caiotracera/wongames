import { Base } from '@/templates/Base';
import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Showcase } from '@/components/Showcase';
import { GameCard } from '@/components/GameCard';
import { Grid } from '@/components/Grid';
import { Divider } from '@/components/Divider';
import { Empty } from '@/components/Empty';

import { WishlistProps } from '@/templates/Wishlist/types';

export function WishlistTemplate({
  games = [],
  recommendedGames,
  recommendedHighlight,
}: WishlistProps) {
  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          Wishlist
        </Heading>

        {games.length ? (
          <Grid>
            {games?.map((game, index) => (
              <GameCard key={`wishlist-${index}`} {...game} />
            ))}
          </Grid>
        ) : (
          <Empty
            title="Your wishlist is empty"
            description="Games added to your wishlist will appear here"
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
