import { createRouter, createWebHistory } from "vue-router";
import Home from '/src/components/Home.vue'
import Note from '/src/components/Note.vue'
import Profile from '/src/components/Profile.vue'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/note',
        name: 'Note',
        component: Note,
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile,
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router