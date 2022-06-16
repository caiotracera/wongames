import { screen } from '@testing-library/react';

import { renderWithTheme } from '@/utils/tests/helpers';

import { items as gamesMock } from '@/components/GameCardSlider/mock';
import { item as highlightMock } from '@/components/Highlight/mock';

import { WishlistTemplate } from '@/templates/Wishlist';
import { WishlistProps } from '@/templates/Wishlist/types';

const props: WishlistProps = {
  games: gamesMock,
  recommendedHighlight: highlightMock,
  recommendedGames: gamesMock,
};

jest.mock('@/components/Showcase', () => ({
  __esModule: true,
  Showcase: function Mock() {
    return <div data-testid="Mock Showcase" />;
  },
}));

describe('<Wishlist />', () => {
  it('should render the <Wishlist />', () => {
    renderWithTheme(<WishlistTemplate {...props} />);

    expect(
      screen.getByRole('heading', { name: /wishlist/i }),
    ).toBeInTheDocument();

    expect(screen.getByTestId('Mock Showcase')).toBeInTheDocument();

    expect(screen.getAllByText(/population zero/i)).toHaveLength(6);
  });

  it('should render the empty component when there are no games wishlisted', () => {
    renderWithTheme(<WishlistTemplate {...props} games={undefined} />);

    expect(screen.queryByText(/population zero/i)).not.toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /your wishlist is empty/i }),
    ).toBeInTheDocument();
  });
});
