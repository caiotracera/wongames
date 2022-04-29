import { Story, Meta } from '@storybook/react/types-6-0';

import { GameCard } from '@/components/GameCard';
import { GameCardProps } from '@/components/GameCard/types';

export default {
  title: 'GameCard',
  component: GameCard,
  args: {
    title: 'Population Zero',
    developer: 'Rockstart Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 200,00',
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
  argTypes: {
    onFav: { action: 'clicked' },
    ribbon: {
      type: 'string',
    },
  },
} as Meta;

export const Default: Story<GameCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
);

export const WithRibbon: Story<GameCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
);

WithRibbon.args = {
  ribbon: '20% OFF',
  ribbonSize: 'small',
  ribbonColor: 'secondary',
};
