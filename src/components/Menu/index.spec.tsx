import { fireEvent, screen } from '@testing-library/react';

import { renderWithTheme } from '@/utils/tests/helpers';
import { Menu } from '@/components/Menu';

describe('<Menu />', () => {
  it('should render the menu', () => {
    renderWithTheme(<Menu />);

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/open shopping cart/i)).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /won games/i })).toBeInTheDocument();
  });

  it('should handle the open/close mobile menu', () => {
    renderWithTheme(<Menu />);

    // select the menu
    const menuMobileElement = screen.getByRole('navigation', { hidden: true });

    // verify the menu is closed
    expect(menuMobileElement.getAttribute('aria-hidden')).toBe('true');
    expect(menuMobileElement).toHaveStyle({ opacity: 0 });

    // open the menu
    fireEvent.click(screen.getByLabelText(/open menu/i));

    // verify the menu is open
    expect(menuMobileElement.getAttribute('aria-hidden')).toBe('false');
    expect(menuMobileElement).toHaveStyle({ opacity: 1 });

    // close the menu
    fireEvent.click(screen.getByLabelText(/close menu/i));

    // verify the menu is closed
    expect(menuMobileElement.getAttribute('aria-hidden')).toBe('true');
    expect(menuMobileElement).toHaveStyle({ opacity: 0 });
  });

  it('should show register box when logged out', () => {
    renderWithTheme(<Menu />);

    expect(screen.getByText(/log in now/i)).toBeInTheDocument();
    expect(screen.getByText(/sign up/i)).toBeInTheDocument();
    expect(screen.queryByText(/my account/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/wishlist/i)).not.toBeInTheDocument();
  });

  it('should show my account and wishlist when logged in', () => {
    renderWithTheme(<Menu username="Caio" />);

    expect(screen.queryByText(/log in now/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/sign up/i)).not.toBeInTheDocument();
    expect(screen.getByText(/my account/i)).toBeInTheDocument();
    expect(screen.getByText(/wishlist/i)).toBeInTheDocument();
  });
});
