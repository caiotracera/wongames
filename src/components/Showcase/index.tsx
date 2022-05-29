import { GameCardSlider } from '@/components/GameCardSlider';
import { Heading } from '@/components/Heading';
import { Highlight } from '@/components/Highlight';

import { ShowcaseProps } from '@/components/Showcase/types';
import * as S from '@/components/Showcase/styles';

export function Showcase({
  title,
  highlight,
  games,
  color = 'white',
}: ShowcaseProps) {
  return (
    <S.Wrapper>
      {!!title && (
        <Heading lineLeft lineColor="secondary">
          {title}
        </Heading>
      )}

      {!!highlight && <Highlight {...highlight} />}
      {!!games && <GameCardSlider items={games} color={color} />}
    </S.Wrapper>
  );
}
