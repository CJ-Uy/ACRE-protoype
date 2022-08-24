import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";
import AboutView from "../views/About.vue";
import PlantBaseView from "../views/PlantBase.vue";
import FarmDashView from "../views/farm_views/FarmDash.vue";
import ContactView from "../views/Contact.vue";
//Farm Views
import Farm3DView from "../views/farm_views/Farm3D.vue";
import FarmCalendarView from "../views/farm_views/FarmCal.vue";
import FarmInventoryView from "../views/farm_views/FarmInv.vue";

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
  //Farm routers
  {
    path: "/farm/3D-View",
    name: "farm/3D-View",
    component: Farm3DView,
  },
  {
    path: "/farm/calendar",
    name: "farm/calendar",
    component: FarmCalendarView,
  },
  {
    path: "/farm/inventory",
    name: "farm/inventory",
    component: FarmInventoryView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
