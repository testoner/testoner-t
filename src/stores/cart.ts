import { defineStore } from 'pinia'

interface CartItem {
  name: string;
  price: number;
  packing: number;
}

export interface CartItemInStore {
  name: string;
  price: number;
  count: number;
}

interface CartState {
  rawItems: Record<string, CartItemInStore>;
  cartModal: boolean;
}

interface CartGetters {
  getCartModalStatus: (state: CartState) => boolean;
  getItems: (state: CartState) => Record<string, CartItemInStore>;
  getCountOfItems: (state: CartState) => number;
  [key: string]: (state: CartState) => boolean | Record<string, CartItemInStore> | number;
}

interface CartActions {
  switchCartModalStatus: () => void;
  addItem: (item: CartItem) => void;
  removeItem: (item: { name: string; packing: number }) => void;
  updateItemCount: (name: string, count: number) => void;
}

export const useCartStore = defineStore<'cart', CartState, CartGetters, CartActions>('cart', {
  state: (): CartState => ({
    rawItems: {},
    cartModal: false,
  }),
  getters: {
    getCartModalStatus(state: CartState): boolean {
      return state.cartModal;
    },
    getItems(state: CartState): Record<string, CartItemInStore> {
      return state.rawItems;
    },
    getCountOfItems(state: CartState): number {
      return Object.keys(state.rawItems).length;
    },
  },
  actions: {
    switchCartModalStatus(): void {
      this.cartModal = !this.cartModal;
    },
    
    addItem(item: CartItem): void {
      const existingItem = this.rawItems[item.name];
      if (existingItem) {
        existingItem.count += item.packing;
      } else {
        this.rawItems[item.name] = {
          name: item.name,
          price: item.price,
          count: item.packing
        };
      }
    },

    removeItem({ name, packing }: { name: string; packing: number }): void {
      const currentItem = this.rawItems[name];
      if (currentItem) {
        if (currentItem.count > packing) {
          currentItem.count -= packing;
        } else {
          this.rawItems = Object.fromEntries(
            Object.entries(this.rawItems).filter(([key]) => key !== name)
          );
        }
      }
    },

    updateItemCount(name: string, count: number): void {
      const item = this.rawItems[name];
      if (item) {
        if (count <= 0) {
          this.rawItems = Object.fromEntries(
            Object.entries(this.rawItems).filter(([key]) => key !== name)
          );
        } else {
          item.count = count;
        }
      }
    },
  },
  persist: {
    pick: ['rawItems'],
  }
});