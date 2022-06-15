import { screen, fireEvent } from '@testing-library/react';

import { renderWithTheme } from '@/utils/tests/helpers';

import { Gallery } from '@/components/Gallery';
import { GalleryProps } from '@/components/Gallery/types';
import { items as galleryMock } from '@/components/Gallery/mock';

const props: GalleryProps = {
  items: galleryMock,
};

describe('<Gallery />', () => {
  it('should render the thumbnails as buttons', () => {
    renderWithTheme(<Gallery items={props.items.slice(0, 2)} />);

    expect(
      screen.getByRole('button', { name: /Thumb - Gallery Image 1/i }),
    ).toHaveAttribute('src', props.items[0].src);

    expect(
      screen.getByRole('button', { name: /Thumb - Gallery Image 2/i }),
    ).toHaveAttribute('src', props.items[1].src);
  });

  it('should handle open modal', () => {
    renderWithTheme(<Gallery items={props.items.slice(0, 2)} />);

    const modal = screen.getByLabelText('modal');

    expect(modal.getAttribute('aria-hidden')).toBe('true');
    expect(modal).toHaveStyle({ opacity: 0, pointerEvents: 'none' });

    fireEvent.click(
      screen.getByRole('button', { name: /Thumb - Gallery Image 1/i }),
    );
    expect(modal.getAttribute('aria-hidden')).toBe('false');
    expect(modal).toHaveStyle({ opacity: 1 });
  });

  it('should handle close modal when overlay or button clicked', () => {
    renderWithTheme(<Gallery items={props.items.slice(0, 2)} />);

    const modal = screen.getByLabelText('modal');

    fireEvent.click(
      screen.getByRole('button', { name: /Thumb - Gallery Image 1/i }),
    );

    expect(modal.getAttribute('aria-hidden')).toBe('false');
    expect(modal).toHaveStyle({ opacity: 1 });

    fireEvent.click(screen.getByRole('button', { name: /close modal/i }));

    expect(modal.getAttribute('aria-hidden')).toBe('true');
    expect(modal).toHaveStyle({ opacity: 0 });
  });

  it('should handle close modal when ESC is pressed', () => {
    const { container } = renderWithTheme(
      <Gallery items={props.items.slice(0, 2)} />,
    );

    const modal = screen.getByLabelText('modal');

    fireEvent.click(
      screen.getByRole('button', { name: /Thumb - Gallery Image 1/i }),
    );

    expect(modal.getAttribute('aria-hidden')).toBe('false');
    expect(modal).toHaveStyle({ opacity: 1 });

    fireEvent.keyUp(container, { key: 'Escape' });

    expect(modal.getAttribute('aria-hidden')).toBe('true');
    expect(modal).toHaveStyle({ opacity: 0 });
  });

  it('should open modal with selected image', async () => {
    renderWithTheme(<Gallery items={props.items.slice(0, 2)} />);

    fireEvent.click(
      screen.getByRole('button', { name: /Thumb - Gallery Image 2/i }),
    );

    const image = await screen.findByRole('img', { name: /Gallery Image 2/i });
    expect(image.parentElement?.parentElement).toHaveClass('slick-active');
  });
});
