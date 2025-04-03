<script setup lang="ts">
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { defineProps } from "vue";

interface Props{
  slides: string[],
}

defineProps< Props >();

</script>

<template>
  <Carousel
    class="w-full"
    :opts="{
      align: 'start',
    }"
  >
    <CarouselContent class="-ml-1">
      <CarouselItem
        v-for="(link, index) in slides"
        :key="index+link"
        class="pl-1 md:basis-1/2 lg:basis-full"
      >
        <div class="p-1">
          <Card class="overflow-hidden">
            <CardContent
              class="items-center p-0 flex justify-center w-full max-h-[500px]"
            >
              <img :src="link" alt="" class="w-full h-full object-cover">
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
</template>
