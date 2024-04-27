import { createRouter, createWebHashHistory } from "vue-router";
// import HomeComponent from "../pages/home.vue";

const routes=[
    {
        path:'/',
        redirect: "/home",
    },
    {
        path:'/home',
        component: () => import("../pages/home.vue")
        // component: HomeComponent,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
  });

export default router;