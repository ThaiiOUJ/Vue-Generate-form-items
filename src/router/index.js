import { createRouter, createWebHistory } from "vue-router";

import HomeViews from "@/views/HomeViews.vue";
import AddSale from "@/views/AddSale.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeViews,
    },
    {
      path: "/addsale",
      name: "sale",
      component: AddSale,
    },
  ],
});

export default router;
