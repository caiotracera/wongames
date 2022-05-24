import { Story, Meta } from '@storybook/react/types-6-0';

import { GameCardSlider } from '@/components/GameCardSlider';
import { items } from '@/components/GameCardSlider/mock';

import { GameCardProps } from '@/components/GameCard/types';

export default {
  title: 'GameCardSlider',
  component: GameCardSlider,
  args: { items },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta;

export const Default: Story<GameCardProps[]> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <GameCardSlider items={args} {...args} />
  </div>
);
