<script setup lang="ts">
import { Button } from "@/components/ui/button";
import HeaderAuthTab from "@/components/header/HeaderAuthTab.vue";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
</script>

<template>
  <Dialog>
    <DialogTrigger as-child>
      <Button variant="outline"> Вход/Регистрация </Button>
    </DialogTrigger>
    <DialogContent class="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Вход / Регистрация</DialogTitle>
      </DialogHeader>
      <HeaderAuthTab></HeaderAuthTab>
    </DialogContent>
  </Dialog>
</template>
