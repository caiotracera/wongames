import { KeyboardArrowDown } from '@styled-icons/material-outlined';

import { ExploreSidebar } from '@/components/ExploreSidebar';
import { Grid } from '@/components/Grid';
import { Base } from '@/templates/Base';

import { GamesTemplateProps } from '@/templates/Games/types';
import * as S from '@/templates/Games/styles';
import { GameCard } from '@/components/GameCard';
import { Empty } from '@/components/Empty';

export function GamesTemplate({ games = [], filterItems }: GamesTemplateProps) {
  return (
    <Base>
      <S.Main>
        <ExploreSidebar
          items={filterItems}
          onFilter={() => console.log('filter')}
        />
        {games.length ? (
          <section>
            <Grid>
              {games.map((game) => (
                <GameCard key={game.title} {...game} />
              ))}
            </Grid>

            <S.ShowMore
              role={'button'}
              onClick={() => console.log('show more')}
            >
              <p>Show more</p>
              <KeyboardArrowDown size={35} />
            </S.ShowMore>
          </section>
        ) : (
          <Empty
            title={'Nothing to see here'}
            description={'No games were found with these filters'}
          />
        )}
      </S.Main>
    </Base>
  );
}
