import { screen } from '@testing-library/react';

import { renderWithTheme } from '@/utils/tests/helpers';

import { items as paymentOptionsMock } from '@/components/PaymentOptions/mock';

import { CardsList } from '@/components/CardsList';

describe('<CardsList />', () => {
  it('should render the <CardsList />', () => {
    renderWithTheme(<CardsList cards={paymentOptionsMock} />);

    expect(
      screen.getByRole('heading', { name: /my cards/i }),
    ).toBeInTheDocument();

    expect(screen.getByRole('img', { name: /visa/i })).toHaveAttribute(
      'src',
      '/img/cards/visa.png',
    );

    expect(screen.getByRole('img', { name: /mastercard/i })).toHaveAttribute(
      'src',
      '/img/cards/mastercard.png',
    );

    expect(
      screen.getByRole('button', { name: /add a new credit card/i }),
    ).toBeInTheDocument();

    expect(screen.getByText(/1234/)).toBeInTheDocument();
    expect(screen.getByText(/4326/)).toBeInTheDocument();
  });

  it('should only render the option to add a new credit card if no card is provided', () => {
    renderWithTheme(<CardsList />);

    expect(
      screen.queryByRole('img', { name: /visa/i }),
    ).not.toBeInTheDocument();

    expect(
      screen.queryByRole('img', { name: /mastercard/i }),
    ).not.toBeInTheDocument();

    expect(
      screen.getByRole('button', { name: /add a new credit card/i }),
    ).toBeInTheDocument();
  });
});
