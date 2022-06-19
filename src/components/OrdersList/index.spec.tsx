import { screen } from '@testing-library/react';

import { renderWithTheme } from '@/utils/tests/helpers';

import { OrdersList } from '@/components/OrdersList';
import { items as ordersListMock } from '@/components/OrdersList/mock';

jest.mock('@/components/GameItem', () => ({
  __esModule: true,
  GameItem: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid={'Mock GameItem'}>{children}</div>;
  },
}));

jest.mock('@/components/Empty', () => ({
  __esModule: true,
  Empty: function Mock() {
    return <div data-testid={'Mock Empty'} />;
  },
}));

describe('<OrdersList />', () => {
  it('should render the <OrdersList />', () => {
    renderWithTheme(<OrdersList items={ordersListMock} />);

    expect(
      screen.getByRole('heading', { name: /my orders/i }),
    ).toBeInTheDocument();

    expect(screen.getAllByTestId('Mock GameItem')).toHaveLength(2);
  });

  it('should render the empty component if no item is provided', () => {
    renderWithTheme(<OrdersList />);

    expect(screen.getByTestId('Mock Empty')).toBeInTheDocument();
  });
});
