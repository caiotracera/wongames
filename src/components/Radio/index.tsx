import { RadioProps } from '@/components/Radio/types';
import * as S from '@/components/Radio/styles';

export function Radio({
  label,
  onCheck,
  labelColor = 'white',
  labelFor = '',
  value,
  ...props
}: RadioProps) {
  function onChange() {
    /**
     * Since there are no else statements, we need to add the comment bellow
     * to make jest/istanbul ignore the inexistent else path
     * and understand that 100% of the code is being tested.
     */

    /* istanbul ignore else */
    if (onCheck) {
      onCheck(value);
    }
  }

  return (
    <S.Wrapper>
      <S.Input
        id={labelFor}
        type="radio"
        value={value}
        onChange={onChange}
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
