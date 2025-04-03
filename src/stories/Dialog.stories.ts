import type { Meta, StoryObj } from '@storybook/vue3';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '../components/ui/dialog';

const meta = {
  title: 'UI/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter },
    setup() {
      return { args };
    },
    template: `
      <Dialog v-bind="args">
        <DialogTrigger>Open Dialog</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <button>Cancel</button>
            <button>Continue</button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    `,
  }),
};

export const Simple: Story = {
  render: (args) => ({
    components: { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle },
    setup() {
      return { args };
    },
    template: `
      <Dialog v-bind="args">
        <DialogTrigger>Open Simple Dialog</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Simple Dialog</DialogTitle>
          </DialogHeader>
          <p>This is a simple dialog with just a title.</p>
        </DialogContent>
      </Dialog>
    `,
  }),
}; 