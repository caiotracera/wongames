import { Container } from '@/components/Container';
import { Footer } from '@/components/Footer';
import { Menu } from '@/components/Menu';

import { BaseProps } from '@/templates/Base/types';
import * as S from '@/templates/Base/styles';

export function Base({ children }: BaseProps) {
  return (
    <S.Wrapper>
      <Container>
        <Menu />
      </Container>

      <S.Content>{children}</S.Content>

      <S.SectionFooter>
        <Container>
          <Footer />
        </Container>
      </S.SectionFooter>
    </S.Wrapper>
  );
}
