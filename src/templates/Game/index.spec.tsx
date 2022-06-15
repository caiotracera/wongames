import { screen } from '@testing-library/react';

import { renderWithTheme } from '@/utils/tests/helpers';
import { GameTemplate } from '@/templates/Game/index';

import { items as galleryMock } from '@/components/Gallery/mock';
import { item as gameInfoMock } from '@/components/GameInfo/mock';
import { item as gameDetailsMock } from '@/components/GameDetails/mock';
import { items as gamesMock } from '@/components/GameCardSlider/mock';
import { item as highlightMock } from '@/components/Highlight/mock';

import { GameTemplateProps } from '@/templates/Game/types';

const props: GameTemplateProps = {
  cover: 'bg-img.jpg',
  gameInfo: gameInfoMock,
  gallery: galleryMock,
  description: '<h1>Custom HTML</h1>',
  details: gameDetailsMock,
  upcomingGames: gamesMock,
  upcomingHighlight: highlightMock,
  recommendedGames: gamesMock,
};

jest.mock('@/components/Gallery', () => ({
  __esModule: true,
  Gallery: function Mock() {
    return <div data-testid="Mock Gallery" />;
  },
}));

jest.mock('@/components/GameDetails', () => ({
  __esModule: true,
  GameDetails: function Mock() {
    return <div data-testid="Mock GameDetails" />;
  },
}));

jest.mock('@/components/GameInfo', () => ({
  __esModule: true,
  GameInfo: function Mock() {
    return <div data-testid="Mock GameInfo" />;
  },
}));

jest.mock('@/components/Showcase', () => ({
  __esModule: true,
  Showcase: function Mock() {
    return <div data-testid="Mock Showcase" />;
  },
}));

jest.mock('@/components/Menu', () => ({
  __esModule: true,
  Menu: function Mock() {
    return <div data-testid="Mock Menu" />;
  },
}));

describe('<Game />', () => {
  it('should render the template with components', () => {
    renderWithTheme(<GameTemplate {...props} />);

    expect(screen.getByTestId('Mock Gallery')).toBeInTheDocument();
    expect(screen.getByTestId('Mock GameDetails')).toBeInTheDocument();
    expect(screen.getByTestId('Mock GameInfo')).toBeInTheDocument();
    expect(screen.getAllByTestId('Mock Showcase')).toHaveLength(2);
    expect(
      screen.getByRole('heading', { name: /custom html/i }),
    ).toBeInTheDocument();
  });

  it('should not render the gallery if not images', () => {
    renderWithTheme(<GameTemplate {...props} gallery={undefined} />);

    expect(screen.queryByTestId('Mock Gallery')).not.toBeInTheDocument();
  });

  it('should not render the gallery on mobile', () => {
    renderWithTheme(<GameTemplate {...props} />);

    expect(screen.getByTestId('Mock Gallery').parentElement).toHaveStyle({
      display: 'none',
    });

    expect(screen.getByTestId('Mock Gallery').parentElement).toHaveStyleRule(
      'display',
      'block',
      {
        media: '(min-width: 768px)',
      },
    );
  });

  it('should render the cover image', () => {
    renderWithTheme(<GameTemplate {...props} />);

    const cover = screen.getByRole('image', { name: /cover/i });

    expect(cover).toHaveStyle({
      backgroundImage: 'url(bg-img.jpg)',
      height: '39.5rem',
    });

    expect(cover).toHaveStyleRule('height', '70rem', {
      media: '(min-width: 768px)',
    });

    expect(cover).toHaveStyleRule(
      'clip-path',
      'polygon(0 0,100% 0,100% 100%,0 85%)',
      {
        media: '(min-width: 768px)',
      },
    );
  });
});
