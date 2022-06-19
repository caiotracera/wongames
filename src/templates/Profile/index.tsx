import { useRouter } from 'next/router';

import { Base } from '@/templates/Base';
import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { ProfileMenu } from '@/components/ProfileMenu';

import { ProfileTemplateProps } from '@/templates/Profile/types';
import * as S from '@/templates/Profile/styles';

export function ProfileTemplate({ children }: ProfileTemplateProps) {
  const { asPath } = useRouter();

  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor={'secondary'}>
          My profile
        </Heading>

        <S.Main>
          <ProfileMenu activeLink={asPath} />

          <S.Content>{children}</S.Content>
        </S.Main>
      </Container>
    </Base>
  );
}
