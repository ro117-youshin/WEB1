import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/voting",
    name: "voting",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/VotingView.vue"),
  },
  {
    path: "/result",
    name: "result",
    component: () =>
      import(/* webpackChunkName: "result" */ "../views/ResultView.vue"),
  },
  {
    path: "/resultDetail",
    name: "resultDetail",
    component: () =>
      import(/* webpackChunkName: "resultDetail" */ "../views/ResultDetailView.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
