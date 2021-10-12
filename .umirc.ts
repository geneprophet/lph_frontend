import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  title: 'LPH-BIG',
  routes: [
    { path: '/',
      component: '@/layouts/index' ,
      breadcrumbName:'Home',
      routes:[
        {
          path:'/',
          component:'@/pages/index',
          breadcrumbName: 'Home',
        },
        {
          path: '/home',
          component: '@/pages/index',
          breadcrumbName: 'Home',
        },
        {
          path: '/research',
          component: '@/pages/Research',
          breadcrumbName: 'Research',
        },
        {
          path: '/software',
          component: '@/pages/Software',
          breadcrumbName: 'Software',
        },
        {
          path: '/publication',
          component: '@/pages/Publication',
          breadcrumbName: 'Publication',
        },
        {
          path: '/member',
          component: '@/pages/Member',
          breadcrumbName: 'Member',
        },
        {
          path: '/join',
          component: '@/pages/Join',
          breadcrumbName: 'Join',
        },
        {
          path: '/contact',
          component: '@/pages/Contact',
          breadcrumbName: 'Contact',
        },
      ]},
  ],
  fastRefresh: {},
});
