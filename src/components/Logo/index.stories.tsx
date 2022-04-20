import { Story, Meta } from '@storybook/react/types-6-0';

import { Logo } from '@/components/Logo';
import { LogoProps } from '@/components/Logo/types';

export default {
  title: 'Logo',
  component: Logo,
} as Meta;

export const Default: Story<LogoProps> = (args) => <Logo {...args} />;
