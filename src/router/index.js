import { createRouter, createWebHashHistory } from 'vue-router'
import About from '../views/About/index.vue'
import Home from '../views/Home/index.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
