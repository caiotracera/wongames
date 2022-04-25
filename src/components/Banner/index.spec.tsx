import { screen } from '@testing-library/react';

import { renderWithTheme } from '@/utils/tests/helpers';
import { Banner } from '@/components/Banner';

const args = {
  img: 'https://source.unsplash.com/user/willianjusten/1042x580',
  title: 'Defy death',
  subtitle: '<p>Play the new <strong>CrashLands</strong> season</p>',
  buttonLabel: 'Buy now',
  buttonLink: '/games/defy-death',
};

describe('<Banner />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Banner {...args} />);

    expect(
      screen.getByRole('heading', { name: /defy death/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /play the new crashlands season/i }),
    ).toBeInTheDocument();

    expect(screen.getByRole('img', { name: /defy death/i })).toHaveAttribute(
      'src',
      args.img,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
