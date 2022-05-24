import { GetStaticProps } from 'next';

import { Home } from '@/templates/Home';
import { HomeProps } from '@/templates/Home/types';

import { items as BannersMock } from '@/components/BannerSlider/mock';
import { items as GamesMock } from '@/components/GameCardSlider/mock';
import { item as HighlightMock } from '@/components/Highlight/mock';

export default function Index(props: HomeProps) {
  return <Home {...props} />;
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  return {
    props: {
      banners: BannersMock,
      newGames: GamesMock,
      mostPopularHighlight: HighlightMock,
      mostPopularGames: GamesMock,
      upcomingGames: GamesMock,
      upcomingHighlight: HighlightMock,
      upcomingMoreGames: GamesMock,
      freeGames: GamesMock,
      freeHighlight: HighlightMock,
    },
  };
};
