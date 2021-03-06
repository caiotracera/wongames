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

jest.mock('@/components/Showcase', () => {
  return {
    __esModule: true,
    Showcase: function Mock() {
      return <div data-testid="mock showcase" />;
    },
  };
});

jest.mock('@/components/BannerSlider', () => {
  return {
    __esModule: true,
    BannerSlider: function Mock() {
      return <div data-testid="mock BannerSlider" />;
    },
  };
});

describe('<Home />', () => {
  it('should render banner and showcases', () => {
    renderWithTheme(<Home {...props} />);

    expect(screen.getByTestId('mock BannerSlider')).toBeInTheDocument();
    expect(screen.getAllByTestId('mock showcase')).toHaveLength(5);
  });
});
