import { screen } from '@testing-library/react';

import { renderWithTheme } from '@/utils/tests/helpers';
import { Base } from '@/templates/Base';

jest.mock('@/components/Menu', () => {
  return {
    __esModule: true,
    Menu: function Mock() {
      return <div data-testid="mock menu" />;
    },
  };
});

jest.mock('@/components/Footer', () => {
  return {
    __esModule: true,
    Footer: function Mock() {
      return <div data-testid="mock footer" />;
    },
  };
});

describe('<Base />', () => {
  it('should render the menu, footer and children', () => {
    renderWithTheme(
      <Base>
        <h1>heading</h1>
      </Base>,
    );

    expect(screen.getByTestId('mock menu')).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'heading' }),
    ).toBeInTheDocument();
    expect(screen.getByTestId('mock footer')).toBeInTheDocument();
  });
});
