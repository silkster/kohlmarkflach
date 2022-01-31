import { createRouter, createWebHistory } from 'vue-router';
import Contact from '@/views/Contact.vue';
import About from '@/views/About.vue';
import Home from '@/views/Home.vue';

import Team from '@/views/Team.vue';
import Portfolio from '@/views/Portfolio.vue';
import ProjectContent from '@/components/ProjectContent/ProjectContent.vue';

import namedRoutes from './namedRoutes.js';

export const routes = [
  {
    ...namedRoutes.home,
    component: Home,
    meta: {
      header: { isFixed: true },
    },
  },
  {
    name: 'Portfolio',
    path: '/portfolio/:pagetype',
    component: Portfolio,
    props: true,
    meta: {
      logo: 'small',
      header: { isFixed: false, isWhite: true },
    },
    children: [
      {
        name: 'project',
        path: ':id-:slug',
        component: ProjectContent,
        props: true,
        meta: {
          logo: 'small',
          header: { isWhite: false, isAbsolute: true },
        },
      },
    ],
  },
  {
    ...namedRoutes.about,
    component: About,
    meta: {
      logo: 'small',
      header: {
        isFixed: false,
        isWhite: true,
      },
    },
  },
  {
    ...namedRoutes.team,
    component: Team,
    meta: {
      logo: 'small',
      header: {
        isFixed: false,
        isWhite: true,
      },
    },
  },
  {
    ...namedRoutes.contact,
    component: Contact,
    meta: {
      logo: 'small',
      header: {
        isWhite: true,
      },
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(() => {
  window.scroll({
    top: 0,
    behavior: 'smooth',
  });
});

export default router;
