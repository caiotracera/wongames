import { Story, Meta } from '@storybook/react/types-6-0';

import { TextContent } from '@/components/TextContent';
import { TextContentProps } from '@/components/TextContent/types';
import { item as textContentMock } from '@/components/TextContent/mock';

export default {
  title: 'TextContent',
  component: TextContent,
  args: textContentMock,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta;

export const Default: Story<TextContentProps> = (args) => (
  <TextContent {...args} />
);
