import { GameCardProps } from '@/components/GameCard/types';
import { HighlightsProps } from '@/components/Highlight/types';

export type ShowcaseProps = {
  title?: string;
  highlight?: HighlightsProps;
  games?: GameCardProps[];
};
