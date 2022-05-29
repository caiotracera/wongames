import { HighlightsProps } from '@/components/Highlight/types';
import * as S from '@/components/Highlight/styles';
import Button from '@/components/Button';
import { Content } from '@/components/Highlight/styles';

export function Highlight({
  title,
  subtitle,
  buttonLabel,
  buttonLink,
  backgroundImage,
  floatImage,
  alignment = 'right',
}: HighlightsProps) {
  return (
    <S.Wrapper backgroundImage={backgroundImage} alignment={alignment}>
      {!!floatImage && <S.FloatImage src={floatImage} alt={title} />}
      <Content>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>

        <Button as={'a'} href={buttonLink}>
          {buttonLabel}
        </Button>
      </Content>
    </S.Wrapper>
  );
}
