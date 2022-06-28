import { GetServerSideProps } from 'next';

import { items as filterItemsMock } from '@/components/ExploreSidebar/mock';
import { items as gamesMock } from '@/components/GameCardSlider/mock';
import { GamesTemplate } from '@/templates/Games';
import { GamesTemplateProps } from '@/templates/Games/types';

export default function Games(props: GamesTemplateProps) {
  return <GamesTemplate {...props} />;
}

export const getServerSideProps: GetServerSideProps<
  GamesTemplateProps
> = async () => {
  return {
    props: {
      games: gamesMock,
      filterItems: filterItemsMock,
    },
  };
};
