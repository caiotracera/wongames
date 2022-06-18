import { Story, Meta } from '@storybook/react/types-6-0';

import { ProfileMenu } from '@/components/ProfileMenu';
import { ProfileMenuProps } from '@/components/ProfileMenu/types';

export default {
  title: 'Profile/Menu',
  component: ProfileMenu,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta;

export const Default: Story<ProfileMenuProps> = (args) => (
  <ProfileMenu {...args} />
);
