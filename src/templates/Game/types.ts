import { GalleryImageProps } from '@/components/Gallery/types';
import { GameCardProps } from '@/components/GameCard/types';
import { GameDetailsProps } from '@/components/GameDetails/types';
import { GameInfoProps } from '@/components/GameInfo/types';
import { HighlightsProps } from '@/components/Highlight/types';

export type CoverProps = {
  src: string;
};

export type GameTemplateProps = {
  cover: string;
  gameInfo: GameInfoProps;
  gallery?: GalleryImageProps[];
  description: string;
  details: GameDetailsProps;
  upcomingGames: GameCardProps[];
  upcomingHighlight: HighlightsProps;
  recommendedGames: GameCardProps[];
};
