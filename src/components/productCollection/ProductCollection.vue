<script setup lang="ts">
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import ProductCard from "../productCard/ProductCard.vue";
import { defineProps, withDefaults } from "vue";
import type { ProductCardInterface } from "../productCard";

interface Props {
    heading?: string;
    products: ProductCardInterface[],
}

withDefaults(defineProps<Props>(), {
    heading: '',
});
</script>

<template>
    <h2 v-if="heading"
        class="scroll-m-20 border-b pb-2 text-5xl font-semibold tracking-tight transition-colors first:mt-0">
        {{ heading }}
    </h2>
    <Carousel class="w-full" :opts="{
        align: 'start',
    }">
        <CarouselContent class="-ml-1">
            <CarouselItem v-for="(product, index) in products" :key="product.heading+index" class="pl-1 md:basis-1/2 lg:basis-1/3">
                <div class="p-1">
                    <ProductCard v-bind="product">
                    </ProductCard>
                </div>
            </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
    </Carousel>
</template>
