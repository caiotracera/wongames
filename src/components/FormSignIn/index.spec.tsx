import { screen } from '@testing-library/react';

import { renderWithTheme } from '@/utils/tests/helpers';
import { FormSignIn } from '@/components/FormSignIn';

describe('<FormSignIn />', () => {
  it('should render the form', () => {
    const { container } = renderWithTheme(<FormSignIn />);

    expect(screen.getByPlaceholderText(/e-mail/i)).toBeInTheDocument();

    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();

    expect(
      screen.getByRole('button', { name: /sign in/i }),
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the forgot password link', () => {
    renderWithTheme(<FormSignIn />);

    expect(
      screen.getByRole('link', { name: /forgot your password/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('link', { name: /forgot your password/i }),
    ).toHaveAttribute('href', '');
  });

  it('should render the text and link to sign up', () => {
    renderWithTheme(<FormSignIn />);

    expect(screen.getByText(/don't have and account?/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /sign up/i })).toBeInTheDocument();

    expect(screen.getByRole('link', { name: /sign up/i })).toHaveAttribute(
      'href',
      '/sign-up',
    );
  });
});
