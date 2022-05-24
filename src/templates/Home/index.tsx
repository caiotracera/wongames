import { Menu } from '@/components/Menu';
import { Footer } from '@/components/Footer';
import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { BannerSlider } from '@/components/BannerSlider';
import { Highlight } from '@/components/Highlight';
import { GameCardSlider } from '@/components/GameCardSlider';

import { HomeProps } from '@/templates/Home/types';
import * as S from '@/templates/Home/styles';

export function Home({
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularGames,
  upcomingGames,
  upcomingHighlight,
  upcomingMoreGames,
  freeGames,
  freeHighlight,
}: HomeProps) {
  return (
    <section>
      <Container>
        <Menu />
        <S.SectionBanner>
          <BannerSlider items={banners} />
        </S.SectionBanner>
      </Container>

      <S.SectionNews>
        <Container>
          <Heading lineLeft lineColor="secondary">
            News
          </Heading>

          <GameCardSlider items={newGames} color="black" />
        </Container>
      </S.SectionNews>

      <Container>
        <S.SectionMostPopular>
          <Heading lineLeft lineColor="secondary">
            Most popular
          </Heading>

          <Highlight {...mostPopularHighlight} />
          <GameCardSlider items={mostPopularGames} />
        </S.SectionMostPopular>

        <S.SectionUpcoming>
          <Heading lineLeft lineColor="secondary">
            Upcoming
          </Heading>

          <GameCardSlider items={upcomingGames} />
          <Highlight {...upcomingHighlight} />
          <GameCardSlider items={upcomingMoreGames} />
        </S.SectionUpcoming>
      </Container>

      <Container>
        <S.SectionFreeGames>
          <Heading lineLeft lineColor="secondary">
            Free games
          </Heading>

          <Highlight {...freeHighlight} />
          <GameCardSlider items={freeGames} />
        </S.SectionFreeGames>
      </Container>

      <S.SectionFooter>
        <Container>
          <Footer />
        </Container>
      </S.SectionFooter>
    </section>
  );
}
