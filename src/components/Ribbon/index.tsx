import { RibbonProps } from '@/components/Ribbon/types';
import * as S from '@/components/Ribbon/styles';

export function Ribbon({
  children,
  color = 'primary',
  size = 'normal',
}: RibbonProps) {
  return (
    <S.Wrapper color={color} size={size}>
      {children}
    </S.Wrapper>
  );
}
