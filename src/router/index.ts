import { createRouter, createWebHistory } from "vue-router";
const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../components/Home.vue'),
    },
    {
        path: '/note',
        name: 'Note',
        component: () => import('../components/Note.vue'),
    },
    {
        path: '/profile',
        name: 'Profile',
        component: () => import('../components/Profile.vue'),
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'Missing Page',
        component: () => import('../components/MissingPage.vue'),
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router