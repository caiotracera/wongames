import { Story, Meta } from '@storybook/react/types-6-0';

import { Highlight } from '@/components/Highlight';
import { HighlightsProps } from '@/components/Highlight/types';

import RedDeadImg from '@/assets/images/read-dead-img.png';
import RedDeadFloat from '@/assets/images/red-dead-float.png';

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: "Read Dead it's back",
    subtitle: "Come see John's new adventures",
    buttonLabel: 'Buy now',
    buttonLink: '/rdr2',
    backgroundImage: String(RedDeadImg),
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: Story<HighlightsProps> = (args) => (
  <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
    <Highlight {...args} />
  </div>
);

export const WithFloatImage: Story<HighlightsProps> = (args) => (
  <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
    <Highlight {...args} />
  </div>
);

WithFloatImage.args = {
  floatImage: String(RedDeadFloat),
};
