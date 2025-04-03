<script setup lang="ts">
    import {
        Select,
        SelectContent,
        SelectGroup,
        SelectItem,
        SelectLabel,
        SelectTrigger,
        SelectValue,
    } from '@/components/ui/select'
    import { defineProps, withDefaults, defineModel } from 'vue';

    import type { groupOption } from '@/components/ui/select';

    interface Props{
        placeholder?: string,
        groupOptions: groupOption[],
    }

    withDefaults(defineProps<Props>(),{
        placeholder: '',
    });

    const selectValue = defineModel();
</script>

<template>
  <Select v-model="selectValue">
    <SelectTrigger>
      <SelectValue v-if="placeholder" :placeholder="placeholder" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup v-for="(group, groupIndex) in groupOptions" :key="group.name + groupIndex" >
        <SelectLabel v-if="group.name">{{ group.name }}</SelectLabel>
        <SelectItem v-for='(option, optionIndex) in group.options' :key='option.name+optionIndex' :value="option.value">
          {{ option.name }}
        </SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>