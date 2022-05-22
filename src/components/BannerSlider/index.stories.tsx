import { Story, Meta } from '@storybook/react/types-6-0';

import { BannerSlider } from '@/components/BannerSlider';
import { BannerSliderProps } from '@/components/BannerSlider/types';
import { items } from '@/components/BannerSlider/mock';

export default {
  title: 'BannerSlider',
  component: BannerSlider,
  args: { items },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta;

export const Default: Story<BannerSliderProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <BannerSlider {...args} />
  </div>
);
