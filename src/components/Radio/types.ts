import { InputHTMLAttributes } from 'react';

type RadioValue = string | ReadonlyArray<string> | number;

export type RadioProps = {
  onCheck?: (value?: RadioValue) => void;
  label?: string;
  labelColor?: 'white' | 'black';
  labelFor?: string;
  value?: RadioValue;
} & InputHTMLAttributes<HTMLInputElement>;

export type LabelProps = Pick<RadioProps, 'labelColor'>;
