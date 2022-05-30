import { Story, Meta } from '@storybook/react/types-6-0';

import { item as highlightMock } from '@/components/Highlight/mock';
import { items as gamesMock } from '@/components/GameCardSlider/mock';

import { Showcase } from '@/components/Showcase';
import { ShowcaseProps } from '@/components/Showcase/types';

export default {
  title: 'Showcase',
  component: Showcase,
  decorators: [
    (Story) => (
      <div style={{ margin: '0 auto' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta;

export const Default: Story<ShowcaseProps> = (args) => <Showcase {...args} />;

Default.args = {
  title: 'Most Popular',
  highlight: highlightMock,
  games: gamesMock,
};

export const WithoutTitle: Story<ShowcaseProps> = (args) => (
  <Showcase {...args} />
);

WithoutTitle.args = {
  highlight: highlightMock,
  games: gamesMock,
};

export const WithoutHighlight: Story<ShowcaseProps> = (args) => (
  <Showcase {...args} />
);

WithoutHighlight.args = {
  title: 'Most Popular',
  games: gamesMock,
};

export const WithoutGames: Story<ShowcaseProps> = (args) => (
  <Showcase {...args} />
);

WithoutGames.args = {
  title: 'Most Popular',
  highlight: highlightMock,
};
