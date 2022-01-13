import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Vacancy from "../views/Vacancy.vue";
import DetailJob from "../views/DetailJob.vue";
import Event from "../views/Event.vue";
import News from "../views/News.vue";
import TracerStudy from "../views/TracerStudy.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/vacancy",
    name: "Vacancy",
    component: Vacancy,
  },
  {
    path: "/vacancy/:id",
    name: "DetailJob",
    component: DetailJob,
  },
  {
    path: "/event",
    name: "Event",
    component: Event,
  },
  {
    path: "/news",
    name: "News",
    component: News,
  },
  {
    path: "/tracerstudy",
    name: "TracerStudy",
    component: TracerStudy,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
