import { Story, Meta } from '@storybook/react/types-6-0';

import { Gallery } from '@/components/Gallery';
import { GalleryProps } from '@/components/Gallery/types';
import { items as galleryMock } from '@/components/Gallery/mock';

export default {
  title: 'Gallery',
  component: Gallery,
  args: { items: galleryMock },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta;

export const Default: Story<GalleryProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <Gallery {...args} />
  </div>
);
