import { screen } from '@testing-library/react';

import { renderWithTheme } from '@/utils/tests/helpers';
import { Slider } from '@/components/Slider';

describe('<Slider />', () => {
  it('should render the childrens as slider items', () => {
    const { container } = renderWithTheme(
      <Slider settings={{ slidesToShow: 1, infinite: false }}>
        <p>Item 1</p>
        <p>Item 2</p>
      </Slider>,
    );

    expect(
      screen.getByText(/item 1/i).parentElement?.parentElement,
    ).toHaveClass('slick-slide');

    expect(
      screen.getByText(/item 2/i).parentElement?.parentElement,
    ).toHaveClass('slick-slide');

    expect(container.firstChild).toMatchSnapshot();
  });
});
