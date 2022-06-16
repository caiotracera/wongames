import { Story, Meta } from '@storybook/react/types-6-0';

import { Empty } from '@/components/Empty';
import { EmptyProps } from '@/components/Empty/types';

export default {
  title: 'Empty',
  component: Empty,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
  args: {
    title: 'Your wishlist is empty',
    description: 'Games added to your wishlist will appear here',
    hasLink: true,
  },
} as Meta;

export const Default: Story<EmptyProps> = (args) => <Empty {...args} />;
