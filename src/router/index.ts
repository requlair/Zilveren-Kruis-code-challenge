import {
    createRouter,
    createWebHistory,
    type RouteRecordRaw
} from 'vue-router';
import registerPage from '../pages/register/register-page.vue';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: registerPage
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes
});

export default router;
