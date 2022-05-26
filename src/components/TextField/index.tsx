import { TextFieldProps } from '@/components/TextField/types';
import * as S from '@/components/TextField/styles';
import { useState } from 'react';

export function TextField({
  label,
  labelFor = '',
  initialValue = '',
  onInput,
  icon,
  iconPosition = 'left',
  ...props
}: TextFieldProps) {
  const [value, setValue] = useState(initialValue);

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    setValue(newValue);

    /**
     * Since there are no else statements, we need to add the comment bellow
     * to make jest/istanbul ignore the inexistent else path
     * and understand that 100% of the code is being tested.
     */

    /* istanbul ignore else */
    if (onInput) {
      onInput(newValue);
    }
  }

  return (
    <S.Wrapper>
      {!!label && <S.Label htmlFor={labelFor}>{label}</S.Label>}
      <S.InputWrapper>
        {!!icon && <S.Icon iconPosition={iconPosition}>{icon}</S.Icon>}
        <S.Input
          type="text"
          onChange={onChange}
          value={value}
          iconPosition={iconPosition}
          {...props}
        />
      </S.InputWrapper>
    </S.Wrapper>
  );
}
