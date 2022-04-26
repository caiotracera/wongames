import { RibbonColors, RibbonSizes } from '@/components/Ribbon/types';

export type BannerProps = {
  img: string;
  title: string;
  subtitle: string;
  buttonLabel: string;
  buttonLink: string;
  ribbon?: React.ReactNode;
  ribbonSize?: RibbonSizes;
  ribbonColor?: RibbonColors;
};

export type ImageProps = {
  src: string;
};
