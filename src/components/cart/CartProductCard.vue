<script lang="ts" setup>
    import { Button } from "@/components/ui/button";
    import Card from "@/components/ui/card/Card.vue";
    import { defineProps, ref, onMounted } from "vue";
    import Input from "../ui/input/Input.vue";
    import { X, Plus, Minus } from "lucide-vue-next";
    import { useCartStore } from "@/stores/cart";

    interface Props {
        name: string, 
        count: number,
        price: number,
    }

    const props = defineProps<Props>();
    const cart = useCartStore();
    const inputValue = ref(props.count);

    const updateCount = (newCount: number) => {
        if (newCount < 0) return;
        cart.updateItemCount(props.name, newCount);
    };

    const increment = () => {
        const newValue = Number(inputValue.value) + 1;
        inputValue.value = newValue;
        updateCount(newValue);
    };

    const decrement = () => {
        if (Number(inputValue.value) > 0) {
            const newValue = Number(inputValue.value) - 1;
            inputValue.value = newValue;
            updateCount(newValue);
        }
    };

    const handleInput = (event: Event) => {
        const target = event.target as HTMLInputElement;
        const value = parseInt(target.value);
        if (!isNaN(value) && value >= 0) {
            updateCount(value);
        }
    };

    const removeItem = () => {
        cart.removeItem({
            name: props.name,
            packing: Number(inputValue.value)
        });
    };

    onMounted(() => {
        inputValue.value = props.count;
    });
</script>

<template>
    <Card class="overflow-hidden min-h-[350px] grid grid-cols-2">
        <img src="/images/teashop9.webp" alt="" class="h-full w-full object-cover">
        <div class="p-5 relative flex justify-center align-center flex-col gap-2">
            <Button size="icon" class="absolute right-5 top-5" @click="removeItem">
                <X></X>
            </Button>
            <h3>Название: <b class="text-xl">{{ name }}</b></h3>
            <p class="text-sm">Грамовка: <b>1</b> Мг</p>
            <div class="flex gap-1">
                <Button size="icon" @click="decrement" :disabled="Number(inputValue) <= 0">
                    <Minus></Minus>
                </Button>
                <Input 
                    class="max-w-[50px] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" 
                    v-model="inputValue"
                    @input="handleInput"
                    type="number"
                    min="0"
                ></Input>
                <Button size="icon" @click="increment">
                    <Plus></Plus>
                </Button>
            </div>
            <p>Цена: <b class="text-xl">{{ price * Number(inputValue) }} Бун</b></p>
        </div>
    </Card>
</template>