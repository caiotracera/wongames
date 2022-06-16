import { screen } from '@testing-library/react';

import { renderWithTheme } from '@/utils/tests/helpers';

import { Empty } from '@/components/Empty';
import { EmptyProps } from '@/components/Empty/types';

const props: EmptyProps = {
  title: 'A simple title',
  description: 'A simple description',
};

describe('<Empty />', () => {
  it('should render the <Empty />', () => {
    const { container } = renderWithTheme(<Empty {...props} />);

    expect(
      screen.getByRole('image', {
        name: /a gamer in a couch playing videogame/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /a simple title/i }),
    ).toBeInTheDocument();

    expect(screen.getByText(/a simple description/i)).toBeInTheDocument();

    expect(
      screen.queryByRole('link', { name: /go back to store/i }),
    ).not.toBeInTheDocument();

    expect(container.parentElement).toMatchSnapshot();
  });

  it('should render the component with link', () => {
    renderWithTheme(<Empty {...props} hasLink />);

    expect(
      screen.getByRole('link', { name: /go back to store/i }),
    ).toHaveAttribute('href', '/');
  });
});
