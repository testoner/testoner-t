import type { Meta, StoryObj } from '@storybook/vue3';
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter } from '../components/ui/drawer';

const meta = {
  title: 'UI/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter },
    setup() {
      return { args };
    },
    template: `
      <Drawer v-bind="args">
        <DrawerTrigger>Open Drawer</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Drawer Title</DrawerTitle>
            <DrawerDescription>
              This is a drawer description. You can put any content here.
            </DrawerDescription>
          </DrawerHeader>
          <div class="p-4">
            <p>Drawer content goes here.</p>
          </div>
          <DrawerFooter>
            <button>Save changes</button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    `,
  }),
};

export const Simple: Story = {
  render: (args) => ({
    components: { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle },
    setup() {
      return { args };
    },
    template: `
      <Drawer v-bind="args">
        <DrawerTrigger>Open Simple Drawer</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Simple Drawer</DrawerTitle>
          </DrawerHeader>
          <div class="p-4">
            <p>This is a simple drawer with just a title and content.</p>
          </div>
        </DrawerContent>
      </Drawer>
    `,
  }),
}; 