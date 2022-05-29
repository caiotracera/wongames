import { screen } from '@testing-library/react';

import { renderWithTheme } from '@/utils/tests/helpers';
import { Auth } from '@/templates/Auth';

describe('<Auth />', () => {
  it('should render all components and children', () => {
    renderWithTheme(
      <Auth title={'Auth Title'}>
        <input type="text" />
      </Auth>,
    );

    expect(screen.getAllByRole('img', { name: /won games/i })).toHaveLength(2);

    expect(
      screen.getByRole('heading', {
        name: /all your favorite games in one place/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', {
        name: /won is the best and most complete gaming platform/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /auth title/i }),
    ).toBeInTheDocument();

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});
