import type { Meta, StoryObj } from '@storybook/vue3';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from '../components/ui/navigation-menu';

const meta = {
  title: 'UI/NavigationMenu',
  component: NavigationMenu,
  tags: ['autodocs'],
  argTypes: {
    class: {
      control: 'text',
    },
  },
} satisfies Meta<typeof NavigationMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink },
    setup() {
      return { args };
    },
    template: `
      <NavigationMenu v-bind="args">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Products</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div class="grid gap-3 p-6 w-[400px]">
                <NavigationMenuLink class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                  <div class="text-sm font-medium leading-none">Green Tea</div>
                  <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    Discover our collection of premium green teas from Japan and China.
                  </p>
                </NavigationMenuLink>
                <NavigationMenuLink class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                  <div class="text-sm font-medium leading-none">Black Tea</div>
                  <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    Rich and bold black teas from various regions around the world.
                  </p>
                </NavigationMenuLink>
                <NavigationMenuLink class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                  <div class="text-sm font-medium leading-none">Herbal Tea</div>
                  <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    Natural and caffeine-free herbal infusions for relaxation.
                  </p>
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>About</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div class="grid gap-3 p-6 w-[400px]">
                <NavigationMenuLink class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                  <div class="text-sm font-medium leading-none">Our Story</div>
                  <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    Learn about our journey and commitment to quality tea.
                  </p>
                </NavigationMenuLink>
                <NavigationMenuLink class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                  <div class="text-sm font-medium leading-none">Tea Culture</div>
                  <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    Explore the rich history and traditions of tea drinking.
                  </p>
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Contact</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div class="grid gap-3 p-6 w-[400px]">
                <NavigationMenuLink class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                  <div class="text-sm font-medium leading-none">Support</div>
                  <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    Get help with your orders and tea-related questions.
                  </p>
                </NavigationMenuLink>
                <NavigationMenuLink class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                  <div class="text-sm font-medium leading-none">Wholesale</div>
                  <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    Partner with us for your business needs.
                  </p>
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    `,
  }),
};

export const Simple: Story = {
  render: (args) => ({
    components: { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger },
    setup() {
      return { args };
    },
    template: `
      <NavigationMenu v-bind="args">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Home</NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>About</NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Contact</NavigationMenuTrigger>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    `,
  }),
}; 