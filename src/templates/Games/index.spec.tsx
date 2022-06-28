import { screen } from '@testing-library/react';

import { renderWithTheme } from '@/utils/tests/helpers';

import { GamesTemplate } from '@/templates/Games';
import { items as filterItemsMock } from '@/components/ExploreSidebar/mock';
import { items as gamesMock } from '@/components/GameCardSlider/mock';

jest.mock('@/templates/Base', () => ({
  __esModule: true,
  Base: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid={'Mock base'}>{children}</div>;
  },
}));

jest.mock('@/components/ExploreSidebar', () => ({
  __esModule: true,
  ExploreSidebar: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock ExploreSidebar">{children}</div>;
  },
}));

jest.mock('@/components/GameCard', () => ({
  __esModule: true,
  GameCard: function Mock() {
    return <div data-testid="Mock GameCard" />;
  },
}));

jest.mock('@/components/Empty', () => ({
  __esModule: true,
  Empty: function Mock() {
    return <div data-testid="Mock Empty" />;
  },
}));

describe('<GamesTemplate />', () => {
  it('should render the <GamesTemplate />', () => {
    renderWithTheme(
      <GamesTemplate filterItems={filterItemsMock} games={[gamesMock[0]]} />,
    );

    expect(screen.getByTestId('Mock ExploreSidebar')).toBeInTheDocument();
    expect(screen.getByTestId('Mock GameCard')).toBeInTheDocument();

    expect(
      screen.getByRole('button', { name: /show more/i }),
    ).toBeInTheDocument();
  });

  it('should show empty state when games are empty', () => {
    renderWithTheme(<GamesTemplate filterItems={filterItemsMock} games={[]} />);

    expect(screen.getByTestId('Mock Empty')).toBeInTheDocument();
  });

  it('should show empty state when no games are provided', () => {
    renderWithTheme(<GamesTemplate filterItems={filterItemsMock} />);

    expect(screen.getByTestId('Mock Empty')).toBeInTheDocument();
  });
});
