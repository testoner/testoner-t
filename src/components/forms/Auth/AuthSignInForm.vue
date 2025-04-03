<script setup lang="ts">
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from 'vue-sonner';
import { Eye, EyeOff } from "lucide-vue-next";
import { useForm } from "vee-validate";
import { ref } from "vue";
import * as yup from 'yup';

const formSchema = yup.object({
  username: yup
    .string()
    .required("Имя пользователя обязательно")
    .min(8, "Имя пользователя должно содержать минимум 8 символов")
    .max(15, "Имя пользователя не должно превышать 15 символов")
    .matches(
      /^[a-zA-Z0-9_@.]+$/,
      "Имя пользователя может содержать только буквы, цифры, подчеркивание, @ и точку"
    ),
  password: yup
    .string()
    .required("Пароль обязателен")
    .min(8, "Пароль должен содержать минимум 8 символов")
    .max(20, "Пароль не должен превышать 20 символов"),
});

const { isFieldDirty, handleSubmit } = useForm({
  validationSchema: formSchema,
});

const showPassword = ref(false);

const onSubmit = handleSubmit(
  (values) => {
    toast.success("Форма успешно отправлена", {
      description: JSON.stringify(values, null, 2),
    });
  },
  (errors) => {
    toast.error("Ошибка валидации", {
      description: JSON.stringify(Object.values(errors), null, 2),
    });
  }
);
</script>

<template>
  <form class="space-y-6" @submit="onSubmit">
    <FormField
      v-slot="{ componentField }"
      name="username"
      :validate-on-blur="!isFieldDirty"
    >
      <FormItem>
        <FormLabel>Имя пользователя/Email</FormLabel>
        <FormControl>
          <Input
            type="text"
            placeholder="User12/email@test.com"
            v-bind="componentField"
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    <FormField
      v-slot="{ componentField }"
      name="password"
      :validate-on-blur="!isFieldDirty"
    >
      <FormItem>
        <FormLabel>Пароль</FormLabel>
        <FormControl>
          <div class="relative">
            <Input
              :type="showPassword ? 'text' : 'password'"
              placeholder="Введите ваш пароль"
              v-bind="componentField"
            />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              class="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
              @click="showPassword = !showPassword"
            >
              <Eye v-if="!showPassword" class="h-4 w-4" />
              <EyeOff v-else class="h-4 w-4" />
            </Button>
          </div>
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    <Button type="submit"> Войти </Button>
  </form>
</template>
