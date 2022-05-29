import { BannerSlider } from '@/components/BannerSlider';
import { Container } from '@/components/Container';
import { Footer } from '@/components/Footer';
import { GameCardSlider } from '@/components/GameCardSlider';
import { Heading } from '@/components/Heading';
import { Highlight } from '@/components/Highlight';
import { Menu } from '@/components/Menu';
import { Showcase } from '@/components/Showcase';

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
        <Showcase title="News" games={newGames} color="black" />
      </S.SectionNews>

      <Showcase
        title="Most popular"
        highlight={mostPopularHighlight}
        games={mostPopularGames}
      />

      <Showcase title="Upcoming" games={upcomingGames} />
      <Showcase highlight={upcomingHighlight} games={upcomingMoreGames} />

      <Showcase
        title="Free games"
        highlight={freeHighlight}
        games={freeGames}
      />

      <S.SectionFooter>
        <Container>
          <Footer />
        </Container>
      </S.SectionFooter>
    </section>
  );
}
