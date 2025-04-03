import type { Meta, StoryObj } from '@storybook/vue3';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem, SelectLabel, SelectGroup } from '../components/ui/select';

const meta = {
  title: 'UI/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { Select, SelectTrigger, SelectValue, SelectContent, SelectItem, SelectLabel, SelectGroup },
    setup() {
      return { args };
    },
    template: `
      <Select v-bind="args">
        <SelectTrigger class="w-[180px]">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="orange">Orange</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    `,
  }),
};

export const WithGroups: Story = {
  render: (args) => ({
    components: { Select, SelectTrigger, SelectValue, SelectContent, SelectItem, SelectLabel, SelectGroup },
    setup() {
      return { args };
    },
    template: `
      <Select v-bind="args">
        <SelectTrigger class="w-[180px]">
          <SelectValue placeholder="Select a food" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>Vegetables</SelectLabel>
            <SelectItem value="carrot">Carrot</SelectItem>
            <SelectItem value="potato">Potato</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    `,
  }),
}; 