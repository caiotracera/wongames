import { InputHTMLAttributes } from 'react';

export type TextFieldProps = {
  onInput?: (value: string) => void;
  label?: string;
  labelFor?: string;
  initialValue?: string;
  icon?: React.ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;

export type InputWrapperProps = {
  hasIcon?: boolean;
};
