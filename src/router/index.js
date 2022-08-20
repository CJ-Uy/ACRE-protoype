import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";
import AboutView from "../views/About.vue";
import PlantBaseView from "../views/PlantBase.vue";
import FarmDashView from "../views/farm_views/FarmDash.vue";
import ContactView from "../views/Contact.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/plant_base",
    name: "plantBase",
    component: PlantBaseView,
  },
  {
    path: "/farm/dashboard",
    name: "farm/dashboard",
    component: FarmDashView,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
