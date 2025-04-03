import type { Meta, StoryObj } from '@storybook/vue3';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../components/ui/card';

const meta = {
  title: 'UI/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    class: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter },
    setup() {
      return { args };
    },
    template: `
      <Card v-bind="args">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    `,
  }),
};

export const Simple: Story = {
  render: (args) => ({
    components: { Card, CardContent },
    setup() {
      return { args };
    },
    template: `
      <Card v-bind="args">
        <CardContent>
          <p>Simple card with just content</p>
        </CardContent>
      </Card>
    `,
  }),
}; 