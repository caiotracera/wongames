import { fireEvent, screen } from '@testing-library/react';

import { renderWithTheme } from '@/utils/tests/helpers';
import { GameCard } from '@/components/GameCard';
import { GameCardProps } from '@/components/GameCard/types';

const props: GameCardProps = {
  title: 'Population Zero',
  developer: 'Rockstart Games',
  img: 'https://source.unsplash.com/user/willianjusten/300x140',
  price: 'R$ 235,00',
};

describe('<GameCard />', () => {
  it('should render the correctly', () => {
    const { container } = renderWithTheme(<GameCard {...props} />);

    expect(
      screen.getByRole('heading', { name: props.title }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: props.developer }),
    ).toBeInTheDocument();

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img,
    );

    expect(screen.getByText(props.price)).toBeInTheDocument();

    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render price in label by default', () => {
    renderWithTheme(<GameCard {...props} />);

    expect(screen.getByText(props.price)).not.toHaveStyle({
      'text-decoration': 'line-through',
      color: '#8f8f8f',
    });

    expect(screen.getByText(props.price)).toHaveStyle({
      'background-color': '#3CD3C1',
    });
  });

  it('should render the promotional price', () => {
    renderWithTheme(<GameCard {...props} promotionalPrice={'R$ 200,00'} />);

    const defaultPrice = screen.getByText(props.price);
    const promotionalPrice = screen.getByText('R$ 200,00');

    expect(defaultPrice).toHaveStyle({
      'text-decoration': 'line-through',
      color: '#8f8f8f',
    });

    expect(defaultPrice).not.toHaveStyle({
      'background-color': '#3CD3C1',
    });

    expect(promotionalPrice).not.toHaveStyle({
      'text-decoration': 'line-through',
      color: '#8f8f8f',
    });

    expect(promotionalPrice).toHaveStyle({
      'background-color': '#3CD3C1',
    });
  });

  it('should render a filled favorite icon when favorite is true', () => {
    renderWithTheme(<GameCard {...props} favorite />);

    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument();
  });

  it('should call onFav method when favorite icon is clicked', () => {
    const onFav = jest.fn();

    renderWithTheme(<GameCard {...props} onFav={onFav} />);

    const button = screen.getByLabelText(/add to wishlist/i);

    fireEvent.click(button);

    expect(onFav).toHaveBeenCalled();
  });

  it('should render a Ribbon', () => {
    renderWithTheme(
      <GameCard
        {...props}
        ribbon={'My Ribbon'}
        ribbonColor={'secondary'}
        ribbonSize={'small'}
      />,
    );

    const ribbon = screen.getByText(/my ribbon/i);

    expect(ribbon).toBeInTheDocument();

    expect(ribbon).toHaveStyle({ backgroundColor: '#3cd3c1' });
    expect(ribbon).toHaveStyle({ height: '2.6rem', fontSize: '1.2rem' });
  });
});
