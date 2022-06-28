import { GameCardProps } from '@/components/GameCard/types';
import { ItemProps } from '@/components/ExploreSidebar/types';

export type GamesTemplateProps = {
  games?: GameCardProps[];
  filterItems: ItemProps[];
};
