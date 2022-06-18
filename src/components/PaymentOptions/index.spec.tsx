import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithTheme } from 'utils/tests/helpers';

import { PaymentOptions } from '@/components/PaymentOptions';
import { items as paymentOptionsMock } from '@/components/PaymentOptions/mock';

describe('<PaymentOptions />', () => {
  it('should render the saved card options and the add new card button', () => {
    renderWithTheme(
      <PaymentOptions cards={paymentOptionsMock} handlePayment={jest.fn} />,
    );

    expect(screen.getByLabelText(/1234/)).toBeInTheDocument();
    expect(screen.getByLabelText(/4326/)).toBeInTheDocument();
    expect(screen.getByText(/add a new credit card/i)).toBeInTheDocument();
  });

  it('should render only the button to add new credit card if no payment option is provided', () => {
    renderWithTheme(<PaymentOptions handlePayment={jest.fn} />);

    expect(screen.queryByLabelText(/1234/)).not.toBeInTheDocument();
    expect(screen.queryByLabelText(/4326/)).not.toBeInTheDocument();
    expect(screen.getByText(/add a new credit card/i)).toBeInTheDocument();
  });

  it('should handle select card when clicking on the label', async () => {
    renderWithTheme(
      <PaymentOptions cards={paymentOptionsMock} handlePayment={jest.fn} />,
    );

    userEvent.click(screen.getByLabelText(/1234/));
    await waitFor(() => {
      expect(screen.getByRole('radio', { name: /1234/ })).toBeChecked();
    });
  });

  it('should not call handlePayment when button is disabled', () => {
    const handlePayment = jest.fn();
    renderWithTheme(
      <PaymentOptions
        cards={paymentOptionsMock}
        handlePayment={handlePayment}
      />,
    );

    userEvent.click(screen.getByRole('button', { name: /buy now/i }));
    expect(handlePayment).not.toHaveBeenCalled();
  });

  it('should call handlePayment when credit card is selected', async () => {
    const handlePayment = jest.fn();
    renderWithTheme(
      <PaymentOptions
        cards={paymentOptionsMock}
        handlePayment={handlePayment}
      />,
    );

    userEvent.click(screen.getByLabelText(/1234/));
    userEvent.click(screen.getByRole('button', { name: /buy now/i }));

    await waitFor(() => {
      expect(handlePayment).toHaveBeenCalled();
    });
  });
});
