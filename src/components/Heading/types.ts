export type HeadingProps = {
  children: React.ReactNode;
  color?: 'white' | 'black';
  lineLeft?: boolean;
  lineBottom?: boolean;
};

export type WrapperProps = Pick<
  HeadingProps,
  'color' | 'lineLeft' | 'lineBottom'
>;
