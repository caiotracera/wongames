import { screen } from '@testing-library/react';

import { renderWithTheme } from '@/utils/tests/helpers';

import { Highlight } from '@/components/Highlight';
import { HighlightsProps } from '@/components/Highlight/types';
import * as S from '@/components/Highlight/styles';

const props: HighlightsProps = {
  title: 'Heading 1',
  subtitle: 'Heading 2',
  buttonLabel: 'Buy now',
  buttonLink: '/rdr2',
  backgroundImage: '/images/red-dead-img.png',
};

describe('<Highlight />', () => {
  it('should render the headings and button', () => {
    renderWithTheme(<Highlight {...props} />);

    expect(
      screen.getByRole('heading', { name: /heading 1/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /heading 2/i }),
    ).toBeInTheDocument();

    expect(screen.getByRole('link', { name: /buy now/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /buy now/i })).toHaveAttribute(
      'href',
      '/rdr2',
    );
  });

  it('should render background image', () => {
    const { container } = renderWithTheme(<Highlight {...props} />);

    expect(container.firstChild).toHaveStyle({
      backgroundImage: props.backgroundImage,
    });
  });

  it('should render float image', () => {
    renderWithTheme(<Highlight {...props} floatImage={'/float-image.png'} />);

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      '/float-image.png',
    );
  });

  it('should render text align right by default', () => {
    const { container } = renderWithTheme(<Highlight {...props} />);

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'floatimage content'",
    );

    expect(container.firstChild).toHaveStyleRule('text-align', 'right', {
      modifier: `${S.Content}`,
    });
  });

  it('should render text align left if prop is passed', () => {
    const { container } = renderWithTheme(
      <Highlight {...props} alignment={'left'} />,
    );

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'content floatimage'",
    );

    expect(container.firstChild).toHaveStyleRule('text-align', 'left', {
      modifier: `${S.Content}`,
    });
  });
});
