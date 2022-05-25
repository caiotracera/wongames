import { InputHTMLAttributes } from 'react';

export type CheckboxProps = {
  label?: string;
  labelFor?: string;
  labelColor?: 'white' | 'black';
  onCheck?: (status: boolean) => void;
  isChecked?: boolean;
  value?: string | ReadonlyArray<string> | number;
} & InputHTMLAttributes<HTMLInputElement>;

export type LabelProps = Pick<CheckboxProps, 'labelColor'>;
