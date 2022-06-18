import { screen } from '@testing-library/react';

import { renderWithTheme } from '@/utils/tests/helpers';

import { items as gamesMock } from '@/components/GameCardSlider/mock';
import { items as cartListMock } from '@/components/CartList/mock';
import { items as paymentOptionsMock } from '@/components/PaymentOptions/mock';
import { item as highlightMock } from '@/components/Highlight/mock';

import { CartTemplate } from '@/templates/Cart';
import { CartTemplateProps } from '@/templates/Cart/types';

const props: CartTemplateProps = {
  recommendedGames: gamesMock,
  recommendedHighlight: highlightMock,
  items: cartListMock,
  total: '$ 430.00',
  cards: paymentOptionsMock,
};

jest.mock('@/templates/Base', () => ({
  __esModule: true,
  Base: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>;
  },
}));

jest.mock('@/components/Showcase', () => ({
  __esModule: true,
  Showcase: function Mock() {
    return <div data-testid="Mock Showcase" />;
  },
}));

jest.mock('@/components/CartList', () => ({
  __esModule: true,
  CartList: function Mock() {
    return <div data-testid="Mock CartList" />;
  },
}));

jest.mock('@/components/PaymentOptions', () => ({
  __esModule: true,
  PaymentOptions: function Mock() {
    return <div data-testid="Mock PaymentOptions" />;
  },
}));

jest.mock('@/components/Empty', () => ({
  __esModule: true,
  Empty: function Mock() {
    return <div data-testid="Mock Empty" />;
  },
}));

describe('<Cart />', () => {
  it('should render the <Cart />', () => {
    renderWithTheme(<CartTemplate {...props} />);

    expect(
      screen.getByRole('heading', { name: /my cart/i }),
    ).toBeInTheDocument();

    expect(screen.getByTestId('Mock Base')).toBeInTheDocument();
    expect(screen.getByTestId('Mock CartList')).toBeInTheDocument();
    expect(screen.getByTestId('Mock PaymentOptions')).toBeInTheDocument();
    expect(screen.getByTestId('Mock Showcase')).toBeInTheDocument();
    expect(screen.queryByTestId('Mock Empty')).not.toBeInTheDocument();
  });

  it('should render Empty section if there are no cart items', () => {
    renderWithTheme(<CartTemplate {...props} items={[]} />);

    expect(screen.getByTestId('Mock Empty')).toBeInTheDocument();
  });
});
