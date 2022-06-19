import { screen } from '@testing-library/react';

import { renderWithTheme } from '@/utils/tests/helpers';
import { ProfileTemplate } from '@/templates/Profile/index';

describe('<ProfileTemplate />', () => {
  it('should render the <Profile />', () => {
    renderWithTheme(
      <ProfileTemplate>
        <h1>hello world</h1>
      </ProfileTemplate>,
    );
  });
});
