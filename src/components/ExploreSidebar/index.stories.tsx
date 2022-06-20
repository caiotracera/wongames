import { Story, Meta } from '@storybook/react/types-6-0';

import { ExploreSidebar } from '@/components/ExploreSidebar';
import { ExploreSidebarProps } from '@/components/ExploreSidebar/types';
import { items as exploreSidebarMock } from '@/components/ExploreSidebar/mock';

export default {
  title: 'ExploreSidebar',
  component: ExploreSidebar,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
  args: {
    items: exploreSidebarMock,
  },
} as Meta;

export const Default: Story<ExploreSidebarProps> = (args) => (
  <div style={{ padding: 16, maxWidth: 320 }}>
    <ExploreSidebar {...args} />
  </div>
);

export const WithInitialValues: Story<ExploreSidebarProps> = (args) => (
  <div style={{ padding: 16, maxWidth: 320 }}>
    <ExploreSidebar
      {...args}
      initialValues={{ windows: true, sort_by: 'low-to-high' }}
    />
  </div>
);
