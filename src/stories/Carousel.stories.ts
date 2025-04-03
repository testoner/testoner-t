import type { Meta, StoryObj } from '@storybook/vue3';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../components/ui/carousel';

const meta = {
  title: 'UI/Carousel',
  component: Carousel,
  tags: ['autodocs'],
  argTypes: {
    opts: {
      control: 'object',
    },
  },
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious },
    setup() {
      return { args };
    },
    template: `
      <div class="flex items-center justify-center p-4">
        <Carousel v-bind="args" class="w-full max-w-xs">
          <CarouselContent>
            <CarouselItem>
              <div class="p-1">
                <div class="flex aspect-square items-center justify-center p-6">
                  <span class="text-3xl font-semibold">1</span>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div class="p-1">
                <div class="flex aspect-square items-center justify-center p-6">
                  <span class="text-3xl font-semibold">2</span>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div class="p-1">
                <div class="flex aspect-square items-center justify-center p-6">
                  <span class="text-3xl font-semibold">3</span>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    `,
  }),
};

export const WithImages: Story = {
  render: (args) => ({
    components: { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious },
    setup() {
      return { args };
    },
    template: `
      <div class="flex items-center justify-center p-4">
        <Carousel v-bind="args" class="w-full max-w-xs">
          <CarouselContent>
            <CarouselItem>
              <div class="p-1">
                <div class="flex aspect-square items-center justify-center p-6 bg-gray-100">
                  <span class="text-3xl font-semibold">Image 1</span>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div class="p-1">
                <div class="flex aspect-square items-center justify-center p-6 bg-gray-200">
                  <span class="text-3xl font-semibold">Image 2</span>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div class="p-1">
                <div class="flex aspect-square items-center justify-center p-6 bg-gray-300">
                  <span class="text-3xl font-semibold">Image 3</span>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    `,
  }),
}; 