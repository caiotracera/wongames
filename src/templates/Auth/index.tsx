import { Logo } from '@/components/Logo';
import { Heading } from '@/components/Heading';

import { AuthProps } from '@/templates/Auth/types';
import * as S from '@/templates/Auth/styles';

export function Auth({ title, children }: AuthProps) {
  return (
    <S.Wrapper>
      <S.BannerBlock>
        <S.BannerContent>
          <Logo id="banner" />

          <div>
            <Heading size="huge">All your favorite games in one place</Heading>

            <S.Subtitle>
              <strong>WON</strong> is the best and most complete gaming
              platform.
            </S.Subtitle>
          </div>

          <S.Footer>
            Won Games 2020 &copy; Todos os Direitos Reservados
          </S.Footer>
        </S.BannerContent>
      </S.BannerBlock>

      <S.Content>
        <S.ContentWrapper>
          <Logo color={'black'} size={'large'} id="content" />
          <Heading color={'black'} lineColor={'secondary'} lineLeft>
            {title}
          </Heading>

          {children}
        </S.ContentWrapper>
      </S.Content>
    </S.Wrapper>
  );
}
