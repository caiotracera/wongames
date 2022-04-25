import { BannerProps } from '@/components/Banner/types';
import * as S from '@/components/Banner/styles';
import { Button } from '@/components/Button';

export function Banner({
  img,
  title,
  subtitle,
  buttonLabel,
  buttonLink,
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
    </S.Wrapper>
  );
}
