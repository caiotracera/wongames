import { screen } from '@testing-library/react';

import { renderWithTheme } from '@/utils/tests/helpers';

import { CartList } from '@/components/CartList';
import { CartListProps } from '@/components/CartList/types';
import { items as cartListMock } from '@/components/CartList/mock';

const props: CartListProps = {
  items: cartListMock,
  total: 'R$ 430,00',
};

describe('<CartList />', () => {
  it('should render the <CartList />', () => {
    const { container } = renderWithTheme(<CartList {...props} />);

    expect(screen.getAllByRole('heading')).toHaveLength(2);
    expect(screen.getByText('R$ 430,00')).toHaveStyle({ color: '#F231A5' });

    expect(container.firstChild).toMatchSnapshot();
  });
});
