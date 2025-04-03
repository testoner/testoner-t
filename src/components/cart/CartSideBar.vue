<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/stores/cart";
import CartProductCard from "./CartProductCard.vue";
import { X } from "lucide-vue-next";

const cart = useCartStore();

</script>

<template>
    <Button @click="cart.switchCartModalStatus"> Корзина ({{ cart.getCountOfItems }}) </Button>
    <Transition name="fade">
        <div v-if="cart.getCartModalStatus" class="fixed left-0 top-0 z-40 w-full h-full bg-[#00000087] overflow-hidden"
            @click.self="cart.switchCartModalStatus">
            <Transition name="slide">
                <div v-if="cart.getCartModalStatus" class="w-[50%] h-full z-50 absolute top-0 right-0 bg-gray-50 shadow-md p-5 flex flex-col justify-between">
                    <div class="flex justify-between">
                        <p class="text-2xl"><b>Корзина:</b></p>
                        <Button size="icon" variant="outline" @click="cart.switchCartModalStatus">
                            <X></X>
                        </Button>
                    </div>
                    <div class="h-[78%] flex flex-col gap-5 overflow-y-scroll bg-white p-5 rounded-xl inset-shadow-sm"
                        v-if="cart.getCountOfItems">
                        <CartProductCard v-bind="item"
                            v-for="(item, index) in cart.getItems" :key="index"></CartProductCard>
                    </div>
                    <div v-else>
                        <h3 class="text-center text-3xl">Корзина пуста</h3>
                    </div>
                    <div class="flex flex-col gap-5">
                        <p class="text-2xl">Итого:</p>
                        <Button size="lg">К заказу</Button>
                    </div>
                </div>
            </Transition>
        </div>
    </Transition>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
    transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
    transform: translateX(100%);
}
</style>