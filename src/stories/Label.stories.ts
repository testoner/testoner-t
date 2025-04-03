import type { Meta, StoryObj } from '@storybook/vue3';
import { Label } from '../components/ui/label';
import { Input } from '../components/ui/input';

const meta = {
  title: 'UI/Label',
  component: Label,
  tags: ['autodocs'],
  argTypes: {
    class: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { Label, Input },
    setup() {
      return { args };
    },
    template: `
      <div class="grid w-full max-w-sm items-center gap-1.5">
        <Label for="email">Email</Label>
        <Input type="email" id="email" placeholder="Enter your email" />
      </div>
    `,
  }),
};

export const WithDescription: Story = {
  render: (args) => ({
    components: { Label, Input },
    setup() {
      return { args };
    },
    template: `
      <div class="grid w-full max-w-sm items-center gap-1.5">
        <Label for="username">Username</Label>
        <Input type="text" id="username" placeholder="Enter your username" />
        <p class="text-sm text-muted-foreground">
          This is your public display name.
        </p>
      </div>
    `,
  }),
}; 