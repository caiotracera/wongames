import { TextFieldProps } from '@/components/TextField/types';
import * as S from '@/components/TextField/styles';
import { useState } from 'react';

export function TextField({
  label,
  name,
  initialValue = '',
  onInput,
  icon,
  iconPosition = 'left',
  disabled = false,
  error,
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
    <S.Wrapper disabled={disabled} error={error}>
      {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
      <S.InputWrapper>
        {!!icon && <S.Icon iconPosition={iconPosition}>{icon}</S.Icon>}
        <S.Input
          type="text"
          onChange={onChange}
          value={value}
          iconPosition={iconPosition}
          disabled={disabled}
          aria-label={name}
          name={name}
          {...(label ? { id: name } : {})}
          {...props}
        />
      </S.InputWrapper>

      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  );
}
