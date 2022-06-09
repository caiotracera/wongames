import { screen } from '@testing-library/react';

import { renderWithTheme } from '@/utils/tests/helpers';

import { GameInfo } from '@/components/GameInfo';
import { GameInfoProps } from '@/components/GameInfo/types';

const props: GameInfoProps = {
  title: 'My Game Title',
  description: 'My Game Description',
  price: '210.00',
};

describe('<GameInfo />', () => {
  it('should render the title, description and price', () => {
    renderWithTheme(<GameInfo {...props} />);

    expect(
      screen.getByRole('heading', { name: /my game title/i }),
    ).toBeInTheDocument();

    expect(screen.getByText(/my game description/i)).toBeInTheDocument();

    expect(screen.getByText(/\$210.00/i)).toBeInTheDocument();
  });

  it('should render buttons to add to cart and wishlist', () => {
    renderWithTheme(<GameInfo {...props} />);

    expect(
      screen.getByRole('button', { name: /add to cart/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('button', { name: /wishlist/i }),
    ).toBeInTheDocument();
  });
});
