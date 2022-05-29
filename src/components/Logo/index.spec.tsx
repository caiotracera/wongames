import { screen } from '@testing-library/react';

import { renderWithTheme } from '@/utils/tests/helpers';
import { Logo } from '@/components/Logo';

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    renderWithTheme(<Logo />);

    expect(
      screen.getByRole('img', { name: /Won Games/i }).parentElement,
    ).toHaveStyle({
      color: '#FAFAFA',
    });
  });

  it('should render a black label when color is passed', () => {
    renderWithTheme(<Logo color="black" />);

    expect(
      screen.getByRole('img', { name: /Won Games/i }).parentElement,
    ).toHaveStyle({
      color: '#030517',
    });
  });

  it('should render a normal logo when size is default', () => {
    renderWithTheme(<Logo />);

    expect(
      screen.getByRole('img', { name: /Won Games/i }).parentElement,
    ).toHaveStyle({
      width: '11rem',
      height: '3.3rem',
    });
  });

  it('should render a bigger logo', () => {
    renderWithTheme(<Logo size="large" />);

    expect(
      screen.getByRole('img', { name: /Won Games/i }).parentElement,
    ).toHaveStyle({
      width: '20rem',
      height: '5.9rem',
    });
  });

  it('should hide the logo label if hideLabelOnMobile', () => {
    renderWithTheme(<Logo hideLabelOnMobile />);

    expect(
      screen.getByRole('img', { name: /Won Games/i }).parentElement,
    ).toHaveStyleRule('width', '5.8rem', { media: '(max-width: 768px)' });
  });

  it('should render the logo with id passed', () => {
    const { container } = renderWithTheme(<Logo id="myid" />);

    expect(container.querySelector('#paint_linear_myid')).toBeInTheDocument();
  });
});
