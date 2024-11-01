import HomeView from '@/views/HomeView';
import CharacterDetail from '@/views/CharacterDetail';
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: "Dragon Ball Home",
        component: HomeView
    },
    { path: '/character/:id', component: CharacterDetail, name: 'character' },
    { path: '/:pathMatch(.*)*', redirect: '/home' }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;