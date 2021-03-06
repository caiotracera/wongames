export type LogoProps = {
  color?: 'white' | 'black';
  size?: 'normal' | 'large';
  hideLabelOnMobile?: boolean;
  id?: string;
};

export type WrapperProps = Pick<
  LogoProps,
  'color' | 'size' | 'hideLabelOnMobile'
>;
