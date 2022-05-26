import { InputHTMLAttributes } from 'react';

export type TextFieldProps = {
  onInput?: (value: string) => void;
  label?: string;
  labelFor?: string;
  initialValue?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
} & InputHTMLAttributes<HTMLInputElement>;

export type InputProps = Pick<TextFieldProps, 'iconPosition'>;

export type IconProps = Pick<TextFieldProps, 'iconPosition'>;
