import { HeadingProps } from '@/components/Heading/types';
import * as S from '@/components/Heading/styles';

export function Heading({
  children,
  color = 'white',
  lineLeft = false,
  lineBottom = false,
  size = 'medium',
}: HeadingProps) {
  return (
    <S.Wrapper
      color={color}
      lineLeft={lineLeft}
      lineBottom={lineBottom}
      size={size}
    >
      {children}
    </S.Wrapper>
  );
}
