<script lang="ts" setup>
import Button from "@/components/ui/button/Button.vue";
import { Heart } from "lucide-vue-next";
import { Card, CardContent } from "@/components/ui/card";
import { computed, defineProps, ref, withDefaults } from "vue";
import SelectUi from "../ui/select/SelectUi.vue";
import { createGroupOptions } from "@/lib/utils";
import type { option } from "../ui/select";
import type { ProductCardInterface } from ".";
import { useCartStore } from "@/stores/cart";
import { toast } from 'vue-sonner';

interface Props extends ProductCardInterface {
    link: string,
}

const props = withDefaults(defineProps<Props>(), {});

const cart = useCartStore();

const select = ref();


const transformPackingForOptions = computed<option[]>(() => {
    return props.packing.map((el) => ({ value: el, name: `${el} гр` }))
})

const getGroupOptions = createGroupOptions([['', transformPackingForOptions.value]])


const isSelectValid = computed(() => {
    return select.value !== undefined && select.value !== '';
});

const addProductToCart = () => {
    if (!isSelectValid.value) return;
    
    const obj = {
        name: props.heading,
        price: props.price,
        packing: select.value,
    }
    cart.addItem(obj);

    toast(`${obj.name} добавлен в корзину`, {
        description: `${obj.packing} грамма`,
        action: {
            label: 'Отменить',
            onClick: () => {
                cart.removeItem(obj);
                toast('Товар удален из корзины', {
                    description: `${obj.name} (${obj.packing} гр)`,
                });
            },
        },
    })
}
</script>

<template>
    <Card class="overflow-hidden">
        <CardContent class="min-h-3 p-0">
            <img :src="link" alt="" />
            <div class="flex items-start justify-center w-full flex-col gap-6 p-5">
                <h4 class="text-2xl"><b>{{ heading }}</b></h4>
                <p class="leading-7 card-text">{{ text }}</p>
                <SelectUi v-model="select" placeholder="Выберите количество:" :groupOptions="getGroupOptions">
                </SelectUI>
                <div class="flex justify-between w-full">
                    <p class="leading-7 text-2xl">Цена:</p>
                    <p class="leading-7 text-2xl"><b>{{ price }}{{ typeOfMoney }}</b></p>
                </div>
                <div class="flex justify-between w-full align-middle">
                    <Button size="icon" variant="ghost">
                        <Heart></Heart>
                    </Button>
                    <Button @click="addProductToCart" :disabled="!isSelectValid">Добавить в корзину</Button>
                </div>
            </div>
        </CardContent>
    </Card>
</template>

<style scoped>
.card-text {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>