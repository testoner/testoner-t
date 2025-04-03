import type { Meta, StoryObj } from '@storybook/vue3';
import { Toast, ToastProvider, ToastViewport, ToastTitle, ToastDescription, ToastAction, ToastClose } from '../components/ui/toast';

const meta = {
  title: 'UI/Toast',
  component: Toast,
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { Toast, ToastProvider, ToastViewport, ToastTitle, ToastDescription, ToastAction, ToastClose },
    setup() {
      return { args };
    },
    template: `
      <ToastProvider>
        <Toast v-bind="args">
          <div class="grid gap-1">
            <ToastTitle>Scheduled: Catch up</ToastTitle>
            <ToastDescription>
              Friday, February 10, 2023 at 5:57 PM
            </ToastDescription>
          </div>
          <ToastAction altText="Try again">Try again</ToastAction>
          <ToastClose />
        </Toast>
        <ToastViewport />
      </ToastProvider>
    `,
  }),
};

export const Success: Story = {
  render: (args) => ({
    components: { Toast, ToastProvider, ToastViewport, ToastTitle, ToastDescription, ToastClose },
    setup() {
      return { args };
    },
    template: `
      <ToastProvider>
        <Toast v-bind="args" class="bg-green-500">
          <div class="grid gap-1">
            <ToastTitle>Success!</ToastTitle>
            <ToastDescription>
              Your changes have been saved.
            </ToastDescription>
          </div>
          <ToastClose />
        </Toast>
        <ToastViewport />
      </ToastProvider>
    `,
  }),
}; 