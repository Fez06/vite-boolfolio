import { createRouter, createWebHistory } from "vue-router";

import AppHome from './pages/Home.vue';
import AppBlog from './pages/Blog.vue';
import AppAbout from './pages/About.vue';
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