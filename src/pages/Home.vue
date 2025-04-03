<script setup lang="ts">
import Slider from "@/components/slider/Slider.vue";
import ContentBlock from "@/components/contentBlock/ContentBlock.vue";
import ProductCollection from "@/components/productCollection/ProductCollection.vue";
import { mostPopularProducts, sliderMocks } from "@/mocks/mocks";

const contentBlockHeading: string = "Откройте для себя мир чая";
const contentBlockText: string = `Погрузитесь в атмосферу комфорта и гармонии с нашим эксклюзивным ассортиментом чая. Мы предлагаем
                только самые лучшие сорта, собранные с любовью и заботой. Каждый глоток - это путешествие в далекие
                уголки мира, где природа и традиции создают уникальные ароматы и вкусы. Наслаждайтесь моментом и
                выберите свой идеальный чай для любого времени суток.`;
const contentBlockLink1: string = 'images/teashop2.webp';
const contentBlockLink2: string = 'images/teashop8.webp';

const productCollectionHeading = "Популярные позиции";
</script>

<template>
  <Slider :slides="sliderMocks"></Slider>
  <ContentBlock :link="contentBlockLink1" :heading="contentBlockHeading" :text="contentBlockText"></ContentBlock>
  <ProductCollection :heading="productCollectionHeading" :products="mostPopularProducts"></ProductCollection>
  <ContentBlock :link="contentBlockLink2" :heading="contentBlockHeading" :text="contentBlockText" text-position="right"></ContentBlock>
</template>
