import { screen } from '@testing-library/react';

import { renderWithTheme } from '@/utils/tests/helpers';
import { Home } from '@/templates/Home';
import { HomeProps } from '@/templates/Home/types';

import { items as bannerMock } from '@/components/BannerSlider/mock';
import { items as gamesMock } from '@/components/GameCardSlider/mock';
import { item as highlightMock } from '@/components/Highlight/mock';

const props: HomeProps = {
  banners: bannerMock,
  newGames: [gamesMock[0]],
  mostPopularHighlight: highlightMock,
  mostPopularGames: [gamesMock[0]],
  upcomingGames: [gamesMock[0]],
  upcomingHighlight: highlightMock,
  upcomingMoreGames: [gamesMock[0]],
  freeGames: [gamesMock[0]],
  freeHighlight: highlightMock,
};

describe('<Home />', () => {
  it('should render menu and footer', () => {
    renderWithTheme(<Home {...props} />);

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /Contact/i }),
    ).toBeInTheDocument();

    expect(screen.getAllByRole('img', { name: /won games/i })).toHaveLength(2);

    expect(screen.getByRole('heading', { name: /news/i })).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /most popular/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /upcoming/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /free games/i }),
    ).toBeInTheDocument();

    // banner
    expect(screen.getAllByText(/defy death 1/i)).toHaveLength(1);

    // game cards (5 sectios with 1 cards each = 5 * 1 = 5)
    expect(screen.getAllByText(/population zero/i)).toHaveLength(5);

    // highlights
    expect(screen.getAllByText(/red dead is back/i)).toHaveLength(3);
  });
});
