export type HighlightsProps = {
  title: string;
  subtitle: string;
  buttonLabel: string;
  buttonLink: string;
  backgroundImage: string;
  floatImage?: string;
  alignment?: 'left' | 'right';
};

export type WrapperProps = Pick<
  HighlightsProps,
  'backgroundImage' | 'alignment'
>;
