import { screen } from '@testing-library/react';

import { renderWithTheme } from '@/utils/tests/helpers';

import { TextContent } from '@/components/TextContent';
import { TextContentProps } from '@/components/TextContent/types';
import { item as textContentMock } from '@/components/TextContent/mock';

const props: TextContentProps = {
  ...textContentMock,
  content: '<h1>Content</h1>',
};

describe('<TextContent />', () => {
  it('should render the title and content', () => {
    renderWithTheme(<TextContent {...props} />);

    expect(
      screen.getByRole('heading', { name: /description/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /content/i }),
    ).toBeInTheDocument();
  });

  it('should render the without title', () => {
    renderWithTheme(<TextContent content={props.content} />);

    expect(
      screen.queryByRole('heading', { name: /description/i }),
    ).not.toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /content/i }),
    ).toBeInTheDocument();
  });

  it('should render the different colorsa and background by screen size', () => {
    renderWithTheme(<TextContent {...props} />);

    const wrapper = screen.getByRole('heading', {
      name: /description/i,
    }).parentElement;

    expect(wrapper).toHaveStyle({ color: '#FAFAFA' });
    expect(wrapper).toHaveStyleRule('color', '#030517', {
      media: '(min-width: 768px)',
    });
  });
});
