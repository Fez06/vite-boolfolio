import { createRouter, createWebHistory } from "vue-router";

import AppHome from './pages/AppHome.vue';
import AppBlog from './pages/AppBlog.vue';
import AppAbout from './pages/AppAbout.vue';
import ProjectPage from './pages/ProjectPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/about',
            name: 'about',
            component: AppAbout
        },
        {
            path: '/blog',
            name: 'blog',
            component: AppBlog
        },
        {
            path: '/about/:slug',
            name: 'project',
            component: ProjectPage
        },
    ]
})

export { router };