import { BannerProps } from '@/components/Banner/types';
import { Button } from '@/components/Button';
import { Ribbon } from '@/components/Ribbon';

import * as S from '@/components/Banner/styles';

export function Banner({
  img,
  title,
  subtitle,
  buttonLabel,
  buttonLink,
  ribbon,
  ribbonSize = 'normal',
  ribbonColor = 'primary',
}: BannerProps) {
  return (
    <S.Wrapper>
      <S.Image src={img} role={'img'} aria-label={title} />

      <S.Caption>
        <S.Title>{title}</S.Title>
        <S.Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />

        <Button as="a" href={buttonLink} size={'large'}>
          {buttonLabel}
        </Button>
      </S.Caption>

      {!!ribbon && (
        <Ribbon size={ribbonSize} color={ribbonColor}>
          {ribbon}
        </Ribbon>
      )}
    </S.Wrapper>
  );
}
