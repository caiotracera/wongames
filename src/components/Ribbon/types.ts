export type RibbonColors = 'primary' | 'secondary';
export type RibbonSizes = 'normal' | 'small';

export type RibbonProps = {
  children: React.ReactNode;
  color?: RibbonColors;
  size?: RibbonSizes;
};

export type WrapperProps = Pick<RibbonProps, 'color' | 'size'>;
