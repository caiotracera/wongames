import { RibbonColors, RibbonSizes } from '@/components/Ribbon/types';

export type GameCardProps = {
  title: string;
  developer: string;
  img: string;
  price: string;
  promotionalPrice?: string;
  favorite?: boolean;
  onFav?: () => void;
  ribbon?: React.ReactNode;
  ribbonSize?: RibbonSizes;
  ribbonColor?: RibbonColors;
};

export type PriceProps = {
  isPromotional?: boolean;
};
