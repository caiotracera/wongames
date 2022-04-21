import { screen } from '@testing-library/react';
import { AddShoppingCart } from '@styled-icons/material-outlined';

import { renderWithTheme } from '@/utils/tests/helpers';
import { Button } from '@/components/Button';

describe('<Button />', () => {
  it('should render the medium size by default', () => {
    const { container } = renderWithTheme(<Button>buy now</Button>);

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      height: '4rem',
      'font-size': '1.4rem',
      padding: '0.8rem 3.2rem',
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the small size', () => {
    renderWithTheme(<Button size="small">buy now</Button>);

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      height: '3rem',
      'font-size': '1.2rem',
      padding: '0.8rem',
    });
  });

  it('should render the large size', () => {
    renderWithTheme(<Button size="large">buy now</Button>);

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      height: '5rem',
      'font-size': '1.6rem',
      padding: '0.8rem 4.8rem',
    });
  });

  it('should render a fullwidth button', () => {
    renderWithTheme(<Button fullWidth>buy now</Button>);

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      width: '100%',
    });
  });

  it('should render a button with an icon', () => {
    renderWithTheme(
      <Button icon={<AddShoppingCart data-testid="icon" />}>buy now</Button>,
    );

    expect(
      screen.getByRole('button', { name: /buy now/i }),
    ).toBeInTheDocument();

    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });
});
