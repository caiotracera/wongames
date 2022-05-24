import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  icon?: React.ReactNode;
  as?: React.ElementType;
  minimal?: boolean;
} & ButtonTypes;

export type WrapperProps = {
  hasIcon?: boolean;
} & Pick<ButtonProps, 'size' | 'fullWidth' | 'minimal'>;
