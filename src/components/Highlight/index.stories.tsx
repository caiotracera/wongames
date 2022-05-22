import { Story, Meta } from '@storybook/react/types-6-0';

import { Highlight } from '@/components/Highlight';
import { item } from '@/components/Highlight/mock';
import { HighlightsProps } from '@/components/Highlight/types';

import RedDeadFloat from '@/assets/images/red-dead-float.png';

export default {
  title: 'Highlight',
  component: Highlight,
  args: item,
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
