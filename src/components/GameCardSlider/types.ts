import { GameCardProps } from '@/components/GameCard/types';

export type GameCardSliderProps = {
  items: GameCardProps[];
  color?: 'white' | 'black';
};

export type WrapperProps = Pick<GameCardSliderProps, 'color'>;
