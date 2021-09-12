import Vue from "vue";
import VueRouter from "vue-router";
import NotFound from "../views/NotFound.vue";
import SignIn from "../views/SignIn.vue";
import Schedules from '../views/Schedules.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/signin",
    name: "sign-in",
    component: SignIn,
  },
  {
    path: "/signup",
    name: "sign-up",
    component: () => import("../views/SignUp.vue"),
  },
  {
    path: '/new',
    name: 'new',
    component: () => import('../views/NewTodo.vue')
  },
  {
    path: '/detailTodo',
    name: 'detailTodo',
    component: () => import('../views/detailTodo.vue')
  },
  {
    path: '/editTodo',
    name: 'editTodo',
    component: () => import('../views/editTodo.vue')
  },
  {
    path: '/schedules',
    name: 'schedules',
    component: Schedules
  },
  {
    path: "*",
    name: "not-found",
    component: NotFound,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
