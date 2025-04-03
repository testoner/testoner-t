import type { Meta, StoryObj } from '@storybook/vue3';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/tabs';

const meta = {
  title: 'UI/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    defaultValue: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { Tabs, TabsList, TabsTrigger, TabsContent },
    setup() {
      return { args };
    },
    template: `
      <Tabs v-bind="args" defaultValue="account">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <p>Account settings and preferences.</p>
        </TabsContent>
        <TabsContent value="password">
          <p>Change your password here.</p>
        </TabsContent>
      </Tabs>
    `,
  }),
};

export const WithIcons: Story = {
  render: (args) => ({
    components: { Tabs, TabsList, TabsTrigger, TabsContent },
    setup() {
      return { args };
    },
    template: `
      <Tabs v-bind="args" defaultValue="home">
        <TabsList>
          <TabsTrigger value="home">🏠 Home</TabsTrigger>
          <TabsTrigger value="profile">👤 Profile</TabsTrigger>
          <TabsTrigger value="settings">⚙️ Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="home">
          <p>Welcome to your home page!</p>
        </TabsContent>
        <TabsContent value="profile">
          <p>Your profile information.</p>
        </TabsContent>
        <TabsContent value="settings">
          <p>Manage your settings here.</p>
        </TabsContent>
      </Tabs>
    `,
  }),
}; 