<script setup lang="ts">
import Card from "@/components/ui/card/Card.vue";
import { defineProps, computed, withDefaults } from "vue";

interface Props {
  textPosition?: "left" | "right";
  heading: string;
  text: string;
  link: string;
}

const props = withDefaults(defineProps<Props>(), { textPosition: "left" });

const isTextPositionRight = computed<boolean>(
  () => props.textPosition === "right",
);
</script>
<template>
  <div class="grid grid-cols-2">
    <div
      class="pr-8 order-0"
      :class="{ 'order-1 pr-0 pl-8': isTextPositionRight }"
    >
      <h2
        class="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
      >
        {{ heading }}
      </h2>
      <p class="leading-7 [&:not(:first-child)]:mt-6">
        {{ text }}
      </p>
    </div>
    <Card class="overflow-hidden max-h-[400px]">
      <img :src="link" alt="" class="h-full w-full object-cover">
    </Card>
  </div>
</template>
