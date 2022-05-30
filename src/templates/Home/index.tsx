import { BannerSlider } from '@/components/BannerSlider';
import { Container } from '@/components/Container';
import { Showcase } from '@/components/Showcase';
import { Base } from '@/templates/Base';

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
    <Base>
      <Container>
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
    </Base>
  );
}
