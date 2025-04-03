<script setup lang="ts">
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Чёрный чай",
    href: "/catalog/black-tea",
    description:
      "Полностью окисленный, насыщенный вкус с терпкостью. Популярные сорта: Ассам, Дарджилинг, Эрл Грей.",
  },
  {
    title: "Зелёный чай",
    href: "/catalog/green-tea",
    description:
      "Минимальная обработка, свежий травянистый вкус. Богат антиоксидантами. Примеры: Сенча, Матча, Лунцзин.",
  },
  {
    title: "Улун (Оолонг)",
    href: "/catalog/oolong-tea",
    description: "Частично окисленный, сложный вкус – от цветочного до древесного. Знаменитые сорта: Те Гуань Инь, Да Хун Пао.",
  },
  {
    title: "Белый чай",
    href: "/catalog/white-tea",
    description: "Нежные молодые листья, слабый процесс окисления. Лёгкий, слегка сладковатый вкус. Примеры: Бай Хао Инь Чжэнь, Шоу Мэй.",
  },
  {
    title: "Пуэр",
    href: "/catalog/pu-erh-tea",
    description:
      "Ферментированный чай, выдержанный годами. Землистый, глубокий вкус. Бывает шэн (сырой) и шу (готовый).",
  },
  {
    title: "Травяные и фруктовые чаи",
    href: "/catalog/herbal-and-fruit-tea",
    description:
      "Не содержат чайных листьев, только травы, цветы, фрукты. Ромашка, мята, каркаде, чай с шиповником.",
  },
];
</script>

<template>
  <NavigationMenu>
    <NavigationMenuList>
      
      <NavigationMenuItem>
        <NavigationMenuTrigger>Каталог</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul
            class="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]"
          >
            <li v-for="component in components" :key="component.title">
              <NavigationMenuLink as-child>
                <a
                  :href="component.href"
                  class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                >
                  <div class="text-sm font-medium leading-none">
                    {{ component.title }}
                  </div>
                  <p
                    class="line-clamp-2 text-sm leading-snug text-muted-foreground"
                  >
                    {{ component.description }}
                  </p>
                </a>
              </NavigationMenuLink>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
</template>
