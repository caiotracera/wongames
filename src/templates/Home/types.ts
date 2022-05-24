import { BannerProps } from '@/components/Banner/types';
import { GameCardProps } from '@/components/GameCard/types';
import { HighlightsProps } from '@/components/Highlight/types';

export type HomeProps = {
  banners: BannerProps[];
  newGames: GameCardProps[];
  mostPopularHighlight: HighlightsProps;
  mostPopularGames: GameCardProps[];
  upcomingGames: GameCardProps[];
  upcomingHighlight: HighlightsProps;
  upcomingMoreGames: GameCardProps[];
  freeGames: GameCardProps[];
  freeHighlight: HighlightsProps;
};
