import { renderWithTheme } from '@/utils/tests/helpers';
import { Divider } from '@/components/Divider';

describe('<Divider />', () => {
  it('should render the <Divider />', () => {
    const { container } = renderWithTheme(<Divider />);

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        margin: 5.6rem auto 3.2rem;
        height: 0.1rem;
        background: rgba(181,181,181,0.3);
        border: 0;
      }

      @media (min-width:768px) {
        .c0 {
          margin: calc(5.6rem * 2) auto 5.6rem;
        }
      }

      <hr
        class="c0"
      />
    `);
  });
});
