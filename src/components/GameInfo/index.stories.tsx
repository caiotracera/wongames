import { Story, Meta } from '@storybook/react/types-6-0';

import { GameInfo } from '@/components/GameInfo';
import { item as gameInfoMock } from '@/components/GameInfo/mock';
import { GameInfoProps } from '@/components/GameInfo/types';

export default {
  title: 'GameInfo',
  component: GameInfo,
  args: gameInfoMock,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta;

export const Default: Story<GameInfoProps> = (args) => (
  <div style={{ maxWidth: '144rem', margin: 'auto', padding: '1.5rem' }}>
    <GameInfo {...args} />
  </div>
);
