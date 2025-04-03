<script lang="ts" setup>
import HeaderMenu from "./HeaderMenu.vue";
import HeaderSearch from "./HeaderSearch.vue";
import HeaderAuthModal from "../../modals/header/HeaderAuthModal.vue";
import CartSideBar from "@/components/cart/CartSideBar.vue";

</script>

<template>
  <header class="flex justify-between items-center sticky z-50 top-0 bg-white">
    <div class="login-btns flex gap-2"> 
      <a href="" class="flex items-center gap-2">
      <img src="@/assets/teashop-logo.png" alt="" width="60" height="60" class="overflow-hidden rounded-full" />
      <p class="text-sm font-medium leading-none">Чайная лавка</p>
    </a>
    <HeaderMenu></HeaderMenu>
  </div>
    <HeaderSearch></HeaderSearch>
    <div class="login-btns flex gap-2">
      <CartSideBar></CartSideBar>
      <HeaderAuthModal></HeaderAuthModal>
    </div>
  </header>
</template>
