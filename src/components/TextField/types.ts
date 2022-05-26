import { InputHTMLAttributes } from 'react';

export type TextFieldProps = {
  onInput?: (value: string) => void;
  label?: string;
  labelFor?: string;
  initialValue?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export type WrapperProps = Pick<TextFieldProps, 'disabled' | 'error'>;

export type InputProps = Pick<TextFieldProps, 'iconPosition'>;

export type IconProps = Pick<TextFieldProps, 'iconPosition'>;
