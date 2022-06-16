import { GetStaticProps } from 'next';

import { items as gamesMock } from '@/components/GameCardSlider/mock';
import { item as highlightMock } from '@/components/Highlight/mock';

import { WishlistTemplate } from '@/templates/Wishlist';
import { WishlistProps } from '@/templates/Wishlist/types';

export default function Wishlist(props: WishlistProps) {
  return <WishlistTemplate {...props} />;
}

export const getStaticProps: GetStaticProps<WishlistProps> = async () => {
  return {
    props: {
      games: gamesMock,
      recommendedGames: gamesMock.slice(0, 5),
      recommendedHighlight: highlightMock,
    },
  };
};
