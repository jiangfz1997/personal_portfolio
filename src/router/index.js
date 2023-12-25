// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Intro from '../components/Intro.vue';
import Resume from '../components/Resume.vue';
import Projects from '../components/Projects.vue';

const routes = [
  {
    path: '/intro',
    name: 'Intro',
    component: Intro
  },
  {
    path: '/resume',
    name: 'Resume',
    component: Resume
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;