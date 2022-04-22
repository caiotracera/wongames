export type LineColors = 'primary' | 'secondary';

export type HeadingProps = {
  children: React.ReactNode;
  color?: 'white' | 'black';
  lineLeft?: boolean;
  lineBottom?: boolean;
  lineColor?: LineColors;
  size?: 'small' | 'medium';
};

export type WrapperProps = Pick<
  HeadingProps,
  'color' | 'lineLeft' | 'lineBottom' | 'lineColor' | 'size'
>;
