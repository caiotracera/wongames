import { useState } from 'react';

import { CheckboxProps } from '@/components/Checkbox/types';
import * as S from '@/components/Checkbox/styles';

export function Checkbox({
  label,
  labelFor = '',
  labelColor = 'white',
  onCheck,
  isChecked = false,
  value,
  ...props
}: CheckboxProps) {
  const [checked, setChecked] = useState(isChecked);

  function onChange() {
    const status = !checked;
    setChecked(status);

    /**
     * Since there are no else statements, we need to add the comment bellow
     * to make jest/istanbul ignore the inexistent else path
     * and understand that 100% of the code is being tested.
     */

    /* istanbul ignore else */
    if (onCheck) {
      onCheck(status);
    }
  }

  return (
    <S.Wrapper>
      <S.Input
        type="checkbox"
        id={labelFor}
        onChange={onChange}
        checked={checked}
        value={value}
        {...props}
      />
      {!!label && (
        <S.Label labelColor={labelColor} htmlFor={labelFor}>
          {label}
        </S.Label>
      )}
    </S.Wrapper>
  );
}
