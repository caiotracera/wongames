import { GameCardProps } from '@/components/GameCard/types';
import { HighlightsProps } from '@/components/Highlight/types';

export type WishlistProps = {
  games?: GameCardProps[];
  recommendedGames: GameCardProps[];
  recommendedHighlight: HighlightsProps;
};
