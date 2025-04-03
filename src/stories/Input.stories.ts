import type { Meta, StoryObj } from '@storybook/vue3';
import { Input } from '../components/ui/input';

const meta = {
  title: 'UI/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'text',
    },
    defaultValue: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { Input },
    setup() {
      return { args };
    },
    template: '<Input v-bind="args" placeholder="Enter text..." />',
  }),
};

export const WithDefaultValue: Story = {
  render: (args) => ({
    components: { Input },
    setup() {
      return { args };
    },
    template: '<Input v-bind="args" defaultValue="Default text" placeholder="Enter text..." />',
  }),
};

export const WithModelValue: Story = {
  render: (args) => ({
    components: { Input },
    setup() {
      return { args, modelValue: 'Controlled text' };
    },
    template: '<Input v-bind="args" v-model="modelValue" placeholder="Enter text..." />',
  }),
};

export const WithLabel: Story = {
  render: (args) => ({
    components: { Input },
    setup() {
      return { args };
    },
    template: `
      <div class="grid w-full max-w-sm items-center gap-1.5">
        <label for="email" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email</label>
        <Input v-bind="args" type="email" id="email" placeholder="Enter your email" />
      </div>
    `,
  }),
};

export const Disabled: Story = {
  render: (args) => ({
    components: { Input },
    setup() {
      return { args };
    },
    template: '<Input v-bind="args" disabled placeholder="Disabled input" />',
  }),
}; 