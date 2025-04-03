import { createMemoryHistory, createRouter } from "vue-router";

import Home from "@/pages/Home.vue";
import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [{ path: "/", component: Home }];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
