import { screen } from '@testing-library/react';

import { renderWithTheme } from '@/utils/tests/helpers';
import { ProfileTemplate } from '@/templates/Profile/index';

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({ asPath: '/profile/me' })),
}));

jest.mock('@/templates/Base', () => ({
  __esModule: true,
  Base: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid={'Mock Base'}>{children}</div>;
  },
}));

jest.mock('@/components/Heading', () => ({
  __esModule: true,
  Heading: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid={'Mock Heading'}>{children}</div>;
  },
}));

jest.mock('@/components/ProfileMenu', () => ({
  __esModule: true,
  ProfileMenu: function Mock() {
    return <div data-testid={'Mock ProfileMenu'} />;
  },
}));

describe('<ProfileTemplate />', () => {
  it('should render the <ProfileTemplate />', () => {
    renderWithTheme(<ProfileTemplate>Lorem Ipsum</ProfileTemplate>);

    expect(screen.getByText(/lorem ipsum/i)).toBeInTheDocument();
    expect(screen.getByText(/my profile/i)).toBeInTheDocument();
    expect(screen.getByTestId(/mock profilemenu/i)).toBeInTheDocument();
  });
});
