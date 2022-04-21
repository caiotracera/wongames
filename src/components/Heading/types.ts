export type HeadingProps = {
  children: React.ReactNode;
  color?: 'white' | 'black';
  lineLeft?: boolean;
  lineBottom?: boolean;
  size?: 'small' | 'medium';
};

export type WrapperProps = Pick<
  HeadingProps,
  'color' | 'lineLeft' | 'lineBottom' | 'size'
>;
