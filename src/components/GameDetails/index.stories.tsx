import { Story, Meta } from '@storybook/react/types-6-0';

import { GameDetails } from '@/components/GameDetails';
import { GameDetailsProps } from '@/components/GameDetails/types';
import { item as gameDetailsMock } from '@/components/GameDetails/mock';

export default {
  title: 'Game/GameDetails',
  component: GameDetails,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
  args: gameDetailsMock,
  argTypes: {
    platforms: {
      control: {
        type: 'inline-check',
        options: ['windows', 'linux', 'mac'],
      },
    },
    genres: {
      control: {
        type: 'inline-check',
        options: ['Role-playing', 'Action', 'Narrative'],
      },
    },
  },
} as Meta;

export const Default: Story<GameDetailsProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <GameDetails {...args} />
  </div>
);
