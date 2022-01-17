import { createRouter, createWebHistory } from "vue-router";
const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../components/Home.vue'),
    },
    {
        path: '/todo',
        name: 'Todo',
        component: () => import('../components/Todo.vue'),
    },
    {
        path: '/calculator',
        name: 'Calculator',
        component: () => import('../components/Calculator.vue'),

    },
    {
        path: '/vuexPractice',
        name: 'VuexPractice',
        component: () => import('../components/VuexPractice.vue'),

    },
    {
     path: '/checkoutForm',
        name: 'CheckoutForm',
        component: () => import('../components/CheckoutForm.vue'),

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
        path: '/learning',
        name: 'Learning',
        component: () => import('../components/Learning.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'Missing Page',
        component: () => import('../components/NotFound.vue'),
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router