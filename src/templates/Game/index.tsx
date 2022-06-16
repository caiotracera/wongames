import { Base } from '@/templates/Base';
import { GameInfo } from '@/components/GameInfo';

import { Gallery } from '@/components/Gallery';
import { TextContent } from '@/components/TextContent';
import { GameDetails } from '@/components/GameDetails';
import { Showcase } from '@/components/Showcase';
import { Divider } from '@/components/Divider';

import { GameTemplateProps } from '@/templates/Game/types';
import * as S from '@/templates/Game/styles';

export function GameTemplate({
  cover,
  gameInfo,
  gallery,
  description,
  details,
  upcomingGames,
  upcomingHighlight,
  recommendedGames,
}: GameTemplateProps) {
  return (
    <Base>
      <S.Cover src={cover} role={'image'} aria-label={'cover'} />

      <S.Wrapper>
        <S.SectionGameInfo>
          <GameInfo {...gameInfo} />
        </S.SectionGameInfo>

        {!!gallery && (
          <S.SectionGallery>
            <Gallery items={gallery} />
          </S.SectionGallery>
        )}

        <S.SectionDescription>
          <TextContent title="Description" content={description} />
        </S.SectionDescription>

        <S.SectionGameDetails>
          <GameDetails {...details} />
          <Divider />
        </S.SectionGameDetails>

        <Showcase
          title="Upcoming"
          games={upcomingGames}
          highlight={upcomingHighlight}
        />

        <Showcase title="You may like these games" games={recommendedGames} />
      </S.Wrapper>
    </Base>
  );
}
