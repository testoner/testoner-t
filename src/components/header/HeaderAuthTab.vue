<script setup lang="ts">
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AuthSignInForm from "@/components/forms/Auth/AuthSignInForm.vue";
import AuthSignUpForm from "@/components/forms/Auth/AuthSignUpForm.vue";
</script>

<template>
  <Tabs default-value="account" class="">
    <TabsList class="grid w-full grid-cols-2">
      <TabsTrigger value="account"> Вход </TabsTrigger>
      <TabsTrigger value="password"> Регистрация </TabsTrigger>
    </TabsList>
    <TabsContent value="account">
      <Card>
        <CardHeader>
          <CardTitle>Вход в аккаунт</CardTitle>
          <CardDescription>
            Введите email или имя пользвателя и пароь
          </CardDescription>
        </CardHeader>
        <CardContent class="space-y-2">
          <AuthSignInForm></AuthSignInForm>
        </CardContent>
      </Card>
    </TabsContent>
    <TabsContent value="password">
      <Card>
        <CardHeader>
          <CardTitle>Регистрация</CardTitle>
          <CardDescription>
            Введите вашу почту к которой у вас есть доступ и придумайте пароль.
          </CardDescription>
        </CardHeader>
        <CardContent class="space-y-2">
          <AuthSignUpForm></AuthSignUpForm>
        </CardContent>
      </Card>
    </TabsContent>
  </Tabs>
</template>
